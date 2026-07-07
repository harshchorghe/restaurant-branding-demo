'use client';

import { motion } from 'framer-motion';
import { Leaf, Award, Truck, ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    title: 'Fresh Ingredients',
    description: 'We source farm-fresh vegetables and choice organic chicken & mutton daily. Never frozen, absolutely delicious.',
    icon: Leaf,
  },
  {
    id: 2,
    title: 'Authentic Arabic Spices',
    description: 'Our proprietary blends are ground from fresh spices sourced directly from Lebanon, Syria, and Turkey.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Express Delivery',
    description: 'Fresh shawarmas delivered piping hot to your doorstep within 30 minutes in thermal heat-sealed packaging.',
    icon: Truck,
  },
  {
    id: 4,
    title: 'Premium Quality',
    description: 'Double quality checks on hygiene and charcoal temperature control to maintain the standard fine-dining taste.',
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-8 md:py-24 bg-bg-primary px-6 md:px-12 overflow-hidden">
      {/* Decorative Arabic geometric star background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.015] pointer-events-none select-none drift-medium">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-brass-primary)" strokeWidth="0.3">
          <circle cx="50" cy="50" r="45" />
          <polygon points="50,5 95,50 50,95 5,50" />
          <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
          <rect x="20" y="20" width="60" height="60" transform="rotate(15 50 50)" />
          <rect x="20" y="20" width="60" height="60" transform="rotate(75 50 50)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brass-primary uppercase mb-2 md:mb-3">
            Our Quality
          </span>
          <h2 className="font-playfair text-2xl md:text-5xl font-black text-text-primary uppercase">
            Why Choose <span className="text-gold-gradient">Us</span>
          </h2>
          <div className="w-16 h-[2px] bg-brass-primary mt-3 md:mt-4" />
          <p className="font-poppins text-text-secondary text-xs md:text-base max-w-lg mt-3 md:mt-4 leading-relaxed">
            Crafting premium street food with fine-dining aesthetics, organic spices, and swift service.
          </p>
        </div>

        {/* Feature Cards Grid (2x2 on Mobile, 4x1 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="glass-card-cream glass-card-cream-hover rounded-2xl md:rounded-3xl p-4 md:p-8 group"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-bg-primary/10 border border-border flex items-center justify-center mb-3 md:mb-6 group-hover:bg-brass-primary transition-colors duration-300">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-brass-primary group-hover:text-bg-primary transition-colors duration-300" />
                  </motion.div>
                </div>

                <h3 className="font-playfair text-xs sm:text-base md:text-lg font-bold text-bg-primary group-hover:text-brass-secondary transition-colors duration-300 mb-1.5 md:mb-3">
                  {item.title}
                </h3>
                <p className="font-poppins text-bg-elevated/90 text-[10px] md:text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
