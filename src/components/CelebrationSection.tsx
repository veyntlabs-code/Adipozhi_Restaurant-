'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const CELEBRATION_VIDEOS = [
  {
    id: 'celebration-1',
    src: '/Celebration.MP4',
    title: 'Adipozhi Celebrations',
    subtitle: 'Reel 01 · Grand Family Moments',
    poster: '/images/moments/moment-celebration.jpg'
  },
  {
    id: 'celebration-2',
    src: '/Celebration_01.MP4',
    title: 'Festive Gathering',
    subtitle: 'Reel 02 · Lively Celebration Feasts',
    poster: '/images/moments/moment-celebration.jpg'
  }
];

interface CelebrationSectionProps {
  onOpenPrivateRooms: () => void;
  onOpenReservation?: () => void;
}

export const CelebrationSection: React.FC<CelebrationSectionProps> = ({
  onOpenPrivateRooms,
  onOpenReservation,
}) => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const currentVideo = CELEBRATION_VIDEOS[activeVideoIndex];

  // Seamlessly transition and play the chosen video
  const playVideo = (index: number) => {
    setActiveVideoIndex(index);
    if (index === 0) {
      if (video1Ref.current) {
        video1Ref.current.currentTime = 0;
        video1Ref.current.play().catch(() => {});
      }
      if (video2Ref.current) {
        video2Ref.current.pause();
      }
    } else {
      if (video2Ref.current) {
        video2Ref.current.currentTime = 0;
        video2Ref.current.play().catch(() => {});
      }
      if (video1Ref.current) {
        video1Ref.current.pause();
      }
    }
  };

  // Ensure Video 1 begins playing immediately on load and loop is persistent
  useEffect(() => {
    const v1 = video1Ref.current;
    if (v1) {
      v1.muted = isMuted;
      v1.play().catch(() => {});
    }
  }, []);

  // Synchronize audio mute state across both video elements
  useEffect(() => {
    if (video1Ref.current) video1Ref.current.muted = isMuted;
    if (video2Ref.current) video2Ref.current.muted = isMuted;
  }, [isMuted]);

  // Video 1 ends -> instantly starts Video 2
  const handleVideo1Ended = () => {
    playVideo(1);
  };

  // Video 2 ends -> instantly starts Video 1 (continuous infinite loop)
  const handleVideo2Ended = () => {
    playVideo(0);
  };

  const handleNextVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    playVideo((activeVideoIndex + 1) % CELEBRATION_VIDEOS.length);
  };

  const handlePrevVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    playVideo((activeVideoIndex - 1 + CELEBRATION_VIDEOS.length) % CELEBRATION_VIDEOS.length);
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (video1Ref.current) video1Ref.current.muted = newMuted;
    if (video2Ref.current) video2Ref.current.muted = newMuted;
  };

  return (
    <section className="bg-gradient-to-b from-[#112013] via-[#182b1b] to-[#0d180f] text-[#f8efdc] py-14 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#f8efdc]/10 select-none">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#91964f]/12 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#de2b2b]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Floating Champagne Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => {
          const size = ((i % 3) + 1) * 6;
          const isOutline = i % 3 === 0;
          const leftPos = (i * 29) % 100;
          const duration = 16 + (i % 5) * 4;
          const delay = (i % 7) * 2;
          const sway = i % 2 === 0 ? 40 : -40;

          return (
            <motion.div
              key={`bubble-${i}`}
              className={`absolute rounded-full ${
                isOutline
                  ? 'border-[1.5px] border-[#e5c98d]/40 bg-transparent'
                  : 'bg-[#f8efdc]/15 backdrop-blur-sm'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${leftPos}%`,
                bottom: '-50px'
              }}
              animate={{
                y: ['0vh', '-120vh'],
                opacity: [0, 0.6, 0],
                x: [0, sway, -sway / 2, sway / 2]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'linear',
                delay: delay
              }}
            />
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* ════════════════ TOP: Narrative Header ════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12"
        >
          {/* Main Title */}
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f8efdc] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Celebrate Big in Our <span className="italic font-normal text-[#e5c98d]">Intimate</span> Spaces
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#f8efdc]/85 font-light leading-relaxed max-w-2xl mx-auto">
            From joyful birthdays and milestone family reunions to lively group feasts, Adipozhi brings everyone together over steaming biryanis, hot charcoal grills, and heartfelt hospitality.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenReservation || onOpenPrivateRooms}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#f8efdc] text-[#112013] hover:bg-white font-bold text-xs uppercase tracking-widest rounded-full shadow-xl transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#112013]" />
              <span>Book a Celebration</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>

        {/* ════════════════ CENTER: Sleek Video Stage ════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto w-full"
        >
          {/* Multi-layered Back-Glow Halo */}
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#91964f]/25 via-[#de2b2b]/20 to-[#e5c98d]/20 rounded-[3rem] blur-2xl opacity-80 pointer-events-none -z-10" />

          {/* Modern Glassmorphic Chassis */}
          <div className="relative p-2.5 sm:p-4 rounded-[2rem] sm:rounded-[2.8rem] bg-white/[0.08] backdrop-blur-2xl border-2 border-white/20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10 group">
            
            {/* Video Viewport: Large & bold aspect ratio on mobile */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-[1.6rem] sm:rounded-[2.2rem] overflow-hidden bg-black shadow-2xl">
              {/* Celebration Video 1 */}
              <video
                ref={video1Ref}
                src="/Celebration.MP4"
                poster="/images/moments/moment-celebration.jpg"
                autoPlay
                muted={isMuted}
                playsInline
                preload="auto"
                onEnded={handleVideo1Ended}
                className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-opacity duration-700 ease-in-out ${
                  activeVideoIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              />

              {/* Celebration Video 2 */}
              <video
                ref={video2Ref}
                src="/Celebration_01.MP4"
                poster="/images/moments/moment-celebration.jpg"
                muted={isMuted}
                playsInline
                preload="auto"
                onEnded={handleVideo2Ended}
                className={`absolute inset-0 w-full h-full object-cover transform-gpu transition-opacity duration-700 ease-in-out ${
                  activeVideoIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              />

              {/* Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none z-10" />

              {/* Side Slideshow Controls: Prev & Next */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 z-30 pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrevVideo}
                  aria-label="Previous celebration video"
                  className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-[#de2b2b] text-white/90 hover:text-white backdrop-blur-xl border border-white/20 transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 z-30 pointer-events-none">
                <button
                  type="button"
                  onClick={handleNextVideo}
                  aria-label="Next celebration video"
                  className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-[#de2b2b] text-white/90 hover:text-white backdrop-blur-xl border border-white/20 transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
