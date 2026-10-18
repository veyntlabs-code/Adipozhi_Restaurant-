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

/* ──────────────── Aesthetic Floating Flower Petal SVGs ──────────────── */
const FlowerPetalSVG = ({
  className,
  variant = 'classic',
  color = '#de2b2b',
}: {
  className?: string;
  variant?: 'classic' | 'curved' | 'flutter';
  color?: string;
}) => {
  const gradId = `petalGrad-hero-${variant}-${color.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <svg
      viewBox="0 0 54 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: 'drop-shadow(0 4px 12px rgba(80, 10, 20, 0.5))' }}
    >
      <defs>
        <radialGradient
          id={gradId}
          cx="35%"
          cy="28%"
          r="75%"
          fx="30%"
          fy="22%"
        >
          <stop offset="0%" stopColor="#ff7a90" />
          <stop offset="25%" stopColor="#f43f5e" />
          <stop offset="55%" stopColor={color} />
          <stop offset="85%" stopColor="#700d1e" />
          <stop offset="100%" stopColor="#3d030c" />
        </radialGradient>
      </defs>

      {variant === 'classic' && (
        <>
          <path
            d="M27 3C40 9 51 24 50 42C49 57 38 67 27 67C16 67 5 57 4 42C3 24 14 9 27 3Z"
            fill={`url(#${gradId})`}
            fillOpacity="0.94"
          />
          <path
            d="M27 12C32 22 36 34 33 48"
            stroke="#ffccd5"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />
          <path
            d="M27 25C22 32 17 40 18 50"
            stroke="#ffccd5"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeOpacity="0.3"
          />
        </>
      )}

      {variant === 'curved' && (
        <>
          <path
            d="M24 4C38 6 52 20 48 44C45 59 34 66 22 66C12 66 4 54 6 38C8 20 14 6 24 4Z"
            fill={`url(#${gradId})`}
            fillOpacity="0.92"
          />
          <path
            d="M25 10C33 22 36 38 30 52"
            stroke="#ffdde5"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
        </>
      )}

      {variant === 'flutter' && (
        <>
          <path
            d="M27 2C36 10 46 25 43 45C40 59 31 68 25 68C17 68 8 57 9 40C10 22 19 8 27 2Z"
            fill={`url(#${gradId})`}
            fillOpacity="0.95"
          />
          <path
            d="M27 12C30 24 31 38 27 52"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
        </>
      )}
    </svg>
  );
};

/* ──────────────── Floating Flower Petal Particle ──────────────── */
interface PetalProps {
  left: string;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  initialRotation: number;
  rotateZTarget: number;
  variant?: 'classic' | 'curved' | 'flutter';
  color?: string;
  blur?: number;
}

const FloatingPetal = ({
  left,
  delay,
  duration,
  size,
  drift,
  initialRotation,
  rotateZTarget,
  variant = 'classic',
  color = '#de2b2b',
  blur = 0,
}: PetalProps) => (
  <motion.div
    className="absolute pointer-events-none will-change-transform z-[5]"
    style={{
      left,
      top: '-8%',
      width: size,
      height: size * 1.3,
      filter: blur > 0 ? `blur(${blur}px)` : undefined,
    }}
    animate={{
      y: ['-5vh', '115vh'],
      x: [0, drift, -drift * 0.8, drift * 0.6, -drift * 0.3, 0],
      rotateZ: [initialRotation, initialRotation + rotateZTarget],
      rotateY: [0, 180, 360],
      rotateX: [0, 60, -30, 45, 0],
      scale: [0.9, 1.1, 0.95, 1],
      opacity: [0, 0.95, 0.95, 0.85, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: [0.35, 0.1, 0.65, 0.95],
    }}
  >
    <FlowerPetalSVG className="w-full h-full" variant={variant} color={color} />
  </motion.div>
);

/* ──────────────── Golden Sparkles / Rose Dew Particle ──────────────── */
const GoldenDewParticle = ({
  delay,
  size,
  left,
  duration,
}: {
  delay: number;
  size: number;
  left: string;
  duration: number;
}) => (
  <motion.div
    className="absolute pointer-events-none rounded-full z-[4]"
    style={{
      left,
      top: '-5%',
      width: size,
      height: size,
      background: 'radial-gradient(circle, #fff 0%, #ffd166 60%, transparent 100%)',
      boxShadow: '0 0 8px #f5a623',
    }}
    animate={{
      y: ['-5vh', '110vh'],
      x: [0, 20, -15, 10, 0],
      opacity: [0, 0.9, 1, 0.5, 0],
      scale: [0.8, 1.3, 0.9, 1.1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenMenus,
  onOpenReservation,
  onOpenGoingTo,
  onOpenOrder,
  onOpenGiftCard,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = containerRef.current;
    if (!triggerElement) return;

    const isTouch = typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: isTouch ? 0.3 : 0.1,
      }
    });

    const layers = [
      { layer: "1", yPercent: isTouch ? 10 : 20 },
      { layer: "2", yPercent: isTouch ? 18 : 40 }
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

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      gsap.killTweensOf(triggerElement.querySelectorAll('[data-parallax-layer]'));
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative overflow-hidden select-none bg-cover bg-center"
      style={{ backgroundImage: "url('/images/roses/logo-wall.jpg')" }}
    >
      {/* ─── Full-bleed hero container with expanded height ─── */}
      <div className="relative min-h-[96vh] sm:min-h-[100vh] lg:min-h-[105vh] flex flex-col justify-between">

        {/* ─── Organic background blobs ─── */}
        <BlobShape1 className="absolute -top-32 -left-32 w-[500px] h-[500px] text-[#c42525] opacity-60 pointer-events-none" />
        <BlobShape2 className="absolute bottom-0 right-0 w-[600px] h-[600px] text-[#b82222] opacity-50 pointer-events-none translate-x-1/4 translate-y-1/4" />
        <BlobShape1 className="absolute top-1/3 left-1/2 w-[350px] h-[350px] text-[#c42525] opacity-30 pointer-events-none -translate-x-1/2" />

        {/* Decorative swoosh lines (like Délice) */}
        <DecorativeSwoosh className="absolute top-[15%] left-[5%] w-[300px] text-[#f8efdc]/[0.08] pointer-events-none rotate-12" />
        <DecorativeSwoosh className="absolute bottom-[20%] right-[8%] w-[350px] text-[#f8efdc]/[0.06] pointer-events-none -rotate-6 scale-x-[-1]" />
        <WavyLine className="absolute bottom-[35%] left-0 w-full h-16 text-[#f8efdc]/[0.05] pointer-events-none" />

        {/* ─── Floating Flower Petals Animation ─── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[6]">
          {/* Layer 1: Foreground vibrant flower petals (6 on mobile, 10 on desktop) */}
          <FloatingPetal left="4%" delay={0} duration={10} size={30} drift={60} initialRotation={15} rotateZTarget={260} variant="classic" color="#de2b2b" />
          <FloatingPetal left="25%" delay={1} duration={9.5} size={28} drift={50} initialRotation={-20} rotateZTarget={220} variant="flutter" color="#ff4d6d" />
          <FloatingPetal left="55%" delay={6.5} duration={13} size={35} drift={-65} initialRotation={110} rotateZTarget={300} variant="classic" color="#de2b2b" />
          <FloatingPetal left="76%" delay={4.2} duration={12.5} size={36} drift={-50} initialRotation={85} rotateZTarget={-320} variant="curved" color="#9b111e" />
          <FloatingPetal left="94%" delay={5.8} duration={11.8} size={32} drift={-45} initialRotation={-40} rotateZTarget={-250} variant="flutter" color="#de2b2b" />

          {/* Desktop-only extra petals & heavy blur layers for max FPS on mobile */}
          <div className="hidden sm:contents">
            <FloatingPetal left="15%" delay={3.5} duration={12} size={34} drift={-70} initialRotation={45} rotateZTarget={-290} variant="curved" color="#e63946" />
            <FloatingPetal left="35%" delay={5} duration={11.5} size={32} drift={-55} initialRotation={75} rotateZTarget={310} variant="classic" color="#c1121f" />
            <FloatingPetal left="45%" delay={2} duration={10.5} size={26} drift={45} initialRotation={-35} rotateZTarget={-240} variant="curved" color="#e63946" />
            <FloatingPetal left="65%" delay={0.8} duration={11} size={30} drift={55} initialRotation={-15} rotateZTarget={270} variant="flutter" color="#ff4d6d" />
            <FloatingPetal left="85%" delay={2.8} duration={10} size={28} drift={40} initialRotation={30} rotateZTarget={210} variant="classic" color="#e63946" />

            {/* Layer 2: Delicate smaller fluttering flower petals */}
            <FloatingPetal left="10%" delay={7.2} duration={8.5} size={20} drift={35} initialRotation={50} rotateZTarget={180} variant="flutter" color="#ff758f" />
            <FloatingPetal left="29%" delay={8.5} duration={9} size={22} drift={-40} initialRotation={-60} rotateZTarget={-200} variant="curved" color="#ff4d6d" />
            <FloatingPetal left="60%" delay={3.8} duration={8.8} size={21} drift={45} initialRotation={35} rotateZTarget={220} variant="classic" color="#ff758f" />
            <FloatingPetal left="80%" delay={9.2} duration={9.2} size={23} drift={-35} initialRotation={-25} rotateZTarget={-190} variant="flutter" color="#e63946" />

            {/* Layer 3: Atmospheric soft-blurred background petals (cinematic depth of field) */}
            <FloatingPetal left="12%" delay={4.5} duration={15} size={46} drift={-80} initialRotation={-40} rotateZTarget={190} variant="classic" color="#a01a28" blur={2.5} />
            <FloatingPetal left="38%" delay={7.8} duration={16} size={52} drift={90} initialRotation={60} rotateZTarget={-230} variant="curved" color="#7c121e" blur={3.5} />
            <FloatingPetal left="68%" delay={1.2} duration={17} size={48} drift={-75} initialRotation={-15} rotateZTarget={280} variant="classic" color="#9b111e" blur={2.5} />
            <FloatingPetal left="88%" delay={9.5} duration={15.5} size={44} drift={70} initialRotation={50} rotateZTarget={-210} variant="flutter" color="#800f1c" blur={3} />

            {/* Golden rose dew sparkles */}
            <GoldenDewParticle delay={0} size={5} left="8%" duration={10} />
            <GoldenDewParticle delay={2} size={3} left="26%" duration={12} />
            <GoldenDewParticle delay={1} size={6} left="50%" duration={9.5} />
            <GoldenDewParticle delay={3.5} size={4} left="70%" duration={13} />
            <GoldenDewParticle delay={1.8} size={5} left="84%" duration={11} />
            <GoldenDewParticle delay={4.5} size={4} left="93%" duration={12.5} />
          </div>
        </div>

        {/* ─── Main content grid (Increased breathing room top & bottom) ─── */}
        <div className="relative z-10 flex-1 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-28 sm:pb-36 flex flex-col justify-center">
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
                  Adipozhi Family Restaurant Since 2026
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

            {/* ═══════ RIGHT: Vertical Arched Video Showcase (Elevated & Taller) ═══════ */}
            <motion.div
              data-parallax-layer="2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-1 -mt-4 sm:-mt-6 lg:-mt-8 z-20"
            >
              {/* Scalable Container with Substantially Increased Height */}
              <div className="relative w-full max-w-[390px] sm:max-w-[450px] xl:max-w-[490px] h-[600px] sm:h-[700px] lg:h-[760px] xl:h-[820px] max-h-[88vh] group">

                {/* Ambient Backlight / Glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#de2b2b]/40 via-[#f8efdc]/20 to-[#7c2627]/40 rounded-[200px] blur-3xl opacity-80 pointer-events-none -z-10" />

                {/* Arched Video Frame */}
                <div className="relative w-full h-full overflow-hidden rounded-t-[195px] sm:rounded-t-[245px] rounded-b-[2.2rem] sm:rounded-b-[2.8rem] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.85)] border-4 sm:border-[6px] border-[#f8efdc]/35 ring-1 ring-white/30 bg-black">
                  <video
                    src="/images/hero/hero_video.mp4"
                    poster="/images/hero/hero_video_poster.jpg"
                    preload="auto"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />

                  {/* Gradient vignettes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                </div>
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

