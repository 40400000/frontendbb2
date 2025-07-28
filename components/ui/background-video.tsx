"use client"

import React, { useRef, useEffect, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile());

    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const gridStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, ${gridOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, ${gridOpacity}) 1px, transparent 1px)`,
    backgroundSize: `${gridSize}px ${gridVerticalSize}px`,
  };

  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden pt-20", className)} {...props}>
      {isMobile ? (
        <Image
          src={POSTER_SRC}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          quality={45}
          priority={true}

        />
      ) : (
        <video
          ref={videoRef}
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