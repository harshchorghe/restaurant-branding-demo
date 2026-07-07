'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-brand-primary border-t border-brand-gold/15 py-16 px-6 md:px-12 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#D4A44D_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-gold/10">
          
          {/* Logo Branding column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex flex-col mb-4">
              <span className="font-playfair text-2xl font-black text-gold-gradient tracking-widest uppercase">
                Arabian
              </span>
              <span className="font-montserrat text-xs font-bold text-brand-white tracking-[0.25em] uppercase mt-0.5">
                Shawarma
              </span>
            </a>
            <p className="font-poppins text-brand-muted text-xs leading-relaxed max-w-sm mt-2">
              Serving premium authentic Middle Eastern charcoal-grilled cuisines, crafted with handpicked organic spices and family heritage.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-secondary border border-brand-gold/20 flex items-center justify-center text-brand-cream hover:text-brand-gold hover:border-brand-gold/50 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-secondary border border-brand-gold/20 flex items-center justify-center text-brand-cream hover:text-brand-gold hover:border-brand-gold/50 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-secondary border border-brand-gold/20 flex items-center justify-center text-brand-cream hover:text-brand-gold hover:border-brand-gold/50 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">
                Explore
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="font-poppins text-xs text-brand-muted hover:text-brand-gold transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="font-poppins text-xs text-brand-muted hover:text-brand-gold transition-colors">
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="font-poppins text-xs text-brand-muted hover:text-brand-gold transition-colors">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#reviews" className="font-poppins text-xs text-brand-muted hover:text-brand-gold transition-colors">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#about" className="font-poppins text-xs text-brand-muted hover:text-brand-gold transition-colors">
                    About Story
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-poppins text-xs text-brand-muted hover:text-brand-gold transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter subscription column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">
              Newsletter
            </h4>
            <p className="font-poppins text-brand-muted text-xs leading-relaxed mb-4">
              Subscribe to unlock special rewards, discounts, and secret menu invitations.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative w-full max-w-sm flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? 'Subscribed successfully!' : 'Your email address'}
                disabled={subscribed}
                className={`w-full bg-brand-secondary border border-brand-gold/15 rounded-full px-5 py-3.5 pr-14 font-poppins text-xs focus:outline-none focus:border-brand-gold transition-all ${
                  subscribed ? 'text-brand-gold border-brand-gold' : 'text-brand-white'
                }`}
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-1.5 top-1.5 w-11 h-11 rounded-full bg-brand-gold text-brand-primary flex items-center justify-center hover:bg-brand-cream active:scale-95 transition-all cursor-pointer"
                aria-label="Subscribe email"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <span className="font-poppins text-[10px] text-brand-muted">
            &copy; {new Date().getFullYear()} Arabian Shawarma. All rights reserved.
          </span>
          <span className="font-poppins text-[10px] text-brand-muted flex items-center gap-1.5">
            Designed with <span className="text-red-500 animate-pulse">&hearts;</span> for luxury fine dining.
          </span>
        </div>

      </div>
    </footer>
  );
}
