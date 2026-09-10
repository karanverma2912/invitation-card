"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    // Current year Feb 11 (hardcoded for demo, normally would parse date string)
    const currentYear = new Date().getFullYear();
    const weddingDateStr = `${wedding.weddingDate} ${currentYear} 19:00:00`;
    const targetDate = new Date(weddingDateStr).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsWeddingDay(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-brand-maroon text-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/mandap2.png')] md:bg-[url('/images/backgrounds/mandap.jpg')] opacity-60 bg-cover bg-center" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h3
          className="font-serif text-3xl md:text-5xl text-brand-gold mb-12 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Auspicious Day
        </motion.h3>

        {isWeddingDay ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-6xl font-script text-brand-gold-light py-12"
          >
            आज शुभ विवाह है
          </motion.div>
        ) : (
          <div className="flex justify-center gap-4 md:gap-12 flex-wrap">
            {Object.entries(timeLeft).map(([unit, value], i) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-brand-gold/50 bg-brand-dark/20 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] relative group hover:border-brand-gold transition-colors"
              >
                <div className="absolute -top-2 w-4 h-4 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-3xl md:text-5xl font-serif font-bold text-brand-gold-light mb-1">
                  {value.toString().padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-brand-cream/80">
                  {unit}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
