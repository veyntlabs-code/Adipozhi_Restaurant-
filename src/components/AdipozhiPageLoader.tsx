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
    // In production, keep to once per session to respect returning users.
    // In development mode, always show so you can preview changes on refresh.
    if (process.env.NODE_ENV !== 'development') {
      const hasSeen = sessionStorage.getItem('adipozhi_theme_loader_seen');
      if (hasSeen) {
        setLoading(false);
        return;
      }
    }

    // Sequence tagline changes smoothly
    const t1 = setTimeout(() => setTaglineIndex(1), 600);
    const t2 = setTimeout(() => setTaglineIndex(2), 1250);

    // Complete loader animation smoothly
    const endTimer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem('adipozhi_theme_loader_seen', 'true');
      } catch {
        // Ignore storage errors in private browsing
      }
    }, 2000);

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
            scale: 1.03,
            filter: 'blur(12px)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-b from-[#8a1417] via-[#5a090b] to-[#2c0406] text-[#f8efdc] select-none overflow-hidden"
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Radiant Scarlet & Gold Ambient Backlight */}
          <div className="absolute inset-0 bg-radial from-[#de2b2b]/35 via-transparent to-black/60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4a359]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Animated Golden Steam Curves */}
          <div className="relative w-44 h-32 flex items-center justify-center mb-3">
            <svg
              className="absolute -top-6 w-32 h-24 overflow-visible"
              viewBox="0 0 100 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left steam thread */}
              <motion.path
                d="M30 50 Q20 30 35 15 T30 0"
                stroke="#d4a359"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, y: 10 }}
                animate={{
                  pathLength: [0, 1, 0.8],
                  opacity: [0, 0.9, 0],
                  y: [-5, -22],
                }}
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Center steam thread */}
              <motion.path
                d="M50 55 Q60 35 45 20 T52 0"
                stroke="#f8efdc"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, y: 10 }}
                animate={{
                  pathLength: [0, 1, 0.8],
                  opacity: [0, 1, 0],
                  y: [-5, -26],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: 'easeInOut',
                }}
              />
              {/* Right steam thread */}
              <motion.path
                d="M70 52 Q80 32 65 18 T72 0"
                stroke="#f5a623"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, y: 10 }}
                animate={{
                  pathLength: [0, 1, 0.8],
                  opacity: [0, 0.85, 0],
                  y: [-5, -22],
                }}
                transition={{
                  duration: 1.9,
                  repeat: Infinity,
                  delay: 0.6,
                  ease: 'easeInOut',
                }}
              />
            </svg>

            {/* Glowing Signature Red Ceramic Handi / Pot Silhouette */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-b from-[#a81c1f] via-[#7d1012] to-[#450708] border-2 border-[#d4a359]/60 shadow-[0_0_50px_rgba(222,43,43,0.7),inset_0_2px_12px_rgba(248,239,220,0.25)] flex items-center justify-center p-4 group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-[#f8efdc]/15 to-transparent pointer-events-none" />
              <img
                src="/logo_text.png"
                alt="Adipozhi"
                className="w-full h-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>

          {/* Restaurant Brand Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-center px-4"
          >
            <h1
              className="text-3xl sm:text-4xl font-extrabold tracking-widest text-[#f8efdc] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ADIPOZHI
            </h1>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-[#d4a359] mt-1 drop-shadow">
              Family Restaurant
            </p>
          </motion.div>

          {/* Sequential Tagline in Tamil and English */}
          <div className="h-7 mt-3 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={taglineIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-xs sm:text-sm font-light text-[#f8efdc]/90 tracking-wide text-center"
              >
                {taglineSequence[taglineIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Theme-colored Crimson & Gold Progress Bar */}
          <div className="w-52 sm:w-64 h-[3px] bg-black/40 border border-[#f8efdc]/15 rounded-full mt-7 overflow-hidden relative shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#de2b2b] via-[#f5a623] to-[#f8efdc] rounded-full shadow-[0_0_12px_rgba(245,166,35,0.8)]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.9, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
