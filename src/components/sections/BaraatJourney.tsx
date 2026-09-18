"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { wedding } from "@/data/wedding";

export function BaraatJourney() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section ref={ref} className="baraat-chapter" aria-labelledby="baraat-heading">
      <div className="baraat-image">
        <motion.div className="baraat-image-layer" style={reduced ? undefined : { y }}>
        <Image
          src="/images/maheshwar/intro_hq.jpg"
          alt="The ghats of Maheshwar, where the baraat begins"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
        </motion.div>
      </div>
      <div className="baraat-copy">
        <span className="eyebrow">The journey to forever</span>
        <h2 id="baraat-heading">
          The baraat{" "}
          <br />
          <em>begins.</em>
        </h2>
        <p>
          From {wedding.groom.hometown}, Karan’s baraat makes its way to{" "}
          {wedding.bride.hometown}, bringing two families together in
          celebration.
        </p>
        <div className="baraat-route">
          <span>Maheshwar</span>
          <ArrowRight size={24} aria-hidden="true" />
          <span>Omkareshwar</span>
        </div>
      </div>
    </section>
  );
}
