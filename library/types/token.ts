import { Address } from "viem";

export interface Token {
  address: Address;
  chainId: string;
  decimals: number;
  symbol: string;
  name: string;
}

export default Token;
