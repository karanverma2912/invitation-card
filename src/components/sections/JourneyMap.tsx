"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "maheshwar",
    name: "Maheshwar",
    desc: "The historic city of Ahilyabai Holkar and serene ghats.",
    align: "left"
  },
  {
    id: "narmada",
    name: "River Narmada",
    desc: "The sacred flowing blessing connecting two families.",
    align: "center"
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    desc: "The divine island of Jyotirlinga.",
    align: "right"
  }
];

export function JourneyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-brand-dark overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 opacity-80 bg-[url('/images/backgrounds/mandap2.png')] md:bg-[url('/images/backgrounds/mandap.jpg')] bg-cover bg-center md:bg-fixed" />

      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h3
          className="text-brand-gold text-2xl md:text-4xl font-serif mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Two sacred towns.<br />Two families.<br />One destiny.
        </motion.h3>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-8 h-[400px] flex flex-col items-center">
        {/* The Golden River Path */}
        <svg
          viewBox="0 0 800 200"
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-visible"
        >
          <motion.path
            d="M 50,100 Q 250,0 400,100 T 750,100"
            fill="transparent"
            stroke="rgba(212, 175, 55, 0.2)"
            strokeWidth="4"
          />
          <motion.path
            d="M 50,100 Q 250,0 400,100 T 750,100"
            fill="transparent"
            stroke="#D4AF37"
            strokeWidth="6"
            style={{ pathLength }}
            className="drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          />
        </svg>

        {/* The Location Pins */}
        <div className="absolute inset-0 flex justify-between items-center px-4 md:px-12">
          {locations.map((loc, i) => (
            <div
              key={loc.id}
              className={`relative flex flex-col items-center cursor-pointer group`}
              onMouseEnter={() => setActiveLocation(loc.id)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.3, type: "spring" }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform"
              >
                <MapPin size={24} />
              </motion.div>

              <AnimatePresence>
                {activeLocation === loc.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-16 w-48 bg-brand-cream text-brand-dark p-4 rounded text-center shadow-xl border border-brand-gold z-20"
                  >
                    <h4 className="font-serif font-bold text-lg mb-2 text-brand-maroon">{loc.name}</h4>
                    <p className="text-sm font-sans">{loc.desc}</p>
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
