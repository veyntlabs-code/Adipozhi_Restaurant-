'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, CheckCircle2, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';
import { ATMOSPHERES, RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultParty?: number;
  defaultDate?: string;
  defaultTime?: string;
  defaultAmbiance?: string;
  lang: 'en' | 'fr';
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  defaultParty = 2,
  defaultDate,
  defaultTime = '19:00',
  defaultAmbiance = 'resto',
  lang
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [partySize, setPartySize] = useState(defaultParty);
  const [date, setDate] = useState(() => defaultDate || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(defaultTime);
  const [atmosphere, setAtmosphere] = useState(defaultAmbiance);
  const [occasion, setOccasion] = useState('Dinner');
  const [specialRequests, setSpecialRequests] = useState('');

  // Guest Details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Generated confirmation code
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 3) {
      const code = `ADZ-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(code);
      setStep(4);
    } else {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto" data-lenis-prevent>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#f8efdc] text-[#1a1a1a] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl overflow-hidden my-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a]/15 bg-white">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#de2b2b] block mb-0.5">
                  {lang === 'en' ? 'Libro Table Reservation' : 'Réservation de Table'}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step === 4
                    ? (lang === 'en' ? 'Reservation Confirmed' : 'Réservation Confirmée')
                    : (lang === 'en' ? 'Book a Table at Adipozhi' : 'Réserver une table chez Adipozhi')}
                </h2>
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleReset}
                className="p-1.5 rounded-full hover:bg-[#1a1a1a]/10 text-[#1a1a1a] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Progress Bar */}
            {step < 4 && (
              <div className="px-6 pt-3 flex items-center gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all ${
                      s <= step ? 'bg-[#de2b2b]' : 'bg-[#1a1a1a]/15'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Form Body */}
            <div className="p-6 sm:p-8">
              {step === 1 && (
                <form onSubmit={handleNextStep} className="space-y-6">
                  {/* Party Size */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                      1. {lang === 'en' ? 'Number of Guests' : 'Nombre de personnes'}
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setPartySize(num)}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            partySize === num
                              ? 'bg-[#de2b2b] text-[#f8efdc] shadow-sm'
                              : 'bg-white text-[#1a1a1a] hover:bg-[#de2b2b]/10 border border-[#1a1a1a]/15'
                          }`}
                        >
                          {num} {num === 10 ? '+' : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                        2. {lang === 'en' ? 'Date' : 'Date'}
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                        3. {lang === 'en' ? 'Time Slot' : 'Heure'}
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1a1a1a]/20 text-xs text-[#1a1a1a] focus:outline-none"
                      >
                        <option value="11:30">11:30 AM (Lunch)</option>
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="14:00">2:00 PM (Afternoon / Terrace)</option>
                        <option value="17:00">5:00 PM (Happy Hour)</option>
                        <option value="18:30">6:30 PM (Dinner)</option>
                        <option value="19:30">7:30 PM (Prime Dinner)</option>
                        <option value="21:00">9:00 PM (Late Night & Cocktails)</option>
                      </select>
                    </div>
                  </div>

                  {/* Atmosphere Choice */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                      4. {lang === 'en' ? 'Choose Atmosphere' : 'Choisissez votre ambiance'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {ATMOSPHERES.map((atm) => (
                        <div
                          key={atm.id}
                          onClick={() => setAtmosphere(atm.id)}
                          className={`p-3 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                            atmosphere === atm.id
                              ? 'bg-white border-2 border-[#de2b2b] shadow-md'
                              : 'bg-white/60 border-[#1a1a1a]/15 hover:bg-white'
                          }`}
                        >
                          <div className="h-24 rounded-xl overflow-hidden mb-2">
                            <img src={atm.image} alt={atm.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="font-bold text-xs text-[#de2b2b]">{lang === 'en' ? atm.name : atm.nameFr}</div>
                          <div className="text-[11px] text-[#1a1a1a]/70 line-clamp-2 mt-0.5">{lang === 'en' ? atm.tagline : atm.taglineFr}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-[#de2b2b] hover:bg-[#7c2627] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Next: Guest Details' : 'Suivant : Vos coordonnées'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleNextStep} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                      {lang === 'en' ? 'Occasion' : 'Occasion'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Dinner', 'Lunch', 'Birthday', 'Business Meeting', 'Casual Drink', 'Date Night'].map((occ) => (
                        <button
                          key={occ}
                          type="button"
                          onClick={() => setOccasion(occ)}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            occasion === occ
                              ? 'bg-[#de2b2b] text-[#f8efdc]'
                              : 'bg-white text-[#1a1a1a] border border-[#1a1a1a]/15'
                          }`}
                        >
                          {occ}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                      {lang === 'en' ? 'Special Notes or Allergies' : 'Demandes particulières ou allergies'}
                    </label>
                    <textarea
                      rows={3}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder={lang === 'en' ? 'E.g., high chair, quiet table, birthday celebration...' : 'Ex : chaise haute, table tranquille...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-5 rounded-xl text-xs font-bold text-[#1a1a1a] bg-white border border-[#1a1a1a]/20 flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Back' : 'Retour'}</span>
                    </button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3 bg-[#de2b2b] hover:bg-[#7c2627] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{lang === 'en' ? 'Next: Contact Information' : 'Suivant : Coordonnées'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleNextStep} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-1">
                        {lang === 'en' ? 'First Name' : 'Prénom'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Jean"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-1">
                        {lang === 'en' ? 'Last Name' : 'Nom'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Tremblay"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-1">
                      {lang === 'en' ? 'Email Address' : 'Courriel'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jean.tremblay@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-1">
                      {lang === 'en' ? 'Phone Number (SMS updates)' : 'Téléphone (confirmations SMS)'} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(418) 555-0199"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#1a1a1a]/10 text-xs text-[#1a1a1a]/80 flex justify-between">
                    <span>{partySize} {lang === 'en' ? 'Guests' : 'Personnes'} · {date} @ {time}</span>
                    <span className="font-bold text-[#de2b2b] capitalize">{atmosphere}</span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="py-3 px-5 rounded-xl text-xs font-bold text-[#1a1a1a] bg-white border border-[#1a1a1a]/20 flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Back' : 'Retour'}</span>
                    </button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3 bg-[#de2b2b] hover:bg-[#7c2627] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Confirm Booking' : 'Confirmer la Réservation'}</span>
                    </motion.button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {lang === 'en' ? 'Your Table is Reserved!' : 'Votre Table est Réservée!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1a1a1a]/70">
                    {lang === 'en'
                      ? `Thank you, ${firstName || 'Guest'}! A confirmation SMS and email have been dispatched.`
                      : `Merci, ${firstName || 'Cher client'}! Une confirmation vous a été transmise.`}
                  </p>

                  <div className="max-w-md mx-auto p-5 rounded-2xl bg-white border border-[#1a1a1a]/15 text-left space-y-2 text-xs shadow-sm">
                    <div className="flex justify-between border-b border-[#1a1a1a]/10 pb-2">
                      <span className="text-[#1a1a1a]/60 uppercase font-bold text-[10px]">Reference</span>
                      <span className="font-mono font-bold text-[#de2b2b]">{confirmationCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1a1a1a]/60">Date & Time:</span>
                      <span className="font-semibold text-[#1a1a1a]">{date} @ {time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1a1a1a]/60">Party Size:</span>
                      <span className="font-semibold text-[#1a1a1a]">{partySize} {lang === 'en' ? 'Guests' : 'Personnes'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1a1a1a]/60">Ambiance:</span>
                      <span className="font-semibold text-[#de2b2b] capitalize">{atmosphere}</span>
                    </div>
                    <div className="pt-2 border-t border-[#1a1a1a]/10 text-[11px] text-[#1a1a1a]/60 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#de2b2b]" />
                      <span>{RESTAURANT_INFO.address}</span>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#de2b2b] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-full shadow-md cursor-pointer"
                  >
                    {lang === 'en' ? 'Done' : 'Fermer'}
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

