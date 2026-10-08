export interface PriceVariant {
  label: string;
  price: number | string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceDisplay?: string;
  priceVariants?: PriceVariant[];
  description: string;
  image?: string;
  tags?: string[];
  isVeg?: boolean;
  portion?: string;
  specialOffer?: string;
  isParcelOnly?: boolean;
  isSeasonalPrice?: boolean;
  subCategory?: 'Veg' | 'Non-Veg';
}

export const RESTAURANT_INFO = {
  name: 'ADIPOZHI FAMILY RESTAURANT',
  nameTamil: 'அடிப்பொழி பேமிலி ரெஸ்டாரண்ட்',
  tagline: 'Comfortable restaurant serving tasty biryani and diverse dishes.',
  rating: 4.7,
  reviewsCount: 284,
  address: 'Bus stand Entrance Arch, Monday Market, Tamil Nadu 629802',
  phone: '095851 54254',
  phoneRaw: '+919585154254',
  hours: 'Open · Closes 11 pm',
  getThere: '7 mins',
  currency: '₹',
  googleMapsUrl: 'https://maps.google.com/?q=Adipozhi+Family+Restaurant+Bus+stand+Entrance+Arch+Monday Market+Tamil+Nadu+629802'
};

export const BANNER_MESSAGES = [
  {
    icon: 'star',
    text: '⭐ 4.7 Rated on Google · 284+ Verified Reviews',
    sub: 'Bus stand Entrance Arch, Monday Market (7 mins away)'
  },
  {
    icon: 'biryani',
    text: '🍗 Full Bucket Biryani: FREE 1/2 KG Chicken 65!',
    sub: 'Half Bucket gets FREE 1/4 KG Chicken 65 (Parcel Only)'
  },
  {
    icon: 'flame',
    text: '🔥 Arabian Al-Faham, Peri Peri & Bun Parotta Daily',
    sub: 'Hot charcoal grills & juicy tikkas served fresh'
  },
  {
    icon: 'phone',
    text: '📞 Call for Takeaway Orders & Booking',
    sub: 'Open Daily until 11:00 PM · AC Family Seating'
  }
];

export interface DailyPleasure {
  id: string;
  title: string;
  titleFr: string;
  headline: string;
  headlineFr: string;
  schedule: string;
  scheduleFr: string;
  image: string;
  color: string;
  accent: string;
}

export const DAILY_PLEASURES: DailyPleasure[] = [
  {
    id: 'dum-biryani',
    title: 'Adipozhi Dum Biryani',
    titleFr: 'Adipozhi Dum Biryani',
    headline: 'Steaming seeraga & basmati dum biryani layered with succulent tender meat and aromatic ghee.',
    headlineFr: 'Biryani cuit à l’étouffée avec viandes tendres et épices traditionnelles.',
    schedule: 'Available from 12:00 PM · Dine-in & Parcel Buckets',
    scheduleFr: 'Dès midi · Sur place et seaux à emporter',
    image: '/images/food/food11.jpg',
    color: '#8e1b1b',
    accent: '#f8efdc'
  },
  {
    id: 'bun-parotta',
    title: 'Bun Parotta & Kothu',
    titleFr: 'Bun Parotta & Kothu',
    headline: 'Puffed golden bun parottas and fiery chicken/mutton/beef kothu parotta beaten on hot tawa.',
    headlineFr: 'Parottas dorés et croustillants battus sur tawa avec salna riche.',
    schedule: 'Daily from 5:00 PM to 11:00 PM',
    scheduleFr: 'Tous les jours de 17h à 23h',
    image: '/images/food/food17.jpg',
    color: '#9e2a2b',
    accent: '#f8efdc'
  },
  {
    id: 'arabian-alfaham',
    title: 'Arabian Al-Faham & Charcoal Grill',
    titleFr: 'Al-Faham & Grillades Arabes',
    headline: 'Authentic Peri Peri, Pepper & Garlic Al-Faham grilled over red-hot coals with garlic dip.',
    headlineFr: 'Poulet mariné grillé sur charbon de bois avec sauce à l’ail.',
    schedule: 'Evenings 5:30 PM to 11:00 PM',
    scheduleFr: 'Tous les soirs dès 17h30',
    image: '/images/food/food10.jpg',
    color: '#7b1818',
    accent: '#f8efdc'
  },
  {
    id: 'chettinadu-masala',
    title: 'Chettinadu Spicy Masalas',
    titleFr: 'Masalas Épicés du Chettinadu',
    headline: 'Stone-ground kalpaasi, Tellicherry black pepper, shallots, and tender country chicken (Naatukozhi).',
    headlineFr: 'Currys authentiques aux épices fraîches pilées et poulet fermier.',
    schedule: 'Lunch & Dinner · Rich Spicy Gravies',
    scheduleFr: 'Midi et soir avec riz ou parotta',
    image: '/images/food/food7.jpg',
    color: '#a02e1c',
    accent: '#f8efdc'
  },
  {
    id: 'kari-dosa',
    title: 'Madurai Style Kari Dosa & Ghee Roast',
    titleFr: 'Kari Dosa & Ghee Roast',
    headline: 'Thick crispy dosa crowned with spicy mutton, chicken, or beef minced fry and seasoned egg.',
    headlineFr: 'Dosa croustillante garnie d’agneau, poulet ou bœuf aux épices.',
    schedule: 'Morning 7:30 AM & Evening 5:00 PM onwards',
    scheduleFr: 'Matin et soir',
    image: '/images/food/food12.jpg',
    color: '#8b1e1e',
    accent: '#f8efdc'
  },
  {
    id: 'mojitos-fresh-juices',
    title: 'Blue Curaçao & Fresh Fruit Mojitos',
    titleFr: 'Mojitos & Jus Frais',
    headline: 'Sparkling Blue Curaçao, Kiwi, Green Apple, Watermelon, and chilled Lemon Mint refreshers.',
    headlineFr: 'Cocktails rafraîchissants à la menthe fraîche, citron et fruits.',
    schedule: 'Chilled all day · Perfect companion for spicy feast',
    scheduleFr: 'Servi toute la journée',
    image: '/images/food/food9.jpg',
    color: '#1a5b6e',
    accent: '#f8efdc'
  }
];

export interface AmbianceSpace {
  id: string;
  name: string;
  nameFr: string;
  tagline: string;
  taglineFr: string;
  description: string;
  descriptionFr: string;
  image: string;
}

export const AMBIANCE_SPACES: AmbianceSpace[] = [
  {
    id: 'ac-family-dining',
    name: 'AC Family Dining Hall',
    nameFr: 'Salle Familiale Climatisée',
    tagline: 'Cool, spacious, and comfortable dining tailored for families and groups.',
    taglineFr: 'Espace climatisé confortable pour réunions familiales.',
    description: 'Designed with comfortable plush seating, ambient warm lighting, and prompt table service. Ideal for family get-togethers, weekend celebrations, and enjoying biryanis in air-conditioned ease.',
    descriptionFr: 'Banquettes spacieuses et confortables avec service attentionné pour savourer vos biryanis en toute tranquillité.',
    image: '/images/gallery/interior-original.png'
  },
  {
    id: 'live-grill-counter',
    name: 'Live Arabian Charcoal Grill',
    nameFr: 'Grillades Arabes en Direct',
    tagline: 'Sizzling skewers, smoky Al-Faham & tandoori straight off the charcoal.',
    taglineFr: 'Grillades Al-Faham et tandoori fumantes préparées sous vos yeux.',
    description: 'Watch our grill masters prepare fragrant Peri Peri Al-Faham, Chicken Tikkas, and spicy Seekh over glowing red-hot coals. The tempting aroma that defines evenings at Adipozhi.',
    descriptionFr: 'Découvrez la cuisson au charbon de bois de nos poulets marinés et brochettes tikkas parfumées.',
    image: '/images/food/food10.jpg'
  },
  {
    id: 'express-parcel-counter',
    name: 'Express Parcel & Family Pack Counter',
    nameFr: 'Comptoir À Emporter & Packs Famille',
    tagline: 'Dedicated hot-pack packaging for our famous Half & Full Bucket Biriyanis.',
    taglineFr: 'Service rapide de commandes pour emporter et seaux de biryani.',
    description: 'Rapid hot packing for your favorite dishes. Every Half Bucket Biryani comes with 1/4 KG Chicken 65 FREE, and Full Bucket gets 1/2 KG Chicken 65 FREE. Airtight and ready for your home feasts.',
    descriptionFr: 'Emballages chauds pour nos grands seaux de biryani avec poulet 65 offert, prêts pour vos rassemblements à la maison.',
    image: '/images/gallery/interior-booths.jpg'
  }
];

export const ATMOSPHERES = AMBIANCE_SPACES;
export type Atmosphere = AmbianceSpace;

export const SCHEDULE_DATA = [
  {
    day: 'Monday',
    dayFr: 'Lundi',
    dining: '11:00 AM to 11:00 PM',
    bar: 'Biryani from 12:00 PM',
    breakfast: 'Biryani from 12:00 PM',
    happyHour: 'Bun Parotta & Grill from 5:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM'
  },
  {
    day: 'Tuesday',
    dayFr: 'Mardi',
    dining: '11:00 AM to 11:00 PM',
    bar: 'Biryani from 12:00 PM',
    breakfast: 'Biryani from 12:00 PM',
    happyHour: 'Bun Parotta & Grill from 5:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM'
  },
  {
    day: 'Wednesday',
    dayFr: 'Mercredi',
    dining: '11:00 AM to 11:00 PM',
    bar: 'Biryani from 12:00 PM',
    breakfast: 'Biryani from 12:00 PM',
    happyHour: 'Bun Parotta & Grill from 5:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM'
  },
  {
    day: 'Thursday',
    dayFr: 'Jeudi',
    dining: '11:00 AM to 11:00 PM',
    bar: 'Biryani from 12:00 PM',
    breakfast: 'Biryani from 12:00 PM',
    happyHour: 'Bun Parotta & Grill from 5:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM'
  },
  {
    day: 'Friday',
    dayFr: 'Vendredi',
    dining: '11:00 AM to 11:00 PM',
    bar: 'Special Friday Biryani Feast',
    breakfast: 'Special Friday Biryani from 11:30 AM',
    happyHour: 'Full Arabian Grills from 5:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM'
  },
  {
    day: 'Saturday',
    dayFr: 'Samedi',
    dining: '11:00 AM to 11:00 PM',
    bar: 'Family Biryani Buckets All Day',
    breakfast: 'Weekend Feast from 11:30 AM',
    happyHour: 'Full Arabian Grills from 5:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM'
  },
  {
    day: 'Sunday',
    dayFr: 'Dimanche',
    dining: '11:00 AM to 11:00 PM',
    bar: 'Family Weekend Biryani & Grills',
    breakfast: 'Family Biryani & Grills All Day',
    happyHour: 'Vaazhai Ilai Parotta from 5:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM'
  }
];

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes (21 Categories)' },
  { id: 'soups', name: '1. Soups' },
  { id: 'egg-special', name: '2. Egg Special' },
  { id: 'veg-starters', name: '3. Veg Starters' },
  { id: 'chicken-starters', name: '4. Non-Veg Starters — Chicken' },
  { id: 'mutton-starters', name: '5. Non-Veg Starters — Mutton' },
  { id: 'beef-starters', name: '6. Non-Veg Starters — Beef' },
  { id: 'seafood-starters', name: '7. Non-Veg Starters — Seafoods' },
  { id: 'arabian-starters', name: '8. Arabian Starters' },
  { id: 'arabian-spicy', name: "9. Arabian Spicy’s" },
  { id: 'pulaos', name: '10. Pulaos' },
  { id: 'biriyanis', name: '11. Biriyani’s' },
  { id: 'family-pack', name: '12. Family Pack — Only Parcel' },
  { id: 'chettinadu', name: '13. Chettinadu Masalas' },
  { id: 'indian-gravy', name: '14. Indian Gravy & Masala' },
  { id: 'chinese-rice-noodles', name: '15. Chinese Rice / Noodles' },
  { id: 'indian-breads', name: '16. Indian Breads' },
  { id: 'dosa-varieties', name: '17. Dosa Varieties' },
  { id: 'parotta-varieties', name: '18. Parotta Varieties' },
  { id: 'fresh-juice', name: '19. Fresh Juice' },
  { id: 'mojitos', name: '20. Mojito' },
  { id: 'ice-creams', name: '21. Ice Creams' }
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. SOUPS — Veg
  {
    id: 'soup-veg-clear',
    name: 'Veg Clear Soup',
    category: 'soups',
    subCategory: 'Veg',
    price: 60,
    description: 'Delicate light vegetable broth simmered with chopped carrots, beans, and fresh herbs.',
    tags: ['Vegetarian', 'Healthy'],
    isVeg: true
  },
  {
    id: 'soup-hot-sour-veg',
    name: 'Hot & Sour Veg Soup',
    category: 'soups',
    subCategory: 'Veg',
    price: 80,
    description: 'Tangy and spicy thick vegetable soup with shredded cabbage, carrots, and chilli-vinegar kick.',
    image: '/images/food/food16.webp',
    tags: ['Vegetarian', 'Spicy'],
    isVeg: true
  },
  {
    id: 'soup-sweet-corn-veg',
    name: 'Sweet Corn Veg Soup',
    category: 'soups',
    subCategory: 'Veg',
    price: 80,
    description: 'Creamy golden sweet corn kernels simmered with tender garden vegetables and white pepper.',
    tags: ['Vegetarian'],
    isVeg: true
  },

  // 1. SOUPS — Non-Veg
  {
    id: 'soup-hot-sour-chicken',
    name: 'Hot & Sour Chicken Soup',
    category: 'soups',
    subCategory: 'Non-Veg',
    price: 100,
    description: 'Shredded chicken and egg ribbons in a rich, peppery, dark spicy broth.',
    image: '/images/food/food16.webp',
    tags: ['Popular', 'Spicy'],
    isVeg: false
  },
  {
    id: 'soup-sweet-corn-chicken',
    name: 'Sweet Corn Chicken Soup',
    category: 'soups',
    subCategory: 'Non-Veg',
    price: 100,
    description: 'Silky sweet corn soup with tender chicken shreds and cracked pepper.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'soup-chicken-manchow',
    name: 'Chicken Manchow Soup',
    category: 'soups',
    subCategory: 'Non-Veg',
    price: 140,
    description: 'Spicy Indo-Chinese chicken soup topped with crispy golden fried noodles and fresh coriander.',
    tags: ['Chef Pick', 'Spicy'],
    isVeg: false
  },

  // 2. EGG SPECIAL
  {
    id: 'egg-boiled',
    name: 'Boiled Egg',
    category: 'egg-special',
    price: 15,
    description: 'Fresh farm egg perfectly hard-boiled, served with black pepper and salt.',
    tags: ['Healthy'],
    isVeg: false
  },
  {
    id: 'egg-omelette',
    name: 'Omelette',
    category: 'egg-special',
    price: 25,
    description: 'Fluffy golden omelette beaten with finely chopped onions, green chillies, and curry leaves.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'egg-podi-mass',
    name: 'Podi Mass',
    category: 'egg-special',
    price: 50,
    description: 'Authentic Tamil Nadu style spicy egg scramble roasted on tawa with onions, curry leaves, and crushed pepper.',
    image: '/images/food/food18.jpg',
    tags: ['Chef Pick', 'Popular'],
    isVeg: false
  },
  {
    id: 'egg-kalakki',
    name: 'Kalakki',
    category: 'egg-special',
    price: 20,
    description: 'Famous Madurai-style soft, runny, gravy-infused egg pocket prepared on a sizzling hot tawa.',
    tags: ['Specialty', 'Popular'],
    isVeg: false
  },
  {
    id: 'egg-mass',
    name: 'Egg Mass',
    category: 'egg-special',
    price: 50,
    description: 'Juicy, aromatic egg scramble tossed in secret Adipozhi salna gravy and roasted spices.',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'egg-half-boil',
    name: 'Half Boil',
    category: 'egg-special',
    price: 20,
    description: 'Sunny-side up fried egg with a luscious runny yolk dusted with freshly ground Tellicherry pepper.',
    tags: [],
    isVeg: false
  },
  {
    id: 'egg-full-boil',
    name: 'Full Boil',
    category: 'egg-special',
    price: 20,
    description: 'Both sides gently seared fried egg with fully cooked yolk and crisp edges.',
    tags: [],
    isVeg: false
  },

  // 3. VEG STARTERS
  {
    id: 'veg-gobi-65',
    name: 'Gobi 65',
    category: 'veg-starters',
    price: 130,
    description: 'Crisp cauliflower florets marinated in southern red chilli spices, ginger-garlic, and flash-fried with curry leaves.',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-mushroom-65',
    name: 'Mushroom 65',
    category: 'veg-starters',
    price: 140,
    description: 'Fresh juicy button mushrooms tossed in spiced batter and fried to crunchy perfection.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-paneer-65',
    name: 'Paneer 65',
    category: 'veg-starters',
    price: 170,
    description: 'Soft malai paneer cubes infused with spiced yoghurt batter, roasted curry leaves, and green chillies.',
    image: '/images/food/food17.jpg',
    tags: ['Chef Pick', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-gobi-pepper-fry',
    name: 'Gobi Pepper Fry',
    category: 'veg-starters',
    price: 160,
    description: 'Wok-tossed cauliflower with crushed black Tellicherry pepper, onions, and curry leaves.',
    tags: ['Spicy', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-gobi-manjurian-dry',
    name: 'Gobi Manjurian Dry',
    category: 'veg-starters',
    price: 160,
    description: 'Crispy cauliflower tossed in Indo-Chinese dark soy, garlic, spring onions, and green chillies.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-mushroom-pepper-fry',
    name: 'Mushroom Pepper Fry',
    category: 'veg-starters',
    price: 170,
    description: 'Succulent mushrooms sautéed with freshly cracked black pepper and caramelized shallots.',
    tags: ['Spicy', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-french-fries',
    name: 'French Fries',
    category: 'veg-starters',
    price: 80,
    description: 'Crispy salted golden potato fries served with tomato ketchup.',
    tags: ['Vegetarian', 'Kids Favorite'],
    isVeg: true
  },

  // 4. NON-VEG STARTERS — CHICKEN
  {
    id: 'chk-65-bone-boneless',
    name: 'Chicken 65 B / B.L',
    category: 'chicken-starters',
    price: 150,
    priceDisplay: '₹150 / ₹190',
    priceVariants: [
      { label: 'With Bone (B)', price: 150 },
      { label: 'Boneless (B.L)', price: 190 }
    ],
    description: 'Legendary deep-fried chicken marinated in crushed red chillies, garlic, ginger, and curry leaves.',
    image: '/images/food/food8.jpg',
    tags: ['Bestseller', 'Popular'],
    isVeg: false
  },
  {
    id: 'chk-kaadai-65',
    name: 'Kaadai 65',
    category: 'chicken-starters',
    price: 160,
    description: 'Tender whole quail marinated in authentic southern masala and fried until crisp and juicy.',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'chk-lollipop',
    name: 'Chicken Lollipop',
    category: 'chicken-starters',
    price: 200,
    description: 'Succulent chicken winglets frenched, seasoned in spicy batter, and fried with hot garlic sauce.',
    tags: ['Kids Favorite', 'Popular'],
    isVeg: false
  },
  {
    id: 'chk-chukka',
    name: 'Chicken Chukka',
    category: 'chicken-starters',
    price: 170,
    description: 'Dry roasted chicken with shallots, curry leaves, and freshly hand-pounded Chettinadu spices.',
    tags: ['Chef Pick', 'Spicy'],
    isVeg: false
  },
  {
    id: 'chk-kaadai-chukka',
    name: 'Kaadai Chukka',
    category: 'chicken-starters',
    price: 185,
    description: 'Country quail tossed on high flame with roasted coconut, black pepper, and small onions.',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'chk-nattukozhi-chukka',
    name: 'Nattukozhi Chukka',
    category: 'chicken-starters',
    price: 210,
    description: 'Authentic country chicken roasted dry with native spices, black pepper, and gingelly oil.',
    tags: ['Authentic Country', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'chk-chilly-dry',
    name: 'Chilly Chicken Dry',
    category: 'chicken-starters',
    price: 230,
    description: 'Indo-Chinese style crispy chicken pieces wok-tossed with capsicum, onions, and green chillies.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'chk-manjurian-dry',
    name: 'Chicken Manjurian Dry',
    category: 'chicken-starters',
    price: 230,
    description: 'Crispy fried chicken cubes tossed in ginger-garlic sauce, dark soy, and spring onions.',
    tags: [],
    isVeg: false
  },
  {
    id: 'chk-garlic-dry',
    name: 'Garlic Chicken Dry',
    category: 'chicken-starters',
    price: 240,
    description: 'Aromatic chicken chunks sautéed with roasted golden garlic cloves and cracked pepper.',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'chk-ginger-dry',
    name: 'Ginger Chicken Dry',
    category: 'chicken-starters',
    price: 240,
    description: 'Tender chicken tossed with julienned fresh ginger, spring onions, and a hint of sweetness.',
    tags: [],
    isVeg: false
  },
  {
    id: 'chk-dragon',
    name: 'Dragon Chicken',
    category: 'chicken-starters',
    price: 250,
    description: 'Crispy chicken strips tossed in fiery dragon sauce with cashew nuts, red chillies, and bell peppers.',
    image: '/images/food/food9.jpg',
    tags: ['Spicy', 'Popular'],
    isVeg: false
  },
  {
    id: 'chk-lemon',
    name: 'Lemon Chicken',
    category: 'chicken-starters',
    price: 250,
    description: 'Zesty crispy chicken glazed with freshly squeezed lemon juice, garlic, and fresh green herbs.',
    tags: [],
    isVeg: false
  },
  {
    id: 'chk-honey',
    name: 'Honey Chicken',
    category: 'chicken-starters',
    price: 260,
    description: 'Golden fried chicken bites glazed in pure honey, roasted sesame seeds, and light chilli glaze.',
    tags: ['Specialty'],
    isVeg: false
  },

  // 5. NON-VEG STARTERS — MUTTON
  {
    id: 'mut-chukka',
    name: 'Mutton Chukka',
    category: 'mutton-starters',
    price: 290,
    description: 'Boneless tender goat meat slow-roasted on tawa with whole spices, shallots, and cracked pepper.',
    image: '/images/food/food10.jpg',
    tags: ['Chef Pick', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'mut-varutha-kari',
    name: 'Mutton Varutha Kari',
    category: 'mutton-starters',
    price: 290,
    description: 'Deep-fried marinated mutton cubes tossed in roasted coconut and southern aromatic masala.',
    tags: ['Authentic Tamil'],
    isVeg: false
  },
  {
    id: 'mut-kola-urundai',
    name: 'Mutton Kola Urundai — 2 Pcs',
    category: 'mutton-starters',
    price: 80,
    portion: '2 Pcs',
    description: 'Famous Chettinadu minced mutton spiced meatballs deep-fried until crisp outside and melt-in-mouth inside.',
    tags: ['Chettinadu Heritage', 'Popular'],
    isVeg: false
  },

  // 6. NON-VEG STARTERS — BEEF
  {
    id: 'beef-chukka',
    name: 'Beef Chukka',
    category: 'beef-starters',
    price: 220,
    description: 'Tender beef chunks slow-roasted on the tawa with coconut slices, curry leaves, and black pepper.',
    image: '/images/food/food11.jpg',
    tags: ['Bestseller', 'Spicy'],
    isVeg: false
  },
  {
    id: 'beef-tawa-fry',
    name: 'Beef Tawa Fry',
    category: 'beef-starters',
    price: 210,
    description: 'Pan-seared spiced beef tossed with caramelized onions, green chillies, and aromatic salna reduction.',
    tags: ['Popular'],
    isVeg: false
  },

  // 7. NON-VEG STARTERS — SEAFOODS
  {
    id: 'sea-crispy-prawn',
    name: 'Crispy Prawn',
    category: 'seafood-starters',
    price: 250,
    description: 'Fresh coastal prawns coated in crunchy seasoned batter and fried golden with tartar and spicy dips.',
    image: '/images/food/food16.webp',
    tags: ['Seafood Special'],
    isVeg: false
  },
  {
    id: 'sea-prawn-pepper-fry',
    name: 'Prawn Pepper Fry',
    category: 'seafood-starters',
    price: 260,
    description: 'Plump juicy prawns wok-roasted with freshly cracked black pepper, onions, and curry leaves.',
    tags: ['Chef Pick', 'Spicy'],
    isVeg: false
  },
  {
    id: 'sea-fish-finger',
    name: 'Fish Finger',
    category: 'seafood-starters',
    price: 210,
    description: 'Crispy breaded boneless fish fillets served with lime wedges and creamy dipping sauce.',
    tags: ['Kids Favorite'],
    isVeg: false
  },
  {
    id: 'sea-crab-lollipop',
    name: 'Crab Lollipop',
    category: 'seafood-starters',
    price: 230,
    description: 'Minced fresh sea crab meat molded on claws with herbs, spices, and fried till crunchy.',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'sea-nethili-fry',
    name: 'Nethili Fish Fry',
    category: 'seafood-starters',
    price: 160,
    description: 'Crisp whole anchovy fish marinated in spicy coastal masala and flash-fried with curry leaves.',
    tags: ['Bestseller', 'Authentic Coastal'],
    isVeg: false
  },
  {
    id: 'sea-kulambu-meen',
    name: 'Kulambu Meen',
    category: 'seafood-starters',
    price: 0,
    priceDisplay: 'Seasonal Price',
    isSeasonalPrice: true,
    description: 'Fresh catch of the day cooked in tangy tamarind, garlic, and coconut fish curry.',
    tags: ['Seasonal Catch', 'Traditional'],
    isVeg: false
  },
  {
    id: 'sea-fish-tawa-fry',
    name: 'Fish Tawa Fry',
    category: 'seafood-starters',
    price: 0,
    priceDisplay: 'Seasonal Price',
    isSeasonalPrice: true,
    description: 'Fresh sliced sea fish steak coated in red masala and pan-seared over a smoking tawa.',
    tags: ['Seasonal Catch', 'Popular'],
    isVeg: false
  },
  {
    id: 'sea-fish-fry',
    name: 'Fish Fry',
    category: 'seafood-starters',
    price: 0,
    priceDisplay: 'Seasonal Price',
    isSeasonalPrice: true,
    description: 'Whole or sliced fresh marine fish crisp-fried with spicy marinade and lemon.',
    tags: ['Seasonal Catch'],
    isVeg: false
  },

  // 8. ARABIAN STARTERS
  {
    id: 'ara-grill-q-h-f',
    name: 'Grill Q / H / F',
    category: 'arabian-starters',
    price: 140,
    priceDisplay: '₹140 / ₹250 / ₹480',
    priceVariants: [
      { label: 'Quarter (Q)', price: 140 },
      { label: 'Half (H)', price: 250 },
      { label: 'Full (F)', price: 480 }
    ],
    description: 'Signature charcoal-grilled chicken infused with Arabian herbs, served with kuboos and garlic toum.',
    image: '/images/food/food12.jpg',
    tags: ['Bestseller', 'Charcoal Grill'],
    isVeg: false
  },
  {
    id: 'ara-grill-pepper-h-f',
    name: 'Grill Pepper H / F',
    category: 'arabian-starters',
    price: 280,
    priceDisplay: '₹280 / ₹540',
    priceVariants: [
      { label: 'Half (H)', price: 280 },
      { label: 'Full (F)', price: 540 }
    ],
    description: 'Charcoal-grilled chicken coated with aromatic black pepper rub and spicy garlic glaze.',
    tags: ['Spicy', 'Charcoal Grill'],
    isVeg: false
  },
  {
    id: 'ara-alfaham-h-f',
    name: 'Al-Faham H / F',
    category: 'arabian-starters',
    price: 260,
    priceDisplay: '₹260 / ₹500',
    priceVariants: [
      { label: 'Half (H)', price: 260 },
      { label: 'Full (F)', price: 500 }
    ],
    description: 'Middle Eastern coal-smoked Al-Faham chicken marinated in Arabic spice blend, lemon, and olive oil.',
    image: '/images/food/food15.webp',
    tags: ['Authentic Arabian', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'ara-peri-peri-alfaham-h-f',
    name: 'Peri Peri Al-Faham H / F',
    category: 'arabian-starters',
    price: 280,
    priceDisplay: '₹280 / ₹540',
    priceVariants: [
      { label: 'Half (H)', price: 280 },
      { label: 'Full (F)', price: 540 }
    ],
    description: 'Juicy Al-Faham chicken drenched in fiery African bird’s eye peri peri sauce and smoked over coals.',
    tags: ['Spicy', 'Crowd Favorite'],
    isVeg: false
  },
  {
    id: 'ara-tandoori-q-h-f',
    name: 'Tandoori Q / H / F',
    category: 'arabian-starters',
    price: 140,
    priceDisplay: '₹140 / ₹250 / ₹480',
    priceVariants: [
      { label: 'Quarter (Q)', price: 140 },
      { label: 'Half (H)', price: 250 },
      { label: 'Full (F)', price: 480 }
    ],
    description: 'Classic clay tandoor roasted chicken in hung curd, Kashmiri chilli, and tandoori garam masala.',
    tags: ['Clay Oven', 'Popular'],
    isVeg: false
  },
  {
    id: 'ara-bbq-q-h-f',
    name: 'BBQ Q / H / F',
    category: 'arabian-starters',
    price: 160,
    priceDisplay: '₹160 / ₹280 / ₹530',
    priceVariants: [
      { label: 'Quarter (Q)', price: 160 },
      { label: 'Half (H)', price: 280 },
      { label: 'Full (F)', price: 530 }
    ],
    description: 'Smoky barbecued chicken glazed with sweet and spicy barbecue glaze over live charcoal.',
    tags: ['Smoky BBQ'],
    isVeg: false
  },
  {
    id: 'ara-bbq-pepper-q-h-f',
    name: 'BBQ Pepper Q / H / F',
    category: 'arabian-starters',
    price: 180,
    priceDisplay: '₹180 / ₹300 / ₹550',
    priceVariants: [
      { label: 'Quarter (Q)', price: 180 },
      { label: 'Half (H)', price: 300 },
      { label: 'Full (F)', price: 550 }
    ],
    description: 'Spicy pepper-infused barbecue chicken with caramelized crust and deep smoky flavor.',
    tags: ['Spicy BBQ'],
    isVeg: false
  },
  {
    id: 'ara-fish-bbq',
    name: 'Fish BBQ',
    category: 'arabian-starters',
    price: 0,
    priceDisplay: 'Seasonal Price',
    isSeasonalPrice: true,
    description: 'Fresh whole fish coated in Arabic herbs, slow-barbecued over coals with mint chutney.',
    tags: ['Seasonal Price', 'Specialty'],
    isVeg: false
  },

  // 9. ARABIAN SPICY’S (TIKKAS & KABABS)
  {
    id: 'tikka-paneer',
    name: 'Paneer Tikka',
    category: 'arabian-spicy',
    price: 240,
    description: 'Skewered cottage cheese cubes and bell peppers roasted in tandoor with aromatic spice rub.',
    tags: ['Vegetarian', 'Popular'],
    isVeg: true
  },
  {
    id: 'tikka-chicken',
    name: 'Chicken Tikka',
    category: 'arabian-spicy',
    price: 220,
    description: 'Boneless tender chicken morsels marinated in spiced yoghurt and chargrilled on iron skewers.',
    tags: ['Bestseller'],
    isVeg: false
  },
  {
    id: 'tikka-hariyali',
    name: 'Hariyali Kabab',
    category: 'arabian-spicy',
    price: 260,
    description: 'Chicken pieces marinated in mint, coriander, spinach, and green chillies, cooked in tandoor.',
    tags: ['Fresh Herbs', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'tikka-kalimirich',
    name: 'Kalimirich Tikka',
    category: 'arabian-spicy',
    price: 260,
    description: 'Creamy chicken tikka rubbed with freshly ground black Tellicherry pepper and cashews.',
    tags: ['Peppery', 'Specialty'],
    isVeg: false
  },
  {
    id: 'tikka-reshmi',
    name: 'Reshmi Kabab',
    category: 'arabian-spicy',
    price: 270,
    description: 'Silky smooth chicken kababs marinated with clotted cream, cashew paste, and light mace.',
    tags: ['Melt in Mouth'],
    isVeg: false
  },
  {
    id: 'tikka-tangri',
    name: 'Tangri Kabab',
    category: 'arabian-spicy',
    price: 270,
    description: 'Succulent chicken drumsticks stuffed with spiced mince and chargrilled in the clay oven.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'tikka-malai',
    name: 'Malai Chicken Tikka',
    category: 'arabian-spicy',
    price: 270,
    description: 'Mild and royal chicken tikka infused with fresh malai, cheese, cardamom, and white pepper.',
    tags: ['Mild & Creamy'],
    isVeg: false
  },
  {
    id: 'tikka-acharya',
    name: 'Acharya Chicken Tikka',
    category: 'arabian-spicy',
    price: 270,
    description: 'Tangy, pickled chicken tikka flavored with mustard, fennel seeds, and mango pickle glaze.',
    tags: ['Tangy Spicy'],
    isVeg: false
  },

  // 10. PULAOS
  {
    id: 'pulao-veg',
    name: 'Veg Pulao',
    category: 'pulaos',
    price: 160,
    description: 'Fragrant basmati rice gently cooked with garden vegetables, ghee, and whole spices.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'pulao-mushroom',
    name: 'Mushroom Pulao',
    category: 'pulaos',
    price: 200,
    description: 'Savory button mushrooms tossed with seasoned basmati rice and caramelized onions.',
    tags: ['Vegetarian', 'Popular'],
    isVeg: true
  },
  {
    id: 'pulao-chicken',
    name: 'Chicken Pulao',
    category: 'pulaos',
    price: 220,
    description: 'Tender chicken pieces cooked gently with long-grain basmati and mild whole spices.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'pulao-mutton',
    name: 'Mutton Pulao',
    category: 'pulaos',
    price: 260,
    description: 'Rich basmati rice infused with tender goat meat stock, saffron, and fried onions.',
    tags: ['Chef Pick'],
    isVeg: false
  },

  // 11. BIRIYANI’S
  {
    id: 'briyani-egg',
    name: 'Egg Biriyani',
    category: 'biriyanis',
    price: 160,
    description: 'Aromatic dum biryani rice served with two seasoned hard-boiled eggs and raita & salna.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'briyani-chicken-dum',
    name: 'Chicken Dum Briyani',
    category: 'biriyanis',
    price: 200,
    description: 'Our crowned signature! Fragrant seeraga samba & basmati dum biryani with succulent chicken, egg, brinjal salna, and onion raita.',
    tags: ['#1 Bestseller', 'Signature'],
    isVeg: false
  },
  {
    id: 'briyani-naatukozhi',
    name: 'Naatukozhi Briyani',
    category: 'biriyanis',
    price: 250,
    description: 'Authentic country chicken dum biryani cooked with traditional spices and country ghee.',
    tags: ['Country Chicken', 'Specialty'],
    isVeg: false
  },
  {
    id: 'briyani-kaadai',
    name: 'Kaadai Briyani',
    category: 'biriyanis',
    price: 250,
    description: 'Whole quail dum biryani bursting with rich southern flavors and fragrant rice.',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'briyani-chicken-65',
    name: 'Chicken 65 Briyani',
    category: 'biriyanis',
    price: 230,
    description: 'Dum biryani rice topped with freshly fried spicy Chicken 65 pieces and hard-boiled egg.',
    tags: ['Popular', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'briyani-beef',
    name: 'Beef Biriyani',
    category: 'biriyanis',
    price: 240,
    description: 'Melt-in-mouth beef chunks slow-cooked in handi dum biryani with deep aromatic gravy.',
    tags: ['Bestseller'],
    isVeg: false
  },
  {
    id: 'briyani-mutton-dum',
    name: 'Mutton Dum Briyani',
    category: 'biriyanis',
    price: 290,
    description: 'Tender mutton cooked on dum with aged basmati, saffron, mint, and pure ghee.',
    tags: ['Chef Pick', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'briyani-plain',
    name: 'Plain Briyani (Kuska)',
    category: 'biriyanis',
    price: 130,
    description: 'Rich, flavorful dum biryani rice served with raita and salna.',
    tags: ['Value Choice'],
    isVeg: false
  },

  // 12. FAMILY PACK — ONLY PARCEL
  {
    id: 'fam-half-bucket-chicken',
    name: 'Half Bucket Chicken Briyani',
    category: 'family-pack',
    price: 1100,
    isParcelOnly: true,
    specialOffer: '1/4 KG Chicken 65 FREE',
    description: 'Serves 4–5 persons. Generous portions of Chicken Dum Biryani, 4 boiled eggs, rich salna, raita, and 1/4 KG Chicken 65 absolutely FREE.',
    tags: ['Parcel Only', 'Free 65 Bonus', 'Family Pack'],
    isVeg: false
  },
  {
    id: 'fam-full-bucket-chicken',
    name: 'Full Bucket Chicken Briyani',
    category: 'family-pack',
    price: 2200,
    isParcelOnly: true,
    specialOffer: '1/2 KG Chicken 65 FREE',
    description: 'Serves 8–10 persons. Huge feast with Chicken Dum Biryani, 8 boiled eggs, salna, raita, and 1/2 KG Chicken 65 completely FREE.',
    tags: ['Parcel Only', 'Free 65 Bonus', 'Mega Feast'],
    isVeg: false
  },
  {
    id: 'fam-half-bucket-beef',
    name: 'Half Bucket Beef Briyani',
    category: 'family-pack',
    price: 1300,
    isParcelOnly: true,
    description: 'Serves 4–5 persons. Delicious Beef Dum Biryani packed piping hot with boiled eggs, rich gravy, and raita.',
    tags: ['Parcel Only', 'Family Pack'],
    isVeg: false
  },
  {
    id: 'fam-full-bucket-beef',
    name: 'Full Bucket Beef Briyani',
    category: 'family-pack',
    price: 2600,
    isParcelOnly: true,
    description: 'Serves 8–10 persons. Massive bucket of tender Beef Dum Biryani with eggs, gravy, and raita.',
    tags: ['Parcel Only', 'Family Pack'],
    isVeg: false
  },
  {
    id: 'fam-half-bucket-mutton',
    name: 'Half Bucket Mutton Briyani',
    category: 'family-pack',
    price: 1600,
    isParcelOnly: true,
    description: 'Serves 4–5 persons. Royal Mutton Dum Biryani with tender goat meat pieces, eggs, salna, and raita.',
    tags: ['Parcel Only', 'Premium Family Pack'],
    isVeg: false
  },
  {
    id: 'fam-full-bucket-mutton',
    name: 'Full Bucket Mutton Briyani',
    category: 'family-pack',
    price: 3200,
    isParcelOnly: true,
    description: 'Serves 8–10 persons. Grand Mutton Dum Biryani bucket feast for family celebrations and gatherings.',
    tags: ['Parcel Only', 'Grand Feast'],
    isVeg: false
  },

  // 13. CHETTINADU MASALAS
  {
    id: 'chet-chicken-masala',
    name: 'Chicken Chettinadu Masala',
    category: 'chettinadu',
    price: 220,
    description: 'Signature curry prepared with 18 roasted whole spices, kalpaasi, shallots, and tender chicken.',
    tags: ['Chettinadu Classic', 'Popular'],
    isVeg: false
  },
  {
    id: 'chet-mutton-masala',
    name: 'Mutton Chettinadu Masala',
    category: 'chettinadu',
    price: 290,
    description: 'Slow-simmered tender mutton in authentic spicy Chettinadu gravy with coconut and Tellicherry pepper.',
    tags: ['Chef Pick', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'chet-chicken-pepper-masala',
    name: 'Chicken Pepper Masala',
    category: 'chettinadu',
    price: 240,
    description: 'Fiery chicken curry infused with crushed black pepper, caramelized onions, and curry leaves.',
    tags: ['Spicy', 'Popular'],
    isVeg: false
  },
  {
    id: 'chet-naatukozhi-masala',
    name: 'Naatukozhi Masala',
    category: 'chettinadu',
    price: 270,
    description: 'Country chicken simmered in claypot with village-style freshly pounded spices and gingelly oil.',
    tags: ['Authentic Country'],
    isVeg: false
  },
  {
    id: 'chet-kaadai-masala',
    name: 'Kaadai Masala',
    category: 'chettinadu',
    price: 230,
    description: 'Quail meat simmered in thick, spicy, aromatic Chettinadu gravy.',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'chet-prawn-masala',
    name: 'Prawn Masala',
    category: 'chettinadu',
    price: 270,
    description: 'Juicy coastal prawns in rich onion, tomato, ginger, and hand-ground spice masala.',
    tags: ['Seafood Special'],
    isVeg: false
  },
  {
    id: 'chet-beef-masala',
    name: 'Beef Chettinadu Masala',
    category: 'chettinadu',
    price: 250,
    description: 'Tender beef cubes slow-cooked in thick peppery Chettinadu gravy with roasted coconut paste.',
    tags: ['Bestseller'],
    isVeg: false
  },

  // 14. INDIAN GRAVY & MASALA — Veg
  {
    id: 'ind-gobi-manjurian-gravy',
    name: 'Gobi Manjurian Gravy',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 170,
    description: 'Crispy cauliflower florets in savoury garlic, soy, and spring onion gravy.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-mushroom-manjurian-gravy',
    name: 'Mushroom Manjurian Gravy',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 180,
    description: 'Juicy mushrooms in seasoned Indo-Chinese Manchurian gravy with ginger and green chillies.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-paneer-manjurian-gravy',
    name: 'Paneer Manjurian Gravy',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 210,
    description: 'Soft paneer cubes simmered in spiced dark soya gravy with bell peppers.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-gobi-masala',
    name: 'Gobi Masala',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 190,
    description: 'Cauliflower tossed in rich onion-tomato gravy with garam masala and fresh coriander.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-paneer-kadai-masala',
    name: 'Paneer Kadai Masala',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 250,
    description: 'Cottage cheese, capsicum, and onions cooked in wok with freshly ground kadai coriander and red chillies.',
    tags: ['Chef Pick', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-mushroom-kadai-masala',
    name: 'Mushroom Kadai Masala',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 230,
    description: 'Button mushrooms sautéed in a thick kadai masala with roasted spices and peppers.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-mixed-veg-curry',
    name: 'Mixed Veg Curry',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 250,
    description: 'Assorted seasonal garden vegetables simmered in creamy onion, tomato, and cashew gravy.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-paneer-butter-masala',
    name: 'Paneer Butter Masala',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 220,
    description: 'Velvety sweet and savory makhani gravy with butter, cream, kasuri methi, and soft paneer cubes.',
    tags: ['Bestseller', 'Vegetarian'],
    isVeg: true
  },

  // 14. INDIAN GRAVY & MASALA — Non-Veg
  {
    id: 'ind-chilly-chicken-gravy',
    name: 'Chilly Chicken Gravy',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 240,
    description: 'Crisp chicken cubes in glossy soy, chilli, garlic, and capsicum sauce.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'ind-chicken-manjurian-gravy',
    name: 'Chicken Manjurian Gravy',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 240,
    description: 'Indo-Chinese chicken balls in rich ginger-garlic and dark soy sauce.',
    tags: [],
    isVeg: false
  },
  {
    id: 'ind-garlic-chicken-gravy',
    name: 'Garlic Chicken Gravy',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 250,
    description: 'Chicken simmered in rich gravy packed with roasted garlic and crushed black pepper.',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'ind-ginger-chicken-gravy',
    name: 'Ginger Chicken Gravy',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 250,
    description: 'Aromatic chicken cooked with fresh shredded ginger and savory spices.',
    tags: [],
    isVeg: false
  },
  {
    id: 'ind-prawn-manjurian-gravy',
    name: 'Prawn Manjurian Gravy',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 260,
    description: 'Crisp fried prawns in savory Indo-Chinese Manchurian sauce with spring onions.',
    tags: ['Seafood Special'],
    isVeg: false
  },
  {
    id: 'ind-butter-chicken-masala',
    name: 'Butter Chicken Masala',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 270,
    description: 'Tandoori chicken pieces simmered in silky tomato, butter, cream, and kasuri methi gravy.',
    tags: ['Bestseller', 'Crowd Favorite'],
    isVeg: false
  },
  {
    id: 'ind-chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 260,
    description: 'Smoky chargrilled chicken tikkas simmered in spiced onion and tomato gravy.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'ind-kadai-chicken-masala',
    name: 'Kadai Chicken Masala',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 230,
    description: 'Chicken cooked with bell peppers, onions, and freshly ground kadai spices.',
    tags: [],
    isVeg: false
  },
  {
    id: 'ind-murugai-chicken-masala',
    name: 'Murugai Chicken Masala',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 270,
    description: 'Special chicken masala cooked with drumstick leaves (murungai keerai) and southern spices.',
    tags: ['House Special', 'Chef Pick'],
    isVeg: false
  },

  // 15. CHINESE RICE / NOODLES
  {
    id: 'chn-veg-rice-noodles',
    name: 'Veg Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 150,
    description: 'Wok-tossed basmati rice or noodles with crisp carrots, cabbage, and spring onions.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'chn-paneer-rice-noodles',
    name: 'Paneer Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 180,
    description: 'Wok-tossed fried rice or noodles with soft spiced paneer cubes and veggies.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'chn-mushroom-rice-noodles',
    name: 'Mushroom Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 170,
    description: 'Wok-tossed rice or noodles with button mushrooms and light soy sauce.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'chn-egg-rice-noodles',
    name: 'Egg Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 160,
    description: 'Fluffy scrambled eggs wok-tossed with aromatic rice or noodles and white pepper.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'chn-chicken-rice-noodles',
    name: 'Chicken Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 180,
    description: 'Tender chicken shreds wok-tossed with rice or noodles, spring onions, and garlic.',
    tags: ['Bestseller'],
    isVeg: false
  },
  {
    id: 'chn-beef-rice-noodles',
    name: 'Beef Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 200,
    description: 'Savory spiced beef strips tossed with rice or noodles on high flame.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'chn-mixed-rice-noodles',
    name: 'Mixed Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 230,
    description: 'Loaded wok feast containing chicken, egg, beef, and prawns tossed with rice or noodles.',
    tags: ['Chef Pick', 'Signature Feast'],
    isVeg: false
  },
  {
    id: 'chn-schezwan-chicken-rice-noodles',
    name: 'Schezwan Chicken Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 195,
    description: 'Fiery chicken fried rice or noodles tossed in spicy house-made Schezwan red sauce.',
    tags: ['Spicy', 'Popular'],
    isVeg: false
  },
  {
    id: 'chn-schezwan-mixed-rice-noodles',
    name: 'Schezwan Mixed Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 235,
    description: 'Spicy Schezwan wok-tossed combination of chicken, prawns, egg, and beef.',
    tags: ['Spicy', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'chn-jeera-rice',
    name: 'Jeera Rice',
    category: 'chinese-rice-noodles',
    price: 170,
    description: 'Aromatic long-grain basmati rice tempered with roasted cumin seeds and pure ghee.',
    tags: ['Vegetarian'],
    isVeg: true
  },

  // 16. INDIAN BREADS
  {
    id: 'brd-naan',
    name: 'Naan',
    category: 'indian-breads',
    price: 50,
    description: 'Traditional leavened flatbread baked against the searing walls of the tandoor.',
    tags: ['Clay Oven'],
    isVeg: true
  },
  {
    id: 'brd-butter-naan',
    name: 'Butter Naan',
    category: 'indian-breads',
    price: 60,
    description: 'Tandoori naan brushed generously with pure churned butter.',
    tags: ['Bestseller'],
    isVeg: true
  },
  {
    id: 'brd-garlic-naan',
    name: 'Garlic Naan',
    category: 'indian-breads',
    price: 70,
    description: 'Soft tandoori naan topped with roasted minced garlic and fresh coriander.',
    tags: ['Popular'],
    isVeg: true
  },
  {
    id: 'brd-mint-naan',
    name: 'Mint Naan',
    category: 'indian-breads',
    price: 70,
    description: 'Warm tandoor naan infused with aromatic crushed mint leaves.',
    tags: [],
    isVeg: true
  },
  {
    id: 'brd-rotti',
    name: 'Rotti',
    category: 'indian-breads',
    price: 60,
    description: 'Whole wheat flatbread baked fresh in the clay oven.',
    tags: ['Healthy'],
    isVeg: true
  },
  {
    id: 'brd-butter-rotti',
    name: 'Butter Rotti',
    category: 'indian-breads',
    price: 70,
    description: 'Whole wheat tandoori rotti topped with melted butter.',
    tags: [],
    isVeg: true
  },
  {
    id: 'brd-methi-rotti',
    name: 'Methi Rotti',
    category: 'indian-breads',
    price: 80,
    description: 'Whole wheat rotti infused with fragrant fenugreek leaves (kasuri methi).',
    tags: [],
    isVeg: true
  },
  {
    id: 'brd-pulkka',
    name: 'Pulkka — 2 Pcs',
    category: 'indian-breads',
    price: 50,
    portion: '2 Pcs',
    description: 'Puffed soft phulkas cooked on direct flame without oil.',
    tags: ['Healthy', 'Light'],
    isVeg: true
  },
  {
    id: 'brd-kulcha',
    name: 'Kulcha',
    category: 'indian-breads',
    price: 70,
    description: 'Soft mild leavened bread baked in the tandoor with sesame seeds.',
    tags: [],
    isVeg: true
  },
  {
    id: 'brd-butter-kulcha',
    name: 'Butter Kulcha',
    category: 'indian-breads',
    price: 80,
    description: 'Fluffy tandoori kulcha glazed with melted butter.',
    tags: ['Popular'],
    isVeg: true
  },
  {
    id: 'brd-tandoori-parotta',
    name: 'Tandoori Parotta',
    category: 'indian-breads',
    price: 60,
    description: 'Flaky layered bread baked in the high heat of the tandoor.',
    tags: ['Chef Pick'],
    isVeg: true
  },
  {
    id: 'brd-stuffed-chicken-naan',
    name: 'Stuffed Chicken Naan',
    category: 'indian-breads',
    price: 130,
    description: 'Tandoori naan stuffed with spicy minced chicken and herbs.',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'brd-stuffed-mutton-naan',
    name: 'Stuffed Mutton Naan',
    category: 'indian-breads',
    price: 150,
    description: 'Rich tandoori naan packed with spiced minced mutton filling.',
    tags: ['Specialty'],
    isVeg: false
  },

  // 17. DOSA VARIETIES
  {
    id: 'dosa-roast',
    name: 'Roast',
    category: 'dosa-varieties',
    price: 70,
    description: 'Crisp golden thin rice & lentil crepe served with coconut chutney, tomato chutney, and hot sambar.',
    tags: ['Classic', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-egg',
    name: 'Egg Dosa',
    category: 'dosa-varieties',
    price: 90,
    description: 'Crispy dosa spread with a spiced beaten egg, pepper, and chopped onions.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'dosa-ghee-roast',
    name: 'Ghee Roast',
    category: 'dosa-varieties',
    price: 90,
    description: 'Paper-thin roasted dosa drizzled lavishly with fragrant melted pure desi ghee.',
    tags: ['Bestseller', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-onion-roast',
    name: 'Onion Roast',
    category: 'dosa-varieties',
    price: 90,
    description: 'Crispy dosa topped with crunchy finely chopped shallots and green chillies.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-uthappam',
    name: 'Uthappam',
    category: 'dosa-varieties',
    price: 60,
    description: 'Thick, soft, and spongy fermented rice pancake served with chutneys and sambar.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-egg-uthappam',
    name: 'Egg Uthappam',
    category: 'dosa-varieties',
    price: 90,
    description: 'Thick spongy uthappam layered with fluffy seasoned beaten egg and pepper.',
    tags: [],
    isVeg: false
  },
  {
    id: 'dosa-onion-uthappam',
    name: 'Onion Uthappam',
    category: 'dosa-varieties',
    price: 90,
    description: 'Soft uthappam generously embedded with roasted onions and curry leaves.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-podi',
    name: 'Podi Dosa',
    category: 'dosa-varieties',
    price: 90,
    description: 'Crisp dosa generously coated with spicy gun powder (idli podi) and pure ghee.',
    tags: ['Spicy', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-chicken-kari',
    name: 'Chicken Kari Dosa',
    category: 'dosa-varieties',
    price: 140,
    description: 'Madurai-style thick dosa crowned with spiced minced chicken chukka and egg layer.',
    tags: ['Chef Pick', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'dosa-mutton-kari',
    name: 'Mutton Kari Dosa',
    category: 'dosa-varieties',
    price: 180,
    description: 'Legendary thick dosa topped with rich mutton minced fry, beaten egg, and spicy salna.',
    tags: ['Madurai Legend', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'dosa-beef-kari',
    name: 'Beef Kari Dosa',
    category: 'dosa-varieties',
    price: 160,
    description: 'Flavor-packed dosa layered with spicy beef chukka, beaten egg, and roasted pepper.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'dosa-kal-set',
    name: 'Kal Dosa Set',
    category: 'dosa-varieties',
    price: 50,
    description: 'Pair of soft, pillowy, spongy homestyle dosas served with spicy gravy and chutneys.',
    tags: ['Homestyle', 'Vegetarian'],
    isVeg: true
  },

  // 18. PAROTTA VARIETIES
  {
    id: 'par-single',
    name: 'Parotta — 1 Pc',
    category: 'parotta-varieties',
    price: 15,
    portion: '1 Pc',
    description: 'Handmade flaky layered southern parotta beaten light and airy, served with rich chicken/veg salna.',
    tags: ['All-Time Favorite'],
    isVeg: false
  },
  {
    id: 'par-nool',
    name: 'Nool Parotta',
    category: 'parotta-varieties',
    price: 35,
    description: 'Delicate string-like multi-layered parotta with exceptional flaky crunch.',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'par-bun',
    name: 'Bun Parotta',
    category: 'parotta-varieties',
    price: 50,
    description: 'Crispy on the outside, fluffy and buttery inside. Madurai style puff bun parotta.',
    tags: ['Bestseller', 'Crowd Favorite'],
    isVeg: false
  },
  {
    id: 'par-chappathi',
    name: 'Chappathi — 1 Pc',
    category: 'parotta-varieties',
    price: 30,
    portion: '1 Pc',
    description: 'Soft whole wheat flatbread made fresh on tawa.',
    tags: ['Healthy'],
    isVeg: true
  },
  {
    id: 'par-egg-kothu',
    name: 'Egg Kothu Parotta',
    category: 'parotta-varieties',
    price: 130,
    description: 'Shredded parottas beaten vigorously on a sizzling tawa with eggs, onions, and rich spicy salna.',
    tags: ['Popular Street Style'],
    isVeg: false
  },
  {
    id: 'par-chicken-kothu',
    name: 'Chicken Kothu Parotta',
    category: 'parotta-varieties',
    price: 160,
    description: 'Tawa-beaten shredded parottas with juicy chicken pieces, eggs, curry leaves, and spicy gravy.',
    tags: ['Bestseller'],
    isVeg: false
  },
  {
    id: 'par-beef-kothu',
    name: 'Beef Kothu Parotta',
    category: 'parotta-varieties',
    price: 180,
    description: 'Spicy shredded parotta chopped with tender beef pieces, caramelized onions, and fiery salna.',
    tags: ['Bestseller', 'Spicy'],
    isVeg: false
  },
  {
    id: 'par-mutton-kothu',
    name: 'Mutton Kothu Parotta',
    category: 'parotta-varieties',
    price: 200,
    description: 'Chettinadu style mutton tossed with shredded parottas, eggs, and freshly cracked Tellicherry pepper.',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'par-veechu',
    name: 'Veechu Parotta',
    category: 'parotta-varieties',
    price: 30,
    description: 'Large paper-thin folded parotta flipped and roasted with ghee on tawa.',
    tags: ['Crispy'],
    isVeg: false
  },
  {
    id: 'par-egg-veechu',
    name: 'Egg Veechu Parotta',
    category: 'parotta-varieties',
    price: 50,
    description: 'Thin veechu parotta stuffed with a spiced egg layer and roasted crisp.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'par-chilli',
    name: 'Chilli Parotta',
    category: 'parotta-varieties',
    price: 120,
    description: 'Bite-sized parotta pieces tossed Indo-Chinese style with capsicum, onions, and spicy chilli sauce.',
    tags: ['Indo-Chinese'],
    isVeg: false
  },
  {
    id: 'par-egg-lappa',
    name: 'Egg Lappa',
    category: 'parotta-varieties',
    price: 120,
    description: 'Stuffed rectangular envelope parotta filled with seasoned beaten egg and minced shallots.',
    tags: [],
    isVeg: false
  },
  {
    id: 'par-chicken-lappa',
    name: 'Chicken Lappa',
    category: 'parotta-varieties',
    price: 150,
    description: 'Stuffed folded parotta envelope loaded with juicy spiced minced chicken and eggs.',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'par-mutton-lappa',
    name: 'Mutton Lappa',
    category: 'parotta-varieties',
    price: 190,
    description: 'Flaky parotta square stuffed with tender minced mutton, eggs, and aromatic spices.',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'par-vaazhai-ilai-chicken',
    name: 'Vaazhai Ilai Chicken Parotta',
    category: 'parotta-varieties',
    price: 160,
    description: 'Parotta drenched in rich chicken salna and wrapped in fresh banana leaf, then tawa-steamed to infuse heavenly aroma.',
    tags: ['Banana Leaf Kizhi', 'Must Try'],
    isVeg: false
  },
  {
    id: 'par-vaazhai-ilai-beef',
    name: 'Vaazhai Ilai Beef Parotta',
    category: 'parotta-varieties',
    price: 180,
    description: 'Banana leaf wrapped beef kizhi parotta simmered in spicy salna and roasted on slow flame.',
    tags: ['Banana Leaf Kizhi', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'par-vaazhai-ilai-mutton',
    name: 'Vaazhai Ilai Mutton Parotta',
    category: 'parotta-varieties',
    price: 200,
    description: 'Tender mutton curry and flaky parotta steamed in fresh banana leaf pouch.',
    tags: ['Banana Leaf Kizhi', 'Signature'],
    isVeg: false
  },
  {
    id: 'par-nest',
    name: 'Nest Parotta',
    category: 'parotta-varieties',
    price: 160,
    description: 'Intricately shaped crispy nest parotta holding spicy chicken fry and sunny egg.',
    tags: ['Specialty'],
    isVeg: false
  },

  // 19. FRESH JUICE
  {
    id: 'juc-lemon',
    name: 'Lemon',
    category: 'fresh-juice',
    price: 60,
    description: 'Freshly squeezed zesty lemon juice with chilled water and touch of sweetness.',
    tags: ['Fresh', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'juc-lemon-soda',
    name: 'Lemon Soda',
    category: 'fresh-juice',
    price: 70,
    description: 'Sparkling club soda with fresh lime juice, sweet or salted as you prefer.',
    tags: ['Refreshing', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'juc-lemon-mint',
    name: 'Lemon Mint',
    category: 'fresh-juice',
    price: 70,
    description: 'Crushed garden mint muddled with fresh lemon juice and chilled soda/water.',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'juc-watermelon',
    name: 'Water Melon',
    category: 'fresh-juice',
    price: 80,
    description: '100% pure freshly pressed sweet red watermelon juice served ice cold.',
    tags: ['Pure Fruit', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'juc-pineapple',
    name: 'Pine Apple',
    category: 'fresh-juice',
    price: 90,
    description: 'Fresh tropical pineapple juice blended cold with a hint of black salt.',
    tags: ['Pure Fruit', 'Vegetarian'],
    isVeg: true
  },

  // 20. MOJITO
  {
    id: 'moj-blue-curacao',
    name: 'Blue Curaçao',
    category: 'mojitos',
    price: 90,
    description: 'Electric blue citrus mocktail with fresh mint, crushed ice, lime, and sparkling soda.',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-lemon-mint',
    name: 'Lemon Mint',
    category: 'mojitos',
    price: 90,
    description: 'Classic Cuban-style virgin mojito muddled with lime wedges, mint leaves, and brown sugar.',
    tags: ['Classic', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-red-wine',
    name: 'Red Wine',
    category: 'mojitos',
    price: 90,
    description: 'Deep ruby non-alcoholic grape and berry infusion layered with mint and fizz.',
    tags: ['Specialty', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-kiwi',
    name: 'Kiwi',
    category: 'mojitos',
    price: 100,
    description: 'Muddled real green kiwi pulp, fresh lime, mint sprigs, and chilled effervescent soda.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-green-apple',
    name: 'Green Apple',
    category: 'mojitos',
    price: 110,
    description: 'Crisp green apple essence shaken with fresh mint, lime, and sparkling splash.',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-vodka-mocktail',
    name: 'Vodka',
    category: 'mojitos',
    price: 120,
    description: 'Signature virgin botanical mocktail with spicy ginger, citrus notes, and crushed ice.',
    tags: ['Specialty', 'Vegetarian'],
    isVeg: true
  },

  // 21. ICE CREAMS
  {
    id: 'ice-vanilla',
    name: 'Vanilla',
    category: 'ice-creams',
    price: 80,
    description: 'Creamy Madagascar vanilla bean ice cream scoop.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-butterscotch',
    name: 'Butterscotch',
    category: 'ice-creams',
    price: 100,
    description: 'Velvety butterscotch ice cream with crunchy golden caramel praline crunch.',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-strawberry',
    name: 'Strawberry',
    category: 'ice-creams',
    price: 100,
    description: 'Refreshing pink strawberry ice cream scoop with real berry notes.',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-chocolate',
    name: 'Chocolate',
    category: 'ice-creams',
    price: 100,
    description: 'Rich dark Dutch cocoa chocolate ice cream scoop.',
    tags: ['Bestseller', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-mango',
    name: 'Mango',
    category: 'ice-creams',
    price: 120,
    description: 'Tropical rich Alphonso mango ice cream scoop bursting with real fruit pulp.',
    tags: ['Seasonal', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-black-current',
    name: 'Black Current',
    category: 'ice-creams',
    price: 120,
    description: 'Exotic purple black currant ice cream with sweet and tangy berry swirls.',
    tags: ['Chef Pick', 'Vegetarian'],
    isVeg: true
  }
];

export const STATISTICS = [
  { value: '4.7', label: 'Google Rating ★', labelFr: 'Note Google ★' },
  { value: '284', label: 'Google Reviews', labelFr: 'Avis Google' },
  { value: '21', label: 'Menu Categories', labelFr: 'Catégories Menu' },
  { value: '7', label: 'Mins from Bus Stand', labelFr: 'Mins de la Gare' }
];
