import type { Metadata } from 'next';
import { MenuPageClient } from './MenuPageClient';

export const metadata: Metadata = {
  title: 'Full Menu - 21 Categories | Biryani, Parotta, Al-Faham & More',
  description:
    'Browse Adipozhi Family Restaurant complete menu with 21 categories: soups, egg specials, chicken 65, mutton starters, dum biryani buckets, bun parotta, kari dosa, Arabian Al-Faham grills, Chettinadu masalas, mojitos & more. Prices from Rs 15.',
  openGraph: {
    title: 'Adipozhi Menu | 21 Categories of South Indian & Arabian Food',
    description:
      'From hot soups to bucket biryanis, explore our full menu. Dine-in, takeaway, and family pack options available.',
    images: [{ url: '/images/food/food11.jpg', width: 1200, height: 630, alt: 'Adipozhi Dum Biryani' }],
  },
};

export default function MenuPage() {
  return <MenuPageClient />;
}
