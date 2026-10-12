'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCHEDULE_DATA, RESTAURANT_INFO } from '../data/restaurantData';
import { Clock, MapPin, Phone, Mail, ArrowRight, Utensils } from 'lucide-react';

interface ScheduleFooterProps {
  onOpenMenus: () => void;
  onOpenRestaurant: () => void;
  onOpenEvents: () => void;
  onOpenPrivateRooms: () => void;
  onOpenGoingTo: () => void;
  onNavigate?: (path: string) => void;
  lang: 'en' | 'fr';
}

export const ScheduleFooter: React.FC<ScheduleFooterProps> = ({
  onOpenMenus,
  onOpenRestaurant,
  onOpenEvents,
  onOpenPrivateRooms,
  onOpenGoingTo,
  onNavigate,
  lang
}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(5); // default Saturday
  const currentDay = SCHEDULE_DATA[selectedDayIndex];

  const handleNav = (path: string, fallback?: () => void) => {
    if (onNavigate) {
      onNavigate(path);
    } else if (fallback) {
      fallback();
    }
  };

  return (
    <footer id="footer" className="bg-[#f8efdc] text-[#1a1a1a] pt-16 pb-28 border-t border-[#1a1a1a]/15 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1a1a1a]/10">
          {/* Left Column: The Schedule Module with AnimatePresence */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#1a1a1a]/10 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#1a1a1a]/10 pb-4">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#de2b2b]">
                <Clock className="w-4 h-4" />
                <span>{lang === 'en' ? 'Schedule & Hours' : 'Horaire d’Ouverture'}</span>
              </div>
              <motion.button
                whileHover={{ x: 3 }}
                onClick={onOpenGoingTo}
                className="text-xs font-bold text-[#de2b2b] flex items-center gap-1 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Going to Adipozhi' : 'Venir chez Adipozhi'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Days Horizontal selector with spring pill */}
            <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 scrollbar-none border-b border-[#1a1a1a]/5">
              {SCHEDULE_DATA.map((d, idx) => {
                const isActive = idx === selectedDayIndex;
                return (
                  <button
                    key={d.day}
                    type="button"
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${isActive
                      ? 'text-[#f8efdc]'
                      : 'text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:bg-[#f8efdc]/50'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeScheduleDay"
                        className="absolute inset-0 bg-[#de2b2b] rounded-lg shadow-sm"
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      />
                    )}
                    <span className="relative z-10">
                      {lang === 'en' ? d.day.slice(0, 3) : d.dayFr.slice(0, 3)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hours Table for Selected Day with smooth crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDayIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="space-y-4 text-xs sm:text-sm"
              >
                {/* General Service Timings */}
                <div className="space-y-1">
                  <div className="flex justify-between py-1.5 border-b border-[#1a1a1a]/5">
                    <span className="text-[#1a1a1a]/70">{lang === 'en' ? 'Dining room' : 'Salle à manger'}</span>
                    <span className="font-semibold text-[#1a1a1a]">{currentDay.dining}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-[#1a1a1a]/5">
                    <span className="text-[#1a1a1a]/70">{lang === 'en' ? 'Takeaway' : 'Pour emporter'}</span>
                    <span className="font-semibold text-[#1a1a1a]">{currentDay.takeaway}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1a1a1a]/5">
                    <span className="text-[#1a1a1a]/70">{lang === 'en' ? 'Delivery' : 'Livraison'}</span>
                    <span className="font-semibold text-[#1a1a1a]">{currentDay.delivery}</span>
                  </div>
                </div>

                {/* Specialty Dish Timings Section */}
                <div className="pt-2">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1a1a1a]/10">
                    <div className="flex items-center gap-1.5 text-[11px] uppercase font-bold tracking-wider text-[#de2b2b]">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Specialty Timings' : 'Horaires des Spécialités'}</span>
                    </div>
                    {currentDay.muttonBiryani ? (
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100/90 border border-amber-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span>🔥</span>
                        <span>{lang === 'en' ? 'Weekend Special Active' : 'Spécial Week-end'}</span>
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#1a1a1a]/50 font-medium">
                        {lang === 'en' ? 'Daily Fresh Service' : 'Service du Jour'}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    {/* Chicken Biryani & Beef Biryani */}
                    <div className="flex items-center justify-between py-1.5 border-b border-[#1a1a1a]/5">
                      <div className="pr-3">
                        <span className="font-semibold text-[#1a1a1a] block">
                          {lang === 'en' ? 'Chicken Biryani & Beef Biryani' : 'Biryani Poulet & Boeuf'}
                        </span>
                        <span className="text-[11px] text-[#1a1a1a]/50">
                          {lang === 'en' ? 'Lunch Service · Fresh Dum Biryani' : 'Service du Midi'}
                        </span>
                      </div>
                      <span className="font-bold text-[#de2b2b] bg-[#de2b2b]/10 px-2.5 py-1 rounded-md text-xs whitespace-nowrap">
                        {currentDay.chickenBeefBiryani}
                      </span>
                    </div>

                    {/* Mutton Biryani - Only rendered for Saturday & Sunday */}
                    {currentDay.muttonBiryani && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-between py-2 border-b border-[#1a1a1a]/5 bg-gradient-to-r from-amber-50 to-orange-50/50 -mx-2 px-2.5 rounded-xl border border-amber-200/60"
                      >
                        <div className="pr-3">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-bold text-[#1a1a1a]">
                              {lang === 'en' ? 'Mutton Biryani' : 'Biryani au Mouton'}
                            </span>
                            <span className="text-[9px] uppercase font-extrabold text-amber-900 bg-amber-200/90 px-1.5 py-0.5 rounded shadow-2xs">
                              {lang === 'en' ? 'Sat & Sun Only' : 'Sam & Dim Seul'}
                            </span>
                          </div>
                          <span className="text-[11px] text-amber-900/70">
                            {lang === 'en' ? 'Signature Weekend Dum Biryani' : 'Spécial Week-end'}
                          </span>
                        </div>
                        <span className="font-bold text-[#de2b2b] bg-[#de2b2b]/10 px-2.5 py-1 rounded-md text-xs whitespace-nowrap">
                          {currentDay.muttonBiryani}
                        </span>
                      </motion.div>
                    )}

                    {/* Dosa & Parotta Varieties */}
                    <div className="flex items-center justify-between py-1.5">
                      <div className="pr-3">
                        <span className="font-semibold text-[#1a1a1a] block">
                          {lang === 'en' ? 'Dosa & Parotta Varieties' : 'Variétés de Dosa & Parotta'}
                        </span>
                        <span className="text-[11px] text-[#1a1a1a]/50">
                          {lang === 'en' ? 'Evening & Dinner · Bun Parotta, Kothu & Dosas' : 'Soir & Dîner'}
                        </span>
                      </div>
                      <span className="font-bold text-[#de2b2b] bg-[#de2b2b]/10 px-2.5 py-1 rounded-md text-xs whitespace-nowrap">
                        {currentDay.dosaParotta}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Details, Address & Navigation */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-3xl font-bold tracking-tight text-[#de2b2b]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                  adipozhi
                </span>
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#7c2627]">
                  Family Restaurant · Monday Market
                </p>
                <p className="text-xs text-[#1a1a1a]/70 max-w-sm leading-relaxed">
                  {lang === 'en'
                    ? 'Comfortable restaurant serving tasty biryani, hot Bun Parottas, Nool parotta, Arabian Grills, and diverse Southern delicacies. Rated 4.7 on Google (284 reviews).'
                    : 'Restaurant familial servant de délicieux biryanis, parottas et grillades arabes à Monday Market.'}
                </p>
              </div>

              {/* Coordinates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#de2b2b] block">
                    {lang === 'en' ? 'Address' : 'Adresse'}
                  </span>
                  <p className="text-[#1a1a1a] font-medium leading-relaxed">
                    Bus stand Entrance Arch<br />
                    Monday Market, Tamil Nadu 629802
                  </p>
                  <p className="text-[11px] text-[#de2b2b] font-medium">
                    {lang === 'en' ? 'Ample parking for cars & two-wheelers' : 'Stationnement disponible'}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#de2b2b] block">
                    {lang === 'en' ? 'Orders & Bookings' : 'Commandes'}
                  </span>
                  <p className="text-[#1a1a1a] font-medium">
                    <a href="tel:09585154254" className="hover:text-[#de2b2b] font-bold text-sm transition-colors">095851 54254</a>
                  </p>
                  <p className="text-[11px] text-[#1a1a1a]/70">
                    Open Daily 11:00 AM – 11:00 PM
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold">
                    ⭐ 4.7 Google Rating (284 Reviews)
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1a1a1a]/60 gap-4">
          <div>
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>{RESTAURANT_INFO.address}</span>
            <span>·</span>
            <span>Phone: {RESTAURANT_INFO.phone}</span>
            <span>·</span>
            <span>{RESTAURANT_INFO.hours}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

