import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';

// models
import MainConnectionInfo from '@/library/types/connection/main-connection-info';

interface ConnectionInfoWithProvider extends MainConnectionInfo {
  web3: JsonRpcProvider | Web3Provider;
}

export default ConnectionInfoWithProvider;
