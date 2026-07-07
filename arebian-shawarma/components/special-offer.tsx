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
    <section className="relative py-24 bg-brand-primary px-6 md:px-12 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Large Food Image Container */}
          <div className="lg:col-span-6 relative h-[320px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group border border-brand-gold/20">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent z-10" />
            <Image
              src="/images/family_platter.png"
              alt="Gourmet Arabian Family Sharing Platter"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Overlay Banner */}
            <div className="absolute bottom-6 left-6 z-20 bg-brand-primary/95 backdrop-blur-md border border-brand-gold/30 px-5 py-3 rounded-2xl">
              <span className="font-montserrat text-[10px] tracking-[0.25em] font-semibold text-brand-gold uppercase block">Freshly Grilled</span>
              <span className="font-playfair text-xl font-extrabold text-brand-white uppercase mt-1 block">Family Platter</span>
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 mb-6"
            >
              <Gift className="w-4 h-4 text-brand-gold" />
              <span className="font-montserrat text-[10px] tracking-[0.2em] font-bold text-brand-gold uppercase">
                Limited Time Special
              </span>
            </motion.div>

            {/* Header titles */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-black text-brand-white uppercase leading-tight"
            >
              Friday <br />
              <span className="text-gold-gradient gold-text-glow">Feast 50% Off</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-poppins text-brand-muted text-sm md:text-base mt-6 leading-relaxed"
            >
              Kickstart your weekends with our legendary Arabic platters. Get a flat 50% discount on all orders above ₹499 every Friday. Grab your favorite wraps, loaded fries, or family platter!
            </motion.p>

            {/* Coupon Code Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 border-brand-gold/30 flex flex-col sm:flex-row items-center gap-6 mt-8 w-full max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-cream block mb-1">Coupon Code</span>
                <span className="font-playfair text-3xl font-black text-brand-white tracking-wider block">SHAWARMA50</span>
              </div>
              
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto bg-gold-gradient text-brand-primary font-montserrat text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-xl flex items-center justify-center gap-2 select-none active:scale-95 transition-all shadow-md hover:brightness-95 shrink-0"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-2 text-brand-primary"
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
                      className="flex items-center gap-2 text-brand-primary"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

            {/* Terms indicator */}
            <span className="text-[10px] text-brand-cream/50 mt-4 uppercase tracking-widest font-montserrat text-center lg:text-left">
              *T&C Apply. Applicable on online delivery and takeaway orders only.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
