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
      className="relative min-h-screen flex items-center justify-center bg-brand-primary overflow-hidden pt-20 px-6 md:px-12"
    >
      {/* 1. Immersive Atmospheric Backdrop Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-secondary/80 via-brand-primary to-brand-primary" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4A44D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Gold Light Backdrops */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Floating Arabic Geometric Patterns in Background */}
      <div className="absolute top-20 right-10 w-96 h-96 opacity-[0.04] pointer-events-none select-none drift-slow">
        <svg viewBox="0 0 100 100" fill="none" stroke="#D4A44D" strokeWidth="0.5">
          {/* Detailed Arabic Mandala Geometric shape */}
          <circle cx="50" cy="50" r="40" />
          <polygon points="50,10 90,50 50,90 10,50" />
          <polygon points="50,15 85,50 50,85 15,50" />
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
          <rect x="28" y="28" width="44" height="44" transform="rotate(30 50 50)" />
          <rect x="28" y="28" width="44" height="44" transform="rotate(60 50 50)" />
        </svg>
      </div>

      {/* 3. Floating Spice Flakes Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Spice Flake 1 */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 40, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 left-10 w-3 h-3 bg-brand-gold/20 rounded-full blur-[1px]"
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left Side: Brand Story & Text Entrances */}
        <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Subtle Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary border border-brand-gold/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-montserrat text-[10px] tracking-[0.2em] font-semibold text-brand-cream uppercase">
              Authentic Arabian Shawarma
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair text-5xl md:text-7xl font-black text-brand-white leading-tight uppercase"
          >
            Fresh. <br />
            Juicy. <br />
            <span className="text-gold-gradient gold-text-glow">Grilled To Perfection.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-poppins text-brand-muted text-base md:text-lg max-w-lg mt-6 leading-relaxed"
          >
            Experience the rich, charcoal-grilled flavors of the Middle East made with secret organic spices, slow-roasted succulent meats, and freshly baked flatbread.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10"
          >
            <a
              href="#contact"
              className="bg-gold-gradient text-brand-primary font-montserrat text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(212,164,77,0.3)] hover:shadow-[0_8px_25px_rgba(212,164,77,0.5)] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </a>

            <a
              href="#menu"
              className="border border-brand-gold/40 text-brand-gold hover:text-brand-primary hover:bg-brand-gold font-montserrat text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full flex items-center gap-2 transition-all backdrop-blur-sm"
            >
              <Compass className="w-4 h-4" />
              Explore Menu
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive Floating Shawarma */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[380px] md:h-[500px]">
          {/* Subtle background circular glow behind image */}
          <div className="absolute w-80 h-80 rounded-full bg-brand-gold/15 filter blur-[60px]" />

          {/* Interactive Mouse Tilt Wrapper */}
          <motion.div
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              x: translateX,
              y: translateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[280px] md:w-[380px] h-[340px] md:h-[460px] flex items-center justify-center float-animation cursor-grab active:cursor-grabbing select-none"
          >
            {/* Steam particles rising from the shawarma */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-4 w-20 justify-center">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1 bg-brand-cream/15 rounded-full steam-particle"
                  style={{
                    height: `${24 + i * 8}px`,
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
              className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] drop-shadow-[0_0_20px_rgba(212,164,77,0.15)] pointer-events-none select-none"
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
