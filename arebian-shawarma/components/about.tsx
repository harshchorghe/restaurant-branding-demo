'use client';

import { motion } from 'framer-motion';
import { Sparkles, Compass, Heart } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-8 md:py-24 bg-bg-primary px-6 md:px-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-brass-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side: Story Copy and Typography */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brass-primary uppercase mb-2 md:mb-3">
              Our Heritage
            </span>
            <h2 className="font-playfair text-2xl md:text-5xl font-black text-text-primary uppercase leading-tight">
              A Legacy of <br />
              <span className="text-gold-gradient gold-text-glow">Authentic Spices</span>
            </h2>
            <div className="w-16 h-[2px] bg-brass-primary mt-3 md:mt-4 mb-4 md:mb-8 mx-auto lg:mx-0" />
            
            <p className="font-poppins text-text-secondary text-xs md:text-base leading-relaxed mb-4 md:mb-6">
              Founded with the vision to bring the premium, charcoal-grilled street food experience of the Middle East to modern dining, **Arabian Shawarma** preserves traditional cooking methods passed down through generations.
            </p>

            <p className="font-poppins text-text-secondary text-xs md:text-base leading-relaxed mb-6 md:mb-8">
              Every vertical skewer is layered by hand, using tender choice cuts marinated for 24 hours in our secret blend of 18 organic Arabian spices. We roast our meats slowly over charcoal embers to infuse a deep, smoky aroma that makes every wrap unforgettable.
            </p>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left p-3.5 md:p-4 glass-card-cream rounded-2xl">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-brass-secondary mb-1.5 md:mb-2" />
                <h4 className="font-playfair text-xs md:text-sm font-bold text-bg-primary">100% Organic</h4>
                <span className="font-poppins text-[9px] md:text-[10px] text-bg-elevated mt-1">Authentic imported spices.</span>
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left p-3.5 md:p-4 glass-card-cream rounded-2xl">
                <Compass className="w-4 h-4 md:w-5 md:h-5 text-brass-secondary mb-1.5 md:mb-2" />
                <h4 className="font-playfair text-xs md:text-sm font-bold text-bg-primary">Hand Crafted</h4>
                <span className="font-poppins text-[9px] md:text-[10px] text-bg-elevated mt-1">Layered spit daily.</span>
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left p-3.5 md:p-4 glass-card-cream rounded-2xl">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-brass-secondary mb-1.5 md:mb-2" />
                <h4 className="font-playfair text-xs md:text-sm font-bold text-bg-primary">Smoky Flavor</h4>
                <span className="font-poppins text-[9px] md:text-[10px] text-bg-elevated mt-1">Slow charcoal roasted.</span>
              </div>
            </div>
          </div>

          {/* Right Side: Showcase Image Container */}
          <div className="lg:col-span-6 relative h-[260px] md:h-[500px] flex items-center justify-center">
            {/* Background gold border decorative box */}
            <div className="absolute top-6 left-6 w-[85%] h-[85%] border border-border rounded-3xl -translate-x-4 translate-y-4 pointer-events-none hidden md:block" />

            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-border z-10">
              <Image
                src="/images/about_kitchen.png"
                alt="Chef preparing authentic arabian spices in upscale restaurant kitchen"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
