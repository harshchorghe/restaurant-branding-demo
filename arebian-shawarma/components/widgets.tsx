'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Phone, ShoppingBag } from 'lucide-react';

// 1. Scroll Progress Bar
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-gold z-[999] origin-left"
    />
  );
}

// 2. High Performance Glow Cursor
export function GlowCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const mediaQuery = window.matchMedia('(hover: hover)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // GPU accelerated positioning
        cursorRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none z-[9998] hidden md:block will-change-transform"
      style={{
        transform: 'translate3d(-400px, -400px, 0)',
        transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    />
  );
}

// 3. Floating WhatsApp Button
export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hi! I would like to order delicious shawarma."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-shadow"
      aria-label="Order on WhatsApp"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.189 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.631-1.019-5.105-2.876-6.963C16.583 1.932 14.106.913 11.48.911c-5.441 0-9.863 4.42-9.867 9.852-.001 1.776.467 3.51 1.358 5.044L1.83 20.32l4.817-1.166zM17.53 14.24c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-3.48-1.74-4.8-3.09-5.61-4.48-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.3-.72-.6-1.02-.81-1.02-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 .001 1.77 1.29 3.48 1.47 3.72.18.24 2.52 3.85 6.1 5.39.85.37 1.52.59 2.04.75.86.27 1.64.23 2.26.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
      </svg>
    </motion.a>
  );
}

// 4. Sticky Mobile Order Bar
export function StickyOrderMobile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show stick bar only after scrolling past Hero (e.g. 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden"
        >
          <div className="glass-card flex items-center justify-between p-3 rounded-2xl border-brand-gold/30 shadow-[0_-5px_20px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col pl-2">
              <span className="text-[10px] uppercase tracking-widest text-brand-cream font-medium">Craving shawarma?</span>
              <span className="text-sm font-bold text-brand-white">Fresh & Hot Grill</span>
            </div>
            <a
              href="#contact"
              className="bg-gold-gradient text-brand-primary text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-xl flex items-center gap-2 font-montserrat shadow-lg hover:brightness-95 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
