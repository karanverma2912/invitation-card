"use client";

import { type PointerEvent, type ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/** Scroll depth on touch screens; a small, spring-driven tilt on mouse devices. */
export function DepthScene({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 90, damping: 24 });
  const rotateY = useSpring(tiltY, { stiffness: 90, damping: 24 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    tiltX.set((0.5 - (event.clientY - bounds.top) / bounds.height) * 7);
    tiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 9);
  }

  function reset() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <div
      ref={ref}
      className={`depth-scene ${className}`}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.div
        className="depth-scene-inner"
        style={reducedMotion ? undefined : { rotateX, rotateY, y }}
      >
        {children}
      </motion.div>
    </div>
  );
}
