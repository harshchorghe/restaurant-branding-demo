'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="relative py-8 md:py-24 bg-bg-primary px-6 md:px-12 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-brass-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brass-primary uppercase mb-2 md:mb-3">
            Visit Us
          </span>
          <h2 className="font-playfair text-2xl md:text-5xl font-black text-text-primary uppercase">
            Get In <span className="text-gold-gradient">Touch</span>
          </h2>
          <div className="w-16 h-[2px] bg-brass-primary mt-3 md:mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Contact Form Card */}
          <div className="lg:col-span-6">
            <div className="glass-card-cream rounded-3xl p-6 md:p-8 h-full">
              <h3 className="font-playfair text-lg md:text-xl font-bold text-bg-primary mb-4 md:mb-6 uppercase tracking-wider">
                Send Us A Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-bg-elevated block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/60 border border-brass-secondary/30 rounded-xl px-4 py-3.5 font-poppins text-sm text-bg-primary focus:outline-none focus:border-brass-primary transition-colors placeholder:text-bg-elevated/50"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-bg-elevated block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/60 border border-brass-secondary/30 rounded-xl px-4 py-3.5 font-poppins text-sm text-bg-primary focus:outline-none focus:border-brass-primary transition-colors placeholder:text-bg-elevated/50"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-bg-elevated block mb-2">
                    How Can We Help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/60 border border-brass-secondary/30 rounded-xl px-4 py-3.5 font-poppins text-sm text-bg-primary focus:outline-none focus:border-brass-primary transition-colors resize-none placeholder:text-bg-elevated/50"
                    placeholder="Your message details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary font-montserrat text-xs font-bold tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(196,154,108,0.2)] active:scale-95 transition-all cursor-pointer select-none"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.span
                        key="submitted"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Message Sent!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="submit"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Details and Map Mockup */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            
            {/* Contacts Grid (2x2 on Mobile and Desktop) */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="glass-card-cream rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-xl bg-bg-primary/10 border border-border flex items-center justify-center text-brass-primary shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-montserrat text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-bg-elevated/80">Phone</h4>
                  <span className="font-poppins text-[10px] sm:text-xs font-bold text-bg-primary block mt-1">+91 99999 99999</span>
                  <span className="font-poppins text-[8px] sm:text-[10px] text-bg-elevated/70 block mt-0.5">Toll free ordering</span>
                </div>
              </div>

              <div className="glass-card-cream rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-xl bg-bg-primary/10 border border-border flex items-center justify-center text-brass-primary shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-montserrat text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-bg-elevated/80">Email</h4>
                  <span className="font-poppins text-[10px] sm:text-xs font-bold text-bg-primary block mt-1">hello@arabian.com</span>
                  <span className="font-poppins text-[8px] sm:text-[10px] text-bg-elevated/70 block mt-0.5">Support & Catering</span>
                </div>
              </div>

              <div className="glass-card-cream rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-xl bg-bg-primary/10 border border-border flex items-center justify-center text-brass-primary shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-montserrat text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-bg-elevated/80">Location</h4>
                  <span className="font-poppins text-[10px] sm:text-xs font-bold text-bg-primary block mt-1">Vasai West, Vasai-Virar</span>
                  <span className="font-poppins text-[8px] sm:text-[10px] text-bg-elevated/70 block mt-0.5">Maharashtra 401207</span>
                </div>
              </div>

              <div className="glass-card-cream rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-xl bg-bg-primary/10 border border-border flex items-center justify-center text-brass-primary shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-montserrat text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-bg-elevated/80">Hours</h4>
                  <span className="font-poppins text-[10px] sm:text-xs font-bold text-bg-primary block mt-1">12:00 PM - 11:30 PM</span>
                  <span className="font-poppins text-[8px] sm:text-[10px] text-bg-elevated/70 block mt-0.5">Fri - Sat till 1:00 AM</span>
                </div>
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="glass-card rounded-3xl p-4 border-border flex-1 relative overflow-hidden min-h-[220px] flex items-center justify-center">
              
              {/* Custom styled vector dark map */}
              <div className="absolute inset-0 z-0 bg-[#18130F] opacity-75">
                <svg className="w-full h-full opacity-30" viewBox="0 0 400 200" fill="none" stroke="var(--color-brass-primary)" strokeWidth="0.5">
                  {/* Grid roads */}
                  <line x1="20" y1="0" x2="20" y2="200" />
                  <line x1="120" y1="0" x2="120" y2="200" strokeWidth="1" />
                  <line x1="220" y1="0" x2="220" y2="200" />
                  <line x1="320" y1="0" x2="320" y2="200" />
                  
                  <line x1="0" y1="50" x2="400" y2="50" />
                  <line x1="0" y1="120" x2="400" y2="120" strokeWidth="1" />
                  <line x1="0" y1="180" x2="400" y2="180" />

                  {/* Secondary roads */}
                  <path d="M 50 50 Q 80 80 120 120" />
                  <path d="M 220 120 Q 280 80 320 50" />
                  <circle cx="220" cy="120" r="40" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Glowing Location Ping */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                {/* Ping rings */}
                <div className="relative flex items-center justify-center mb-3">
                  <div className="absolute w-8 h-8 rounded-full bg-brass-primary/30 animate-ping" />
                  <div className="absolute w-12 h-12 rounded-full bg-brass-primary/10 animate-pulse" />
                  <div className="w-6 h-6 rounded-full bg-brass-primary flex items-center justify-center shadow-lg border border-bg-primary">
                    <MapPin className="w-3.5 h-3.5 text-bg-primary fill-bg-primary" />
                  </div>
                </div>
                
                <h4 className="font-playfair text-sm font-bold text-text-primary uppercase tracking-wider text-center max-w-[200px]">
                  Vasai West Shop
                </h4>
                <p className="font-poppins text-[10px] text-text-secondary/80 uppercase tracking-widest mt-1 text-center max-w-[200px]">
                  Tamtalao, Vasai-Virar
                </p>
                <a
                  href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KStnYwvsr-c7MYKaS8_OHp3R&daddr=shop+no-6,+Kalpavruksha+CHS,+Tamtalao,+Mulgaon,+District:,+Vasai+West,+Palghar,+Vasai-Virar,+Maharashtra+401207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 rounded-full border border-brass-primary/40 text-brass-primary font-montserrat text-[9px] font-bold tracking-widest uppercase hover:bg-brass-primary hover:text-bg-primary transition-colors backdrop-blur-md"
                >
                  Open in Google Maps
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
