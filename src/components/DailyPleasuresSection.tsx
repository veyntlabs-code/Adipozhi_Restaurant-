'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { DAILY_PLEASURES } from '../data/restaurantData';
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles } from 'lucide-react';

interface DailyPleasuresSectionProps {
  onSelectPleasure: (title: string) => void;
  lang: 'en' | 'fr';
}

export const DailyPleasuresSection: React.FC<DailyPleasuresSectionProps> = ({
  onSelectPleasure,
  lang
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = DAILY_PLEASURES.length;

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generous card width for prominent plate presence
  const cardWidth = windowWidth < 640 ? 320 : windowWidth < 1024 ? 440 : 500;
  const maxTranslate = (totalItems - 1) * cardWidth;

  // Track page scroll through the extended sticky container (680vh for slow, luxurious journey)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Weighted, velvety-smooth spring physics for cinematic, slow-motion gliding
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 38,
    damping: 28,
    mass: 1.4,
    restDelta: 0.0001
  });

  // Horizontal translation with generous padding to center active item
  const trackX = useTransform(smoothProgress, [0, 1], [0, -maxTranslate]);

  // Slow, mesmerizing turntable rotation (360° total across the entire 680vh)
  const evenRotation = useTransform(smoothProgress, [0, 1], [0, -360]);
  const oddRotation = useTransform(smoothProgress, [0, 1], [0, 360]);

  // Synchronize active slide index smoothly
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    const clamped = Math.min(1, Math.max(0, latest));
    const nextIdx = Math.min(totalItems - 1, Math.max(0, Math.round(clamped * (totalItems - 1))));
    if (nextIdx !== activeIdx) {
      setActiveIdx(nextIdx);
    }
  });

  // Smooth scroll to specific dish
  const scrollToItem = useCallback((idx: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const scrollDistance = container.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (idx / (totalItems - 1)) * scrollDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, [totalItems]);

  const handleNext = () => {
    if (activeIdx < totalItems - 1) {
      scrollToItem(activeIdx + 1);
    } else {
      scrollToItem(0);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      scrollToItem(activeIdx - 1);
    } else {
      scrollToItem(totalItems - 1);
    }
  };

  // Auto-Tour player: slowly glides between dishes every 5 seconds
  useEffect(() => {
    if (!isPlayingTour) return;

    const timer = setInterval(() => {
      setActiveIdx((curr) => {
        const next = (curr + 1) % totalItems;
        scrollToItem(next);
        return next;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlayingTour, totalItems, scrollToItem]);

  const currentPleasure = DAILY_PLEASURES[activeIdx] || DAILY_PLEASURES[0];

  return (
    <section
      ref={containerRef}
      className="relative text-white select-none transition-colors duration-1000 ease-out h-[680vh]"
      style={{ backgroundColor: currentPleasure.color }}
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-16 px-4">
        {/* Animated Radial Backsplash */}
        <AnimatePresence>
          <motion.div
            key={currentPleasure.id}
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 3.2, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none z-0"
            style={{ backgroundColor: currentPleasure.color }}
          />
        </AnimatePresence>

        {/* Ambient Subtle Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/15 to-black/45 pointer-events-none z-[1]" />

        {/* TOP: Arched Curved Title "Daily Pleasures" & Experience Bar */}
        <div className="relative z-10 w-full flex flex-col items-center shrink-0 pt-2 sm:pt-3 space-y-1">
          <div className="w-[320px] sm:w-[480px] md:w-[620px] h-[60px] sm:h-[75px] md:h-[90px] relative overflow-visible pointer-events-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 620 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="dailyPleasuresGrandArch"
                  d="M 30 85 A 280 80 0 0 1 590 85"
                  fill="transparent"
                />
              </defs>
              <text
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider fill-white drop-shadow-lg"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <textPath
                  href="#dailyPleasuresGrandArch"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Daily Pleasures
                </textPath>
              </text>
            </svg>
          </div>


        </div>

        {/* MIDDLE: Horizontal Track centered via paddingLeft */}
        <div className="relative z-10 w-full overflow-visible flex items-center my-auto py-2">
          {/* Left Arrow Navigation */}
          <button
            onClick={handlePrev}
            aria-label="Previous Dish"
            className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-[#de2b2b] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-xl cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Navigation */}
          <button
            onClick={handleNext}
            aria-label="Next Dish"
            className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-[#de2b2b] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-xl cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <motion.div
            style={{
              x: trackX,
              paddingLeft: `calc(50vw - ${cardWidth / 2}px)`,
              paddingRight: `calc(50vw - ${cardWidth / 2}px)`
            }}
            className="flex items-start"
          >
            {DAILY_PLEASURES.map((item, idx) => {
              const isCenter = idx === activeIdx;
              const dishRotate = idx % 2 === 0 ? evenRotation : oddRotation;

              return (
                <div
                  key={item.id}
                  style={{ width: `${cardWidth}px` }}
                  className="flex-shrink-0 flex flex-col items-center text-center px-4 cursor-pointer group"
                  onClick={() => {
                    if (!isCenter) {
                      scrollToItem(idx);
                    } else {
                      onSelectPleasure(item.title);
                    }
                  }}
                >
                  {/* Circular Charger Plate with Slow Turntable Rotation */}
                  <motion.div
                    animate={{
                      scale: isCenter ? 1.10 : 0.84,
                      opacity: isCenter ? 1 : 0.45,
                      y: isCenter ? 0 : 16
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-[clamp(240px,38vh,400px)] h-[clamp(240px,38vh,400px)] flex items-center justify-center mb-5 sm:mb-7"
                  >
                    {/* Glowing Halo around active plate */}
                    {isCenter && (
                      <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse pointer-events-none" />
                    )}

                    {/* Solid Cream Charger Plate Rim */}
                    <div className="absolute inset-0 rounded-full bg-[#f8efdc] p-3.5 shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-102 group-hover:shadow-[0_40px_90px_rgba(0,0,0,0.65)] border-4 border-[#f8efdc]/40">
                      {/* Rotating Food Dish Surface */}
                      <motion.div
                        style={{ rotate: dishRotate }}
                        className="w-full h-full rounded-full overflow-hidden relative shadow-inner"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover select-none pointer-events-none transform-gpu"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Card Content Below Plate */}
                  <motion.div
                    animate={{
                      opacity: isCenter ? 1 : 0.4,
                      y: isCenter ? 0 : 8
                    }}
                    transition={{ duration: 0.5 }}
                    className="space-y-1.5 max-w-[340px] sm:max-w-[400px] px-2"
                  >
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md leading-tight"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base md:text-lg italic text-white/95 font-serif leading-snug line-clamp-2"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-white/80 font-light tracking-wide pt-0.5">
                      {item.schedule}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* BOTTOM: Minimal Interactive Dots */}
        <div className="relative z-10 flex items-center justify-center gap-2.5 pb-2 shrink-0">
          {DAILY_PLEASURES.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => scrollToItem(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                activeIdx === idx
                  ? 'w-12 bg-white shadow-xl'
                  : 'w-2.5 bg-white/35 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

