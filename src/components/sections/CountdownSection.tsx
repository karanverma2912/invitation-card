"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";

export function CountdownSection() {
  const [remaining, setRemaining] = useState<number | null>(null);
  const timestamp = wedding.dateISO ? Date.parse(wedding.dateISO) : NaN;
  useEffect(() => {
    if (!Number.isFinite(timestamp)) return;
    const update = () => setRemaining(Math.max(0, timestamp - Date.now()));
    const kickoff = window.setTimeout(update, 0);
    const timer = window.setInterval(update, 1000);
    return () => {
      window.clearTimeout(kickoff);
      window.clearInterval(timer);
    };
  }, [timestamp]);
  const units =
    remaining === null
      ? []
      : [
          ["Days", Math.floor(remaining / 86400000)],
          ["Hours", Math.floor(remaining / 3600000) % 24],
          ["Minutes", Math.floor(remaining / 60000) % 60],
          ["Seconds", Math.floor(remaining / 1000) % 60],
        ];

  return (
    <section className="date-chapter" aria-label="Wedding date">
      <span className="eyebrow">A date close to our hearts</span>
      <h2>{wedding.weddingDate}</h2>
      <div className="ornament" aria-hidden="true">
        ✧
      </div>
      {remaining !== null && remaining > 0 ? (
        <div className="countdown-grid">
          {units.map(([label, value]) => (
            <div key={label}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>
          {remaining === 0
            ? "Our forever has begun."
            : "Your presence will make our celebration complete."}
        </p>
      )}
    </section>
  );
}
