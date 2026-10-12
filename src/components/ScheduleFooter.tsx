'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCHEDULE_DATA, RESTAURANT_INFO } from '../data/restaurantData';
import { Clock, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-16 border-b border-[#1a1a1a]/10 items-stretch">
          {/* Left Column: The Schedule Module with AnimatePresence */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#1a1a1a]/10 shadow-sm flex flex-col justify-between space-y-6">
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
                className="space-y-3 text-xs sm:text-sm"
              >
                <div className="flex justify-between py-1.5 border-b border-[#1a1a1a]/5">
                  <span className="text-[#1a1a1a]/70">{lang === 'en' ? 'Dining room' : 'Salle à manger'}</span>
                  <span className="font-semibold text-[#1a1a1a]">{currentDay.dining}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#1a1a1a]/5">
                  <span className="text-[#1a1a1a]/70">{lang === 'en' ? 'Takeaway' : 'Pour emporter'}</span>
                  <span className="font-semibold text-[#1a1a1a]">{currentDay.takeaway}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#1a1a1a]/70">{lang === 'en' ? 'Delivery' : 'Livraison'}</span>
                  <span className="font-semibold text-[#1a1a1a]">{currentDay.delivery}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Details, Address & Storefront Photo */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center h-full">
              {/* Text & Details */}
              <div className="md:col-span-6 space-y-5">
                <div className="space-y-2">
                  <span className="text-3xl font-bold tracking-tight text-[#de2b2b]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                    adipozhi
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#7c2627]">
                    Family Restaurant · Monday Market
                  </p>
                  <p className="text-xs text-[#1a1a1a]/70 leading-relaxed">
                    {lang === 'en'
                      ? 'Comfortable restaurant serving tasty biryani, hot Bun Parottas, Nool parotta, Arabian Grills, and diverse Southern delicacies. Rated 4.7 on Google (284 reviews).'
                      : 'Restaurant familial servant de délicieux biryanis, parottas et grillades arabes à Monday Market.'}
                  </p>
                </div>

                {/* Coordinates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#de2b2b] block">
                      {lang === 'en' ? 'Address' : 'Adresse'}
                    </span>
                    <a
                      href={RESTAURANT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a1a1a] hover:text-[#de2b2b] font-medium leading-relaxed transition-colors block"
                      title="Open in Google Maps"
                    >
                      Bus stand Entrance Arch<br />
                      Monday Market, Tamil Nadu 629802
                    </a>
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

                {/* Quick Action Button */}
                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={onOpenGoingTo}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#de2b2b] hover:bg-[#b81d1d] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'View Location & Map' : 'Voir l’emplacement & Carte'}</span>
                  </button>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1a1a1a]/70 hover:text-[#de2b2b] hover:bg-black/5 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Google Maps</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Storefront Image Card */}
              <div className="md:col-span-6 h-full flex items-center justify-center md:justify-end py-2">
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  onClick={onOpenGoingTo}
                  className="group relative rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-[3px] border-white bg-[#1a1a1a] aspect-[3/4] w-full max-w-[340px] sm:max-w-[360px] cursor-pointer"
                  title={lang === 'en' ? 'Click for location & directions' : 'Cliquer pour l’itinéraire'}
                >
                  <img
                    src="/storefront.jpg"
                    alt="Adipozhi Family Restaurant Storefront at Monday Market"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3.5 right-3.5 pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-semibold text-[#f8efdc] border border-white/20 shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {lang === 'en' ? 'Storefront' : 'Restaurant'}
                    </span>
                  </div>

                  {/* Bottom Storefront Label */}
                  <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                    <p className="text-sm font-bold text-white drop-shadow-md flex items-center justify-between">
                      <span>Adipozhi Storefront</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#f8efdc] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-0 group-hover:translate-x-1" />
                    </p>
                    <p className="text-xs text-[#f8efdc]/90 drop-shadow-md flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ff8080] shrink-0" />
                      <span className="truncate">Monday Market, Tamil Nadu</span>
                    </p>
                  </div>
                </motion.div>
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

