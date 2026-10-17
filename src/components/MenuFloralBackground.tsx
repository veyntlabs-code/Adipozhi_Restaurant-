'use client';

import React from 'react';
import { motion } from 'motion/react';

/* ──────────────── Aesthetic Floating Flower Petal SVGs ──────────────── */
export const FlowerPetalSVG = ({
  className,
  variant = 'classic',
  color = '#de2b2b',
}: {
  className?: string;
  variant?: 'classic' | 'curved' | 'flutter';
  color?: string;
}) => {
  const gradId = `petalGrad-menu-${variant}-${color.replace(/[^a-zA-Z0-9]/g, '')}`;

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

/* ──────────────── Floating Flower Petal Particle (Matching HeroSection) ──────────────── */
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
    className="fixed pointer-events-none will-change-transform z-[5]"
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
    className="fixed pointer-events-none rounded-full z-[4]"
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

/* ──────────────── Decorative Golden Rose Floral Outlines (from HeroSection) ──────────────── */
const ElegantRoseOutline = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M100 40C85 40 70 52 70 70C70 82 78 92 88 97C80 102 75 112 75 125C75 145 92 160 112 160C132 160 148 145 148 125C148 114 142 105 133 99C142 93 148 83 148 70C148 52 135 40 120 40C114 40 106 43 100 48C94 43 86 40 100 40Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="2 3"
    />
    <path
      d="M100 65C92 65 85 72 85 80C85 88 92 95 100 95C108 95 115 88 115 80C115 72 108 65 100 65Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M100 80C97 80 94 83 94 86C94 89 97 92 100 92C103 92 106 89 106 86C106 83 103 80 100 80Z"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M70 110C55 115 45 130 50 145C55 160 70 168 85 160"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
    />
    <path
      d="M130 110C145 115 155 130 150 145C145 160 130 168 115 160"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
    />
  </svg>
);

/* ──────────────── Rose Ambient Orbs (Matching HeroSection) ──────────────── */
const RoseAmbientOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
    {/* Header-matching vibrant crimson rose bloom in top */}
    <motion.div
      className="absolute -top-24 left-1/4 w-[750px] h-[550px] rounded-full blur-[110px] pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(222,43,43,0.55) 0%, rgba(196,37,37,0.3) 50%, transparent 80%)',
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.75, 0.95, 0.75],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Vibrant rose aura breathing in bottom right */}
    <motion.div
      className="absolute -bottom-20 -right-20 w-[680px] h-[680px] rounded-full blur-[120px] pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(222,43,43,0.48) 0%, rgba(180,30,40,0.25) 60%, transparent 85%)',
      }}
      animate={{
        scale: [1.15, 1, 1.15],
        opacity: [0.7, 0.5, 0.7],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Center rose warmth */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full blur-[140px] pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(222,43,43,0.32) 0%, rgba(248,239,220,0.08) 50%, transparent 75%)',
      }}
      animate={{
        scale: [0.95, 1.15, 0.95],
        opacity: [0.45, 0.7, 0.45],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

/* ──────────────── Full Page Floating Flower Petal Background Component (Identical to HeroSection) ──────────────── */
export const MenuFloralBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Exactly the Rose Wallpaper from the Hero Section (`/images/roses/logo-wall.jpg`) */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/images/roses/logo-wall.jpg')",
        }}
      />

      {/* 2. Hero Section's Signature Ambient Background Overlays (Deep crimson, warm vignetting) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#de2b2b]/35 via-[#260a0d]/40 to-[#1a0407]/65 pointer-events-none z-[1]" />
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(222,43,43,0.35) 0%, rgba(196,37,37,0.18) 50%, transparent 80%)',
        }}
      />

      {/* 3. Hero Section Aesthetic Rose Breathing Light & Ambient Orbs */}
      <RoseAmbientOrbs />

      {/* 4. Subtle decorative spinning rose filigrees in corners (hidden on small mobile to conserve GPU memory) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
        className="hidden sm:block absolute -top-16 -right-16 w-80 h-80 text-[#f8efdc]/[0.08] pointer-events-none z-[2]"
      >
        <ElegantRoseOutline className="w-full h-full" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="hidden sm:block absolute bottom-10 -left-20 w-96 h-96 text-[#f8efdc]/[0.07] pointer-events-none z-[2]"
      >
        <ElegantRoseOutline className="w-full h-full" />
      </motion.div>

      {/* 5. ─── Aesthetic Floating Flower Petals (Optimized: 4 petals on mobile, full lush set on desktop) ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[4]">
        {/* Universal Core Petals (Fast, smooth 60fps on all mobile screens) */}
        <FloatingPetal left="8%" delay={0} duration={11} size={26} drift={40} initialRotation={15} rotateZTarget={240} variant="classic" color="#de2b2b" />
        <FloatingPetal left="34%" delay={3.5} duration={12} size={28} drift={-45} initialRotation={45} rotateZTarget={-260} variant="curved" color="#e63946" />
        <FloatingPetal left="64%" delay={1.5} duration={10.5} size={25} drift={35} initialRotation={-20} rotateZTarget={200} variant="flutter" color="#ff4d6d" />
        <FloatingPetal left="86%" delay={4.2} duration={12} size={28} drift={-40} initialRotation={80} rotateZTarget={-250} variant="curved" color="#9b111e" />

        {/* Desktop-only extra petals and sparkles for enhanced depth without mobile lag */}
        <div className="hidden sm:contents">
          <FloatingPetal left="18%" delay={2} duration={9.5} size={28} drift={50} initialRotation={-35} rotateZTarget={-240} variant="curved" color="#e63946" />
          <FloatingPetal left="48%" delay={6} duration={13} size={34} drift={-60} initialRotation={110} rotateZTarget={300} variant="classic" color="#de2b2b" />
          <FloatingPetal left="74%" delay={0.8} duration={11} size={30} drift={55} initialRotation={-15} rotateZTarget={270} variant="flutter" color="#ff4d6d" />
          <FloatingPetal left="93%" delay={5.8} duration={11.8} size={32} drift={-45} initialRotation={-40} rotateZTarget={-250} variant="flutter" color="#de2b2b" />

          {/* Delicate smaller fluttering flower petals */}
          <FloatingPetal left="12%" delay={7.2} duration={8.5} size={20} drift={35} initialRotation={50} rotateZTarget={180} variant="flutter" color="#ff758f" />
          <FloatingPetal left="52%" delay={3.8} duration={8.8} size={21} drift={45} initialRotation={35} rotateZTarget={220} variant="classic" color="#ff758f" />

          {/* Atmospheric soft-blurred background petals */}
          <FloatingPetal left="15%" delay={4.5} duration={15} size={46} drift={-80} initialRotation={-40} rotateZTarget={190} variant="classic" color="#a01a28" blur={2.5} />
          <FloatingPetal left="72%" delay={1.2} duration={17} size={48} drift={-75} initialRotation={-15} rotateZTarget={280} variant="classic" color="#9b111e" blur={2.5} />

          {/* Golden rose dew sparkles */}
          <GoldenDewParticle delay={0} size={5} left="10%" duration={10} />
          <GoldenDewParticle delay={2} size={3} left="25%" duration={12} />
          <GoldenDewParticle delay={1} size={6} left="48%" duration={9.5} />
          <GoldenDewParticle delay={3.5} size={4} left="66%" duration={13} />
          <GoldenDewParticle delay={1.8} size={5} left="82%" duration={11} />
        </div>
      </div>
    </div>
  );
};
