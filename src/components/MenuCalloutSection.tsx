'use client';
import React from 'react';
import ReviewSlider from './ReviewSlider';
import { motion } from 'motion/react';

interface MenuCalloutSectionProps {
  onOpenMenus: (categoryId?: string) => void;
  lang: 'en' | 'fr';
}

const MENU_ITEMS = [
  { title: 'Dum Biryani & Family Buckets', category: 'Bestseller', image: '/images/food/food11.jpg' },
  { title: 'Pepper Grill & Arabian BBQ', category: 'Charcoal Smoked', image: '/images/food/food10.jpg' },
  { title: 'Bun Parotta & Spicy Kothu', category: 'Madurai Style', image: '/images/food/food17.jpg' },
  { title: 'Chettinadu Masalas & Kari Dosa', category: 'House Special', image: '/images/food/food12.jpg' },
];

export const MenuCalloutSection: React.FC<MenuCalloutSectionProps> = ({
  onOpenMenus,
  lang
}) => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#de2b2b] text-[#f8efdc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 mb-12">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Adipozhi Menu
        </h2>
        <p className="text-xl sm:text-2xl opacity-90 font-light max-w-2xl">
          Adipozhi Family Restaurant · 21 Menu Categories. Explore our wide range of authentic South Indian and Arabian dishes.
        </p>
      </div>

      <div className="w-full relative z-10 h-[500px] overflow-hidden">
        <ReviewSlider
          direction="left"
          slideWidth={350}
          slideHeight={450}
          spacing={2}
          dim={4}
          background="transparent"
          items={MENU_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
              onClick={() => onOpenMenus()}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-[#de2b2b] text-white text-xs font-bold uppercase tracking-wider mb-3 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        />
      </div>

      <div className="mt-12 text-center relative z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onOpenMenus()}
          className="px-10 py-5 bg-[#f8efdc] text-[#de2b2b] hover:bg-white font-bold text-sm uppercase tracking-widest rounded-full shadow-2xl transition-all"
        >
          Explore Full Menu
        </motion.button>
      </div>
    </section>
  );
};

