import { Address } from "viem";
import SupportedChainIds from "../types/supported-chain-ids.enum";
import { PREDEPOSIT_VAULT_ADDRESS } from "../constants/addresses";
import { preDepositVaultAbi } from "../constants/abis/pre-deposit-vault";

export const PreDepositRpc = {
  buildPreDepositReq: (
    chainId: SupportedChainIds,
    token: Address,
    amount: bigint
  ) => {
    return {
      address: PREDEPOSIT_VAULT_ADDRESS[chainId],
      abi: preDepositVaultAbi,
      functionName: "deposit",
      args: [token, amount],
    };
  },
};
