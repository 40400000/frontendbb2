'use client';

import { useState } from 'react';
import { VideoModal } from './video-modal';
import { MdZoomIn } from 'react-icons/md';

interface ClickableVideoProps {
  videoSrc: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: string;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ClickableVideo({
  videoSrc,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  className = '',
  ariaLabel,
  children,
  style,
}: ClickableVideoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="relative cursor-pointer group"
        style={style}
      >
        {children || (
          <video
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            preload={preload}
            className={className}
            aria-label={ariaLabel}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Hover Overlay with Zoom Icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-lg">
              <MdZoomIn className="w-6 h-6 md:w-8 md:h-8 text-black" />
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
        ariaLabel={ariaLabel}
      />
    </>
  );
}


