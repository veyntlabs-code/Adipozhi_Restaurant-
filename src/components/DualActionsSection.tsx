'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Calendar, ArrowRight, Sparkles, Phone, PartyPopper } from 'lucide-react';

interface DualActionsSectionProps {
  onOpenOrder: () => void;
  onOpenCatering: () => void;
  lang: 'en' | 'fr';
}

export const DualActionsSection: React.FC<DualActionsSectionProps> = ({
  onOpenOrder,
  onOpenCatering,
  lang
}) => {
  return (
    <section className="bg-[#f8efdc] py-12 lg:py-16 border-b border-[#1a1a1a]/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Takeaway or delivery */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            onClick={onOpenOrder}
            className="h-full p-8 sm:p-12 rounded-3xl bg-[#de2b2b] text-[#f8efdc] hover:bg-[#c92525] transition-colors duration-300 flex flex-col justify-between group cursor-pointer shadow-xl relative overflow-hidden"
          >
            {/* Subtle glow orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none transform translate-x-12 -translate-y-12" />

            <div className="space-y-3 relative z-10">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#f8efdc]/80 block">
                {lang === 'en' ? 'Counter Parcel & Home Delivery' : 'பார்சல் & டோர் டெலிவரி'}
              </span>
              <h3
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8efdc]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {lang === 'en' ? 'Enjoy Adipozhi at Home' : 'வீட்டிலேயே சுவைத்திடுங்கள்'}
              </h3>
              <p className="text-sm text-[#f8efdc]/80 font-light leading-relaxed max-w-sm">
                {lang === 'en'
                  ? 'Steaming hot claypot dum biryanis, dragon chicken, tandoori rotis, and coastal fish fry delivered right across Thingal Nagar & Monday Market.'
                  : 'மண்பானை பிரியாணி, டிராகன் சிக்கன், தந்தூரி மற்றும் கடல் மீன் வறுவல் உங்கள் இல்லத்திற்கே சுடச்சுட டெலிவரி.'}
              </p>
            </div>

            <div className="pt-8 relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#f8efdc] text-[#de2b2b] font-bold text-xs uppercase tracking-wider rounded-full shadow-md group-hover:bg-white transition-all">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Order Parcel / Delivery' : 'ஆன்லைன் ஆர்டர் செய்ய'}</span>
              </span>
              <ArrowRight className="w-6 h-6 text-[#f8efdc] transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Card 2: Reserve Family Table & Banquet */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            onClick={onOpenCatering}
            className="h-full p-8 sm:p-12 rounded-3xl bg-white border border-[#1a1a1a]/15 text-[#1a1a1a] hover:border-[#de2b2b] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl relative overflow-hidden"
          >
            {/* Subtle glow orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#de2b2b]/5 rounded-full blur-3xl pointer-events-none transform translate-x-12 -translate-y-12" />

            <div className="space-y-3 relative z-10">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#de2b2b] block flex items-center gap-1.5">
                <PartyPopper className="w-3.5 h-3.5 text-[#de2b2b]" />
                <span>{lang === 'en' ? 'Celebrations & Group Feasts' : 'பார்ட்டி & விசேஷங்கள்'}</span>
              </span>
              <h3
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a] group-hover:text-[#de2b2b] transition-colors"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {lang === 'en' ? 'Celebration and Catering' : 'பார்ட்டி மற்றும் கேட்டரிங்'}
              </h3>
              <p className="text-sm text-[#1a1a1a]/70 font-light leading-relaxed max-w-sm">
                {lang === 'en'
                  ? 'Plan your birthdays, anniversaries, and special family get-togethers with our premium catering and celebration services.'
                  : 'பிறந்தநாள், திருமண நாள் மற்றும் குடும்ப விழாக்களுக்கு எங்கள் சிறப்பு கேட்டரிங் சேவைகளை முன்கூட்டியே முன்பதிவு செய்து கொள்ளுங்கள்.'}
              </p>
            </div>

            <div className="pt-8 relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-full shadow-md group-hover:bg-[#de2b2b] transition-colors">
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Book Catering' : 'கேட்டரிங் முன்பதிவு'}</span>
              </span>
              <ArrowRight className="w-6 h-6 text-[#1a1a1a] group-hover:text-[#de2b2b] transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

