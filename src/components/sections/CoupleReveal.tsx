"use client";

import Image from "next/image";
import coupleCutout from "../../../public/images/couple/couple-cutout.png";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { wedding } from "@/data/wedding";
import { DepthScene } from "@/components/ui/DepthScene";

export function CoupleReveal() {
  return (
    <section className="couple-hero" aria-labelledby="couple-heading">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="tiny-star" aria-hidden="true">
            ✧
          </span>{" "}
          Two hearts. One beautiful beginning.
        </p>
        <h1 id="couple-heading" tabIndex={-1}>
          {wedding.groom.name.split(" ")[0]}
          <br />
          <span>
            &amp; <em>{wedding.bride.name.split(" ")[0]}</em>
          </span>
        </h1>
        <p className="hero-intro">
          From the banks of the Narmada to a lifetime of togetherness. With our
          families, we invite you to be part of our next chapter.
        </p>
        <div className="hero-date">
          <span>11</span>
          <div>
            February<small>Omkareshwar, Madhya Pradesh</small>
          </div>
        </div>
        <a href="#celebrations" className="gold-button">
          Explore the celebrations <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <p className="hero-footnote">
          With love, the Verma &amp; Shivde families
        </p>
      </div>
      <DepthScene className="hero-scene">
        <div className="scene-halo" aria-hidden="true" />
        <div className="scene-arch scene-arch-back" aria-hidden="true" />
        <div className="scene-arch scene-arch-front" aria-hidden="true">
          <Image
            src="/images/maheshwar/intro_hq.jpg"
            alt=""
            fill
            sizes="(max-width: 767px) 80vw, 480px"
            className="scene-landscape"
          />
          <div className="scene-sunset" />
        </div>
        <div className="scene-orbit" aria-hidden="true">
          <span>✧</span>
        </div>
        <div className="scene-portrait">
          <Image
            src={coupleCutout}
            alt={`${wedding.bride.name} and ${wedding.groom.name}`}
            fill
            sizes="(max-width: 767px) 88vw, 540px"
            loading="eager"
            className="couple-cutout"
          />
        </div>
        <div className="scene-petal scene-petal-one" aria-hidden="true" />
        <div className="scene-petal scene-petal-two" aria-hidden="true" />
        <div className="scene-petal scene-petal-three" aria-hidden="true" />
        <div className="scene-caption">
          <span className="eyebrow">Our forever begins</span>
          <span>{wedding.weddingDate}</span>
        </div>
        <div className="scene-seal" aria-hidden="true">
          K<span>&amp;</span>D
        </div>
      </DepthScene>
      <a className="hero-scroll" href="#our-story">
        <ArrowDown size={16} aria-hidden="true" /> Discover our story
      </a>
    </section>
  );
}
