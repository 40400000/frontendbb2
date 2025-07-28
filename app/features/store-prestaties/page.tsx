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
  Sparkles, // Added Sparkles icon
  Database, // Added Database icon
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
import { IoStar } from "react-icons/io5";
import HighlightedSection from '@/components/highlighted-section'; // Corrected import path
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { DataInzichtenClientFeatures } from "@/components/data-inzichten-client-features"; // Import the new client component
import { SalesForecastChart } from "@/components/sales-forecast-chart"; // Import the sales forecast chart component
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store prestaties - Bolbaas",
  description: "Krijg diepgaande data inzichten in je bol prestaties met Bolbaas. Analyseer product prestaties, maak custom dashboards en beheer bestellingen.",
  openGraph: {
    title: "Store prestaties - Bolbaas",
    description: "Krijg diepgaande data inzichten in je bol prestaties met Bolbaas. Analyseer product prestaties, maak custom dashboards en beheer bestellingen.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Data Inzichten Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Store prestaties - Bolbaas",
    description: "Krijg volledig inzicht in je bol store prestaties met de data tools van Bolbaas.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function StorePrestatiesPage() { // Renamed function
  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-0"; // Example: 384px - Offset remains

  return (
    <>
      {/* Fixed Background Photo */}
      <BackgroundPhoto className="fixed inset-0 -z-10" imageOption={3} />

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
        <section className="relative z-[60] w-full pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10 h-[84vh]">
          <div className="container px-0">
            {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-2 sm:col-span-4 flex flex-col items-start space-y-3 md:space-y-4 max-w-none sm:max-w-3xl w-full">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 w-[65%] sm:w-auto">
                  Weet precies wat <br /> er gebeurt in je store
                </h1>
                {/* Sub-headline */}
                <p className="w-[71.4%]">
                  Maak keuzes op basis van data. Uitgebreide data inzichten voor alle aspecten van je store.
                </p>
              </div>
              {/* Button Container - Add t/b borders, keep left padding */}
              <div className="col-span-2 sm:col-span-1 mt-20  flex flex-col pl-0.5 border-t border-b border-border"> {/* Added border-t, border-b */}
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

          {/* Product Prestaties Section with Black Background */}
          <section id="product-prestaties" className="relative w-full py-16 md:py-24 lg:py-32 min-h-[120vh]"> {/* Standard section padding + INCREASED min-h */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            <div className="container px-0 mb-4 z-80 relative"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-6xl font-semibold text-white">Product prestaties</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (25%) */}
                <div className="text-white z-80 relative"> 
                  <p className="mb-4 text-base">Weet precies welke producten je geld opleveren en welke niet. Zie in één oogopslag je winst, omzet en rankings, zodat je slimme beslissingen kunt maken.</p>
                  {/* Wrapper to constrain width of feature blocks below to 25% of grid container */}
                  <div className="w-full pt-10">
                    {/* Moved Feature Set 1 into first column */}
                    <div className="mt-6">
                      <p className="text-sm text-gray-400 mb-1">01</p>
                      <h3 className="font-semibold text-white my-3">Sales, winst en omzet</h3>
                      <ul className="space-y-2 text-sm text-white pr-3">
                        <li>Zie precies per product wat de sales, winst en omzet zijn. Bekijk trends en recente bestellingen.</li>
                      </ul>
                    </div>
                    {/* Moved Feature Set 2 into first column */}
                    <div className="mt-4 pr-4 md:pr-6">
                      <p className="text-sm text-gray-400 mb-1">02</p>
                      <h3 className="font-semibold text-white my-3">Rankings, sales schattingen en reviews</h3>
                      <ul className="space-y-2 text-sm text-white pr-3">
                        <li>Bekijk uitgebreide ranking rapporten, sales schattingen en reviews. <br></br><Link href="/features/tracking#tracking-options" className="underline hover:text-gray-300">Lees meer over rankings.</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Image spanning columns 2-4 (75% total width) */}
                <div className="col-span-2 sm:col-span-3 flex justify-center sm:justify-end sm:-mr-[6vw] pointer-events-none">
                  <div className="w-full sm:w-[85%] h-auto sm:ml-[15%]">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/Porduct%20inzicht%20%281%29-KYOfP819QJwzA7EkhJDvQVYhGmQJe6.png"
                      alt="Product prestaties screenshot"
                      width={1200}
                      height={960}
                      quality={85}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
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
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Zie winst, omzet en sales per product</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Geen duidelijk overzicht van welke producten daadwerkelijk geld opleveren?</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Krijg complete financiële inzichten per product</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-blue-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">Uitgebreide winst / margerekening</div>
                      <div className="text-xs text-zinc-500">Bolbaas berekent realtime je winst, inclusief alle kosten en commissies</div>
                    </div>
                    
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-purple-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">Sales voorspellingen</div>
                      <div className="text-xs text-zinc-500">Inzicht in verkooptrends en voorspelling van toekomstige sales</div>
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
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Hoe klanten jouw product vinden op Bol</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Onduidelijk via welke zoektermen en categorieën klanten bij je terechtkomen?</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Bekijk alle relevante zoektermen en categorieën</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg border-l-4 border-blue-500 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div>
                        <div className="text-sm font-medium text-white mb-1">Campagne optimalisatie</div>
                        <div className="text-xs text-zinc-500">Ontdek op welke zoektermen je achterblijft op zichtbaarheid</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
 
                      </div>
                    </div>
                    
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">Belangrijkste zoektermen</div>
                      <div className="text-xs text-zinc-500">Analyseer waar je klanten op zoeken en hoe je hierop inspeelt</div>
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
                    <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Wat klanten denken over jouw product</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Onduidelijk waar verbeteringen nodig zijn op basis van klantfeedback?</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium mb-6">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Analyseer reviews en klantfeedback</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
                    <div className="flex flex-1 items-center space-x-3 rounded-lg border-l-4 border-blue-400 bg-zinc-800/50 p-4 transition-colors duration-300 hover:bg-zinc-800/70">
                      <Image
                        src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/1440x1080a%20%281%29.jpg"
                        alt="Nieuwe product review"
                        width={40}
                        height={40}
                        className="flex-shrink-0 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm text-white">Nieuwe product review</p>
                        <div className="mt-0.5 flex items-center">
                          <IoStar className="h-4 w-4 text-yellow-400" />
                          <IoStar className="h-4 w-4 text-yellow-400" />
                          <IoStar className="h-4 w-4 text-yellow-400" />
                          <IoStar className="h-4 w-4 text-yellow-400" />
                          <IoStar className="h-4 w-4 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-4 bg-zinc-800/50 rounded-lg border-l-4 border-green-400 hover:bg-zinc-800/70 transition-colors duration-300">
                      <div className="text-sm font-medium text-white mb-1">Belangrijkste verbeterpunten</div>
                      <div className="text-xs text-zinc-500">Bekijk de belangrijkste klantopmerkingen en verbeterpunten per product</div>
                    </div>
                  </div>
                </div>
                {/* Column 4 */}
                <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 flex flex-col h-full relative overflow-hidden">
                  {/* Gold animated gradient overlay - always active */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent translate-x-[-100%] animate-[slide_3s_ease-in-out_infinite]"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <Sparkles className="w-6 h-6 text-yellow-400 mr-3 group-hover:text-yellow-300 transition-colors duration-300 animate-pulse" />
                    <span className="text-xs font-mono text-zinc-400 tracking-wider">04</span>
                  </div>
                  <div className="flex-grow relative z-10">
                    <h3 className="font-semibold text-yellow-400 text-xl mb-3 group-hover:text-yellow-300 transition-colors duration-300">Zet in op winnende producten</h3>
                    <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Focus op producten die het beste presteren en de meeste winst opleveren</p>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium mb-6 relative z-10">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span className="text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">→ Identificeer je toppers en versterk ze</span>
                  </div>
                  
                  {/* Technical capabilities that enable this */}
                  <div className="border-t border-yellow-400/30 pt-6 space-y-4 relative z-10">
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-yellow-400 hover:bg-zinc-800/70 transition-colors duration-300 hover:border-yellow-300">
                      <div className="text-sm font-medium text-white mb-1">Winst analyses</div>
                      <div className="text-xs text-zinc-500">Zie precies welke producten het meest opleveren</div>
                    </div>
                    
                    <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-amber-400 hover:bg-zinc-800/70 transition-colors duration-300 hover:border-amber-300">
                      <div className="text-sm font-medium text-white mb-1">Performance rankings</div>
                      <div className="text-xs text-zinc-500">Top scoorders die vindbaar zijn op Bol met de meeste sales</div>
                    </div>
                  </div>
                </div>
              </div>

            </div> {/* End container */}

            {/* NEW Sales Forecast Section with 4-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] gap-x-0 gap-y-6 text-white mt-20">
              {/* Sales Forecast Text Section */}
              <div className="text-white z-80 relative">
                <div className="w-full">
                  <div className="z-80 relative pt-10">
                    <p className="text-sm text-gray-400 mb-1">VERKOOPPROGNOSE</p>
                    <h3 className="font-semibold text-white my-3">Plan je voorraad met slimme verkoop voorspellingen</h3>
                    <ul className="space-y-2 text-sm text-white pr-3">
                      <li>Onze AI voorspelt jouw verkopen voor de komende 12 weken op basis van historische data, trends en seizoenspatronen. Perfect voor voorraadplanning en inkoop optimalisatie.</li>
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

              {/* Sales Forecast Chart positioned to the right */}
              <div className="flex justify-center sm:justify-start sm:items-start sm:ml-[17%] sm:-mr-[40vw]">
                <div className="w-full sm:w-[60%] h-auto">
                  <SalesForecastChart />
                </div>
              </div>
            </div>

            {/* Additional 4-column feature section for sales forecast benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-white mt-12 py-0 border-t border-b border-border items-stretch">
              {/* Column 1 */}
              <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/10 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-purple-400 transition-colors duration-300" />
                  <span className="text-xs font-mono text-zinc-400 tracking-wider">01</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Voorraad optimalisatie</h3>
                  <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Voorkom stockouts en overstock met slimme voorspellingen</p>
                </div>
                <div className="flex items-center text-sm text-white font-medium mb-6">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={36} 
                    height={36} 
                    className="mr-2 flex-shrink-0"
                  />
                  <span>→ Optimale voorraadniveaus bepalen</span>
                </div>
                
                {/* Technical capabilities */}
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-purple-400 hover:bg-zinc-800/70 transition-colors duration-300">
                    <div className="text-sm font-medium text-white mb-1">12 Weken Voorspelling</div>
                    <div className="text-xs text-zinc-500">Gedetailleerde verkoop prognose</div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/10 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-orange-400 transition-colors duration-300" />
                  <span className="text-xs font-mono text-zinc-400 tracking-wider">02</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Inkoop planning</h3>
                  <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Weet precies wanneer en hoeveel je moet bestellen</p>
                </div>
                <div className="flex items-center text-sm text-white font-medium mb-6">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={36} 
                    height={36} 
                    className="mr-2 flex-shrink-0"
                  />
                  <span>→ Automatische bestel alarmen</span>
                </div>
                
                {/* Technical capabilities */}
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-orange-400 hover:bg-zinc-800/70 transition-colors duration-300">
                    <div className="text-sm font-medium text-white mb-1">Bestel Alarmen</div>
                    <div className="text-xs text-zinc-500">Op tijd voorraad aanvullen</div>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <LineChart className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-cyan-400 transition-colors duration-300" />
                  <span className="text-xs font-mono text-zinc-400 tracking-wider">03</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Seizoenspatronen</h3>
                  <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Anticipeer op seizoenspieken en dalen in je verkopen</p>
                </div>
                <div className="flex items-center text-sm text-white font-medium mb-6">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={36} 
                    height={36} 
                    className="mr-2 flex-shrink-0"
                  />
                  <span>→ Seizoenstrends herkennen</span>
                </div>
                
                {/* Technical capabilities */}
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-cyan-400 hover:bg-zinc-800/70 transition-colors duration-300">
                    <div className="text-sm font-medium text-white mb-1">Seizoensanalyse</div>
                    <div className="text-xs text-zinc-500">Historische patronen</div>
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="px-6 py-8 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/10 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-zinc-400 mr-3 group-hover:text-emerald-400 transition-colors duration-300" />
                  <span className="text-xs font-mono text-zinc-400 tracking-wider">04</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Cashflow optimalisatie</h3>
                  <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Voorkom te veel geld vast te zetten in voorraad</p>
                </div>
                <div className="flex items-center text-sm text-white font-medium mb-6">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={36} 
                    height={36} 
                    className="mr-2 flex-shrink-0"
                  />
                  <span>→ Slimmere cashflow management</span>
                </div>
                
                {/* Technical capabilities */}
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="p-4 bg-zinc-800/50 rounded-lg border-l-4 border-emerald-400 hover:bg-zinc-800/70 transition-colors duration-300">
                    <div className="text-sm font-medium text-white mb-1">ROI Optimalisatie</div>
                    <div className="text-xs text-zinc-500">Minder geld vast in voorraad</div>
                  </div>
                </div>
              </div>
            </div>

          </section> {/* End product prestaties section */}

          {/* Bestellingen Section with White Background */}
          <section data-navbar-mode="light" id="bestellingen" className="relative w-full py-16 md:py-24 lg:py-32 min-h-[120vh]"> 
            {/* NEW Light Border Overlay */}
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

            {/* Full-width background element - WHITE */}
            <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 z-55 bg-white"></div>
            
            <div className="container px-0 mb-4 relative z-[70]"> 
              <h2 className="text-6xl font-semibold text-black">Bestellingen</h2>
            </div>
            
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-[70] overflow-visible"> 
              {/* Grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-black overflow-visible"> 

                {/* Row 1, Column 1: Left Text (25%) */}
                <div className="text-black relative"> 
                  <p className="mb-4 text-base">Zie niet alleen wat er verkocht is, maar ook de winst per bestelling, naar wie het toegaat en wanneer het aankomt. Zo blijf je altijd op de hoogte van wat echt belangrijk is.</p>
                  {/* Wrapper to constrain width of feature blocks below to 25% of grid container */}
                  <div className="w-full pt-10">
                    {/* Feature Set 1 */}
                    <div className="mt-6 relative">
                      <p className="text-sm text-gray-600 mb-1">01</p>
                      <h3 className="font-semibold text-black my-3">Volledig inzicht in bestellingen en leveringen</h3>
                      <ul className="space-y-2 text-sm text-black pr-3">
                        <li>Bekijk per besteling het product, winst, omzet, contactgegevens, land, levering type en meer.</li>
                        <li>Houd de status van zendingen bij met onze levering tracker.</li>
                      </ul>
                    </div>
                    {/* Button with hover effect */}
                    <Link href="/contact" passHref>
                      <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-gray-200 mt-6" > 
                        {/* Original Content - Slides up on hover */}
                        <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> 
                          Gesprek inplannen
                          <MdOutlineArrowOutward className="h-5 w-5" />
                        </span>
                        {/* Hover Overlay - Slides in from bottom on hover */}
                        <div className="absolute inset-0 bg-black text-white font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> 
                          Gesprek inplannen
                          <MdOutlineArrowOutward className="h-5 w-5" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Image spanning columns 2-4 (75% total width) */}
                <div className="col-span-2 sm:col-span-3 flex justify-center sm:justify-end sm:-mr-[6vw] pointer-events-none">
                  <div className="w-full sm:w-[85%] h-auto sm:ml-[15%]">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/Ordertable6.png"
                      alt="Bestellingen screenshot"
                      width={1200}
                      height={960}
                      quality={85}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div> {/* End grid */}

              {/* NEW 2-column feature section for bestellingen */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 text-black mt-24 py-0 border-t border-b border-gray-200 items-stretch">
                {/* Column 1 - Levering tracking */}
                <div className="px-6 py-8 group hover:bg-gray-100/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full relative overflow-hidden">
                  {/* White stripe in middle 20% */}
                  <div className="absolute top-0 bottom-0 left-[40%] w-[20%] bg-white z-0 group-hover:bg-gray-50"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <Download className="w-6 h-6 text-gray-600 mr-3 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="text-sm font-mono text-gray-600 tracking-wider">01</span>
                  </div>
                  <div className="flex-grow relative z-10">
                    <h3 className="font-semibold text-black text-2xl mb-3 group-hover:text-black transition-colors">Bestellingen inzicht</h3>
                    <p className="text-base text-gray-600 mb-4 leading-relaxed">Onzekerheid over bestellingen en populaire producten?</p>
                  </div>
                  <div className="flex items-center text-base text-black font-medium mb-6 relative z-10">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Real-time data voor alle bestellingen</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 space-y-4 relative z-10">
                    <div className="flex items-center justify-between p-4 bg-gray-100/50 rounded-lg border-l-4 border-blue-500 hover:bg-gray-100/70 transition-colors duration-300">
                      <div>
                        <div className="text-base font-medium text-black mb-1">Weet gelijk hoeveel je verdient</div>
                        <div className="text-sm text-gray-600">Bolbaas berekent realtime je winst per bestelling, inclusief alle kosten en commissies</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-100/50 rounded-lg border-l-4 border-cyan-400 hover:bg-gray-100/70 transition-colors duration-300">
                      <div className="text-base font-medium text-black mb-1">Uitgebreide status timeline</div>
                      <div className="text-sm text-gray-600">Zie precies alle relevante status updates voor een bestelling</div>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Data export */}
                <div className="px-6 py-8 group hover:bg-gray-100/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10 flex flex-col h-full relative overflow-hidden">
                  {/* White stripe in middle 20% */}
                  <div className="absolute top-0 bottom-0 left-[40%] w-[20%] bg-white z-0 group-hover:bg-gray-50"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <Upload className="w-6 h-6 text-gray-600 mr-3 group-hover:text-green-400 transition-colors duration-300" />
                    <span className="text-sm font-mono text-gray-600 tracking-wider">02</span>
                  </div>
                  <div className="flex-grow relative z-10">
                    <h3 className="font-semibold text-black text-2xl mb-3 group-hover:text-black transition-colors">Leveringtracker</h3>
                    <p className="text-base text-gray-600 mb-4 leading-relaxed">Veel klantvragen over leveringen die niet of te laat zijn aangekomen?</p>
                  </div>
                  <div className="flex items-center text-base text-black font-medium mb-6 relative z-10">
                    <Image 
                      src="/icon-512x512.png" 
                      alt="Bolbaas logo" 
                      width={36} 
                      height={36} 
                      className="mr-2 flex-shrink-0"
                    />
                    <span>→ Zie precies waar je leveringen zijn</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 space-y-4 relative z-10">
                    <div className="p-4 bg-gray-100/50 rounded-lg border-l-4 border-green-400 hover:bg-gray-100/70 transition-colors duration-300">
                      <div className="text-base font-medium text-black mb-1">Voorkom klantvragen</div>
                      <div className="text-sm text-gray-600">Houd klanten op de hoogte van de status van hun bestelling</div>
                    </div>
                    
                    <div className="p-4 bg-gray-100/50 rounded-lg border-l-4 border-blue-400 hover:bg-gray-100/70 transition-colors duration-300">
                      <div className="text-base font-medium text-black mb-1">Voorkom misgelopen leveringen</div>
                      <div className="text-sm text-gray-600">Weet zeker dat je leveringen aankomen </div>
                    </div>
                  </div>
                </div>
              </div>

            </div> {/* End container */}
          </section> {/* End bestellingen section */}

          <section id="custom-dashboards" className="relative w-full py-16 md:py-24 lg:py-32 min-h-[120vh]"> {/* Standard section padding + INCREASED min-h */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            <div className="container px-0 mb-4 relative z-[70]"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-6xl font-semibold text-white">Custom dashboards</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-[70]"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (25%) */}
                <div className="text-white relative"> 
                  <p className="mb-4 text-base">Maak dashboards die precies bij jou passen. Volledig custom en aanpasbaar.</p>
                  {/* Wrapper to constrain width of feature blocks below to 25% of grid container */}
                  <div className="w-full pt-10">
                    <div className="space-y-8">
                        <div>
                            <p className="text-sm text-gray-400 mb-2 font-mono tracking-wider">STAP 1</p>
                            <h3 className="font-semibold text-white text-lg mb-2">Creëer je eigen dashboard</h3>
                            <p className="text-sm text-white/80 pr-3">Selecteer de data, kolommen en filters die jij belangrijk vindt. Stel je dashboard samen met de inzichten die voor jou relevant zijn.</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-2 font-mono tracking-wider">STAP 2</p>
                            <h3 className="font-semibold text-white text-lg mb-2">Sla je dashboard op</h3>
                            <p className="text-sm text-white/80 pr-3">Geef je custom dashboard een naam en sla het op. Je kunt zoveel dashboards opslaan als je nodig hebt.</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-2 font-mono tracking-wider">STAP 3</p>
                            <h3 className="font-semibold text-white text-lg mb-2">Gebruik je dashboard</h3>
                            <p className="text-sm text-white/80 pr-3">Je opgeslagen dashboards zijn altijd en overal beschikbaar. Open ze met één klik en heb direct toegang tot je gepersonaliseerde data.</p>
                        </div>
                    </div>
                    <Link href="/contact" passHref>
                      <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-border mt-10" > {/* Adjusted margin top */}
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

                {/* Image spanning columns 2-4 (75% total width) */}
                <div className="col-span-2 sm:col-span-3 flex justify-center sm:justify-end sm:-mr-[6vw] pointer-events-none">
                  <div className="w-full sm:w-[85%] h-auto sm:ml-[15%]">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/dashboard-saUuGHsWymEMI0v8HjTmL1ih11pXWJ.png"
                      alt="Dashboard screenshot"
                      width={1200}
                      height={960}
                      quality={85}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div> {/* End grid */}

            </div> {/* End container */}
          </section> {/* End bleed section */}       


          {/* Moved Bleed Background Section - Inline Styling */}

          {/* These sections are now outside the black background/sticky section */}
          <section data-navbar-mode="light" className="relative w-full py-4 min-h-[100vh] sm:min-h-[150vh] lg:min-h-[1200px]"> {/* Standard section padding */}
            {/* NEW Light Border Overlay */}
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

            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 z-55 bg-white"></div>

            {/* NEW Centered Content Area */}
            <div className="relative z-[70] sm:w-1/2 mx-auto pt-8 text-black"> {/* Centered, 50% width, above background, top padding */}
            <p className="text-xs text-gray-600">MEER DAN 12 MILJOEN GEANALYSEERDE PRODUCTEN EN KEYWORDS</p> {/* Added number */}

              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl my-6">Volledig aanpasbaar, precies zoals jij het wilt.</h2>
              <p className="mb-4 text-base">Alle dashboards en tabellen in Bolbaas zijn aanpasbaar. Omzet zien? Kosten analyse maken? Geen probleem.</p>
              <p className="text-base">Sla onbeperkt views op, om precies de inzichten te krijgen die je nodig hebt. </p>
            </div>

            {/* Insert a full-bleed image under the centered content */}
            <div className="relative -mt-8 mb-12 overflow-visible z-80">
              <div className="absolute inset-x-0 w-[120%] sm:w-screen left-1/2 -translate-x-1/2 sm:max-w-screen-2xl mx-auto"> {/* Changed to max-w-screen-2xl */}
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/aanpasbaar2-hpx3vtg1UHpfX3Bik0kYRSYfuaxElx.png"
                  alt="Volledig aanpasbaar screenshot"
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

          </section> {/* End bleed section */}
          
          {/* Middle Content Section */}
          <section className="relative w-full pt-16 md:pt-24 lg:pt-32 bg-black">
            <MiddleContentSection />
          </section>

          {/* <PricingSection /> */}
          {/* <TestimonialsSection /> */}
          {/* Motivational Quote Section */}

          {/* <FAQSection /> */}

        </div>
      </>
    );
  }
