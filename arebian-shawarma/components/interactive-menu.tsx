'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Sparkles } from 'lucide-react';

const SPREADS = [
  {
    id: 0,
    tabLabel: 'Grills & Wraps',
    leftPage: {
      category: 'Shawarma',
      title: 'Rotisserie Spits & Grills',
      subtitle: 'Charcoal Roasted Delicacies',
      items: [
        {
          name: 'Classic Chicken Saj',
          price: '₹189',
          rating: 4.9,
          desc: 'Spiced chicken shavings, pickles, fries, and garlic toum wrapped in thin Saj bread.',
        },
        {
          name: 'Gourmet Mutton Pita',
          price: '₹249',
          rating: 4.8,
          desc: 'Spiced mutton carvings, onions, tomatoes, and organic sesame tahini packed inside pita pockets.',
        },
        {
          name: 'Fiery Mexican Saj',
          price: '₹199',
          rating: 4.7,
          desc: 'Succulent chicken shawarma shavings tossed in jalapeños, spicy harissa spread, and melted cheese.',
        },
      ],
    },
    rightPage: {
      category: 'Wraps',
      title: 'Artisanal Saj Wraps',
      subtitle: 'Hand-Rolled Fresh Flatbreads',
      items: [
        {
          name: 'Classic Falafel Wrap',
          price: '₹129',
          rating: 4.6,
          desc: 'Crispy fried chickpeas patties, mint leaves, tomatoes, pickled turnips, and tahini in flatbread.',
        },
        {
          name: 'Crispy Paneer Saj',
          price: '₹169',
          rating: 4.7,
          desc: 'Marinated paneer cubes in middle-eastern dry spices, grilled peppers, and garlic yogurt.',
        },
      ],
    },
  },
  {
    id: 1,
    tabLabel: 'Platters & Burgers',
    leftPage: {
      category: 'Platters',
      title: 'Sharing Platters',
      subtitle: 'Grand Feasts For The Table',
      items: [
        {
          name: 'Royal Mixed Platter',
          price: '₹449',
          rating: 4.9,
          desc: 'Generous serving of chicken & mutton carvings, golden chips, hummus, garlic paste, pickles, and pita.',
        },
        {
          name: 'Arabic Falafel Plate',
          price: '₹299',
          rating: 4.7,
          desc: '6 pieces of crispy falafel, tabbouleh salad, hummus dip, garlic toum, olives, and two fresh pita breads.',
        },
      ],
    },
    rightPage: {
      category: 'Burgers',
      title: 'Signature Burgers',
      subtitle: 'Flame Grilled Fusion Buns',
      items: [
        {
          name: 'Spicy Zinger Burger',
          price: '₹149',
          rating: 4.8,
          desc: 'Crunchy breaded chicken fillet, double cheddar, shredded lettuce, and spicy secret dressing.',
        },
        {
          name: 'Charcoal Shawarma Burger',
          price: '₹179',
          rating: 4.9,
          desc: 'Juicy beef and lamb patty topped with shredded chicken shawarma, garlic toum, and onions.',
        },
      ],
    },
  },
  {
    id: 2,
    tabLabel: 'Sides & Drinks',
    leftPage: {
      category: 'Fries',
      title: 'Crispy Sides & Fries',
      subtitle: 'Hot & Golden Companions',
      items: [
        {
          name: 'Spiced Peri Peri Fries',
          price: '₹119',
          rating: 4.6,
          desc: 'Thin-cut golden french fries tossed in aromatic African Peri-Peri spices, served with garlic dip.',
        },
        {
          name: 'Shawarma Loaded Fries',
          price: '₹199',
          rating: 4.9,
          desc: 'Thick hot fries layered with shredded chicken, melted liquid cheese, dynamic hot sauce, and spring herbs.',
        },
      ],
    },
    rightPage: {
      category: 'Drinks',
      title: 'Specialty Beverages',
      subtitle: 'Ice Blended & Sand-Brewed',
      items: [
        {
          name: 'Authentic Mint Lemonade',
          price: '₹89',
          rating: 4.8,
          desc: 'Ice-blended refreshing fresh lemon juice, crushed spearmint leaves, and organic sugar syrup.',
        },
        {
          name: 'Rich Turkish Coffee',
          price: '₹119',
          rating: 4.9,
          desc: 'Traditional strong dark coffee brewed slowly in sand, infused with aromatic cardamom seeds.',
        },
      ],
    },
  },
];

export default function InteractiveMenu() {
  const [activeSpread, setActiveSpread] = useState(0);
  const [direction, setDirection] = useState(1); // 1: forward, -1: backward

  const handleSpreadChange = (newSpread: number) => {
    if (newSpread > activeSpread) {
      setDirection(1);
    } else if (newSpread < activeSpread) {
      setDirection(-1);
    }
    setActiveSpread(newSpread);
  };

  const currentSpread = SPREADS[activeSpread];

  return (
    <section id="menu" className="relative py-8 md:py-24 bg-brand-secondary/20 px-6 md:px-12 overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-2 md:mb-3">
            Explore Flavors
          </span>
          <h2 className="font-playfair text-2xl md:text-5xl font-black text-brand-white uppercase">
            Signature <span className="text-gold-gradient">Menu</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mt-3 md:mt-4" />
          <p className="font-poppins text-brand-muted text-xs md:text-base max-w-lg mt-3 md:mt-4 leading-relaxed">
            Flip through our handcrafted royal restaurant menu book to discover authentic Middle Eastern flavors.
          </p>
        </div>

        {/* Bookmarks Tab Ribbons Wrapper */}
        <div className="flex justify-center gap-2.5 md:gap-8 mb-6 md:mb-10 z-20 relative">
          {SPREADS.map((spread) => {
            const isActive = activeSpread === spread.id;
            return (
              <button
                key={spread.id}
                onClick={() => handleSpreadChange(spread.id)}
                className={`relative px-3.5 sm:px-6 py-2.5 md:py-4 font-montserrat text-[9px] md:text-xs font-bold tracking-widest uppercase cursor-pointer select-none transition-all duration-300 ${
                  isActive 
                    ? 'text-brand-primary bg-gold-gradient shadow-lg translate-y-1' 
                    : 'text-brand-gold bg-[#3B2417] hover:bg-[#4d3020] border border-brand-gold/20 hover:border-brand-gold/40'
                } rounded-b-2xl rounded-t-sm shadow-md flex items-center justify-center`}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)',
                  minHeight: '45px'
                }}
              >
                <span>{spread.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Royal flat-open menu book container */}
        <div className="relative max-w-4xl mx-auto bg-[#3b2417] p-2.5 sm:p-5 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-4 border-[#25150d] overflow-hidden">
          {/* Inner gold frame border */}
          <div className="absolute inset-4 border border-[#D4A44D]/20 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none z-10" />

          {/* Golden cover corners ornaments */}
          <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-brand-gold/30 rounded-tl-lg pointer-events-none z-10" />
          <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-brand-gold/30 rounded-tr-lg pointer-events-none z-10" />
          <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-brand-gold/30 rounded-bl-lg pointer-events-none z-10" />
          <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-brand-gold/30 rounded-br-lg pointer-events-none z-10" />

          {/* Book Sheets turning wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpread}
              initial={{ opacity: 0, rotateY: direction === 1 ? 40 : -40, scale: 0.96 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: direction === 1 ? -40 : 40, scale: 0.96 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ transformOrigin: 'center center' }}
              className="flex flex-col md:flex-row relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl bg-[#FCF9F2] text-[#2B1B12] [perspective:1500px] transform-gpu"
            >
              {/* Vertical Crease shadow overlay (visible on desktop side-by-side spreads) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/25 to-transparent pointer-events-none z-20" />
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-black/40 pointer-events-none z-20" />

              {/* LEFT PAGE: Primary Category */}
              <div className="w-full md:w-1/2 p-4 sm:p-10 flex flex-col justify-between min-h-[340px] md:min-h-[460px] relative border-b md:border-b-0 md:border-r border-brand-secondary/15">
                {/* Paper corners decoration */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/30 pointer-events-none" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-gold/30 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-gold/30 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/30 pointer-events-none" />

                {/* Page Contents */}
                <div>
                  <div className="text-center mb-4 md:mb-6 pt-2">
                    {/* Flourish */}
                    <div className="flex justify-center mb-1.5 md:mb-2">
                      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="opacity-30">
                        <path d="M0 6 C10 0, 10 12, 20 6 C30 0, 30 12, 40 6" stroke="#AD6C22" strokeWidth="1" />
                        <circle cx="20" cy="6" r="2" fill="#D4A44D" />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-lg md:text-2xl font-black text-brand-secondary uppercase tracking-wide">
                      {currentSpread.leftPage.title}
                    </h3>
                    <p className="font-montserrat text-[8px] md:text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] mt-1">
                      {currentSpread.leftPage.subtitle}
                    </p>
                  </div>

                  {/* Items List */}
                  <div className="space-y-3 md:space-y-6 mt-2 md:mt-4">
                    {currentSpread.leftPage.items.map((item, i) => (
                      <div 
                        key={i}
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group/item py-1.5 md:py-2.5 cursor-pointer rounded-lg hover:bg-brand-gold/5 px-2 transition-colors duration-200"
                      >
                        <div className="flex items-baseline gap-2">
                          <h4 className="font-playfair text-[#3B2417] font-bold text-xs md:text-base group-hover/item:text-brand-gold transition-colors duration-200">
                            {item.name}
                          </h4>
                          <span className="flex-1 border-b border-dotted border-[#3B2417]/25 min-w-[15px]"></span>
                          <span className="font-montserrat text-[#3B2417] font-black text-xs md:text-base">
                            {item.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <p className="font-poppins text-[#784013] text-[10px] md:text-[11px] leading-relaxed max-w-[85%]">
                            {item.desc}
                          </p>
                          <span className="text-[9px] md:text-[10px] text-brand-gold font-bold font-montserrat flex items-center gap-0.5 shrink-0">
                            <Star className="w-2.5 h-2.5 fill-brand-gold stroke-brand-gold" />
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Page Footer */}
                <div className="flex justify-between items-center mt-6 md:mt-8 pt-3 md:pt-4 border-t border-brand-secondary/10">
                  <span className="font-montserrat text-[8px] font-bold text-brand-gold uppercase tracking-[0.2em]">
                    Arabian Shawarma
                  </span>
                  <span className="font-playfair text-xs font-bold text-[#784013]/60 italic">
                    Page {activeSpread * 2 + 1}
                  </span>
                </div>
              </div>

              {/* RIGHT PAGE: Secondary Category */}
              <div className="w-full md:w-1/2 p-4 sm:p-10 flex flex-col justify-between min-h-[340px] md:min-h-[460px] relative">
                {/* Paper corners decoration */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/30 pointer-events-none" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-gold/30 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-gold/30 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/30 pointer-events-none" />

                {/* Page Contents */}
                <div>
                  <div className="text-center mb-4 md:mb-6 pt-2">
                    {/* Flourish */}
                    <div className="flex justify-center mb-1.5 md:mb-2">
                      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="opacity-30">
                        <path d="M0 6 C10 0, 10 12, 20 6 C30 0, 30 12, 40 6" stroke="#AD6C22" strokeWidth="1" />
                        <circle cx="20" cy="6" r="2" fill="#D4A44D" />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-lg md:text-2xl font-black text-brand-secondary uppercase tracking-wide">
                      {currentSpread.rightPage.title}
                    </h3>
                    <p className="font-montserrat text-[8px] md:text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] mt-1">
                      {currentSpread.rightPage.subtitle}
                    </p>
                  </div>

                  {/* Items List */}
                  <div className="space-y-3 md:space-y-6 mt-2 md:mt-4">
                    {currentSpread.rightPage.items.map((item, i) => (
                      <div 
                        key={i}
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group/item py-1.5 md:py-2.5 cursor-pointer rounded-lg hover:bg-brand-gold/5 px-2 transition-colors duration-200"
                      >
                        <div className="flex items-baseline gap-2">
                          <h4 className="font-playfair text-[#3B2417] font-bold text-xs md:text-base group-hover/item:text-brand-gold transition-colors duration-200">
                            {item.name}
                          </h4>
                          <span className="flex-1 border-b border-dotted border-[#3B2417]/25 min-w-[15px]"></span>
                          <span className="font-montserrat text-[#3B2417] font-black text-xs md:text-base">
                            {item.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <p className="font-poppins text-[#784013] text-[10px] md:text-[11px] leading-relaxed max-w-[85%]">
                            {item.desc}
                          </p>
                          <span className="text-[9px] md:text-[10px] text-brand-gold font-bold font-montserrat flex items-center gap-0.5 shrink-0">
                            <Star className="w-2.5 h-2.5 fill-brand-gold stroke-brand-gold" />
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Page Footer */}
                <div className="flex justify-between items-center mt-6 md:mt-8 pt-3 md:pt-4 border-t border-brand-secondary/10">
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="font-montserrat text-[8px] font-bold text-brand-gold hover:text-brand-secondary uppercase tracking-[0.2em] flex items-center gap-1 transition-colors group/order"
                  >
                    <span>Click Item to Order</span>
                    <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover/order:translate-x-1" />
                  </button>
                  <span className="font-playfair text-xs font-bold text-[#784013]/60 italic">
                    Page {activeSpread * 2 + 2}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small gold sparkle reminder under the book */}
        <div className="flex justify-center items-center gap-1.5 mt-6 md:mt-8 text-brand-gold/40 text-[9px] tracking-[0.25em] font-montserrat uppercase select-none pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Charcoal Grilled • Organic Herbs</span>
        </div>
      </div>
    </section>
  );
}
