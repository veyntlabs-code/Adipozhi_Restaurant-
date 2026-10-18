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
  hours: 'Open 11 am · Closes 11 pm',
  getThere: '2 mins',
  currency: '₹',
  googleMapsUrl: 'https://www.google.com/maps/place/ADIPOZHI+FAMILY+RESTAURANT/@8.2004001,77.3013765,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f9f8178ae3dd:0xf4d52f55155a3a3b!8m2!3d8.2004001!4d77.3039514!16s%2Fg%2F11w2_3m_78',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.023365294815!2d77.30137647532935!3d8.200400091831495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f9f8178ae3dd%3A0xf4d52f55155a3a3b!2sADIPOZHI%20FAMILY%20RESTAURANT!5e0!3m2!1sen!2sus!4v1791812955113!5m2!1sen!2sus'
};

export const BANNER_MESSAGES = [
  {
    icon: 'star',
    text: '⭐ 4.7 Rated on Google · 284+ Verified Reviews',
    sub: 'Bus stand Entrance Arch, Monday Market (2 mins away)'
  },
  {
    icon: 'sparkles',
    text: '👑 NEW LAUNCH: Royal Chicken Maharaja Special!',
    sub: 'Crispy glazed chicken encrusted with roasted nuts & fresh herbs'
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
  headline: string;
  schedule: string;
  image: string;
  color: string;
  accent: string;
}

export const DAILY_PLEASURES: DailyPleasure[] = [
  {
    id: 'dum-biryani',
    title: 'Adipozhi Dum Biryani',
    headline: 'Steaming seeraga & basmati dum biryani layered with succulent tender meat and aromatic ghee.',
    schedule: 'Available From 11:00 AM  · Dine-in & Buckets (Mutton on Sat & Sun)',
    image: '/adipoo rest/Biryani/Dum Biryani Top Down.jpg',
    color: '#8e1b1b',
    accent: '#f8efdc'
  },
  {
    id: 'bun-parotta',
    title: 'Bun Parotta & Kothu',
    headline: 'Puffed golden bun parottas and fiery chicken/mutton/beef kothu parotta beaten on hot tawa.',
    schedule: 'Daily from 6:00 PM to 11:00 PM',
    image: '/menu 16-21/PAROTTA VARIETIES/Bun Parotta Top Down.jpg',
    color: '#9e2a2b',
    accent: '#f8efdc'
  },
  {
    id: 'arabian-alfaham',
    title: 'Arabian Al-Faham & Charcoal Grill',
    headline: 'Authentic Peri Peri, Pepper & Garlic Al-Faham grilled over red-hot coals with garlic dip.',
    schedule: 'Available From 11:00 AM ',
    image: '/images/food/alfaham-top-down.jpg',
    color: '#7b1818',
    accent: '#f8efdc'
  },
  {
    id: 'chettinadu-masala',
    title: 'Chettinadu Spicy Masalas',
    headline: 'Stone-ground kalpaasi, Tellicherry black pepper, shallots, and tender country chicken (Naatukozhi).',
    schedule: 'Lunch & Dinner · Rich Spicy Gravies',
    image: '/adipoo rest/CHETTINADU MASALAS/Chettinadu Masala Top Down.jpg',
    color: '#a02e1c',
    accent: '#f8efdc'
  },
  {
    id: 'chicken-maharaja',
    title: 'Chicken Maharaja',
    headline: 'Royal crispy chicken tossed in rich aromatic spiced glaze, crowned with roasted nuts and garden herbs.',
    schedule: 'Chef’s Royal Special · Lunch & Dinner Daily',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Chicken Maharaja Top Down.jpg',
    color: '#7a191b',
    accent: '#f8efdc'
  }
];

export interface AmbianceSpace {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export const AMBIANCE_SPACES: AmbianceSpace[] = [
  {
    id: 'ac-family-dining',
    name: 'AC Family Dining Hall',
    tagline: 'Cool, spacious, and comfortable dining tailored for families and groups.',
    description: 'Designed with comfortable plush seating, ambient warm lighting, and prompt table service. Ideal for family get-togethers, weekend celebrations, and enjoying biryanis in air-conditioned ease.',
    image: '/images/gallery/interior-original.png'
  },
  {
    id: 'non-ac-family-dining',
    name: 'NON-AC Family Dining Hall',
    tagline: 'Comfortable family dining with lively restaurant ambiance.',
    description: 'Enjoy the vibrant and lively atmosphere of our main dining hall. Perfect for a casual and authentic dining experience with friends and family.',
    image: '/images/gallery/interior-booths.jpg'
  }
];

export const ATMOSPHERES = AMBIANCE_SPACES;
export type Atmosphere = AmbianceSpace;

export interface ScheduleDay {
  day: string;
  dining: string;
  takeaway: string;
  delivery: string;
  chickenBeefBiryani: string;
  muttonBiryani?: string;
  dosaParotta: string;
  bar?: string;
  breakfast?: string;
  happyHour?: string;
}

export const SCHEDULE_DATA: ScheduleDay[] = [
  {
    day: 'Monday',
    dining: '11:00 AM to 11:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM',
    chickenBeefBiryani: 'Available From 11:00 AM ',
    dosaParotta: '6:00 PM – 11:00 PM'
  },
  {
    day: 'Tuesday',
    dining: '11:00 AM to 11:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM',
    chickenBeefBiryani: 'Available From 11:00 AM ',
    dosaParotta: '6:00 PM – 11:00 PM'
  },
  {
    day: 'Wednesday',
    dining: '11:00 AM to 11:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM',
    chickenBeefBiryani: 'Available From 11:00 AM ',
    dosaParotta: '6:00 PM – 11:00 PM'
  },
  {
    day: 'Thursday',
    dining: '11:00 AM to 11:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM',
    chickenBeefBiryani: 'Available From 11:00 AM ',
    dosaParotta: '6:00 PM – 11:00 PM'
  },
  {
    day: 'Friday',
    dining: '11:00 AM to 11:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM',
    chickenBeefBiryani: 'Available From 11:00 AM ',
    dosaParotta: '6:00 PM – 11:00 PM'
  },
  {
    day: 'Saturday',
    dining: '11:00 AM to 11:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM',
    chickenBeefBiryani: 'Available From 11:00 AM ',
    muttonBiryani: 'Available From 11:00 AM',
    dosaParotta: '6:00 PM – 11:00 PM'
  },
  {
    day: 'Sunday',
    dining: '11:00 AM to 11:00 PM',
    takeaway: '11:00 AM to 11:00 PM',
    delivery: '11:00 AM to 11:00 PM',
    chickenBeefBiryani: 'Available From 11:00 AM ',
    muttonBiryani: 'Available From 11:00 AM ',
    dosaParotta: '6:00 PM – 11:00 PM'
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
  { id: 'seafood-starters', name: '7. Non-Veg Starters — Seafood' },
  { id: 'arabian-starters', name: '8. Arabian Starters' },
  { id: 'arabian-spicy', name: '9. Arabian Spicy Specials' },
  { id: 'pulaos', name: '10. Pulaos' },
  { id: 'biriyanis', name: '11. Biriyanis' },
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
    image: '/adipoo rest/Soup/veg/Steaming Adipozhi Vegetable Soup.png',
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
    image: '/adipoo rest/Soup/veg/Steaming Adipozhi Hot and Sour Soup.png',
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
    image: '/adipoo rest/Soup/veg/Steaming Sweet Corn Soup at Adipozhi.png',
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
    image: '/adipoo rest/Soup/non-veg/Steaming Hot and Sour Chicken Soup.png',
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
    image: '/adipoo rest/Soup/non-veg/Steaming Chicken Corn Soup at Adipozhi.png',
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
    image: '/adipoo rest/Soup/non-veg/Steaming Chicken Manchow Soup at Adipozhi.png',
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
    image: '/adipoo rest/Egg/Spiced Eggs with Adipozhi Rose Backdrop.png',
    tags: ['Healthy'],
    isVeg: false
  },
  {
    id: 'egg-omelette',
    name: 'Omelette',
    category: 'egg-special',
    price: 25,
    description: 'Fluffy golden omelette beaten with finely chopped onions, green chillies, and curry leaves.',
    image: '/adipoo rest/Egg/AdipoZhi Golden Herb Omelette.png',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'egg-podi-mass',
    name: 'Podi Mass',
    category: 'egg-special',
    price: 50,
    description: 'Authentic Tamil Nadu style spicy egg scramble roasted on tawa with onions, curry leaves, and crushed pepper.',
    image: '/images/food/podi-mass.jpg',
    tags: ['Chef Pick', 'Popular'],
    isVeg: false
  },
  {
    id: 'egg-kalakki',
    name: 'Kalakki',
    category: 'egg-special',
    price: 20,
    description: 'Famous Madurai-style soft, runny, gravy-infused egg pocket prepared on a sizzling hot tawa.',
    image: '/adipoo rest/Egg/Adipozhi Kalakki Feast.jpg',
    tags: ['Specialty', 'Popular'],
    isVeg: false
  },
  {
    id: 'egg-mass',
    name: 'Egg Mass',
    category: 'egg-special',
    price: 50,
    description: 'Juicy, aromatic egg scramble tossed in secret Adipozhi salna gravy and roasted spices.',
    image: '/images/food/egg-mass.jpg',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'egg-half-boil',
    name: 'Half Boil',
    category: 'egg-special',
    price: 20,
    description: 'Sunny-side up fried egg with a luscious runny yolk dusted with freshly ground Tellicherry pepper.',
    image: '/adipoo rest/Egg/Spiced Runny Eggs at Adipozhi.png',
    tags: [],
    isVeg: false
  },
  {
    id: 'egg-full-boil',
    name: 'Full Boil',
    category: 'egg-special',
    price: 20,
    description: 'Both sides gently seared fried egg with fully cooked yolk and crisp edges.',
    image: '/adipoo rest/Egg/Spiced Eggs with Adipozhi Rose Backdrop.png',
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
    image: '/adipoo rest/veg started/Steaming Gobi 65 at Adipozhi.png',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-mushroom-65',
    name: 'Mushroom 65',
    category: 'veg-starters',
    price: 140,
    description: 'Fresh juicy button mushrooms tossed in spiced batter and fried to crunchy perfection.',
    image: '/adipoo rest/veg started/Spicy Mushroom 65 at Adipozhi.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-paneer-65',
    name: 'Paneer 65',
    category: 'veg-starters',
    price: 170,
    description: 'Soft malai paneer cubes infused with spiced yoghurt batter, roasted curry leaves, and green chillies.',
    image: '/adipoo rest/veg started/Spicy Paneer 65 at Adipozhi.png',
    tags: ['Chef Pick', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-gobi-pepper-fry',
    name: 'Gobi Pepper Fry',
    category: 'veg-starters',
    price: 160,
    description: 'Wok-tossed cauliflower with crushed black Tellicherry pepper, onions, and curry leaves.',
    image: '/adipoo rest/veg started/Spicy Gobi Pepper Fry Feast.png',
    tags: ['Spicy', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-gobi-manchurian-dry',
    name: 'Gobi Manchurian Dry',
    category: 'veg-starters',
    price: 160,
    description: 'Crispy cauliflower tossed in Indo-Chinese dark soy, garlic, spring onions, and green chillies.',
    image: '/adipoo rest/veg started/Glistening Gobi Manchurian with Red Floral Branding.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-mushroom-pepper-fry',
    name: 'Mushroom Pepper Fry',
    category: 'veg-starters',
    price: 170,
    description: 'Succulent mushrooms sautéed with freshly cracked black pepper and caramelized shallots.',
    image: '/adipoo rest/veg started/Peppery Mushroom Stir-Fry at Adipozhi.png',
    tags: ['Spicy', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'veg-french-fries',
    name: 'French Fries',
    category: 'veg-starters',
    price: 80,
    description: 'Crispy salted golden potato fries served with tomato ketchup.',
    image: '/adipoo rest/veg started/Crispy Herb Fries with Ketchup.png',
    tags: ['Vegetarian', 'Kids Favorite'],
    isVeg: true
  },

  // 4. NON-VEG STARTERS — CHICKEN
  {
    id: 'chk-maharaja',
    name: 'Chicken Maharaja',
    category: 'chicken-starters',
    price: 270,
    description: 'Royal signature delicacy of succulent crispy fried chicken tossed in chef’s secret spiced glaze, encrusted with crushed roasted nuts, cilantro, and served on crisp garden greens.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Adipozhi Chicken Maharaja Feast.jpg',
    tags: ['New', 'Chef Special', 'Bestseller'],
    isVeg: false
  },
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
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Spicy Chicken 65 at Adipozhi.png',
    tags: ['Bestseller', 'Popular'],
    isVeg: false
  },
  {
    id: 'chk-kaadai-65',
    name: 'Kaadai 65',
    category: 'chicken-starters',
    price: 160,
    description: 'Tender whole quail marinated in authentic southern masala and fried until crisp and juicy.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Spicy Kaadai 65 with Curry Leaves.png',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'chk-lollipop',
    name: 'Chicken Lollipop',
    category: 'chicken-starters',
    price: 200,
    description: 'Succulent chicken winglets frenched, seasoned in spicy batter, and fried with hot garlic sauce.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Spicy Chicken Lollipop Feast.png',
    tags: ['Kids Favorite', 'Popular'],
    isVeg: false
  },
  {
    id: 'chk-chukka',
    name: 'Chicken Chukka',
    category: 'chicken-starters',
    price: 170,
    description: 'Dry roasted chicken with shallots, curry leaves, and freshly hand-pounded Chettinadu spices.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Spicy Chicken Chukka at Adipozhi.png',
    tags: ['Chef Pick', 'Spicy'],
    isVeg: false
  },
  {
    id: 'chk-kaadai-chukka',
    name: 'Kaadai Chukka',
    category: 'chicken-starters',
    price: 185,
    description: 'Country quail tossed on high flame with roasted coconut, black pepper, and small onions.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Spicy Kaadai Chukka at Adipozhi.png',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'chk-nattukozhi-chukka',
    name: 'Nattukozhi Chukka',
    category: 'chicken-starters',
    price: 210,
    description: 'Authentic country chicken roasted dry with native spices, black pepper, and gingelly oil.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Adipozhi Nattukozhi Chukka Feast.png',
    tags: ['Authentic Country', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'chk-chilly-dry',
    name: 'Chilly Chicken Dry',
    category: 'chicken-starters',
    price: 230,
    description: 'Indo-Chinese style crispy chicken pieces wok-tossed with capsicum, onions, and green chillies.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Adipozhi Spicy Chilli Chicken Feast.png',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'chk-manchurian-dry',
    name: 'Chicken Manchurian Dry',
    category: 'chicken-starters',
    price: 230,
    description: 'Crispy fried chicken cubes tossed in ginger-garlic sauce, dark soy, and spring onions.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Gourmet Chicken Manchurian Dry.png',
    tags: [],
    isVeg: false
  },
  {
    id: 'chk-garlic-dry',
    name: 'Garlic Chicken Dry',
    category: 'chicken-starters',
    price: 240,
    description: 'Aromatic chicken chunks sautéed with roasted golden garlic cloves and cracked pepper.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Glossy Garlic Chicken with Adipozhi Branding.png',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'chk-ginger-dry',
    name: 'Ginger Chicken Dry',
    category: 'chicken-starters',
    price: 240,
    description: 'Tender chicken tossed with julienned fresh ginger, spring onions, and a hint of sweetness.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Spicy Ginger Chicken with Adipozhi Branding.png',
    tags: [],
    isVeg: false
  },
  {
    id: 'chk-dragon',
    name: 'Dragon Chicken',
    category: 'chicken-starters',
    price: 250,
    description: 'Crispy chicken strips tossed in fiery dragon sauce with cashew nuts, red chillies, and bell peppers.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Adipozhi Dragon Chicken Feast.jpg',
    tags: ['Spicy', 'Popular'],
    isVeg: false
  },
  {
    id: 'chk-lemon',
    name: 'Lemon Chicken',
    category: 'chicken-starters',
    price: 250,
    description: 'Zesty crispy chicken glazed with freshly squeezed lemon juice, garlic, and fresh green herbs.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Crispy Lemon Chicken Feast.png',
    tags: [],
    isVeg: false
  },
  {
    id: 'chk-honey',
    name: 'Honey Chicken',
    category: 'chicken-starters',
    price: 260,
    description: 'Golden fried chicken bites glazed in pure honey, roasted sesame seeds, and light chilli glaze.',
    image: '/adipoo rest/NON-VEG STARTERS - CHICKEN/Glossy Honey-Chili Chicken Feast.png',
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
    image: '/adipoo rest/NON-VEG STARTERS - MUTTON/Spiced Mutton Chukka at Adipoozhi.png',
    tags: ['Chef Pick', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'mut-varutha-kari',
    name: 'Mutton Varutha Kari',
    category: 'mutton-starters',
    price: 290,
    description: 'Deep-fried marinated mutton cubes tossed in roasted coconut and southern aromatic masala.',
    image: '/adipoo rest/NON-VEG STARTERS - MUTTON/Spicy Mutton Fry at Adipozhi.png',
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
    image: '/adipoo rest/NON-VEG STARTERS - MUTTON/Crispy Mutton Kofta at Adipozhi.png',
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
    image: '/adipoo rest/NON-VEG STARTERS - BEEF/Spicy Beef Chukka with Rustic Restaurant Flair.png',
    tags: ['Bestseller', 'Spicy'],
    isVeg: false
  },
  {
    id: 'beef-tawa-fry',
    name: 'Beef Tawa Fry',
    category: 'beef-starters',
    price: 210,
    description: 'Pan-seared spiced beef tossed with caramelized onions, green chillies, and aromatic salna reduction.',
    image: '/adipoo rest/NON-VEG STARTERS - BEEF/Spicy Beef Fry with Adipozhi Branding.png',
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
    image: '/images/food/crispy-prawn.jpg',
    tags: ['Seafood Special'],
    isVeg: false
  },
  {
    id: 'sea-prawn-pepper-fry',
    name: 'Prawn Pepper Fry',
    category: 'seafood-starters',
    price: 260,
    description: 'Plump juicy prawns wok-roasted with freshly cracked black pepper, onions, and curry leaves.',
    image: '/adipoo rest/NON-VEG STARTERS - SEAFOODS/Spicy Pepper Prawns at Adipozhi.png',
    tags: ['Chef Pick', 'Spicy'],
    isVeg: false
  },
  {
    id: 'sea-fish-finger',
    name: 'Fish Finger',
    category: 'seafood-starters',
    price: 210,
    description: 'Crispy breaded boneless fish fillets served with lime wedges and creamy dipping sauce.',
    image: '/adipoo rest/NON-VEG STARTERS - SEAFOODS/Crispy Fish Fingers with Herb Dip.png',
    tags: ['Kids Favorite'],
    isVeg: false
  },
  {
    id: 'sea-crab-lollipop',
    name: 'Crab Lollipop',
    category: 'seafood-starters',
    price: 230,
    description: 'Minced fresh sea crab meat molded on claws with herbs, spices, and fried till crunchy.',
    image: '/adipoo rest/NON-VEG STARTERS - SEAFOODS/Crispy Crab Lollipops at Adipozhi.png',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'sea-nethili-fry',
    name: 'Nethili Fish Fry',
    category: 'seafood-starters',
    price: 160,
    description: 'Crisp whole anchovy fish marinated in spicy coastal masala and flash-fried with curry leaves.',
    image: '/adipoo rest/NON-VEG STARTERS - SEAFOODS/Spicy Nethili Fry at Adipozhi.png',
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
    image: '/adipoo rest/NON-VEG STARTERS - SEAFOODS/Adipozhi Spicy Fish Curry Feast.png',
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
    image: '/adipoo rest/NON-VEG STARTERS - SEAFOODS/Adipozhi Spiced Fish Tawa Fry.png',
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
    image: '/adipoo rest/NON-VEG STARTERS - SEAFOODS/Crispy Spiced Fish Feast.png',
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
    image: '/adipoo rest/ARABIAN STARTERS/Adipozhi Full Chicken Grill Feast.png',
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
    image: '/images/food/pepper-grill.jpg',
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
    image: '/images/food/al-fam-chicken.jpg',
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
    image: '/images/food/al-fam-chicken.jpg',
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
    image: '/images/food/tandoori-chicken.jpg',
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
    image: '/adipoo rest/ARABIAN STARTERS/Adipozhi BBQ Chicken Feast.png',
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
    image: '/adipoo rest/ARABIAN STARTERS/Pepper-Glazed Chicken Feast.png',
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
    image: '/adipoo rest/ARABIAN STARTERS/Smoky Grilled Fish at Adipozhi.png',
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
    image: '/adipoo rest/ARABIAN SPICY\'S/Steaming Paneer Tikka with Mint Chutney.png',
    tags: ['Vegetarian', 'Popular'],
    isVeg: true
  },
  {
    id: 'tikka-chicken',
    name: 'Chicken Tikka',
    category: 'arabian-spicy',
    price: 220,
    description: 'Boneless tender chicken morsels marinated in spiced yoghurt and chargrilled on iron skewers.',
    image: '/adipoo rest/ARABIAN SPICY\'S/Adipozhi Tandoori Chicken Tikka Feast.png',
    tags: ['Bestseller'],
    isVeg: false
  },
  {
    id: 'tikka-hariyali',
    name: 'Hariyali Kabab',
    category: 'arabian-spicy',
    price: 260,
    description: 'Chicken pieces marinated in mint, coriander, spinach, and green chillies, cooked in tandoor.',
    image: '/adipoo rest/ARABIAN SPICY\'S/Steaming Hariyali Kabab Feast.png',
    tags: ['Fresh Herbs', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'tikka-kalimirich',
    name: 'Kalimirich Tikka',
    category: 'arabian-spicy',
    price: 260,
    description: 'Creamy chicken tikka rubbed with freshly ground black Tellicherry pepper and cashews.',
    image: '/adipoo rest/ARABIAN SPICY\'S/Pepper Chicken Tikka at Adipozhi.png',
    tags: ['Peppery', 'Specialty'],
    isVeg: false
  },
  {
    id: 'tikka-reshmi',
    name: 'Reshmi Kabab',
    category: 'arabian-spicy',
    price: 270,
    description: 'Silky smooth chicken kababs marinated with clotted cream, cashew paste, and light mace.',
    image: '/images/food/reshmi-kabab.jpg',
    tags: ['Melt in Mouth'],
    isVeg: false
  },
  {
    id: 'tikka-tangri',
    name: 'Tangri Kabab',
    category: 'arabian-spicy',
    price: 270,
    description: 'Succulent chicken drumsticks stuffed with spiced mince and chargrilled in the clay oven.',
    image: '/adipoo rest/ARABIAN SPICY\'S/Tangri Kababs.jpg',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'tikka-malai',
    name: 'Malai Chicken Tikka',
    category: 'arabian-spicy',
    price: 270,
    description: 'Mild and royal chicken tikka infused with fresh malai, cheese, cardamom, and white pepper.',
    image: '/adipoo rest/ARABIAN SPICY\'S/Malai Chicken Tikka at Adipozhi.png',
    tags: ['Mild & Creamy'],
    isVeg: false
  },
  {
    id: 'tikka-acharya',
    name: 'Acharya Chicken Tikka',
    category: 'arabian-spicy',
    price: 270,
    description: 'Tangy, pickled chicken tikka flavored with mustard, fennel seeds, and mango pickle glaze.',
    image: '/adipoo rest/ARABIAN SPICY\'S/Steaming Acharya Chicken Tikka Feast.png',
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
    image: '/adipoo rest/PULAOS/Steaming Veg Pulao at Adipozhi.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'pulao-mushroom',
    name: 'Mushroom Pulao',
    category: 'pulaos',
    price: 200,
    description: 'Savory button mushrooms tossed with seasoned basmati rice and caramelized onions.',
    image: '/adipoo rest/PULAOS/Steaming Mushroom Pulao Feast.png',
    tags: ['Vegetarian', 'Popular'],
    isVeg: true
  },
  {
    id: 'pulao-chicken',
    name: 'Chicken Pulao',
    category: 'pulaos',
    price: 220,
    description: 'Tender chicken pieces cooked gently with long-grain basmati and mild whole spices.',
    image: '/images/food/chicken-pulao.jpg',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'pulao-mutton',
    name: 'Mutton Pulao',
    category: 'pulaos',
    price: 260,
    description: 'Rich basmati rice infused with tender goat meat stock, saffron, and fried onions.',
    image: '/images/food/mutton-pulao.jpg',
    tags: ['Chef Pick'],
    isVeg: false
  },

  // 11. BIRIYANIS
  {
    id: 'biriyani-egg',
    name: 'Egg Biriyani',
    category: 'biriyanis',
    price: 160,
    description: 'Aromatic dum biryani rice served with two seasoned hard-boiled eggs and raita & salna.',
    image: '/adipoo rest/Biryani/Spiced Egg Biryani at Adipozhi.png',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'biriyani-chicken-dum',
    name: 'Chicken Dum Biriyani',
    category: 'biriyanis',
    price: 200,
    description: 'Our crowned signature! Fragrant seeraga samba & basmati dum biryani with succulent chicken, egg, brinjal salna, and onion raita.',
    image: '/adipoo rest/Biryani/Steaming Chicken Dum Biryani at Adipozhi.png',
    tags: ['#1 Bestseller', 'Signature'],
    isVeg: false
  },
  {
    id: 'biriyani-naatukozhi',
    name: 'Naatukozhi Biriyani',
    category: 'biriyanis',
    price: 250,
    description: 'Authentic country chicken dum biryani cooked with traditional spices and country ghee.',
    image: '/adipoo rest/Biryani/Steaming Country Chicken Biryani Feast.png',
    tags: ['Country Chicken', 'Specialty'],
    isVeg: false
  },
  {
    id: 'biriyani-kaadai',
    name: 'Kaadai Biriyani',
    category: 'biriyanis',
    price: 250,
    description: 'Whole quail dum biryani bursting with rich southern flavors and fragrant rice.',
    image: '/adipoo rest/Biryani/Steaming Kaadai Biryani Feast.png',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'biriyani-chicken-65',
    name: 'Chicken 65 Biriyani',
    category: 'biriyanis',
    price: 230,
    description: 'Dum biryani rice topped with freshly fried spicy Chicken 65 pieces and hard-boiled egg.',
    image: '/adipoo rest/Biryani/Steaming Chicken 65 Biryani Feast.png',
    tags: ['Popular', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'biriyani-beef',
    name: 'Beef Biriyani',
    category: 'biriyanis',
    price: 240,
    description: 'Melt-in-mouth beef chunks slow-cooked in handi dum biryani with deep aromatic gravy.',
    image: '/adipoo rest/Biryani/Adipozhi Beef Biryani Feast.png',
    tags: ['Bestseller'],
    isVeg: false
  },
  {
    id: 'biriyani-mutton-dum',
    name: 'Mutton Dum Biriyani',
    category: 'biriyanis',
    price: 290,
    description: 'Tender mutton cooked on dum with aged basmati, saffron, mint, and pure ghee.',
    image: '/adipoo rest/Biryani/Steaming Mutton Biryani Feast.png',
    tags: ['Chef Pick', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'biriyani-plain',
    name: 'Plain Biriyani (Kuska)',
    category: 'biriyanis',
    price: 130,
    description: 'Rich, flavorful dum biryani rice served with raita and salna.',
    image: '/adipoo rest/Biryani/Steaming Biryani Feast with Rose Branding.png',
    tags: ['Value Choice'],
    isVeg: false
  },

  // 12. FAMILY PACK — ONLY PARCEL
  {
    id: 'fam-half-bucket-chicken',
    name: 'Half Bucket Chicken Biriyani',
    category: 'family-pack',
    price: 1100,
    isParcelOnly: true,
    specialOffer: '1/4 KG Chicken 65 FREE',
    description: 'Serves 4–5 persons. Generous portions of Chicken Dum Biryani, 4 boiled eggs, rich salna, raita, and 1/4 KG Chicken 65 absolutely FREE.',
    image: '/adipoo rest/FAMILY PACK (ONLY PARCEL)/Steaming Adipozhi Chicken Biryani Bucket.png',
    tags: ['Parcel Only', 'Free 65 Bonus', 'Family Pack'],
    isVeg: false
  },
  {
    id: 'fam-full-bucket-chicken',
    name: 'Full Bucket Chicken Biriyani',
    category: 'family-pack',
    price: 2200,
    isParcelOnly: true,
    specialOffer: '1/2 KG Chicken 65 FREE',
    description: 'Serves 8–10 persons. Huge feast with Chicken Dum Biryani, 8 boiled eggs, salna, raita, and 1/2 KG Chicken 65 completely FREE.',
    image: '/adipoo rest/FAMILY PACK (ONLY PARCEL)/Steaming Adipozhi Chicken Biryani Bucket.png',
    tags: ['Parcel Only', 'Free 65 Bonus', 'Mega Feast'],
    isVeg: false
  },
  {
    id: 'fam-half-bucket-beef',
    name: 'Half Bucket Beef Biriyani',
    category: 'family-pack',
    price: 1300,
    isParcelOnly: true,
    description: 'Serves 4–5 persons. Delicious Beef Dum Biryani packed piping hot with boiled eggs, rich gravy, and raita.',
    image: '/adipoo rest/FAMILY PACK (ONLY PARCEL)/Steaming AdipoZhi Beef Biryani Bucket.png',
    tags: ['Parcel Only', 'Family Pack'],
    isVeg: false
  },
  {
    id: 'fam-full-bucket-beef',
    name: 'Full Bucket Beef Biriyani',
    category: 'family-pack',
    price: 2600,
    isParcelOnly: true,
    description: 'Serves 8–10 persons. Massive bucket of tender Beef Dum Biryani with eggs, gravy, and raita.',
    image: '/adipoo rest/FAMILY PACK (ONLY PARCEL)/Steaming AdipoZhi Beef Biryani Bucket.png',
    tags: ['Parcel Only', 'Family Pack'],
    isVeg: false
  },
  {
    id: 'fam-half-bucket-mutton',
    name: 'Half Bucket Mutton Biriyani',
    category: 'family-pack',
    price: 1600,
    isParcelOnly: true,
    description: 'Serves 4–5 persons. Royal Mutton Dum Biryani with tender goat meat pieces, eggs, salna, and raita.',
    image: '/adipoo rest/FAMILY PACK (ONLY PARCEL)/Steaming AdipoZhi Mutton Biryani.png',
    tags: ['Parcel Only', 'Premium Family Pack'],
    isVeg: false
  },
  {
    id: 'fam-full-bucket-mutton',
    name: 'Full Bucket Mutton Biriyani',
    category: 'family-pack',
    price: 3200,
    isParcelOnly: true,
    description: 'Serves 8–10 persons. Grand Mutton Dum Biryani bucket feast for family celebrations and gatherings.',
    image: '/adipoo rest/FAMILY PACK (ONLY PARCEL)/Steaming AdipoZhi Mutton Biryani.png',
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
    image: '/Chettinadu Masalas/Chicken Chettinadu Masala.png',
    tags: ['Chettinadu Classic', 'Popular'],
    isVeg: false
  },
  {
    id: 'chet-mutton-masala',
    name: 'Mutton Chettinadu Masala',
    category: 'chettinadu',
    price: 290,
    description: 'Slow-simmered tender mutton in authentic spicy Chettinadu gravy with coconut and Tellicherry pepper.',
    image: '/Chettinadu Masalas/Mutton Chettinadu Masala.png',
    tags: ['Chef Pick', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'chet-chicken-pepper-masala',
    name: 'Chicken Pepper Masala',
    category: 'chettinadu',
    price: 240,
    description: 'Fiery chicken curry infused with crushed black pepper, caramelized onions, and curry leaves.',
    image: '/Chettinadu Masalas/Chicken Pepper Masala.png',
    tags: ['Spicy', 'Popular'],
    isVeg: false
  },
  {
    id: 'chet-naatukozhi-masala',
    name: 'Naatukozhi Masala',
    category: 'chettinadu',
    price: 270,
    description: 'Country chicken simmered in claypot with village-style freshly pounded spices and gingelly oil.',
    image: '/Chettinadu Masalas/Naatukozhi Masala.png',
    tags: ['Authentic Country'],
    isVeg: false
  },
  {
    id: 'chet-kaadai-masala',
    name: 'Kaadai Masala',
    category: 'chettinadu',
    price: 230,
    description: 'Quail meat simmered in thick, spicy, aromatic Chettinadu gravy.',
    image: '/Chettinadu Masalas/Kaadai Masala.png',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'chet-prawn-masala',
    name: 'Prawn Masala',
    category: 'chettinadu',
    price: 270,
    description: 'Juicy coastal prawns in rich onion, tomato, ginger, and hand-ground spice masala.',
    image: '/Chettinadu Masalas/Prawn Masala.png',
    tags: ['Seafood Special'],
    isVeg: false
  },
  {
    id: 'chet-beef-masala',
    name: 'Beef Chettinadu Masala',
    category: 'chettinadu',
    price: 250,
    description: 'Tender beef cubes slow-cooked in thick peppery Chettinadu gravy with roasted coconut paste.',
    image: '/Chettinadu Masalas/Beef Chettinadu Masala.png',
    tags: ['Bestseller'],
    isVeg: false
  },

  // 14. INDIAN GRAVY & MASALA — Veg
  {
    id: 'ind-gobi-manchurian-gravy',
    name: 'Gobi Manchurian Gravy (Semi/Dry)',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 170,
    description: 'Crispy cauliflower florets in savoury garlic, soy, and spring onion gravy.',
    image: '/nwwwww/Steaming Gobi Manchurian at Adipozhi.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-mushroom-manchurian-gravy',
    name: 'Mushroom Manchurian Gravy (Semi/Dry)',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 180,
    description: 'Juicy mushrooms in seasoned Indo-Chinese Manchurian gravy with ginger and green chillies.',
    image: '/nwwwww/Glossy Mushroom Gravy with Rose Branding.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ind-paneer-manchurian-gravy',
    name: 'Paneer Manchurian Gravy (Semi/Dry)',
    category: 'indian-gravy',
    subCategory: 'Veg',
    price: 210,
    description: 'Soft paneer cubes simmered in spiced dark soya gravy with bell peppers.',
    image: '/nwwwww/Glossy Paneer Manchurian Feast.png',
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
    image: '/nwwwww/Gobi Aloo Masala at AdipoZhi.png',
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
    image: '/nwwwww/AdipoZhi Spicy Paneer Bowl.png',
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
    image: '/nwwwww/Glossy Mushroom Gravy with Rose Branding.png',
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
    image: '/nwwwww/Glossy Mixed Vegetable Curry Feast.png',
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
    image: '/adipoo rest/INDIAN GRAVY & MASALA/Paneer Butter Masala.jpg',
    tags: ['Bestseller', 'Vegetarian'],
    isVeg: true
  },

  // 14. INDIAN GRAVY & MASALA — Non-Veg
  {
    id: 'ind-chilly-chicken-gravy',
    name: 'Chilly Chicken Gravy (Semi/Dry)',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 240,
    description: 'Crisp chicken cubes in glossy soy, chilli, garlic, and capsicum sauce.',
    image: '/nwwwww/Glossy Chili Chicken Bowl at AdipoZhi.png',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'ind-chicken-manchurian-gravy',
    name: 'Chicken Manchurian Gravy (Semi/Dry)',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 240,
    description: 'Indo-Chinese chicken balls in rich ginger-garlic and dark soy sauce.',
    image: '/nwwwww/Glossy Chilly Chicken Gravy Feast.png',
    tags: [],
    isVeg: false
  },
  {
    id: 'ind-garlic-chicken-gravy',
    name: 'Garlic Chicken Gravy (Semi/Dry)',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 250,
    description: 'Chicken simmered in rich gravy packed with roasted garlic and crushed black pepper.',
    image: '/nwwwww/Spicy Indo-Chinese Bowl at AdipoZhi.png',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'ind-ginger-chicken-gravy',
    name: 'Ginger Chicken Gravy (Semi/Dry)',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 250,
    description: 'Aromatic chicken cooked with fresh shredded ginger and savory spices.',
    image: '/adipoo rest/INDIAN GRAVY & MASALA/Ginger Chicken Gravy.jpg',
    tags: [],
    isVeg: false
  },
  {
    id: 'ind-prawn-manchurian-gravy',
    name: 'Prawn Manchurian Gravy (Semi/Dry)',
    category: 'indian-gravy',
    subCategory: 'Non-Veg',
    price: 260,
    description: 'Crisp fried prawns in savory Indo-Chinese Manchurian sauce with spring onions.',
    image: '/nwwwww/Steaming Prawn Manchurian Feast.png',
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
    image: '/adipoo rest/INDIAN GRAVY & MASALA/Butter Chicken Masala.jpg',
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
    image: '/adipoo rest/INDIAN GRAVY & MASALA/Chicken Tikka Masala.jpg',
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
    image: '/adipoo rest/INDIAN GRAVY & MASALA/Kadai Chicken Masala.jpg',
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
    image: '/adipoo rest/INDIAN GRAVY & MASALA/Ginger Chicken Gravy.jpg',
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
    image: '/adipoo rest/CHINESE RICE  NOODLES/Steaming Veg Rice and Noodles Feast.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'chn-paneer-rice-noodles',
    name: 'Paneer Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 180,
    description: 'Wok-tossed fried rice or noodles with soft spiced paneer cubes and veggies.',
    image: '/adipoo rest/CHINESE RICE  NOODLES/Paneer Feast Against Red Roses.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'chn-mushroom-rice-noodles',
    name: 'Mushroom Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 170,
    description: 'Wok-tossed rice or noodles with button mushrooms and light soy sauce.',
    image: '/adipoo rest/CHINESE RICE  NOODLES/Steaming Mushroom Rice and Noodles.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'chn-egg-rice-noodles',
    name: 'Egg Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 160,
    description: 'Fluffy scrambled eggs wok-tossed with aromatic rice or noodles and white pepper.',
    image: '/adipoo rest/CHINESE RICE  NOODLES/Steaming AdipoZhi Egg Rice and Noodles.png',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'chn-chicken-rice-noodles',
    name: 'Chicken Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 180,
    description: 'Tender chicken shreds wok-tossed with rice or noodles, spring onions, and garlic.',
    image: '/images/food/chicken-fried-rice.jpg',
    tags: ['Bestseller'],
    isVeg: false
  },
  {
    id: 'chn-beef-rice-noodles',
    name: 'Beef Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 200,
    description: 'Savory spiced beef strips tossed with rice or noodles on high flame.',
    image: '/images/food/beef-fried-rice.jpg',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'chn-mixed-rice-noodles',
    name: 'Mixed Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 230,
    description: 'Loaded wok feast containing chicken, egg, beef, and prawns tossed with rice or noodles.',
    image: '/images/food/mixed-rice-noodles.jpg',
    tags: ['Chef Pick', 'Signature Feast'],
    isVeg: false
  },
  {
    id: 'chn-schezwan-chicken-rice-noodles',
    name: 'Schezwan Chicken Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 195,
    description: 'Fiery chicken fried rice or noodles tossed in spicy house-made Schezwan red sauce.',
    image: '/images/food/schezwan-rice-noodles.jpg',
    tags: ['Spicy', 'Popular'],
    isVeg: false
  },
  {
    id: 'chn-schezwan-mixed-rice-noodles',
    name: 'Schezwan Mixed Rice / Noodles',
    category: 'chinese-rice-noodles',
    price: 235,
    description: 'Spicy Schezwan wok-tossed combination of chicken, prawns, egg, and beef.',
    image: '/images/food/schezwan-rice-noodles.jpg',
    tags: ['Spicy', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'chn-jeera-rice',
    name: 'Jeera Rice',
    category: 'chinese-rice-noodles',
    price: 170,
    description: 'Aromatic long-grain basmati rice tempered with roasted cumin seeds and pure ghee.',
    image: '/adipoo rest/CHINESE RICE  NOODLES/Steaming Jeera Rice Feast.png',
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
    image: '/images/food/naan.jpg',
    tags: ['Clay Oven'],
    isVeg: true
  },
  {
    id: 'brd-butter-naan',
    name: 'Butter Naan',
    category: 'indian-breads',
    price: 60,
    description: 'Tandoori naan brushed generously with pure churned butter.',
    image: '/images/food/butter-naan.jpg',
    tags: ['Bestseller'],
    isVeg: true
  },
  {
    id: 'brd-garlic-naan',
    name: 'Garlic Naan',
    category: 'indian-breads',
    price: 70,
    description: 'Soft tandoori naan loaded with roasted minced garlic and pure butter glaze.',
    image: '/images/food/garlic-naan.jpg',
    tags: ['Popular'],
    isVeg: true
  },
  {
    id: 'brd-mint-naan',
    name: 'Mint Naan',
    category: 'indian-breads',
    price: 70,
    description: 'Warm tandoor naan infused with aromatic crushed mint leaves.',
    image: '/menu 16-21/INDIAN BREADS/Mint Naan Feast at AdipoZhi.png',
    tags: [],
    isVeg: true
  },
  {
    id: 'brd-rotti',
    name: 'Rotti',
    category: 'indian-breads',
    price: 60,
    description: 'Whole wheat flatbread baked fresh in the clay oven.',
    image: '/menu 16-21/INDIAN BREADS/Steaming Flatbreads with Adipozhi Curry.png',
    tags: ['Healthy'],
    isVeg: true
  },
  {
    id: 'brd-butter-rotti',
    name: 'Butter Rotti',
    category: 'indian-breads',
    price: 70,
    description: 'Whole wheat tandoori rotti topped with melted butter.',
    image: '/menu 16-21/INDIAN BREADS/Butter Rotti.png',
    tags: [],
    isVeg: true
  },
  {
    id: 'brd-methi-rotti',
    name: 'Methi Rotti',
    category: 'indian-breads',
    price: 80,
    description: 'Whole wheat rotti infused with fragrant fenugreek leaves (kasuri methi).',
    image: '/menu 16-21/INDIAN BREADS/Methi Rotti with Curry and Garnishes.png',
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
    image: '/menu 16-21/INDIAN BREADS/Steaming Indian Breads with Curry and Roses.png',
    tags: ['Healthy', 'Light'],
    isVeg: true
  },
  {
    id: 'brd-kulcha',
    name: 'Kulcha',
    category: 'indian-breads',
    price: 70,
    description: 'Soft mild leavened bread baked in the tandoor with sesame seeds.',
    image: '/images/food/kulcha.jpg',
    tags: [],
    isVeg: true
  },
  {
    id: 'brd-butter-kulcha',
    name: 'Butter Kulcha',
    category: 'indian-breads',
    price: 80,
    description: 'Fluffy tandoori kulcha glazed with melted butter.',
    image: '/images/food/kulcha.jpg',
    tags: ['Popular'],
    isVeg: true
  },
  {
    id: 'brd-tandoori-parotta',
    name: 'Tandoori Parotta',
    category: 'indian-breads',
    price: 60,
    description: 'Flaky layered bread baked in the high heat of the tandoor.',
    image: '/menu 16-21/INDIAN BREADS/Steaming Tandoori Parotta Feast.png',
    tags: ['Chef Pick'],
    isVeg: true
  },
  {
    id: 'brd-stuffed-chicken-naan',
    name: 'Stuffed Chicken Naan',
    category: 'indian-breads',
    price: 130,
    description: 'Tandoori naan stuffed with spicy minced chicken and herbs.',
    image: '/menu 16-21/INDIAN BREADS/Stuffed Chicken Naan Feast.png',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'brd-stuffed-mutton-naan',
    name: 'Stuffed Mutton Naan',
    category: 'indian-breads',
    price: 150,
    description: 'Rich tandoori naan packed with spiced minced mutton filling.',
    image: '/menu 16-21/INDIAN BREADS/Stuffed Mutton Naan Feast.png',
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
    image: '/menu 16-21/DOSA VARIETIES/Crispy Roast Dosa at Adipozhi.png',
    tags: ['Classic', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-egg',
    name: 'Egg Dosa',
    category: 'dosa-varieties',
    price: 90,
    description: 'Crispy dosa spread with a spiced beaten egg, pepper, and chopped onions.',
    image: '/menu 16-21/DOSA VARIETIES/Steaming Egg Dosa with Chutneys.png',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'dosa-ghee-roast',
    name: 'Ghee Roast',
    category: 'dosa-varieties',
    price: 90,
    description: 'Paper-thin roasted dosa drizzled lavishly with fragrant melted pure desi ghee.',
    image: '/menu 16-21/DOSA VARIETIES/Steaming Ghee Roast Dosa at Adipozhi.png',
    tags: ['Bestseller', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-onion-roast',
    name: 'Onion Roast',
    category: 'dosa-varieties',
    price: 90,
    description: 'Crispy dosa topped with crunchy finely chopped shallots and green chillies.',
    image: '/menu 16-21/DOSA VARIETIES/Crispy Onion Dosa with Chutneys.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-uthappam',
    name: 'Uthappam',
    category: 'dosa-varieties',
    price: 60,
    description: 'Thick, soft, and spongy fermented rice pancake served with chutneys and sambar.',
    image: '/menu 16-21/DOSA VARIETIES/Steaming Uttapam with South Indian Chutneys.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-egg-uthappam',
    name: 'Egg Uthappam',
    category: 'dosa-varieties',
    price: 90,
    description: 'Thick spongy uthappam layered with fluffy seasoned beaten egg and pepper.',
    image: '/menu 16-21/DOSA VARIETIES/Adipozhi Signature Egg Uthappam.png',
    tags: [],
    isVeg: false
  },
  {
    id: 'dosa-onion-uthappam',
    name: 'Onion Uthappam',
    category: 'dosa-varieties',
    price: 90,
    description: 'Soft uthappam generously embedded with roasted onions and curry leaves.',
    image: '/menu 16-21/DOSA VARIETIES/Crispy Onion Uthappam Feast.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-podi',
    name: 'Podi Dosa',
    category: 'dosa-varieties',
    price: 90,
    description: 'Crisp dosa generously coated with spicy gun powder (idli podi) and pure ghee.',
    image: '/menu 16-21/DOSA VARIETIES/Crispy Dosa with Chutneys and Butter.png',
    tags: ['Spicy', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'dosa-chicken-kari',
    name: 'Chicken Kari Dosa',
    category: 'dosa-varieties',
    price: 140,
    description: 'Madurai-style thick dosa crowned with spiced minced chicken chukka and egg layer.',
    image: '/images/food/chicken-kari-dosa.jpg',
    tags: ['Chef Pick', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'dosa-mutton-kari',
    name: 'Mutton Kari Dosa',
    category: 'dosa-varieties',
    price: 180,
    description: 'Legendary thick dosa topped with rich mutton minced fry, beaten egg, and spicy salna.',
    image: '/images/food/mutton-kari-dosa.jpg',
    tags: ['Madurai Legend', 'Chef Pick'],
    isVeg: false
  },
  {
    id: 'dosa-beef-kari',
    name: 'Beef Kari Dosa',
    category: 'dosa-varieties',
    price: 160,
    description: 'Flavor-packed dosa layered with spicy beef chukka, beaten egg, and roasted pepper.',
    image: '/images/food/beef-kari-dosa.jpg',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'dosa-kal-set',
    name: 'Kal Dosa Set',
    category: 'dosa-varieties',
    price: 50,
    description: 'Pair of soft, pillowy, spongy homestyle dosas served with spicy gravy and chutneys.',
    image: '/menu 16-21/DOSA VARIETIES/Two Kal Dosas with Chutneys.png',
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
    image: '/menu 16-21/PAROTTA VARIETIES/Adipozhi Parotta Feast.png',
    tags: ['All-Time Favorite'],
    isVeg: false
  },
  {
    id: 'par-nool',
    name: 'Nool Parotta',
    category: 'parotta-varieties',
    price: 35,
    description: 'Delicate string-like multi-layered parotta with exceptional flaky crunch.',
    image: '/menu 16-21/PAROTTA VARIETIES/Steaming Nool Parotta Feast at Adipozhi.png',
    tags: ['Specialty'],
    isVeg: false
  },
  {
    id: 'par-bun',
    name: 'Bun Parotta',
    category: 'parotta-varieties',
    price: 50,
    description: 'Crispy on the outside, fluffy and buttery inside. Madurai style puff bun parotta.',
    image: '/menu 16-21/PAROTTA VARIETIES/Bun Parotta Top Down.jpg',
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
    image: '/menu 16-21/PAROTTA VARIETIES/Steaming Chapati Feast at Adipozhi.png',
    tags: ['Healthy'],
    isVeg: true
  },
  {
    id: 'par-egg-kothu',
    name: 'Egg Kothu Parotta',
    category: 'parotta-varieties',
    price: 130,
    description: 'Shredded parottas beaten vigorously on a sizzling tawa with eggs, onions, and rich spicy salna.',
    image: '/menu 16-21/PAROTTA VARIETIES/Steaming Egg Kothu Parotta at Adipozhi.png',
    tags: ['Popular Street Style'],
    isVeg: false
  },
  {
    id: 'par-chicken-kothu',
    name: 'Chicken Kothu Parotta',
    category: 'parotta-varieties',
    price: 160,
    description: 'Tawa-beaten shredded parottas with juicy chicken pieces, eggs, curry leaves, and spicy gravy.',
    image: '/menu 16-21/PAROTTA VARIETIES/Steaming Chicken Kothu Parotta Feast.png',
    tags: ['Bestseller'],
    isVeg: false
  },
  {
    id: 'par-beef-kothu',
    name: 'Beef Kothu Parotta',
    category: 'parotta-varieties',
    price: 180,
    description: 'Spicy shredded parotta chopped with tender beef pieces, caramelized onions, and fiery salna.',
    image: '/menu 16-21/PAROTTA VARIETIES/Steaming Beef Kothu at Adipozhi.png',
    tags: ['Bestseller', 'Spicy'],
    isVeg: false
  },
  {
    id: 'par-mutton-kothu',
    name: 'Mutton Kothu Parotta',
    category: 'parotta-varieties',
    price: 200,
    description: 'Chettinadu style mutton tossed with shredded parottas, eggs, and freshly cracked Tellicherry pepper.',
    image: '/menu 16-21/PAROTTA VARIETIES/Spicy Mutton Kothu Parotta Feast.png',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'par-veechu',
    name: 'Veechu Parotta',
    category: 'parotta-varieties',
    price: 30,
    description: 'Large paper-thin folded parotta flipped and roasted with ghee on tawa.',
    image: '/menu 16-21/PAROTTA VARIETIES/Veechu Parotta.jpg',
    tags: ['Crispy'],
    isVeg: false
  },
  {
    id: 'par-egg-veechu',
    name: 'Egg Veechu Parotta',
    category: 'parotta-varieties',
    price: 50,
    description: 'Thin veechu parotta stuffed with a spiced egg layer and roasted crisp.',
    image: '/menu 16-21/PAROTTA VARIETIES/Adipozhi Egg Veechu Parotta Feast.png',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'par-chilli',
    name: 'Chilli Parotta',
    category: 'parotta-varieties',
    price: 120,
    description: 'Bite-sized parotta pieces tossed Indo-Chinese style with capsicum, onions, and spicy chilli sauce.',
    image: '/menu 16-21/PAROTTA VARIETIES/Spicy Chilli Parotta at Adipozhi.png',
    tags: ['Indo-Chinese'],
    isVeg: false
  },
  {
    id: 'par-egg-lappa',
    name: 'Egg Lappa',
    category: 'parotta-varieties',
    price: 120,
    description: 'Stuffed rectangular envelope parotta filled with seasoned beaten egg and minced shallots.',
    image: '/menu 16-21/PAROTTA VARIETIES/Egg Lappa.jpg',
    tags: [],
    isVeg: false
  },
  {
    id: 'par-chicken-lappa',
    name: 'Chicken Lappa',
    category: 'parotta-varieties',
    price: 150,
    description: 'Stuffed folded parotta envelope loaded with juicy spiced minced chicken and eggs.',
    image: '/menu 16-21/PAROTTA VARIETIES/Golden Stuffed Flatbread with Curry.png',
    tags: ['Popular'],
    isVeg: false
  },
  {
    id: 'par-mutton-lappa',
    name: 'Mutton Lappa',
    category: 'parotta-varieties',
    price: 190,
    description: 'Flaky parotta square stuffed with tender minced mutton, eggs, and aromatic spices.',
    image: '/menu 16-21/PAROTTA VARIETIES/Mutton Lappa.jpg',
    tags: ['Chef Pick'],
    isVeg: false
  },
  {
    id: 'par-vaazhai-ilai-chicken',
    name: 'Vaazhai Ilai Chicken Parotta',
    category: 'parotta-varieties',
    price: 160,
    description: 'Parotta drenched in rich chicken salna and wrapped in fresh banana leaf, then tawa-steamed to infuse heavenly aroma.',
    image: '/images/food/vaazhai-ilai-parotta.jpg',
    tags: ['Banana Leaf Kizhi', 'Must Try'],
    isVeg: false
  },
  {
    id: 'par-vaazhai-ilai-beef',
    name: 'Vaazhai Ilai Beef Parotta',
    category: 'parotta-varieties',
    price: 180,
    description: 'Banana leaf wrapped beef kizhi parotta simmered in spicy salna and roasted on slow flame.',
    image: '/images/food/vaazhai-ilai-parotta.jpg',
    tags: ['Banana Leaf Kizhi', 'Bestseller'],
    isVeg: false
  },
  {
    id: 'par-vaazhai-ilai-mutton',
    name: 'Vaazhai Ilai Mutton Parotta',
    category: 'parotta-varieties',
    price: 200,
    description: 'Tender mutton curry and flaky parotta steamed in fresh banana leaf pouch.',
    image: '/images/food/vaazhai-ilai-parotta.jpg',
    tags: ['Banana Leaf Kizhi', 'Signature'],
    isVeg: false
  },
  {
    id: 'par-nest',
    name: 'Nest Parotta',
    category: 'parotta-varieties',
    price: 160,
    description: 'Intricately shaped crispy nest parotta holding spicy chicken fry and sunny egg.',
    image: '/menu 16-21/PAROTTA VARIETIES/Nest Parotta.jpg',
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
    image: '/menu 16-21/FRESH JUICE/AdipoZhi Lemon Mint Cooler.png',
    tags: ['Fresh', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'juc-lemon-soda',
    name: 'Lemon Soda',
    category: 'fresh-juice',
    price: 70,
    description: 'Sparkling club soda with fresh lime juice, sweet or salted as you prefer.',
    image: '/menu 16-21/FRESH JUICE/Sparkling Lemon Soda with Club Soda Bottle.jpg',
    tags: ['Refreshing', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'juc-lemon-mint',
    name: 'Lemon Mint',
    category: 'fresh-juice',
    price: 70,
    description: 'Crushed garden mint muddled with fresh lemon juice and chilled soda/water.',
    image: '/menu 16-21/FRESH JUICE/Vibrant Lemon Mint Cooler on Wood.png',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'juc-watermelon',
    name: 'Water Melon',
    category: 'fresh-juice',
    price: 80,
    description: '100% pure freshly pressed sweet red watermelon juice served ice cold.',
    image: '/menu 16-21/FRESH JUICE/Watermelon Mint Cooler with Roses.png',
    tags: ['Pure Fruit', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'juc-pineapple',
    name: 'Pine Apple',
    category: 'fresh-juice',
    price: 90,
    description: 'Fresh tropical pineapple juice blended cold with a hint of black salt.',
    image: '/menu 16-21/FRESH JUICE/Refreshing Pineapple Juice with Mint.png',
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
    image: '/menu 16-21/MOJITO/Blue Mojito Amid Roses and Citrus.png',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-lemon-mint',
    name: 'Lemon Mint',
    category: 'mojitos',
    price: 90,
    description: 'Classic Cuban-style virgin mojito muddled with lime wedges, mint leaves, and brown sugar.',
    image: '/menu 16-21/FRESH JUICE/Vibrant Lemon Mint Cooler on Wood.png',
    tags: ['Classic', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-red-wine',
    name: 'Red Wine',
    category: 'mojitos',
    price: 90,
    description: 'Deep ruby non-alcoholic grape and berry infusion layered with mint and fizz.',
    image: '/menu 16-21/MOJITO/Ruby Pomegranate Mint Cooler.png',
    tags: ['Specialty', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-kiwi',
    name: 'Kiwi',
    category: 'mojitos',
    price: 100,
    description: 'Muddled real green kiwi pulp, fresh lime, mint sprigs, and chilled effervescent soda.',
    image: '/menu 16-21/MOJITO/Kiwi Mint Lemonade at Adipozhi.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-green-apple',
    name: 'Green Apple',
    category: 'mojitos',
    price: 110,
    description: 'Crisp green apple essence shaken with fresh mint, lime, and sparkling splash.',
    image: '/menu 16-21/MOJITO/Emerald Mint Apple Cocktail at Adipozhi.png',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'moj-vodka-mocktail',
    name: 'Vodka',
    category: 'mojitos',
    price: 120,
    description: 'Signature virgin botanical mocktail with spicy ginger, citrus notes, and crushed ice.',
    image: '/menu 16-21/FRESH JUICE/AdipoZhi Lemon Mint Cooler.png',
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
    image: '/menu 16-21/ICE CREAMS/Vanilla Rose Dessert Showcase.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-butterscotch',
    name: 'Butterscotch',
    category: 'ice-creams',
    price: 100,
    description: 'Velvety butterscotch ice cream with crunchy golden caramel praline crunch.',
    image: '/menu 16-21/ICE CREAMS/Butterscotch Sundae at Adipozhi.png',
    tags: ['Popular', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-strawberry',
    name: 'Strawberry',
    category: 'ice-creams',
    price: 100,
    description: 'Refreshing pink strawberry ice cream scoop with real berry notes.',
    image: '/menu 16-21/ICE CREAMS/Strawberry Sundae at AdipoZhi.png',
    tags: ['Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-chocolate',
    name: 'Chocolate',
    category: 'ice-creams',
    price: 100,
    description: 'Rich dark Dutch cocoa chocolate ice cream scoop.',
    image: '/menu 16-21/ICE CREAMS/Decadent Chocolate Rose Café Sundae.png',
    tags: ['Bestseller', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-mango',
    name: 'Mango',
    category: 'ice-creams',
    price: 120,
    description: 'Tropical rich Alphonso mango ice cream scoop bursting with real fruit pulp.',
    image: '/menu 16-21/ICE CREAMS/Mango Ice Cream Amid Roses.png',
    tags: ['Seasonal', 'Vegetarian'],
    isVeg: true
  },
  {
    id: 'ice-black-current',
    name: 'Black Current',
    category: 'ice-creams',
    price: 120,
    description: 'Exotic purple black currant ice cream with sweet and tangy berry swirls.',
    image: '/menu 16-21/ICE CREAMS/Vanilla Rose Dessert Showcase.png',
    tags: ['Chef Pick', 'Vegetarian'],
    isVeg: true
  }
];

export const STATISTICS = [
  { value: '4.7', label: 'Google Rating ★' },
  { value: '284', label: 'Google Reviews' },
  { value: '21', label: 'Menu Categories' },
  { value: '2', label: 'Mins from Bus Stand' }
];
