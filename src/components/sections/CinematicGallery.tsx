"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react";

const images = [
  {
    src: "/images/couple/together3.jpeg",
    alt: "Karan and Damini together in the garden",
    caption: "Little moments",
  },
  {
    src: "/images/couple/together2.jpeg",
    alt: "Karan and Damini on a day out",
    caption: "A favourite kind of day",
  },
  {
    src: "/images/couple/together.jpeg",
    alt: "Karan and Damini dressed for a celebration",
    caption: "Our beautiful beginning",
  },
  {
    src: "/images/couple/together4.jpeg",
    alt: "A candid moment between Karan and Damini",
    caption: "Always, you",
  },
];

export function CinematicGallery() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const isOpen = selected !== null;

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previous;
      lastTrigger.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function step(amount: number) {
    setSelected((current) =>
      current === null
        ? null
        : (current + amount + images.length) % images.length,
    );
  }

  return (
    <section className="gallery-chapter" aria-labelledby="gallery-heading">
      <motion.div className="gallery-heading" initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <div>
          <span className="eyebrow">A few pages from our story</span>
          <h2 id="gallery-heading">Us, in moments.</h2>
        </div>
        <p>
          Small moments.
          <br />
          Memories for a lifetime.
        </p>
      </motion.div>
      <div className="gallery-grid">
        {images.map((photo, index) => (
          <motion.div className="memory-reveal" key={photo.src}
            initial={reduced ? false : { opacity: 0, y: 48, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: (index % 2) * 0.12 }}
          >
          <button
            type="button"
            className="memory-card"
            aria-label={`View photo: ${photo.caption}`}
            onClick={(event) => {
              lastTrigger.current = event.currentTarget;
              setSelected(index);
            }}
          >
            <div className="memory-photo">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 600px) 75vw, (max-width: 1000px) 40vw, 25vw"
                className="object-cover"
              />
            </div>
            <span className="memory-caption">
              <span>{photo.caption}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </button>
          </motion.div>
        ))}
      </div>
      <p className="gallery-hint">Tap a photograph to step a little closer.</p>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label="Wedding photo gallery"
        onCancel={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            step(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(-1);
          }
        }}
      >
        {selected !== null && (
          <>
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close photo"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <button
              type="button"
              className="lightbox-prev"
              aria-label="Previous photo"
              onClick={() => step(-1)}
            >
              <ChevronLeft />
            </button>
            <figure
              onTouchStart={(event) => {
                touchX.current = event.touches[0].clientX;
              }}
              onTouchEnd={(event) => {
                if (touchX.current !== null) {
                  const distance =
                    event.changedTouches[0].clientX - touchX.current;
                  if (Math.abs(distance) > 55) step(distance < 0 ? 1 : -1);
                }
                touchX.current = null;
              }}
            >
              <div className="lightbox-image">
                <Image
                  src={images[selected].src}
                  alt={images[selected].alt}
                  fill
                  sizes="(max-width: 767px) 90vw, 75vw"
                  className="object-contain"
                />
              </div>
              <figcaption aria-live="polite">
                {images[selected].caption}{" "}
                <span>
                  {selected + 1} / {images.length}
                </span>
              </figcaption>
            </figure>
            <button
              type="button"
              className="lightbox-next"
              aria-label="Next photo"
              onClick={() => step(1)}
            >
              <ChevronRight />
            </button>
          </>
        )}
      </dialog>
    </section>
  );
}
