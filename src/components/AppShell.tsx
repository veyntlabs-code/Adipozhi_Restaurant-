'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Lenis from 'lenis';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Header } from '@/components/Header';
import { ScheduleFooter } from '@/components/ScheduleFooter';
import { FloatingNavLinks } from '@/components/FloatingNavLinks';

import { GoingToDrawer } from '@/components/GoingToDrawer';
import { MenusModal } from '@/components/MenusModal';
import { TheRestaurantModal } from '@/components/TheRestaurantModal';
import { EventsModal } from '@/components/EventsModal';
import { PrivateRoomsModal } from '@/components/PrivateRoomsModal';
import { ReservationModal } from '@/components/ReservationModal';
import { OnlineOrderDrawer } from '@/components/OnlineOrderDrawer';
export interface CartItem { item: MenuItem; quantity: number; specialNotes?: string; }
import { GiftCardModal } from '@/components/GiftCardModal';
import { MenuItem } from '@/data/restaurantData';
import { AdipozhiPageLoader } from '@/components/AdipozhiPageLoader';

interface AppContextType {
  navigateTo: (path: string) => void;
  openGoingTo: () => void;
  openMenus: () => void;
  openRestaurant: () => void;
  openEvents: () => void;
  openPrivateRooms: () => void;
  openReservation: () => void;
  openOrder: () => void;
  openGiftCard: () => void;
  addToCart: (item: MenuItem, quantity?: number, specialNotes?: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppShell');
  return context;
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if device is touch or small screen
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

    const lenis = new Lenis({
      duration: isTouch ? 1.0 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.0,
      syncTouch: false, // Prevent interception lag on mobile browsers
    });

    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    
    const tick = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  const navigateTo = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isGoingToOpen, setIsGoingToOpen] = useState(false);
  const [isMenusOpen, setIsMenusOpen] = useState(false);
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isPrivateRoomsOpen, setIsPrivateRoomsOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isGiftCardOpen, setIsGiftCardOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem, quantity: number = 1, specialNotes?: string) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id
            ? { ...ci, quantity: ci.quantity + quantity, specialNotes: specialNotes || ci.specialNotes }
            : ci
        );
      }
      return [...prev, { item, quantity, specialNotes }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQ = ci.quantity + delta;
            return newQ > 0 ? { ...ci, quantity: newQ } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => setCart([]);

  const totalCartCount = cart.reduce((acc, ci) => acc + ci.quantity, 0);

  const contextValue: AppContextType = {
    navigateTo,
    openGoingTo: () => setIsGoingToOpen(true),
    openMenus: () => setIsMenusOpen(true),
    openRestaurant: () => setIsRestaurantOpen(true),
    openEvents: () => setIsEventsOpen(true),
    openPrivateRooms: () => setIsPrivateRoomsOpen(true),
    openReservation: () => setIsReservationOpen(true),
    openOrder: () => setIsOrderOpen(true),
    openGiftCard: () => setIsGiftCardOpen(true),
    addToCart: handleAddToCart
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-[#f8efdc] text-[#1a1a1a] flex flex-col font-sans selection:bg-[#de2b2b] selection:text-[#f8efdc]">
        <AdipozhiPageLoader />

        <Header
          onOpenMenus={() => navigateTo('/menus/regular')}
          onOpenRestaurant={() => navigateTo('/restaurant')}
          onOpenEvents={() => navigateTo('/events')}
          onOpenPrivateRooms={() => setIsPrivateRoomsOpen(true)}
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenOrder={() => setIsOrderOpen(true)}
          onOpenGiftCard={() => setIsGiftCardOpen(true)}
          onNavigate={navigateTo}
          currentPath={pathname}
        />
        <main className="flex-1">{children}</main>
        <ScheduleFooter
          onOpenMenus={() => navigateTo('/menus/regular')}
          onOpenRestaurant={() => navigateTo('/restaurant')}
          onOpenEvents={() => navigateTo('/events')}
          onOpenPrivateRooms={() => setIsPrivateRoomsOpen(true)}
          onOpenGoingTo={() => setIsGoingToOpen(true)}
          onNavigate={navigateTo}
        />
        <FloatingNavLinks
          onOpenGoingTo={() => setIsGoingToOpen(true)}
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenOrder={() => setIsOrderOpen(true)}
          onOpenGiftCard={() => setIsGiftCardOpen(true)}
          orderCount={totalCartCount}
        />
        <GoingToDrawer isOpen={isGoingToOpen} onClose={() => setIsGoingToOpen(false)} />
        <MenusModal isOpen={isMenusOpen} onClose={() => setIsMenusOpen(false)} onAddToCart={handleAddToCart} />
        <TheRestaurantModal isOpen={isRestaurantOpen} onClose={() => setIsRestaurantOpen(false)} onOpenReservation={() => setIsReservationOpen(true)} />
        <EventsModal isOpen={isEventsOpen} onClose={() => setIsEventsOpen(false)} onOpenReservation={() => setIsReservationOpen(true)} />
        <PrivateRoomsModal isOpen={isPrivateRoomsOpen} onClose={() => setIsPrivateRoomsOpen(false)} />
        <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
        <OnlineOrderDrawer isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
        <GiftCardModal isOpen={isGiftCardOpen} onClose={() => setIsGiftCardOpen(false)} />
      </div>
    </AppContext.Provider>
  );
}

