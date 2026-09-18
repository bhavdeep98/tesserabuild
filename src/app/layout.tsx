import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { meta } from '@/content/home';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tesserabuild.ai'),
  title: {
    default: meta.title,
    template: '%s — Tessera',
  },
  description: meta.description,
  openGraph: {
    type: 'website',
    siteName: 'Tessera',
    title: meta.title,
    description: meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  // One theme, so one colour. Matches --c-bg.
  themeColor: '#F3F1E9',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-tile focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
