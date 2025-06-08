import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Web3Provider } from '@/components/providers/web3-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Morgan - Web3 Developer & Blockchain Specialist',
  description: 'Professional Web3 developer specializing in DeFi, NFTs, and blockchain solutions. Available for freelance projects and consulting.',
  keywords: ['Web3', 'Blockchain', 'DeFi', 'NFT', 'Smart Contracts', 'Ethereum', 'Developer', 'Freelancer'],
  authors: [{ name: 'Alex Morgan' }],
  creator: 'Alex Morgan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexmorgan.dev',
    title: 'Alex Morgan - Web3 Developer & Blockchain Specialist',
    description: 'Professional Web3 developer specializing in DeFi, NFTs, and blockchain solutions.',
    siteName: 'Alex Morgan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alex Morgan - Web3 Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Morgan - Web3 Developer & Blockchain Specialist',
    description: 'Professional Web3 developer specializing in DeFi, NFTs, and blockchain solutions.',
    images: ['/og-image.jpg'],
    creator: '@alexmorgan_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Provider>
            {children}
            <Toaster />
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}