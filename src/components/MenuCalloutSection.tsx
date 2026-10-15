'use client';
import React from 'react';
import PolaroidLineCarousel from './ui/polaroid-line-carousel';
import { motion } from 'motion/react';

interface MenuCalloutSectionProps {
  onOpenMenus: (categoryId?: string) => void;
}

const MENU_ITEMS = [
  { title: 'Soups', category: 'Warm & Comforting', categoryId: 'soups', image: '/adipoo rest/Soup/non-veg/Steaming Chicken Manchow Soup at Adipozhi.png' },
  { title: 'Egg Special', category: 'Farm Fresh', categoryId: 'egg-special', image: '/adipoo rest/Egg/Steaming Adipozhi Podi Mass Feast.png' },
  { title: 'Veg Starters', category: 'Crispy & Green', categoryId: 'veg-starters', image: '/adipoo rest/veg started/Spicy Paneer 65 at Adipozhi.png' },
  { title: 'Chicken Starters', category: 'Spicy Delights', categoryId: 'chicken-starters', image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Adipozhi Chicken Maharaja Feast.jpg' },
  { title: 'Mutton Starters', category: 'Rich & Tender', categoryId: 'mutton-starters', image: '/adipoo rest/NON-VEG STARTERS - MUTTON/Spiced Mutton Chukka at Adipoozhi.png' },
  { title: 'Beef Starters', category: 'Juicy Bites', categoryId: 'beef-starters', image: '/adipoo rest/NON-VEG STARTERS - BEEF/Spicy Beef Fry with Adipozhi Branding.png' },
  { title: 'Seafood Starters', category: 'Ocean Fresh', categoryId: 'seafood-starters', image: '/adipoo rest/NON-VEG STARTERS - SEAFOODS/Adipozhi Spiced Fish Tawa Fry.png' },
  { title: 'Arabian Starters', category: 'Middle Eastern', categoryId: 'arabian-starters', image: '/adipoo rest/ARABIAN STARTERS/Adipozhi Al-Faham Feast.png' },
  { title: 'Arabian Spicy', category: 'Hot & Charred', categoryId: 'arabian-spicy', image: "/adipoo rest/ARABIAN SPICY'S/Adipozhi Tandoori Chicken Tikka Feast.png" },
  { title: 'Pulaos', category: 'Aromatic Rice', categoryId: 'pulaos', image: '/adipoo rest/PULAOS/Steaming Chicken Pulao at Adipozhi.png' },
  { title: 'Biriyanis', category: 'Bestseller', categoryId: 'biriyanis', image: '/adipoo rest/Biryani/Steaming Chicken Dum Biryani at Adipozhi.png' },
  { title: 'Family Pack', category: 'Share the Joy', categoryId: 'family-pack', image: '/adipoo rest/FAMILY PACK (ONLY PARCEL)/Steaming Adipozhi Chicken Biryani Bucket.png' },
  { title: 'Chettinadu', category: 'Authentic Spice', categoryId: 'chettinadu', image: '/adipoo rest/CHETTINADU MASALAS/Spicy Chicken Chettinadu Masala Feast.png' },
  { title: 'Indian Gravy', category: 'Rich Curries', categoryId: 'indian-gravy', image: '/adipoo rest/INDIAN GRAVY & MASALA/Adipozhi Butter Chicken Feast.png' },
  { title: 'Chinese & Noodles', category: 'Wok Tossed', categoryId: 'chinese-rice-noodles', image: '/adipoo rest/CHINESE RICE  NOODLES/Steaming Chicken Fried Rice and Noodles.png' },
  { title: 'Indian Breads', category: 'Hot from Tandoor', categoryId: 'indian-breads', image: '/menu 16-21/INDIAN BREADS/Steaming Butter Naan and Curry Feast.png' },
  { title: 'Dosa Varieties', category: 'Crispy Crepes', categoryId: 'dosa-varieties', image: '/menu 16-21/DOSA VARIETIES/Steaming Ghee Roast Dosa at Adipozhi.png' },
  { title: 'Parotta Varieties', category: 'Flaky & Soft', categoryId: 'parotta-varieties', image: '/menu 16-21/PAROTTA VARIETIES/Flaky Parotta Buns with Curry.png' },
  { title: 'Fresh Juice', category: 'Thirst Quenchers', categoryId: 'fresh-juice', image: '/menu 16-21/FRESH JUICE/Watermelon Mint Cooler with Roses.png' },
  { title: 'Mojitos', category: 'Cool & Minty', categoryId: 'mojitos', image: '/menu 16-21/MOJITO/Ruby Pomegranate Mint Cooler.png' },
  { title: 'Ice Creams', category: 'Sweet Finish', categoryId: 'ice-creams', image: '/menu 16-21/ICE CREAMS/Butterscotch Sundae at Adipozhi.png' },
];

export const MenuCalloutSection: React.FC<MenuCalloutSectionProps> = ({
  onOpenMenus,
}) => {
  return (
    <section 
      className="relative w-full pt-16 pb-12 lg:pt-20 lg:pb-16 text-[#f8efdc] overflow-hidden bg-cover bg-center select-none"
      style={{ backgroundImage: "url('/images/roses/logo-wall.jpg')" }}
    >
      {/* Ambient gradient overlays for rich depth & readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[#de2b2b]/20 pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-2 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Adipozhi Menu
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 font-light leading-relaxed">
            21 unique categories crafted with love. Experience the rich heritage of authentic South Indian and Arabian culinary mastery.
          </p>
        </div>
        
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest font-bold opacity-90">
          <div className="flex flex-col items-center gap-4">
            <div className="p-2 pb-4 bg-[#fbfaf7] shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-28 h-32 overflow-hidden">
                <img src="/menu 16-21/DOSA VARIETIES/Steaming Ghee Roast Dosa at Adipozhi.png" alt="Fresh Ingredients" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-center leading-tight">Fresh<br/>Ingredients</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="p-2 pb-4 bg-[#fbfaf7] shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-28 h-32 overflow-hidden">
                <img src="/adipoo rest/Biryani/Steaming Chicken Dum Biryani at Adipozhi.png" alt="Authentic Spices" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-center leading-tight">Authentic<br/>Spices</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="p-2 pb-4 bg-[#fbfaf7] shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="w-28 h-32 overflow-hidden">
                <img src="/adipoo rest/ARABIAN STARTERS/Adipozhi Al-Faham Feast.png" alt="Master Chefs" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-center leading-tight">Master<br/>Chefs</span>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 h-[520px] sm:h-[650px] lg:h-[750px]">
        <PolaroidLineCarousel
          slides={MENU_ITEMS.map((item) => ({
            image: item.image,
            title: item.title,
            caption: item.category,
            onClick: () => onOpenMenus(item.categoryId),
          }))}
          height="100%"
          cardWidth={440}
          background="transparent"
          ink="#f8efdc"
          string="#f8efdc"
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

