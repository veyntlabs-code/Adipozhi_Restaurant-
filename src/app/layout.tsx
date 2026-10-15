import type { Metadata } from 'next';
import { Playfair_Display, Outfit, Kaushan_Script, Sedgwick_Ave_Display } from 'next/font/google';
import './globals.css';
import { AppShell } from '@/components/AppShell';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const scriptFont = Kaushan_Script({
  variable: '--font-script',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

const graffitiFont = Sedgwick_Ave_Display({
  variable: '--font-graffiti',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    default: 'Adipozhi Family Restaurant | Best Restaurant & Biryani in Monday Market',
    template: '%s | Adipozhi Family Restaurant',
  },
  description:
    'Adipozhi Family Restaurant (அடிப்பொழி பேமிலி ரெஸ்டாரண்ட்) is the top-rated family restaurant in Monday Market, Kanyakumari. Serving authentic Dum Biryani, Arabian Al-Faham charcoal grills, Madurai Bun Parotta, Kari Dosa, and Chettinadu gravy. AC family dining, express parcel & takeaway available.',
  keywords: [
    'Adipozhi',
    'Adipozhi Family Restaurant',
    'Best restaurant in Monday Market',
    'Best family restaurant in Monday Market',
    'Best hotel in Monday Market',
    'Best biryani in Monday Market',
    'Monday Market restaurants',
    'Thingal Nagar restaurants',
    'Best non veg restaurant Monday Market',
    'Dum Biryani Monday Market',
    'Al-Faham Monday Market',
    'Bun Parotta Monday Market',
    'Family dining Monday Market',
    'AC restaurant Monday Market',
    'Restaurants near Colachel',
    'Restaurants near Thuckalay',
    'Restaurants near Eraniel',
    'Kanyakumari best food',
    'South Indian restaurant Kanyakumari',
    'அடிப்பொழி',
    'அடிப்பொழி பேமிலி ரெஸ்டாரண்ட்'
  ],
  authors: [{ name: 'Adipozhi Family Restaurant', url: 'https://adipozhi.in' }],
  creator: 'Adipozhi Family Restaurant',
  publisher: 'Adipozhi Family Restaurant',
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: 'https://adipozhi.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adipozhi.in',
    siteName: 'Adipozhi Family Restaurant',
    title: 'Adipozhi Family Restaurant | Best Restaurant & Biryani in Monday Market',
    description:
      'Top-rated family restaurant at Monday Market Bus Stand Arch. Authentic Dum Biryani, Arabian Charcoal Grills, Bun Parotta, AC Family Hall & Bucket Biryani.',
    images: [
      {
        url: '/hero_biryani.jpg',
        width: 1200,
        height: 630,
        alt: 'Adipozhi Family Restaurant - Authentic Dum Biryani & Family Dining',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adipozhi Family Restaurant | Best Restaurant & Biryani in Monday Market',
    description: 'Top-rated family dining with authentic dum biryani, Arabian Al-Faham, bun parottas & Chettinadu masalas in Monday Market.',
    images: ['/hero_biryani.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Monday Market, Kanyakumari',
    'geo.position': '8.2004001;77.3039514',
    'ICBM': '8.2004001, 77.3039514',
  },
  metadataBase: new URL('https://adipozhi.in'),
};

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Restaurant', 'FoodEstablishment', 'LocalBusiness'],
      '@id': 'https://adipozhi.in/#restaurant',
      name: 'Adipozhi Family Restaurant',
      alternateName: [
        'அடிப்பொழி பேமிலி ரெஸ்டாரண்ட்',
        'Adipozhi Restaurant',
        'Adipozhi Hotel Monday Market',
        'Adipozhi Biryani Monday Market',
        'Adipozhi Non Veg Restaurant'
      ],
      description: 'Top-rated family restaurant in Monday Market, Kanyakumari. Serving authentic Dum Biryani cooked in heavy handis, live charcoal Arabian Al-Faham, Madurai Bun Parotta, Kari Dosa, and Chettinadu special gravies in an air-conditioned family hall.',
      image: [
        'https://adipozhi.in/hero_biryani.jpg',
        'https://adipozhi.in/premium-interior.jpg',
        'https://adipozhi.in/images/roses/logo-wall.jpg'
      ],
      url: 'https://adipozhi.in',
      telephone: '+919585154254',
      priceRange: '₹₹ (₹100 - ₹500 per person)',
      menu: 'https://adipozhi.in/menus/regular',
      hasMenu: 'https://adipozhi.in/menus/regular',
      servesCuisine: [
        'South Indian',
        'Chettinad',
        'Biryani',
        'Arabian Grill',
        'Tandoori',
        'Chinese',
        'Indian'
      ],
      acceptsReservations: 'True',
      paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe, Paytm',
      currenciesAccepted: 'INR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bus stand Entrance Arch, Monday Market',
        addressLocality: 'Monday Market',
        addressRegion: 'Tamil Nadu',
        postalCode: '629802',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 8.2004001,
        longitude: 77.3039514,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '11:00',
          closes: '23:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '284',
        reviewCount: '284',
      },
      hasMap: 'https://www.google.com/maps/place/ADIPOZHI+FAMILY+RESTAURANT/@8.2004001,77.3013765,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f9f8178ae3dd:0xf4d52f55155a3a3b!8m2!3d8.2004001!4d77.3039514!16s%2Fg%2F11w2_3m_78',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Air Conditioned AC Family Dining Hall',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Takeaway & Express Parcel Counter',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Party & Celebration Booking',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Live Charcoal BBQ Grill Counter',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Free Vehicle Parking Space',
          value: true,
        },
      ],
      sameAs: [
        'https://www.google.com/maps/place/ADIPOZHI+FAMILY+RESTAURANT/@8.2004001,77.3013765,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f9f8178ae3dd:0xf4d52f55155a3a3b!8m2!3d8.2004001!4d77.3039514!16s%2Fg%2F11w2_3m_78',
        'https://www.swiggy.com/city/nagercoil/adipozhi-family-restaurant-colachel-monday-market-rest1346460',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adipozhi.in/#website',
      url: 'https://adipozhi.in',
      name: 'Adipozhi Family Restaurant',
      description: 'Official website of Adipozhi Family Restaurant, Monday Market',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://adipozhi.in/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best family restaurant in Monday Market, Kanyakumari?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adipozhi Family Restaurant is the highest rated family restaurant in Monday Market (4.7★ from 284+ Google reviews). It is renowned for its authentic Dum Biryani, live charcoal Arabian Al-Faham, Madurai Bun Parotta, and spacious AC family dining.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Adipozhi Restaurant located in Monday Market?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adipozhi Family Restaurant is located right at the Bus Stand Entrance Arch, Monday Market, Tamil Nadu 629802, easily accessible from Colachel, Thuckalay, and Eraniel.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Adipozhi Family Restaurant offer home delivery and takeaway parcels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Adipozhi offers express takeaway parcel counters, full and half bucket biryani packs, and online delivery through Swiggy and Kumari Foodie.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the dining hours at Adipozhi Family Restaurant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adipozhi is open daily from 11:00 AM to 11:00 PM for dine-in, takeaway, and delivery.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${scriptFont.variable} ${graffitiFont.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
