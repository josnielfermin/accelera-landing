import { createPublicClient, fallback, http } from 'viem';
import { mainnet, sepolia } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: fallback([
    http('https://ethereum.publicnode.com'),
    // http('https://mainnet.infura.io/v3/098c622631d0002b8dac693515f3b7d8'),
  ]),
});

export const testnetClient = createPublicClient({
  chain: sepolia,
  transport: fallback([
    // http('https://sepolia.infura.io/v3/098c622631d0002b8dac693515f3b7d8'),
    http('https://rpc.sepolia.org'),
  ]),
});
