import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import Next Image
import { Badge } from "@/components/ui/badge"; // Import Badge
// Import necessary icons from lucide-react
import {
  LineChart,
  Search,
  FileText,
  Target,
  ShoppingCart,
  Package, // Added Package icon
  Download, // Added Download icon
  Upload,
  Database,
  Sparkle,
  Sparkles,   // Added Upload icon
  ArrowRight,
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
// import OrderProgressTracker from '@/components/order-progress-tracker'; // Keep old import commented for reference or remove
import HighlightedSection from '@/components/highlighted-section'; // Corrected import path
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
// Remove client-side hooks import
import { ToolsClientFeatures } from "@/components/tools-client-features"; // Import the new client component
import { CPCChart } from "@/components/cpc-chart"; // Import the CPC chart component
import { RankingChart } from "@/components/ranking-chart"; // Import the ranking chart component

export const metadata: Metadata = {
  title: "Research tools - Bolbaas",
  description: "AI gedreven research tools, gebaseerd op miljoenen geanalyseerde producten en keywords.",
  openGraph: {
    title: "Research tools - Bolbaas",
    description: "AI gedreven research tools, gebaseerd op miljoenen geanalyseerde producten en keywords.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Research Tools Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Research tools - Bolbaas",
    description: "AI gedreven research tools, gebaseerd op miljoenen geanalyseerde producten en keywords.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function ToolsPage() { // Rename function if needed, e.g., ToolsPage
  // Removed featureCategories array

  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-0"; // Example: 384px - Offset remains

  // Removed State and Refs for Intersection Observer
  // Removed Effect for Intersection Observer

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
            <div className="absolute hidden sm:block left-1/2 top-0 bottom-0 w-px bg-border"></div>

            {/* Additional divider line visible only on sm screens and up (4 cols) - Uses border variable */}
            {/* Line between cols 3 & 4 */}
            <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Hero Section - Left Aligned & Reduced Height */}
        <section className="relative z-[60] w-full pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-1 h-[84vh]">
          <div className="container px-0">
            {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-2 sm:col-span-4 flex flex-col items-start space-y-3 md:space-y-4 max-w-none sm:max-w-3xl w-full">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 w-[65%] sm:w-auto">
                  Research tools op een nieuw niveau.
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
              <section data-navbar-mode="dark" id="bolbaas-database" className="relative w-full pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16"> {/* Reduced bottom padding and removed min-height */}
            {/* Added wrapper div for centering */}
            <div className="flex flex-col items-center justify-center h-full">
              {/* Full-width background element */}
              <div className="absolute inset-0 z-60 pointer-events-none border-l border-r border-border"> {/* Higher z-index & Added borders */}
                {/* This relative container holds the dark line elements */}
                <div className="relative h-full max-w-full mx-auto">
                  {/* Dark Line between cols 1 & 2 (visible only on sm+) */}
                  <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-border"></div> {/* Standard border color */}
                  {/* Dark Divider line that appears in the middle on mobile (2 cols) and between cols 2 & 3 on sm+ (4 cols) */}
                  <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-border"></div> {/* Standard border color */}
                  {/* Dark Additional divider line between cols 3 & 4 (visible only on sm+) */}
                  <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-border"></div> {/* Standard border color */}
                </div>
              </div>
            </div> {/* End centering wrapper */}

            <div className="absolute inset-0 w-screen left-1/2 z-55 -translate-x-1/2 bg-black"></div>

            
            
            
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 text-white"></div>
            <div className="container w-full relative z-90 mb-4"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-6xl font-semibold text-white z-90">Bolbaas Database</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
                          <div className="relative z-60"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (25%) */}
                <div className="text-white row-span-2 z-80 relative"> {/* Span container across two rows */}
                  <p className="mb-4 text-base">Ontdek welke keywords en producten écht werken, met 12 miljoen geanalyseerde zoektermen en miljarden datapunten. De grootste database voor bol, by far.</p>
                  {/* Wrapper to constrain width of feature blocks below to 25% of grid container */}
                  <div className="w-full">
                    {/* Moved Feature Set 1 into first column */}
                    <div className="sm:mt-30 z-80 relative pt-10">
                      <p className="text-sm text-gray-400 mb-1">12 MILJOEN GEANALYSEERDE KEYWORDS</p>
                      <h3 className="font-semibold text-white my-3">Zie kansen met onze keyword database. Analyseer zichtbaarheid</h3>
                      <ul className="space-y-2 text-sm text-white pr-3">
                        <li>Weet precies welke keywords belangrijk zijn, waar vraag en aanbod verschillen, en hoe biedingen effect hebben op campagne strategieën.</li>
                      </ul>
                    </div>
                    <Link href="/contact" passHref>
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
                    </Link>
                  </div>
                </div>
                {/* Row 1, Columns 2-4: First Image spanning 3 columns */}
                <div className="col-span-2 sm:col-span-3 flex justify-center sm:justify-end sm:-mr-[6vw] pointer-events-none">
                  <div className="w-full sm:w-[75%] h-auto sm:ml-[15%]">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/databasen3.png"
                      alt="Database screenshot"
                      width={960}
                      height={960}
                      quality={85}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>

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
                    <li>Bolbaas berekent op basis van jouw verkopen hoeveel verkopen je de aankomende 12 weken kan verwachten per product.</li>
                  </ul>
                </div> */}


              </div> {/* End grid */}
              {/* NEW 4-column feature section */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-white mt-24 py-0 border-t border-b border-border items-stretch">
                                {/* Column 1 */}
                <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Search className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">01</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Verborgen keyword kansen</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Missen van winstgevende long-tail keywords die concurrenten niet zien</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Ontdek verborgen keywords met hoge potentie</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-blue-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">12M+ Geanalyseerde Keywords</div>
                      <div className="text-xs text-zinc-500">Grootste database voor Bol</div>
                    </div>
                    
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-purple-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">99.5% Relevante Zoektermen</div>
                      <div className="text-xs text-zinc-500">Bol klanten dekking</div>
                    </div>
                  </div>
                </div>
                {/* Column 2 */}
                <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">02</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Market gaps identificeren</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Niet weten waar vraag groter is dan aanbod</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Vind niches met hoge vraag en lage concurrentie</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg border-l-4 border-blue-500 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div>
                        <div className="text-sm font-medium text-white mb-1">Vraag vs aanbod</div>
                        <div className="text-xs text-zinc-500">Listing en concurrentie aantallen</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
 
                      </div>
                    </div>
                    
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">Brandshelf (SoS) Analyse</div>
                      <div className="text-xs text-zinc-500">Bekijk welke brands concurreren</div>
                    </div>
                  </div>
                </div>
                {/* Column 3 */}
                <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <LineChart className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-green-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">03</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Trends voorspellen</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Achter de feiten aanlopen bij marktveranderingen</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Spot opkomende trends voordat ze mainstream worden</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-green-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">Trends voorspellen</div>
                      <div className="text-xs text-zinc-500">Zomer & winter patronen</div>
                    </div>
                    
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-blue-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">4 Jaar Historische Volume Data</div>
                      <div className="text-xs text-zinc-500">Complete geschiedenis</div>
                    </div>
                  </div>
                </div>
                {/* Column 4 */}
                <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-red-400/10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-red-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">04</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Slimmere campagnes</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Verlies van zichtbaarheid en winst door inefficiënte biedstrategieën</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Win meer clicks en verlaag je ACoS</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-red-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">CPC Tracker</div>
                      <div className="text-xs text-zinc-500">Real-time en historische biedingen</div>
                    </div>
                    
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-green-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">ACoS algoritme</div>
                      <div className="text-xs text-zinc-500">Automatische schatting van ACoS</div>
                    </div>
                  </div>
                </div>
              </div>





                             {/* Remaining Feature Blocks */}
               <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] gap-x-0 gap-y-6 text-white mt-4">
                 {/* First section: MILJARDEN DATAPUNTEN */}
                 <div className="text-white z-80 relative">
                   <div className="w-full">
                     <div className="sm:mt-60 z-80 relative pt-10">
                      <p className="text-sm text-gray-400 mb-1">MILJARDEN DATAPUNTEN</p>
                      <h3 className="font-semibold text-white my-3">Zie trends, mogelijkheden en kansen van keywords</h3>
                      <ul className="space-y-2 text-sm text-white pr-3">
                        <li>Zomer of winter keywords? Tijdelijke hype of langdurige trends? Zie het hele beeld. Bekijk topconcurrenten en trends om strategieën te verbeteren.</li>
                      </ul>
                    </div>
                    <Link href="/contact" passHref>
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
                    </Link>
                  </div>
                </div>
                {/* Second Image positioned to the right */}
                <div className="flex justify-center sm:justify-end sm:-mr-[6vw] pointer-events-none">
                  <div className="w-full sm:w-[75%] h-auto sm:ml-[15%]">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/keywordinsight_2.png"
                      alt="Keyword insights screenshot"
                      width={1200}
                      height={960}
                      quality={85}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* CPC TRACKER Section with 4-column layout */}
                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-4  gap-x-0 sm:mt-20 bg-black relative z-[100] py-20">
                  {/* Column 1: CPC TRACKER Text */}
                  <div className="text-white z-80 relative">
                    <div className="w-full">
                      <div className="z-80 relative pt-10">
                        <p className="text-sm text-gray-400 mb-1">CPC TRACKER</p>
                        <h3 className="font-semibold text-white my-3">Optimaliseer je biedstrategie met data, volg niet alleen het gemiddelde bod.</h3>
                        <ul className="space-y-2 text-sm text-white pr-3">
                          <li>Bolbaas analyseert elk keyword elk uur om het beste bod te bepalen. Win keywords met lagere biedingen, verlaag ACoS en verhoog winst. </li>
                        </ul>
                      </div>
                      <Link href="/contact" passHref>
                        <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-r border-l border-border mt-6">
                          <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                            Gesprek inplannen
                            <MdOutlineArrowOutward className="h-5 w-5" />
                          </span>
                          <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            Gesprek inplannen
                            <MdOutlineArrowOutward className="h-5 w-5" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Column 2: Empty */}
                  <div></div>

                  {/* Columns 3-4: CPC Chart */}
                  <div className="col-span-2">
                    <CPCChart />
                  </div>
                </div>
              </div>

              {/* Divider title between steps */}
              
              {/* End dynamic label */}
     

              {/* Ranking insights graph */}
   

            </div> {/* End container */}

            {/* Text Block */}
            {/* <div className="container mx-auto px-4 mt-16 mb-8">
              <div className="max-w-2xl text-left text-white space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold">Verhoog zichtbaarheid, verlaag ACoS</h2>
              <p className="text-base">
                Bolbaas analyseert dagelijkse miljoenen keywords en miljarden data punten. 
              </p>
              </div>
            </div>

            {/* Buttons container */}
            {/* <div className="container mx-auto px-4 mb-16">
              <div className="max-w-2xl grid grid-cols-2 text-white">
              {/* Button 1 in First Column */}
                {/* <div className="border-t border-b border-border">
                <Link href="/prijzen" passHref>
                  <div className="group relative w-full text-left cursor-pointer overflow-hidden">
                    {/* Original Content */}
                    {/* <span className="block py-6 pl-4 transition-all border-r border-border sm:border-r-0 duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                      Abonnementen bekijken
                    </span>
                    {/* Hover Overlay */}
                      {/* <div className="absolute inset-0 bg-white text-black py-6 pl-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      Abonnementen bekijken
                    </div>
                  </div>
                </Link>
              </div>

              {/* Button 2 in Second Column */}
                {/* <div className="border-t border-b border-border">
                <Link href="/contact" passHref>
                  <div className="group relative w-full text-left cursor-pointer overflow-hidden">
                    {/* Original Content */}
                    {/* <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                      Gesprek inplannen
                      <MdOutlineArrowOutward className="h-5 w-5" />
                    </span>
                    {/* Hover Overlay */}
                      {/* <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      Gesprek inplannen
                      <MdOutlineArrowOutward className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </div>
                </div>
              </div> */}

            

          </section> {/* End bleed section */}       


          {/* Removed full-width gradient section */}

          {/* Moved Bleed Background Section - Inline Styling */}
          <section id="ranking-ai" className="relative w-full pt-32 pb-60 "> {/* Standard section padding + INCREASED min-h */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            <div className="container px-0 mb-4 z-80 relative"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-6xl font-semibold text-white">Ranking AI</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60"> {/* REMOVED container padding */}
              {/* Use 2-column grid for better layout */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text */}
                <div className="text-white">
                  <p className="mb-4 text-base">Onze AI analyseert de best presterende listings, klantgedrag en zoektrends voor jouw keywords en creëert automatisch de perfecte listing. Gebaseerd op 12 miljoen geanalyseerde keywords.</p>
                  <p className="mb-4 text-base">De perfecte listing zorgt voor meer zichtbaarheid en meer omzet.</p>
                </div>
                
                {/* RANKING AI Chart positioned to the right */}
                <div className="flex justify-center sm:justify-start sm:items-start sm:ml-[17%] sm:-mr-[40vw]">
                  <div className="w-full sm:w-[60%] h-auto">
                    <RankingChart />
                  </div>
                </div>

              </div> {/* End grid */}

              {/* 4-Step Process Section */}
              <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-white mt-12 py-0 border-t border-b border-border items-stretch">
                {/* Step 1 */}
                <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Search className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">STAP 01</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Perfecte keywords vinden</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Gebruik de Bolbaas database om de meest effectieve keywords voor je product te identificeren</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ 12M+ keywords beschikbaar</span>
                  </div>
                </div>

                {/* Step 2 - Special AI Step with Blue Accents */}
                <div className="px-6 py-8 group hover:bg-blue-900/20 transition-all duration-500 ease-out flex flex-col h-full border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-zinc-900/50 shadow-lg shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-6 h-6 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="text-xs font-mono text-blue-400 tracking-wider">STAP 02</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-blue-100 text-xl mb-3 group-hover:text-white transition-colors">Ranking AI</h3>
                    <p className="text-sm text-zinc-300 mb-4 leading-relaxed">Ranking AI analyseert automatisch de best presterende listings, zoektrends, klantgedrag en meer</p>
                  </div>
                  <div className="flex items-center text-sm text-blue-100 font-medium">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Ranking AI analyseert de markt</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-orange-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">STAP 03</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Geoptimaliseerde listing</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">AI genereert de perfecte listing (titel en beschrijving) gebaseerd op succesvolle patronen</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Klaar voor implementatie</span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <LineChart className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-cyan-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">STAP 04</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Ranking verbetering</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Monitor je ranking prestaties van de nieuwe listing, en vraag Ranking AI om verandering waar nodig</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Top 10 rankings mogelijk</span>
                  </div>
                </div>
                
                {/* Step Arrows for desktop */}
                <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2 text-white bg-black p-2 rounded-full">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white bg-black p-2 rounded-full">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-3/4 -translate-x-1/2 text-white bg-black p-2 rounded-full">
                  <ArrowRight className="w-8 h-8" />
                </div>
              </div>

            </div> {/* End container */}
          </section> {/* End bleed section */}

          {/* Product Tracking Section - White Background */}
          <section data-navbar-mode="light" id="product-tracking" className="relative w-full pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16">
            {/* Added wrapper div for centering */}
            <div className="flex flex-col items-center justify-center h-full">
              {/* Full-width background element */}
              <div className="absolute inset-0 z-60 pointer-events-none border-l border-r border-gray-200">
                {/* This relative container holds the line elements */}
                <div className="relative h-full max-w-full mx-auto">
                  {/* Line between cols 1 & 2 (visible only on sm+) */}
                  <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-200"></div>
                  {/* Divider line that appears in the middle on mobile (2 cols) and between cols 2 & 3 on sm+ (4 cols) */}
                  <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>
                  {/* Additional divider line between cols 3 & 4 (visible only on sm+) */}
                  <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 w-screen left-1/2 z-55 -translate-x-1/2 bg-white"></div>

            <div className="container w-full relative z-90 mb-4">
              <h2 className="text-6xl font-semibold text-black z-90">Product tracking</h2>
            </div>

            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60">
              {/* Use 2-column grid for better layout */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] gap-x-0 gap-y-6 text-black">

                {/* Row 1, Column 1: Left Text */}
                <div className="text-black">
                  <p className="mb-4 text-base">Volg je producten en die van concurrenten nauwkeurig. Zie precies hoe rankings veranderen en waarom, zodat je altijd voorop loopt.</p>
                  
                  {/* Feature Set 1 */}
                  <div className="sm:mt-30 z-80 relative pt-10">
                    <p className="text-sm text-gray-600 mb-1">PRODUCT RANKINGS</p>
                    <h3 className="font-semibold text-black my-3">Track producten van eigen stores en van concurrenten</h3>
                    <ul className="space-y-2 text-sm text-black pr-3">
                      <li>Weet precies wat concurrenten doen, en hoe rankings veranderen. Kopieer advertentie strategieën.</li>
                    </ul>
                  </div>

                  <Link href="/contact" passHref>
                    <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-gray-200 mt-6">
                      <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                        Gesprek inplannen
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </span>
                      <div className="absolute inset-0 bg-black text-white font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        Gesprek inplannen
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Product tracking image positioned to the right */}
                <div className="flex justify-center sm:justify-end sm:-mr-[6vw] pointer-events-none">
                  <div className="w-full sm:w-[75%] h-auto sm:ml-[15%]">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking-QnWkZ19t2pN2FKO0Lr7pl3237LjxMZ.png"
                      alt="Product tracking screenshot"
                      width={1200}
                      height={960}
                      quality={85}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>

              </div>

              {/* Product Tracking Pains/Gains - 4-column feature section */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-black mt-24 py-0 border-t border-b border-gray-200 items-stretch">
                {/* Column 1 */}
                <div className="px-6 py-8 group hover:bg-gray-50 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-gray-600 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-gray-600 tracking-wider">01</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-black text-xl mb-3 group-hover:text-black transition-colors">Concurrentie & koopblok monitoring</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Missen van kritieke veranderingen bij concurrenten die je marktpositie bedreigen?</p>
                  </div>
                  <div className="flex items-center text-sm text-black font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0 invert"
                    />
                    <span>→ Zie alle concurrentie bewegingen real-time</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400 hover:bg-gray-100 transition-colors duration-300">
                      <div className="text-sm font-medium text-black mb-1">Dagelijkse ranking updates</div>
                      <div className="text-xs text-gray-600">Alle producten en keywords</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-400 hover:bg-gray-100 transition-colors duration-300">
                      <div className="text-sm font-medium text-black mb-1">Koopblok en prijs tracking</div>
                      <div className="text-xs text-gray-600">Bekijk waar het koopblok heen gaat en waarom</div>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Special Tracking Methods Card */}
                <div className="px-6 py-8 group hover:bg-blue-900/20 transition-all duration-500 ease-out flex flex-col h-full border border-blue-500/30 bg-gradient-to-br from-blue-50/50 to-blue-100/30 shadow-lg shadow-blue-500/10 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.blue.500),theme(colors.blue.500)_2px,transparent_2px,transparent_12px)]"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <Sparkles className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-500 transition-colors duration-300" />
                      <span className="text-xs font-mono text-blue-600 tracking-wider">02 • TRACKING METHODES</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-blue-900 text-xl mb-3 group-hover:text-blue-800 transition-colors">Twee tracking opties</h3>
                      <p className="text-sm text-blue-800 mb-6 leading-relaxed">Kies de tracking methode die past bij jouw behoeften en doelen</p>
                    </div>
                    
                    <div className="flex items-center text-sm text-blue-900 font-medium h-14 mb-6">
  
                    </div>
                    
                    {/* Dual tracking options */}
                    <div className="space-y-4">
                      {/* Precision Tracking */}
                      <div className="p-4 bg-white/80 rounded-lg border-l-4 border-purple-500 hover:bg-white/90 transition-colors duration-300">
                        <div className="flex items-center mb-2">
                          <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                          <div className="text-sm font-medium text-blue-900">Precision Tracking</div>
                        </div>
                        <div className="text-xs text-blue-700 mb-2">Alle rankings, alle keywords, elke dag</div>
                        <div className="text-xs text-blue-600">→ Voor nauwkeurige analyse</div>
                      </div>
                      
                      {/* Dynamic Tracking */}
                      <div className="p-4 bg-white/80 rounded-lg border-l-4 border-green-500 hover:bg-white/90 transition-colors duration-300">
                        <div className="flex items-center mb-2">
                          <Sparkle className="w-4 h-4 text-green-500 mr-2" />
                          <div className="text-sm font-medium text-blue-900">Dynamic Tracking</div>
                        </div>
                        <div className="text-xs text-blue-700 mb-2">Relevante rankings, dynamisch rapport</div>
                        <div className="text-xs text-blue-600">→ Voor algemeen overzicht en trends</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="px-6 py-8 group hover:bg-gray-50 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Search className="w-6 h-6 text-gray-600 mr-3 group-hover:text-green-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-gray-600 tracking-wider">03</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-black text-xl mb-3 group-hover:text-black transition-colors">Verbeter rankings</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Niet weten welke wijzigingen daadwerkelijk werken voor betere rankings?</p>
                  </div>
                  <div className="flex items-center text-sm text-black font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0 invert"
                    />
                    <span>→ Data-driven optimalisatie beslissingen</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-400 hover:bg-gray-100 transition-colors duration-300">
                      <div className="text-sm font-medium text-black mb-1">A/B test tracking</div>
                      <div className="text-xs text-gray-600">Voor en na vergelijkingen</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400 hover:bg-gray-100 transition-colors duration-300">
                      <div className="text-sm font-medium text-black mb-1">Listing performance</div>
                      <div className="text-xs text-gray-600">Wijziging impact analyse</div>
                    </div>
                  </div>
                </div>

                {/* Column 4 */}
                <div className="px-6 py-8 group hover:bg-gray-50 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-red-400/10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Package className="w-6 h-6 text-gray-600 mr-3 group-hover:text-red-400 transition-colors duration-300" />
                    <span className="text-xs font-mono text-gray-600 tracking-wider">04</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-black text-xl mb-3 group-hover:text-black transition-colors">Bekijk waar je wel en niet zichtbaar bent</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Geleidelijk marktaandeel verliezen zonder het door te hebben?</p>
                  </div>
                  <div className="flex items-center text-sm text-black font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0 invert"
                    />
                    <span>→ Behoud en vergroot je marktpositie</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-400 hover:bg-gray-100 transition-colors duration-300">
                      <div className="text-sm font-medium text-black mb-1">Alle plaatsingen op Bol</div>
                      <div className="text-xs text-gray-600">Zie precies hoe klanten je vinden</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-400 hover:bg-gray-100 transition-colors duration-300">
                      <div className="text-sm font-medium text-black mb-1">Gemiste plaatsingen herkennen</div>
                      <div className="text-xs text-gray-600">Zie waar je niet gevonden wordt</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Tracking Benefits - Compact Card Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 text-black mt-16">
                {/* Left side - The problem without tracking */}
                <div className="group hover:bg-red-50/50 transition-all duration-500 ease-out hover:scale-102 hover:shadow-xl hover:shadow-red-400/10 rounded-lg border border-red-200/50 bg-gradient-to-br from-red-50/30 to-gray-50/50 p-6 relative overflow-hidden">
                  {/* Background pattern for problem side */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.red.300),theme(colors.red.300)_2px,transparent_2px,transparent_12px)]"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-300">
                        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-red-600 tracking-wider mb-0.5">ZONDER PRODUCT TRACKING</p>
                        <h3 className="font-semibold text-black text-xl group-hover:text-red-900 transition-colors">Achter de feiten aanlopen</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-white/60 rounded-md border-l-4 border-red-400 hover:bg-white/80 transition-colors duration-300">
                        <div className="text-sm font-semibold text-black mb-0.5">Reactie op concurrenten te laat</div>
                        <div className="text-xs text-gray-800">Concurrenten verlagen prijzen → je merkt het te laat → verkopen dalen</div>
                      </div>
                      
                      <div className="p-3 bg-white/60 rounded-md border-l-4 border-orange-400 hover:bg-white/80 transition-colors duration-300">
                        <div className="text-sm font-semibold text-black mb-0.5">Gemiste trends</div>
                        <div className="text-xs text-gray-800">Nieuwe keywords worden populair → concurrenten pakken ze in → jij mist de boot</div>
                      </div>
                      
                      <div className="p-3 bg-white/60 rounded-md border-l-4 border-yellow-400 hover:bg-white/80 transition-colors duration-300">
                        <div className="text-sm font-semibold text-black mb-0.5">Sluipend verlies</div>
                        <div className="text-xs text-gray-800">Rankings dalen geleidelijk → geen alarm → marktaandeel weg</div>
                      </div>
                      
                      <div className="p-3 bg-white/60 rounded-md border-l-4 border-red-500 hover:bg-white/80 transition-colors duration-300">
                        <div className="text-sm font-semibold text-black mb-0.5">Blind optimaliseren</div>
                        <div className="text-xs text-gray-800">Listing wijzigingen → onbekend effect → gokken naar optimalisaties</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - The solution with tracking */}
                <div className="group hover:bg-green-50/50 transition-all duration-500 ease-out hover:scale-102 hover:shadow-xl hover:shadow-green-400/10 rounded-lg border border-green-200/50 bg-gradient-to-br from-green-50/30 to-blue-50/30 p-6 relative overflow-hidden">
                  {/* Background pattern for solution side */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.green.300),theme(colors.green.300)_2px,transparent_2px,transparent_12px)]"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                        <Image 
                          src="/icon-512x512.png" 
                          alt="Bolbaas logo" 
                          width={20} 
                          height={20} 
                          className="flex-shrink-0"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-green-600 tracking-wider mb-0.5">MET BOLBAAS PRODUCT TRACKING</p>
                        <h3 className="font-semibold text-black text-xl group-hover:text-green-900 transition-colors">Altijd één stap vooruit</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-white/80 rounded-md border-l-4 border-green-500 hover:bg-white/90 transition-colors duration-300">
                        <div className="text-sm font-semibold text-black mb-0.5">Snelle reactie</div>
                        <div className="text-xs text-gray-800">Prijswijzigingen → direct alert → binnen uren reageren</div>
                      </div>
                      
                      <div className="p-3 bg-white/80 rounded-md border-l-4 border-blue-500 hover:bg-white/90 transition-colors duration-300">
                        <div className="text-sm font-semibold text-black mb-0.5">First-mover advantage</div>
                        <div className="text-xs text-gray-800">Trending keywords → vroeg detecteren → first-mover advantage</div>
                      </div>
                      
                      <div className="p-3 bg-white/80 rounded-md border-l-4 border-purple-500 hover:bg-white/90 transition-colors duration-300">
                        <div className="text-sm font-semibold text-black mb-0.5">Proactief optimaliseren</div>
                        <div className="text-xs text-gray-800">Ranking veranderingen → dagelijkse monitoring → proactief optimaliseren</div>
                      </div>
                      
                      <div className="p-3 bg-white/80 rounded-md border-l-4 border-cyan-500 hover:bg-white/90 transition-colors duration-300">
                        <div className="text-sm font-semibold text-black mb-0.5">Data-driven groei</div>
                        <div className="text-xs text-gray-800">A/B test resultaten → data-driven keuzes → meer omzet</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom text block */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_50%_25%] gap-x-0 text-black mt-16">
                <div></div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">DE KEUZE IS SIMPEL</p>
                  <h3 className="font-semibold text-black text-xl mb-3">Wacht tot het te laat is, of start vandaag met tracking</h3>
                </div>
                <div></div>
              </div>

       

            </div>
          </section>

          {/* Keyword Tracking Section - Black Background */}
          <section id="keyword-tracking" className="relative w-full pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16">
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            
            <div className="container px-0 mb-4 z-80 relative">
              <h2 className="text-6xl font-semibold text-white z-90">Keyword tracking</h2>
            </div>
            
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60">
              {/* Use 2-column grid for better layout */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] gap-x-0 gap-y-6 text-white">

                {/* Row 1, Column 1: Left Text */}
                <div className="text-white">
                  <p className="mb-4 text-base">Track keywords uit de database, krijg dagelijks updates. Pas campagnes aan op basis van veranderingen in zoekterm biedingen. Houd volume trends in de gaten. Ontdek nieuwe concurrenten.</p>
                  
                  {/* Feature Set 1 */}
                  <div className="sm:mt-30 z-80 relative pt-10">
                    <p className="text-sm text-gray-400 mb-1">TRACK KEYWORDS</p>
                    <h3 className="font-semibold text-white my-3">Volg keywords uit onze database</h3>
                    <ul className="space-y-2 text-sm text-white pr-3">
                      <li>Bekijk dagelijkse updates en trends, over biedingen, volume, trends en nieuwe keywords.</li>
                    </ul>
                  </div>

                  <Link href="/features/tools#bolbaas-database" passHref>
                    <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-border mt-6">
                      <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                        Info over database
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </span>
                      <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        Info over database
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                  <Link href="/prijzen" passHref>
                    <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-b border-border mt-0">
                      <span className="font-normal flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                        Abonnementen bekijken
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </span>
                      <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        Abonnementen bekijken
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Keyword tracking image positioned to the right */}
                <div className="flex justify-center sm:justify-end sm:-mr-[6vw] pointer-events-none">
                  <div className="w-full sm:w-[75%] h-auto sm:ml-[15%]">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/savedkeywords-KLc9pX2W931tXCNUfAiXpFc6R7Gvts.png"
                      alt="Keyword tracking screenshot"
                      width={1200}
                      height={960}
                      quality={85}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Moved Bleed Background Section - Inline Styling */}
          
          {/* Moved Bleed Background Section - Inline Styling */}
          <section id="automatisering" className="relative w-full"> {/* REMOVED padding from here */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

            {/* Render the client component containing the sticky sections */}
            <ToolsClientFeatures />

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
