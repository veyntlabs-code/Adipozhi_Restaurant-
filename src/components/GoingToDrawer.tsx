'use client';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface GoingToDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'fr';
}

export const GoingToDrawer: React.FC<GoingToDrawerProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm">
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-screen max-w-md bg-[#f8efdc] text-[#1a1a1a] border-l border-[#1a1a1a]/20 flex flex-col justify-between shadow-2xl p-6 sm:p-8 overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#1a1a1a]/15 pb-4">
                  <h2
                    className="text-2xl font-bold text-[#de2b2b]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {lang === 'en' ? 'Going to Adipozhi' : 'Venir chez Adipozhi'}
                  </h2>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-1.5 rounded-full hover:bg-[#1a1a1a]/10 text-[#1a1a1a] cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#de2b2b]/10 text-[#de2b2b] text-xs font-bold">
                    <span>⭐ 4.7 Rated on Google (284 reviews)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-light">
                    {lang === 'en'
                      ? 'Located conveniently right by the Bus stand Entrance Arch in Monday Market, Tamil Nadu. Adipozhi Family Restaurant is easily accessible from Thuckalay, Eraniel, Colachel, and Nagercoil with ample parking space and air-conditioned dining.'
                      : 'Situé idéalement près de l’arche de la gare de Monday Market au Tamil Nadu. Adipozhi Family Restaurant est facilement accessible avec parking et salle climatisée.'}
                  </p>
                </div>

                {/* Coordinates Box */}
                <div className="p-5 rounded-2xl bg-white border border-[#1a1a1a]/10 space-y-4 text-xs shadow-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#de2b2b] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold uppercase text-[10px] text-[#de2b2b] block">{lang === 'en' ? 'Address' : 'Adresse'}</span>
                      <p className="font-medium text-[#1a1a1a] mt-0.5">
                        Bus stand Entrance Arch<br />
                        Monday Market, Tamil Nadu 629802
                      </p>
                      <p className="text-[11px] text-[#de2b2b] font-semibold mt-1">
                        ⏱️ ~7 mins from Thuckalay / Eraniel
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#de2b2b] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold uppercase text-[10px] text-[#de2b2b] block">{lang === 'en' ? 'Phone / Orders' : 'Téléphone'}</span>
                      <p className="font-medium text-[#1a1a1a] mt-0.5">
                        <a href="tel:09585154254" className="hover:text-[#de2b2b] font-bold"><Phone className="w-4 h-4" /></a>
                      </p>
                      <p className="text-[11px] text-[#1a1a1a]/60">
                        {lang === 'en' ? 'Call for parcel pickup & table reservations' : 'Appelez pour emporter ou réserver'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#de2b2b] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold uppercase text-[10px] text-[#de2b2b] block">{lang === 'en' ? 'Operating Hours' : 'Horaires'}</span>
                      <p className="font-bold text-emerald-700 mt-0.5">
                        {lang === 'en' ? 'Open Daily · 11:00 AM – 11:00 PM' : 'Ouvert tous les jours · 11h00 – 23h00'}
                      </p>
                      <p className="text-[11px] text-[#1a1a1a]/60 mt-0.5">
                        {lang === 'en' ? 'Biryani from 12:00 PM · Grills & Parotta from 5:00 PM' : 'Biryani dès 12h · Grillades dès 17h'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Directions Map Mockup */}
                <div className="rounded-2xl overflow-hidden border border-[#1a1a1a]/10 aspect-video relative bg-slate-200 shadow-sm">
                  <iframe
                    title="Adipozhi Monday Market Map"
                    src="https://maps.google.com/maps?q=Bus%20stand%20Entrance%20Arch%2C%20Monday Market%2C%20Tamil%20Nadu%20629802&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-[#1a1a1a]/15">
                <motion.a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-[#de2b2b] hover:bg-[#7c2627] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps (7 mins)</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

