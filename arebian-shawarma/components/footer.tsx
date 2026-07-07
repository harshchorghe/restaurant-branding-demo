'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, MessageSquareQuote } from 'lucide-react';

interface FooterProps {
  onAddReview?: (review: { name: string; text: string; rating: number; role: string }) => void;
}

export default function Footer({ onAddReview }: FooterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && text) {
      if (onAddReview) {
        onAddReview({
          name,
          text,
          rating,
          role: 'Guest Reviewer',
        });
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false); // Auto-close modal after successful submission
        setName('');
        setRating(5);
        setText('');
      }, 1500);
    }
  };

  return (
    <footer className="relative bg-brand-primary border-t border-brand-gold/15 py-6 md:py-12 px-6 md:px-12 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#D4A44D_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-8 border-b border-brand-gold/10">
          
          {/* Logo Branding column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex flex-col mb-4">
              <span className="font-playfair text-2xl font-black text-gold-gradient tracking-widest uppercase">
                Arabian
              </span>
              <span className="font-montserrat text-[10px] font-bold text-brand-white tracking-[0.25em] uppercase mt-0.5">
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

          {/* Feedback Trigger Column */}
          <div className="md:col-span-4 flex flex-col items-start w-full">
            <h4 className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">
              Guest Feedback
            </h4>
            <p className="font-poppins text-brand-muted text-xs leading-relaxed mb-4">
              We value your dining experience. Tap below to share a review in our journal.
            </p>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-gold-gradient text-brand-primary font-montserrat text-[10px] font-bold tracking-widest uppercase rounded-xl hover:shadow-[0_4px_15px_rgba(212,164,77,0.3)] active:scale-[0.98] transition-all cursor-pointer shadow-md select-none flex items-center gap-2"
            >
              <MessageSquareQuote className="w-3.5 h-3.5" />
              Write A Review
            </button>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
          <span className="font-poppins text-[10px] text-brand-muted">
            &copy; {new Date().getFullYear()} Arabian Shawarma. All rights reserved.
          </span>
          <span className="font-poppins text-[10px] text-brand-muted">
            Developed by{' '}
            <a
              href="https://explorush.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-cream hover:underline transition-all"
            >
              explorush.in
            </a>
          </span>
        </div>

      </div>

      {/* Interactive Popup Modal Feedback Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-[#211611]/95 border border-brand-gold/30 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-brand-primary/80 border border-brand-gold/20 hover:border-brand-gold text-brand-gold hover:text-brand-white transition-all shadow-md active:scale-95 select-none cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Title */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-2">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="opacity-30">
                    <path d="M0 6 C10 0, 10 12, 20 6 C30 0, 30 12, 40 6" stroke="#D4A44D" strokeWidth="1" />
                    <circle cx="20" cy="6" r="2" fill="#D4A44D" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-black text-brand-white uppercase tracking-wider">
                  Guest Journal
                </h3>
                <p className="font-montserrat text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] mt-1">
                  Share Your Experience
                </p>
              </div>

              {/* Form container */}
              <form onSubmit={handleSubmitFeedback} className="flex flex-col">
                <div className="mb-4">
                  <label className="font-montserrat text-[9px] font-bold uppercase tracking-widest text-brand-cream block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    disabled={submitted}
                    className="w-full bg-brand-secondary border border-brand-gold/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-gold text-brand-white transition-colors"
                  />
                </div>

                {/* Star rating selector */}
                <div className="mb-4">
                  <label className="font-montserrat text-[9px] font-bold uppercase tracking-widest text-brand-cream block mb-2">
                    Diner Rating
                  </label>
                  <div className="flex gap-2 items-center bg-brand-secondary border border-brand-gold/15 rounded-xl px-4 py-2.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="cursor-pointer transition-transform active:scale-90"
                        aria-label={`Rate ${star} Stars`}
                      >
                        <Star
                          className={`w-5 h-5 transition-colors ${
                            star <= rating ? 'fill-brand-gold stroke-brand-gold' : 'stroke-brand-cream/30 fill-transparent'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="font-montserrat text-[10px] font-bold text-brand-gold ml-2 uppercase">
                      {rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Feedback Comment */}
                <div className="mb-6">
                  <label className="font-montserrat text-[9px] font-bold uppercase tracking-widest text-brand-cream block mb-2">
                    Your Review
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={submitted ? 'Feedback submitted successfully! Thank you ❤️' : 'How was the food, flavor, and delivery?'}
                    disabled={submitted}
                    className="w-full bg-brand-secondary border border-brand-gold/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-gold text-brand-white resize-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-gold-gradient text-brand-primary font-montserrat text-xs font-bold tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer shadow-md select-none disabled:opacity-50"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.span
                        key="submitted"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                      >
                        Submitted Successfully!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="submit"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                      >
                        Submit Feedback
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
