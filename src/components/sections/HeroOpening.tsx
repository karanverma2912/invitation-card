"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "@/data/wedding";

export function HeroOpening({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("play-wedding-music"));
    }
    setTimeout(() => {
      onOpen();
    }, 1500); // Give time for doors to open before enabling scroll/music
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-brand-dark overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Left Door */}
          <motion.div
            className="absolute z-0 left-0 top-0 bottom-0 w-1/2 bg-[url('/images/backgrounds/mandap2.png')] md:bg-[url('/images/backgrounds/mandap.jpg')] bg-cover bg-[position:25%_center] md:bg-left border-r-[4px] md:border-r-[10px] border-brand-gold shadow-2xl"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-32 border-2 border-brand-gold rounded-l-full bg-brand-dark/50" />
          </motion.div>

          {/* Right Door */}
          <motion.div
            className="absolute z-0 right-0 top-0 bottom-0 w-1/2 bg-[url('/images/backgrounds/mandap2.png')] md:bg-[url('/images/backgrounds/mandap.jpg')] bg-cover bg-[position:75%_center] md:bg-right border-l-[4px] md:border-l-[10px] border-brand-gold shadow-2xl"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-32 border-2 border-brand-gold rounded-r-full bg-brand-dark/50" />
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="relative z-50 flex flex-col items-center justify-between text-center p-4 py-16 md:py-24 w-full h-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // removed exit here to let children animate individually
          >
            <div className="flex flex-col items-center mt-4 md:mt-8">
              <motion.div 
                className="bg-brand-dark/80 backdrop-blur-md rounded-2xl border border-brand-gold bg-glow p-4 md:p-6 mb-8 inline-block shadow-lg"
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <h2 className="text-brand-gold text-xl md:text-2xl font-serif mb-2 tracking-widest text-glow">
                  ॥ श्री गणेशाय नमः ॥
                </h2>
                <p className="text-brand-cream text-xs md:text-lg font-sans uppercase tracking-widest">
                  With the blessings of our families
                </p>
              </motion.div>

              <motion.h1 
                className="text-brand-gold-light text-5xl md:text-7xl font-script mb-2 md:mb-6 leading-tight drop-shadow-md"
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {wedding.groom.name.split(" ")[0]}
                <span className="text-brand-gold text-3xl font-serif mx-2 md:mx-4">&amp;</span>
                {wedding.bride.name.split(" ")[0]}
              </motion.h1>
              <motion.p 
                className="text-brand-gold text-2xl font-serif tracking-widest mb-4 drop-shadow-md"
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {wedding.weddingDate}
              </motion.p>
            </div>

            <motion.button
              onClick={handleOpen}
              className="mb-8 md:mb-12 px-8 py-3 bg-brand-gold text-brand-dark font-serif uppercase tracking-widest rounded shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:bg-brand-gold-light transition-all duration-300 hover:scale-105"
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              Open Our Invitation
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
