'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ATMOSPHERES, RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';

interface TheRestaurantSectionProps {
  onOpenReservation: () => void;
  lang: 'en' | 'fr';
}

export const TheRestaurantSection: React.FC<TheRestaurantSectionProps> = ({
  onOpenReservation,
  lang
}) => {
  const [activeTab, setActiveTab] = useState(ATMOSPHERES[0].id);
  const currentAtmosphere = ATMOSPHERES.find((a) => a.id === activeTab) || ATMOSPHERES[0];

  return (
    <section className="bg-[#7c2627] text-[#f8efdc] py-20 lg:py-28 relative overflow-hidden border-b border-[#f8efdc]/10">
      {/* Dynamic Background Atmosphere - Restaurant Themed */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-center gap-8 z-0">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-[12rem] sm:text-[18rem] font-black uppercase text-white/30 leading-none select-none tracking-tight">
            ADIPOZHI FAMILY RESTAURANT • ADIPOZHI FAMILY RESTAURANT • ADIPOZHI FAMILY RESTAURANT •
          </span>
        </motion.div>
        
        <motion.div
          animate={{ x: [-2000, 0] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span 
            className="text-[12rem] sm:text-[18rem] font-black uppercase text-transparent leading-none select-none tracking-tight opacity-30"
            style={{ WebkitTextStroke: '3px white' }}
          >
            BIRYANI & CHARCOAL GRILL • BIRYANI & CHARCOAL GRILL • BIRYANI & CHARCOAL GRILL • 
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8efdc]/15 text-xs font-bold uppercase tracking-wider text-[#f8efdc] border border-[#f8efdc]/20">
            <Star className="w-3.5 h-3.5 fill-[#f8efdc]" />
            <span>4.7 ★ 284 Google Reviews</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f8efdc]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Comfortable Dining in Monday Market
          </h2>
          <p className="text-base sm:text-lg text-[#f8efdc]/90 font-light leading-relaxed">
            Located right at the Bus Stand Entrance Arch in Monday Market, Tamil Nadu, Adipozhi Family Restaurant is a welcoming culinary haven. We bring families together over steaming handi biryani, fresh charcoal grills, and authentic regional delicacies.
          </p>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#f8efdc]/80 pt-1">
            <MapPin className="w-4 h-4 shrink-0 text-[#f8efdc]" />
            <span>{RESTAURANT_INFO.address} · Get there: {RESTAURANT_INFO.getThere}</span>
          </div>
        </motion.div>

        {/* Three Ambiance Spaces Interactive Container */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#f8efdc]/80">
              Two Spaces, One Destination:
            </span>
          </div>

          {/* Segmented Atmosphere Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-black/25 backdrop-blur-md rounded-full max-w-fit border border-white/10">
            {ATMOSPHERES.map((atm) => {
              const isActive = atm.id === activeTab;
              return (
                <button
                  key={atm.id}
                  type="button"
                  onClick={() => setActiveTab(atm.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none ${
                    isActive ? 'text-[#7c2627]' : 'text-[#f8efdc] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAtmospherePill"
                      className="absolute inset-0 bg-[#f8efdc] rounded-full shadow-lg"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span className="relative z-10">{atm.name}</span>
                </button>
              );
            })}
          </div>

          {/* Atmosphere Card Showcase */}
          <div className="bg-[#5c1c1d] rounded-3xl overflow-hidden border border-[#f8efdc]/20 shadow-2xl transition-all duration-300 min-h-[460px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
              <div className="lg:col-span-7 h-72 sm:h-96 lg:h-[460px] relative overflow-hidden bg-black/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentAtmosphere.id}
                    src={currentAtmosphere.image}
                    alt={currentAtmosphere.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-[#5c1c1d]/90 relative z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAtmosphere.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="space-y-4"
                  >
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#f8efdc]/70">
                      Featured Dining Area
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-[#f8efdc]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {currentAtmosphere.name}
                    </h3>
                    <p className="text-sm font-medium italic text-[#f8efdc]/90">
                      "{currentAtmosphere.tagline}"
                    </p>
                    <p className="text-sm text-[#f8efdc]/80 leading-relaxed font-light">
                      {currentAtmosphere.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-6 border-t border-[#f8efdc]/20 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenReservation}
                    className="px-6 py-3 bg-[#f8efdc] text-[#7c2627] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-white transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Reserve a Table</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f8efdc] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

