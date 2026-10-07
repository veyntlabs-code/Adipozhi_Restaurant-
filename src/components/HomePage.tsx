'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HeroSection } from '@/components/HeroSection';
import { MenuCalloutSection } from '@/components/MenuCalloutSection';
import { DailyPleasuresSection } from '@/components/DailyPleasuresSection';
import { StatisticsSection } from '@/components/StatisticsSection';
import { PrivateRoomsSection } from '@/components/PrivateRoomsSection';
import { TheRestaurantSection } from '@/components/TheRestaurantSection';
import { WaitingForSection } from '@/components/WaitingForSection';
import { DualActionsSection } from '@/components/DualActionsSection';
import { useAppContext } from '@/components/AppShell';

export function HomePage() {
  const { 
    lang, 
    openMenus, 
    openReservation, 
    openGoingTo, 
    openOrder, 
    openGiftCard,
    openPrivateRooms,
    navigateTo
  } = useAppContext();

  return (
    <>
      <HeroSection
        onOpenMenus={openMenus}
        onOpenReservation={openReservation}
        onOpenGoingTo={openGoingTo}
        onOpenOrder={openOrder}
        onOpenGiftCard={openGiftCard}
        lang={lang}
      />
      <MenuCalloutSection
        onOpenMenus={(categoryId?: string) => navigateTo(categoryId ? `/menus/regular?category=${categoryId}` : '/menus/regular')}
        lang={lang}
      />
      <DailyPleasuresSection
        onSelectPleasure={openOrder}
        lang={lang}
      />
      <StatisticsSection lang={lang} />
      <PrivateRoomsSection
        onOpenPrivateRooms={openPrivateRooms}
        lang={lang}
      />
      <TheRestaurantSection
        onOpenReservation={openReservation}
        lang={lang}
      />
      <WaitingForSection
        onOpenReservation={openReservation}
        lang={lang}
      />
      <DualActionsSection
        onOpenOrder={openOrder}
        onOpenGiftCard={openGiftCard}
        lang={lang}
      />
    </>
  );
} 
