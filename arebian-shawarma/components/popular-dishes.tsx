'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, BookOpen, X, Sparkles, ChefHat } from 'lucide-react';
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
    ingredients: [
      '24h Marinated Organic Chicken',
      'House-made Garlic Toum',
      'Brined Persian Pickles',
      '18-Spice Marinade Blend',
      'Fresh Baked Saj Flatbread'
    ],
    preparation: [
      'Chicken breast slices marinated for 24 hours in 18 authentic spices.',
      'Layered hand-on-spit and slow-roasted over natural charcoal.',
      'Slivered thin by our chefs to order to keep the meat exceptionally juicy.',
      'Rolled in freshly baked Saj bread with rich toum sauce and pickles.',
      'Toasted on a cast-iron press to get the signature crispy exterior.'
    ],
    history: 'A street food masterpiece originating from the levanted kitchen of Beirut, perfected over generations with our signature garlic whip.'
  },
  {
    id: 2,
    name: 'Mutton Shawarma',
    price: '₹249',
    rating: 4.8,
    reviews: 98,
    image: '/images/mutton_shawarma.png',
    description: 'Tender spiced mutton shavings served with traditional sesame tahini, sliced onions, tomatoes, and parsley wrapped in flatbread.',
    ingredients: [
      'Slow-Roasted Milk-fed Lamb shavings',
      'Creamy Sesame Tahini',
      'Sumac-spiced Red Onions',
      'Pickled Turnips',
      'Warm Pita Bread'
    ],
    preparation: [
      'Choice cuts of tender lamb marinated in sumac, cardamom, and olive oil.',
      'Roast slowly on the spit rotisserie to render the rich fat and lock in flavors.',
      'Carved in thin slices and tossed with sliced fresh tomatoes and onions.',
      'Drizzled generously with nutty, slow-whipped stone-ground sesame tahini.',
      'Wrapped snugly and toasted over charcoal grates.'
    ],
    history: 'A rich, savory tradition combining sumac-spiced red onions and standard sesame sauce, recreating the authentic Syrian culinary experience.'
  },
  {
    id: 3,
    name: 'Zinger Burger',
    price: '₹149',
    rating: 4.7,
    reviews: 115,
    image: '/images/zinger_burger.png',
    description: 'Crispy golden double-fried spicy chicken breast, melted cheddar cheese, fresh lettuce, and signature garlic mayonnaise in brioche bun.',
    ingredients: [
      'Double-Breaded Spicy Chicken Fillet',
      'Melted Cheddar Cheese',
      'Shredded Iceberg Lettuce',
      'House Garlic Mayonnaise',
      'Toasted Brioche Bun'
    ],
    preparation: [
      'Chicken breast marinated in a buttermilk and chili hot sauce marinade.',
      'Double dipped in seasoned flour and fried to a deep golden crisp.',
      'Layered with crisp lettuce and loaded with signature garlic emulsion.',
      'Topped with melted sharp cheddar cheese.',
      'Served in a butter-toasted brioche bun.'
    ],
    history: 'A modern crunch fusion inspired by contemporary street side eats, pairing classical heat with local garlic-mayo techniques.'
  },
  {
    id: 4,
    name: 'Loaded Fries',
    price: '₹199',
    rating: 4.9,
    reviews: 210,
    image: '/images/loaded_fries.png',
    description: 'Crispy thick-cut skin-on fries topped with chicken shawarma, melted cheese, garlic whip, sriracha, and green scallions.',
    ingredients: [
      'Crispy Skin-on Fries',
      'Chicken Shawarma Sliverings',
      'Melted Mozzarella & Cheddar',
      'Garlic Toum & Sriracha Drizzle',
      'Fresh Scallions'
    ],
    preparation: [
      'Thick-cut skin-on potatoes double-fried to achieve a crunchy shell.',
      'Topped with a generous layer of freshly sliced charcoal chicken shawarma.',
      'Smothered in a warm house cheese blend and lightly torched.',
      'Drizzled with standard garlic toum and spicy house sriracha.',
      'Finished with a garnish of chopped spring onions and sumac.'
    ],
    history: 'Our crowd-favorite sharing snack, fusing the crispy joy of fries with the intense flavors of charcoal-roasted meats.'
  },
  {
    id: 5,
    name: 'Family Platter',
    price: '₹699',
    rating: 5.0,
    reviews: 86,
    image: '/images/family_platter.png',
    description: 'A grand sharing feast of sliced chicken & mutton wraps, charcoal grilled strips, hummus bowl, garlic toum, pickles, and flatbreads.',
    ingredients: [
      'Carved Chicken & Mutton Meats',
      'Hummus Bowl with Olive Oil',
      'Creamy Garlic Toum & Tahini dips',
      'Assorted Pickles & Olives',
      'Basket of Fresh Flatbreads'
    ],
    preparation: [
      'Chef prepares individual portions of slow-roasted chicken and mutton.',
      'Hummus is ground fresh from chickpeas and topped with extra virgin olive oil.',
      'Meats are plated alongside bowls of house toum, tahini, and fresh pickles.',
      'Accompanied by a basket of steaming hot, freshly baked Arabic flatbreads.',
      'Arranged on a large wooden platter designed for sharing.'
    ],
    history: 'A royal Middle Eastern sharing feast, paying homage to traditional family gatherings where meals are celebrated together.'
  },
];

export default function PopularDishes() {
  const [selectedDish, setSelectedDish] = useState<typeof DISHES[0] | null>(null);

  return (
    <section id="menu" className="relative py-8 md:py-24 bg-brand-secondary/40 px-6 md:px-12 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-2 md:mb-3">
            Best Sellers
          </span>
          <h2 className="font-playfair text-2xl md:text-5xl font-black text-brand-white uppercase">
            Popular <span className="text-gold-gradient">Dishes</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mt-3 md:mt-4" />
          <p className="font-poppins text-brand-muted text-xs md:text-base max-w-lg mt-3 md:mt-4 leading-relaxed">
            Our highly-rated signature wraps and meals, prepared freshly on order with the highest culinary standards.
          </p>
        </div>

        {/* Dishes Horizontal Scroll Container */}
        <div className="flex gap-4 md:gap-8 overflow-x-auto pb-6 pt-2 md:pb-10 md:pt-4 px-6 -mx-6 md:px-12 md:-mx-12 scrollbar-thin scrollbar-thumb-brand-gold scrollbar-track-brand-primary/10 snap-x snap-mandatory">
          {DISHES.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              onClick={() => setSelectedDish(dish)}
              className="glass-card-cream rounded-3xl overflow-hidden glass-card-cream-hover flex flex-col justify-between cursor-pointer group flex-shrink-0 w-[240px] sm:w-[360px] snap-center"
            >
              {/* Image Area */}
              <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
                {/* Ambient cream gradient overlay fading to card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFEB] via-transparent to-transparent z-10 opacity-80" />
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Premium tag */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-25 bg-[#2B1B12]/80 backdrop-blur-md border border-brand-gold/30 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 md:w-3 md:h-3 fill-brand-gold stroke-brand-gold" />
                  <span className="font-montserrat text-[8px] md:text-[10px] font-bold text-brand-gold tracking-wide">
                    {dish.rating} ({dish.reviews})
                  </span>
                </div>
              </div>

              {/* Contents */}
              <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1 md:mb-2">
                    <h3 className="font-playfair text-sm sm:text-base md:text-xl font-bold text-brand-primary group-hover:text-brand-gold transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-montserrat text-sm md:text-lg font-extrabold text-brand-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="font-poppins text-brand-secondary/80 text-[10px] md:text-xs leading-relaxed mt-1.5 md:mt-3">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-4 md:mt-8 flex gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDish(dish);
                    }}
                    className="flex-1 bg-brand-primary text-brand-white border border-brand-gold/20 hover:bg-brand-gold hover:text-brand-primary font-montserrat text-[9px] md:text-[10px] font-bold tracking-widest uppercase py-2.5 md:py-3.5 rounded-xl flex items-center justify-center gap-1.5 md:gap-2 transition-all active:scale-[0.98] select-none"
                  >
                    <BookOpen className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Recipe & Story
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Swipe Indicator */}
        <div className="flex justify-center items-center gap-2 mt-4 text-brand-cream/30 text-[9px] tracking-[0.25em] font-montserrat uppercase pointer-events-none select-none">
          <span>← Swipe to explore recipes →</span>
        </div>
      </div>

      {/* Dynamic Detail Modal Screen */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Panel Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#211611]/95 border border-brand-gold/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            >
              {/* Elegant Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-brand-primary/80 border border-brand-gold/20 hover:border-brand-gold text-brand-gold hover:text-brand-white transition-all shadow-md active:scale-95 select-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image, Info, and Heritage */}
              <div className="w-full md:w-5/12 relative h-48 md:h-auto bg-brand-primary flex flex-col justify-end p-6 border-b md:border-b-0 md:border-r border-brand-gold/20">
                {/* Background Image with Dark Mask Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent z-10" />
                  <Image
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    fill
                    className="object-cover opacity-80"
                  />
                </div>

                {/* Info Text Overlay */}
                <div className="relative z-20 mt-auto">
                  <div className="flex items-center gap-1 mb-2 bg-brand-gold/10 border border-brand-gold/30 w-fit px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3 fill-brand-gold stroke-brand-gold" />
                    <span className="font-montserrat text-[9px] font-bold text-brand-gold">{selectedDish.rating} Rating</span>
                  </div>
                  <h3 className="font-playfair text-3xl font-extrabold text-brand-white leading-tight uppercase">
                    {selectedDish.name}
                  </h3>
                  <p className="font-montserrat text-xl font-black text-brand-gold mt-1">
                    {selectedDish.price}
                  </p>
                  <div className="w-8 h-[1px] bg-brand-gold/40 my-3" />
                  <p className="font-poppins text-brand-muted/95 text-[11px] leading-relaxed italic">
                    "{selectedDish.history}"
                  </p>
                </div>
              </div>

              {/* Right Column: Recipe Details (Scrollable) */}
              <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-auto flex-1 flex flex-col justify-between max-h-[50vh] md:max-h-[85vh] scrollbar-thin scrollbar-thumb-brand-gold scrollbar-track-brand-primary">
                <div>
                  {/* Ingredients Section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 border-b border-brand-gold/10 pb-2">
                      <Sparkles className="w-4 h-4 text-brand-gold" />
                      <h4 className="font-playfair text-base font-bold text-brand-gold uppercase tracking-wider">
                        Premium Ingredients
                      </h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedDish.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-center gap-2 font-poppins text-xs text-brand-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Culinary Preparation Process Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4 border-b border-brand-gold/10 pb-2">
                      <ChefHat className="w-4 h-4 text-brand-gold" />
                      <h4 className="font-playfair text-base font-bold text-brand-gold uppercase tracking-wider">
                        Preparation Process
                      </h4>
                    </div>
                    <ol className="space-y-3.5">
                      {selectedDish.preparation.map((step, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="font-montserrat text-xs font-black text-brand-gold bg-brand-gold/10 border border-brand-gold/25 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          <p className="font-poppins text-[11px] text-brand-muted leading-relaxed">
                            {step}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Footer action note */}
                <div className="mt-8 pt-4 border-t border-brand-gold/10 flex justify-between items-center">
                  <span className="font-poppins text-[9px] text-brand-cream/40 uppercase tracking-widest">
                    *Organic & Locally Sourced
                  </span>
                  <button
                    onClick={() => {
                      setSelectedDish(null);
                      // Smooth scroll to contact/order section
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gold-gradient text-brand-primary font-montserrat text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-lg hover:brightness-95 active:scale-95 transition-all select-none shadow-md"
                  >
                    Go To Order
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
