import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { DEFAULT_THEME, THEME_INIT_SCRIPT } from '@/lib/theme';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tesserabuild.ai'),
  title: {
    default: 'Tessera — the intelligence layer for homebuilders',
    template: '%s — Tessera',
  },
  description:
    'Tessera sits above the systems homebuilders already run and reads them. One score per home, the reason behind it, and the time to act before a small miss becomes an expensive delay.',
  openGraph: {
    type: 'website',
    siteName: 'Tessera',
    title: 'Tessera — the intelligence layer for homebuilders',
    description:
      'Builders know how to build homes. Closing is a coordination problem. Tessera reads every system in the transaction and tells you which homes will miss their date, and why.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#070A09' },
    { media: '(prefers-color-scheme: light)', color: '#F7F4ED' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-pill focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-bg"
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
