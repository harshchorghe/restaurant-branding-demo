'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Copy, Check } from 'lucide-react';
import Image from 'next/image';

export default function SpecialOffer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('SHAWARMA50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-8 md:py-24 bg-bg-primary px-6 md:px-12 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brass-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Side: Large Food Image Container */}
          <div className="lg:col-span-6 relative h-[200px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group border border-border">
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/80 to-transparent z-10" />
            <Image
              src="/images/family_platter.png"
              alt="Gourmet Arabian Family Sharing Platter"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Overlay Banner */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 bg-bg-primary/95 backdrop-blur-md border border-border-strong px-4 py-2.5 md:px-5 md:py-3 rounded-2xl">
              <span className="font-montserrat text-[8px] md:text-[10px] tracking-[0.25em] font-semibold text-brass-primary uppercase block">Freshly Grilled</span>
              <span className="font-playfair text-base md:text-xl font-extrabold text-text-primary uppercase mt-1 block">Family Platter</span>
            </div>
          </div>

          {/* Right Side: Offer Details and Coupon Code */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Offer Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-brass-primary/10 border border-border-strong mb-4 md:mb-6"
            >
              <Gift className="w-3.5 h-3.5 text-brass-primary" />
              <span className="font-montserrat text-[8px] md:text-[10px] tracking-[0.2em] font-bold text-brass-primary uppercase">
                Limited Time Special
              </span>
            </motion.div>

            {/* Header titles */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair text-2xl md:text-5xl font-black text-text-primary uppercase leading-tight"
            >
              Friday <br />
              <span className="text-gold-gradient gold-text-glow">Feast 50% Off</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-poppins text-text-secondary text-xs md:text-base mt-3 md:mt-6 leading-relaxed"
            >
              Kickstart your weekends with our legendary Arabic platters. Get a flat 50% discount on all orders above ₹499 every Friday. Grab your favorite wraps, loaded fries, or family platter!
            </motion.p>

            {/* Coupon Code Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-8 w-full max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex-1 text-center sm:text-left">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-text-secondary block mb-1">Coupon Code</span>
                <span className="font-playfair text-xl md:text-3xl font-black text-text-primary tracking-wider block">SHAWARMA50</span>
              </div>
              
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto btn-primary font-montserrat text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-xl flex items-center justify-center gap-2 select-none active:scale-95 transition-all shadow-md shrink-0"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

            {/* Terms indicator */}
            <span className="text-[10px] text-text-secondary/50 mt-4 uppercase tracking-widest font-montserrat text-center lg:text-left">
              *T&C Apply. Applicable on online delivery and takeaway orders only.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
