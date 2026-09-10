"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export function FamilySection() {
  return (
    <section className="py-32 bg-brand-dark text-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/mandap2.png')] md:bg-[url('/images/backgrounds/mandap.jpg')] opacity-10 bg-cover bg-center md:bg-fixed" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-brand-gold mb-4">
            Two Families, One Celebration
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 max-w-6xl mx-auto">
          
          {/* Groom's Family */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center border border-brand-gold/20 p-8 rounded-xl bg-brand-dark/50 backdrop-blur-sm"
          >
            <div className="text-brand-gold font-sans uppercase tracking-widest text-sm mb-6">
              Maheshwar
            </div>
            <h3 className="text-3xl font-serif text-brand-gold-light mb-8">The Verma Family</h3>
            <div className="space-y-4 font-serif text-lg">
              <p>{wedding.groom.parents?.father}</p>
              <p>{wedding.groom.parents?.mother}</p>
              <div className="w-12 h-px bg-brand-gold/30 mx-auto my-6" />
              <p>And all relatives & friends</p>
            </div>
          </motion.div>

          {/* Bride's Family */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center border border-brand-gold/20 p-8 rounded-xl bg-brand-dark/50 backdrop-blur-sm"
          >
            <div className="text-brand-gold font-sans uppercase tracking-widest text-sm mb-6">
              Omkareshwar
            </div>
            <h3 className="text-3xl font-serif text-brand-gold-light mb-8">The Shivde Family</h3>
            <div className="space-y-4 font-serif text-lg">
              <p>{wedding.bride.parents?.father}</p>
              <p>{wedding.bride.parents?.mother}</p>
              <div className="w-12 h-px bg-brand-gold/30 mx-auto my-6" />
              <p>And all relatives & friends</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
