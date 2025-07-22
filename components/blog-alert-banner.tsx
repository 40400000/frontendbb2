'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function BlogAlertBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the banner has been dismissed
    const isDismissed = localStorage.getItem('blog-alert-dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('blog-alert-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-40 w-full bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-blue-950/20 border-b border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm">
          <Link 
            href="/blog/verkopen-bol-ai-tijdperk" 
            className="flex items-center gap-3 flex-1 hover:opacity-80 transition-opacity group"
          >
            {/* Desktop: show indicator and "Nieuw artikel" text */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-foreground/80 font-medium">Nieuw artikel</span>
            </div>
            {/* Mobile: show "Educatie" prefix and shortened title */}
            <div className="md:hidden flex items-center gap-3 flex-1">
              <span className="text-foreground/80 font-medium">Educatie</span>
              <span className="text-foreground line-clamp-1 group-hover:text-foreground/80 transition-colors">
                Verkopen op bol.com in het AI tijdperk
              </span>
            </div>
            {/* Desktop: show full title */}
            <span className="hidden md:block text-foreground line-clamp-1 group-hover:text-foreground/80 transition-colors">
              Verkopen op bol.com in het AI tijdperk: hoe je met Ranking AI de concurrentie voor bent
            </span>
          </Link>
          
          <div className="flex items-center gap-3 ml-4">
            <Link href="/blog/verkopen-bol-ai-tijdperk">
              <Button size="sm" variant="outline" className="text-xs border-border/50 hover:border-border bg-background/50 hover:bg-background">
                Lees meer
              </Button>
            </Link>
            {/* Desktop only: show dismiss button */}
            <button
              onClick={handleDismiss}
              className="hidden md:block p-1 hover:bg-white/10 rounded transition-colors flex-shrink-0"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4 text-foreground/60 hover:text-foreground/80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 