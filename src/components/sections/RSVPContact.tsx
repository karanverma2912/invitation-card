"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, CalendarHeart } from "lucide-react";
import { wedding } from "@/data/wedding";

export function RSVPContact() {
  return (
    <section className="py-32 bg-brand-cream text-brand-dark">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon mb-6">
            We would be honoured by your presence.
          </h2>
          <p className="text-lg font-sans text-brand-dark/70 tracking-widest uppercase">
            Kindly respond by 1st February
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <motion.a 
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 border border-brand-gold/50 rounded hover:border-brand-gold hover:bg-brand-gold/5 transition-all group"
          >
            <CalendarHeart className="text-brand-maroon mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-serif text-lg">RSVP</span>
          </motion.a>
          
          <motion.a 
            href={`tel:+91${wedding.contact?.phone}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 border border-brand-gold/50 rounded hover:border-brand-gold hover:bg-brand-gold/5 transition-all group"
          >
            <Phone className="text-brand-maroon mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-serif text-lg">Call</span>
          </motion.a>
          
          <motion.a 
            href={`https://wa.me/91${wedding.contact?.phone}`}
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 border border-brand-gold/50 rounded hover:border-brand-gold hover:bg-brand-gold/5 transition-all group"
          >
            <MessageCircle className="text-brand-maroon mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-serif text-lg">WhatsApp</span>
          </motion.a>
          
          <motion.a 
            href="https://maps.google.com"
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 border border-brand-gold/50 rounded hover:border-brand-gold hover:bg-brand-gold/5 transition-all group"
          >
            <MapPin className="text-brand-maroon mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-serif text-lg">Directions</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
