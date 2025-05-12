import { Address } from 'viem';

// models
import SupportedChainIds from '@/library/types/connection/supported-chain-ids.enum';

interface MainConnectionInfo {
  address: Address;
  chainId: SupportedChainIds;
}

export default MainConnectionInfo;
