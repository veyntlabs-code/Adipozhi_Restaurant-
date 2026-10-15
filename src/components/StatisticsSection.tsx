'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATISTICS } from '../data/restaurantData';
import { Star } from 'lucide-react';

interface StatisticsSectionProps {
  onOpenMenus?: () => void;
  onOpenGoingTo?: () => void;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  onOpenMenus,
  onOpenGoingTo,
}) => {
  const googleReviewsUrl = 'https://www.google.com/maps/place/ADIPOZHI+FAMILY+RESTAURANT/@8.2004001,77.3013765,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f9f8178ae3dd:0xf4d52f55155a3a3b!8m2!3d8.2004001!4d77.3039514!16s%2Fg%2F11w2_3m_78';

  const handleStatClick = (idx: number) => {
    switch (idx) {
      case 0: // 4.7 Google Rating
      case 1: // 284 Google Reviews
        window.open(googleReviewsUrl, '_blank', 'noopener,noreferrer');
        break;
      case 2: // 21 Menu Categories
        if (onOpenMenus) {
          onOpenMenus();
        } else {
          window.location.href = '/menus/regular';
        }
        break;
      case 3: // 2 Mins from Bus Stand
        if (onOpenGoingTo) {
          onOpenGoingTo();
        } else {
          window.open(googleReviewsUrl, '_blank', 'noopener,noreferrer');
        }
        break;
      default:
        break;
    }
  };

  return (
    <section className="bg-[#f8efdc] py-16 lg:py-20 border-b border-[#1a1a1a]/10 overflow-hidden relative">
      {/* Elegant Classy Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8efdc] via-transparent to-[#f8efdc]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center justify-center">
          {STATISTICS.map((stat, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex justify-center"
              >
                <motion.div
                  onClick={() => handleStatClick(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleStatClick(idx);
                    }
                  }}
                  animate={{ y: [-40, 40, -40] }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 4 + (idx % 3) * 0.5,
                      ease: "easeInOut",
                      delay: idx * 0.2
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 20px 25px -5px rgba(222, 43, 43, 0.2)',
                    transition: { duration: 0.25 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-6 bg-white shadow-sm transition-all duration-300 mx-auto w-44 h-44 sm:w-48 sm:h-48 cursor-pointer select-none flex flex-col items-center justify-center rounded-full"
                  title={
                    idx === 0 || idx === 1 
                      ? 'Read Google Reviews on Google Maps'
                      : idx === 2 
                        ? 'Explore All 21 Menu Categories'
                        : 'View Location & Directions on Map'
                  }
                >
                  {/* Static dotted border ring */}
                  <div className="absolute inset-2 rounded-full border-2 border-dotted border-[#de2b2b]/50 group-hover:border-[#de2b2b] transition-colors duration-300" />

                  {/* Static inner content */}
                  <div className="flex flex-col items-center justify-center z-10">
                    <span
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#de2b2b] tracking-tight leading-none mb-2 drop-shadow-sm"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider text-center px-4 leading-tight group-hover:text-[#de2b2b] transition-colors">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

