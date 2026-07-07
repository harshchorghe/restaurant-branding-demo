'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Users, UtensilsCrossed, Star, History } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

function Counter({ end, duration = 1.5, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentValue = progress * (end - startValue) + startValue;
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
    </span>
  );
}

const STATS = [
  {
    id: 1,
    title: 'Happy Customers',
    endValue: 5000,
    suffix: '+',
    decimals: 0,
    icon: Users,
  },
  {
    id: 2,
    title: 'Signature Dishes',
    endValue: 15,
    suffix: '+',
    decimals: 0,
    icon: UtensilsCrossed,
  },
  {
    id: 3,
    title: 'Customer Rating',
    endValue: 4.9,
    suffix: '★',
    decimals: 1,
    icon: Star,
  },
  {
    id: 4,
    title: 'Years Experience',
    endValue: 10,
    suffix: '+',
    decimals: 0,
    icon: History,
  },
];

export default function Statistics() {
  return (
    <section className="relative py-6 md:py-16 bg-brand-secondary/40 px-6 md:px-12 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-cream rounded-3xl p-6 md:p-8 text-center flex flex-col items-center"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-gold/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>

                {/* Counter */}
                <div className="font-playfair text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight flex items-baseline">
                  <Counter end={stat.endValue} decimals={stat.decimals} />
                  <span className="text-brand-gold ml-0.5">{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="font-montserrat text-[10px] md:text-xs font-semibold text-brand-secondary/85 uppercase tracking-widest mt-3">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
