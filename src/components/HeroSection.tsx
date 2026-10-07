'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, ShoppingBag, Gift } from 'lucide-react';

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

  // Headline word cycling
  const headlineWords = [
    { line1: 'Every reason', line2: 'to come', line3: 'is a good one' },
    { line1: 'Flavours', line2: 'that bring', line3: 'families together' },
    { line1: 'The taste', line2: 'of home,', line3: 'perfected' },
  ];
  const [headlineIdx, setHeadlineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((prev) => (prev + 1) % headlineWords.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentHeadline = headlineWords[headlineIdx];

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative bg-[#de2b2b] overflow-hidden select-none"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">

            {/* ═══════ LEFT: Giant italic headline ═══════ */}
            <motion.div
              data-parallax-layer="1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 z-20 space-y-8 pr-4"
            >
              {/* Animated headline */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={headlineIdx}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#f8efdc]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-normal italic leading-[0.95] tracking-tight">
                      {currentHeadline.line1}
                    </span>
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-normal italic leading-[0.95] tracking-tight">
                      {currentHeadline.line2}
                    </span>
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-black italic leading-[0.95] tracking-tight">
                      {currentHeadline.line3}
                    </span>
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Subheading */}
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#f8efdc]/90">
                  Adipozhi Family Restaurant Since 2020
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#f8efdc]/80 font-light leading-relaxed max-w-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  In the heart of Monday Market, blending warmth, grandeur and togetherness in a vibrant and welcoming ambiance.
                </p>
              </div>

              {/* ─── CTA Row (Délice style — bordered pill buttons) ─── */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: '#f8efdc', color: '#de2b2b' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenGoingTo}
                  className="px-5 sm:px-7 py-3 border-2 border-[#f8efdc] text-[#f8efdc] font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Going to Adipozhi</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: '#f8efdc', color: '#de2b2b' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenReservation}
                  className="px-5 sm:px-7 py-3 border-2 border-[#f8efdc] text-[#f8efdc] font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: '#f8efdc', color: '#de2b2b' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenOrder}
                  className="px-5 sm:px-7 py-3 border-2 border-[#f8efdc] text-[#f8efdc] font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] rounded-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Online</span>
                </motion.button>
              </div>
            </motion.div>

            {/* ═══════ RIGHT: Cinematic Arched Video ═══════ */}
            <motion.div
              data-parallax-layer="2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative flex items-center justify-end lg:-mr-16 xl:-mr-24 -mt-4 sm:-mt-8 lg:-mt-12 xl:-mt-16"
            >
              <div className="relative w-full h-[550px] sm:h-[650px] xl:h-[750px]">
                {/* Glow behind video */}
                <div className="absolute inset-0 scale-105 bg-[#7c2627]/30 blur-2xl pointer-events-none translate-x-10" />

                {/* Main hero video with premium arched window design */}
                <div className="relative w-full h-full overflow-hidden rounded-t-[200px] sm:rounded-t-[300px] rounded-b-[2rem] sm:rounded-b-[3rem] shadow-2xl border-4 sm:border-8 border-[#f8efdc]/10">
                  <video
                    src="/images/hero/hero_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#de2b2b]/40 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Floating image with new asymmetrical/arch design (Lifted up) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute bottom-12 left-4 sm:-left-8 w-36 h-48 sm:w-48 sm:h-64 overflow-hidden shadow-2xl z-20 border-4 border-[#de2b2b]"
                  style={{
                    borderRadius: '100px 100px 20px 20px', // Arch shape
                  }}
                >
                  <img
                    src="/hero_biryani.jpg"
                    alt="Authentic dum biryani in copper handi"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    loading="eager"
                  />
                </motion.div>

                {/* Small decorative blob accent */}
                <motion.div
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="absolute top-16 -right-8 sm:-right-12 z-10"
                >
                  <BlobShape2 className="w-24 h-24 sm:w-32 sm:h-32 text-[#7c2627]/80 drop-shadow-xl" />
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

