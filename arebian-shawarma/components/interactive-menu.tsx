'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = ['Shawarma', 'Wraps', 'Platters', 'Burgers', 'Fries', 'Drinks'];

const MENU_ITEMS = [
  // Shawarmas
  {
    name: 'Classic Chicken Saj',
    category: 'Shawarma',
    price: '₹189',
    rating: 4.9,
    image: '/images/chicken_wrap.png',
    desc: 'Spiced charcoal chicken, pickled cucumbers, fries inside, and garlic toum wrapped in thin Saj bread.',
  },
  {
    name: 'Gourmet Mutton Pita',
    category: 'Shawarma',
    price: '₹249',
    rating: 4.8,
    image: '/images/mutton_shawarma.png',
    desc: 'Spiced mutton carvings, onions, tomatoes, and organic sesame tahini packed inside a fresh baked pita pockets.',
  },
  {
    name: 'Fiery Mexican Saj',
    category: 'Shawarma',
    price: '₹199',
    rating: 4.7,
    image: '/images/chicken_wrap.png',
    desc: 'Succulent chicken shawarma shavings tossed in jalapeños, spicy harissa spread, and melted cheese.',
  },
  // Wraps
  {
    name: 'Classic Falafel Wrap',
    category: 'Wraps',
    price: '₹129',
    rating: 4.6,
    image: '/images/about_kitchen.png',
    desc: 'Crispy fried chickpeas patties, mint leaves, tomatoes, pickled turnips, and tahini spread in flatbread.',
  },
  {
    name: 'Crispy Paneer Saj',
    category: 'Wraps',
    price: '₹169',
    rating: 4.7,
    image: '/images/chicken_wrap.png',
    desc: 'Marinated paneer cubes in middle-eastern dry spices, grilled peppers, and creamy garlic yogurt.',
  },
  // Platters
  {
    name: 'Royal Mixed Platter',
    category: 'Platters',
    price: '₹449',
    rating: 4.9,
    image: '/images/family_platter.png',
    desc: 'Generous serving of chicken & mutton carvings, golden chips, hummus, garlic paste, pickles, and pita.',
  },
  {
    name: 'Arabic Falafel Plate',
    category: 'Platters',
    price: '₹299',
    rating: 4.7,
    image: '/images/family_platter.png',
    desc: '6 pieces of crispy falafel, tabbouleh salad, hummus dip, garlic toum, olives, and two fresh pita breads.',
  },
  // Burgers
  {
    name: 'Spicy Zinger Burger',
    category: 'Burgers',
    price: '₹149',
    rating: 4.8,
    image: '/images/zinger_burger.png',
    desc: 'Crunchy breaded chicken fillet, double cheddar, shredded lettuce, and spicy secret dressing.',
  },
  {
    name: 'Charcoal Shawarma Burger',
    category: 'Burgers',
    price: '₹179',
    rating: 4.9,
    image: '/images/zinger_burger.png',
    desc: 'Juicy beef and lamb patty topped with shredded chicken shawarma, garlic toum, and onions.',
  },
  // Fries
  {
    name: 'Spiced Peri Peri Fries',
    category: 'Fries',
    price: '₹119',
    rating: 4.6,
    image: '/images/loaded_fries.png',
    desc: 'Thin-cut golden french fries tossed in aromatic African Peri-Peri spices, served with garlic dip.',
  },
  {
    name: 'Shawarma Loaded Fries',
    category: 'Fries',
    price: '₹199',
    rating: 4.9,
    image: '/images/loaded_fries.png',
    desc: 'Thick hot fries layered with shredded chicken, melted liquid cheese, dynamic hot sauce, and spring herbs.',
  },
  // Drinks
  {
    name: 'Authentic Mint Lemonade',
    category: 'Drinks',
    price: '₹89',
    rating: 4.8,
    image: '/images/about_kitchen.png',
    desc: 'Ice-blended refreshing fresh lemon juice, crushed spearmint leaves, and organic sugar syrup.',
  },
  {
    name: 'Rich Turkish Coffee',
    category: 'Drinks',
    price: '₹119',
    rating: 4.9,
    image: '/images/about_kitchen.png',
    desc: 'Traditional strong dark coffee brewed slowly in sand, infused with aromatic cardamom seeds.',
  },
];

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState('Shawarma');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="relative py-24 bg-brand-secondary/20 px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-3">
            Explore Flavors
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-brand-white uppercase">
            Interactive <span className="text-gold-gradient">Menu</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mt-4" />
          <p className="font-poppins text-brand-muted text-sm md:text-base max-w-lg mt-4 leading-relaxed">
            Click on the tabs below to explore our categories. Fresh, hot, and handmade items.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className="relative px-6 py-3.5 rounded-full font-montserrat text-xs font-bold tracking-widest uppercase cursor-pointer select-none transition-all active:scale-95"
              >
                {/* Active Tab Background Slide */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gold-gradient rounded-full shadow-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? 'text-brand-primary' : 'text-brand-cream/80 hover:text-brand-gold'
                  }`}
                >
                  {category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                key={item.name}
                className="glass-card rounded-2xl overflow-hidden glass-card-hover p-4 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-brand-primary/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-brand-gold stroke-brand-gold" />
                    <span className="font-montserrat text-[10px] font-bold text-brand-gold">
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-playfair text-lg font-bold text-brand-white leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-montserrat text-base font-extrabold text-brand-gold shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-poppins text-brand-muted text-xs leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 w-full bg-brand-secondary border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-primary font-montserrat text-[10px] font-bold tracking-widest uppercase py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add To Cart
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
