import '@/styles/globals.css';
import { Instrument_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body
        suppressHydrationWarning={true}
        className={`${instrumentSans.className} relative min-h-screen flex flex-col`}
      >
        <Header />
        <div className="lg:overflow-hidden">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
