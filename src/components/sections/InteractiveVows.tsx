/* eslint-disable */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const vows = [
  { title: "साथ", english: "Togetherness", desc: "A promise to walk side by side, in every chapter of life." },
  { title: "विश्वास", english: "Trust", desc: "The foundation of our love, unbreakable and pure." },
  { title: "प्रेम", english: "Love", desc: "An eternal flame that guides our journey together." },
  { title: "सम्मान", english: "Respect", desc: "Honoring each other's individuality and dreams." },
  { title: "परिवार", english: "Family", desc: "Two families united, sharing joy and heritage." },
];

export function InteractiveVows() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-maroon mb-4">Our Promise</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {vows.map((vow, i) => (
            <div key={i} className="relative group perspective-1000">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className={`w-32 h-40 md:w-40 md:h-48 border-2 ${activeIndex === i ? 'border-brand-maroon bg-brand-maroon/5' : 'border-brand-gold/50 hover:border-brand-gold bg-white'} rounded-t-full shadow-lg transition-colors flex flex-col items-center justify-center transform preserve-3d`}
              >
                <span className="text-3xl md:text-4xl font-serif text-brand-dark mb-2">{vow.title}</span>
                <span className="text-xs font-sans uppercase tracking-widest text-brand-dark/50">{vow.english}</span>
                
                {/* Decorative dot */}
                <div className="w-2 h-2 bg-brand-gold rounded-full mt-4" />
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-6 bg-brand-dark text-brand-cream border border-brand-gold rounded-xl z-20 text-center shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
                  >
                    <p className="font-serif italic text-lg text-brand-gold-light mb-2">"{vow.desc}"</p>
                    <div className="w-8 h-px bg-brand-gold/50 mx-auto" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
