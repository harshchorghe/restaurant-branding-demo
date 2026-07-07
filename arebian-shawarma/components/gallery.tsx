'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import Image from 'next/image';

const IMAGES = [
  { id: 1, src: '/images/hero_shawarma.png', title: 'Traditional Spit Rotisserie', aspect: 'aspect-[3/4]' },
  { id: 2, src: '/images/chicken_wrap.png', title: 'Chicken Saj Wrap', aspect: 'aspect-square' },
  { id: 3, src: '/images/loaded_fries.png', title: 'Shawarma Loaded Fries', aspect: 'aspect-[4/3]' },
  { id: 4, src: '/images/mutton_shawarma.png', title: 'Gourmet Mutton Pita', aspect: 'aspect-square' },
  { id: 5, src: '/images/about_kitchen.png', title: 'Luxury Spice Kitchen', aspect: 'aspect-[3/4]' },
  { id: 6, src: '/images/zinger_burger.png', title: 'Crunchy Zinger Burger', aspect: 'aspect-[4/3]' },
  { id: 7, src: '/images/family_platter.png', title: 'Royal Sharing Feast', aspect: 'aspect-square' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-8 md:py-24 bg-brand-secondary/40 px-6 md:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-2 md:mb-3">
            Visual Story
          </span>
          <h2 className="font-playfair text-2xl md:text-5xl font-black text-brand-white uppercase">
            Signature <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mt-3 md:mt-4" />
          <p className="font-poppins text-brand-muted text-xs md:text-base max-w-lg mt-3 md:mt-4 leading-relaxed">
            A visual feast of our culinary creations. Click on any photo to experience close-up details.
          </p>
        </div>

        {/* Infinite Horizontal Marquee Carousel */}
        <div className="relative w-full overflow-hidden py-4 -mx-6 md:-mx-12 px-6 md:px-12">
          {/* Soft Fade Overlays on Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#2D1B11] via-[#2D1B11]/50 to-transparent z-25 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#2D1B11] via-[#2D1B11]/50 to-transparent z-25 pointer-events-none" />

          {/* Marquee Tape Wrapper */}
          <div className="animate-marquee">
            {[...IMAGES, ...IMAGES, ...IMAGES].map((img, idx) => (
              <div
                key={`${img.id}-${idx}`}
                onClick={() => setSelectedImage(img.src)}
                className="relative w-64 h-48 sm:w-80 sm:h-56 rounded-3xl border border-brand-gold/15 cursor-pointer group shadow-lg shrink-0 mx-4 overflow-hidden"
              >
                {/* Image element */}
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Hover overlay glassmorphism */}
                <div className="absolute inset-0 bg-brand-primary/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center mb-3">
                    <Search className="w-4 h-4 text-brand-gold" />
                  </div>
                  <h3 className="font-playfair text-sm sm:text-base font-bold text-brand-white uppercase tracking-wider">
                    {img.title}
                  </h3>
                  <span className="font-montserrat text-[8px] text-brand-cream uppercase tracking-[0.25em] mt-1 block">
                    Click to Expand
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-brand-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-brand-secondary/80 border border-brand-gold/20 flex items-center justify-center text-brand-white hover:text-brand-gold transition-colors active:scale-95"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
              className="relative w-full max-w-5xl h-[75vh] md:h-[80vh] rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl"
            >
              <Image
                src={selectedImage}
                alt="Expanded Shawarma food photography"
                fill
                className="object-contain bg-brand-primary"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
