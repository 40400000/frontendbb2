"use client"

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define the image sources based on options
const IMAGE_SOURCES = {
  1: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bg_shape_1-oEeFKguUPJhrWvU7xpV9fDJ9XWPFt8.png",
  2: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bg_shape_2-zLoi2iRFiDVDYU5Z8WlH7UBUeKjqFM.png",
  3: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bg_shape_3-9eH2cr532D0uqUsQ9SQblBTqD2oq8j.png",
  4: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/bg_shape_4-bdObIAqoXSNVA3HXIQZRwgelhlRaLM.png"
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
  const navbarHeightClass = "top-30 sm:top-0"; 

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