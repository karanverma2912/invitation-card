"use client";

import { useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

export function MusicToggle() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  async function toggle() {
    if (!audio.current) return;
    if (!audio.current.paused) {
      audio.current.pause();
      return;
    }
    try {
      await audio.current.play();
      setError(false);
    } catch {
      setError(true);
    }
  }

  return (
    <>
      <audio
        ref={audio}
        src="/music/Vaaroon Forever.mp3"
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setError(true);
        }}
      />
      <button
        type="button"
        onClick={toggle}
        className="music-toggle"
        aria-label={playing ? "Pause music" : "Play music"}
        aria-pressed={playing}
      >
        {playing ? (
          <Music2 size={19} aria-hidden="true" />
        ) : (
          <VolumeX size={19} aria-hidden="true" />
        )}
        <span>{playing ? "Sound on" : "Sound off"}</span>
      </button>
      {error && (
        <p role="status" className="music-error">
          Music could not play. Tap to try again.
        </p>
      )}
    </>
  );
}
