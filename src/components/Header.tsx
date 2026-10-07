'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, MapPin, Phone, Mail, Calendar, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenMenus: () => void;
  onOpenRestaurant: () => void;
  onOpenEvents: () => void;
  onOpenPrivateRooms: () => void;
  onOpenReservation: () => void;
  onOpenOrder: () => void;
  onOpenGiftCard: () => void;
  onNavigate?: (path: string) => void;
  currentPath?: string;
  lang?: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenus,
  onOpenRestaurant,
  onOpenEvents,
  onOpenPrivateRooms,
  onOpenReservation,
  onOpenOrder,
  onOpenGiftCard,
  onNavigate,
  currentPath = '/',
  lang = 'en',
  setLang
}) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string, fallbackAction?: () => void) => {
    if (onNavigate) {
      onNavigate(path);
    } else if (fallbackAction) {
      fallbackAction();
    }
    setBurgerOpen(false);
  };

  const isHeroMode = currentPath === '/' && !isScrolled;

  const headerBgClass = isHeroMode
    ? 'bg-[#de2b2b] border-transparent'
    : 'bg-[#f8efdc]/95 backdrop-blur-md border-[#1a1a1a]/10 shadow-sm';

  const textColorClass = isHeroMode ? 'text-[#f8efdc]' : 'text-[#1a1a1a]';
  const logoColorClass = isHeroMode ? 'text-[#f8efdc]' : 'text-[#de2b2b]';
  const logoSubColorClass = isHeroMode ? 'text-[#f8efdc]/90' : 'text-[#7c2627]';
  const hoverLineColor = isHeroMode ? 'bg-[#f8efdc]' : 'bg-[#de2b2b]';
  const phoneBgClass = isHeroMode 
    ? 'bg-[#f8efdc]/20 text-[#f8efdc] hover:bg-[#f8efdc] hover:text-[#de2b2b] border border-[#f8efdc]/40' 
    : 'bg-[#de2b2b]/10 text-[#de2b2b] hover:bg-[#de2b2b] hover:text-[#f8efdc] border border-transparent';
  const burgerColorClass = isHeroMode ? 'text-[#f8efdc] hover:text-[#f8efdc]/70' : 'text-[#1a1a1a] hover:text-[#de2b2b]';
  const langBtnClass = isHeroMode ? 'text-[#f8efdc] border-[#f8efdc]/50' : 'text-[#de2b2b] border-[#de2b2b]/30';

  return (
    <header className={`sticky top-0 z-40 border-b transition-all duration-300 select-none ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        {/* Left Nav */}
        <nav className={`hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide ${textColorClass}`}>
          <motion.button
            type="button"
            whileHover={{ y: -1, opacity: 0.8 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleNav('/menus/regular', onOpenMenus)}
            className={`transition-colors uppercase tracking-wider text-xs font-bold relative group cursor-pointer ${
              currentPath.startsWith('/menus') && !isHeroMode ? 'text-[#de2b2b]' : ''
            }`}
          >
            <span>{lang === 'en' ? 'Menus' : 'Menus'}</span>
            <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${hoverLineColor} ${
              currentPath.startsWith('/menus') ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -1, opacity: 0.8 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleNav('/restaurant', onOpenRestaurant)}
            className={`transition-colors uppercase tracking-wider text-xs font-bold relative group cursor-pointer ${
              currentPath === '/restaurant' && !isHeroMode ? 'text-[#de2b2b]' : ''
            }`}
          >
            <span>{lang === 'en' ? 'The Restaurant' : 'Le Restaurant'}</span>
            <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${hoverLineColor} ${
              currentPath === '/restaurant' ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </motion.button>
        </nav>

        {/* Center Custom Logo Mark */}
        <button
          type="button"
          onClick={() => handleNav('/')}
          className="flex flex-col items-center justify-center text-center group cursor-pointer bg-transparent border-0"
        >
          <motion.img
            src="/logo_text.png"
            alt="Adipozhi Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className={`h-12 sm:h-16 w-auto transition-all duration-300 drop-shadow-sm ${isHeroMode ? '' : 'invert-[.8]'}`}
          />
          <span className={`text-[10px] uppercase tracking-[0.25em] font-medium -mt-1 group-hover:tracking-[0.3em] transition-all duration-300 ${logoSubColorClass}`}>
            family restaurant · monday market
          </span>
        </button>

        {/* Right Nav */}
        <nav className={`hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide ${textColorClass}`}>
          <motion.button
            type="button"
            whileHover={{ y: -1, opacity: 0.8 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleNav('/events', onOpenEvents)}
            className={`transition-colors uppercase tracking-wider text-xs font-bold relative group cursor-pointer ${
              currentPath === '/events' && !isHeroMode ? 'text-[#de2b2b]' : ''
            }`}
          >
            <span>{lang === 'en' ? 'Celebrations & Catering' : 'Célébrations'}</span>
            <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${hoverLineColor} ${
              currentPath === '/events' ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -1, opacity: 0.8 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenPrivateRooms}
            className="transition-colors uppercase tracking-wider text-xs font-bold relative group cursor-pointer"
          >
            <span>{lang === 'en' ? 'Banquet Hall' : 'Salle Familiale'}</span>
            <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${hoverLineColor}`} />
          </motion.button>

          <a
            href="tel:09585154254"
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${phoneBgClass}`}
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Hamburger / Quick Actions */}
        <div className="flex items-center gap-3 lg:hidden">

          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            onClick={() => setBurgerOpen(!burgerOpen)}
            className={`p-2 transition-colors duration-300 ${burgerColorClass}`}
            aria-label="Toggle Navigation"
          >
            {burgerOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Full-screen Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {burgerOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 120px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-[120px] bg-[#f8efdc] z-50 p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <nav className="flex flex-col gap-4 text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                <motion.button
                  whileHover={{ x: 6, color: '#de2b2b' }}
                  onClick={() => handleNav('/')}
                  className="text-left text-[#1a1a1a] border-b border-[#1a1a1a]/10 pb-2 transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'Home' : 'Accueil'}
                </motion.button>
                <motion.button
                  whileHover={{ x: 6, color: '#de2b2b' }}
                  onClick={() => handleNav('/menus/regular', onOpenMenus)}
                  className="text-left text-[#1a1a1a] border-b border-[#1a1a1a]/10 pb-2 transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'Regular Menu' : 'Menu Régulier'}
                </motion.button>
                <motion.button
                  whileHover={{ x: 6, color: '#de2b2b' }}
                  onClick={() => handleNav('/restaurant', onOpenRestaurant)}
                  className="text-left text-[#1a1a1a] border-b border-[#1a1a1a]/10 pb-2 transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'The Restaurant' : 'Le Restaurant'}
                </motion.button>
                <motion.button
                  whileHover={{ x: 6, color: '#de2b2b' }}
                  onClick={() => handleNav('/events', onOpenEvents)}
                  className="text-left text-[#1a1a1a] border-b border-[#1a1a1a]/10 pb-2 transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'What’s On & Events' : 'Événements & Spectacles'}
                </motion.button>
                <motion.button
                  whileHover={{ x: 6, color: '#de2b2b' }}
                  onClick={() => {
                    setBurgerOpen(false);
                    onOpenPrivateRooms();
                  }}
                  className="text-left text-[#1a1a1a] border-b border-[#1a1a1a]/10 pb-2 transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'Private Rooms' : 'Salons Privés'}
                </motion.button>
              </nav>

              {/* Coordinates in Mobile Drawer */}
              <div className="space-y-3 pt-4 text-xs text-[#1a1a1a]/80">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#de2b2b] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#1a1a1a] uppercase text-[10px]">Address</div>
                    <p>Bus stand Entrance Arch, Monday Market, Tamil Nadu 629802</p>
                    <p className="text-[10px] text-[#de2b2b] font-bold">Get there: 7 mins · Open · Closes 11 pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#de2b2b] shrink-0" />
                  <div>
                    <div className="font-bold text-[#1a1a1a] uppercase text-[10px]">Phone</div>
                    <a href="tel:+919585154254" className="hover:text-[#de2b2b] font-bold"><Phone className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-[#1a1a1a]/10">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setBurgerOpen(false);
                  onOpenReservation();
                }}
                className="py-3 px-4 bg-[#de2b2b] text-[#f8efdc] font-bold text-xs rounded-xl uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Reserve' : 'Réserver'}</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setBurgerOpen(false);
                  onOpenOrder();
                }}
                className="py-3 px-4 bg-[#1a1a1a] text-[#f8efdc] font-bold text-xs rounded-xl uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Order' : 'Commander'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

