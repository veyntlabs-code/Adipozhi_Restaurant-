'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Star,
  MapPin,
  Clock,
  Heart,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Volume2,
  VolumeX,
  Plus,
  Check
} from 'lucide-react';
import { SafeImage } from './SafeImage';
import { MenuItem } from '../data/restaurantData';

export interface GalleryPhoto {
  id: string;
  filename: string;
  title: string;
  titleTamil: string;
  category: 'ambiance' | 'starters' | 'biryani' | 'seafood' | 'desserts';
  caption: string;
  price?: number;
  badge?: string;
}

export const ALL_23_PHOTOS: GalleryPhoto[] = [
  // 1. Ambiance & Architecture (4)
  {
    id: 'storefront',
    filename: 'storefront.jpg',
    title: 'Restaurant Facade & Storefront',
    titleTamil: 'முகப்பு தோற்றம்',
    category: 'ambiance',
    caption: 'Prime location on Thalakulam Road right opposite the Monday Market Bus Stand in Thingal Nagar.',
    badge: 'Thingal Nagar'
  },
  {
    id: 'premium-interior',
    filename: 'premium-interior.jpg',
    title: 'Ground Floor Family Booths',
    titleTamil: 'குடும்ப பிரத்யேக பூத் இருக்கைகள்',
    category: 'ambiance',
    caption: 'Air-conditioned plush high-back family booths with warm brass lighting and spotless tables.',
    badge: 'Family AC'
  },
  {
    id: 'interior-booths',
    filename: 'interior-booths.jpg',
    title: 'Executive Mezzanine Lounge',
    titleTamil: 'முதல் தள எக்ஸிகியூட்டிவ் லவுஞ்ச்',
    category: 'ambiance',
    caption: 'Industrial-chic mezzanine seating with dark textured brickwork and private booths for quiet dining.',
    badge: 'EST. 2016'
  },
  {
    id: 'experience-interior',
    filename: 'experience-interior.jpg',
    title: 'The Rose Banquet & Celebration Hall',
    titleTamil: 'ரோஜா பார்ட்டி திருமண அரங்கம்',
    category: 'ambiance',
    caption: 'Floral pillars draped in red roses, crystal chandeliers, accommodating 16 to 120 guests.',
    badge: 'Party Hall'
  },
  {
    id: 'logo',
    filename: 'logo.png',
    title: 'Official Adipozhi Signature Crest',
    titleTamil: 'அடிபொழி அதிகாரப்பூர்வ லோகோ',
    category: 'ambiance',
    caption: 'The golden chef crown and crimson insignia of Adipozhi Family Restaurant.',
    badge: 'Signature'
  },

  // 2. Biryani & Mains (5)
  {
    id: 'food11',
    filename: 'food11.jpg',
    title: 'Claypot Dum Biryani',
    titleTamil: 'மண்பானை தம் பிரியாணி',
    category: 'biryani',
    caption: 'Slow-cooked aromatic basmati rice layered with succulent tender meat and saffron, served in earthen handi.',
    price: 240,
    badge: '4.7★ Bestseller'
  },
  {
    id: 'food4',
    filename: 'food4.jpg',
    title: 'Malabar Parotta & Salna Platter',
    titleTamil: 'மலபார் பரோட்டா & சால்னா',
    category: 'biryani',
    caption: 'Crisp multi-layered flaky parottas paired with rich, spicy country chicken salna gravy.',
    price: 160,
    badge: 'Local Favorite'
  },
  {
    id: 'food12',
    filename: 'food12.jpg',
    title: 'Giant Golden Ghee Roast',
    titleTamil: 'மொருமொரு நெய் ரோஸ்ட்',
    category: 'biryani',
    caption: 'Paper-thin golden crispy crepe made with pure desi ghee, served with three signature chutneys and sambar.',
    price: 110,
    badge: 'Vegetarian'
  },
  {
    id: 'food14',
    filename: 'food14.jpg',
    title: 'Butter Naan & Murgh Handi',
    titleTamil: 'பட்டர் நான் & சிக்கன் கிரேவி',
    category: 'biryani',
    caption: 'Tandoor-baked garlic butter naan with velvety butter chicken gravy in copper serveware.',
    price: 290,
    badge: 'Rich & Creamy'
  },
  {
    id: 'food9',
    filename: 'food9.jpg',
    title: 'Mutton Chukka Roast',
    titleTamil: 'மட்டன் சுக்கா வறுவல்',
    category: 'biryani',
    caption: 'Tender baby goat pieces pan-roasted with shallots, curry leaves, and freshly ground peppercorns.',
    price: 360,
    badge: 'Chef Special'
  },

  // 3. Tandoor & Non-Veg Starters (8)
  {
    id: 'food10',
    filename: 'food10.jpg',
    title: 'Charcoal Grilled Tandoori Chicken',
    titleTamil: 'தந்தூரி சிக்கன் முழு கால்',
    category: 'starters',
    caption: 'Whole chicken legs marinated in yogurt and Kashmiri chilli, smoked to tender perfection in the clay tandoor.',
    price: 260,
    badge: 'Live Tandoor'
  },
  {
    id: 'food2',
    filename: 'food2.jpg',
    title: 'Chicken Tikka Sizzler Platter',
    titleTamil: 'சிக்கன் டிக்கா சிஸ்லர்',
    category: 'starters',
    caption: 'Smoky boneless chicken chunks served sizzling on cast iron with onions, bell peppers and mint dip.',
    price: 280,
    badge: 'Sizzling Hot'
  },
  {
    id: 'food6',
    filename: 'food6.jpg',
    title: 'Adipozhi Dragon Chicken',
    titleTamil: 'அடிபொழி டிராகன் சிக்கன்',
    category: 'starters',
    caption: 'Crispy fried chicken strips glazed in hot spicy-sweet chilli garlic sauce with crunchy sesame.',
    price: 260,
    badge: 'Most Loved'
  },
  {
    id: 'food1',
    filename: 'food1.jpg',
    title: 'Chettinad Pepper Chicken',
    titleTamil: 'செட்டிநாடு பெப்பர் சிக்கன்',
    category: 'starters',
    caption: 'Fiery roasted chicken infused with cracked Tellicherry black pepper and fried curry leaves.',
    price: 250,
    badge: 'Spicy'
  },
  {
    id: 'food7',
    filename: 'food7.jpg',
    title: 'Kadai Chicken Fry',
    titleTamil: 'கடாய் சிக்கன் வறுவல்',
    category: 'starters',
    caption: 'Country-style dark roasted chicken with whole spices, dried red chillies, and fresh coriander.',
    price: 240,
    badge: 'Savory'
  },
  {
    id: 'food8',
    filename: 'food8.jpg',
    title: 'Chicken Manchurian Dry',
    titleTamil: 'சிக்கன் மஞ்சூரியன் டிரை',
    category: 'starters',
    caption: 'Crisp chicken balls tossed in dark soya-garlic reduction with spring onions.',
    price: 230,
    badge: 'Indo-Chinese'
  },
  {
    id: 'food15',
    filename: 'food15.webp',
    title: 'Boneless Chicken 65',
    titleTamil: 'போன்லெஸ் சிக்கன் 65',
    category: 'starters',
    caption: 'Authentic South Indian spicy deep-fried chicken cubes with green chillies and lemon wedges.',
    price: 220,
    badge: 'Crispy'
  },
  {
    id: 'food16',
    filename: 'food16.webp',
    title: 'Chilli Chicken Dry',
    titleTamil: 'சில்லி சிக்கன் டிரை',
    category: 'starters',
    caption: 'Wok-tossed chicken chunks with onions, capsicum, dark soy, and green chilli paste.',
    price: 240,
    badge: 'Wok-Tossed'
  },

  // 4. Coastal Seafood (3)
  {
    id: 'food5',
    filename: 'food5.jpg',
    title: 'Vanjaram (Seer Fish) Tawa Fry',
    titleTamil: 'வஞ்சிரம் மீன் தவா வறுவல்',
    category: 'seafood',
    caption: 'Fresh coastal seer fish steak marinated in Kanyakumari red chilli masala and pan-fried on iron tawa.',
    price: 340,
    badge: 'Fresh Catch'
  },
  {
    id: 'food13',
    filename: 'food13.jpg',
    title: 'Golden Butterfly Prawns Fry',
    titleTamil: 'தங்க மொறுமொறு இறால் வறுவல்',
    category: 'seafood',
    caption: 'Fresh prawns coated in spiced crispy batter and fried golden, served with lemon dip.',
    price: 320,
    badge: 'Coastal Special'
  },
  {
    id: 'food17',
    filename: 'food17.jpg',
    title: 'Kanyakumari Squid & Prawn Roast',
    titleTamil: 'கன்னியாகுமரி கணவா & இறால் ரோஸ்ட்',
    category: 'seafood',
    caption: 'Succulent calamari rings and ocean prawns sauteed in caramelized shallots, tomatoes and coconut oil.',
    price: 350,
    badge: 'Local Delicacy'
  },

  // 5. Coolers & Desserts (3)
  {
    id: 'food3',
    filename: 'food3.jpg',
    title: 'Adipozhi Signature Rose Mojito',
    titleTamil: 'அடிபொழி ரோஸ் மொஜிட்டோ',
    category: 'desserts',
    caption: 'Layered crimson rose syrup with fresh mint leaves, lime juice, chia seeds, and sparkling fizz.',
    price: 130,
    badge: 'Signature'
  },
  {
    id: 'food18',
    filename: 'food18.jpg',
    title: 'Royal Falooda Deluxe',
    titleTamil: 'ராயல் பலூடா ஸ்பெஷல்',
    category: 'desserts',
    caption: 'Chilled condensed rose milk, falooda sev, sweet basil seeds, dry fruits, and strawberry ice cream scoop.',
    price: 150,
    badge: 'Sweet Finish'
  }
];

interface ExperienceGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (item: MenuItem) => void;
  onOpenReservation: () => void;
  lang: 'en' | 'fr';
}

export const ExperienceGalleryModal: React.FC<ExperienceGalleryModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onOpenReservation,
  lang
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  // Video tour timeline: 29 seconds long!
  const totalDuration = 29;

  // Key reel milestones (seconds -> photo)
  const reelScenes = [
    { at: 0, photoId: 'storefront', title: 'Adipozhi Storefront · Opposite Monday Market Bus Stand' },
    { at: 4, photoId: 'premium-interior', title: 'Air-Conditioned Family Booths' },
    { at: 9, photoId: 'food11', title: 'Claypot Dum Biryani Feast' },
    { at: 14, photoId: 'food10', title: 'Charcoal Grilled Tandoori Sizzler' },
    { at: 18, photoId: 'experience-interior', title: 'Rose Banquet & Celebration Hall' },
    { at: 22, photoId: 'food5', title: 'Coastal Vanjaram (Seer Fish) Tawa Fry' },
    { at: 26, photoId: 'food3', title: 'Signature Layered Rose Mojito' },
  ];

  // Current active scene based on video time
  const currentScene = [...reelScenes].reverse().find((s) => currentTime >= s.at) || reelScenes[0];
  const activeReelPhoto = ALL_23_PHOTOS.find((p) => p.id === currentScene.photoId) || ALL_23_PHOTOS[0];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= totalDuration - 0.2) {
          return 0; // loop reel
        }
        return Number((prev + 0.1).toFixed(1));
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  const filteredPhotos = ALL_23_PHOTOS.filter((photo) => {
    if (activeTab === 'all') return true;
    return photo.category === activeTab;
  });

  const handleAddDish = (photo: GalleryPhoto) => {
    if (!onAddToCart || !photo.price) return;
    const fakeItem: MenuItem = {
      id: photo.id,
      name: photo.title,
      
      category: photo.category === 'biryani' ? 'biryani' : photo.category === 'seafood' ? 'seafood' : photo.category === 'desserts' ? 'mocktails' : 'starters',
      price: photo.price,
      description: photo.caption,
      
      image: photo.filename,
      
      tags: [photo.badge || 'Popular'],
      isVeg: photo.category === 'desserts' || photo.id === 'food12'
    };
    onAddToCart(fakeItem);
    setAddedItem(photo.id);
    setTimeout(() => {
      setAddedItem(null);
    }, 1200);
  };

  const formatSec = (sec: number) => {
    const s = Math.floor(sec);
    return `0:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 25 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl bg-[#f8efdc] text-[#1a1a1a] rounded-3xl border border-[#1a1a1a]/20 shadow-2xl overflow-hidden my-4 max-h-[94vh] flex flex-col"
          >
            {/* Top Bar with AI Mode Badge & Close */}
            <div className="p-4 sm:p-6 bg-white border-b border-[#1a1a1a]/15 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#de2b2b] text-[#f8efdc] flex items-center justify-center font-serif font-bold text-xl shadow-md">
                  A
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2
                      className="text-xl sm:text-2xl font-bold text-[#1a1a1a]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {lang === 'en' ? 'Adipozhi Experience Reel & Gallery' : 'அடிபொழி அனுபவம் & புகைப்பட அரங்கம்'}
                    </h2>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open · Monday Market
                    </span>
                  </div>
                  <p className="text-xs text-[#1a1a1a]/70 flex items-center gap-2 mt-0.5">
                    <span className="font-semibold text-amber-700 flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      4.7 (283 Reviews)
                    </span>
                    <span>·</span>
                    <span>₹200–₹1,000</span>
                    <span>·</span>
                    <span>Family-Friendly</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenReservation}
                  className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#de2b2b] hover:bg-[#7c2627] text-[#f8efdc] rounded-full text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Book Table' : 'முன்பதிவு'}</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-[#1a1a1a]/10 text-[#1a1a1a] cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Scrollable Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-8">
              {/* 1. The 0:29 Simulated Video Tour Player */}
              <div className="relative rounded-3xl overflow-hidden bg-black text-white shadow-2xl border-4 border-white/20 aspect-[16/9] sm:aspect-[21/9] max-h-[440px] group">
                {/* Active Scene Photo */}
                <SafeImage
                  src={activeReelPhoto.filename}
                  alt={currentScene.title}
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#f8efdc] font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>0:29 Experience Tour</span>
                    <span className="text-white/50">|</span>
                    <span className="text-amber-300">Thingal Nagar</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                </div>

                {/* Bottom Video Controls & Scrubber */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-white">
                    <div>
                      <span className="font-bold text-base text-amber-300 block">
                        {currentScene.title}
                      </span>
                      <span className="text-[11px] text-white/80">
                        {activeReelPhoto.caption}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-white text-[#de2b2b] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-lg"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => setCurrentTime(0)}
                        className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Scrubber Bar (0:00 to 0:29) */}
                  <div className="space-y-1">
                    <div
                      className="w-full h-2 rounded-full bg-white/30 overflow-hidden cursor-pointer relative"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const pct = clickX / rect.width;
                        setCurrentTime(Number((pct * totalDuration).toFixed(1)));
                      }}
                    >
                      <motion.div
                        className="h-full bg-[#de2b2b]"
                        style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-white/70 font-mono">
                      <span>{formatSec(currentTime)}</span>
                      <span className="text-amber-300 font-bold uppercase tracking-wider font-sans">
                        0:29 Video Reel
                      </span>
                      <span>0:29</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Restaurant AI Profile Card from User Link */}
              <div className="p-6 rounded-3xl bg-white border border-[#1a1a1a]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#de2b2b]/10 text-[#de2b2b] font-bold text-xs">
                      ADIPOZHI FAMILY RESTAURANT
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      4.7 (283 Google Reviews)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-xs">
                      ₹200–₹1,000 · Family-friendly
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1a1a1a]/80 leading-relaxed font-light">
                    {lang === 'en'
                      ? 'Adipozhi Family Restaurant is a popular multi-cuisine family-style eatery located on Thalakulam Road right opposite the Monday Market Bus Stand in Thingal Nagar (near Nagercoil, Kanyakumari district). True to its name ("Adipozhi" means excellent or awesome in Malayalam/local slang), the restaurant has earned an excellent 4.7/5 rating from locals for its generous portions, neat family-friendly ambience, and flavorful non-vegetarian fare.'
                      : 'அடிபொழி பேமிலி ரெஸ்டாரண்ட் திங்கள் நகர் திங்கட்கிழமை சந்தை பேருந்து நிலையம் எதிரில் குளச்சல் - நாகர்கோவில் சாலையில் அமைந்துள்ளது. மலையாளம் மற்றும் தென் திருவிதாங்கூர் வட்டார வழக்கில் "அடிபொழி" என்றால் மிக அற்புதம் / அசத்தல் என்று பொருள். நிறைவான அளவுகள், நேர்த்தியான குடும்ப சூழல் மற்றும் சுவையான அசைவ உணவுகளுக்காக 4.7/5 நற்பெயரை பெற்றுள்ளது.'}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col gap-2 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      const allPhotosBtn = document.getElementById('allPhotosGrid');
                      allPhotosBtn?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-full bg-[#de2b2b] text-[#f8efdc] font-bold text-xs uppercase tracking-wider hover:bg-[#7c2627] transition-colors cursor-pointer text-center"
                  >
                    {lang === 'en' ? 'View All 23 Photos' : '23 புகைப்படங்களையும் காண்க'}
                  </button>
                  <span className="text-[11px] text-center text-[#1a1a1a]/60">
                    Open Now · Monday Market, Tamil Nadu
                  </span>
                </div>
              </div>

              {/* 3. Category Filter Tabs */}
              <div id="allPhotosGrid" className="space-y-6 pt-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1a1a1a]/10 pb-4">
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#1a1a1a]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {lang === 'en' ? 'Photo Gallery Collection (23 Images)' : 'புகைப்பட தொகுப்பு (23 படங்கள்)'}
                    </h3>
                    <p className="text-xs text-[#1a1a1a]/70">
                      {lang === 'en' ? 'Browse all uploaded dishes, seating interiors and signature spaces' : 'உணவுகள் மற்றும் உணவகத்தின் உட்புற காட்சிகள்'}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-full border border-[#1a1a1a]/10 shadow-sm">
                    {[
                      { id: 'all', label: lang === 'en' ? 'All (23)' : 'அனைத்தும் (23)' },
                      { id: 'ambiance', label: lang === 'en' ? 'Spaces & Rose Wall (5)' : 'அரங்குகள் (5)' },
                      { id: 'biryani', label: lang === 'en' ? 'Biryani & Mains (5)' : 'பிரியாணி (5)' },
                      { id: 'starters', label: lang === 'en' ? 'Tandoor & Starters (8)' : 'தந்தூரி & ஸ்டார்ட்டர் (8)' },
                      { id: 'seafood', label: lang === 'en' ? 'Seafood (3)' : 'மீன் வறுவல் (3)' },
                      { id: 'desserts', label: lang === 'en' ? 'Coolers & Drinks (2)' : 'குளிர் பானங்கள் (2)' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          activeTab === tab.id
                            ? 'bg-[#de2b2b] text-[#f8efdc] shadow-sm'
                            : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a] hover:bg-[#1a1a1a]/5'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Complete 23 Photos Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredPhotos.map((photo) => (
                    <motion.div
                      key={photo.id}
                      layout
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl overflow-hidden border border-[#1a1a1a]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                        <SafeImage
                          src={photo.filename}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                        {/* Top Badge */}
                        {photo.badge && (
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#f8efdc] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            <span>{photo.badge}</span>
                          </div>
                        )}

                        {/* Expand Icon */}
                        <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>

                        {/* Price tag */}
                        {photo.price && (
                          <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#de2b2b] text-[#f8efdc] text-xs font-bold font-sans shadow-md">
                            ₹{photo.price}
                          </div>
                        )}
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                        <div>
                          <h4
                            className="font-bold text-base text-[#1a1a1a] group-hover:text-[#de2b2b] transition-colors line-clamp-1"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {lang === 'en' ? photo.title : photo.titleTamil}
                          </h4>
                          <p className="text-xs text-[#1a1a1a]/70 line-clamp-2 mt-1 leading-relaxed">
                            {photo.caption}
                          </p>
                        </div>

                        {photo.price && (
                          <div className="pt-2 border-t border-[#1a1a1a]/5 flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#de2b2b]">
                              {lang === 'en' ? 'Available to order' : 'ஆர்டர் செய்யலாம்'}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddDish(photo);
                              }}
                              className={`p-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                                addedItem === photo.id
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-[#f8efdc] hover:bg-[#de2b2b] hover:text-[#f8efdc] text-[#1a1a1a]'
                              }`}
                              title="Add to online order"
                            >
                              {addedItem === photo.id ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photo Lightbox Popup */}
          <AnimatePresence>
            {selectedPhoto && (
              <div
                className="fixed inset-0 z-60 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
                onClick={() => setSelectedPhoto(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="relative max-w-4xl w-full bg-[#f8efdc] rounded-3xl overflow-hidden shadow-2xl border border-white/20 cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative aspect-[16/10] bg-black">
                    <SafeImage
                      src={selectedPhoto.filename}
                      alt={selectedPhoto.title}
                      className="w-full h-full object-contain"
                    />

                    <button
                      type="button"
                      onClick={() => setSelectedPhoto(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#de2b2b] text-[#f8efdc] text-[10px] font-bold uppercase tracking-wider">
                          {selectedPhoto.badge || 'Adipozhi'}
                        </span>
                        {selectedPhoto.price && (
                          <span className="font-bold text-[#de2b2b] text-base font-sans">
                            ₹{selectedPhoto.price}
                          </span>
                        )}
                      </div>
                      <h3
                        className="text-2xl font-bold text-[#1a1a1a] mt-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {lang === 'en' ? selectedPhoto.title : selectedPhoto.titleTamil}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1a1a1a]/70 mt-1 max-w-xl">
                        {selectedPhoto.caption}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {selectedPhoto.price && onAddToCart && (
                        <button
                          type="button"
                          onClick={() => handleAddDish(selectedPhoto)}
                          className="px-5 py-2.5 rounded-full bg-[#de2b2b] text-[#f8efdc] hover:bg-[#7c2627] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <Plus className="w-4 h-4" />
                          <span>{lang === 'en' ? 'Add to Order' : 'ஆர்டரில் சேர்க்க'}</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={onOpenReservation}
                        className="px-5 py-2.5 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] hover:bg-[#1a1a1a]/5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        {lang === 'en' ? 'Book Table' : 'முன்பதிவு'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};

