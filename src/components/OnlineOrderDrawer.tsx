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
        <div
          className="fixed inset-0 z-50 overflow-hidden bg-black/65 backdrop-blur-sm flex justify-end"
          data-lenis-prevent
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
            aria-label="Close drawer backdrop"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
                    Delivery via Swiggy &amp; Zomato · Direct Parcel
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

              {/* 3. DIRECT TAKEAWAY & PARCEL COUNTER (SAVE MORE + FREE 65) */}
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
        </div>
      )}
    </AnimatePresence>
  );
};
