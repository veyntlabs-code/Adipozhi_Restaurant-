'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Star, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import ReviewSlider from './ReviewSlider';

interface WaitingForSectionProps {
  onOpenReservation: () => void;
  lang: 'en' | 'fr';
}

export const WaitingForSection: React.FC<WaitingForSectionProps> = ({
  onOpenReservation,
  lang
}) => {
  return (
    <section className="bg-[#f8efdc] text-[#1a1a1a] py-20 lg:py-28 border-b border-[#1a1a1a]/10 text-center overflow-hidden relative select-none">

      {/* Full Screen Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -top-40 -right-20 w-[600px] h-[600px] bg-[#de2b2b]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -80, 0]
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -left-40 w-[800px] h-[800px] bg-[#e4a853]/15 rounded-full blur-[120px]"
        />

        {/* Endless Scrolling Text Marquee (Subtle) */}
        <div className="absolute inset-0 flex flex-col justify-center gap-32 opacity-[0.03]">
          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            className="whitespace-nowrap font-black text-[8rem] sm:text-[12rem] tracking-tight text-[#1a1a1a]"
          >
            5 STARS · 5 STARS · 5 STARS · 5 STARS · 5 STARS · 5 STARS · 5 STARS · 5 STARS · 5 STARS · 5 STARS ·
          </motion.div>
          <motion.div
            animate={{ x: [-1500, 0] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="whitespace-nowrap font-black text-[8rem] sm:text-[12rem] tracking-tight text-[#de2b2b]"
          >
            ADIPOZHI FAMILY RESTAURANT · TASTE THE AUTHENTIC FLAVOURS · MONDAY MARKET · ADIPOZHI FAMILY RESTAURANT ·
          </motion.div>
        </div>

        {/* Background Rotating Compass / Seal (Kept for extra detail) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] w-[480px] h-[480px]">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            className="w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="45" stroke="#de2b2b" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <path
              id="waitCirclePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="transparent"
            />
            <text className="text-[7px] uppercase font-bold tracking-widest fill-[#de2b2b]">
              <textPath href="#waitCirclePath" startOffset="0%">
                · ADIPOZHI FAMILY RESTAURANT · MONDAY MARKET · 4.7★ RATED · TASTY BIRYANI ·
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#de2b2b]/10 text-xs font-bold uppercase tracking-wider text-[#de2b2b]">
          <Star className="w-3.5 h-3.5 fill-[#de2b2b]" />
          <span>4.7 ★ 284 Google Reviews</span>
        </div>

        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#de2b2b]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Taste the Authentic Flavours
        </h2>

        <p className="text-base sm:text-xl text-[#1a1a1a]/80 max-w-2xl mx-auto font-light leading-relaxed">
          {RESTAURANT_INFO.tagline} Drop in with your family for an unforgettable meal or order your hot parcel Full bucket biryani with 1/2 KG free Chicken 65.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#1a1a1a]/70">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#de2b2b]" />
            {RESTAURANT_INFO.address}
          </span>
          <span>•</span>
          <span>{RESTAURANT_INFO.hours}</span>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 25px -5px rgba(222, 43, 43, 0.25)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenReservation}
            className="px-8 py-4 bg-[#de2b2b] text-[#f8efdc] hover:bg-[#b01e1e] font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </motion.button>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="px-7 py-4 bg-white text-[#de2b2b] border border-[#de2b2b]/30 hover:border-[#de2b2b] font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
        </div>

        {/* Google Reviews Slider */}
        <div className="pt-16 mt-8 w-full relative z-10 h-[400px] sm:h-[420px] -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full overflow-visible">
          <ReviewSlider
            direction="left"
            slideWidth={280}
            slideHeight={320}
            spacing={1.5}
            dim={4}
            background="transparent"
            items={[
              {
                name: "Sri Hari",
                time: "5 months ago",
                text: "Had a great experience at Adipozhi! I tried their chicken biryani and chicken 65 — both were absolutely delicious, full of flavor, and cooked perfectly. The ambience was really nice and the place was clean and well maintained.",
                highlight: false
              },
              {
                name: "Monika Rashmi",
                time: "4 months ago",
                text: "They have very nice ambience to eat... I ate chicken lappa and chicken kothu parotta which is too good to eat with hariyali kebab and kalimirich tikka which is their absolute signature dish.... Thanks for the experience ❤️",
                highlight: true
              },
              {
                name: "Janani",
                time: "6 months ago",
                text: "Had a fantastic time here with delicious food. Every dish we tried was worth it. The biryani and chicken items were outstanding. Service was smooth and quick. Definitely a place to revisit! ⭐⭐⭐⭐⭐",
                highlight: false
              },
              {
                name: "Krishna Gayathri",
                time: "4 months ago",
                text: "It was good experience here we tried butterfly chicken it was very nice and it's good for children to eat. Very good ambience.",
                highlight: false
              },
              {
                name: "Genisha Genisha",
                time: "4 months ago",
                text: "Family aa first time inga vanthom good experience food taste and quality nala irunthu, Enna vida family members enjoy pananga, service nala irunthu avangalum nala pesi kavanikuranga. kadaisiya juice kuduthanga vera level 🍹🥰",
                highlight: true
              },
              {
                name: "Chakki Visha",
                time: "4 months ago",
                text: "We order Schezwan noodles... Delicious taste 😋 i love this restaurant ambiance also ...must try 🔥",
                highlight: false
              }
            ].map((review, idx) => (
              <div
                key={idx}
                className={`relative p-6 sm:p-8 rounded-3xl shadow-lg border h-full flex flex-col justify-between ${review.highlight
                  ? 'bg-[#de2b2b] text-[#f8efdc] border-[#de2b2b] shadow-[#de2b2b]/30'
                  : 'bg-white text-[#1a1a1a] border-[#1a1a1a]/5'
                  }`}
              >
                {/* Large Background Quote Watermark */}
                <span className={`absolute top-2 right-4 text-8xl font-serif leading-none opacity-10 pointer-events-none select-none ${review.highlight ? 'text-black' : 'text-[#de2b2b]'}`}>
                  "
                </span>

                <div className="flex flex-col h-full z-10 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-inner shrink-0 ${review.highlight ? 'bg-black/20 text-white' : 'bg-[#de2b2b]/10 text-[#de2b2b]'
                      }`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">{review.name}</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 fill-current ${review.highlight ? 'text-[#f8efdc]' : 'text-[#de2b2b]'}`} />
                        ))}
                        <span className={`text-[10px] sm:text-xs ml-1 ${review.highlight ? 'text-[#f8efdc]/70' : 'text-[#1a1a1a]/50'}`}>
                          {review.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={`text-sm font-light leading-relaxed flex-1 ${review.highlight ? 'text-[#f8efdc]/95' : 'text-[#1a1a1a]/70'}`}>
                    "{review.text}"
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest pt-4 border-t border-black/5">
                    {review.highlight ? (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3179 10.3621C21.3179 9.60833 21.2581 8.87574 21.1384 8.16333H12V12.3275H17.2185C16.9936 13.6811 16.2163 14.832 15.0601 15.6023V18.3146H18.2045C20.0463 16.6186 21.3179 13.7225 21.3179 10.3621Z" fill="#f8efdc" />
                        <path d="M12.0001 19.8499C14.6181 19.8499 16.8202 18.9832 18.2046 18.3146L15.0601 15.6022C14.3093 16.104 13.2384 16.4253 12.0001 16.4253C9.60882 16.4253 7.57539 14.8105 6.8402 12.6373H3.59326V15.4262C5.1432 18.508 8.33703 19.8499 12.0001 19.8499Z" fill="#f8efdc" />
                        <path d="M6.8398 12.6373C6.6521 12.0792 6.5444 11.4883 6.5444 10.8804C6.5444 10.2724 6.6521 9.68149 6.8398 9.12338V6.33447H3.59286C2.9464 7.62589 2.58008 9.10091 2.58008 10.8804C2.58008 12.6598 2.9464 14.1349 3.59286 15.4263L6.8398 12.6373Z" fill="#f8efdc" />
                        <path d="M12.0001 5.33534C13.4254 5.33534 14.7042 5.82622 15.7118 6.78652L18.2725 4.22584C16.8166 2.87116 14.6145 2.0166 12.0001 2.0166C8.33703 2.0166 5.1432 3.35852 3.59326 6.44026L6.8402 9.22917C7.57539 7.05602 9.60882 5.33534 12.0001 5.33534Z" fill="#f8efdc" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3179 10.3621C21.3179 9.60833 21.2581 8.87574 21.1384 8.16333H12V12.3275H17.2185C16.9936 13.6811 16.2163 14.832 15.0601 15.6023V18.3146H18.2045C20.0463 16.6186 21.3179 13.7225 21.3179 10.3621Z" fill="#4285F4" />
                        <path d="M12.0001 19.8499C14.6181 19.8499 16.8202 18.9832 18.2046 18.3146L15.0601 15.6022C14.3093 16.104 13.2384 16.4253 12.0001 16.4253C9.60882 16.4253 7.57539 14.8105 6.8402 12.6373H3.59326V15.4262C5.1432 18.508 8.33703 19.8499 12.0001 19.8499Z" fill="#34A853" />
                        <path d="M6.8398 12.6373C6.6521 12.0792 6.5444 11.4883 6.5444 10.8804C6.5444 10.2724 6.6521 9.68149 6.8398 9.12338V6.33447H3.59286C2.9464 7.62589 2.58008 9.10091 2.58008 10.8804C2.58008 12.6598 2.9464 14.1349 3.59286 15.4263L6.8398 12.6373Z" fill="#FBBC05" />
                        <path d="M12.0001 5.33534C13.4254 5.33534 14.7042 5.82622 15.7118 6.78652L18.2725 4.22584C16.8166 2.87116 14.6145 2.0166 12.0001 2.0166C8.33703 2.0166 5.1432 3.35852 3.59326 6.44026L6.8402 9.22917C7.57539 7.05602 9.60882 5.33534 12.0001 5.33534Z" fill="#EA4335" />
                      </svg>
                    )}
                    <span className={review.highlight ? 'text-[#f8efdc]/80' : 'text-[#1a1a1a]/40'}>Google Review</span>
                  </div>
                </div>
              </div>
            ))}
          />
        </div>
      </motion.div>
    </section>
  );
};

