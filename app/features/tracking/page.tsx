import type { Metadata } from "next";
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
  Sparkle,
  Sparkles, // Added Sparkle icon
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
// import OrderProgressTracker from '@/components/order-progress-tracker'; // Keep old import commented for reference or remove
import HighlightedSection from '@/components/highlighted-section'; // Corrected import path
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { DataInzichtenClientFeatures } from "@/components/data-inzichten-client-features"; // Import the new client component
import { TrackingClientFeatures } from "@/components/tracking-client-features";

export default function TrackingPage() { // Renamed function
  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-0"; // Example: 384px - Offset remains

  return (
    <>
      {/* Fixed Background Photo */}
      <BackgroundPhoto className="fixed inset-0 -z-10" imageOption={4} />








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
            <div className="absolute hidden sm:block left-1/2 top-0 bottom-0 w-px bg-border"></div>

            {/* Additional divider line visible only on sm screens and up (4 cols) - Uses border variable */}
            {/* Line between cols 3 & 4 */}
            <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Hero Section - Left Aligned & Reduced Height */}
        <section className="relative z-[60] w-full pt-24 md:pt-32 lg:pt-48 pb-6 md:pb-8 lg:pb-10 h-[84vh]">
          <div className="container px-0">
            {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-2 sm:col-span-4 flex flex-col items-start space-y-3 md:space-y-4 max-w-none sm:max-w-3xl w-full">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 w-[65%] sm:w-auto">
                  Weet alles over rankings, keywords en producten.
                </h1>
                {/* Sub-headline */}
                <p className="w-[71.4%]">
                  Data op basis van meer dan 12 miljoen geanalyseerde producten en keywords.
                </p>
              </div>
              {/* Button Container - Add t/b borders, keep left padding */}
              <div className="col-span-2 sm:col-span-1 mt-20 flex flex-col pl-0.5 border-t border-b border-border"> {/* Added border-t, border-b */}
                {/* Button 1 - Group for hover effects, relative positioning */}
                <Link href="/prijzen" passHref>
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
                </Link>
                {/* Button 2 - Group for hover effects, relative positioning */}
                <Link href="/contact" passHref>
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
                </Link>
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
          


          <section data-navbar-mode="light" id="tracking-options" className="relative w-full py-16 md:py-24 lg:py-32 min-h-[2500px] sm:min-h-[2900px]"> {/* Further increased section height */}
            {/* Added wrapper div for centering */}
            <div className="flex flex-col items-center justify-center h-full">
              {/* Full-width background element */}
              <div className="absolute inset-0 z-60 pointer-events-none border-l border-r border-gray-200"> {/* Higher z-index & Added borders */}
                {/* This relative container holds the light line elements */}
                <div className="relative h-full max-w-full mx-auto">
                  {/* Light Line between cols 1 & 2 (visible only on sm+) */}
                  <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
                  {/* Light Divider line that appears in the middle on mobile (2 cols) and between cols 2 & 3 on sm+ (4 cols) */}
                  <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
                  {/* Light Additional divider line between cols 3 & 4 (visible only on sm+) */}
                  <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-gray-200"></div> {/* Lighter color */}
                </div>
              </div>
            </div> {/* End centering wrapper */}

            <div className="absolute inset-0 w-screen left-1/2 z-55 -translate-x-1/2 bg-white"></div>

            
            
            
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 text-black"></div>
            <div className="container w-full relative z-90 mb-4"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-6xl font-semibold text-black z-90">Product tracking</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (35%) */}
                <div className="text-black row-span-2 z-80 relative"> {/* Span container across two rows */}
                  <p className="mb-4 text-base">Volg je producten en die van concurrenten nauwkeurig. Zie precies hoe rankings veranderen en waarom, zodat je altijd voorop loopt.</p>
                  {/* Wrapper to constrain width of feature blocks below to 25% of grid container */}
                  <div className="w-full">
                    {/* Moved Feature Set 1 into first column */}
                    <div className="sm:mt-6 z-80 relativ pt-10">
                      <p className="text-sm text-gray-500 mb-1">PRODUCT RANKINGS</p>
                      <h3 className="font-semibold text-black my-3">Track producten van eigen stores en van concurrenten</h3>
                      <ul className="space-y-2 text-sm text-black pr-3">
                        <li>Weet precies wat concurrenten doen, en hoe rankings veranderen. Kopieer advertentie strategieën.</li>
                      </ul>
                    </div>
                    <Link href="/contact" passHref>
                      <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-gray-200 mt-6" > {/* Added group, relative, overflow-hidden. Removed py-6, pl-4 from here */}
                        {/* Original Content - Slides up on hover */}
                        <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> {/* Changed font-bold to font-semibold */} 
                          Gesprek inplannen {/* Updated text */}
                          <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                        </span>
                        {/* Hover Overlay - Slides in from bottom on hover */}
                        <div className="absolute inset-0 bg-black text-white font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed font-bold to font-semibold */} 
                          Gesprek inplannen {/* Updated text */}
                          <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                        </div>
                      </div>
                    </Link>
                    {/* Moved Feature Set 2 into first column */}
                    <div className="mt-[25rem] sm:mt-[42rem] z-80 relative pt-10">
                      <div className="absolute top-[35rem] sm:top-[40rem] left-0 w-full z-80 pt-10">
                        <p className="text-sm text-gray-500 mb-1">DATA INZICHT</p>
                        <h3 className="font-semibold text-black my-3">Uitgebreide ranking inzichten</h3>
                        <ul className="space-y-2 text-sm text-black pr-3">
                          <li>Zie het effect van verandering van listings, en andere factoren op je rankings.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Row 1 placeholders for columns 2-4 */}
                <div></div>
                <div></div>
                <div></div>

                {/* Row 2, Column 1: Empty */}
                <div></div>

                {/* Row 2, Column 2: Empty Spacer */}
                <div></div>

                {/* Row 2, Column 3: Feature Set 1 (25% width via grid) */}
        

                {/* Commented out original feature sets - REMOVE THESE LATER IF LAYOUT IS CORRECT */}
                {/* <div className="text-gray-300"> ... </div> */}
                {/* <div className="text-gray-300 pr-4 md:pr-6"> ... </div> */}

                {/* <div className="text-gray-300">
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
                    <li>Baasy berekent op basis van jouw verkopen hoeveel verkopen je de aankomende 12 weken kan verwachten per product.</li>
                  </ul>
                </div> */}


              </div> {/* End grid */}
              {/* Divider title between steps */}
              <div className="absolute sm:left-[25%] top-[74%] w-[100%] sm:w-[50%] flex justify-start items-center text-black text-5xl font-semibold z-80"> {/* Made 'Twee soorten' much larger */}
                Tracking opties
              </div>
              {/* Precision Label - Replaced with Feature 02 content */}
              <div className="absolute sm:left-[25%] top-[80%] w-[50%] sm:w-[25%] z-80 text-left text-black"> {/* Adjusted classes: removed flex, items-center, text-4xl, font-bold. Added text-left */}
                <p className="text-sm text-gray-600 mb-1">GEAVANCEERD ZOEK ALGORITME</p>
                {/* Added flex container and Sparkles icon */}
                <div className="flex items-center my-3">
                  <Sparkles className="mr-2 h-5 w-5 text-purple-500 stroke-1.25" /> {/* Added icon, color, size, stroke, margin */}
                  <h3 className="font-semibold text-black">Precision tracking</h3> {/* Removed my-3 from h3 */} 
                </div>
                <ul className="space-y-2 text-sm text-black pr-0">
                  <li>Elke dag, alle rankings voor alle keywords waar het product voor rankt. Uitgebreid rapport. </li>
                  <li>Goed om <b>nauwkeurig veranderingen</b> in rankings bij te houden.</li>
                  <li>Dagelijks meer dan 1 miljoen geanalyseerde keywords.</li>
                </ul>
              </div>
              {/* Dynamic Label - Replaced with Feature 02 content */}
              <div className="absolute left-[50%] top-[80%] w-[50%] sm:w-[25%] z-80 text-left text-black"> {/* Adjusted classes: removed flex, items-center, text-4xl, font-bold. Added text-left */}
                <p className="text-sm text-gray-600 mb-1">DYNAMISCHE DATA ANALYSE</p>
                {/* Added flex container and Sparkles icon */}
                <div className="flex items-center my-3">
                  <Sparkle className="mr-2 h-5 w-5 text-green-500  stroke-1.25" /> {/* Added icon, color, size, stroke, margin */}
                  <h3 className="font-semibold text-black">Dynamic tracking</h3> {/* Removed my-3 from h3 */} 
                </div>
                <ul className="space-y-2 text-sm text-black pr-0">
                  <li>Elke dag, rankings die het meest relevant zijn op die dag. Dynamisch rapport. </li>
                    <li>   Goed om een <b>algemeen beeld</b> te krijgen van de ranking van een product. </li>
                    <li>   Alle producten van Baasy worden dagelijks geanalyseerd.</li>
                </ul>
              </div>
              {/* End dynamic label */}
              <div className="absolute top-[115%] sm:top-[105%] left-1/2 transform -translate-x-1/2 w-[100%] sm:w-[40%] h-auto z-70 pointer-events-none">
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/Scherm%C2%ADafbeelding%202025-05-01%20om%2015.33.11-rV8vQZN8VMM5xkoZQFJZP8u5WKe9Cm.png"
                  alt="Search algorithm screenshot"
                  width={1200}
                  height={960}
                  quality={100}
                  className="relative rounded-xl"
                />
              </div>
              {/* NEW Absolutely Positioned Image Container for Product Prestaties */}
              <div className="absolute top-[40%] sm:top-[0%] sm:right-[-10%] w-[100%] sm:w-[75%] h-auto z-70 pointer-events-none"> {/* Adjusted top/right positioning */} 
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking-QnWkZ19t2pN2FKO0Lr7pl3237LjxMZ.png"
                  alt="Bestellingen screenshot"
                  width={1200} // Adjust width as needed, larger for better quality scaling down
                  height={960} // Adjust height based on aspect ratio
                  quality={100}
                  className="relative rounded-lg" // Removed shadow and border
                />
              </div>
              {/* Ranking insights graph */}
              <div className="absolute top-[170%] sm:top-[140%] sm:right-[-10%] w-full sm:w-[75%] h-auto z-70 pointer-events-none">
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/rank%20graph-lFkDeYkXzvRkduza4rPpHsBZKicNAG.png"
                  alt="Ranking insights graph"
                  width={1200}
                  height={960}
                  quality={100}
                  className="relative rounded-lg"
                />
              </div>

            </div> {/* End container */}

            {/* NEW Text Block at the bottom */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[82%] sm:top-[86%] w-full sm:w-[50%] z-80 text-left text-black space-y-6"> {/* Added text-black and space-y-4 */}
              <h2 className="text-4xl md:text-5xl font-semibold">Geen lege tabellen meer?</h2>
              <p className="text-base">
                Baasy combineert verschillende data bronnen om een compleet beeld te krijgen van de rankings van producten, zoals AI-modellen. Meer dan simpele ranking tools.
              </p>
            </div>

            {/* NEW Buttons container at the bottom */}
            <div className="absolute sm:left-[25%] top-[92%] w-full sm:w-[50%] z-80 grid grid-cols-2 text-black"> {/* Adjusted top, added text-black */}
              {/* Button 1 in First Column */}
              <div className="border-t border-b border-gray-200"> {/* Added border-r, changed border color */}
                <Link href="/prijzen" passHref>
                  <div className="group relative w-full text-left cursor-pointer overflow-hidden">
                    {/* Original Content */}
                    <span className="block py-6 pl-4 transition-all border-r border-gray-200 sm:border-r-0 duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                      Abonnementen bekijken
                    </span>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black border-r border-gray-200 sm:border-r-0 text-white py-6 pl-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed overlay background to black */}
                      Abonnementen bekijken
                    </div>
                  </div>
                </Link>
              </div>

              {/* Button 2 in Second Column */}
              <div className="border-t border-b border-gray-200"> {/* Changed border color */}
                <Link href="/contact" passHref>
                  <div className="group relative w-full text-left cursor-pointer overflow-hidden">
                    {/* Original Content */}
                    <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                      Gesprek inplannen
                      <MdOutlineArrowOutward className="h-5 w-5" />
                    </span>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black text-white font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed overlay background to black */}
                      Gesprek inplannen
                      <MdOutlineArrowOutward className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </section> {/* End bleed section */}       

          {/* Duplicated Bestellingen Section with Black Background */}
          <section id="keyword-tracking" className="relative w-full py-16 md:py-24 lg:py-32 min-h-[120vh]"> 
            {/* Full-width background element - BLACK */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            
            <div className="container px-0 mb-4 z-80 relative"> 
              <h2 className="text-6xl font-semibold text-white z-80">Keyword tracking</h2>
            </div>
            
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60"> 
              {/* Grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-white"> 

                {/* Row 1, Column 1: Left Text (35%) */}
                <div className="text-white row-span-2 z-80 relative"> 
                  <p className="mb-4 text-base">Track keywords uit de database, krijg dagelijks updates. Pas campagnes aan op basis van veranderingen in zoekterm biedingen. Houd volume trends in de gaten. Ontdek nieuwe concurrenten.</p>
                  {/* Wrapper to constrain width of feature blocks below to 25% of grid container */}
                  <div className="w-full pt-10">
                    {/* Feature Set 1 */}
                    <div className="sm:mt-6 z-80 relative">
                      <p className="text-sm text-gray-400 mb-1">TRACK KEYWORDS</p>
                      <h3 className="font-semibold text-white my-3">Volg keywords uit onze database</h3>
                      <ul className="space-y-2 text-sm text-white pr-3">
                        <li>Bekijk dagelijkse updates en trends, over biedingen, volume, trends en nieuwe keywords.</li>
                      </ul>
                    </div>
                    {/* Button with hover effect */}
                    <Link href="/features/tools#baasy-database" passHref>
                      <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-border mt-6" > 
                        {/* Original Content - Slides up on hover */}
                        <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> 
                          Info over database
                          <MdOutlineArrowOutward className="h-5 w-5" />
                        </span>
                        {/* Hover Overlay - Slides in from bottom on hover */}
                        <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> 
                          Gesprek inplannen
                          <MdOutlineArrowOutward className="h-5 w-5" />
                        </div>
                      </div>
                    </Link>
                    <Link href="/prijzen" passHref>
                      <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-b border-border mt-0" > 
                        {/* Original Content - Slides up on hover */}
                        <span className="font-normal flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> 
                          Abonnementen bekijken
                          <MdOutlineArrowOutward className="h-5 w-5" />
                        </span>
                        {/* Hover Overlay - Slides in from bottom on hover */}
                        <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> 
                          Abonnementen bekijken
                          <MdOutlineArrowOutward className="h-5 w-5" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Empty placeholders for columns 2-4 */}
                <div></div>
                <div></div>
                <div></div>

                {/* Row 2, Column 1: Empty */}
                <div></div>

                {/* Row 2, Column 2: Empty Spacer */}
                <div></div>
              </div> {/* End grid */}

              {/* Absolutely Positioned Image Container */}
              <div className="absolute top-[83%] sm:top-[0%] sm:right-[-10%] w-[100%] sm:w-[75%] h-auto z-70 pointer-events-none"> 
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/savedkeywords-KLc9pX2W931tXCNUfAiXpFc6R7Gvts.png"
                  alt="Bestellingen screenshot"
                  width={1200}
                  height={960}
                  quality={100}
                  className="relative rounded-lg"
                />
              </div>

            </div> {/* End container */}
          </section> {/* End duplicated bleed section */}       


          <section id="omzet-database" className="relative w-full py-16 md:py-24 lg:py-32 min-h-[100vh]">
      {/* Full-width background element - BLACK */}
      <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

      {/* Content container - positioned above the stripe pattern */}
      <div className="container w-full relative z-80">
        <div className="px-0 mb-4 relative">
          <h2 className="text-6xl font-semibold text-white">Omzet & producten database</h2>
          <div className="mt-2">
            <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium">
              COMING SOON
            </span>

            
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-white mt-8">
          {/* Row 1, Column 1: Left Text */}
          <div className="text-white row-span-2 relative">
            <p className="mb-4 text-base">
              Bekijk van meer de omzet van meer dan 4 miljoen bol producten. Spot kansen in de markt.
            </p>
          </div>

          
          {/* Empty placeholders for columns 2-4 */}
          <div></div>
          
          <div></div>

          <div></div>

          
        </div>
              {/* Feature Set 1 */}
              <div className="mt-6 z-80 relative sm:w-[25%]">
                      <p className="text-sm text-gray-400 mb-1">OMZET ALGORITMES</p>
                      <h3 className="font-semibold text-white my-3">Omzet voor meer dan 4 miljoen producten</h3>
                      <ul className="space-y-2 text-sm text-white pr-3">
                        <li>Baasy gebruikt verschillende algoritmes om de omzet van producten te bepalen. Wij maken geen gebruik van de winkelwagenmethode, omdat deze onbetrouwbaar is. Zo kan je ook gelijk omzet zien, zonder producten te tracken.</li>
                      </ul>
                    </div>
        {/* Placeholder for where the image was */}
        <div className="absolute top-[30%] right-[-10%] w-[75%] h-auto pointer-events-none hidden sm:flex items-center justify-center">
          <div className="w-[60%] h-full min-h-[300px] rounded-lg border border-white/10 flex items-center justify-center bg-[repeating-linear-gradient(45deg,theme(colors.white/0.05),theme(colors.white/0.05)_10px,transparent_10px,transparent_20px)]">
            {/* Content or placeholder for stripes effect */}
          </div>
        </div>
      </div>
    </section>

          {/* Moved Bleed Background Section - Inline Styling */}
          <section className="relative w-full"> {/* REMOVED padding from here */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

            {/* Render the client component containing the sticky sections */}
            <TrackingClientFeatures />

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
