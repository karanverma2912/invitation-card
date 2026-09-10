/* eslint-disable */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BaraatJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xBaraat = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-brand-dark"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/backgrounds/mandap2.png')] md:bg-[url('/images/backgrounds/mandap.jpg')] bg-cover bg-center md:bg-top opacity-5" />
        
        {/* Title */}
        <motion.div 
          className="absolute top-24 left-0 w-full text-center z-20 px-4"
          style={{ opacity: opacityText }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-brand-gold mb-4">
            The Baraat Begins
          </h2>
          <p className="text-brand-cream text-lg md:text-xl font-sans tracking-widest max-w-2xl mx-auto">
            From Maheshwar, Karan's baraat begins its journey towards Omkareshwar.
          </p>
        </motion.div>

        {/* The Animated Scene */}
        <div className="relative w-full h-64 mt-32">
          
          {/* Path Line */}
          <div className="absolute top-1/2 left-0 w-full border-t-2 border-brand-gold/30 border-dashed -translate-y-1/2" />
          
          {/* Start and End Labels */}
          <div className="absolute top-1/2 left-8 md:left-24 -translate-y-1/2 -translate-x-1/2 text-brand-gold/50 font-serif text-2xl -rotate-90 md:rotate-0 tracking-widest">
            MAHESHWAR
          </div>
          <div className="absolute top-1/2 right-8 md:right-24 -translate-y-1/2 translate-x-1/2 text-brand-gold/50 font-serif text-2xl rotate-90 md:rotate-0 tracking-widest">
            OMKARESHWAR
          </div>

          {/* The Moving Baraat Silhouette */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-full -translate-y-1/2">
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 w-48 h-32 md:w-64 md:h-48"
              style={{ left: xBaraat, x: "-50%" }}
            >
              {/* Silhouette representation (horse, procession) using pure CSS shapes for now, can be replaced with an SVG/Image */}
              <div className="relative w-full h-full flex items-end justify-center drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                {/* Horse/Carriage abstract */}
                <div className="w-16 h-16 bg-brand-gold rounded-full absolute left-4 bottom-4 animate-bounce" style={{ animationDuration: '0.8s' }} />
                <div className="w-12 h-12 bg-brand-gold rounded-full absolute left-20 bottom-0 animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0.2s' }} />
                <div className="w-10 h-10 bg-brand-gold rounded-full absolute right-8 bottom-2 animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.1s' }} />
                
                <p className="absolute -top-8 text-brand-gold font-sans text-sm tracking-widest uppercase animate-pulse">
                  The Procession
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Floating Petals specific to Baraat */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-50">
           {Array.from({ length: 20 }).map((_, i) => (
             <div
               key={i}
               className="absolute w-2 h-2 md:w-3 md:h-3 bg-brand-gold rounded-full"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animation: `float ${Math.random() * 3 + 2}s linear infinite`,
               }}
             />
           ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
        }
      `}} />
    </section>
  );
}
