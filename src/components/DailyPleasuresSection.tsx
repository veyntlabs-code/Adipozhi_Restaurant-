'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { DAILY_PLEASURES } from '../data/restaurantData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DailyPleasuresSectionProps {
  onSelectPleasure: (title: string) => void;
}

export const DailyPleasuresSection: React.FC<DailyPleasuresSectionProps> = ({
  onSelectPleasure,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = DAILY_PLEASURES.length;

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlayingTour] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  // Generous card width for prominent plate presence
  const cardWidth = windowWidth < 640 ? 320 : windowWidth < 1024 ? 440 : 500;
  const maxTranslate = (totalItems - 1) * cardWidth;

  // Virtual scroll progress from 0 to 1 with ZERO extra page height
  const rawProgress = useMotionValue(0);

  // Smooth spring physics for velvety-smooth cinematic gliding
  const smoothProgress = useSpring(rawProgress, {
    stiffness: isMobile ? 65 : 42,
    damping: isMobile ? 24 : 28,
    mass: isMobile ? 0.8 : 1.2,
    restDelta: 0.0001
  });

  // Horizontal translation with generous padding to center active item
  const trackX = useTransform(smoothProgress, [0, 1], [0, -maxTranslate]);

  // Slow, mesmerizing turntable rotation (360° total across the entire duration)
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

  const goToItem = useCallback((idx: number) => {
    const clampedIdx = Math.min(totalItems - 1, Math.max(0, idx));
    const target = clampedIdx / (totalItems - 1);
    rawProgress.set(target);
    setActiveIdx(clampedIdx);
  }, [totalItems, rawProgress]);

  const handleNext = () => {
    if (activeIdx < totalItems - 1) {
      goToItem(activeIdx + 1);
    } else {
      goToItem(0);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      goToItem(activeIdx - 1);
    } else {
      goToItem(totalItems - 1);
    }
  };

  // Scroll wheel & trackpad animation handler (scrolls dishes with zero artificial page space)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelTimeout: NodeJS.Timeout | null = null;
    let accumulatedDelta = 0;

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 6) return;

      const current = rawProgress.get();
      const isDown = delta > 0;
      const isUp = delta < 0;

      // If scrolling down and haven't finished all dishes:
      if (isDown && current < 0.98) {
        e.preventDefault();
        e.stopPropagation();

        accumulatedDelta += delta;
        const progressIncrement = (delta / 450) * (1 / (totalItems - 1));
        const newProgress = Math.min(1, Math.max(0, current + progressIncrement));
        rawProgress.set(newProgress);

        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          accumulatedDelta = 0;
        }, 150);
      }
      // If scrolling up and haven't returned to first dish:
      else if (isUp && current > 0.02) {
        e.preventDefault();
        e.stopPropagation();

        accumulatedDelta += delta;
        const progressIncrement = (delta / 450) * (1 / (totalItems - 1));
        const newProgress = Math.min(1, Math.max(0, current + progressIncrement));
        rawProgress.set(newProgress);

        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          accumulatedDelta = 0;
        }, 150);
      }
      // If at end (current >= 0.98) and scrolling down, or at start (current <= 0.02) and scrolling up:
      // Don't preventDefault — page scrolls naturally to next / previous section with ZERO trapped space!
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', onWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [totalItems, rawProgress]);

  // Touch swipe support for direct horizontal navigation on mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Drag support for direct horizontal dragging
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    const threshold = 40;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  // Auto-Tour player: slowly glides between dishes every 5 seconds if enabled
  useEffect(() => {
    if (!isPlayingTour) return;

    const timer = setInterval(() => {
      setActiveIdx((curr) => {
        const next = (curr + 1) % totalItems;
        goToItem(next);
        return next;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlayingTour, totalItems, goToItem]);

  const currentPleasure = DAILY_PLEASURES[activeIdx] || DAILY_PLEASURES[0];

  return (
    <section
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative text-white select-none transition-colors duration-1000 ease-out h-[100dvh] min-h-[640px] w-full flex flex-col justify-between items-center overflow-hidden pt-20 sm:pt-28 pb-14 sm:pb-24 px-4"
      style={{ backgroundColor: currentPleasure.color }}
    >
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
      <div className="relative z-10 w-full flex flex-col items-center shrink-0 pt-2 sm:pt-4 space-y-1">
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
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          style={{
            x: trackX,
            paddingLeft: `calc(50vw - ${cardWidth / 2}px)`,
            paddingRight: `calc(50vw - ${cardWidth / 2}px)`
          }}
          className="flex items-start cursor-grab active:cursor-grabbing"
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
                    goToItem(idx);
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
            onClick={() => goToItem(idx)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              activeIdx === idx
                ? 'w-12 bg-white shadow-xl'
                : 'w-2.5 bg-white/35 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
