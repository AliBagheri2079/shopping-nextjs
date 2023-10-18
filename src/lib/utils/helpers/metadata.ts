import type { Metadata } from 'next';

export const layout_metadata: Metadata = {
  title: 'Elixir Online Shop',
  description:
    'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
  keywords: [
    'Elixir',
    'Online Shop',
    'Clothes',
    'Shoes',
    'Beauty',
    'Electronics',
  ],
  authors: {
    name: 'Ali Bagheri',
    url: 'https://www.github.com/alibagheri2079',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicon-16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicon-32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicon-72.png',
      sizes: '72x72',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicon-96.png',
      sizes: '96x96',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/images/favicon-57.png',
      sizes: '57x57',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/images/favicon-60.png',
      sizes: '60x60',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/images/favicon-72.png',
      sizes: '72x72',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/images/favicon-76.png',
      sizes: '76x76',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'Elixir Online Shop',
    description:
      'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
    siteName: 'Elixir',
    images: [
      {
        url: 'https://example.com/screenshot.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Elixir_Online_Shop',
    siteId: 'Elixir_Online_Shop',
    creator: '@AliBagheri2079',
    creatorId: 'AliBagheri2079',
    images: 'https://example.com/screenshot.png',
    title: 'Elixir Online Shop',
    description:
      'Online Shopping Marketplace: Clothes, Shoes, Beauty, Electronics and More',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    userScalable: false,
  },
  alternates: {
    canonical: 'https://example.com',
    languages: {
      en: 'https://example.com/en-US',
      fa: 'https://example.com/fa-IR',
    },
  },
};
