"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music4 } from "lucide-react";
import { cn } from "@/lib/utils";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt to play immediately on mount
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay blocked, waiting for interaction", err));
    }

    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(console.error);
        
        // Remove after successful play
        document.removeEventListener("click", handleInteraction);
        document.removeEventListener("touchstart", handleInteraction);
      }
    };

    const handleForcePlay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(console.error);
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    window.addEventListener("play-wedding-music", handleForcePlay);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("play-wedding-music", handleForcePlay);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  return (
    <>
      {/* Hidden Audio Element for better mobile browser support */}
      <audio 
        ref={audioRef} 
        src="/music/Vaaroon Forever.mp3" 
        loop 
        autoPlay 
        preload="auto"
      />
      
      <button
        onClick={toggleMusic}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full bg-brand-gold text-brand-dark shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-110",
          isPlaying ? "animate-[spin_4s_linear_infinite]" : ""
        )}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Music size={24} /> : <Music4 size={24} />}
      </button>
    </>
  );
}
