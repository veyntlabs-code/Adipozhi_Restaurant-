'use client';

import React from 'react';
import { EventsPage } from '@/pages-old/EventsPage';
import { useAppContext } from '@/components/AppShell';

export function EventsPageClient() {
  const { navigateTo, openReservation, openPrivateRooms } = useAppContext();

  return (
    <EventsPage 
      onNavigate={navigateTo} 
      onOpenReservation={openReservation} 
      onOpenPrivateRooms={openPrivateRooms} 
    />
  );
}
