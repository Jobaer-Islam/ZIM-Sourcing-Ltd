import type { Metadata } from 'next';
import Topbar from '@/components/layout/Topbar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jobaer-islam.github.io/ZIM-Sourcing-Ltd/'),
  title: {
    default: 'ZIM Sourcing Ltd | Apparel Buying House in Dhaka, Bangladesh',
    template: '%s | ZIM Sourcing Ltd',
  },
  description:
    'Premier apparel buying house in Dhaka, Bangladesh. End-to-end garments sourcing, rapid proto development, compliant factory allocation, quality control (AQL 1.5/2.5) and global shipment.',
  keywords: [
    'apparel buying house',
    'garment sourcing bangladesh',
    'dhaka buying house',
    'knitwear manufacturer',
    'woven garments',
    'denim sourcing',
    'sweaters bangladesh',
    'BGBA member',
    'apparel quality control',
  ],
  authors: [{ name: 'ZIM Sourcing Ltd' }],
  creator: 'ZIM Sourcing Ltd',
  publisher: 'ZIM Sourcing Ltd',
  icons: {
    icon: '/assets/img/favicon.svg',
    apple: '/assets/img/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jobaer-islam.github.io/ZIM-Sourcing-Ltd/',
    siteName: 'ZIM Sourcing Ltd',
    title: 'ZIM Sourcing Ltd | Apparel Buying House in Dhaka, Bangladesh',
    description:
      'Premier apparel buying house in Dhaka, Bangladesh. End-to-end garments sourcing, rapid proto development, compliant factory allocation, quality control and global shipment.',
    images: [
      {
        url: '/assets/img/video-poster.jpg',
        width: 1200,
        height: 630,
        alt: 'ZIM Sourcing Ltd Dhaka Headquarters and Quality Control',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZIM Sourcing Ltd | Apparel Buying House in Dhaka, Bangladesh',
    description:
      'Premier apparel buying house in Dhaka, Bangladesh. End-to-end garments sourcing, rapid sampling, compliant factory allocation, and global shipment.',
    images: ['/assets/img/video-poster.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="stylesheet" href="/assets/css/fonts.css" />
      </head>
      <body>
        <Topbar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
