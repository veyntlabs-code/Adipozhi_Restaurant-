import React, { useState } from 'react';
import { X, Users, CheckCircle2, Send, Building, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface PrivateRoomsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivateRoomsModal: React.FC<PrivateRoomsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [room, setRoom] = useState('Room 1 (16 to 40 seats)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const code = `PRV-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(code);

    const message = [
      '🏛️ *PRIVATE ROOM & BANQUET ENQUIRY - ADIPOZHI*',
      '━━━━━━━━━━━━━━━━━━━━━━',
      `🔖 *Reference:* ${code}`,
      '',
      `👤 *Guest Name:* ${name}`,
      `📞 *Phone Number:* ${phone}`,
      email ? `📧 *Email Address:* ${email}` : '',
      `🛋️ *Selected Space:* ${room}`,
      details ? `📝 *Event Requirements:* ${details}` : '',
      '',
      `📍 *Location:* Adipozhi Family Restaurant, Monday Market`,
      '━━━━━━━━━━━━━━━━━━━━━━',
      '_Please let me know room availability and banquet packages. Thank you!_'
    ].filter(Boolean).join('\n');

    const cleanPhone = RESTAURANT_INFO.phoneRaw.replace(/\D/g, '') || '919585154254';
    const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(waLink);

    if (typeof window !== 'undefined') {
      window.open(waLink, '_blank');
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto" data-lenis-prevent>
      <div className="relative w-full max-w-4xl bg-[#f8efdc] text-[#1a1a1a] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#1a1a1a]/15 flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#273e2a] block mb-0.5">
              Exclusive Spaces
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Private Rooms & Banquets
            </h2>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="p-2 rounded-full hover:bg-[#1a1a1a]/10 text-[#1a1a1a]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {submitted ? (
            <div className="py-10 text-center space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 block">
                  Reference: <span className="font-mono text-emerald-900 bg-emerald-200/60 px-2 py-0.5 rounded">{confirmationCode}</span>
                </span>
                <h3 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Inquiry Sent on WhatsApp!
                </h3>
              </div>
              <p className="text-sm text-[#1a1a1a]/70 max-w-md mx-auto">
                {`Thank you, ${name}. Your requirements for ${room} have been prepared for WhatsApp.`}
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#1fb355] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send / Open in WhatsApp</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#273e2a] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:bg-[#1f3222] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Room Configurations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-[#1a1a1a]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-[#273e2a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Private Room 1
                    </h4>
                    <span className="text-[11px] font-semibold text-[#1a1a1a]/60">324 sq. ft.</span>
                  </div>
                  <p className="text-xs text-[#1a1a1a]/70">
                    Bright, welcoming ground-floor space accommodating 16 to 40 guests. Ideal for family celebrations, business luncheons, and intimate gatherings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#1a1a1a]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-[#273e2a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Private Room 2 & Mezzanine
                    </h4>
                    <span className="text-[11px] font-semibold text-[#1a1a1a]/60">650+ sq. ft.</span>
                  </div>
                  <p className="text-xs text-[#1a1a1a]/70">
                    Accommodates 40 to 120 guests with dedicated bar service, private restrooms, and audiovisual projection screens.
                  </p>
                </div>
              </div>

              {/* Booking Request Form */}
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-[#1a1a1a]/10 space-y-4">
                <h4 className="font-bold text-sm text-[#1a1a1a] uppercase tracking-wider">
                  Reserve a Private Space
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 bg-[#f8efdc]/30 text-xs text-[#1a1a1a] focus:outline-none"
                  >
                    <option value="Room 1 (16 to 40 seats)">Room 1 (16 to 40 seats)</option>
                    <option value="Room 2 (40 to 80 seats)">Room 2 (40 to 80 seats)</option>
                    <option value="VIP Mezzanine (up to 120 seats)">VIP Mezzanine (up to 120 seats)</option>
                    <option value="Heated Terrace Section">Heated Terrace Section</option>
                  </select>

                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contact Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                  />
                </div>

                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Desired date, guest count, meal format (breakfast, lunch, dinner, cocktail dînatoire)..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-[#273e2a] hover:bg-[#1f3222] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

