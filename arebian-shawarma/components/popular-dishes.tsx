'use client';

import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const DISHES = [
  {
    id: 1,
    name: 'Chicken Shawarma',
    price: '₹189',
    rating: 4.9,
    reviews: 142,
    image: '/images/chicken_wrap.png',
    description: 'Slow-roasted chicken wrap loaded with creamy garlic toum sauce, hand-cut pickles, and secret Lebanese spices in warm toasted pita.',
  },
  {
    id: 2,
    name: 'Mutton Shawarma',
    price: '₹249',
    rating: 4.8,
    reviews: 98,
    image: '/images/mutton_shawarma.png',
    description: 'Tender spiced mutton shavings served with traditional sesame tahini, sliced onions, tomatoes, and parsley wrapped in flatbread.',
  },
  {
    id: 3,
    name: 'Zinger Burger',
    price: '₹149',
    rating: 4.7,
    reviews: 115,
    image: '/images/zinger_burger.png',
    description: 'Crispy golden double-fried spicy chicken breast, melted cheddar cheese, fresh lettuce, and signature garlic mayonnaise in brioche bun.',
  },
  {
    id: 4,
    name: 'Loaded Fries',
    price: '₹199',
    rating: 4.9,
    reviews: 210,
    image: '/images/loaded_fries.png',
    description: 'Crispy thick-cut skin-on fries topped with chicken shawarma, melted cheese, garlic whip, sriracha, and green scallions.',
  },
  {
    id: 5,
    name: 'Family Platter',
    price: '₹699',
    rating: 5.0,
    reviews: 86,
    image: '/images/family_platter.png',
    description: 'A grand sharing feast of sliced chicken & mutton wraps, charcoal grilled strips, hummus bowl, garlic toum, pickles, and flatbreads.',
  },
];

export default function PopularDishes() {
  return (
    <section id="menu" className="relative py-24 bg-brand-secondary/40 px-6 md:px-12 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-3">
            Best Sellers
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-brand-white uppercase">
            Popular <span className="text-gold-gradient">Dishes</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mt-4" />
          <p className="font-poppins text-brand-muted text-sm md:text-base max-w-lg mt-4 leading-relaxed">
            Our highly-rated signature wraps and meals, prepared freshly on order with the highest culinary standards.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DISHES.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className={`glass-card rounded-3xl overflow-hidden glass-card-hover flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : '' // Center platter nicely
              }`}
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden group">
                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent z-10 opacity-60" />
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Premium tag */}
                <div className="absolute top-4 left-4 z-20 bg-brand-primary/80 backdrop-blur-md border border-brand-gold/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-brand-gold stroke-brand-gold" />
                  <span className="font-montserrat text-[10px] font-bold text-brand-gold tracking-wide">
                    {dish.rating} ({dish.reviews})
                  </span>
                </div>
              </div>

              {/* Contents */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-xl font-bold text-brand-white group-hover:text-brand-gold transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-montserrat text-lg font-extrabold text-brand-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="font-poppins text-brand-muted text-xs leading-relaxed mt-3">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href="#contact"
                    className="flex-1 bg-brand-secondary border border-brand-gold/30 hover:bg-brand-gold hover:text-brand-primary font-montserrat text-[10px] font-bold tracking-widest uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
