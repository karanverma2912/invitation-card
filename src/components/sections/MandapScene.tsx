"use client";

import Image from "next/image";
import { DepthScene } from "@/components/ui/DepthScene";
import { wedding } from "@/data/wedding";

export function MandapScene() {
  return (
    <section className="mandap-chapter" aria-labelledby="mandap-heading">
      <div className="mandap-backdrop" aria-hidden="true" />
      <div className="mandap-copy">
        <span className="eyebrow">The sacred promise</span>
        <h2 id="mandap-heading">
          A moment.{" "}
          <br />
          <em>A lifetime.</em>
        </h2>
        <p>
          Two souls. Two families.
          <br />
          One beautiful forever.
        </p>
        <span className="mandap-date">{wedding.weddingDate} · Omkareshwar</span>
      </div>
      <DepthScene className="mandap-scene">
        <div className="mandap-frame" aria-hidden="true" />
        <div className="mandap-photo">
          <Image
            src="/images/couple/together4.jpeg"
            alt="Karan and Damini sharing a moment together"
            fill
            sizes="(max-width: 767px) 80vw, 420px"
            className="object-cover"
          />
        </div>
        <div className="mandap-word" aria-hidden="true">
          forever
        </div>
        <div className="scene-petal scene-petal-one" aria-hidden="true" />
        <div className="scene-petal scene-petal-three" aria-hidden="true" />
      </DepthScene>
    </section>
  );
}
