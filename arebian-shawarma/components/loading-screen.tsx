'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STEPS = [
  "Firing up the charcoal grill...",
  "Blending hand-picked spices...",
  "Slow-roasting to perfection...",
  "Preparing freshly baked pita...",
  "Arabian Shawarma is ready!"
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Prevent scroll while loading
    document.body.style.overflow = 'hidden';

    // Cycle through text steps
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < LOADING_STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 900);

    // Simulate page load completion
    const loadTimeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 4500);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(loadTimeout);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-primary"
        >
          {/* Decorative background glow */}
          <div className="absolute w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

          {/* SVG Animated Shawarma Skewer */}
          <div className="relative mb-8 w-48 h-48 flex items-center justify-center">
            {/* Steam Particles */}
            <div className="absolute top-0 flex gap-2 justify-center w-full">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-10, -50],
                    x: [0, i % 2 === 0 ? 8 : -8, 0],
                    scale: [0.8, 1.2, 0.5],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-brand-cream/40"
                />
              ))}
            </div>

            {/* Shawarma Skewer Rotation Wrapper */}
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-24 h-36 flex items-center justify-center"
            >
              <svg
                width="80"
                height="130"
                viewBox="0 0 80 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="filter drop-shadow-[0_0_15px_rgba(212,164,77,0.3)]"
              >
                {/* Central Spit Rod */}
                <rect x="38" y="0" width="4" height="130" rx="2" fill="#D0D0D0" />
                
                {/* Upper Stopper Plate */}
                <ellipse cx="40" cy="18" rx="22" ry="4" fill="#888888" />
                
                {/* Roasted Shawarma Stack Shape */}
                <path
                  d="M18 20 C18 20, 25 15, 40 15 C55 15, 62 20, 62 20 L56 100 C56 100, 52 112, 40 112 C28 112, 24 100, 24 100 Z"
                  fill="url(#shawarmaGrad)"
                />
                
                {/* Horizontal Grill Marks / Meat cuts */}
                <path d="M20 32 Q40 40 60 32" stroke="#3B2417" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                <path d="M22 50 Q40 58 58 50" stroke="#2B1B12" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                <path d="M23 70 Q40 78 57 70" stroke="#3B2417" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                <path d="M25 90 Q40 98 55 90" stroke="#2B1B12" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                
                {/* Vertical Seasoning Specks */}
                <circle cx="30" cy="40" r="1.5" fill="#D4A44D" />
                <circle cx="50" cy="45" r="1" fill="#FAFAFA" />
                <circle cx="42" cy="62" r="1.5" fill="#D4A44D" />
                <circle cx="34" cy="80" r="1" fill="#FAFAFA" />
                <circle cx="48" cy="84" r="1.5" fill="#D4A44D" />
                <circle cx="38" cy="98" r="1.2" fill="#FAFAFA" />

                {/* Bottom Stopper Plate */}
                <ellipse cx="40" cy="110" rx="18" ry="4" fill="#888888" />

                {/* Gradients */}
                <defs>
                  <linearGradient id="shawarmaGrad" x1="40" y1="15" x2="40" y2="112" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#D4A44D" />
                    <stop offset="35%" stopColor="#AD6C22" />
                    <stop offset="70%" stopColor="#784013" />
                    <stop offset="100%" stopColor="#3B2417" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-playfair text-3xl md:text-4xl text-brand-gold font-extrabold tracking-wider mb-2 uppercase"
          >
            Arabian Shawarma
          </motion.h1>

          <div className="h-6 overflow-hidden flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={stepIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-montserrat text-xs md:text-sm tracking-widest text-brand-cream uppercase"
              >
                {LOADING_STEPS[stepIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Premium linear loading bar */}
          <div className="mt-8 w-48 h-[2px] bg-brand-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.2, ease: "easeInOut" }}
              className="h-full bg-brand-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
