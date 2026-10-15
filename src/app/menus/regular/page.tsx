import type { Metadata } from 'next';
import { MenuPageClient } from './MenuPageClient';

export const metadata: Metadata = {
  title: 'Menu & Prices | 21 Categories | Adipozhi Family Restaurant Monday Market',
  description:
    'Explore the full 21-category menu of Adipozhi Family Restaurant in Monday Market. Authentic Dum Biryani, Bun Parotta, Arabian Al-Faham, Kari Dosa, Chettinadu Gravies, Soups & Fresh Mojitos. Affordable prices from ₹15.',
  keywords: [
    'Adipozhi Menu',
    'Adipozhi price list',
    'Biryani price Monday Market',
    'Bucket biryani Monday Market',
    'Bun parotta Monday Market',
    'Al-Faham price',
    'Kari dosa Monday Market',
    'Monday Market restaurant menu',
    'Adipozhi food list',
  ],
  alternates: {
    canonical: 'https://adipozhi.in/menus/regular',
  },
  openGraph: {
    title: 'Adipozhi Restaurant Full Menu | 21 Delicious Categories',
    description:
      'From authentic handi dum biryani and flaky bun parottas to charcoal-grilled Arabian Al-Faham. Browse our full menu and prices.',
    url: 'https://adipozhi.in/menus/regular',
    images: [{ url: '/hero_biryani.jpg', width: 1200, height: 630, alt: 'Adipozhi Dum Biryani' }],
  },
};

const menuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Adipozhi Family Restaurant Full Menu',
  url: 'https://adipozhi.in/menus/regular',
  mainEntityOfPage: 'https://adipozhi.in/menus/regular',
  inLanguage: 'en-IN',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '15',
    eligibleRegion: {
      '@type': 'Country',
      name: 'IN',
    },
  },
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <MenuPageClient />
    </>
  );
}
