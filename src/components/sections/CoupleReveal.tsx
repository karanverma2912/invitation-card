/* eslint-disable */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { wedding } from "@/data/wedding";
import Image from "next/image";

export function CoupleReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });

  // Calculate the movement based on scroll
  const xGroom = useTransform(scrollYProgress, [0, 1], ["-50vw", "0vw"]);
  const xBride = useTransform(scrollYProgress, [0, 1], ["50vw", "0vw"]);
  const opacityIndividuals = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const opacityCouple = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const scaleCouple = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[150vh] bg-brand-cream"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* The Merging Portraits */}
        <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">

          {/* Groom Portrait */}
          <motion.div
            className="absolute z-10 w-64 h-80 rounded-t-full border-4 border-brand-gold overflow-hidden"
            style={{ x: xGroom, opacity: opacityIndividuals }}
          >
            <Image
              src={wedding.groom.photo}
              alt={wedding.groom.name}
              fill
              className="object-cover grayscale"
            />
          </motion.div>

          {/* Bride Portrait */}
          <motion.div
            className="absolute z-10 w-64 h-80 rounded-t-full border-4 border-brand-maroon overflow-hidden"
            style={{ x: xBride, opacity: opacityIndividuals }}
          >
            <Image
              src={wedding.bride.photo}
              alt={wedding.bride.name}
              fill
              className="object-cover grayscale"
            />
          </motion.div>

          {/* Couple Portrait (Revealed when merged) */}
          <motion.div
            className="absolute z-20 w-80 h-[400px] rounded-t-full border-8 border-brand-gold bg-brand-dark overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            style={{ opacity: opacityCouple, scale: scaleCouple }}
          >
            <Image
              src="/images/couple/together.jpeg" // Use a couple placeholder here
              alt="Karan & Damini"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-dark to-transparent text-center">
              <h3 className="text-brand-gold-light font-script text-4xl">
                Karan &amp; Damini
              </h3>
            </div>
          </motion.div>

        </div>

        {/* Text appearing below */}
        <motion.div
          className="mt-12 text-center"
          style={{ opacity: opacityCouple }}
        >
          <p className="text-brand-maroon font-serif text-2xl italic tracking-widest">
            "And two stories became one."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
