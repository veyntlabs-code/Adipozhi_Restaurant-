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
    default: 'Adipozhi Family Restaurant | Best Biryani & Family Dining in Monday Market',
    template: '%s | Adipozhi Family Restaurant',
  },
  description:
    'Adipozhi Family Restaurant in Monday Market serves authentic dum biryani, Arabian Al-Faham grills, Chettinadu masalas, bun parotta, kari dosa & more. Dine-in, takeaway & family packs available. Call 04651-222-333.',
  keywords: [
    'Adipozhi', 'family restaurant', 'Monday Market', 'biryani', 'Al-Faham',
    'Chettinadu', 'bun parotta', 'kari dosa', 'chicken 65', 'family dining',
    'Nagercoil restaurants', 'South Indian food', 'Arabian grill', 'best biryani Monday Market',
  ],
  authors: [{ name: 'Adipozhi Family Restaurant' }],
  creator: 'Adipozhi Family Restaurant',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adipozhi.com',
    siteName: 'Adipozhi Family Restaurant',
    title: 'Adipozhi Family Restaurant | Best Biryani & Family Dining in Monday Market',
    description:
      'Premium family dining with authentic dum biryani, Arabian Al-Faham, Chettinadu specials, bun parottas & more in Monday Market.',
    images: [
      {
        url: '/hero_biryani.jpg',
        width: 1200,
        height: 630,
        alt: 'Adipozhi Family Restaurant - Authentic Dum Biryani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adipozhi Family Restaurant | Monday Market',
    description: 'Best biryani, Al-Faham grills & family dining in Monday Market.',
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
  metadataBase: new URL('https://adipozhi.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${scriptFont.variable} ${graffitiFont.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
