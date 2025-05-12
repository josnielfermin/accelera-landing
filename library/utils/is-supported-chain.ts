// models
import SupportedChainIds from '@/library/types/connection/supported-chain-ids.enum';

function isSupportedChain(chain: any): boolean {
  switch (typeof chain) {
    case 'string':
      return Object.keys(SupportedChainIds).includes(chain);
    case 'bigint':
      chain = +chain.toString();
    case 'number':
      return Object.values(SupportedChainIds).includes(chain);
    default:
      return false;
  }
}

export default isSupportedChain;
