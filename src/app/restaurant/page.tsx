import type { Metadata } from 'next';
import { RestaurantPageClient } from './RestaurantPageClient';

export const metadata: Metadata = {
  title: 'About Adipozhi Family Restaurant | AC Dining & Ambiance in Monday Market',
  description:
    'Discover Adipozhi Family Restaurant at Monday Market Bus Stand Entrance Arch. Spacious AC family dining hall, live charcoal barbecue counter, authentic dum biryani, and warm hospitality since 2020.',
  keywords: [
    'About Adipozhi',
    'Adipozhi restaurant location',
    'AC restaurant Monday Market',
    'Family dining hall Monday Market',
    'Best hotel in Monday Market',
    'Adipozhi Monday Market bus stand',
  ],
  alternates: {
    canonical: 'https://adipozhi.in/restaurant',
  },
  openGraph: {
    title: 'Adipozhi Family Restaurant | Ambiance & Family Dining in Monday Market',
    description: 'Spacious AC family dining with authentic South Indian & Arabian culinary heritage.',
    url: 'https://adipozhi.in/restaurant',
    images: [{ url: '/premium-interior.jpg', width: 1200, height: 630, alt: 'Adipozhi Restaurant Dining Hall' }],
  },
};

export default function RestaurantPage() {
  return <RestaurantPageClient />;
}
