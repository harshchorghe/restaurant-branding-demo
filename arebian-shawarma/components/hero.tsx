'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShoppingBag, Compass } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  // Motion values for premium mouse parallax tilt on the shawarma image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse movement to tilt angles
  const tiltX = useTransform(mouseY, [-400, 400], [12, -12]);
  const tiltY = useTransform(mouseX, [-400, 400], [-12, 12]);
  const translateX = useTransform(mouseX, [-400, 400], [-15, 15]);
  const translateY = useTransform(mouseY, [-400, 400], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    // Smooth reset when cursor leaves Hero area
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center bg-brand-primary overflow-hidden pt-20 pb-10 md:pt-20 md:pb-20 px-6 md:px-12"
    >
      {/* 1. Immersive Atmospheric Backdrop Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-secondary/80 via-brand-primary to-brand-primary" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4A44D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Gold Light Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-gold/10 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[450px] h-[200px] md:h-[450px] bg-brand-gold/5 rounded-full blur-[80px] md:blur-[130px] pointer-events-none" />

      {/* 2. Floating Luxury Elements & Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Decorative Golden Star Ornament */}
        <div className="absolute top-28 left-[10%] opacity-25 select-none animate-spin-slow hidden md:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" fill="#D4A44D" />
          </svg>
        </div>
        <div className="absolute bottom-28 right-[10%] opacity-20 select-none animate-spin-slow hidden md:block">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" fill="#D4A44D" />
          </svg>
        </div>

        {/* Animated Spice Flake 1 */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 40, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 left-1/4 w-3.5 h-3.5 bg-brand-gold/25 rounded-sm rotate-12 blur-[0.5px] hidden md:block"
        />
        {/* Animated Spice Flake 2 */}
        <motion.div
          animate={{
            y: [0, 80, 0],
            x: [0, -50, 0],
            rotate: [0, -360],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/3 right-12 w-4 h-4 bg-brand-cream/15 rounded-sm rotate-45 blur-[0.5px]"
        />
        {/* Animated Spice Flake 3 */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 30, 0],
            rotate: [0, 180],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-1/3 w-2.5 h-2.5 bg-brand-gold/30 rounded-full"
        />
      </div>

      {/* 4. Hero Content Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 w-full">
        {/* Left Side: Brand Story & Text Entrances */}
        <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Subtle Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-secondary border border-brand-gold/20 mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-montserrat text-[8px] md:text-[10px] tracking-[0.2em] font-semibold text-brand-cream uppercase">
              Authentic Arabian Shawarma
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair text-3xl sm:text-4xl md:text-7xl font-black text-brand-white leading-tight uppercase"
          >
            Fresh. <br className="hidden md:block" />
            Juicy. <br className="hidden md:block" />
            <span className="text-gold-gradient gold-text-glow">Grilled To Perfection.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-poppins text-brand-muted text-xs md:text-lg max-w-lg mt-3 md:mt-6 leading-relaxed"
          >
            Experience the rich, charcoal-grilled flavors of the Middle East made with secret organic spices, slow-roasted succulent meats, and freshly baked flatbread.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 md:mt-10"
          >
            <a
              href="#menu"
              className="bg-gold-gradient text-brand-primary font-montserrat text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-3.5 md:px-8 md:py-4 rounded-full shadow-[0_4px_15px_rgba(212,164,77,0.25)] hover:shadow-[0_4px_25px_rgba(212,164,77,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="border border-brand-gold/40 text-brand-gold hover:text-brand-primary hover:bg-brand-gold font-montserrat text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-3.5 md:px-8 md:py-4 rounded-full flex items-center gap-2 transition-all backdrop-blur-sm"
            >
              <Compass className="w-3.5 h-3.5" />
              Explore Menu
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive Floating Shawarma */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[260px] md:h-[500px]">
          {/* Subtle background circular glow behind image */}
          <div className="absolute w-52 md:w-80 h-52 md:h-80 rounded-full bg-brand-gold/15 filter blur-[50px] md:blur-[60px]" />

          {/* Interactive Mouse Tilt Wrapper */}
          <motion.div
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              x: translateX,
              y: translateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[200px] md:w-[380px] h-[240px] md:h-[460px] flex items-center justify-center float-animation cursor-grab active:cursor-grabbing select-none"
          >
            {/* Steam particles rising from the shawarma */}
            <div className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 w-20 justify-center">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-0.5 md:w-1 bg-brand-cream/15 rounded-full steam-particle"
                  style={{
                    height: `${16 + i * 6}px`,
                    animationDelay: `${i * 0.7}s`,
                    animationDuration: `${5 + i}s`,
                  }}
                />
              ))}
            </div>

            {/* Main Shawarma spits image */}
            <Image
              src="/images/hero_shawarma.png"
              alt="Premium Arabian Shawarma Rotisserie spit roasting"
              width={380}
              height={460}
              priority
              className="object-contain w-[180px] h-[220px] md:w-[380px] md:h-[460px] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] drop-shadow-[0_0_20px_rgba(212,164,77,0.15)] pointer-events-none select-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="font-montserrat text-[9px] font-bold tracking-[0.35em] text-brand-cream/40 uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-brand-gold/30 flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-brand-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
