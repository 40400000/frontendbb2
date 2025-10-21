'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function Footer() {
  const [footerMode, setFooterMode] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();
  const isBlogPostPage = pathname.startsWith('/blog');
  const { theme } = useTheme();

  useEffect(() => {
    if (isBlogPostPage) {
      // On blog pages, the theme is controlled by BlogThemeHandler.
      // We just need to set the footerMode based on the theme from next-themes.
      setFooterMode(theme === 'dark' ? 'dark' : 'light');
      return;
    }

    // Force light footer on legal pages
    if (
      pathname.startsWith('/algemene-voorwaarden') ||
      pathname.startsWith('/verwerkersovereenkomst') ||
      pathname.startsWith('/privacy')
    ) {
      setFooterMode('light');
      return;
    }

    // Default to dark mode elsewhere
    setFooterMode('dark');
  }, [isBlogPostPage, theme, pathname]);

  const footerBackgroundClass = footerMode === 'light' ? 'bg-white' : 'bg-black';
  const footerTextClass = footerMode === 'light' ? 'text-black' : 'text-white';
  const borderClass = footerMode === 'light' ? 'border-gray-200' : 'border-border';
  const linkHoverClass = footerMode === 'light' ? 'hover:text-gray-600' : 'hover:text-gray-400';

  return (
    <footer className={cn("relative py-8", footerTextClass)}>

      {/* Full-width background element */}
      <div className={cn("absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2", footerBackgroundClass)}></div>

      {/* Overlay 1: LEFT Outer Border + FIRST Inner Divider (Full Height of Footer) */}
      {/* No fade mask needed here. z-index lower than footer content */}
      <div className={cn("absolute inset-0 pointer-events-none border-l z-10", borderClass)}>
        {/* This relative container holds the line element */}
        <div className="relative h-full max-w-full mx-auto">
          {/* Line between cols 1 & 2 (visible only on sm+) */}
          <div className={cn("hidden sm:block absolute left-1/4 top-0 bottom-0 w-px", footerMode === 'light' ? 'bg-gray-200' : 'bg-border')}></div>
        </div>
      </div>

      {/* Overlay 2: RIGHT Outer Border + SECOND & THIRD Inner Dividers (Full Height of Footer) */}
      {/* No fade mask needed here. z-index lower than footer content */}
      <div className={cn("absolute inset-0 pointer-events-none border-r z-10", borderClass)}>
        {/* This relative container holds the actual line elements */}
        <div className="relative h-full max-w-full mx-auto">
          {/* Divider line for middle on mobile (2 cols) / between cols 2 & 3 on sm+ (4 cols) */}
          <div className={cn("absolute hidden sm:block left-1/2 top-0 bottom-0 w-px", footerMode === 'light' ? 'bg-gray-200' : 'bg-border')}></div>

          {/* Additional divider line visible only on sm+ (4 cols) - Line between cols 3 & 4 */}
          <div className={cn("hidden sm:block absolute left-3/4 top-0 bottom-0 w-px", footerMode === 'light' ? 'bg-gray-200' : 'bg-border')}></div>
        </div>
      </div>

      {/* Footer Content Container - Removed px-4, stays relative, appears above overlays */}
      <div className={cn("relative container mx-auto px-0 z-20 border-t", borderClass)}>
        {/* Example Footer Content - Replace or extend as needed */}
        <div className="h-20"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-0 gap-y-8">
          <div className="pl-0">
          <h4 className="font-extralight mb-2 tracking-tighter text-sm">B O L B A A S </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className={cn(footerTextClass, linkHoverClass)}>Home</Link></li>
              <li><Link href="/prijzen" className={cn(footerTextClass, linkHoverClass)}>Prijzen</Link></li>
              <li><Link href="/contact" className={cn(footerTextClass, linkHoverClass)}>Contact</Link></li>
            </ul>
          </div>
          <div className="pl-0 ml-[1px]">
            <h4 className="font-extralight mb-2 tracking-tighter text-sm">F E A T U R E S</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features/tools" className={cn(footerTextClass, linkHoverClass)}>Tools</Link></li>
              <li><Link href="/features/store-prestaties" className={cn(footerTextClass, linkHoverClass)}>Store Prestaties</Link></li>
              <li><Link href="/features/tracking" className={cn(footerTextClass, linkHoverClass)}>Tracking</Link></li>
              <li><Link href="/features/automatisering" className={cn(footerTextClass, linkHoverClass)}>Automatisering</Link></li>
            </ul>
          </div>
          <div className="pl-0">
            <h4 className="font-extralight mb-2 tracking-tighter text-sm">L E G A L</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className={cn(footerTextClass, linkHoverClass)}>Privacy statement</Link></li>
              <li><Link href="/algemene-voorwaarden" className={cn(footerTextClass, linkHoverClass)}>Algemene voorwaarden</Link></li>
              <li><Link href="/verwerkersovereenkomst" className={cn(footerTextClass, linkHoverClass)}>Verwerkersovereenkomst</Link></li>
            </ul>
          </div>
          <div className="pl-0">
          <h4 className="font-extralight mb-2 tracking-tighter text-sm">C O N T A C T</h4>
            <ul className="space-y-2 text-sm">
            <li><a href="tel:+31613665348" className={cn(footerTextClass, linkHoverClass)}>+31 6 13665348</a></li>
            <li><a href="mailto:info@baasy.nl" className={cn(footerTextClass, linkHoverClass)}>info@baasy.nl</a></li>



            </ul>
          </div>
        </div>

        <div className="h-60">
  
        </div>

      </div>
    </footer>
  );
} 