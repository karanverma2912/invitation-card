"use client";

import { Phone, MessageCircle, MapPin, CalendarHeart } from "lucide-react";
import { wedding } from "@/data/wedding";

export function RSVPContact() {
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
      <span className="eyebrow">Come celebrate with us</span>
      <h2 id="rsvp-heading">
        It wouldn’t be the same
        <br />
        <em>without you.</em>
      </h2>
      <p>
        We would be honoured by your presence.
        <br />
        Kindly respond by 1 February.
      </p>
      <div className="rsvp-actions">
        <a
          className="gold-button"
          href={`https://wa.me/91${wedding.contact.phone}?text=${encodeURIComponent("Hi Karan and Damini! I would like to RSVP for your wedding on 11 February.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={19} aria-hidden="true" /> RSVP on WhatsApp
        </a>
        <a className="outline-button" href={`tel:+91${wedding.contact.phone}`}>
          <Phone size={18} aria-hidden="true" /> Call the family
        </a>
        <a
          className="text-button"
          href="https://www.google.com/maps/search/?api=1&query=Omkareshwar%2C+Madhya+Pradesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={17} aria-hidden="true" /> Explore Omkareshwar
        </a>
        {calendar && (
          <a
            className="text-button"
            href={calendar}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarHeart size={17} aria-hidden="true" /> Save the date
          </a>
        )}
      </div>
      <p className="rsvp-detail">
        Wedding · {wedding.weddingDate} · Omkareshwar
        <br />
        Reception · {wedding.reception.date} · {wedding.reception.location}
      </p>
    </section>
  );
}
