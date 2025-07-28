"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BackgroundVideoProps extends React.HTMLAttributes<HTMLDivElement> {
  gridOpacity?: number;
  gridSize?: number;
  gridVerticalSize?: number;
  overlayOpacity?: number;
  playbackRate?: number;
}

const VIDEO_SRC = "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bbachtergrond-CjA5NIpokk9K9l5fXxMujRWd3dgi4N.mp4";
const POSTER_SRC = "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/poster.png";

export function BackgroundVideo({
  gridOpacity = 0.08,
  gridSize = 12,
  gridVerticalSize = 4,
  overlayOpacity = 0.78,
  playbackRate = 0.99,
  className,
  ...props
}: BackgroundVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // This check only runs on the client
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      setShowVideo(true);
    }
  }, []);

  const gridStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, ${gridOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, ${gridOpacity}) 1px, transparent 1px)`,
    backgroundSize: `${gridSize}px ${gridVerticalSize}px`,
  };

  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden pt-20", className)} {...props}>
      {showVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={POSTER_SRC}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          quality={45}
          priority={true}
        />
      )}
      {/* Dark Overlay */}
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
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 25%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </div>
  );
} 