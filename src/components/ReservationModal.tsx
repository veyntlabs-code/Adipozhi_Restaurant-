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
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [partySize, setPartySize] = useState<number | ''>('');
  const [partyError, setPartyError] = useState('');
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [time, setTime] = useState('');
  const [timeError, setTimeError] = useState('');
  const [atmosphere, setAtmosphere] = useState('');
  const [atmosphereError, setAtmosphereError] = useState('');

  // Guest Details
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Generated confirmation code
  const [confirmationCode, setConfirmationCode] = useState('');

  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const currentTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const isToday = date === todayStr;
  const minTime = isToday ? currentTimeStr : undefined;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (date === todayStr && time < currentTimeStr) {
        setTimeError(lang === 'en' ? `Please select a time of ${currentTimeStr} or later.` : `Veuillez choisir au moins ${currentTimeStr}.`);
        return;
      }
      setTimeError('');
    }

    if (step === 2) {
      const code = `ADZ-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(code);
      setStep(3);
    } else {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto" data-lenis-prevent>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer" 
          />
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
                  {lang === 'en' ? 'Adipozhi Table Reservation' : 'Réservation de Table Adipozhi'}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step === 3
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
            {step < 3 && (
              <div className="px-6 pt-3 flex items-center gap-2">
                {[1, 2].map((s) => (
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
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => {
                            setPartySize(num);
                            setPartyError('');
                          }}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            partySize === num
                              ? 'bg-[#de2b2b] text-[#f8efdc] shadow-sm'
                              : partyError
                              ? 'bg-white text-red-500 border border-red-500 shadow-[0_0_0_1px_#ef4444]'
                              : 'bg-white text-[#1a1a1a] hover:bg-[#de2b2b]/10 border border-[#1a1a1a]/15'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                      <input
                        type="number"
                        min={1}
                        required
                        placeholder="Custom"
                        value={partySize === '' ? '' : partySize}
                        onInvalid={(e) => {
                          e.preventDefault();
                          setPartyError(lang === 'en' ? 'Please specify a party size.' : 'Veuillez indiquer le nombre de personnes.');
                        }}
                        onChange={(e) => {
                          const val = e.target.value;
                          setPartySize(val === '' ? '' : Math.max(1, parseInt(val) || 1));
                          setPartyError('');
                        }}
                        className={`col-span-3 sm:col-span-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all border text-center focus:outline-none transition-colors ${partyError ? 'bg-white text-red-500 border-red-500 shadow-[0_0_0_1px_#ef4444]' : 'bg-white text-[#1a1a1a] border-[#1a1a1a]/15 focus:border-[#de2b2b]'}`}
                      />
                    </div>
                    <AnimatePresence>
                      {partyError && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-[10px] font-bold mt-2 ml-1"
                        >
                          {partyError}
                        </motion.p>
                      )}
                    </AnimatePresence>
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
                        min={todayStr}
                        onInvalid={(e) => {
                          e.preventDefault();
                          setDateError(lang === 'en' ? 'Please select a date.' : 'Veuillez sélectionner une date.');
                        }}
                        onChange={(e) => {
                          setDate(e.target.value);
                          setDateError('');
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-xs text-[#1a1a1a] focus:outline-none transition-colors ${dateError ? 'border-red-500 shadow-[0_0_0_1px_#ef4444]' : 'border-[#1a1a1a]/20 focus:border-[#de2b2b]'}`}
                      />
                      <AnimatePresence>
                        {dateError && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-[10px] font-bold mt-1.5 ml-1"
                          >
                            {dateError}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                        3. {lang === 'en' ? 'Time Slot' : 'Heure'}
                      </label>
                      <input
                        type="time"
                        required
                        min={minTime}
                        value={time}
                        onInvalid={(e) => {
                          e.preventDefault();
                          if (!time) {
                            setTimeError(lang === 'en' ? 'Please select a time.' : 'Veuillez sélectionner une heure.');
                          } else {
                            setTimeError(lang === 'en' ? `Please select a time of ${currentTimeStr} or later.` : `Veuillez choisir au moins ${currentTimeStr}.`);
                          }
                        }}
                        onChange={(e) => {
                          setTime(e.target.value);
                          setTimeError('');
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-xs text-[#1a1a1a] focus:outline-none transition-colors ${timeError ? 'border-red-500 shadow-[0_0_0_1px_#ef4444]' : 'border-[#1a1a1a]/20 focus:border-[#de2b2b]'}`}
                      />
                      <AnimatePresence>
                        {timeError && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-[10px] font-bold mt-1.5 ml-1"
                          >
                            {timeError}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Atmosphere Choice */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                      4. {lang === 'en' ? 'Choose Atmosphere' : 'Choisissez votre ambiance'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          id: 'ac',
                          name: 'AC',
                          nameFr: 'Climatisé',
                          tagline: 'Cool, spacious, and comfortable dining tailored for families and groups.',
                          taglineFr: 'Espace climatisé confortable pour réunions familiales.',
                          image: '/images/gallery/interior-original.png'
                        },
                        {
                          id: 'non-ac',
                          name: 'NON-AC Family Dining Hall',
                          nameFr: 'Salle Familiale NON-AC',
                          tagline: 'Comfortable family dining with lively restaurant ambiance.',
                          taglineFr: 'Repas familial confortable avec ambiance vivante.',
                          image: '/images/gallery/interior-booths.jpg'
                        }
                      ].map((atm) => (
                        <div
                          key={atm.id}
                          onClick={() => {
                            setAtmosphere(atm.id);
                            setAtmosphereError('');
                          }}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                            atmosphere === atm.id
                              ? 'bg-white border-2 border-[#de2b2b] shadow-md'
                              : atmosphereError
                              ? 'bg-white/60 border-red-500 shadow-[0_0_0_1px_#ef4444]'
                              : 'bg-white/60 border-[#1a1a1a]/15 hover:bg-white'
                          }`}
                        >
                          <div className="h-32 rounded-xl overflow-hidden mb-3">
                            <img src={atm.image} alt={atm.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="font-bold text-sm text-[#de2b2b] text-center">{lang === 'en' ? atm.name : atm.nameFr}</div>
                          <div className="text-xs text-[#1a1a1a]/70 line-clamp-2 mt-1 text-center">{lang === 'en' ? atm.tagline : atm.taglineFr}</div>
                        </div>
                      ))}
                    </div>
                    <input 
                      type="text" 
                      required 
                      value={atmosphere} 
                      onInvalid={(e) => {
                        e.preventDefault();
                        setAtmosphereError(lang === 'en' ? 'Please select an atmosphere.' : 'Veuillez sélectionner une ambiance.');
                      }} 
                      onChange={() => {}}
                      className="sr-only" 
                      tabIndex={-1} 
                    />
                    <AnimatePresence>
                      {atmosphereError && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-[10px] font-bold mt-2 ml-1"
                        >
                          {atmosphereError}
                        </motion.p>
                      )}
                    </AnimatePresence>
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
                        onInvalid={(e) => {
                          e.preventDefault();
                          setFirstNameError(lang === 'en' ? 'Please enter your first name.' : 'Veuillez entrer votre prénom.');
                        }}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          setFirstNameError('');
                        }}
                        placeholder="Jean"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs focus:outline-none transition-colors ${firstNameError ? 'border-red-500 shadow-[0_0_0_1px_#ef4444]' : 'border-[#1a1a1a]/20 focus:border-[#de2b2b]'}`}
                      />
                      <AnimatePresence>
                        {firstNameError && (
                          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-500 text-[10px] font-bold mt-1.5 ml-1">
                            {firstNameError}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-1">
                        {lang === 'en' ? 'Last Name' : 'Nom'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onInvalid={(e) => {
                          e.preventDefault();
                          setLastNameError(lang === 'en' ? 'Please enter your last name.' : 'Veuillez entrer votre nom.');
                        }}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          setLastNameError('');
                        }}
                        placeholder="Tremblay"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs focus:outline-none transition-colors ${lastNameError ? 'border-red-500 shadow-[0_0_0_1px_#ef4444]' : 'border-[#1a1a1a]/20 focus:border-[#de2b2b]'}`}
                      />
                      <AnimatePresence>
                        {lastNameError && (
                          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-500 text-[10px] font-bold mt-1.5 ml-1">
                            {lastNameError}
                          </motion.p>
                        )}
                      </AnimatePresence>
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
                      onInvalid={(e) => {
                        e.preventDefault();
                        setEmailError(lang === 'en' ? (!email ? 'Please enter your email.' : 'Please enter a valid email.') : (!email ? 'Veuillez entrer votre courriel.' : 'Veuillez entrer un courriel valide.'));
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                      }}
                      placeholder="adipozhi@gmail.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs focus:outline-none transition-colors ${emailError ? 'border-red-500 shadow-[0_0_0_1px_#ef4444]' : 'border-[#1a1a1a]/20 focus:border-[#de2b2b]'}`}
                    />
                    <AnimatePresence>
                      {emailError && (
                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-500 text-[10px] font-bold mt-1.5 ml-1">
                          {emailError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-1">
                      {lang === 'en' ? 'Phone Number' : 'Numéro de Téléphone'} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onInvalid={(e) => {
                        e.preventDefault();
                        setPhoneError(lang === 'en' ? 'Please enter your phone number.' : 'Veuillez entrer votre numéro de téléphone.');
                      }}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setPhoneError('');
                      }}
                      placeholder="+91 99 999 99 999"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs focus:outline-none transition-colors ${phoneError ? 'border-red-500 shadow-[0_0_0_1px_#ef4444]' : 'border-[#1a1a1a]/20 focus:border-[#de2b2b]'}`}
                    />
                    <AnimatePresence>
                      {phoneError && (
                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-500 text-[10px] font-bold mt-1.5 ml-1">
                          {phoneError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#1a1a1a]/10 text-xs text-[#1a1a1a]/80 flex justify-between">
                    <span>{partySize} {lang === 'en' ? 'Guests' : 'Personnes'} · {date} @ {time}</span>
                    <span className="font-bold text-[#de2b2b] capitalize">{atmosphere}</span>
                  </div>

                  <div className="flex gap-3 pt-2">
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
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Confirm Booking' : 'Confirmer la Réservation'}</span>
                    </motion.button>
                  </div>
                </form>
              )}

              {step === 3 && (
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

