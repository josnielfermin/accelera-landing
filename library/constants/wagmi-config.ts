'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { mainnet } from 'wagmi/chains';
import { fallback, http, webSocket } from 'wagmi';

export const wagmiConfig = getDefaultConfig({
  appName: 'Accelera-Landing',
  projectId: '098c622631d0002b8dac693515f3b7d8',
  chains: [
    {
      ...mainnet,
      iconUrl: '/static/chains/mainnet.png',
    },
  ],
  transports: {
    [mainnet.id]: fallback(
      [
        // http('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'),  // RPC para la mainnet
        // webSocket('wss://mainnet.infura.io/ws/v3/YOUR_INFURA_PROJECT_ID'),  // WebSocket para la mainnet
      ],
      { retryCount: 5 }
    ),
  },
  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        rabbyWallet,
        walletConnectWallet,
        coinbaseWallet,
      ],
    },
    {
      groupName: 'Other',
      wallets: [trustWallet, ledgerWallet, argentWallet, rainbowWallet],
    },
  ],
  ssr: true,
});
