"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, CalendarHeart } from "lucide-react";
import { wedding } from "@/data/wedding";

export function RSVPContact() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    // Current year Feb 11
    const currentYear = new Date().getFullYear();
    const weddingDateStr = `${wedding.weddingDate} ${currentYear} 19:00:00`;
    const targetDate = new Date(weddingDateStr).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsWeddingDay(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-brand-cream text-brand-dark">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon mb-6">
            We would be honoured by your presence.
          </h2>
          <p className="text-lg font-sans text-brand-dark/70 tracking-widest uppercase">
            Kindly respond by 1st February
          </p>
        </motion.div>

        {isWeddingDay ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-6xl font-script text-brand-maroon py-8 mb-8"
          >
            आज शुभ विवाह है
          </motion.div>
        ) : (
          <div className="flex justify-center gap-3 md:gap-8 flex-wrap mb-16">
            {Object.entries(timeLeft).map(([unit, value], i) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border border-brand-gold/50 bg-white/50 shadow-sm relative group hover:border-brand-gold transition-colors"
              >
                <span className="text-2xl md:text-4xl font-serif font-bold text-brand-maroon mb-1">
                  {value.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-brand-dark/70">
                  {unit}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <motion.a 
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Karan+and+Damini&dates=20260211T133000Z/20260212T183000Z&details=Join+us+for+our+wedding+celebrations.&location=Omkareshwar,+Madhya+Pradesh"
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 border border-brand-gold/50 rounded hover:border-brand-gold hover:bg-brand-gold/5 transition-all group bg-white"
          >
            <CalendarHeart className="text-brand-maroon mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-serif text-lg text-center leading-tight">Save the<br/>Date</span>
          </motion.a>
          
          <motion.a 
            href={`tel:+91${wedding.contact?.phone}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 border border-brand-gold/50 rounded hover:border-brand-gold hover:bg-brand-gold/5 transition-all group bg-white"
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
            className="flex flex-col items-center justify-center p-6 border border-brand-gold/50 rounded hover:border-brand-gold hover:bg-brand-gold/5 transition-all group bg-white"
          >
            <MessageCircle className="text-brand-maroon mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-serif text-lg">WhatsApp</span>
          </motion.a>
          
          <motion.a 
            href="https://www.google.com/maps/place/Omkareshwar,+Madhya+Pradesh/@22.2424934,76.1270454,7924m/data=!3m2!1e3!4b1!4m10!1m2!2m1!1somkareshwar!3m6!1s0x3962bceec66c8013:0x7e70979675930b85!8m2!3d22.2417739!4d76.1493891!15sCgtvbWthcmVzaHdhcpIBCGxvY2FsaXR54AEA!16s%2Fg%2F1yp1bb5j3?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 border border-brand-gold/50 rounded hover:border-brand-gold hover:bg-brand-gold/5 transition-all group bg-white"
          >
            <MapPin className="text-brand-maroon mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-serif text-lg">Directions</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
