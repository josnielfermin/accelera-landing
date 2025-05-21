import { createConfig } from "wagmi";
import { Address, erc20Abi, maxUint256 } from "viem";
import { getBalance, multicall, readContract } from "@wagmi/core";
import SupportedChainIds from "../types/supported-chain-ids.enum";
import { wagmiConfig } from "../constants/wagmi-config";
import { Token } from "@cryptoalgebra/integral-sdk";
import { NATIVE_CURRENCY_ADDRESS } from "../constants/addresses";
import { requestWithRepeatDelay } from "../utils/request";

const TokensRpc = {
  buildApproveReq(
    token: Address,
    externalAddress: Address,
    amount: bigint
  ): any {
    return {
      abi: erc20Abi,
      address: token,
      functionName: "approve", // done
      args: [externalAddress, amount],
    };
  },
  // async methods
  async getTokenDecimals(
    chainId: SupportedChainIds,
    token: Address
  ): Promise<number> {
    try {
      return await readContract(wagmiConfig, {
        address: token,
        abi: erc20Abi,
        functionName: "decimals",
      });
    } catch (e) {
      console.error("Error fetching token decimals:", e);
      throw e;
    }
  },
  async getTokenSymbol(
    chainId: SupportedChainIds,
    token: Address
  ): Promise<string> {
    try {
      return await readContract(wagmiConfig, {
        address: token,
        abi: erc20Abi,
        functionName: "symbol",
      });
    } catch (e) {
      console.error("Error fetching token symbol:", e);
      throw e;
    }
  },
  async getTokenName(
    chainId: SupportedChainIds,
    token: Address
  ): Promise<string> {
    try {
      return await readContract(wagmiConfig, {
        address: token,
        abi: erc20Abi,
        functionName: "name",
      });
    } catch (e) {
      console.error("Error fetching token name:", e);
      throw e;
    }
  },
  async getTokensTotalSupply(
    chainId: SupportedChainIds,
    tokens: Address[]
  ): Promise<{ [key: Address]: bigint }> {
    try {
      const res = (await requestWithRepeatDelay(
        () =>
          multicall(wagmiConfig, {
            contracts: tokens.map((token) => ({
              address: token,
              abi: erc20Abi,
              functionName: "totalSupply",
            })),
          }),
        5,
        1500
      )) as { result: bigint }[];

      return res.reduce(
        (all, { result }, i) => ({
          ...all,
          [tokens[i].toLowerCase()]: result || 0n,
        }),
        {} as { [key: Address]: bigint }
      );
    } catch (e) {
      console.error("Error fetching user tokens total supply:", e);
      throw e;
    }
  },
  async getTokenTotalSupply(
    chainId: SupportedChainIds,
    token: Address
  ): Promise<bigint> {
    return (await this.getTokensTotalSupply(chainId, [token]))[
      token.toLowerCase() as Address
    ];
  },
  async getToken(chainId: SupportedChainIds, address: Address): Promise<Token> {
    try {
      const [decimals, symbol, name] = await Promise.all([
        this.getTokenDecimals(chainId, address),
        this.getTokenSymbol(chainId, address),
        this.getTokenName(chainId, address),
      ]);

      return new Token(chainId, address, decimals, symbol, name);
    } catch (e) {
      console.error("Error fetching token:", e);
      throw e;
    }
  },
  async getTokenAllowances(
    chainId: SupportedChainIds,
    owner: Address,
    spender: Address,
    tokens: Address[]
  ): Promise<{ [key: Address]: bigint }> {
    try {
      const tokenEthIndex = tokens.findIndex(
        (address) => address.toLowerCase() === NATIVE_CURRENCY_ADDRESS[chainId]
      );
      let res = (await requestWithRepeatDelay(
        () =>
          multicall(wagmiConfig, {
            contracts: tokens
              .filter(
                (address) =>
                  address.toLowerCase() !== NATIVE_CURRENCY_ADDRESS[chainId]
              )
              .map((token) => ({
                address: token,
                abi: erc20Abi,
                functionName: "allowance",
                args: [owner, spender],
              })),
          }),
        5,
        1500
      )) as { result: bigint }[];

      if (tokenEthIndex >= 0) {
        res = [
          ...res.slice(0, tokenEthIndex),
          { result: maxUint256 },
          ...res.slice(tokenEthIndex),
        ];
      }

      return res.reduce(
        (all, { result }, i) => ({
          ...all,
          [tokens[i].toLowerCase()]: result || 0n,
        }),
        {} as { [key: Address]: bigint }
      );
    } catch (e) {
      console.error("Error fetching user token allowances:", e);
      throw e;
    }
  },
  async getTokenAllowance(
    chainId: SupportedChainIds,
    owner: Address,
    spender: Address,
    token: Address
  ): Promise<bigint> {
    return (await this.getTokenAllowances(chainId, owner, spender, [token]))[
      token.toLowerCase() as Address
    ];
  },
  async getTokenBalances(
    chainId: SupportedChainIds,
    owner: Address,
    tokens: Address[]
  ): Promise<{ [key: Address]: bigint }> {
    try {
      const tokenEthIndex = tokens.findIndex(
        (address) => address.toLowerCase() === NATIVE_CURRENCY_ADDRESS[chainId]
      );

      let res = (await requestWithRepeatDelay(
        () =>
          multicall(wagmiConfig, {
            contracts: tokens
              .filter(
                (address) =>
                  address.toLowerCase() !== NATIVE_CURRENCY_ADDRESS[chainId]
              )
              .map((token) => ({
                abi: erc20Abi,
                address: token,
                functionName: "balanceOf",
                args: [owner],
              })),
          }),
        5,
        1500
      )) as { result: bigint }[];

      if (tokenEthIndex >= 0) {
        const eth = await requestWithRepeatDelay(
          () => getBalance(wagmiConfig, { address: owner }),
          5,
          1500
        );
        res = [
          ...res.slice(0, tokenEthIndex),
          { result: eth.value },
          ...res.slice(tokenEthIndex),
        ];
      }

      return res.reduce(
        (all, { result: balance }, i) => ({
          ...all,
          [tokens[i].toLowerCase()]: balance || 0n,
        }),
        {} as { [key: Address]: bigint }
      );
    } catch (error: any) {
      console.error("Error fetching user token balances:", error);
      throw error;
    }
  },
  async getTokenBalance(
    chainId: SupportedChainIds,
    owner: Address,
    token: Address
  ): Promise<bigint> {
    return (await this.getTokenBalances(chainId, owner, [token]))[
      token.toLowerCase() as Address
    ];
  },
};

export default TokensRpc;
