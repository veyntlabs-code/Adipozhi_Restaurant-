'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShoppingBag,
  ExternalLink,
  Phone,
  MessageSquare,
  Flame,
  Clock,
  MapPin,
  Star,
  Package
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OnlineOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'en' | 'fr';
}

export const OnlineOrderDrawer: React.FC<OnlineOrderDrawerProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedNumber, setCopiedNumber] = useState(false);

  const swiggyUrl = 'https://www.swiggy.com/city/nagercoil/adipozhi-family-restaurant-colachel-monday-market-rest1346460';
  const zomatoUrl = 'https://www.zomato.com/kanyakumari/adipozhi-family-restaurant';
  const kumariFoodieUrl = 'https://play.google.com/store/apps/details?id=com.kumarifoodie.onlinedelivery';
  const whatsappUrl = `https://wa.me/919585154254?text=${encodeURIComponent(
    'Hello Adipozhi Family Restaurant! I would like to place a food order for takeaway parcel / delivery.'
  )}`;

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(RESTAURANT_INFO.phone);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 overflow-hidden flex justify-end"
          data-lenis-prevent
        >
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm cursor-pointer"
            aria-label="Close drawer backdrop"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-[#f8efdc] text-[#1a1a1a] border-l border-[#1a1a1a]/20 flex flex-col shadow-2xl h-[100dvh] max-h-[100dvh] z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#1a1a1a]/15 flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#de2b2b]/10 text-[#de2b2b] flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2
                    className="text-lg font-bold text-[#1a1a1a] leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Order Online
                  </h2>
                  <p className="text-[11px] text-[#1a1a1a]/60 mt-0.5 font-medium">
                    Delivery via Swiggy, Zomato &amp; Kumari Foodie · Direct Parcel
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#1a1a1a]/10 text-[#1a1a1a] transition-colors cursor-pointer"
                aria-label="Close order drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body — min-h-0 required for flex child scrolling */}
            <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain p-5 space-y-5">
              {/* Rating Banner */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#1a1a1a]/10 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-800">
                    Accepting Orders Now
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#de2b2b]">
                  <Star className="w-3.5 h-3.5 fill-[#de2b2b]" />
                  <span>4.7 ★ (284 reviews)</span>
                </div>
              </div>

              {/* 1. ORDER ON SWIGGY */}
              <div className="bg-gradient-to-br from-[#fc8019] to-[#e66c04] text-white p-5 rounded-3xl shadow-lg relative overflow-hidden group">
                <div className="absolute right-[-15px] top-[-15px] opacity-10 font-black text-8xl pointer-events-none select-none">
                  S
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Swiggy Logo Icon */}
                      <div className="w-8 h-8 rounded-xl bg-white text-[#fc8019] flex items-center justify-center font-black text-lg shadow-sm">
                        S
                      </div>
                      <div>
                        <span className="text-xs font-black tracking-widest uppercase opacity-90 block">
                          FASTEST DELIVERY
                        </span>
                        <h3 className="text-xl font-black tracking-tight leading-none">
                          Swiggy
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-black/25 text-[10px] font-bold tracking-wider uppercase border border-white/20">
                      Live Tracking
                    </span>
                  </div>

                  <p className="text-xs text-white/90 font-light leading-relaxed">
                    Order our Chicken Dum Biryani, Bun Parotta, and Arabian Grills delivered hot to your doorstep via Swiggy.
                  </p>

                  <a
                    href={swiggyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-white hover:bg-neutral-100 text-[#fc8019] font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Order on Swiggy</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* 2. ORDER ON ZOMATO */}
              <div className="bg-gradient-to-br from-[#e23744] to-[#cb202d] text-white p-5 rounded-3xl shadow-lg relative overflow-hidden group">
                <div className="absolute right-[-15px] top-[-15px] opacity-10 font-black text-8xl pointer-events-none select-none">
                  Z
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Zomato Logo Icon */}
                      <div className="w-8 h-8 rounded-xl bg-white text-[#e23744] flex items-center justify-center font-black text-lg italic shadow-sm">
                        Z
                      </div>
                      <div>
                        <span className="text-xs font-black tracking-widest uppercase opacity-90 block">
                          TOP RATED 4.7★
                        </span>
                        <h3 className="text-xl font-black tracking-tight leading-none italic">
                          zomato
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-black/25 text-[10px] font-bold tracking-wider uppercase border border-white/20">
                      Offers &amp; Gold
                    </span>
                  </div>

                  <p className="text-xs text-white/90 font-light leading-relaxed">
                    Browse customer reviews, enjoy Zomato app deals, and order fresh food with contactless express delivery.
                  </p>

                  <a
                    href={zomatoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-white hover:bg-neutral-100 text-[#e23744] font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Order on Zomato</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* 3. ORDER ON KUMARI FOODIE */}
              <div className="bg-gradient-to-br from-[#0c38ea] to-[#0425a8] text-white p-5 rounded-3xl shadow-lg relative overflow-hidden group">
                <div className="absolute right-[-15px] top-[-15px] opacity-10 font-black text-8xl pointer-events-none select-none tracking-tighter">
                  KF
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {/* Kumari Foodie App Icon matching user branding */}
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm relative overflow-hidden p-0.5 shrink-0">
                        <svg viewBox="0 0 48 48" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="10" fill="#0c38ea" />
                          <rect x="5" y="5" width="38" height="38" rx="7" stroke="#ffffff" strokeWidth="1.5" />
                          <path
                            d="M24 10C20.134 10 17 13.134 17 17C17 21.8 24 28 24 28C24 28 31 21.8 31 17C31 13.134 27.866 10 24 10Z"
                            fill="#0c38ea"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                          />
                          <text x="24" y="19" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">
                            KF
                          </text>
                          <text x="24" y="34" fill="#ffffff" fontSize="4.2" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.2">
                            KUMARI FOODIE
                          </text>
                          <text x="24" y="39" fill="#ffffff" fontSize="2.5" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.4" opacity="0.9">
                            DELIVERY IN MINUTES
                          </text>
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-black tracking-widest uppercase opacity-90 block">
                          LOCAL APP · KANYAKUMARI
                        </span>
                        <h3 className="text-xl font-black tracking-tight leading-none">
                          Kumari Foodie
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-black/25 text-[10px] font-bold tracking-wider uppercase border border-white/20">
                      Delivery in Minutes
                    </span>
                  </div>

                  <p className="text-xs text-white/90 font-light leading-relaxed">
                    Order our Chicken Dum Biryani, hot Bun Parotta, and Arabian Grills on Kanyakumari&apos;s favorite local delivery app with express doorstep delivery.
                  </p>

                  <a
                    href={kumariFoodieUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-white hover:bg-neutral-100 text-[#0c38ea] font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Order on Kumari Foodie</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* 4. DIRECT TAKEAWAY & PARCEL COUNTER (SAVE MORE + FREE 65) */}
              <div className="bg-white p-5 rounded-3xl border-2 border-dashed border-[#de2b2b]/40 shadow-sm space-y-3 relative">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#de2b2b]/10 text-[#de2b2b] flex items-center justify-center">
                      <Package className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1a1a1a]">
                        Direct Call &amp; WhatsApp Parcel
                      </h4>
                      <span className="text-[10px] font-semibold text-emerald-700 block">
                        No App Commission · Fresh Hot Packing
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
                    Free 65 Bonus
                  </span>
                </div>

                {/* Exclusive Parcel Free 65 Offer */}
                <div className="p-3 rounded-xl bg-[#f8efdc] border border-[#de2b2b]/20 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#de2b2b]">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Bucket Biryani Special:</span>
                  </div>
                  <p className="text-[11px] text-[#1a1a1a]/80 font-medium">
                    • <strong>Half Bucket (₹1100):</strong> Free 1/4 KG Chicken 65!
                  </p>
                  <p className="text-[11px] text-[#1a1a1a]/80 font-medium">
                    • <strong>Full Bucket (₹2200):</strong> Free 1/2 KG Chicken 65!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {/* Call Direct */}
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="py-2.5 px-3 bg-[#de2b2b] hover:bg-[#7c2627] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  {/* WhatsApp Order */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-[#25D366] hover:bg-[#1fb355] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="w-full text-center text-[11px] text-[#1a1a1a]/60 hover:text-[#de2b2b] transition-colors pt-1 cursor-pointer"
                >
                  {copiedNumber ? '✓ Phone number copied to clipboard!' : `Or dial directly`}
                </button>
              </div>

              {/* Location info */}
              <div className="p-3.5 rounded-2xl bg-[#1a1a1a]/5 text-xs space-y-1.5 text-[#1a1a1a]/70">
                <div className="flex items-center gap-1.5 font-bold text-[#1a1a1a]">
                  <MapPin className="w-3.5 h-3.5 text-[#de2b2b]" />
                  <span>Pickup Location:</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  {RESTAURANT_INFO.address} (Bus stand Entrance Arch, Monday Market)
                </p>
                <div className="flex items-center gap-1 text-[11px] text-[#de2b2b] font-medium pt-0.5">
                  <Clock className="w-3 h-3" />
                  <span>{RESTAURANT_INFO.hours}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#1a1a1a]/10 bg-white flex items-center justify-between text-xs shrink-0">
              <span className="text-[#1a1a1a]/60 text-[11px]">
                Adipozhi Family Restaurant
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 bg-[#1a1a1a] text-[#f8efdc] font-bold text-xs rounded-full hover:bg-[#de2b2b] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
