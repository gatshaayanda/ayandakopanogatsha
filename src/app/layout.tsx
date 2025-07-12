import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/AdminHubLoader';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: 'Ayanda Kopano Gatsha',
  description: 'Personal portfolio of a full-stack developer, automation expert, and founder of AdminHub. Built with Next.js, Tailwind, and Firebase.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${sora.variable} antialiased bg-[--background] text-[--foreground]`}
      >
        <AnalyticsProvider>
          <Loader />
          <div className="sticky top-0 z-50 backdrop-blur border-b border-slate-800 shadow-sm bg-black/50">
            <Header />
          </div>
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
