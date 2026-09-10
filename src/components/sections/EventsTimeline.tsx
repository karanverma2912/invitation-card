"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { wedding } from "@/data/wedding";

export function EventsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section 
      ref={containerRef} 
      className="py-32 bg-brand-cream relative"
    >
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-brand-maroon mb-4">
            विवाह के शुभ उत्सव
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-brand-gold/30 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-brand-gold origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {wedding.events.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center md:justify-between w-full">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-brand-cream border-4 border-brand-gold -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                  />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.2)" }}
                    className={`ml-12 md:ml-0 md:w-[45%] p-6 md:p-8 rounded-xl bg-white border border-brand-gold/20 shadow-lg transition-all duration-300 relative group overflow-hidden ${
                      isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                    }`}
                  >
                    <div className="absolute inset-0 bg-brand-gold/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-brand-maroon/10 text-brand-maroon text-sm font-sans uppercase tracking-wider rounded-full mb-4">
                        {event.date}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-serif text-brand-dark mb-2">
                        {event.title}
                      </h4>
                      {event.time && (
                        <p className="text-brand-dark/70 font-sans">{event.time}</p>
                      )}
                      {event.location && (
                        <p className="text-brand-gold font-sans mt-2">{event.location}</p>
                      )}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
