'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Heart,
  ShieldCheck,
  MapPin,
  Phone,
  Clock,
  Calendar,
  Flame,
  Star,
  ChevronRight,
  Award,
  Package,
  CheckCircle2,
  Utensils
} from 'lucide-react';
import { RESTAURANT_INFO, AMBIANCE_SPACES } from '../data/restaurantData';

interface RestaurantPageProps {
  onOpenReservation: () => void;
  onOpenMenus: () => void;
  onOpenPrivateRooms: () => void;
  onNavigate: (path: string) => void;
  lang: 'en' | 'fr';
}

export const RestaurantPage: React.FC<RestaurantPageProps> = ({
  onOpenReservation,
  onOpenMenus,
  onOpenPrivateRooms,
  onNavigate,
  lang
}) => {
  const [activeAmbiance, setActiveAmbiance] = useState<number>(0);

  const ambiances = [
    {
      id: 'ac-family-dining',
      title: 'AC Family Dining Hall',
      tagline: 'Quiet, cool, air-conditioned dining for families and gatherings.',
      description:
        'Spacious comfortable booths, gentle ambient illumination, and attentive table service. Perfect for relaxed family lunches, Sunday biryani gatherings, and quiet evening dinners.',
      hours: '11:00 AM – 11:00 PM',
      seats: '80+ AC Seats',
      features: ['Full Air-Conditioning', 'Comfortable Booth Seating', 'Family Friendly', 'Baby & High Chairs'],
      image: '/images/gallery/interior-original.png'
    },
    {
      id: 'non-ac-family-dining',
      title: 'NON-AC Family Dining Hall',
      tagline: 'Comfortable family dining with lively restaurant ambiance.',
      description: 'Enjoy the vibrant and lively atmosphere of our main dining hall. Perfect for a casual and authentic dining experience with friends and family.',
      hours: '11:00 AM – 11:00 PM',
      seats: 'Open Dining Seats',
      features: ['Lively Atmosphere', 'Authentic Dining Experience', 'Quick Service', 'Family Friendly'],
      image: '/images/gallery/interior-booths.jpg'
    }
  ];

  const values = [
    {
      title: 'Authentic Spices',
      desc: 'We use stone-ground whole spices, Tellicherry black pepper, and pure cow ghee to recreate traditional Southern home-style recipes.',
      icon: Award
    },
    {
      title: '100% Fresh Halal Cuts',
      desc: 'Only fresh daily chicken, tender goat meat, and fresh coastal sea catch. Never frozen, strictly prepared to high hygiene standards.',
      icon: ShieldCheck
    },
    {
      title: 'Family Comfort',
      desc: 'A calm, modern, fully air-conditioned dining atmosphere where families, elders, and children feel right at home.',
      icon: Heart
    },
    {
      title: 'Generous Value',
      desc: 'Big portions and genuine hospitality — like our free 1/4 KG and 1/2 KG Chicken 65 with family bucket biriyanis.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8efdc] text-[#1a1a1a] selection:bg-[#de2b2b] selection:text-[#f8efdc]">
      {/* 1. Hero Header */}
      <section className="bg-[#5c1c1d] text-[#f8efdc] pt-12 pb-16 sm:pt-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/premium-interior.jpg"
            alt="Adipozhi Restaurant Interior"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#f8efdc]/80 mb-6">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold text-[#f8efdc]">
              About Adipozhi
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-white">
              <span>⭐ 4.7 Rated on Google (284 Reviews)</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f8efdc] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ADIPOZHI FAMILY RESTAURANT
            </h1>

            <p className="text-xl text-[#f8efdc]/95 font-medium">
              {RESTAURANT_INFO.nameTamil} · Monday Market
            </p>

            <p className="text-base sm:text-lg text-[#f8efdc]/90 font-light leading-relaxed pt-2">
              {RESTAURANT_INFO.tagline} Located at the Bus Stand Entrance Arch in Monday Market, we take pride in serving genuine culinary heritage — from traditional Dum Biryanis cooked in heavy handis to live charcoal-grilled Arabian Al-Faham and Madurai Bun Parottas.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#f8efdc]/85 pt-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#f8efdc]" />
                {RESTAURANT_INFO.address}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#f8efdc]" />
                {RESTAURANT_INFO.hours}
              </span>
              <span>•</span>
              <span>Get there: {RESTAURANT_INFO.getThere}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars & Values */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1a1a1a]/10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#de2b2b] block">
            Our Quality Commitment
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What Makes Adipozhi Truly Special
          </h2>
          <p className="text-sm sm:text-base text-[#1a1a1a]/70 font-light leading-relaxed">
            Every dish that leaves our kitchen carries the aroma of freshly ground native spices, top quality halal meats, and the warmth of South Indian hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-[#1a1a1a]/10 shadow-sm hover:shadow-lg transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#de2b2b]/10 text-[#de2b2b] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-lg font-bold text-[#1a1a1a]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {val.title}
                </h3>
                <p className="text-xs text-[#1a1a1a]/70 leading-relaxed font-light">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Three Atmospheres Showcase */}
      <section className="py-16 sm:py-24 bg-[#7c2627] text-[#f8efdc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#f8efdc]/70 block">
              Atmospheres & Spaces
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8efdc]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Explore Our Restaurant Spaces
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {ambiances.map((amb, i) => (
              <button
                key={amb.id}
                onClick={() => setActiveAmbiance(i)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeAmbiance === i
                    ? 'bg-[#f8efdc] text-[#7c2627] shadow-lg'
                    : 'bg-black/20 text-[#f8efdc]/80 hover:text-white border border-white/10'
                  }`}
              >
                {amb.title}
              </button>
            ))}
          </div>

          {/* Active Ambiance Detail Card */}
          <AnimatePresence mode="wait">
            {(() => {
              const current = ambiances[activeAmbiance];
              return (
                <motion.div 
                  key={current.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#5c1c1d] rounded-3xl overflow-hidden border border-[#f8efdc]/20 shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-7 h-72 sm:h-96 lg:h-[460px] relative overflow-hidden">
                      <motion.img
                        src={current.image}
                        alt={current.title}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        whileHover={{ scale: 1.08, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
                        className="w-full h-full object-cover absolute inset-0 transform-gpu"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                    </div>

                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-widest text-[#f8efdc]/70 font-bold">
                          {current.seats}
                        </span>
                        <span className="text-[#f8efdc]/40">•</span>
                        <span className="text-xs text-[#f8efdc]/70">
                          {current.hours}
                        </span>
                      </div>

                      <h3
                        className="text-2xl sm:text-3xl font-bold text-[#f8efdc]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {current.title}
                      </h3>

                      <p className="text-sm italic font-medium text-[#f8efdc]/90">
                        "{current.tagline}"
                      </p>

                      <p className="text-xs sm:text-sm text-[#f8efdc]/80 leading-relaxed font-light">
                        {current.description}
                      </p>

                      <div className="pt-2 space-y-2">
                        {current.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-[#f8efdc]/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#f8efdc] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#f8efdc]/20 flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenReservation}
                        className="px-6 py-3 bg-[#f8efdc] text-[#7c2627] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-white transition-all cursor-pointer"
                      >
                        Reserve Table
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenMenus}
                        className="px-5 py-3 border border-[#f8efdc]/40 text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white/10 transition-all cursor-pointer"
                      >
                        View Menu
                      </motion.button>
                    </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Contact & Direction Info */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#1a1a1a]/10 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#de2b2b]">
              Location
            </span>
            <h4 className="text-lg font-bold text-[#1a1a1a]">Bus Stand Entrance Arch</h4>
            <p className="text-xs text-[#1a1a1a]/70">
              {RESTAURANT_INFO.address}
            </p>

          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#de2b2b]">
              Direct Phone
            </span>
            <h4 className="text-lg font-bold text-[#1a1a1a]">Takeaway & Enquiries</h4>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="text-xl font-black text-[#de2b2b] block hover:underline"
            ><Phone className="w-4 h-4 inline mr-2" />Call Us</a>
            <p className="text-xs text-[#1a1a1a]/70">
              Call for hot parcel buckets & party catering
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#de2b2b]">
              Timings
            </span>
            <h4 className="text-lg font-bold text-[#1a1a1a]">Open 7 Days a Week</h4>
            <p className="text-sm font-semibold text-emerald-700">
              {RESTAURANT_INFO.hours}
            </p>
            <p className="text-xs text-[#1a1a1a]/70">
              Biryani from 12 PM · Bun Parotta & Grills from 5 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

