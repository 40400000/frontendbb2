'use client';

import Link from 'next/link';

export function Footer() {


  return (
    <footer className="relative text-white py-8">

      {/* Full-width background element */}
      <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

      {/* Overlay 1: LEFT Outer Border + FIRST Inner Divider (Full Height of Footer) */}
      {/* No fade mask needed here. z-index lower than footer content */}
      <div className="absolute inset-0 pointer-events-none border-l border-border z-10">
        {/* This relative container holds the line element */}
        <div className="relative h-full max-w-full mx-auto">
          {/* Line between cols 1 & 2 (visible only on sm+) */}
          <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-border"></div>
        </div>
      </div>

      {/* Overlay 2: RIGHT Outer Border + SECOND & THIRD Inner Dividers (Full Height of Footer) */}
      {/* No fade mask needed here. z-index lower than footer content */}
      <div className="absolute inset-0 pointer-events-none border-r border-border z-10">
        {/* This relative container holds the actual line elements */}
        <div className="relative h-full max-w-full mx-auto">
          {/* Divider line for middle on mobile (2 cols) / between cols 2 & 3 on sm+ (4 cols) */}
          <div className="absolute hidden sm:block left-1/2 top-0 bottom-0 w-px bg-border"></div>

          {/* Additional divider line visible only on sm+ (4 cols) - Line between cols 3 & 4 */}
          <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-border"></div>
        </div>
      </div>

      {/* Footer Content Container - Removed px-4, stays relative, appears above overlays */}
      <div className="relative container mx-auto px-0 z-20 border-t border-border">
        {/* Example Footer Content - Replace or extend as needed */}
        <div className="h-20"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-0 gap-y-8">
          <div className="pl-0">
            <h3 className="text-lg font-semibold mb-4">Bolbaas</h3>
            <p className="text-sm text-gray-400">
              AI-gedreven platform voor bol.com partners.
            </p>
          </div>
          <div className="pl-0 ml-[1px]">
            <h4 className="font-extralight mb-2 tracking-tighter text-sm">L I N K S</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pricing" className="text-white hover:text-gray-400">Prijzen</Link></li>
              <li><Link href="/features" className="text-white hover:text-gray-400">Features</Link></li>
              <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>
          <div className="pl-0">
            <h4 className="font-extralight mb-2 tracking-tighter text-sm">L E G A L</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-white hover:text-gray-400 ">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white hover:text-gray-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="pl-0">
          <h4 className="font-extralight mb-2 tracking-tighter text-sm">C O N T A C T</h4>
            <ul className="space-y-2 text-sm">
            <li><a href="tel:+31613665348" className="text-white hover:text-gray-400">+31 6 13665348</a></li>
            <li><a href="mailto:info@bolbaas.nl" className="text-white hover:text-gray-400">info@bolbaas.nl</a></li>
             
              <li>KVK 89112393</li>
              <li>BTW NL004693041B93</li>

              <li>Het Schip 237, 7325NM, Apeldoorn</li>


            </ul>
          </div>
        </div>

        <div className="h-60">
  
        </div>

      </div>
    </footer>
  );
} 