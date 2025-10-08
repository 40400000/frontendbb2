'use client';

import { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  ariaLabel?: string;
}

export function VideoModal({ isOpen, onClose, videoSrc, ariaLabel }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Play video when modal opens
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else {
      document.body.style.overflow = 'unset';
      
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Handle clicking outside video
  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === modalRef.current) {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || "Video player"}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-20 right-4 md:top-24 md:right-8 z-[10000] bg-white hover:bg-gray-100 text-black p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-2xl cursor-pointer"
        aria-label="Close video"
      >
        <IoClose className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Video Container */}
      <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full"
          controls
          controlsList="nodownload"
          playsInline
          src={videoSrc}
          aria-label={ariaLabel}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

