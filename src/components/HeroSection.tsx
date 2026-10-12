'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, ShoppingBag, Gift, Compass, Volume2, VolumeX } from 'lucide-react';

interface HeroSectionProps {
  onOpenMenus: () => void;
  onOpenReservation: () => void;
  onOpenGoingTo: () => void;
  onOpenOrder: () => void;
  onOpenGiftCard: () => void;
  lang: 'en' | 'fr';
}

/* ───────────────────────── Organic Blob SVGs ───────────────────────── */

const BlobShape1 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 600 600" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M426.4 369.2C399.8 427.5 345.3 477.4 283.5 487.5C221.7 497.6 152.5 467.8 108.5 419.4C64.5 371 45.8 304 53.3 243.3C60.8 182.7 94.5 128.4 143.4 93.8C192.3 59.2 256.4 44.3 314 56.7C371.7 69.2 422.8 109 447.5 162.5C472.2 216 470.5 283.2 453.2 332.8C435.8 382.3 402.8 414.2 426.4 369.2Z"
      fill="currentColor"
    />
  </svg>
);

const BlobShape2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 600 600" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M440.5 322.3C435.2 388.5 390.6 454.4 330.3 478.5C270 502.6 194 484.8 143.8 440.8C93.5 396.8 69 326.5 72.3 262.2C75.5 197.8 106.3 139.3 153.5 100.5C200.7 61.7 264.3 42.7 322.5 55.8C380.7 68.8 433.5 114 458.2 172.8C482.8 231.5 479.3 303.8 462.5 352.3C445.7 400.8 415.5 425.5 440.5 322.3Z"
      fill="currentColor"
    />
  </svg>
);

const WavyLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

/* ─────────────────────── Organic Decorative Swoosh ──────────────────── */

const DecorativeSwoosh = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 100 C50 20, 150 180, 200 80 C250 -20, 350 160, 400 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenMenus,
  onOpenReservation,
  onOpenGoingTo,
  onOpenOrder,
  onOpenGiftCard,
  lang
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = containerRef.current;

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 20 },
        { layer: "2", yPercent: 40 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement.querySelectorAll('[data-parallax-layer]'));
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative overflow-hidden select-none bg-cover bg-center"
      style={{ backgroundImage: "url('/images/roses/logo-wall.jpg')" }}
    >
      {/* ─── Full-bleed hero container ─── */}
      <div className="relative min-h-[92vh] sm:min-h-screen flex flex-col">

        {/* ─── Organic background blobs ─── */}
        <BlobShape1 className="absolute -top-32 -left-32 w-[500px] h-[500px] text-[#c42525] opacity-60 pointer-events-none" />
        <BlobShape2 className="absolute bottom-0 right-0 w-[600px] h-[600px] text-[#b82222] opacity-50 pointer-events-none translate-x-1/4 translate-y-1/4" />
        <BlobShape1 className="absolute top-1/3 left-1/2 w-[350px] h-[350px] text-[#c42525] opacity-30 pointer-events-none -translate-x-1/2" />

        {/* Decorative swoosh lines (like Délice) */}
        <DecorativeSwoosh className="absolute top-[15%] left-[5%] w-[300px] text-[#f8efdc]/[0.08] pointer-events-none rotate-12" />
        <DecorativeSwoosh className="absolute bottom-[20%] right-[8%] w-[350px] text-[#f8efdc]/[0.06] pointer-events-none -rotate-6 scale-x-[-1]" />
        <WavyLine className="absolute bottom-[35%] left-0 w-full h-16 text-[#f8efdc]/[0.05] pointer-events-none" />

        {/* ─── Main content grid ─── */}
        <div className="relative z-10 flex-1 max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-10 sm:pt-16 lg:pt-20 pb-40 sm:pb-48 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* ═══════ LEFT: Giant italic headline ═══════ */}
            <motion.div
              data-parallax-layer="1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 z-20 space-y-8 pr-2 lg:pr-6"
            >
              {/* Static headline */}
              <div className="relative pb-2">
                <h1
                  className="text-[#f8efdc] leading-none"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.75rem] font-normal italic leading-[0.95] tracking-tight">
                    Every reason
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.75rem] font-normal italic leading-[0.95] tracking-tight">
                    to come
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.75rem] font-black italic leading-[0.95] tracking-tight">
                    is a good one
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#f8efdc]/90">
                  Adipozhi Family Restaurant Since 2020
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#f8efdc]/80 font-light leading-relaxed max-w-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  In the heart of Monday Market, blending warmth, grandeur and togetherness in a vibrant and welcoming ambiance.
                </p>
              </div>

              {/* ─── CTA Row (Bordered pill buttons) ─── */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: '#f8efdc', color: '#de2b2b' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenGoingTo}
                  className="px-5 sm:px-7 py-3 border-2 border-[#f8efdc] text-[#f8efdc] font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer flex items-center gap-2 shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Going to Adipozhi</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: '#f8efdc', color: '#de2b2b' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenReservation}
                  className="px-5 sm:px-7 py-3 border-2 border-[#f8efdc] text-[#f8efdc] font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer flex items-center gap-2 shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: '#f8efdc', color: '#de2b2b' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenOrder}
                  className="px-5 sm:px-7 py-3 border-2 border-[#f8efdc] text-[#f8efdc] font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer flex items-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Online</span>
                </motion.button>
              </div>
            </motion.div>

            {/* ═══════ RIGHT: 9:16 Vertical Arched Video Showcase ═══════ */}
            <motion.div
              data-parallax-layer="2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-6"
            >
              {/* 9:16 Ratio Container */}
              <div className="relative w-full max-w-[340px] sm:max-w-[390px] xl:max-w-[420px] aspect-[9/16] group">
                
                {/* Ambient Backlight / Glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#de2b2b]/40 via-[#f8efdc]/20 to-[#7c2627]/40 rounded-[200px] blur-3xl opacity-80 pointer-events-none -z-10" />

                {/* Arched Video Frame */}
                <div className="relative w-full h-full overflow-hidden rounded-t-[170px] sm:rounded-t-[210px] rounded-b-[2rem] sm:rounded-b-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] border-4 sm:border-[6px] border-[#f8efdc]/30 ring-1 ring-white/30 bg-black">
                  <video
                    src="/images/hero/hero_video.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />

                  {/* Gradient vignettes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Live Badge & Audio Toggle */}
                  <div className="absolute top-4 sm:top-5 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <div className="pointer-events-auto inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-white border border-white/20 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Kitchen · Bun Parotta</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                      className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-[#de2b2b] text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Right Floating Action Pill Bar (Directions, RESERVE, ORDER ONLINE) */}
                  <div className="absolute bottom-3.5 sm:bottom-4 right-3 sm:right-3.5 z-20 flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border border-white/60">
                    <button
                      type="button"
                      onClick={onOpenGoingTo}
                      className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-[#1a1a1a] hover:text-[#de2b2b] transition-colors cursor-pointer"
                    >
                      <Compass className="w-3 h-3 text-[#de2b2b]" />
                      <span>Directions</span>
                    </button>

                    <button
                      type="button"
                      onClick={onOpenReservation}
                      className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-white bg-[#de2b2b] hover:bg-[#b81d1d] shadow-sm transition-all cursor-pointer"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>RESERVE</span>
                    </button>

                    <button
                      type="button"
                      onClick={onOpenOrder}
                      className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-white bg-[#1a1a1a] hover:bg-black shadow-sm transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span className="whitespace-nowrap">ORDER ONLINE</span>
                    </button>
                  </div>
                </div>

                {/* Floating Biryani Handi Dish Badge (Bottom-Left Overlap as in screenshot) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-7 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-2xl z-30 border-4 border-[#de2b2b] bg-black ring-4 ring-[#f8efdc]/30 group/dish cursor-pointer"
                  onClick={onOpenMenus}
                  title="View Authentic Dum Biryani Menu"
                >
                  <img
                    src="/hero_biryani.jpg"
                    alt="Authentic dum biryani in copper handi"
                    className="w-full h-full object-cover group-hover/dish:scale-110 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Decorative Blob */}
                <motion.div
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="absolute top-12 -right-6 sm:-right-8 z-0 pointer-events-none"
                >
                  <BlobShape2 className="w-20 h-20 sm:w-28 sm:h-28 text-[#7c2627]/60 drop-shadow-xl" />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>


        {/* ─── Bottom organic wave transition to next section ─── */}
        <div className="absolute bottom-0 left-0 w-full z-30">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block w-full h-16 sm:h-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C180,90 360,10 540,50 C720,90 900,20 1080,60 C1260,100 1350,30 1440,60 L1440,100 L0,100 Z"
              fill="#f8efdc"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

