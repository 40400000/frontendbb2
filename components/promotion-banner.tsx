'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function PromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-between w-full px-4 py-2",
        "bg-gradient-to-br from-blue-700 via-indigo-600 to-gray-900 text-white text-sm",
        "transition-all duration-300 ease-in-out" // Optional: for smooth dismissal animation (needs more setup)
      )}
      role="alert"
    >
      {/* Empty div for flex spacing */}
      <div className="w-6 sm:w-8"></div>

      {/* Centered text */}
      <div className="flex-grow text-center">
        ✨ Boost je verkopen met onze nieuwe <Link href="/features/listing-ai" className="font-semibold underline hover:text-purple-200 transition-colors">Listing AI Tool</Link>! Probeer het nu! ✨
      </div>

      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/20 hover:text-white h-6 w-6"
        onClick={() => setIsVisible(false)}
        aria-label="Sluit promotiebanner"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default PromotionBanner; 