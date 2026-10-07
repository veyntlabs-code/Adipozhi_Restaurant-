'use client';
import React, { useState } from 'react';
import { X, Users, CheckCircle2, Send, Building } from 'lucide-react';

interface PrivateRoomsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'fr';
}

export const PrivateRoomsModal: React.FC<PrivateRoomsModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [room, setRoom] = useState('Room 1 (16 to 40 seats)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#f8efdc] text-[#1a1a1a] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#1a1a1a]/15 flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#273e2a] block mb-0.5">
              {lang === 'en' ? 'Exclusive Spaces' : 'Espaces Exclusifs'}
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {lang === 'en' ? 'Private Rooms & Banquets' : 'Salons Privés & Banquets'}
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
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {lang === 'en' ? 'Inquiry Sent Successfully' : 'Demande Envoyée avec Succès'}
              </h3>
              <p className="text-sm text-[#1a1a1a]/70 max-w-md mx-auto">
                {lang === 'en'
                  ? `Thank you, ${name}. Our events director will contact you within 24 hours regarding ${room}.`
                  : `Merci, ${name}. Notre équipe des événements vous contactera sous 24h au sujet de ${room}.`}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#273e2a] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-full shadow-md"
              >
                {lang === 'en' ? 'Done' : 'Fermer'}
              </button>
            </div>
          ) : (
            <>
              {/* Room Configurations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-[#1a1a1a]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-[#273e2a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {lang === 'en' ? 'Private Room 1' : 'Salon Privé 1'}
                    </h4>
                    <span className="text-[11px] font-semibold text-[#1a1a1a]/60">324 sq. ft.</span>
                  </div>
                  <p className="text-xs text-[#1a1a1a]/70">
                    {lang === 'en'
                      ? 'Bright, welcoming ground-floor space accommodating 16 to 40 guests. Ideal for family celebrations, business luncheons, and intimate gatherings.'
                      : 'Espace lumineux situé au rez-de-chaussée pour 16 à 40 personnes. Idéal pour réunions d’affaires ou réceptions familiales.'}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#1a1a1a]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-base text-[#273e2a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {lang === 'en' ? 'Private Room 2 & Mezzanine' : 'Salon Privé 2 & Mezzanine'}
                    </h4>
                    <span className="text-[11px] font-semibold text-[#1a1a1a]/60">650+ sq. ft.</span>
                  </div>
                  <p className="text-xs text-[#1a1a1a]/70">
                    {lang === 'en'
                      ? 'Accommodates 40 to 120 guests with dedicated bar service, private restrooms, and audiovisual projection screens.'
                      : 'Capacité de 40 à 120 personnes avec bar dédié, sanitaires privés et écrans de projection audiovisuels.'}
                  </p>
                </div>
              </div>

              {/* Booking Request Form */}
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-[#1a1a1a]/10 space-y-4">
                <h4 className="font-bold text-sm text-[#1a1a1a] uppercase tracking-wider">
                  {lang === 'en' ? 'Reserve a Private Space' : 'Demande de Réservation Privée'}
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
                    placeholder={lang === 'en' ? 'Contact Name' : 'Nom du responsable'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === 'en' ? 'Email Address' : 'Courriel'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={lang === 'en' ? 'Phone Number' : 'Numéro de téléphone'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                  />
                </div>

                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={lang === 'en' ? 'Desired date, guest count, meal format (breakfast, lunch, dinner, cocktail dînatoire)...' : 'Date souhaitée, nombre d’invités, formule de repas...'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-[#273e2a] hover:bg-[#1f3222] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Send Inquiry' : 'Envoyer la Demande'}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

