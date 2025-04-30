'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";

export function AutomatiseringClientFeatures() {
  const [isBtwVisible, setIsBtwVisible] = useState(false);
  const [isBaaspilotVisible, setIsBaaspilotVisible] = useState(false);
  const btwTextRef = useRef<HTMLDivElement>(null);
  const baaspilotTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === btwTextRef.current) {
              setIsBtwVisible(true);
              observer.unobserve(entry.target); // Stop observing once visible
            } else if (entry.target === baaspilotTextRef.current) {
              setIsBaaspilotVisible(true);
              observer.unobserve(entry.target); // Stop observing once visible
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentBtwRef = btwTextRef.current;
    const currentBaaspilotRef = baaspilotTextRef.current;

    if (currentBtwRef) {
      observer.observe(currentBtwRef);
    }
    if (currentBaaspilotRef) {
      observer.observe(currentBaaspilotRef);
    }

    return () => {
      if (currentBtwRef) {
        observer.unobserve(currentBtwRef);
      }
      if (currentBaaspilotRef) {
        observer.unobserve(currentBaaspilotRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
        {/* Container for the 'BTW berekening' sticky section */}
        <div className="relative min-h-[200vh]"> {/* Outer container defining scroll height - INCREASED HEIGHT */}
          {/* Sticky Container */}
          <div className="sticky top-0 z-[60] container px-0 py-16 md:py-24 lg:py-32">
              {/* Heading placed above the flex row */}
              <div className="relative w-[25%] text-white"> {/* Container for heading, matching left col width */}
                 <h2 className="text-3xl font-semibold mb-6">Andere features</h2>
              </div>

              {/* Flex Row for Content and Image */}
              <div className="flex flex-col md:flex-row items-start gap-8 md:justify-between">
                {/* Left side: Text content (No Heading Here) - Add ref here */}
                <div id="btw-berekening" ref={btwTextRef} className="relative w-[25%] text-white"> {/* Adjusted width & ADDED ID */}
                  {/* Content starts here */}
                  <div className="p-0 text-md">
                    <span className="text-sm text-gray-500">01</span>
                    <p className="flex items-center text-lg md:text-xl font-semibold my-6">
                      BTW berekening, automatisch.
                    </p>
                    <p className="text-sm mt-1 text-white">Bolbaas berekent automatisch de BTW over al je bol.com bestellingen en houdt rekening met gemaakte kosten via bol, voor een nauwkeurige en vereenvoudigde administratie.</p>
                  </div>
                </div>


                {/* Right side: Image container - Add conditional styling - RE-ADDED */}
                <div className={`relative w-full md:w-2/3 transition-opacity duration-1000 ease-in ${isBtwVisible ? 'opacity-100' : 'opacity-0'}`}> {/* Adjusted width for responsiveness */}
                 {/* Smaller, overlapping image */}
                 <Image
                   src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/gertjan/btw-documenten-ANSddMl8As8GpI7ciEu4BjZpNdhuWx.png"
                   alt="BTW Documenten voorbeeld"
                   width={650} // Slightly bigger
                   height={365} // Slightly bigger, maintaining aspect ratio
                   className="absolute bottom-10 -left-100 z-10 rounded-lg shadow-lg object-cover border border-neutral-800 rounded-xl" // Positioned even further left and bottom // Added border // Changed rounded-md to rounded-xl
                 />
                 {/* Main Image for BTW berekening */}
                 <Image
                   src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/gertjan/btw-dashboard-m23zLhrr7tYMl9DyXIzA4UaEZbrIRh.png" // New main image source
                   alt="BTW Dashboard Visualisatie" // Updated alt text
                   width={1200}
                   height={675}
                   className="relative z-0 shadow-lg object-cover border border-neutral-800 rounded-xl" // Ensure main image is behind overlapping one if needed // Added border // Changed rounded-md to rounded-xl
                 />
                </div>
              </div>
          </div>
        </div>

        {/* Container for the 'Baaspilot' sticky section */}
        <div className="relative min-h-[200vh]"> {/* Outer container - INCREASED HEIGHT */} 
          <div className="sticky top-0 z-[60] container px-0 flex flex-col md:flex-row items-start gap-8 md:justify-between py-16 md:py-24 lg:py-32"> {/* Sticky Content - Added md:justify-between, kept gap for col layout */}

             {/* Left side: Text content for Baaspilot - Add ref here */}
             <div id="baaspilot" ref={baaspilotTextRef} className="relative w-[25%] text-white"> {/* Adjusted width for responsiveness & ADDED ID */}
               <div className="p-0 text-md">
                 <span className="text-sm text-gray-500">02</span>
                 <p className="flex items-center text-lg md:text-xl font-semibold my-6">
                   Baaspilot
                 </p>
                 <p className="text-sm mt-1 text-white">
                   Baaspilot houdt je op de hoogte van alle belangrijkste gebeurtenissen in jouw store en getracke producten.
                 </p>
               </div>
               <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-border mt-6" > {/* Added group, relative, overflow-hidden. Removed py-6, pl-4 from here */}
                {/* Original Content - Slides up on hover */}
                <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> {/* Changed font-bold to font-semibold */} 
                  Gesprek inplannen {/* Updated text */}
                  <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                </span>
                {/* Hover Overlay - Slides in from bottom on hover */}
                <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed font-bold to font-semibold */} 
                  Gesprek inplannen {/* Updated text */}
                  <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                </div>
              </div>
             </div>


            {/* Right side: Image container - Add conditional styling and min-height for stacked images */}
            <div className={`relative w-full md:w-2/3 transition-opacity duration-1000 ease-in ${isBaaspilotVisible ? 'opacity-100' : 'opacity-0'} min-h-[450px]`}> {/* Adjusted width & ADDED min-h, increased min-h for stronger cascade */} 
               {/* Image 1 (Now Bottom, Original Image 3) */}
               <Image
                 src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/baas-pilot-3-XhikBukvJB9xm24eCCRcpdQ0qiCh8z.png" // Swapped src
                 alt="Baaspilot Visualisatie 3" // Swapped alt
                 width={500}
                 height={281}
                 className={`absolute top-0 left-40 z-10 rounded-xl shadow-lg object-cover border border-neutral-800 transition-transform duration-700 ease-out ${isBaaspilotVisible ? 'translate-y-0' : 'translate-y-10'}`}
               />
               {/* Image 2 (Middle) */}
               <Image
                 src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/baas-pilot-2-VBiH89oPhW8QatnzHzMJcg0pXYjucc.png" // Kept src
                 alt="Baaspilot Visualisatie 2" // Kept alt
                 width={500}
                 height={281}
                 className={`absolute top-12 left-52 z-20 rounded-xl shadow-lg object-cover border border-neutral-800 transition-transform duration-700 ease-out delay-100 ${isBaaspilotVisible ? 'translate-y-0' : 'translate-y-12'}`} // Added delay
               />
               {/* Image 3 (Now Top, Original Image 1) */}
               <Image
                 src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/baas-pilot-1-bSfLTh4FTYs4O9cAyzETz1tuVeLpXJ.png" // Swapped src
                 alt="Baaspilot Visualisatie 1" // Swapped alt
                 width={500}
                 height={281}
                 className={`absolute top-24 left-64 z-30 rounded-xl shadow-lg object-cover border border-neutral-800 transition-transform duration-700 ease-out delay-200 ${isBaaspilotVisible ? 'translate-y-0' : 'translate-y-14'}`} // Added delay
               />
            </div>
           </div>
         </div>
    </>
  );
} 