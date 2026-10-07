'use client';
import React from 'react';
import { X, Music, Calendar, Disc3 } from 'lucide-react';

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
  lang: 'en' | 'fr';
}

export const EventsModal: React.FC<EventsModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
  lang
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#f8efdc] text-[#1a1a1a] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#1a1a1a]/15 flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#de2b2b] block mb-0.5">
              {lang === 'en' ? 'Live Entertainment' : 'Spectacles & Soirées'}
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {lang === 'en' ? 'What’s On at Adipozhi' : 'Événements & Musique Live'}
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#1a1a1a]/85 leading-relaxed font-light">
            {lang === 'en'
              ? 'Every week, enjoy a vibrant nightlife lineup: resident DJs starting at 5:00 PM every Thursday, Friday, and Saturday for nights that stretch late, alongside a live band every Friday from 9:30 PM to keep you dancing all night. Free admission to our central bar lounge.'
              : 'Chaque semaine, profitez d’une programmation vibrante : DJs dès 17h les jeudis, vendredis et samedis pour des soirées qui s’étirent, et groupe live dès 21h30 les vendredis pour vous faire danser jusqu’au bout de la nuit. Accès gratuit à la section bar.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#1a1a1a]/10 space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#de2b2b]/10 text-[#de2b2b] flex items-center justify-center">
                <Disc3 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {lang === 'en' ? 'Resident DJs' : 'DJs Résidents'}
              </h4>
              <p className="text-xs text-[#1a1a1a]/70">
                {lang === 'en' ? 'Thursdays, Fridays & Saturdays from 5:00 PM.' : 'Jeudis, vendredis & samedis dès 17h.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#1a1a1a]/10 space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#de2b2b]/10 text-[#de2b2b] flex items-center justify-center">
                <Music className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {lang === 'en' ? 'Live Bands & Performers' : 'Groupes Live en Spectacle'}
              </h4>
              <p className="text-xs text-[#1a1a1a]/70">
                {lang === 'en' ? 'Every Friday night from 9:30 PM on the main stage.' : 'Tous les vendredis soirs dès 21h30.'}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#7c2627] text-[#f8efdc] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-sm">{lang === 'en' ? 'Planning a large group night out?' : 'Vous organisez une sortie de groupe?'}</div>
              <div className="text-xs text-[#f8efdc]/80">{lang === 'en' ? 'Book VIP lounge booths with priority bottle service.' : 'Réservez une banquette VIP avec service aux tables.'}</div>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="px-5 py-2.5 bg-[#f8efdc] text-[#7c2627] font-bold text-xs uppercase tracking-wider rounded-full shadow-md shrink-0"
            >
              {lang === 'en' ? 'Reserve VIP' : 'Réserver VIP'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

