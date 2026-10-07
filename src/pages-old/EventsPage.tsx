'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Users, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2,
  Sparkles,
  Utensils,
  PartyPopper,
  Package
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface EventsPageProps {
  onOpenReservation: () => void;
  onOpenPrivateRooms: () => void;
  onNavigate: (path: string) => void;
  lang: 'en' | 'fr';
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onOpenReservation,
  onOpenPrivateRooms,
  onNavigate,
  lang
}) => {
  const [selectedType, setSelectedType] = useState<'all' | 'family' | 'bulk'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '',
    date: '',
    eventDetails: ''
  });

  const celebrationTypes = [
    {
      title: 'Family Biryani Feasts & Birthdays',
      desc: 'Celebrate your special milestones, anniversaries, and birthdays in our air-conditioned family hall with customized biryani platters and desserts.',
      capacity: 'Up to 60 Guests',
      features: ['Dedicated AC Hall Seating', 'Customized Multi-Course Menu', 'Cake Cutting Setup', 'Attentive Table Service']
    },
    {
      title: 'Family Bucket Parcel Orders (Bulk)',
      desc: 'Hosting a large function or get-together at home? Order our famous Half & Full Bucket Biriyanis with free Chicken 65. Hot airtight packaging ready for pickup.',
      capacity: '20 to 200+ Packs',
      features: ['Half & Full Biryani Buckets', 'Free Chicken 65 Included', 'Boiled Eggs, Salna & Raita', 'Fast Express Packing']
    },
    {
      title: 'Corporate & Group Dinners',
      desc: 'Treat your team or business guests to authentic South Indian and Arabian dining. Pre-booked set menus with starters, main course, and mojitos.',
      capacity: '15 to 80 Guests',
      features: ['Fixed Combo Menus', 'Priority Seating', 'Quick Serving Cadence', 'GST Bill Invoicing']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', guests: '', date: '', eventDetails: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f8efdc] text-[#1a1a1a] selection:bg-[#de2b2b] selection:text-[#f8efdc]">
      {/* 1. Hero Header */}
      <section className="bg-[#de2b2b] text-[#f8efdc] pt-12 pb-16 sm:pt-16 sm:pb-24 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/food/food11.jpg"
            alt="Adipozhi Celebrations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#f8efdc]/80 mb-6">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold text-[#f8efdc]">
              Celebrations & Gatherings
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-white">
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Celebrate at Adipozhi · Monday Market</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f8efdc] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Celebrations & Family Gatherings
            </h1>

            <p className="text-base sm:text-lg text-[#f8efdc]/90 font-light leading-relaxed">
              Whether you are planning an intimate birthday celebration, a family get-together, or bulk parcel orders for your home event, Adipozhi Family Restaurant makes every occasion memorable with authentic food and warm hospitality.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 bg-[#f8efdc] text-[#de2b2b] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-white transition-all cursor-pointer"
              >
                Book Hall Table
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="px-6 py-3 border border-white/40 text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Celebration Options */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1a1a1a]/10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-[0.25em] text-[#de2b2b] block">
            Special Occasions
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            How We Host Your Celebrations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {celebrationTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-[#1a1a1a]/10 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#de2b2b]/10 text-[#de2b2b] inline-block">
                  {type.capacity}
                </span>

                <h3
                  className="text-xl font-bold text-[#1a1a1a]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {type.title}
                </h3>

                <p className="text-xs text-[#1a1a1a]/70 font-light leading-relaxed">
                  {type.desc}
                </p>

                <div className="pt-3 border-t border-[#1a1a1a]/10 space-y-2">
                  {type.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#1a1a1a]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#de2b2b] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenReservation}
                  className="w-full py-2.5 bg-[#f8efdc] hover:bg-[#de2b2b] hover:text-[#f8efdc] text-[#de2b2b] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer border border-[#de2b2b]/30"
                >
                  Inquire for This Option
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Event Booking Enquiry Form */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#1a1a1a]/10 shadow-xl">
          <div className="text-center max-w-lg mx-auto mb-8 space-y-2">
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Plan Your Gathering with Us
            </h3>
            <p className="text-xs sm:text-sm text-[#1a1a1a]/70 font-light">
              Send us your requirements or call our manager directly.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-emerald-900">Enquiry Received!</h4>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Thank you! Our manager at Adipozhi Family Restaurant will call you shortly to confirm your booking and menu preferences.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#1a1a1a]/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#1a1a1a]/15 text-xs text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#de2b2b]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1a1a1a]/70 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#1a1a1a]/15 text-xs text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#de2b2b]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#1a1a1a]/70 mb-1">
                    Approximate Guests *
                  </label>
                  <input
                    type="number"
                    min="5"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="Number of guests"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#1a1a1a]/15 text-xs text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#de2b2b]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1a1a1a]/70 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#1a1a1a]/15 text-xs text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#de2b2b]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#1a1a1a]/70 mb-1">
                  Occasion & Notes (Biryani Buckets, Hall Seating, etc.)
                </label>
                <textarea
                  rows={3}
                  value={formData.eventDetails}
                  onChange={(e) => setFormData({ ...formData, eventDetails: e.target.value })}
                  placeholder="Tell us about the occasion and any special menu requests..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#1a1a1a]/15 text-xs text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#de2b2b]/30"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

