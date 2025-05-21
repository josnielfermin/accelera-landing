'use client';

import '@rainbow-me/rainbowkit/styles.css';
import '@/styles/globals.css';
import { Instrument_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { wagmiConfig } from '@/library/constants/wagmi-config';
import { midnightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import AppUpdater from '@/state/updater';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@/context/ToastContext';
import { FALLBACK_CHAIN_ID } from '@/library/constants/default-chain-info';
import { Provider } from 'react-redux';
import store, { persistor } from '@/state';
import { PersistGate } from 'redux-persist/integration/react';

const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const queryClient = new QueryClient();
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body
        // suppressHydrationWarning={true}
        className={`${instrumentSans.className} relative min-h-screen flex flex-col`}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastProvider>
              <WagmiProvider config={wagmiConfig}>
                <QueryClientProvider client={queryClient}>
                  <RainbowKitProvider
                    initialChain={FALLBACK_CHAIN_ID}
                    theme={midnightTheme({
                      accentColor: '#5cde66',
                      accentColorForeground: 'black',
                      fontStack: 'system',
                      overlayBlur: 'small',
                    })}
                  >
                    <AppUpdater />
                    <Header />
                    <div className="overflow-hidden">
                      {children}
                      <Footer />
                    </div>
                  </RainbowKitProvider>
                </QueryClientProvider>
              </WagmiProvider>
            </ToastProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
