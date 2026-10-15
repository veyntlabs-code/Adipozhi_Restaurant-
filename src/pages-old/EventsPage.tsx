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
  Package,
  MessageSquare
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface EventsPageProps {
  onOpenReservation: () => void;
  onOpenPrivateRooms: () => void;
  onNavigate: (path: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onOpenReservation,
  onOpenPrivateRooms,
  onNavigate,
}) => {
  const [selectedType, setSelectedType] = useState<'all' | 'family' | 'bulk'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
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

    const code = `EVT-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(code);

    const message = [
      '🎉 *EVENT & GATHERING ENQUIRY - ADIPOZHI*',
      '━━━━━━━━━━━━━━━━━━━━━━',
      `🔖 *Enquiry Ref:* ${code}`,
      '',
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone Number:* ${formData.phone}`,
      `👥 *Approx Guests:* ${formData.guests} Guests`,
      formData.date ? `📅 *Preferred Date:* ${formData.date}` : '📅 *Preferred Date:* To be decided',
      formData.eventDetails ? `📝 *Occasion & Notes:* ${formData.eventDetails}` : '',
      '',
      `📍 *Location:* Adipozhi Family Restaurant, Bus stand Entrance Arch, Monday Market`,
      '━━━━━━━━━━━━━━━━━━━━━━',
      '_Please let me know hall availability and custom menu options for our event. Thank you!_'
    ].filter(Boolean).join('\n');

    const cleanPhone = RESTAURANT_INFO.phoneRaw.replace(/\D/g, '') || '919585154254';
    const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(waLink);

    // Automatically trigger WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(waLink, '_blank');
    }

    setFormSubmitted(true);
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
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=Hi, I would like to inquire about the ${encodeURIComponent(type.title)} option.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-2.5 bg-[#f8efdc] hover:bg-[#de2b2b] hover:text-[#f8efdc] text-[#de2b2b] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer border border-[#de2b2b]/30"
                >
                  Inquire for This Option
                </a>
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
            <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest font-bold text-emerald-700">
                  Enquiry Reference: <span className="font-mono text-emerald-900 bg-emerald-200/60 px-2 py-0.5 rounded">{confirmationCode}</span>
                </span>
                <h4 className="text-2xl font-bold text-emerald-950" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Enquiry Prepared for WhatsApp!
                </h4>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 max-w-md mx-auto text-left text-xs space-y-2 shadow-sm text-[#1a1a1a]">
                <div className="flex justify-between border-b border-black/5 pb-1.5">
                  <span className="text-black/60">Guest Name:</span>
                  <span className="font-semibold text-black">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1.5">
                  <span className="text-black/60">Phone Number:</span>
                  <span className="font-semibold text-black">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1.5">
                  <span className="text-black/60">Party Size:</span>
                  <span className="font-semibold text-[#de2b2b]">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1.5">
                  <span className="text-black/60">Preferred Date:</span>
                  <span className="font-semibold text-black">{formData.date || 'Flexible / To be confirmed'}</span>
                </div>
                {formData.eventDetails && (
                  <div className="pt-1">
                    <span className="text-black/60 block mb-0.5">Notes:</span>
                    <span className="font-medium text-black/80">{formData.eventDetails}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                WhatsApp has been opened in a new tab with your enquiry. If it didn&apos;t open automatically, click below:
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-7 py-3 bg-[#25D366] hover:bg-[#1fb355] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send / Open in WhatsApp</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', guests: '', date: '', eventDetails: '' });
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-bold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                >
                  New Enquiry
                </button>
              </div>
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
                  className="px-8 py-3.5 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Booking Request on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

