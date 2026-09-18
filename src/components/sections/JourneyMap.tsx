"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Maheshwar",
    detail: "Karan’s home, on the historic ghats of the Narmada.",
  },
  {
    name: "River Narmada",
    detail: "A sacred river connecting our hometowns and our families.",
  },
  {
    name: "Omkareshwar",
    detail: "Damini’s home, where we begin our next chapter together.",
  },
];

export function JourneyMap() {
  const [active, setActive] = useState(0);
  return (
    <section className="journey-chapter" aria-labelledby="journey-heading">
      <span className="eyebrow">Connected by the Narmada</span>
      <h2 id="journey-heading">
        Two sacred towns.
        <br />
        <em>One destiny.</em>
      </h2>
      <div className="journey-locations">
        {locations.map((location, index) => (
          <button
            type="button"
            key={location.name}
            aria-pressed={active === index}
            aria-controls="journey-detail"
            onClick={() => setActive(index)}
          >
            <span>
              <MapPin size={21} aria-hidden="true" />
            </span>
            {location.name}
          </button>
        ))}
      </div>
      <p id="journey-detail" className="journey-detail" aria-live="polite">
        {locations[active].detail}
      </p>
    </section>
  );
}
