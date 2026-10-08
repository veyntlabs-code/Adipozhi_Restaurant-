'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO, MenuItem } from '../data/restaurantData';
import { 
  Search, 
  Utensils, 
  Flame, 
  Plus, 
  Filter, 
  ShoppingBag, 
  ChevronRight,
  Phone,
  Leaf,
  Drumstick,
  Star,
  Package,
  Sparkles,
  MapPin,
  Clock,
  X,
  ArrowRight
} from 'lucide-react';

interface RegularMenuPageProps {
  onAddToCart: (item: MenuItem, quantity?: number, notes?: string) => void;
  onOpenOrder: () => void;
  onOpenReservation: () => void;
  onNavigate: (path: string) => void;
  lang: 'en' | 'fr';
}

export const RegularMenuPage: React.FC<RegularMenuPageProps> = ({
  onAddToCart,
  onOpenOrder,
  onOpenReservation,
  onNavigate,
  lang
}) => {
  const [serviceType, setServiceType] = useState<'on_site' | 'takeout' | 'delivery'>('on_site');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [showMobileCategoryFilter, setShowMobileCategoryFilter] = useState(false);
  const [showBiryaniSpecial, setShowBiryaniSpecial] = useState(true);
  const [selectedDiet, setSelectedDiet] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);
  
  const searchParams = useSearchParams();

  const toggleCategory = (catId: string) => {
    if (catId === 'all') {
      setSelectedCategories(['all']);
    } else {
      setSelectedCategories(prev => {
        const newCats = prev.filter(c => c !== 'all');
        if (newCats.includes(catId)) {
          const filtered = newCats.filter(c => c !== catId);
          return filtered.length === 0 ? ['all'] : filtered;
        } else {
          return [...newCats, catId];
        }
      });
    }
  };

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategories([category]);
    }
  }, [searchParams]);

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      // Category filter
      if (!selectedCategories.includes('all') && !selectedCategories.includes(dish.category)) {
        return false;
      }
      // Diet filter
      if (selectedDiet === 'veg' && !dish.isVeg) return false;
      if (selectedDiet === 'non-veg' && dish.isVeg) return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const name = dish.name.toLowerCase();
        const desc = dish.description.toLowerCase();
        if (!name.includes(query) && !desc.includes(query)) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategories, selectedDiet, searchQuery]);

  const handleAdd = (dish: MenuItem, variantLabel?: string, variantPrice?: number) => {
    const itemToAdd: MenuItem = variantPrice
      ? { ...dish, name: `${dish.name} (${variantLabel})`, price: variantPrice }
      : dish;

    onAddToCart(itemToAdd, 1);
    setAddedItemNotice(itemToAdd.name);
    setTimeout(() => setAddedItemNotice(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8efdc] text-[#1a1a1a] selection:bg-[#de2b2b] selection:text-[#f8efdc]">
      {/* 1. Header Banner / Hero Title */}
      <section className="bg-[#de2b2b] text-[#f8efdc] pt-10 pb-12 sm:pt-14 sm:pb-16 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/food/food12.jpg"
            alt="Adipozhi Menu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#f8efdc]/80 mb-5">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold text-[#f8efdc]">
              Menu (21 Categories)
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>4.7 ★ (284 Google Reviews)</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/20 text-xs text-[#f8efdc]/90">
                  <MapPin className="w-3 h-3" />
                  <span>Bus stand Entrance Arch, Monday Market</span>
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f8efdc]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                ADIPOZHI FAMILY RESTAURANT — MENU
              </h1>
              <p className="text-sm sm:text-base text-[#f8efdc]/90 font-light mt-2 max-w-xl">
                {RESTAURANT_INFO.tagline} Complete 21-category menu from hot soups to bucket biryanis, parottas, and arabian grills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Special Promo Banner (Family Pack Offer) */}
      <div className="bg-[#7c2627] text-[#f8efdc] py-3 px-4 shadow-sm text-center text-xs sm:text-sm font-medium border-b border-[#f8efdc]/20">
        <p>
          🎉 <strong>FAMILY PACK — ONLY PARCEL:</strong> Half Bucket Chicken Biryani gets <strong>1/4 KG Chicken 65 Free!</strong> | Full Bucket gets <strong>1/2 KG Chicken 65 Free!</strong> Call Us
        </p>
      </div>

      {/* 3. Filter Bar & Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-[#1a1a1a]/10">
          {/* Dietary Filter Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'veg', label: 'Pure Veg' },
              { id: 'non-veg', label: 'Non-Veg' }
            ].map((diet) => (
              <button
                key={diet.id}
                onClick={() => setSelectedDiet(diet.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedDiet === diet.id
                    ? 'bg-[#de2b2b] text-[#f8efdc] shadow-sm'
                    : 'bg-white/80 text-[#1a1a1a]/80 hover:bg-white border border-[#1a1a1a]/10'
                }`}
              >
                {diet.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1a1a1a]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 21 categories (Biryani, Parotta, Al-Faham...)"
              className="w-full pl-10 pr-8 py-2 bg-white rounded-full border border-[#1a1a1a]/15 text-xs text-[#1a1a1a] placeholder-[#1a1a1a]/40 focus:outline-none focus:ring-2 focus:ring-[#de2b2b]/30 focus:border-[#de2b2b]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#1a1a1a]/50 hover:text-[#1a1a1a]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 21 Categories Bar (Desktop) */}
        <div className="hidden md:flex flex-wrap items-center gap-2 py-3.5 border-b border-[#1a1a1a]/10">
          {MENU_CATEGORIES.map((cat) => {
            const count = cat.id === 'all'
              ? MENU_ITEMS.length
              : MENU_ITEMS.filter(i => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategories.includes(cat.id)
                    ? 'bg-[#1a1a1a] text-[#f8efdc] font-bold shadow-sm'
                    : 'bg-white/70 text-[#1a1a1a]/80 hover:bg-white border border-[#1a1a1a]/10'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategories.includes(cat.id) ? 'bg-white/20 text-[#f8efdc]' : 'bg-black/5 text-[#1a1a1a]/50'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Filter Button */}
        <div className="flex md:hidden py-3 items-center justify-between border-b border-[#1a1a1a]/10">
          <span className="text-sm font-bold text-[#1a1a1a]">
            {selectedCategories.includes('all') 
              ? 'All Categories' 
              : `${selectedCategories.length} Categories Selected`}
          </span>
          <button 
            onClick={() => setShowMobileCategoryFilter(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-[#1a1a1a]/20 text-xs font-bold text-[#1a1a1a] shadow-sm cursor-pointer"
          >
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
        </div>
      </div>

      {/* 4. Dish Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {filteredDishes.length === 0 ? (
          <div className="text-center py-20 bg-white/40 rounded-3xl border border-[#1a1a1a]/10">
            <Utensils className="w-12 h-12 text-[#de2b2b]/40 mx-auto mb-3" />
            <h3 className="text-xl font-bold font-serif">
              No dishes match your search
            </h3>
            <p className="text-sm text-[#1a1a1a]/60 mt-1">
              Try clearing filters or changing search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategories(['all']);
                setSelectedDiet('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2.5 bg-[#de2b2b] text-[#f8efdc] text-xs font-bold uppercase rounded-full cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-14">
            {MENU_CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
              const categoryDishes = filteredDishes.filter(d => d.category === cat.id);
              if (categoryDishes.length === 0) return null;

              return (
                <div key={cat.id} className="scroll-mt-24" id={`category-${cat.id}`}>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#1a1a1a] mb-4 border-b border-[#1a1a1a]/10 pb-2 flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-xs sm:text-sm font-medium text-[#1a1a1a]/50 bg-white px-2.5 py-0.5 rounded-full border border-[#1a1a1a]/10">
                      {categoryDishes.length}
                    </span>
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 auto-rows-fr">
                    {categoryDishes.map((dish) => {
                      const displayPrice = dish.priceDisplay
                ? dish.priceDisplay
                : dish.isSeasonalPrice
                  ? 'Seasonal Price'
                  : `₹${dish.price}`;

              return (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl border border-[#1a1a1a]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden h-full"
                >
                  {/* Dish Image or Placeholder */}
                  <div className="w-full h-28 sm:h-48 overflow-hidden bg-[#f8efdc]/50 shrink-0 flex items-center justify-center">
                    {dish.image ? (
                      <img 
                        src={dish.image} 
                        alt={dish.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]/5">
                        <Utensils className="w-8 h-8 sm:w-12 sm:h-12 text-[#1a1a1a]/15" />
                      </div>
                    )}
                  </div>

                  <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                    {/* Top Badges Row */}
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        {/* Veg / Non-Veg Indicator */}
                        <span className={`w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 rounded-sm flex items-center justify-center shrink-0 ${
                          dish.isVeg ? 'border-green-600' : 'border-red-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                            dish.isVeg ? 'bg-green-600' : 'bg-red-600'
                          }`} />
                        </span>

                        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#1a1a1a]/50">
                          {dish.subCategory ? `${dish.subCategory} • ` : ''}
                          {dish.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1">
                        {dish.isParcelOnly && (
                          <span className="px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-amber-800 border border-amber-500/30">
                            Only Parcel
                          </span>
                        )}

                        {dish.tags?.[0] && (
                          <span className="px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#de2b2b]/10 text-[#de2b2b]">
                            {dish.tags[0]}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Dish Name */}
                    <h3
                      className="text-sm sm:text-xl font-bold text-[#1a1a1a] group-hover:text-[#de2b2b] transition-colors leading-snug"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {dish.name}
                    </h3>

                    {/* Portion Note if present */}
                    {dish.portion && (
                      <span className="text-xs font-semibold text-[#de2b2b] block mt-0.5">
                        Portion: {dish.portion}
                      </span>
                    )}

                    {/* Special Offer (Free Chicken 65 on bucket) */}
                    {dish.specialOffer && (
                      <div className="mt-2 py-1 px-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>FREE BONUS: {dish.specialOffer}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-[#1a1a1a]/70 font-light mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Multi-Portion Variants Switcher if present */}
                  {dish.priceVariants && dish.priceVariants.length > 0 && (
                    <div className="pt-3 mt-3 border-t border-[#1a1a1a]/10 flex flex-wrap gap-1.5">
                      <span className="text-[10px] uppercase font-bold text-[#1a1a1a]/50 w-full">
                        Portions:
                      </span>
                      {dish.priceVariants.map((v, vIdx) => (
                        <button
                          key={vIdx}
                          onClick={() => typeof v.price === 'number' && handleAdd(dish, v.label, v.price)}
                          className="px-2 py-1 rounded-md text-[11px] font-bold bg-[#f8efdc] hover:bg-[#de2b2b] hover:text-[#f8efdc] border border-[#1a1a1a]/10 transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>{v.label}</span>
                          <span className="text-[#de2b2b] group-hover:text-inherit">
                            {typeof v.price === 'number' ? `₹${v.price}` : v.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Bottom Price */}
                  <div className="pt-3 mt-auto flex items-center justify-between border-t border-[#1a1a1a]/10">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#1a1a1a]/40 block leading-none">
                        Price
                      </span>
                      <div className="text-xl font-black font-serif text-[#de2b2b]">
                        {displayPrice}
                      </div>
                    </div>
                  </div>
                  </div>
                </motion.div>
              );
            })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Sticky Added-to-Cart Notification */}
      <AnimatePresence>
        {addedItemNotice && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 right-6 z-50 bg-[#1a1a1a] text-[#f8efdc] px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10"
          >
            <div className="w-6 h-6 rounded-full bg-[#de2b2b] text-[#f8efdc] flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-white">{addedItemNotice}</p>
              <p className="text-[11px] text-white/60">
                Added to your order
              </p>
            </div>
            <button
              onClick={onOpenOrder}
              className="ml-2 px-3 py-1 bg-[#de2b2b] text-[#f8efdc] rounded-full text-xs font-bold hover:bg-white hover:text-[#de2b2b] transition-colors cursor-pointer"
            >
              View Order
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Category Filter Modal */}
      <AnimatePresence>
        {showMobileCategoryFilter && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#f8efdc]"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#1a1a1a]/10 bg-white shadow-sm z-10">
              <h2 className="text-lg font-bold font-serif text-[#1a1a1a]">Filter Categories</h2>
              <button onClick={() => setShowMobileCategoryFilter(false)} className="text-[#1a1a1a]/60 hover:text-[#1a1a1a] text-xl px-2">
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#f8efdc]">
              {MENU_CATEGORIES.map((cat) => {
                const isSelected = selectedCategories.includes(cat.id);
                const count = cat.id === 'all'
                  ? MENU_ITEMS.length
                  : MENU_ITEMS.filter(i => i.category === cat.id).length;
                  
                return (
                  <label key={cat.id} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30 transition-colors cursor-pointer shadow-sm">
                    <input 
                      type="checkbox" 
                      checked={isSelected}
                      onChange={() => toggleCategory(cat.id)}
                      className="w-5 h-5 rounded border-gray-300 text-[#de2b2b] focus:ring-[#de2b2b] cursor-pointer"
                    />
                    <span className={`text-sm flex-1 ${isSelected ? 'font-bold text-[#de2b2b]' : 'font-medium text-[#1a1a1a]'}`}>
                      {cat.name}
                    </span>
                    <span className="text-xs font-bold text-[#1a1a1a]/50 bg-black/5 px-2 py-0.5 rounded-full">
                      {count}
                    </span>
                  </label>
                );
              })}
            </div>
            <div className="p-4 border-t border-[#1a1a1a]/10 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-10">
              <button 
                onClick={() => setShowMobileCategoryFilter(false)}
                className="w-full py-3.5 bg-[#de2b2b] text-[#f8efdc] font-bold uppercase rounded-full tracking-wider shadow-md hover:bg-[#c42525] transition-colors cursor-pointer"
              >
                Show Results
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Biryani Special Popup Modal */}
      <AnimatePresence>
        {showBiryaniSpecial && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#f8efdc] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Top Image Header */}
              <div className="h-48 sm:h-56 relative w-full shrink-0">
                <img 
                  src="/images/food/food11.jpg" 
                  alt="Biryani Special" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f8efdc] via-[#f8efdc]/60 to-transparent" />
                <button
                  onClick={() => setShowBiryaniSpecial(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-[#1a1a1a] hover:bg-white/40 transition-colors cursor-pointer border border-white/30 shadow-sm"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="px-8 pb-8 pt-2 text-center relative z-10">
                <span className="inline-block px-3 py-1 bg-[#de2b2b] text-[#f8efdc] text-[10px] uppercase font-black tracking-widest rounded-full mb-4 shadow-sm border border-[#de2b2b]/50">
                  Daily Feature
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-6 tracking-tight leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Biryani Special
                </h2>

                <div className="space-y-4 text-[#1a1a1a]/80 text-left">
                  {/* Daily */}
                  <div className="relative p-5 rounded-2xl bg-white border border-[#1a1a1a]/10 shadow-sm group hover:border-[#de2b2b]/30 transition-colors flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#de2b2b]/10 text-[#de2b2b] flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1a1a1a] mb-0.5">Chicken Biryani</h3>
                      <p className="text-xs">Available daily from <span className="font-bold text-[#de2b2b]">11:00 AM</span></p>
                      <p className="text-[11px] text-[#1a1a1a]/60 mt-1 italic">Usually available until around 3:00 PM</p>
                    </div>
                  </div>

                  {/* Weekend */}
                  <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#de2b2b]/5 to-[#de2b2b]/10 border border-[#de2b2b]/20 shadow-sm group hover:border-[#de2b2b]/40 transition-colors flex items-start gap-4 mt-4">
                    <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 bg-[#de2b2b] text-[#f8efdc] text-[9px] font-black uppercase tracking-wider rounded-full shadow-sm whitespace-nowrap">
                      Weekend Specials
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#de2b2b] text-[#f8efdc] flex items-center justify-center shrink-0 shadow-sm">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1a1a1a] mb-0.5">Beef & Mutton Biryani</h3>
                      <p className="text-xs">Saturday & Sunday from <span className="font-bold text-[#de2b2b]">11:00 AM</span></p>
                      <p className="text-[11px] text-[#1a1a1a]/60 mt-1 italic">Usually available until around 3:00 PM</p>
                    </div>
                  </div>
                </div>

                <p className="italic text-xs font-medium text-[#1a1a1a]/60 mt-6 mb-6">
                  Come early to enjoy your favourite biryani!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button
                    onClick={() => {
                      setShowBiryaniSpecial(false);
                      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-3.5 bg-[#1a1a1a] hover:bg-black text-[#f8efdc] font-bold uppercase rounded-xl tracking-widest text-xs shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group border border-[#1a1a1a]"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setShowBiryaniSpecial(false)}
                    className="px-6 py-3.5 border-2 border-[#1a1a1a]/15 text-[#1a1a1a] font-bold uppercase rounded-xl tracking-widest text-xs hover:bg-[#1a1a1a]/5 hover:border-[#1a1a1a]/30 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. Bottom Banner */}
      <section className="bg-[#de2b2b] text-[#f8efdc] py-14 px-4 relative overflow-hidden mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <span className="text-xs uppercase font-extrabold tracking-[0.3em] text-[#f8efdc]/80">
            ADIPOZHI FAMILY RESTAURANT · MONDAY MARKET
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Delicious Food for the Whole Family
          </h2>
          <p className="text-sm sm:text-base text-[#f8efdc]/90 max-w-xl mx-auto font-light leading-relaxed">
            {RESTAURANT_INFO.address} · Call ahead for fast pickup or family table reservation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenReservation}
              className="px-7 py-3.5 bg-[#f8efdc] text-[#de2b2b] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-white transition-all cursor-pointer"
            >
              Reserve Family Table
            </button>
            <button
              onClick={onOpenOrder}
              className="px-7 py-3.5 border-2 border-[#f8efdc] text-[#f8efdc] font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online / Parcel</span>
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="px-6 py-3.5 text-[#f8efdc] hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

