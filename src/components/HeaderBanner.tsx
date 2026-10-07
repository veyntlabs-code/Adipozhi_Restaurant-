'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BANNER_MESSAGES } from '../data/restaurantData';
import { Wine, Pizza, Fish, Coffee, Sparkles } from 'lucide-react';

interface HeaderBannerProps {
  lang?: 'en' | 'fr'; setLang?: any;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = () => {
  const [isPaused, setIsPaused] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'pizza':
        return <Pizza className="w-3.5 h-3.5 text-[#f8efdc]" />;
      case 'fish':
      case 'mussels':
        return <Fish className="w-3.5 h-3.5 text-[#f8efdc]" />;
      case 'wine':
        return <Wine className="w-3.5 h-3.5 text-[#f8efdc]" />;
      case 'egg':
        return <Coffee className="w-3.5 h-3.5 text-[#f8efdc]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#f8efdc]" />;
    }
  };

  // Duplicate items for continuous seamless loop
  const marqueeItems = [...BANNER_MESSAGES, ...BANNER_MESSAGES, ...BANNER_MESSAGES];

  return (
    <div className="w-full bg-[#de2b2b] text-[#f8efdc] border-b border-[#f8efdc]/20 text-xs font-sans select-none overflow-hidden relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
        {/* Continuous Gliding Endless Marquee Track */}
        <div
          className="relative flex-1 h-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap cursor-default"
            animate={{ x: isPaused ? undefined : ['0%', '-33.333%'] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: 'linear',
            }}
          >
            {marqueeItems.map((msg, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 group transition-transform hover:scale-105">
                <span className="shrink-0 transition-transform duration-300 group-hover:rotate-12">
                  {getIcon(msg.icon)}
                </span>
                <span className="font-bold tracking-wide text-xs text-[#f8efdc]">
                  {msg.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#f8efdc] shrink-0 opacity-80" />
                <span className="text-[#f8efdc]/75 text-[11px]">
                  {msg.sub}
                </span>
                <span className="text-[#f8efdc]/40 text-xs px-2 font-serif">·</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="c-double-rule" />
    </div>
  );
};

