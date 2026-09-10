/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export function ClosingScene() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-brand-dark overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/maheshwar/intro.jpg')] bg-cover bg-bottom opacity-40 mix-blend-screen grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
      </div>

      {/* Content Layer */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p className="text-brand-gold-light text-xl md:text-2xl font-serif italic mb-12 tracking-wide leading-relaxed">
          "From Maheshwar to Omkareshwar,<br />
          our families became one."
        </p>

        <h2 className="text-5xl md:text-7xl font-script text-brand-cream mb-12 text-glow">
          {wedding.groom.name.split(" ")[0]} &amp; {wedding.bride.name.split(" ")[0]}
        </h2>

        <p className="text-brand-cream/80 text-lg font-sans tracking-widest uppercase mb-16">
          We look forward to celebrating with you.
        </p>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-brand-gold/50 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <div className="w-8 h-8 bg-brand-gold/20 rounded-full animate-ping" />
          </div>
          <h3 className="text-brand-gold text-3xl font-serif tracking-widest">
            शुभ विवाह
          </h3>
        </div>
      </motion.div>

      {/* Floating lanterns fading out */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {Array.from({ length: 5 }).map((_, i) => (
           <div
             key={i}
             className="absolute w-6 h-8 bg-orange-400/80 rounded-t-full shadow-[0_0_30px_rgba(255,165,0,0.8)]"
             style={{
               left: `${20 + Math.random() * 60}%`,
               bottom: `-10%`,
               animation: `floatUpSlow ${15 + Math.random() * 10}s linear infinite`,
               animationDelay: `${Math.random() * 5}s`,
             }}
           />
         ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUpSlow {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
        }
      `}} />
    </section>
  );
}
