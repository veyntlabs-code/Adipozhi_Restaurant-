'use client';

import React from 'react';
import { RestaurantPage } from '@/pages-old/RestaurantPage';
import { useAppContext } from '@/components/AppShell';

export function RestaurantPageClient() {
  const { lang, navigateTo, openReservation, openMenus, openPrivateRooms } = useAppContext();

  return (
    <RestaurantPage 
      lang={lang} 
      onNavigate={navigateTo} 
      onOpenReservation={openReservation} 
      onOpenMenus={openMenus} 
      onOpenPrivateRooms={openPrivateRooms} 
    />
  );
}
