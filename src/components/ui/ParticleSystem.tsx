/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // viewport width %
      y: -10 - (Math.random() * 120), // Spatially distribute them in a long column above the screen (from -10vh to -130vh)
      size: Math.random() * 15 + 10,
      duration: Math.random() * 5 + 15, // fall duration (15-20s)
      delay: Math.random() * 1.5 + 1.5, // All start moving between 1.5s - 3s
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-60 mix-blend-multiply bg-brand-maroon"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: p.size,
            height: p.size,
            borderRadius: "50% 0 50% 50%", // petal shape
          }}
          animate={{
            y: ["0vh", "120vh"],
            x: [`0vw`, `${(Math.random() - 0.5) * 20}vw`],
            rotate: [p.rotation, p.rotation + 360 * 2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
