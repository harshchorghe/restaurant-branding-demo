'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'Do you provide delivery?',
    answer: 'Yes! We deliver hot, fresh shawarmas within a 10km radius of our kitchen location. Orders can be placed directly on our website or via WhatsApp. Delivery is free for all orders above ₹499.',
  },
  {
    question: 'Do you offer vegetarian options?',
    answer: 'Absolutely! Our authentic Falafel wrap and Saj wraps feature crispy chickpea patties spiced with traditional herbs. We also offer a grilled Paneer Saj wrap marinated in Middle Eastern spices, and loaded cheesy fries.',
  },
  {
    question: 'What are your timings?',
    answer: 'We are open seven days a week, from 12:00 PM to 11:30 PM. On Friday and Saturday, we extend our kitchen hours until 1:00 AM to satisfy your midnight cravings.',
  },
  {
    question: 'Can I book catering for events?',
    answer: 'Yes, we provide premium live catering counters for corporate events, birthdays, and weddings. Our chefs will set up a live rotating shawarma spit at your venue. Contact us directly via phone or email for custom menus.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-8 md:py-24 bg-brand-secondary/40 px-6 md:px-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-2 md:mb-3">
            Got Questions?
          </span>
          <h2 className="font-playfair text-2xl md:text-5xl font-black text-brand-white uppercase">
            Frequently Asked <span className="text-gold-gradient">FAQs</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mt-3 md:mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-brand-gold/10 hover:border-brand-gold/25 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group select-none"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-brand-gold shrink-0" />
                    <span className="font-playfair text-base sm:text-lg font-bold text-brand-white group-hover:text-brand-gold transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-primary border border-brand-gold/25 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-primary transition-all duration-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-brand-gold/5 mt-1">
                        <p className="font-poppins text-brand-muted text-xs sm:text-sm leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
