'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Check } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  lang: 'en' | 'fr';
}

export const MenusModal: React.FC<MenusModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  lang
}) => {
  const [serviceMode, setServiceMode] = useState<'onsite' | 'takeaway' | 'delivery'>('onsite');
  const [activeMenuTab, setActiveMenuTab] = useState('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const menuTabs = [
    { id: 'all', label: lang === 'en' ? 'Main Menu' : 'Menu Principal' },
    { id: 'pizzas', label: lang === 'en' ? 'Pizzas' : 'Pizzas' },
    { id: 'breakfasts', label: lang === 'en' ? 'Breakfasts' : 'Déjeuners' },
    { id: 'burgers', label: lang === 'en' ? 'Burgers & Steaks' : 'Burgers & Grillades' },
    { id: 'drinks', label: lang === 'en' ? 'Drinks & Cocktails' : 'Boissons & Cocktails' }
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeMenuTab === 'all') return true;
    if (activeMenuTab === 'burgers') return item.category === 'burgers' || item.category === 'steaks' || item.category === 'tartars';
    return item.category === activeMenuTab;
  });

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => {
      setAddedId((curr) => (curr === item.id ? null : curr));
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto" data-lenis-prevent>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#f8efdc] text-[#1a1a1a] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
          >
            {/* Top Bar */}
            <div className="p-5 sm:p-6 border-b border-[#1a1a1a]/15 flex items-center justify-between bg-white shrink-0">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#de2b2b] block mb-0.5">
                  {lang === 'en' ? 'Explore Menus' : 'Nos Cartes'}
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {lang === 'en' ? 'Adipozhi Culinary Collection' : 'La Carte Gastronomique Adipozhi'}
                </h2>
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#1a1a1a]/10 text-[#1a1a1a] cursor-pointer"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Service Mode Selector */}
            <div className="px-6 py-3 bg-[#fdfaf4] border-b border-[#1a1a1a]/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-1 p-1 bg-[#1a1a1a]/5 rounded-full">
                {(['onsite', 'takeaway', 'delivery'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setServiceMode(mode)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      serviceMode === mode
                        ? 'bg-[#de2b2b] text-[#f8efdc] shadow-sm'
                        : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                    }`}
                  >
                    {mode === 'onsite' && (lang === 'en' ? 'On site' : 'Sur place')}
                    {mode === 'takeaway' && (lang === 'en' ? 'Takeaway' : 'Pour emporter')}
                    {mode === 'delivery' && (lang === 'en' ? 'Delivery' : 'Livraison')}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#1a1a1a]/60 italic">
                Monday Market Bus Stand Arch · Fresh & Hot Serving
              </div>
            </div>

            {/* Menu Sub-tabs */}
            <div className="px-6 py-3 border-b border-[#1a1a1a]/10 flex items-center gap-2 overflow-x-auto scrollbar-none bg-white shrink-0">
              {menuTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveMenuTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeMenuTab === tab.id
                      ? 'bg-[#1a1a1a] text-[#f8efdc]'
                      : 'bg-[#f8efdc] text-[#1a1a1a] hover:bg-[#de2b2b] hover:text-[#f8efdc]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const isAdded = addedId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl border border-[#1a1a1a]/15 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="h-44 overflow-hidden relative group">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {item.tags && item.tags.length > 0 && (
                          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#f8efdc] text-[#de2b2b] font-bold text-[10px] uppercase tracking-wider rounded-md shadow-sm">
                            {item.tags[0]}
                          </div>
                        )}
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3
                            className="text-base font-bold text-[#1a1a1a]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {item.name}
                          </h3>
                          <span className="text-[#de2b2b] font-bold text-base tabular-nums shrink-0">
                            {item.priceDisplay ? item.priceDisplay : item.isSeasonalPrice ? 'Seasonal' : `₹${item.price}`}
                          </span>
                        </div>
                        <p className="text-xs text-[#1a1a1a]/70 line-clamp-2 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAdd(item)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#de2b2b] hover:bg-[#7c2627] text-[#f8efdc]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{lang === 'en' ? 'Added!' : 'Ajouté!'}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>{lang === 'en' ? 'Add to Order' : 'Ajouter'}</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

