"use client";

import { type Ref, useImperativeHandle, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

export type MusicHandle = { play: () => void };

export function MusicToggle({ ref, visible }: { ref: Ref<MusicHandle>; visible: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useImperativeHandle(ref, () => ({
    play() {
      const promise = audio.current?.play();
      promise?.then(() => setError(false)).catch(() => setError(true));
    },
  }), []);

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
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setError(true);
        }}
      />
      {visible && <button
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
      </button>}
      {visible && error && (
        <p role="status" className="music-error">
          Music could not play. Tap to try again.
        </p>
      )}
    </>
  );
}
