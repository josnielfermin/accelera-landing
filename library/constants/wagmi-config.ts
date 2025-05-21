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
  // walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { blastSepolia } from 'wagmi/chains';
import { createStorage, fallback, http, webSocket } from 'wagmi';

export const wagmiConfig = getDefaultConfig({
  appName: 'Accelera-Landing',
  projectId: '098c622631d0002b8dac693515f3b7d8',
  chains: [blastSepolia],
  // storage: createStorage({
  //   storage: localStorage,
  // }),
  transports: {
    [blastSepolia.id]: http(),
  },

  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        rabbyWallet,
        // walletConnectWallet,
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
