'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 0,
    name: 'Ahmed Al-Farsi',
    role: 'Verified Customer',
    rating: 5,
    text: 'The best shawarma I have ever had. Extremely juicy meat, perfectly spiced, and the garlic toum was mind-blowingly authentic. Tastes exactly like home.',
  },
  {
    id: 1,
    name: 'Fatima Shaikh',
    role: 'Local Food Guide',
    rating: 5,
    text: 'Arabian Shawarma is a culinary masterpiece! Every bite of the mutton saj wraps takes me straight back to Beirut. The packaging and details are premium.',
  },
  {
    id: 2,
    name: 'Rahul Sen',
    role: 'Food Blogger',
    rating: 5,
    text: 'The loaded shawarma fries are to die for, and the spicy zinger burger is crispy beyond belief. Highly recommend ordering the family platter for groups!',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Fine Dining Reviewer',
    rating: 5,
    text: 'Incredible spices, premium branding, and extremely fast delivery. The charcoal smoke infusion makes their grilled chicken shawarmas uniquely superior.',
  },
];

interface ReviewType {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
}

interface ReviewsProps {
  reviews?: ReviewType[];
}

export default function Reviews({ reviews = REVIEWS }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, []);

  // Helper function to calculate position class and state
  const getCardProperties = (index: number) => {
    const total = reviews.length;
    // Calculate circular distance
    let diff = index - activeIndex;
    
    // Wrap diff around
    if (diff < -1) diff += total;
    if (diff > 1) diff -= total;

    // Handle wrap edges for total items
    if (activeIndex === 0 && index === total - 1) diff = -1;
    if (activeIndex === total - 1 && index === 0) diff = 1;

    return {
      diff,
      isActive: diff === 0,
      isLeft: diff === -1,
      isRight: diff === 1,
      isHidden: diff !== 0 && diff !== -1 && diff !== 1,
    };
  };

  return (
    <section id="reviews" className="relative py-8 md:py-24 bg-bg-primary px-6 md:px-12 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(var(--color-brass-primary)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 opacity-[0.015] pointer-events-none select-none drift-slow">
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-brass-primary)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" />
          <polygon points="50,10 90,50 50,90 10,50" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" transform="rotate(15 50 50)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <span className="font-montserrat text-[10px] font-bold tracking-[0.3em] text-brass-primary uppercase mb-2 md:mb-3">
            Guest Journal
          </span>
          <h2 className="font-playfair text-2xl md:text-5xl font-black text-text-primary uppercase">
            Loved By <span className="text-gold-gradient">Food Lovers </span>
          </h2>
          <div className="w-16 h-[2px] bg-brass-primary mt-3 md:mt-4" />
          <p className="font-poppins text-text-secondary text-xs md:text-base max-w-lg mt-3 md:mt-4 leading-relaxed">
            Do not just take our word for it. Here is what our premium diners have to say about their experience.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden px-4">
          <div className="relative w-full h-[270px] md:h-[320px] flex items-center justify-center">
            {reviews.map((review, idx) => {
              const { diff, isActive, isLeft, isRight, isHidden } = getCardProperties(idx);

              if (isHidden) return null;

              // Compute circular animation position offset
              let xPosition = '0%';
              if (isLeft) xPosition = '-70%';
              if (isRight) xPosition = '70%';

              return (
                <motion.div
                  key={review.id}
                  style={{
                    position: 'absolute',
                    zIndex: isActive ? 30 : 20,
                  }}
                  animate={{
                    x: xPosition,
                    scale: isActive ? 1.05 : 0.85,
                    opacity: isActive ? 1 : 0.7,
                    filter: isActive ? 'blur(0px)' : 'blur(4px)',
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`w-full max-w-[245px] sm:max-w-[420px] rounded-3xl p-5 md:p-8 flex flex-col justify-between h-[240px] md:h-[280px] select-none transition-all ${
                    isActive
                      ? 'glass-card-cream border-brass-primary shadow-[0_15px_40px_rgba(43,27,18,0.1)]'
                      : 'glass-card-cream opacity-50 border border-border/50'
                  }`}
                >
                  {/* Card Header Quote */}
                  <div className="flex justify-between items-start">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-brass-primary stroke-brass-primary" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-brass-primary/30" />
                  </div>

                  {/* Body Review Text */}
                  <p className="font-poppins text-bg-primary text-[10px] md:text-sm italic leading-relaxed mt-2 md:mt-4 flex-1">
                    "{review.text}"
                  </p>

                  {/* Guest Info */}
                  <div className="border-t border-bg-primary/10 pt-2.5 mt-2.5 md:pt-4 md:mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-playfair text-xs md:text-base font-bold text-bg-primary">
                        {review.name}
                      </h4>
                      <span className="font-montserrat text-[8px] md:text-[9px] tracking-wider text-bg-elevated/80 uppercase">
                        {review.role}
                      </span>
                    </div>
                    <span className="bg-brass-primary/10 border border-brass-primary/30 px-2 py-0.5 rounded text-[8px] text-brass-primary tracking-widest font-montserrat uppercase font-semibold">
                      Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-6 z-40">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-bg-secondary border border-border flex items-center justify-center text-text-primary hover:text-brass-primary hover:border-border-strong active:scale-90 transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-brass-primary' : 'w-1.5 bg-brass-secondary/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-bg-secondary border border-border flex items-center justify-center text-text-primary hover:text-brass-primary hover:border-border-strong active:scale-90 transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
