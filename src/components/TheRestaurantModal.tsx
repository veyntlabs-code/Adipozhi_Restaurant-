'use client';
import React from 'react';
import { X, Calendar } from 'lucide-react';
import { ATMOSPHERES, RESTAURANT_INFO } from '../data/restaurantData';

interface TheRestaurantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
  lang: 'en' | 'fr';
}

export const TheRestaurantModal: React.FC<TheRestaurantModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
  lang
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto" data-lenis-prevent>
      <div className="relative w-full max-w-4xl bg-[#f8efdc] text-[#1a1a1a] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#1a1a1a]/15 flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#de2b2b] block mb-0.5">
              4.7 ★ 284 Google Reviews · Monday Market
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Adipozhi Family Restaurant Story
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#1a1a1a]/10 text-[#1a1a1a]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#de2b2b]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Comfortable Restaurant Serving Tasty Biryani & Diverse Dishes
            </h3>
            <p className="text-sm text-[#1a1a1a]/85 leading-relaxed font-light">
              Located right by the Bus Stand Entrance Arch in Monday Market, Tamil Nadu, Adipozhi Family Restaurant is cherished by food lovers for its rich handi Dum Biryanis, hot flaky Bun Parottas, authentic Arabian Al-Faham charcoal grills, and Chettinadu claypot masalas. With our spacious AC Family Dining Hall, live charcoal grill counter, and dedicated express parcel packaging for bucket biryanis, we are dedicated to delicious flavors, warm hospitality, and generous portions for the whole family.
            </p>
          </div>

          {/* Three Atmospheres Detail Grid */}
          <div className="space-y-4 pt-4 border-t border-[#1a1a1a]/10">
            <h3 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {lang === 'en' ? 'Three Atmospheres, One Destination' : 'Trois Ambiances, Une Destination'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ATMOSPHERES.map((atm) => (
                <div key={atm.id} className="bg-white rounded-2xl border border-[#1a1a1a]/15 overflow-hidden shadow-sm flex flex-col">
                  <div className="h-44 overflow-hidden">
                    <img src={atm.image} alt={atm.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-[#de2b2b]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {lang === 'en' ? atm.name : atm.nameFr}
                      </h4>
                      <p className="text-xs text-[#1a1a1a]/80 font-light mt-1">
                        {lang === 'en' ? atm.description : atm.descriptionFr}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-5 border-t border-[#1a1a1a]/10 bg-white flex items-center justify-between shrink-0">
          <span className="text-xs text-[#1a1a1a]/60">{RESTAURANT_INFO.address} · </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenReservation();
            }}
            className="px-6 py-2.5 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] font-bold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'en' ? 'Book a Table' : 'Réserver une table'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

