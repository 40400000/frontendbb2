"use client"

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define the image sources based on options
const IMAGE_SOURCES = {
  1: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/upscale_random_1-GQwNFWbdUClpOZpMGJi4vBILOEt15o.jpg",
  2: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bg2-m2v50ovmoR9lCzMBcODyIO46XWzvsr.png",
  3: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bg3-XXmD3VeBlZpMDS81acyGrKhm4NK9Jk.png",
  4: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bg4-9Uwcy3tZUQqh2Evs56yf9AIwxIPMmQ.png"
};

interface BackgroundPhotoProps extends React.HTMLAttributes<HTMLDivElement> {
  imageOption: keyof typeof IMAGE_SOURCES; // Select image by option key
  overlayOpacity?: number; // Opacity for the dark overlay (0 to 1)
}

export function BackgroundPhoto({
  imageOption = 1, // Default to option 1
  overlayOpacity = 0, // Default overlay opacity to 0
  className,
  ...props
}: BackgroundPhotoProps) {
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
  };

  const imageSrc = IMAGE_SOURCES[imageOption];

  // Assuming navbar height corresponds to pt-16 (4rem/64px)
  const navbarHeightClass = "top-0"; 

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)} {...props}>
      {/* Background Image - Positioned top-right, 30% width, below navbar */}
      <Image
        src={imageSrc}
        alt="Background"
        // Provide placeholder width/height - adjust as needed for aspect ratio
        width={500} 
        height={500}
        className={cn(
          "absolute right-0 w-[50%] h-auto",
          navbarHeightClass // Add top offset class
        )}
        priority // Load image eagerly if it's above the fold
        style={{ objectFit: 'cover' }} // Ensure image covers the area nicely
        quality={100}
      />
      {/* Dark Overlay - Still covers the entire container */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={overlayStyle}
      />
    </div>
  );
} 