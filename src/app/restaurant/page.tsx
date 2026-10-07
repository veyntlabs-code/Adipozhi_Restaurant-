import type { Metadata } from 'next';
import { RestaurantPageClient } from './RestaurantPageClient';

export const metadata: Metadata = {
  title: 'Our Restaurant & Atmosphere | Adipozhi',
  description:
    'Experience the warmth of Adipozhi Family Restaurant. Featuring premium booth seating, private dining rooms, and an authentic South Indian ambiance.',
};

export default function RestaurantPage() {
  return <RestaurantPageClient />;
}
