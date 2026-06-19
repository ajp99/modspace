import { useState } from "react";
import { cn } from "@/lib/cn";

export default function HeaderLogo({ videoSrc, className }: { videoSrc?: string; className?: string }) {
  const [videoEnded, setVideoEnded] = useState(!videoSrc);

  return (
    <div className={cn("relative overflow-hidden origin-left transition-all duration-[800ms] ease-out", className ?? "w-[90px] h-[90px]")}>
      {/* Animated Video Layer */}
      {videoSrc && (
        <video
          src={videoSrc}
          width="125"
          height="125"
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
            videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      )}

      {/* Static Image Layer (Reveals smoothly beneath) */}
      <img
        src="/home/logo-squared1.png"
        alt="Mod Space Interior Logo"
        width={80}
        height={80}
        className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
          videoEnded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />
    </div>
  );
}