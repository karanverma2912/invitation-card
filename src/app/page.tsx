"use client";

import { useState } from "react";
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
import { MusicToggle } from "@/components/ui/MusicToggle";
import { ParticleSystem } from "@/components/ui/ParticleSystem";

export default function Home() {
  const [hasOpened, setHasOpened] = useState(false);

  return (
    <main className={`relative ${!hasOpened ? 'h-screen overflow-hidden' : ''}`}>
      <MusicToggle />
      {!hasOpened && <HeroOpening onOpen={() => setHasOpened(true)} />}
      
      {hasOpened && (
        <>
          <ParticleSystem />
          
          <div className="flex flex-col">
            <MaheshwarIntro />
            <OmkareshwarIntro />
            <JourneyMap />
            <CoupleReveal />
            <CountdownSection />
            <EventsTimeline />
            <BaraatJourney />
            <MandapScene />
            <InteractiveVows />
            <FamilySection />
            <ReceptionSection />
            <CinematicGallery />
            <RSVPContact />
            <ClosingScene />
          </div>
        </>
      )}
    </main>
  );
}
