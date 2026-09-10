"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { wedding } from "@/data/wedding";
import Image from "next/image";

export function MaheshwarIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Background Parallax */}
      <motion.div
        className="absolute inset-0 z-0 opacity-60"
        style={{ y: yBg }}
      >
        <Image
          src="/images/maheshwar/intro_hq.jpg"
          alt="Maheshwar Ghats"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12"
        style={{ opacity: opacityText, y: yText }}
      >
        <div className="flex-1 relative">
          <motion.div
            className="relative w-72 h-[400px] mx-auto md:mr-auto border-8 border-brand-gold/30 rounded-t-full overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            style={{ scale: scaleImage }}
          >
            <Image
              src={wedding.groom.photo}
              alt={wedding.groom.name}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex-1 text-center md:text-right">
          <p className="text-brand-gold-light text-xl font-serif italic mb-4">
            From the sacred ghats of {wedding.groom.hometown}...
          </p>
          <h2 className="text-brand-cream text-5xl md:text-7xl font-serif mb-6 drop-shadow-2xl">
            {wedding.groom.name}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto md:ml-auto md:mr-0 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
