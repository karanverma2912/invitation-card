"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, MapPin, CalendarHeart } from "lucide-react";
import { wedding } from "@/data/wedding";

export function RSVPContact() {
  const reduced = useReducedMotion();
  // A calendar event is offered only once the date, year and time are confirmed.
  const timestamp = wedding.dateISO ? Date.parse(wedding.dateISO) : NaN;
  const calendarDate = Number.isFinite(timestamp)
    ? new Date(timestamp)
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}Z$/, "Z")
    : null;
  const calendarEnd = Number.isFinite(timestamp)
    ? new Date(timestamp + 3 * 3600000)
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}Z$/, "Z")
    : null;
  const calendar =
    calendarDate && calendarEnd
      ? `https://calendar.google.com/calendar/render?${new URLSearchParams({ action: "TEMPLATE", text: `Wedding of ${wedding.groom.name} and ${wedding.bride.name}`, dates: `${calendarDate}/${calendarEnd}`, location: "Omkareshwar, Madhya Pradesh", details: "Join us for our wedding celebrations." })}`
      : null;

  return (
    <section className="rsvp-chapter" aria-labelledby="rsvp-heading">
      <motion.svg className="rsvp-envelope" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"
        initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.path d="M8 18 L40 3 L72 18 L72 54 L8 54 Z M8 18 L40 39 L72 18 M8 54 L29 33 M72 54 L51 33"
          variants={{ hidden: { pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }, visible: { pathLength: 1, opacity: 1 } }} transition={{ duration: reduced ? 0 : 1.6 }} />
      </motion.svg>
      <span className="eyebrow">Come celebrate with us</span>
      <motion.h2 id="rsvp-heading" initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        It wouldn’t be the same
        <br />
        <em>without you.</em>
      </motion.h2>
      <p>
        We would be honoured by your presence.
        <br />
        Kindly respond by 1 February.
      </p>
      <motion.div className="rsvp-actions" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.12 } } }}>
        <motion.a variants={{ hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }, visible: { opacity: 1, y: 0 } }} whileTap={reduced ? undefined : { scale: 0.96 }}
          className="gold-button"
          href={`https://wa.me/91${wedding.contact.phone}?text=${encodeURIComponent("Hi Karan and Damini! I would like to RSVP for your wedding on 11 February.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={19} aria-hidden="true" /> RSVP on WhatsApp
        </motion.a>
        <motion.a variants={{ hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }, visible: { opacity: 1, y: 0 } }} whileTap={reduced ? undefined : { scale: 0.96 }} className="outline-button" href={`tel:+91${wedding.contact.phone}`}>
          <Phone size={18} aria-hidden="true" /> Call the family
        </motion.a>
        <motion.a variants={{ hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }, visible: { opacity: 1, y: 0 } }} whileTap={reduced ? undefined : { scale: 0.96 }}
          className="text-button"
          href="https://www.google.com/maps/search/?api=1&query=Omkareshwar%2C+Madhya+Pradesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={17} aria-hidden="true" /> Explore Omkareshwar
        </motion.a>
        {calendar && (
          <motion.a variants={{ hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }, visible: { opacity: 1, y: 0 } }} whileTap={reduced ? undefined : { scale: 0.96 }}
            className="text-button"
            href={calendar}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarHeart size={17} aria-hidden="true" /> Save the date
          </motion.a>
        )}
      </motion.div>
      <p className="rsvp-detail">
        Wedding · {wedding.weddingDate} · Omkareshwar
        <br />
        Reception · {wedding.reception.date} · {wedding.reception.location}
      </p>
    </section>
  );
}
