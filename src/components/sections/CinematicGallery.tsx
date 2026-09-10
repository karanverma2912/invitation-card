"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { wedding } from "@/data/wedding";

const images = [
  { id: 1, src: wedding.groom.photo, alt: "Karan", row: 1 },
  { id: 2, src: wedding.bride.photo, alt: "Damini", row: 1 },
  { id: 3, src: "/images/couple/together3.jpeg", alt: "Couple", row: 2 },
  { id: 4, src: "/images/couple/together2.jpeg", alt: "Celebration", row: 2 },
  { id: 5, src: "/images/couple/together.jpeg", alt: "Maheshwar", row: 3 },
  { id: 6, src: "/images/omkareshwar/intro.jpg", alt: "Omkareshwar", row: 3 },
];

export function CinematicGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-32 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-gold mb-4">
            Memories
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative w-full break-inside-avoid overflow-hidden rounded cursor-pointer group border-2 border-brand-gold/30 hover:border-brand-gold transition-colors"
              onClick={() => setSelectedImage(i)}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 md:left-12 text-white hover:text-brand-gold transition-colors p-2 z-10"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-square md:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            <button
              className="absolute right-4 md:right-12 text-white hover:text-brand-gold transition-colors p-2 z-10"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
