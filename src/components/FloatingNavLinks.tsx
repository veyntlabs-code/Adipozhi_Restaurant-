'use client';
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Calendar, ShoppingBag, Gift, Compass, Play } from 'lucide-react';

interface FloatingNavLinksProps {
  onOpenGoingTo: () => void;
  onOpenReservation: () => void;
  onOpenOrder: () => void;
  onOpenGiftCard: () => void;
  onOpenGallery?: () => void;
  orderCount: number;
  lang: 'en' | 'fr';
}

export const FloatingNavLinks: React.FC<FloatingNavLinksProps> = ({
  onOpenGoingTo,
  onOpenReservation,
  onOpenOrder,
  onOpenGiftCard,
  onOpenGallery,
  orderCount,
  lang
}) => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Hide when scrolling down fast, show when scrolling up
    if (diff > 14 && latest > 250) {
      setIsVisible(false);
    } else if (diff < -8 || latest <= 250) {
      setIsVisible(true);
    }
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 75,
        opacity: isVisible ? 1 : 0.4,
        scale: isVisible ? 1 : 0.95
      }}
      transition={{ type: 'spring', damping: 22, stiffness: 260 }}
      whileHover={{ y: 0, opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-wrap items-center gap-2 p-1.5 bg-[#f8efdc]/95 backdrop-blur-md border border-[#1a1a1a]/20 rounded-full shadow-2xl select-none transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
    >
      {onOpenGallery && (
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenGallery}
          className="px-3.5 py-2 rounded-full text-xs font-bold text-[#de2b2b] hover:bg-[#de2b2b]/10 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-[#de2b2b]" />
          <span>{lang === 'en' ? '0:29 Tour & 23 Photos' : '0:29 டூர்'}</span>
        </motion.button>
      )}

      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenGoingTo}
        className="px-3.5 py-2 rounded-full text-xs font-bold text-[#1a1a1a] hover:bg-[#1a1a1a]/5 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
      >
        <Compass className="w-3.5 h-3.5 text-[#de2b2b]" />
        <span className="hidden sm:inline">{lang === 'en' ? 'Directions' : 'வழித்தடம்'}</span>
      </motion.button>

      <motion.button
        type="button"
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenReservation}
        className="px-4 py-2 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] rounded-full text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-md cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>{lang === 'en' ? 'Reserve' : 'முன்பதிவு'}</span>
      </motion.button>

      <motion.button
        type="button"
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenOrder}
        className="relative px-4 py-2 bg-[#1a1a1a] text-[#f8efdc] hover:bg-black rounded-full text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-md cursor-pointer"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-[#f8efdc]" />
        <span>{lang === 'en' ? 'Order online' : 'பார்சல் ஆர்டர்'}</span>
        {orderCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 0.3 }}
            className="ml-1 px-1.5 py-0.5 rounded-full bg-[#de2b2b] text-[#f8efdc] text-[10px] font-bold"
          >
            {orderCount}
          </motion.span>
        )}
      </motion.button>


    </motion.div>
  );
};

