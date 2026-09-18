"use client";

import { type CSSProperties } from "react";

// Deterministic positions avoid hydration changes and rerender-time randomness.
export function ParticleSystem() {
  return (
    <div className="petal-field" aria-hidden="true">
      {Array.from({ length: 36 }, (_, i) => (
        <span
          key={i}
          style={
            {
              "--petal-drift": `${i % 2 ? -45 : 45}px`,
              "--petal-left": `${(i * 37 + 13) % 100}%`,
              "--petal-delay": `${-i * 2.7}s`,
              "--petal-duration": `${16 + (i % 11)}s`,
              "--petal-size": `${7 + (i % 8)}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
