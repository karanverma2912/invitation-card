"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { wedding } from "@/data/wedding";

export function HeroOpening({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.15 : 1.25;

  return (
    <AnimatePresence onExitComplete={onOpen}>
      {!opening && (
        <motion.section
          className="invitation-cover"
          aria-label="Open the wedding invitation"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: reducedMotion ? 0 : 1 }}
        >
          <div className="cover-backdrop" aria-hidden="true" />
          {["left", "right"].map((side) => (
            <motion.div
              key={side}
              aria-hidden="true"
              className={`cover-door cover-door-${side}`}
              exit={{
                rotateY: reducedMotion ? 0 : side === "left" ? -105 : 105,
              }}
              transition={{ duration, ease: [0.65, 0, 0.35, 1] }}
            >
              <div className="door-inlay" />
              <div className="door-handle" />
            </motion.div>
          ))}
          <motion.div
            className="cover-content"
            exit={{ opacity: 0, y: reducedMotion ? 0 : -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="cover-blessing">
              <p lang="hi">॥ श्री गणेशाय नमः ॥</p>
              <span className="eyebrow">
                With the blessings of our families
              </span>
            </div>
            <div className="cover-title">
              <span className="eyebrow">A wedding invitation</span>
              <h2>
                {wedding.groom.name.split(" ")[0]} <i>&amp;</i>{" "}
                {wedding.bride.name.split(" ")[0]}
              </h2>
              <div className="ornament" aria-hidden="true">
                ✧
              </div>
              <p>
                {wedding.weddingDate} <span>·</span> Omkareshwar
              </p>
            </div>
            <div className="cover-action">
              <button
                className="gold-button"
                disabled={opening}
                onClick={() => setOpening(true)}
              >
                Open our invitation{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              <span className="cover-note">
                A little love story. A lifetime together.
              </span>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
