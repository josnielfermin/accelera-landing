import { Chain } from "viem";
import SupportedChainIds from "../types/supported-chain-ids.enum";
import { wagmiConfig } from "../constants/wagmi-config";

export default function getChainById(chainId: SupportedChainIds): Chain {
  return wagmiConfig.chains.find((chain) => chain.id === chainId) as Chain;
}
