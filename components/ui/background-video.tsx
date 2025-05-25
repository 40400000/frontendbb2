"use client"

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BackgroundVideoProps extends React.HTMLAttributes<HTMLDivElement> {
  gridOpacity?: number; // Opacity from 0 to 1
  gridSize?: number; // Horizontal size in pixels
  gridVerticalSize?: number; // Vertical size in pixels
  overlayOpacity?: number; // Opacity for the dark overlay (0 to 1)
  playbackRate?: number; // Video playback speed (1.0 = normal, 0.5 = half speed, 2.0 = double speed)
}

// const VIDEO_SRC = "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/glass-animation-5-clg7ICtDE6L3PjRXFrgTXvsINGplAC.mp4";
const VIDEO_SRC = "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bbachtergrond-CjA5NIpokk9K9l5fXxMujRWd3dgi4N.mp4";
export function BackgroundVideo({
  gridOpacity = 0.08, // Slightly reduced default
  gridSize = 12, // Tighter horizontal grid size
  gridVerticalSize = 4, // Tighter vertical grid size
  overlayOpacity = 0.78, // Default overlay opacity
  playbackRate = 0.99, // Default normal speed
  className,
  ...props
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const gridStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, ${gridOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, ${gridOpacity}) 1px, transparent 1px)`,
    backgroundSize: `${gridSize}px ${gridVerticalSize}px`, // Use both sizes
  };

  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden pt-20", className)} {...props}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline // Important for mobile playback
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={VIDEO_SRC}
      >
        Your browser does not support the video tag.
      </video>
      {/* Dark Overlay - positioned above video, below grid */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={overlayStyle}
      />
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={gridStyle}
      />
      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 25%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </div>
  );
} 