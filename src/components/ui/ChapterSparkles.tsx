"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function ChapterSparkles() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  return (
    <div ref={ref} className="chapter-sparkles" data-active={visible && !reduced} aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} style={{ left: `${8 + (i * 31) % 84}%`, top: `${8 + (i * 23) % 80}%`, animationDelay: `${-i * 0.7}s` }}>✧</span>
      ))}
    </div>
  );
}
