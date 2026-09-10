/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export function ReceptionSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-brand-dark overflow-hidden">
      {/* Background with ghats/reception feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/maheshwar/intro.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-32 border-y border-brand-gold/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-brand-gold-light text-xl font-serif italic mb-6">
            The celebration continues...
          </p>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-cream mb-8">
            Reception
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-brand-gold font-sans tracking-widest uppercase text-lg">
            <div>
              <span className="block text-sm text-brand-cream/60 mb-2">Date</span>
              {wedding.reception.date}
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-gold/30" />
            <div>
              <span className="block text-sm text-brand-cream/60 mb-2">Location</span>
              {wedding.reception.location}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating lanterns effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
         {Array.from({ length: 10 }).map((_, i) => (
           <div
             key={i}
             className="absolute w-4 h-6 bg-brand-gold/80 rounded-t-full shadow-[0_0_20px_rgba(212,175,55,1)]"
             style={{
               left: `${Math.random() * 100}%`,
               bottom: `-50px`,
               animation: `floatUp ${Math.random() * 10 + 10}s linear infinite`,
               animationDelay: `${Math.random() * 10}s`,
             }}
           />
         ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
      `}} />
    </section>
  );
}
