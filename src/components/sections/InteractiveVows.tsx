"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const vows = [
  {
    title: "साथ",
    english: "Togetherness",
    desc: "A promise to walk side by side, in every chapter of life.",
  },
  {
    title: "विश्वास",
    english: "Trust",
    desc: "The foundation of our love, unbreakable and pure.",
  },
  {
    title: "प्रेम",
    english: "Love",
    desc: "An eternal flame that guides our journey together.",
  },
  {
    title: "सम्मान",
    english: "Respect",
    desc: "Honoring each other’s individuality and dreams.",
  },
  {
    title: "परिवार",
    english: "Family",
    desc: "Two families united, sharing joy and heritage.",
  },
];

export function InteractiveVows() {
  const [active, setActive] = useState(0);
  return (
    <section className="vows-chapter" aria-labelledby="vows-heading">
      <span className="eyebrow">The promises we carry</span>
      <h2 id="vows-heading">Our forever, in five words.</h2>
      <div className="vows-grid">
        {vows.map((vow, index) => (
          <motion.button
            type="button"
            key={vow.english}
            aria-pressed={active === index}
            aria-controls="vow-description"
            onClick={() => setActive(index)}
            whileHover={{ y: -6 }}
            className="vow-card"
          >
            <span lang="hi">{vow.title}</span>
            <small>{vow.english}</small>
            <i aria-hidden="true">✧</i>
          </motion.button>
        ))}
      </div>
      <p id="vow-description" aria-live="polite" className="vow-description">
        {vows[active].desc}
      </p>
    </section>
  );
}
