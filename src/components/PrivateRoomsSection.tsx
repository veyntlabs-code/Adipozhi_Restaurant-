'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users } from 'lucide-react';

interface PrivateRoomsSectionProps {
  onOpenPrivateRooms: () => void;
  lang: 'en' | 'fr';
}

export const PrivateRoomsSection: React.FC<PrivateRoomsSectionProps> = ({
  onOpenPrivateRooms,
  lang
}) => {
  return (
    <section className="bg-[#273e2a] text-[#f8efdc] py-20 lg:py-28 relative overflow-hidden border-b border-[#f8efdc]/10 select-none">
      {/* Elegant Rising Champagne Bubbles (Celebration Theme) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => {
          // Pseudo-random deterministic values to prevent hydration mismatches
          const size = (i % 3 + 1) * 6; // 6px, 12px, 18px
          const isOutline = i % 3 === 0;
          const leftPos = (i * 23) % 100; // Scatter across width
          const duration = 15 + (i % 5) * 5; // 15s to 35s
          const delay = (i % 7) * 2;
          const sway = i % 2 === 0 ? 50 : -50;
          
          return (
            <motion.div
              key={`bubble-${i}`}
              className={`absolute rounded-full ${
                isOutline 
                  ? 'border-[1.5px] border-[#91964f] bg-transparent' 
                  : 'bg-[#f8efdc]/20 backdrop-blur-sm'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${leftPos}%`,
                bottom: '-50px' // Start slightly below screen
              }}
              animate={{
                y: ["0vh", "-120vh"],
                opacity: [0, 0.7, 0],
                x: [0, sway, -sway/2, sway/2],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#91964f] block">
              {lang === 'en' ? 'Private Rooms' : 'Salons Privés'}
            </span>
            <h2
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f8efdc]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {lang === 'en' ? 'Celebrate big in our intimate spaces' : 'Célébrez grand dans nos espaces intimes'}
            </h2>
            <p className="text-base sm:text-lg text-[#f8efdc]/90 font-light leading-relaxed">
              {lang === 'en'
                ? 'Perfect for any occasion, no matter the size. Here, it feels like home—the ideal place to connect in comfort.'
                : 'Parfait pour toutes les occasions, quelle que soit l’envergure. Ici, on se sent comme chez soi — l’endroit rêvé pour se retrouver en tout confort.'}
            </p>
            <div className="pt-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenPrivateRooms}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#f8efdc] text-[#273e2a] hover:bg-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all cursor-pointer"
              >
                <span>{lang === 'en' ? 'Learn more' : 'En savoir plus'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image with 3D Depth & Floating Capacity Badge */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative group [perspective:1000px]"
          >
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f8efdc]/20 aspect-[16/11] relative"
            >
              <motion.img
                src="/images/gallery/interior-original.png"
                alt="Adipozhi Private Rooms & Dining Spaces"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                whileHover={{ scale: 1.08, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
                className="w-full h-full object-cover transform-gpu absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Quick capacity marker badge with float animation */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
              className="absolute -bottom-4 right-6 px-5 py-3 rounded-2xl bg-[#91964f] text-[#f8efdc] font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 select-none border border-white/20"
            >
              <Users className="w-4 h-4" />
              <span>{lang === 'en' ? 'Rooms for 16 to 120 guests' : 'Salons de 16 à 120 personnes'}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

