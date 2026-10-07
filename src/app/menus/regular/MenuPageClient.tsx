'use client';

import React from 'react';
import { RegularMenuPage } from '@/pages-old/RegularMenuPage';
import { useAppContext } from '@/components/AppShell';

export function MenuPageClient() {
  const { lang, navigateTo, openOrder, openReservation, addToCart } = useAppContext();

  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#f8efdc] flex items-center justify-center">Loading...</div>}>
      <RegularMenuPage 
        lang={lang} 
        onNavigate={navigateTo} 
        onOpenOrder={openOrder} 
        onOpenReservation={openReservation} 
        onAddToCart={addToCart} 
      />
    </React.Suspense>
  );
}
