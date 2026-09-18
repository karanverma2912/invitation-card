"use client";

import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import { HeroOpening } from "@/components/sections/HeroOpening";
import { MaheshwarIntro } from "@/components/sections/MaheshwarIntro";
import { OmkareshwarIntro } from "@/components/sections/OmkareshwarIntro";
import { JourneyMap } from "@/components/sections/JourneyMap";
import { CoupleReveal } from "@/components/sections/CoupleReveal";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { EventsTimeline } from "@/components/sections/EventsTimeline";
import { BaraatJourney } from "@/components/sections/BaraatJourney";
import { MandapScene } from "@/components/sections/MandapScene";
import { InteractiveVows } from "@/components/sections/InteractiveVows";
import { FamilySection } from "@/components/sections/FamilySection";
import { ReceptionSection } from "@/components/sections/ReceptionSection";
import { CinematicGallery } from "@/components/sections/CinematicGallery";
import { RSVPContact } from "@/components/sections/RSVPContact";
import { ClosingScene } from "@/components/sections/ClosingScene";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MusicToggle, type MusicHandle } from "@/components/ui/MusicToggle";
import { ParticleSystem } from "@/components/ui/ParticleSystem";

export default function Home() {
  const music = useRef<MusicHandle>(null);
  const [hasOpened, setHasOpened] = useState(false);
  useEffect(() => {
    if (hasOpened) {
      document.getElementById("couple-heading")?.focus({ preventScroll: true });
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [hasOpened]);

  return (
    <MotionConfig reducedMotion="user">
      {!hasOpened && <HeroOpening onStart={() => music.current?.play()} onOpen={() => setHasOpened(true)} />}
      <MusicToggle ref={music} visible={hasOpened} />
      <div inert={!hasOpened} aria-hidden={!hasOpened}>
        <a href="#couple-heading" className="skip-link">
          Skip to invitation
        </a>
        <header className="invitation-header">
          <a
            href="#invitation"
            className="monogram"
            aria-label="Karan and Damini, back to invitation"
          >
            K<span>&amp;</span>D
          </a>
          <nav aria-label="Invitation sections">
            <a href="#our-story">Our story</a>
            <a href="#celebrations">Celebrations</a>
            <a href="#memories">Memories</a>
            <a href="#rsvp">RSVP</a>
          </nav>
          <span className="header-date">11 · FEB</span>
        </header>
        <main id="invitation">
          <CoupleReveal />
          {hasOpened && (
            <>
              <ParticleSystem />
              <div id="our-story" className="story-chapter">
                <div className="chapter-heading">
                  <span className="eyebrow">01 / Where it all begins</span>
                  <h2>Two towns, one love story.</h2>
                </div>
                <MaheshwarIntro />
                <OmkareshwarIntro />
              </div>
              <ScrollReveal><JourneyMap /></ScrollReveal>
              <ScrollReveal><CountdownSection /></ScrollReveal>
              <div id="celebrations">
                <EventsTimeline />
              </div>
              <ScrollReveal><BaraatJourney /></ScrollReveal>
              <ScrollReveal><MandapScene /></ScrollReveal>
              <ScrollReveal><InteractiveVows /></ScrollReveal>
              <ScrollReveal><FamilySection /></ScrollReveal>
              <ScrollReveal><ReceptionSection /></ScrollReveal>
              <div id="memories">
                <CinematicGallery />
              </div>
              <div id="rsvp">
                <RSVPContact />
              </div>
              <ScrollReveal><ClosingScene /></ScrollReveal>

            </>
          )}
        </main>
      </div>
    </MotionConfig>
  );
}
