'use client';

import { useEffect, useRef, useState } from 'react';

export function ScrollVideoEffect() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (isMobile || !videoContainerRef.current) return;

      const element = videoContainerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start scaling when video is still 200px below the viewport top
      // This makes it start scaling much earlier
      const triggerPoint = windowHeight + 200;
      const scrollProgress = Math.max(0, triggerPoint - rect.top);
      const maxScroll = windowHeight * 0.8; // Scale over 80vh of scrolling
      
      // Calculate scale progress (0 to 1)
      const scaleProgress = Math.min(scrollProgress / maxScroll, 1);
      
      // Calculate scale (1 to 1.4 for more dramatic effect)
      const newScale = 1 + (scaleProgress * 0.4);
      
      // Calculate horizontal movement (subtle left-right movement)
      // Creates a slight arc motion as it scales
      const horizontalMovement = Math.sin(scaleProgress * Math.PI) * 20; // Max 20px movement
      
      setScale(newScale);
      setTranslateX(horizontalMovement);
    };

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial call
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <div 
      ref={videoContainerRef}
      className="container max-w-4xl mx-auto mt-24 md:mt-32 mb-12 md:mb-16"
    >
      <div 
        className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-150 ease-out"
        style={{ 
          transform: isMobile 
            ? 'scale(1) translateX(0px)' 
            : `scale(${scale}) translateX(${translateX}px)`,
          transformOrigin: 'center center'
        }}
      >
        <video
          className="w-full h-auto aspect-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="https://glrob7hsjras0ozc.public.blob.vercel-storage.com/HEROMOVIE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
