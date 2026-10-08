'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, CheckCircle2, Send } from 'lucide-react';

interface GiftCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'fr';
}

export const GiftCardModal: React.FC<GiftCardModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [purchased, setPurchased] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');

  const currentAmount = isCustom ? Number(customAmount) || 0 : amount;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount < 25) return;
    const code = `ADZ-GIFT-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
    setVoucherCode(code);
    setPurchased(true);
  };

  const handleReset = () => {
    setPurchased(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto" data-lenis-prevent>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#f8efdc] text-[#1a1a1a] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl overflow-hidden my-6"
          >
            <div className="p-6 border-b border-[#1a1a1a]/15 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#de2b2b]" />
                <h2 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {lang === 'en' ? 'Adipozhi Gift Card' : 'Carte-Cadeau Adipozhi'}
                </h2>
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleReset}
                className="p-1.5 rounded-full hover:bg-[#1a1a1a]/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="p-6 sm:p-8">
              {purchased ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {lang === 'en' ? 'Gift Card Issued!' : 'Carte-Cadeau Émise!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1a1a1a]/70">
                    {lang === 'en'
                      ? `Your digital gift voucher for $${currentAmount} CAD has been dispatched to ${recipientEmail}.`
                      : `Votre bon-cadeau numérique de ${currentAmount}$ CAD a été envoyé à ${recipientEmail}.`}
                  </p>

                  <div className="p-4 bg-white rounded-2xl border-2 border-dashed border-[#de2b2b] text-center space-y-1 shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-[#1a1a1a]/60">Voucher Code</span>
                    <div className="font-mono text-base font-bold text-[#de2b2b] tracking-wider">{voucherCode}</div>
                    <div className="text-xs text-[#1a1a1a]/70">Valid for dine-in, takeaway, and online orders</div>
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
              ) : (
                <form onSubmit={handlePurchase} className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a1a1a]/70 mb-2">
                      1. {lang === 'en' ? 'Select Amount' : 'Sélectionnez le montant'}
                    </label>
                    <div className="grid grid-cols-4 gap-2 mb-2">
                      {[25, 50, 75, 100].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => {
                            setAmount(val);
                            setIsCustom(false);
                          }}
                          className={`py-2 rounded-xl text-xs font-bold transition-all tabular-nums cursor-pointer ${
                            !isCustom && amount === val
                              ? 'bg-[#de2b2b] text-[#f8efdc] shadow-sm'
                              : 'bg-white text-[#1a1a1a] border border-[#1a1a1a]/15'
                          }`}
                        >
                          ${val}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setAmount(150);
                          setIsCustom(false);
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          !isCustom && amount === 150
                            ? 'bg-[#de2b2b] text-[#f8efdc]'
                            : 'bg-white text-[#1a1a1a] border border-[#1a1a1a]/15'
                        }`}
                      >
                        $150
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsCustom(true)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isCustom
                            ? 'bg-[#de2b2b] text-[#f8efdc]'
                            : 'bg-white text-[#1a1a1a] border border-[#1a1a1a]/15'
                        }`}
                      >
                        {lang === 'en' ? 'Other Amount' : 'Autre montant'}
                      </button>
                    </div>

                    {isCustom && (
                      <div className="mt-2">
                        <input
                          type="number"
                          min="20"
                          max="1000"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder={lang === 'en' ? 'Amount in CAD (min $20)' : 'Montant en CAD (min 20$)'}
                          className="w-full px-3.5 py-2 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1a1a1a]/70">
                      2. {lang === 'en' ? 'Recipient Coordinates' : 'Coordonnées du destinataire'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder={lang === 'en' ? 'Recipient Name' : 'Nom du bénéficiaire'}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        placeholder={lang === 'en' ? 'Recipient Email' : 'Courriel du bénéficiaire'}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder={lang === 'en' ? 'Your Name' : 'Votre nom'}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                      />
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={lang === 'en' ? 'Personal Message' : 'Message personnalisé'}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#1a1a1a]/20 bg-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-[#de2b2b] hover:bg-[#7c2627] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? `Purchase Card · $${currentAmount} CAD` : `Acheter la Carte · ${currentAmount}$ CAD`}</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

