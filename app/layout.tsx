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
        suppressHydrationWarning={true}
        className={`${instrumentSans.className} relative min-h-screen flex flex-col`}
      >
        <ToastProvider>
          <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider
                initialChain={mainnet.id}
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
      </body>
    </html>
  );
}
