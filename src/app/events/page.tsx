import type { Metadata } from 'next';
import { EventsPageClient } from './EventsPageClient';

export const metadata: Metadata = {
  title: 'Live Entertainment & Events | Adipozhi',
  description:
    'Join us for live sports, cultural celebrations, and weekend entertainment at Adipozhi Family Restaurant. Book your table now.',
};

export default function EventsPage() {
  return <EventsPageClient />;
}
