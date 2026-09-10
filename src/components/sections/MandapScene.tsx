/* eslint-disable */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { wedding } from "@/data/wedding";
import Image from "next/image";

export function MandapScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Multilayer Parallax Effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yPillars = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacityCouple = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 1]);
  const scaleCouple = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const opacityText = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Layer 1: Background Temple / Sky */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{ y: yBg }}
      >
        <div className="absolute inset-0 bg-[url('/images/backgrounds/mandap2.png')] md:bg-[url('/images/backgrounds/mandap.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply" />
      </motion.div>

      {/* Layer 2: Mandap Pillars (Left and Right) */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ y: yPillars }}
      >
        {/* Abstract Pillars with CSS borders */}
        <div className="absolute left-[10%] top-0 bottom-0 w-16 border-l-8 border-brand-gold/80 bg-gradient-to-b from-brand-maroon to-brand-dark shadow-[0_0_30px_rgba(212,175,55,0.4)]" />
        <div className="absolute right-[10%] top-0 bottom-0 w-16 border-r-8 border-brand-gold/80 bg-gradient-to-b from-brand-maroon to-brand-dark shadow-[0_0_30px_rgba(212,175,55,0.4)]" />
        {/* Top Canopy */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-maroon/90 to-transparent border-b-4 border-brand-gold/50 flex justify-around items-start overflow-hidden">
          {/* Hanging marigold garlands representation */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-1 h-32 md:h-48 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-b-full shadow-lg" style={{ height: `${Math.random() * 50 + 50}%` }} />
          ))}
        </div>
      </motion.div>

      {/* Layer 3: The Couple */}
      <motion.div
        className="relative z-20 w-80 h-[500px] mt-32 md:mt-16 mx-auto border-8 border-brand-gold rounded-t-full overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.6)]"
        style={{ opacity: opacityCouple, scale: scaleCouple }}
      >
        <Image
          src='/images/couple/together4.jpeg' // Placeholder for couple image
          alt="Wedding Ceremony"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </motion.div>

      {/* Layer 4: Text Overlay */}
      <motion.div
        className="absolute bottom-24 left-0 right-0 z-30 text-center px-4"
        style={{ opacity: opacityText }}
      >
        <p className="text-brand-gold-light text-xl md:text-2xl font-serif italic mb-6 tracking-widest drop-shadow-md">
          Two souls. Two families. One sacred promise.
        </p>
        <h2 className="text-brand-cream text-5xl md:text-7xl font-script tracking-wide text-glow">
          {wedding.groom.name.split(" ")[0]} &amp; {wedding.bride.name.split(" ")[0]}
        </h2>
      </motion.div>

      {/* Sacred Fire (Diya) effect at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 z-20 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-brand-gold rounded-[50%] blur-[2px]" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-12 bg-orange-500 rounded-[50%_50%_20%_20%] blur-md animate-pulse" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4 h-8 bg-yellow-300 rounded-[50%_50%_20%_20%] blur-sm animate-pulse" style={{ animationDelay: '0.2s' }} />
      </div>
    </section>
  );
}
