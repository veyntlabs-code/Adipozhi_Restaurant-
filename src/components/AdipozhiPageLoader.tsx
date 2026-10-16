'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const AdipozhiPageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglineSequence = [
    'அடிப்பொழி பேமிலி ரெஸ்டாரண்ட்',
    'Aromatic Dum Biryani & Charcoal Al-Faham',
    'Monday Market · Est. 2026',
  ];

  useEffect(() => {
    // Check if user already saw the loader in this session
    const hasSeen = sessionStorage.getItem('adipozhi_loader_seen');
    if (hasSeen) {
      setLoading(false);
      return;
    }

    // Sequence tagline changes
    const t1 = setTimeout(() => setTaglineIndex(1), 700);
    const t2 = setTimeout(() => setTaglineIndex(2), 1400);

    // Complete loader animation
    const endTimer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('adipozhi_loader_seen', 'true');
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="adipozhi-page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            filter: 'blur(10px)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#121b13] text-[#f8efdc] select-none overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-[#de2b2b]/15 via-transparent to-transparent pointer-events-none" />

          {/* Animated Golden Steam Trails */}
          <div className="relative w-40 h-28 flex items-center justify-center mb-4">
            {/* Steam curves */}
            <svg
              className="absolute -top-4 w-28 h-20 opacity-70"
              viewBox="0 0 100 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M30 50 Q20 30 35 15 T30 0"
                stroke="#d4a359"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, y: 10 }}
                animate={{
                  pathLength: [0, 1, 0.8],
                  opacity: [0, 0.9, 0],
                  y: [-5, -20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.path
                d="M50 55 Q60 35 45 20 T52 0"
                stroke="#f8efdc"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, y: 10 }}
                animate={{
                  pathLength: [0, 1, 0.8],
                  opacity: [0, 1, 0],
                  y: [-5, -24],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: 'easeInOut',
                }}
              />
              <motion.path
                d="M70 52 Q80 32 65 18 T72 0"
                stroke="#de2b2b"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, y: 10 }}
                animate={{
                  pathLength: [0, 1, 0.8],
                  opacity: [0, 0.85, 0],
                  y: [-5, -20],
                }}
                transition={{
                  duration: 1.9,
                  repeat: Infinity,
                  delay: 0.6,
                  ease: 'easeInOut',
                }}
              />
            </svg>

            {/* Glowing Handi / Dum Pot Silhouette with Brand Emblem */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-b from-[#273e2a] to-[#121b13] border border-[#d4a359]/40 shadow-[0_0_40px_rgba(222,43,43,0.25)] flex items-center justify-center p-3"
            >
              <img
                src="/logo_text.png"
                alt="Adipozhi"
                className="w-full h-auto object-contain drop-shadow"
              />
            </motion.div>
          </div>

          {/* Restaurant Brand Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center px-4"
          >
            <h1
              className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#f8efdc] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ADIPOZHI
            </h1>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a359] mt-0.5">
              Family Restaurant
            </p>
          </motion.div>

          {/* Sequential Tagline / Mood Text */}
          <div className="h-7 mt-3 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={taglineIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-xs sm:text-sm font-light text-[#f8efdc]/80 tracking-wide"
              >
                {taglineSequence[taglineIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Elegant Gold Progress Indicator */}
          <div className="w-48 sm:w-60 h-[2px] bg-[#f8efdc]/15 rounded-full mt-6 overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#de2b2b] via-[#d4a359] to-[#f8efdc] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.1, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
