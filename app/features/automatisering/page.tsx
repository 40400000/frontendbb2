'use client'; // Make this a Client Component

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import Next Image
import { Zap } from 'lucide-react'; // Using a different icon, e.g., Zap for speed/power
import { CheckCircle } from 'lucide-react'; // Or another suitable icon
// Import necessary icons from lucide-react
import {
  LineChart,
  Search,
  FileText,
  Target,
  ShoppingCart,
  Package, // Added Package icon
  Download, // Added Download icon
  Upload,   // Added Upload icon
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
// import OrderProgressTracker from '@/components/order-progress-tracker'; // Keep old import commented for reference or remove
import HighlightedSection from '@/components/highlighted-section'; // Corrected import path
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { useState, useEffect, useRef } from 'react'; // Import React hooks

export default function AutomatiseringPage() {
  // Updated features array with category titles, icons, color class, and description
  const featureCategories = [
    { title: "Inzichten", IconComponent: LineChart, iconClass: "text-blue-500", description: "Verkrijg inzicht in bestellingen, producten en rankings." },
    { title: "Data tools", IconComponent: Search, iconClass: "text-purple-500", description: "Krachtige data tools voor zoekwoorden, winst en listings." },
    { title: "Automatisering", IconComponent: FileText, iconClass: "text-pink-500", description: "Automatiseer administratie met AI, focus op groei." },
    { title: "Tracking", IconComponent: Target, iconClass: "text-green-500", description: "Volg nauwkeurig producten en keywords." },
  ];

  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-0"; // Example: 384px - Offset remains

  // State and Refs for Intersection Observer
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
      // Cleanup observer on component unmount
      if (currentBtwRef) {
        observer.unobserve(currentBtwRef);
      }
      if (currentBaaspilotRef) {
        observer.unobserve(currentBaaspilotRef);
      }
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {/* Fixed Background Photo */}
      <BackgroundPhoto className="fixed inset-0 -z-10" imageOption={1} />

      {/* Scrollable Content Container */}
      <div className="relative z-0 flex flex-col min-h-screen">

        {/* Overlay 1: LEFT Outer Border + FIRST Inner Divider (Full Height) - Uses border variable */}
        <div className="absolute inset-0 h-full z-50 pointer-events-none border-l border-border">
          {/* This relative container holds the line element */}
          <div className="relative h-full max-w-full mx-auto">
            {/* Line between cols 1 & 2 (visible only on sm+) - Uses border variable */}
            <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Overlay 2: RIGHT Outer Border + SECOND & THIRD Inner Dividers (Starts Lower) - Uses border variable */}
        {/* This container applies the top offset, fade-in mask, and the RIGHT border */}
        <div className={`absolute inset-x-0 ${innerLinesTopOffset} bottom-0 z-50 pointer-events-none border-r border-border`}>
          {/* This relative container holds the actual line elements */}
          <div className="relative h-full max-w-full mx-auto">
            {/* Divider line that appears in the middle on mobile (2 cols) and between cols 2 & 3 on sm+ (4 cols) - Uses border variable */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border"></div>

            {/* Additional divider line visible only on sm screens and up (4 cols) - Uses border variable */}
            {/* Line between cols 3 & 4 */}
            <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Hero Section - Left Aligned & Reduced Height */}
        <section className="relative z-[60] w-full pt-8 md:pt-16 lg:pt-24 pb-6 md:pb-8 lg:pb-10">
          <div className="container px-0">
            {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-2 sm:col-span-4 flex flex-col items-start space-y-3 md:space-y-4 max-w-3xl w-[35%]">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50">
                  Automatiseer je bol.com store en aftersales
                </h1>
                {/* Sub-headline */}
                <p className="text-white w-[71.4%]">
                  Alles wat je nodig hebt, in één AI-gedreven platform.
                </p>
              </div>
              {/* Button Container - Add t/b borders, keep left padding */}
              <div className="col-span-1 mt-4 flex flex-col pl-0.5 border-t border-b border-border"> {/* Added border-t, border-b */}
                {/* Button 1 - Group for hover effects, relative positioning */}
                <div className="group relative w-full text-left border-b border-border cursor-pointer -mr-1.5 overflow-hidden"> {/* Added group, relative, overflow-hidden. Removed py-6, pl-4 from here */}
                  {/* Original Content - Slides up on hover */}
                  <span className="block py-6 pl-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> {/* Added block, transitions, hover transforms */} 
                    Lidmaatschappen bekijken {/* Updated text */}
                  </span>
                  {/* Hover Overlay - Slides in from bottom on hover */}
                  <div className="absolute inset-0 bg-white text-black py-6 pl-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Added absolute overlay with transitions and hover state */} 
                  Lidmaatschappen bekijken {/* Updated text */}
                  </div>
                </div>
                {/* Button 2 - Group for hover effects, relative positioning */}
                <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden"> {/* Added group, relative, overflow-hidden. Removed py-6, pl-4 from here */}
                  {/* Original Content - Slides up on hover */}
                  <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> {/* Changed font-bold to font-semibold */} 
                    Neem contact op {/* Updated text */}
                    <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                  </span>
                  {/* Hover Overlay - Slides in from bottom on hover */}
                  <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed font-bold to font-semibold */} 
                    Neem contact op {/* Updated text */}
                    <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                  </div>
                </div>
              </div>
            </div> { /* End grid wrapper */}
          </div>

          {/* Absolutely Positioned Image Container */}
 
        </section>

        {/* Features Grid - Aligned with overlay, uses section bottom border & container L/R borders
        <section className="relative z-0 w-full border-b border-border">
          <div className="container relative px-0 z-0">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {featureCategories.map(({ title, IconComponent, iconClass, description }, index) => (
                <div
                  key={title}
                  className="flex items-start gap-4 bg-black p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border bg-background">
                    <IconComponent className={`h-5 w-5 ${iconClass}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">
                      {title}
                    </h3>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
        */}

        {/* Gradient Visual Section - Reduced bottom padding */}
        <section className="relative z-10 w-full pb-10 md:pb-16 lg:pb-20">

        </section>




          {/* Moved Bleed Background Section - Inline Styling */}
          <section className="relative w-full py-4"> {/* Standard section padding */}
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

          {/* Title added before the steps */}
          <div className="container px-0 mb-4"> {/* Container for alignment, added bottom margin */}
            <h2 className="text-6xl font-semibold text-white">Factuur automatisering</h2>
          </div>

          {/* Div with borders and height equal to 1/4 container width via aspect ratio */}
          <div className="relative border-t border-b border-border aspect-[12/1]">
            {/* Flex container for the numbers, positioned absolutely */}
            <div className="absolute inset-0 flex items-start text-white">
              {/* Number 1 */}
              <div className="w-1/4 p-0 text-md"> {/* Added text-sm */}
                <span className="text-sm text-gray-500">STAP 01</span> {/* Updated class */}
                <p className="flex items-center text-lg md:text-xl font-semibold mt-1">
                  <Package className="h-4 w-4 mr-1 ml-1" strokeWidth={1.5} /> {/* Added icon */}
                  Bestelling geplaatst
                </p> {/* Main text - Larger */}
                <p className="text-sm mt-1 text-white">Klant plaatst order op bol.com</p> {/* Subtitle - Updated styling */}
              </div>
              {/* Number 2 */}
              <div className="w-1/4 p-0 text-md"> {/* Added text-sm */}
                <span className="text-sm text-gray-500">STAP 02</span> {/* Updated class */}
                <p className="flex items-center text-lg md:text-xl font-semibold mt-1">
                  <Download className="h-4 w-4 mr-1 ml-1" strokeWidth={1.5} /> {/* Added icon */}
                  Gegevens opgehaald
                </p> {/* Main text - Larger */}
                <p className="text-sm mt-1 text-white">Bolbaas haalt orderinformatie op</p> {/* Subtitle - Updated styling */}
              </div>
              {/* Number 3 */}
              <div className="w-1/4 p-0 text-md"> {/* Added text-sm */}
                <span className="text-sm text-gray-500">STAP 03</span> {/* Updated class */}
                <p className="flex items-center text-lg md:text-xl font-semibold mt-1">
                  <FileText className="h-4 w-4 mr-1 ml-1" strokeWidth={1.5} /> {/* Added icon */}
                  Factuur aangemaakt
                </p> {/* Main text - Larger */}
                <p className="text-sm mt-1 text-white">Automatische factuurgeneratie</p> {/* Subtitle - Updated styling */}
              </div>
              {/* Number 4 */}
              <div className="w-1/4 p-0 text-md"> {/* Added text-sm */}
                <span className="text-sm text-gray-500">STAP 04</span> {/* Updated class */}
                <p className="flex items-center text-lg md:text-xl font-semibold mt-1">
                  <Upload className="h-4 w-4 mr-1 ml-1" strokeWidth={1.5} /> {/* Added icon */}
                  Automatisch geüpload
                </p> {/* Main text - Larger */}
                <p className="text-sm mt-1 text-white">Factuur direct naar bol.com</p> {/* Subtitle - Updated styling */}
              </div>
            </div>
          </div>

          <div className="text-white row-span-2 w-[35%] pt-30"> {/* Make this span 2 rows */}
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Automatisch facturen uploaden naar bol.com</h2>
                <p className="mb-4 text-base">Bespaar tijd en voorkom fouten door facturen automatisch naar het bol.com platform te uploaden. Bolbaas integreert naadloos met je verkoopaccount.</p>
                <p className="text-base">Zodra een bestelling is verwerkt en de factuur is gegenereerd, zorgt Bolbaas ervoor dat deze direct en correct wordt geüpload, conform de eisen van bol.com.</p>
              </div>


        </section> {/* End bleed section */}

        {/* Full-width Gradient Section */}
        {/* <div className="relative z-60 w-full">
          <Image
            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/gradient1-mU76iAn5qblzvp7OyjkOpypAk0ccDX.png"
            alt="Gradient background"
            width={1920}
            height={128}
            className="w-full h-32 object-cover"
            priority
          />
        </div> */}

        {/* Moved Bleed Background Section - Inline Styling */}
        <section className="relative w-full py-16 md:py-24 lg:py-32"> {/* Standard section padding */}
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
          <div className="container px-0 mb-4"> {/* Container for alignment, added bottom margin */}
            <h2 className="text-6xl font-semibold text-white">E-mail automatisering</h2>
          </div>
          {/* Container centers content normally ON TOP of the background */}
          <div className="relative"> {/* REMOVED container padding */}
            {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
            {/* Add vertical gap between rows */}
            <div className="grid grid-cols-[35%_15%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

              {/* Row 1, Column 1: Left Text (35%) */}
              <div className="text-white row-span-2"> {/* Make this span 2 rows */}
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Automatiseer e-mails, voorkom klantvragen en ontvang meer reviews</h2>
                <p className="mb-4 text-base">Verstuur automatisch gepersonaliseerde e-mails om klanten proactief te informeren over hun bestelling en verzending. Dit vermindert het aantal klantvragen aanzienlijk.</p>
                <p className="text-base">Stimuleer positieve klantervaringen en verzamel automatisch meer productreviews. Bolbaas stroomlijnt je aftersales, zodat jij kunt focussen op de groei van je bedrijf.</p>
              </div>

              {/* Row 1, Column 2: Empty (15%) */}
              <div className="row-span-2"></div> {/* Make this span 2 rows */}

              {/* Row 1, Column 3: Feature Set 1 (25%) */}
              <div className="text-gray-300"> {/* This is now implicitly row 1, col 3 */}
                <p className="text-sm text-gray-500 mb-1">01</p> {/* Added number */}
                <h3 className="font-semibold text-white my-3">Automatisch e-mails</h3> {/* Changed mb-3 to my-3 */}
                <ul className="space-y-2 text-sm text-white">
                  <li>Verstuur automatisch gepersonaliseerde e-mails naar klanten.</li>
                </ul>
                {/* REMOVED New Section 1 from here */}
              </div>

              {/* Row 1, Column 4: Feature Set 2 (25%) */}
              <div className="text-gray-300 pr-4 md:pr-6"> {/* This is now implicitly row 1, col 4 */}
                <p className="text-sm text-gray-500 mb-1">02</p> {/* Added number */}
                <h3 className="font-semibold text-white my-3">Ontvang meer reviews</h3> {/* Changed mb-3 to my-3 */}
                <ul className="space-y-2 text-sm text-white">
                  <li>Stimuleer positieve klantervaringen en verzamel automatisch meer productreviews.</li>
                </ul>
                {/* REMOVED New Section 2 from here */}
              </div>

              {/* Start Comment: Row 2, Columns 3 & 4
              <div className="text-gray-300"> 
                <p className="text-sm text-gray-500 mb-1">03</p> 
                <h3 className="font-semibold text-white my-3">Automatiseer de rompslomp</h3> 
                <ul className="space-y-2 text-sm text-white">
                  <li>Focus op ondernemen en groei, laat Bolbaas je store beheren.</li>
                </ul>
              </div>

              
              <div className="text-gray-300 pr-4 md:pr-6"> 
                <p className="text-sm text-gray-500 mb-1">04</p> 
                <h3 className="font-semibold text-white my-3">Inzicht in prestaties</h3> 
                <ul className="space-y-2 text-sm text-white">
                  <li>Bekijk bestellingen, productprestaties, track leveringen en alles wat je nodig hebt.</li>
                </ul>
              </div>
              End Comment */}

            </div> {/* End grid */}
          </div> {/* End container */}
        </section> {/* End bleed section */}
        {/* Moved Bleed Background Section - Inline Styling */}
        <section className="relative w-full"> {/* REMOVED padding from here */}
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

          {/* Container for the 'BTW berekening' sticky section */}
          <div className="relative min-h-[200vh]"> {/* Outer container defining scroll height - INCREASED HEIGHT */}
            <div className="sticky top-0 z-[60] container px-0 flex flex-col md:flex-row items-start gap-8 md:justify-between py-16 md:py-24 lg:py-32"> {/* Sticky Content - Added md:justify-between, kept gap for col layout */}

              {/* Left side: Text content - Add ref here */}
              <div ref={btwTextRef} className="relative w-[25%] text-white"> {/* Adjusted width for responsiveness */}
                <div className="p-0 text-md">
                  <span className="text-sm text-gray-500">01</span>
                  <p className="flex items-center text-lg md:text-xl font-semibold my-6">
                    BTW berekening, automatisch.
                  </p>
                  <p className="text-sm mt-1 text-white">Bolbaas berekent automatisch de BTW over al je bol.com bestellingen en houdt rekening met gemaakte kosten via bol, voor een nauwkeurige en vereenvoudigde administratie.</p>
                </div>
              </div>


              {/* Right side: Image - Add conditional styling - RE-ADDED */}
              <div className={`relative w-full md:w-2/3 transition-opacity duration-1000 ease-in ${isBtwVisible ? 'opacity-100' : 'opacity-0'}`}> {/* Adjusted width for responsiveness */}
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking1-XgvFKJKg3g2IkQ3zn7EzKgAaml8iB1.png"
                  alt="BTW Berekening Visualisatie"
                  width={1200} // Increased width
                  height={675} // Increased height based on aspect ratio
                  className="rounded-lg shadow-lg object-cover" // Added object-cover
                />
              </div>
            </div>
          </div>

       

          {/* Container for the 'Baaspilot' sticky section */}
          <div className="relative min-h-[200vh]"> {/* Outer container - INCREASED HEIGHT */} 
            <div className="sticky top-0 z-[60] container px-0 flex flex-col md:flex-row items-start gap-8 md:justify-between py-16 md:py-24 lg:py-32"> {/* Sticky Content - Added md:justify-between, kept gap for col layout */}

               {/* Left side: Text content for Baaspilot - Add ref here */}
               <div ref={baaspilotTextRef} className="relative w-[25%] text-white"> {/* Adjusted width for responsiveness */}
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


              {/* Right side: Image - Add conditional styling - RE-ADDED */}
              <div className={`relative w-full md:w-2/3 transition-opacity duration-1000 ease-in ${isBaaspilotVisible ? 'opacity-100' : 'opacity-0'}`}> {/* Adjusted width for responsiveness */}
               {/* Image for Baaspilot */}
               <Image
                 src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking1-XgvFKJKg3g2IkQ3zn7EzKgAaml8iB1.png"
                 alt="Baaspilot Visualisatie"
                 width={1200}
                 height={675}
                 className="rounded-lg shadow-lg object-cover"
               />
              </div>
             </div>
           </div>

        </section> {/* End bleed section containing sticky elements */}

        {/* These sections are now outside the black background/sticky section */}
        <InteractiveTopicSection />
        <MiddleContentSection />

        {/* <PricingSection /> */}
        {/* <TestimonialsSection /> */}
        {/* Motivational Quote Section */}

        {/* <FAQSection /> */}

      </div>
    </>
  );
}
