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
    <section id="gallery" className="relative py-24 bg-brand-secondary/40 px-6 md:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-3">
            Visual Story
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-brand-white uppercase">
            Signature <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mt-4" />
          <p className="font-poppins text-brand-muted text-sm md:text-base max-w-lg mt-4 leading-relaxed">
            A visual feast of our culinary creations. Click on any photo to experience close-up details.
          </p>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedImage(img.src)}
              className={`break-inside-avoid relative overflow-hidden rounded-3xl border border-brand-gold/15 cursor-pointer group shadow-lg ${img.aspect}`}
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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center mb-4"
                >
                  <Search className="w-5 h-5 text-brand-gold" />
                </motion.div>
                <h3 className="font-playfair text-lg font-bold text-brand-white uppercase tracking-wider">
                  {img.title}
                </h3>
                <span className="font-montserrat text-[9px] text-brand-cream uppercase tracking-[0.25em] mt-2 block">
                  Click to Expand
                </span>
              </div>
            </motion.div>
          ))}
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
