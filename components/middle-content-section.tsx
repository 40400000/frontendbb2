import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

export function MiddleContentSection() {
  // Placeholder text removed
  // const placeholderText = "...";

  return (
    // Section is relative positioning context with vertical padding
    <section className="relative w-full pb-16 md:pb-24 lg:pb-32">
      {/* Full-width background element */}
      <div className="absolute inset-0 w-screen bg-black -z-10 left-1/2 -translate-x-1/2"></div> {/* Changed bg-muted/30 to bg-black */}

      {/* Container centers content normally ON TOP of the background - Removed padding */}
      <div className="container relative px-0 z-55"> {/* Removed px-4 - Added z-10 */}
        {/* 4-column grid structure - Removed gap */}
        {/* On mobile (default), it implicitly might stack or could be adjusted to 2 cols if needed */}
        <div className="grid grid-cols-1 sm:grid-cols-4"> {/* Removed gap-8 */}

          {/* Column 1 (Empty on sm+) */}
          <div className="hidden sm:block"></div>

          {/* Content spanning middle two columns (Columns 2 & 3) - Added margin bottom */}
          <div className="sm:col-start-2 sm:col-span-2 mb-8 space-y-6"> {/* Added mb-8 and space-y-6 */}
            {/* Updated Headline with larger font size */}
            <h2 className="text-4xl md:text-5xl font-semibold">Grip op je bol.com succes.</h2>
            {/* Updated Paragraph text - Smaller font size and white text */}
            <p className="text-base text-foreground">
              De huidige golf van bol-platforms belooft veel, maar komen deze beloftes niet waar. Data ontbreekt, en de automatisering is niet flexibel genoeg.
            </p>
            {/* Added separate paragraph for the middle part */}
            <p className="text-base text-foreground">
              Bolbaas doet dit anders. Krijg de controle terug met diepgaande analyses, krachtige tools en slimme automatisering, ontworpen om jouw groei op bol.com te maximaliseren. Eerlijk waar.
            </p>
            {/* Added separate paragraph for the final sentence */}
            <p className="text-base font-semibold text-foreground">
              Met Bolbaas maak je keuzes op basis van echte data.
            </p>
          </div>

          {/* Button 1 in Column 2 */}
          <div className="sm:col-start-2 border-t border-b border-border">
            {/* Button 1 structure (copied from previous location) */}
            <div className="group relative w-full text-left cursor-pointer overflow-hidden">
              {/* Original Content */}
              <span className="block py-6 pl-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                Abonnementen bekijken
              </span>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white text-black py-6 pl-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                Abonnementen bekijken
              </div>
            </div>
          </div>

          {/* Button 2 in Column 3 */}
          <div className="sm:col-start-3 sm:border-t border-b border-border">
            {/* Button 2 structure (copied from previous location) */}
            <div className="group relative w-full text-left cursor-pointer overflow-hidden">
              {/* Original Content */}
              <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                Gesprek inplannen
                <MdOutlineArrowOutward className="h-5 w-5" />
              </span>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                Gesprek inplannen
                <MdOutlineArrowOutward className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Column 4 (Empty on sm+) */}
          <div className="hidden sm:block"></div>

        </div>
      </div>
    </section>
  );
} 