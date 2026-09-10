"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 0.8, 
      smoothWheel: true,
      wheelMultiplier: 0.85 // Just a 15% reduction in scroll distance
    }}>
      {children}
    </ReactLenis>
  );
}
