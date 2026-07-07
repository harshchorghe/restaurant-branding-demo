'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-primary/80 backdrop-blur-md border-b border-brand-gold/20 py-4 shadow-lg'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#home" className="flex flex-col group">
            <span className="font-playfair text-xl md:text-2xl font-black text-gold-gradient tracking-widest leading-none uppercase">
              Arabian
            </span>
            <span className="font-montserrat text-[10px] md:text-xs font-bold text-brand-white tracking-[0.25em] leading-none uppercase mt-0.5 group-hover:text-brand-gold transition-colors">
              Shawarma
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-montserrat text-sm font-semibold text-brand-white/80 hover:text-brand-gold tracking-widest uppercase relative py-1 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Order Now Button */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-gradient text-brand-primary font-montserrat text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(212,164,77,0.2)] hover:shadow-[0_6px_20px_rgba(212,164,77,0.4)] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </motion.a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-white hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-primary/95 backdrop-blur-lg flex flex-col justify-center md:hidden"
          >
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D4A44D_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="flex flex-col items-center gap-8 px-6 text-center">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: idx * 0.1, ease: 'easeOut' }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-playfair text-2xl font-semibold text-brand-cream hover:text-brand-gold tracking-wide uppercase transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1, ease: 'easeOut' }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-gold-gradient text-brand-primary font-montserrat text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(212,164,77,0.3)]"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
