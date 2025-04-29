import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import Next Image
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
import { DataInzichtenClientFeatures } from "@/components/data-inzichten-client-features"; // Import the new client component

export default function DataInzichtenPage() { // Renamed function
  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-0"; // Example: 384px - Offset remains

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
                  Weet precies wat <br /> er gebeurt in je store
                </h1>
                {/* Sub-headline */}
                <p className="text-white w-[71.4%]">
                  Data op basis van meer dan 12 miljoen geanalyseerde producten en keywords.
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

        {/* Removed commented out sections */}

        {/* Gradient Visual Section - Reduced bottom padding */}
        <section className="relative z-10 w-full pb-10 md:pb-16 lg:pb-20">

        </section>


          {/* Moved Bleed Background Section - Inline Styling */}
          <section className="relative w-full py-4 min-h-[150vh]"> {/* Standard section padding */}
            {/* NEW Light Border Overlay */}
            <div className="absolute inset-0 z-60 pointer-events-none border-l border-r border-gray-200"> {/* Higher z-index & Added borders */}
              {/* This relative container holds the light line elements */}
              <div className="relative h-full max-w-full mx-auto">
                {/* Light Line between cols 1 & 2 (visible only on sm+) */}
                <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
                {/* Light Divider line that appears in the middle on mobile (2 cols) and between cols 2 & 3 on sm+ (4 cols) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
                {/* Light Additional divider line between cols 3 & 4 (visible only on sm+) */}
                <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
              </div>
            </div>

            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 z-55 bg-white"></div>

            {/* NEW Centered Content Area */}
            <div className="relative z-[70] w-1/2 mx-auto pt-16 text-black"> {/* Centered, 50% width, above background, top padding */}
            <p className="text-xs text-gray-600">MEER DAN 12 MILJOEN GEANALYSEERDE PRODUCTEN EN KEYWORDS</p> {/* Added number */}

              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl my-6">Volledig aanpasbaar, precies zoals jij het wilt.</h2>
              <p className="mb-4 text-base">Zie alles precies zoals je het wilt zien. Alle dashboards en tabellen in Bolbaas zijn aanpasbaar.</p>
              <p className="text-base">Sla verschillende views, en bekijk ze later. Maak je eigen dashboards en views. Bolbaas is volledig aanpasbaar.</p>
            </div>

          </section> {/* End bleed section */}

          {/* Removed full-width gradient section */}

          {/* Moved Bleed Background Section - Inline Styling */}
          <section className="relative w-full py-16 md:py-24 lg:py-32"> {/* Standard section padding */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            <div className="container px-0 mb-4"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-6xl font-semibold text-white">Product prestaties</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}
              <div className="grid grid-cols-[35%_15%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (35%) */}
                <div className="text-white row-span-2"> {/* Make this span 2 rows */}
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Zet in op producten die presteren, verbeter ondermaatse producten.</h2>
                  <p className="mb-4 text-base">Nee, geen simpele prompt wrapper. Bolbaas analyseert voor jouw keywords de best presterende listings. Op basis van meer dan <span className="font-bold">12 miljoen geanalyseerde producten en keywords.</span></p>
                  <p className="text-base">Verbeter je listings in een handomdraai. Verhoog organisch verkeer en verlaag advertentiekosten.</p>
                </div>

                {/* Row 1, Column 2: Empty (15%) */}
                <div className="row-span-2"></div> {/* Make this span 2 rows */}

                {/* Row 1, Column 3: Feature Set 1 (25%) */}
                <div className="text-gray-300"> {/* This is now implicitly row 1, col 3 */}
                  <p className="text-sm text-gray-500 mb-1">01</p> {/* Added number */}
                  <h3 className="font-semibold text-white my-3">Sales, winst en omzet</h3> {/* Changed mb-3 to my-3 */}
                  <ul className="space-y-2 text-sm text-white pr-3">
                    <li>Zie precies per product wat de sales, winst en omzet zijn.</li>
                  </ul>
                  {/* REMOVED New Section 1 from here */}
                </div>

                {/* Row 1, Column 4: Feature Set 2 (25%) */}
                <div className="text-gray-300 pr-4 md:pr-6"> {/* This is now implicitly row 1, col 4 */}
                  <p className="text-sm text-gray-500 mb-1">02</p> {/* Added number */}
                  <h3 className="font-semibold text-white my-3">Rankings</h3> {/* Changed mb-3 to my-3 */}
                  <ul className="space-y-2 text-sm text-white pr-3">
                    <li>Eigen producten worden automatisch getracked. Lees meer over rankings...</li>
                  </ul>
                  {/* REMOVED New Section 2 from here */}
                </div>

                <div className="text-gray-300">
                  <p className="text-sm text-gray-500 mb-1">03</p>
                  <h3 className="font-semibold text-white my-3">Bekijk conversie, clicks en koopblokken</h3>
                  <ul className="space-y-2 text-sm text-white pr-3">
                    <li>Bekijk het aantal clicks en de conversie van een product. Optimaliseer je listing voor hogere omzet. </li>
                  </ul>
                </div>


                <div className="text-gray-300 pr-4 md:pr-6">
                  <p className="text-sm text-gray-500 mb-1">04</p>
                  <h3 className="font-semibold text-white my-3">Sales voorspellingen en voorraadbeheer</h3>
                  <ul className="space-y-2 text-sm text-white pr-3">
                    <li>Bolbaas berekent op basis van jouw verkopen hoeveel verkopen je de aankomende 12 weken kan verwachten per product.</li>
                  </ul>
                </div>


              </div> {/* End grid */}
            </div> {/* End container */}
          </section> {/* End bleed section */}




          <section className="relative w-full py-16 md:py-24 lg:py-32"> {/* Standard section padding */}
            {/* Full-width background element */}
            <div className="absolute inset-0 z-60 pointer-events-none border-l border-r border-gray-200"> {/* Higher z-index & Added borders */}
              {/* This relative container holds the light line elements */}
              <div className="relative h-full max-w-full mx-auto">
                {/* Light Line between cols 1 & 2 (visible only on sm+) */}
                <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
                {/* Light Divider line that appears in the middle on mobile (2 cols) and between cols 2 & 3 on sm+ (4 cols) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
                {/* Light Additional divider line between cols 3 & 4 (visible only on sm+) */}
                <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
              </div>
            </div>

            <div className="absolute inset-0 w-screen left-1/2 z-55 -translate-x-1/2 bg-white"></div>

            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-70"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}

              <div className="container px-0 mb-4 z-75"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-6xl font-semibold text-black z-75">Bestellingen</h2>
            </div>

              <div className="grid grid-cols-[35%_15%_25%_25%] gap-x-0 gap-y-6 text-black"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (35%) */}
                <div className="text-black row-span-2 z-80"> {/* Make this span 2 rows */}
                  <p className="mb-4 text-base">Nee, geen simpele prompt wrapper. Bolbaas analyseert voor jouw keywords de best presterende listings. Op basis van meer dan <span className="font-bold">12 miljoen geanalyseerde producten en keywords.</span></p>
                  <p className="text-base">Verbeter je listings in een handomdraai. Verhoog organisch verkeer en verlaag advertentiekosten.</p>
                </div>

                {/* Row 1, Column 2: Empty (15%) */}
                <div className="row-span-2"></div> {/* Make this span 2 rows */}

                {/* Row 1, Column 3: Feature Set 1 (25%) */}
                <div className="text-gray-700"> {/* This is now implicitly row 1, col 3 */}
                  <p className="text-sm text-gray-600 mb-1">01</p> {/* Added number */}
                  <h3 className="font-semibold text-black my-3">Bekijk bestellingen</h3> {/* Changed mb-3 to my-3 */}
                  <ul className="space-y-2 text-sm text-gray-800 pr-3">
                    <li>Zie precies per product wat de sales, winst en omzet zijn.</li>
                  </ul>
                  {/* REMOVED New Section 1 from here */}
                </div>

                {/* Row 1, Column 4: Feature Set 2 (25%) */}
                <div className="text-gray-700 pr-4 md:pr-6"> {/* This is now implicitly row 1, col 4 */}
                  <p className="text-sm text-gray-600 mb-1">02</p> {/* Added number */}
                  <h3 className="font-semibold text-black my-3">Status van bestellingen</h3> {/* Changed mb-3 to my-3 */}
                  <ul className="space-y-2 text-sm text-gray-800 pr-3">
                    <li>Eigen producten worden automatisch getracked. Lees meer over rankings...</li>
                  </ul>
                  {/* REMOVED New Section 2 from here */}
                </div>

              </div> {/* End grid */}
            </div> {/* End container */}
          </section> {/* End bleed section */}

          {/* Moved Bleed Background Section - Inline Styling */}
          <section className="relative w-full"> {/* REMOVED padding from here */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

            {/* Render the client component containing the sticky sections */}
            <DataInzichtenClientFeatures />

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
