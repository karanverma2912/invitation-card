"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Maheshwar",
    detail: "Karan’s home, on the historic ghats of the Narmada.",
  },
  {
    name: "River Narmada",
    detail: "A sacred river connecting our hometowns and our families.",
  },
  {
    name: "Omkareshwar",
    detail: "Damini’s home, where we begin our next chapter together.",
  },
];

export function JourneyMap() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  return (
    <section className="journey-chapter" aria-labelledby="journey-heading">
      <span className="eyebrow">Connected by the Narmada</span>
      <h2 id="journey-heading">
        Two sacred towns.
        <br />
        <em>One destiny.</em>
      </h2>
      <div className="journey-locations">
        <motion.div className="journey-thread" aria-hidden="true" initial={{ scaleX: reduced ? 1 : 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
        {locations.map((location, index) => (
          <motion.button
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.16, duration: 0.5 }}
            whileTap={reduced ? undefined : { scale: 0.93 }}
            type="button"
            key={location.name}
            aria-pressed={active === index}
            aria-controls="journey-detail"
            onClick={() => setActive(index)}
          >
            <span>
              <MapPin size={21} aria-hidden="true" />
            </span>
            {location.name}
          </motion.button>
        ))}
      </div>
      <motion.p key={active} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} id="journey-detail" className="journey-detail" aria-live="polite">
        {locations[active].detail}
      </motion.p>
    </section>
  );
}
