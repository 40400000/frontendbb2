'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";

export function TrackingClientFeatures() {
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
              observer.unobserve(entry.target);
            } else if (entry.target === baaspilotTextRef.current) {
              setIsBaaspilotVisible(true);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
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
      {/* Container for the 'Sales voorspellingen' sticky section */}
      <div className="relative min-h-screen md:min-h-[200vh]"> {/* Outer container defining scroll height - ADJUSTED HEIGHT for mobile */}
        {/* Sticky Container */}
        <div className="sticky top-0 z-[60] container px-0 py-0 md:py-24 lg:py-32">
          {/* Heading placed above the flex row */}
          <div className="relative w-full md:w-[25%] text-white"> {/* Container for heading, matching left col width */}
             <h2 className="text-3xl font-semibold mb-6">Andere features</h2>
          </div>

          {/* Flex Row for Content and Image */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:justify-between">
            {/* Left side: Text content (No Heading Here) - Add ref here */}
            <div ref={btwTextRef} id="project-management" className="relative w-full sm:w-[50%] md:w-[25%] text-white"> {/* Adjusted width */}
              {/* Content starts here */}
              <div className="p-0 text-md">
                <span className="text-sm text-gray-500">01</span>
                <p className="flex items-center text-lg md:text-xl font-semibold my-6">
                  Project management
                </p>
                <p className="text-sm mt-1 text-white">Breng getrackte producten en keywords onder in verschillende projecten. Maak een project aan voor een product research. Of maak een project aan voor een klant van jouw bol agency.</p>
              </div>
            </div>

            {/* Right side: Image - Add conditional styling - RE-ADDED */}
            <div className={`relative w-full md:w-2/3 transition-opacity duration-1000 ease-in ${isBtwVisible ? 'opacity-100' : 'opacity-0'} mt-8 md:mt-0`}> {/* Adjusted width for responsiveness */}
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/projects2-ShnvFvU1iguk3jByjkc6LFBKt73xv2.png"
                alt="Sales Voorspellingen Visualisatie" // Updated alt text
                width={1200} // Increased width
                height={675} // Increased height based on aspect ratio
                className="shadow-lg object-cover rounded-xl" // Added object-cover
              />
            </div>
          </div>
        </div>
      </div>

      {/* Container for the 'Levering tracker' sticky section */}
      <div className="relative min-h-screen md:min-h-[200vh]"> {/* Outer container - ADJUSTED HEIGHT for mobile */}
        <div className="sticky top-0 z-[60] container px-0 flex flex-col md:flex-row items-start gap-8 md:justify-between py-16 md:py-24 lg:py-32"> {/* Sticky Content - Added md:justify-between, kept gap for col layout */}

           {/* Left side: Text content for Baaspilot - Add ref here */}
           <div ref={baaspilotTextRef} className="relative w-full sm:w-[50%] md:w-[25%] text-white"> {/* Adjusted width for responsiveness */}
             <div className="p-0 text-md">
               <span className="text-sm text-gray-500">02</span>
               <p className="flex items-center text-lg md:text-xl font-semibold my-6">
                 Bieding geschiedenis
               </p>
               <p className="text-sm mt-1 text-white">
               Bied gebaseerd op data, niet op het laatste bod. Bespaar op advertentiekosten.
               
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


          {/* Right side: Image - Add conditional styling - RE-ADDED */}
          <div className={`relative w-full md:w-2/3 transition-opacity duration-1000 ease-in ${isBaaspilotVisible ? 'opacity-100' : 'opacity-0'} mt-8 md:mt-0`}> {/* Adjusted width for responsiveness */}
           {/* Image for Levering tracker */} 
           <Image
             src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/average-bid-IoTgFcZkwj9mpwVRyYlbtEZd9EbqEx.png" // Placeholder, assuming same image for now
             alt="Levering Tracker Visualisatie" // Updated alt text
             width={1200}
             height={675}
             className="rounded-lg shadow-lg object-cover"
           />
          </div>
         </div>
       </div>
    </>
  );
} 