'use client';

import { useEffect, useRef, useState } from 'react';
import { VideoModal } from './video-modal';
import { MdZoomIn } from 'react-icons/md';

export function ScrollVideoEffect() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/hero_movie.mp4');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if device is mobile and set appropriate video source
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      const isSlowConnection = 'connection' in navigator && (navigator as any).connection?.effectiveType === '2g';
      
      setIsMobile(isMobileDevice);
      
      // Use lower quality on mobile or slow connections
      if (isMobileDevice || isSlowConnection) {
        // You can create a compressed version: hero_movie_mobile.mp4
        setVideoSrc('/hero_movie.mp4'); // For now, same file
      } else {
        setVideoSrc('/hero_movie.mp4');
      }
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
    <>
      <div 
        ref={videoContainerRef}
        className="container max-w-4xl mx-auto mt-12 md:mt-32 mb-2 md:mb-16"
      >
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-150 ease-out cursor-pointer group"
          style={{ 
            transform: isMobile 
              ? 'scale(1) translateX(0px)' 
              : `scale(${scale}) translateX(${translateX}px)`,
            transformOrigin: 'center center'
          }}
        >
          <video
            key={videoSrc} // Force re-render when source changes
            className="w-full h-auto aspect-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Hover Overlay with Zoom Icon */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-lg">
                <MdZoomIn className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
        ariaLabel="Baasy demo video"
      />
    </>
  );
}
