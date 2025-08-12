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
  Sparkles,
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
// import OrderProgressTracker from '@/components/order-progress-tracker'; // Keep old import commented for reference or remove
import HighlightedSection from '@/components/highlighted-section'; // Corrected import path
import { BackgroundVideo } from "@/components/ui/background-video"; // Import the background video
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { RevenueComparisonChart } from "@/components/revenue-comparison-chart";
import { CPCChart } from "@/components/cpc-chart";
import { Metadata } from "next";
import { HeroGraph } from "@/components/hero-graph";

export const metadata: Metadata = {
  title: "Bolbaas - data en automatisering voor bol partners",
  description: "Bolbaas is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Verregaande data over miljoenen keywords en producten, miljarden datapunten.",
};

export default function HomePage() {
  // Updated features array with category titles, icons, color class, and description
  const featureCategories = [
    { title: "Inzichten", IconComponent: LineChart, iconClass: "text-blue-500", description: "Verkrijg inzicht in bestellingen, producten en rankings." },
    { title: "Data tools", IconComponent: Search, iconClass: "text-purple-500", description: "Krachtige data tools voor zoekwoorden, winst en listings." },
    { title: "Automatisering", IconComponent: FileText, iconClass: "text-pink-500", description: "Automatiseer administratie met AI, focus op groei." },
    { title: "Tracking", IconComponent: Target, iconClass: "text-green-500", description: "Volg nauwkeurig producten en keywords." },
  ];

  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-96"; // Example: 384px - Offset remains

  return (
    <>
      {/* Fixed Background Video */}
      <BackgroundVideo className="fixed inset-0 -z-10" />

      {/* Scrollable Content Container */}
      <div className="relative z-0 flex flex-col min-h-screen border-t">

        {/* Overlay 1: LEFT Outer Border + FIRST Inner Divider (Full Height, Fades Top) - Uses border variable */}
        <div className="absolute inset-0 h-full z-50 pointer-events-none border-l border-border [mask-image:linear-gradient(to_bottom,transparent,black_200px)]">
          {/* This relative container holds the line element */}
          <div className="relative h-full max-w-full mx-auto">
            {/* Line between cols 1 & 2 (visible only on sm+) - Uses border variable */}
            <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Overlay 2: RIGHT Outer Border + SECOND & THIRD Inner Dividers (Starts Lower, Fades Top) - Uses border variable */}
        {/* This container applies the top offset, fade-in mask, and the RIGHT border */}
        <div className={`absolute inset-x-0 ${innerLinesTopOffset} bottom-0 z-50 pointer-events-none border-r border-border [mask-image:linear-gradient(to_bottom,transparent,black_100px)]`}>
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
              <div className="col-span-2 sm:col-span-2 flex flex-col items-start space-y-3 md:space-y-4">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 pr-20">
                  De zekerheid van data en automatisering voor bol partners.
                </h1>
                {/* Sub-headline */}
                <div className="mb-8">
                  <p className="text-base font-medium text-white leading-relaxed">

                    Alles wat je nodig hebt, in één AI-gedreven platform.
                  </p>
                </div>
              </div>
               <div className="hidden sm:block sm:col-span-2">
            <HeroGraph />
          </div>
              {/* Button Container - Add t/b borders, keep left padding */}
              <div className="col-span-2 sm:col-span-1 mt-4 flex flex-col pl-0.5 border-t border-b border-border"> {/* Added border-t, border-b */}
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
            </div> { /* End grid wrapper */}
          </div>

          {/* Absolutely Positioned Image Container */}
          <div className="absolute top-[64%] sm:top-36 right-0 w-full sm:w-[700px] lg:w-[800px] xl:w-[900px] h-auto z-999 transform sm:translate-x-1/5 pointer-events-none overflow-x-hidden sm:overflow-x-visible hidden">
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/hero25.png"
              alt="Hero Image"
              width={800}
              height={600}
              quality={85}
              priority
              className="relative pt-10 sm:pt-0 rounded-xl"
            />
          </div>
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

<section className="w-full pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-16 lg:pb-20">
            <div className="container text-center relative z-[70]">
              <blockquote className="max-w-4xl mx-auto">
                
              </blockquote>
            </div>
          </section>


     
        {/* Motivational Quote Section - Adjusted padding, bold text, line break */}

        {/* Moved Bleed Background Section - Inline Styling */}
        
        <section className="relative w-full py-16 md:py-24 lg:py-32"> {/* Standard section padding */}
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

          {/* Container centers content normally ON TOP of the background */}
          <div className="container relative z-[70]"> {/* Using container for centering */}
            {/* Two-column layout: text left, chart right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              {/* Left column: Section Heading */}
              <div className="text-white pr-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Meer verkopen, minder zorgen</h2>
                <p className="text-foreground leading-relaxed">Ontdek welke producten en keywords écht werken met onze <span className="font-extrabold">realtime AI database</span> van miljoen zoektermen en producten. Onze <span className="font-extrabold">Ranking AI</span> optimaliseert je listings automatisch voor maximale zichtbaarheid. Zie je groei in <span className="font-extrabold">custom dashboards</span>, laat Bolbaas <span className="font-extrabold">automatisch facturen, e-mails en BTW</span> regelen, en volg elke bestelling met de <span className="font-extrabold">levering tracker</span>. Zo heb je meer tijd voor wat echt telt: ondernemen.</p>
              </div>
              
              {/* Right column: Revenue Chart */}
              <div className="w-full">
                <RevenueComparisonChart />
              </div>
            </div>
            
            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Top-Left */}
              <div className="bg-black text-white p-8 border-l border-t border-border min-h-[35rem] flex flex-col">
                <div className="w-full h-80 mb-6 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/square1.png"
                    alt="Abstract grid pattern"
                    width={1200}
                    height={640}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <p className="text-sm text-gray-400 mb-1">01</p>
                <h3 className="font-semibold text-white my-3">De grootste database voor bol</h3>
                <ul className="space-y-2 text-sm">
                  <li>Ontdek welke producten en keywords succesvol zijn met miljarden realtime datapunten.</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link href="/features/tools#bolbaas-database">
                    <Button variant="link" className="text-white p-0 cursor-pointer">Meer lezen -&gt;</Button>
                  </Link>
                </div>
              </div>
              {/* Top-Right */}
              <div className="bg-black text-white p-8 border-t border-r border-l border-border min-h-[35rem] flex flex-col">
                <div className="w-full h-80 mb-6 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/square2-3.png"
                    alt="Abstract geometric pattern"
                    width={1200}
                    height={640}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <p className="text-sm text-gray-400 mb-1">02</p>
                <h3 className="font-semibold text-white my-3">Automatische facturen</h3>
                <ul className="space-y-2 text-sm">
                  <li>Laat facturen & BTW berekening automatisch lopen terwijl jij groeit.</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link href="/features/automatisering#store-automatisering">
                    <Button variant="link" className="text-white p-0 cursor-pointer">Meer lezen -&gt;</Button>
                  </Link>
                </div>
              </div>
              {/* Bottom-Left */}
              <div className="bg-black text-white p-8 border-t border-l border-border min-h-[35rem] flex flex-col">
                <div className="w-full h-80 mb-6 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/square4-5.png"
                    alt="Abstract wireframe pattern"
                    width={1200}
                    height={640}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <p className="text-sm text-gray-400 mb-1">03</p>
                <h3 className="font-semibold text-white my-3">Magische e-mails</h3>
                <ul className="space-y-2 text-sm">
                  <li>Stuur e-mails die klanten echt openen en direct reviews opleveren.</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link href="/features/automatisering#email-campagnes">
                    <Button variant="link" className="text-white p-0 cursor-pointer">Meer lezen -&gt;</Button>
                  </Link>
                </div>
              </div>
              {/* Bottom-Right */}
              <div className="bg-black text-white p-8 border-t border-r border-l border-border min-h-[35rem] flex flex-col">
                <div className="w-full h-80 mb-6 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/square3-3.png"
                    alt="Abstract circular pattern"
                    width={1200}
                    height={640}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <p className="text-sm text-gray-400 mb-1">04</p>
                <h3 className="font-semibold text-white my-3">Custom dashboards</h3>
                <ul className="space-y-2 text-sm">
                  <li>Maak dashboards precies zoals jij ze wilt. Oneindig aanpasbaar.</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link href="/features/store-prestaties#custom-dashboards">
                    <Button variant="link" className="text-white p-0 cursor-pointer">Meer lezen -&gt;</Button>
                  </Link>
                </div>
              </div>
              {/* New Row: Item 5 */}
              <div className="bg-black text-white p-8 border-t border-l border-b border-border min-h-[35rem] flex flex-col">
                <div className="w-full mb-6">
                  <CPCChart />
                </div>
                <p className="text-sm text-gray-400 mb-1">05</p>
                <h3 className="font-semibold text-white my-3">CPC tracker</h3>
                <ul className="space-y-2 text-sm">
                  <li>Bekijk de CPC van keywords en optimaliseer campagnes. Verlaag ACoS en verhoog je ROI.</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link href="/features/tools#cpc-tracker">
                    <Button variant="link" className="text-white p-0 cursor-pointer">Meer lezen -&gt;</Button>
                  </Link>
                </div>
              </div>
              {/* New Row: Item 6 */}
              <div className="bg-black text-white p-8 border-t border-r border-b border-l border-border min-h-[35rem] flex flex-col">
                <div className="w-full h-80 mb-6 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/square6-4.png"
                    alt="Placeholder 6"
                    width={1200}
                    height={640}
                    className="object-contain max-w-full max-h-full"
                    quality={95}
                  />
                </div>
                <p className="text-sm text-gray-400 mb-1">06</p>
                <h3 className="font-semibold text-white my-3">Bestellingen tracker</h3>
                <ul className="space-y-2 text-sm">
                  <li>Volg elke bestelling, zie de leveringsstatus en direct welke winst het je oplevert.</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link href="/features/store-prestaties#bestellingen">
                    <Button variant="link" className="text-white p-0 cursor-pointer">Meer lezen -&gt;</Button>
                  </Link>
                </div>
              </div>
              {/* New Row: Item 7 */}
              <div className="bg-black text-white p-8 border-t border-l border-b border-border min-h-[35rem] flex flex-col">
                <div className="w-full h-80 mb-6 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/square7.png"
                    alt="Placeholder 7"
                    width={1200}
                    height={640}
                    className="object-contain max-w-full max-h-full"
                    quality={100}
                  />
                </div>
                <p className="text-sm text-gray-400 mb-1">07</p>
                <h3 className="font-semibold text-white my-3">Track producten</h3>
                <ul className="space-y-2 text-sm">
                  <li>Volg producten op de voet. Optimaliseer zichtbaarheid met A/B testen, en meer. </li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link href="/features/tracking#tracking-options">
                    <Button variant="link" className="text-white p-0 cursor-pointer">Meer lezen -&gt;</Button>
                  </Link>
                </div>
              </div>
              {/* New Row: Item 8 */}
              <div className="bg-black text-white p-8 border-t border-r border-b border-l border-border min-h-[35rem] flex flex-col">
                <div className="w-full h-80 mb-6 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/square8-3.png"
                    alt="Placeholder 8"
                    width={1200}
                    height={640}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <p className="text-sm text-gray-400 mb-1">08</p>
                <h3 className="font-semibold text-white my-3">Ranking AI</h3>
                <ul className="space-y-2 text-sm">
                  <li>Perfectioneer je listings met de Bolbaas <span className="font-extrabold">Ranking AI</span>. Optimaliseer voor organische zichtbaarheid.</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link href="/features/tools#ranking-ai">
                    <Button variant="link" className="text-white p-0 cursor-pointer">Meer lezen -&gt;</Button>
                  </Link>
                </div>
              </div>
              {/* New Row: Item 9 */}
              <div className="bg-black text-white p-8 border-l border-b border-border min-h-[35rem] flex flex-col">
                <div className="w-full h-80 mb-6 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/square1.png"
                    alt="Omzet research placeholder"
                    width={1200}
                    height={640}
                    className="object-contain max-w-full max-h-full opacity-70 blur-sm grayscale brightness-50"
                  />
                </div>
                <p className="text-sm text-gray-400 mb-1">09</p>
                <h3 className="font-semibold text-white my-3">Omzet research op basis van AI</h3>
                <ul className="space-y-2 text-sm">
                  <li>Omzet inzichten van meer dan 5 miljoen producten op bol.com, op basis van AI en realtime data.</li>
                </ul>
                <div className="mt-auto pt-4">
                  <span className="text-gray-500 text-sm">Binnenkort beschikbaar</span>
                </div>
              </div>
            </div> {/* End grid */}
          </div> {/* End container */}
        </section> {/* End bleed section */}
            {/* New Three Column Section */}
            <section className="relative w-full pb-16 md:pb-24 lg:pb-32">
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

          {/* Container centers content normally ON TOP of the background */}
          <div className="container relative z-[80]">
            {/* Three column grid: 25% - 50% - 25% */}
            <div className="grid grid-cols-4 gap-0">
              {/* Left column - 25% (1 out of 4 columns) */}
              <div className="bg-black text-white p-8 col-span-4 sm:col-span-1 order-1">
                {/* Logo and primary tagline */}
                <div className="mb-8">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/logo_head-NO6JxOe2DYaItWOrqQqPrDhwgEaN5z.png"
                    alt="Bolbaas Logo"
                    width={200}
                    height={54}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-medium text-white">
                    Jouw AI-platform voor bol.com
                  </h3>
                </div>

                {/* Secondary tagline */}
                <div className="mb-8">
                  <p className="text-base font-medium text-white leading-relaxed">
                    De software die zorgt voor winstgevende zichtbaarheid én automatisering voor Bol partners.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link href="/contact" passHref>
                    <div className="group relative w-full text-left cursor-pointer overflow-hidden">
                      {/* Original Content - Slides up on hover */}
                      <span className="font-semibold flex justify-between items-center py-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                        Platform ontdekken
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </span>
                      {/* Hover Overlay - Slides in from bottom on hover */}
                      <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        Platform ontdekken
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Middle column - 50% (2 out of 4 columns) */}
              <div className="col-span-4 sm:col-span-2 bg-black text-white p-8 order-2">
                <h3 className="text-xl font-semibold mb-8 text-white">Problemen die we oplossen</h3>
                
                {/* Pain points and solutions grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Pain point 1 */}
                  <Link href="/features/tools#bolbaas-database" passHref>
                    <div className="space-y-4 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.15)] cursor-pointer">
                      <h3 className="font-semibold text-white text-lg mb-3 group-hover:text-white transition-colors">Verkeerde keywords</h3>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Geld verliezen aan biedingen zonder te weten welke keywords écht werken</p>
                      <div className="flex items-center text-sm text-white font-medium">
                        <Image 
                          src="/icon-512x512.png" 
                          alt="Bolbaas logo" 
                          width={32} 
                          height={32} 
                          className="mr-2 flex-shrink-0"
                        />
                        <span>→ 12M+ keyword database met CPC tracker</span>
                      </div>
                    </div>
                  </Link>

                  {/* Pain point 2 */}
                  <Link href="/features/automatisering" passHref>
                    <div className="space-y-4 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.15)] cursor-pointer">
                      <h3 className="font-semibold text-white text-lg mb-3 group-hover:text-white transition-colors">Administratie stress</h3>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Uren kwijt aan handmatig facturen uploaden en emails versturen</p>
                      <div className="flex items-center text-sm text-white font-medium">
                        <Image 
                          src="/icon-512x512.png" 
                          alt="Bolbaas logo" 
                          width={32} 
                          height={32} 
                          className="mr-2 flex-shrink-0"
                        />
                        <span>→ Magische e-mails en factuur automatisering</span>
                      </div>
                    </div>
                  </Link>

                  {/* Pain point 3 */}
                  <Link href="/features/tools#ranking-ai" passHref>
                    <div className="space-y-4 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.15)] cursor-pointer">
                      <h3 className="font-semibold text-white text-lg mb-3 group-hover:text-white transition-colors">Slechte listings</h3>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Gokken naar wat klanten willen zien en geen conversies krijgen</p>
                      <div className="flex items-center text-sm text-white font-medium">
                        <Image 
                          src="/icon-512x512.png" 
                          alt="Bolbaas logo" 
                          width={32} 
                          height={32} 
                          className="mr-2 flex-shrink-0"
                        />
                        <span>→ AI analyseert winnende formules</span>
                      </div>
                    </div>
                  </Link>

                  {/* Pain point 4 */}
                  <Link href="/features/store-prestaties" passHref>
                    <div className="space-y-4 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(234,179,8,0.15)] cursor-pointer">
                      <h3 className="font-semibold text-white text-lg mb-3 group-hover:text-white transition-colors">Geen inzicht</h3>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Niet weten welke producten winst maken en waar je staat</p>
                      <div className="flex items-center text-sm text-white font-medium">
                        <Image 
                          src="/icon-512x512.png" 
                          alt="Bolbaas logo" 
                          width={32} 
                          height={32} 
                          className="mr-2 flex-shrink-0"
                        />
                        <span>→ Complete prestatie dashboards</span>
                      </div>
                    </div>
                  </Link>

                  {/* Pain point 5 - Baaspilot */}
                  <Link href="/features/automatisering#baaspilot" passHref>
                    <div className="space-y-4 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(6,182,212,0.15)] cursor-pointer">
                      <h3 className="font-semibold text-white text-lg mb-3 group-hover:text-white transition-colors">Belangrijke events missen</h3>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Te laat weten van listing hijacking, ranking dalingen en andere kritieke wijzigingen</p>
                      <div className="flex items-center text-sm text-white font-medium">
                        <Image 
                          src="/icon-512x512.png" 
                          alt="Bolbaas logo" 
                          width={32} 
                          height={32} 
                          className="mr-2 flex-shrink-0"
                        />
                        <span>→ Baaspilot AI notificaties</span>
                      </div>
                    </div>
                  </Link>

                  {/* Pain point 6 - Tracking */}
                  <Link href="/features/tracking" passHref>
                    <div className="space-y-4 group hover:bg-zinc-800/60 transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(239,68,68,0.15)] cursor-pointer">
                      <h3 className="font-semibold text-white text-lg mb-3 group-hover:text-white transition-colors">Geen inzicht in klantgedrag</h3>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">Niet weten waarom rankings stijgen of dalen, en wat concurrenten doen</p>
                      <div className="flex items-center text-sm text-white font-medium">
                        <Image 
                          src="/icon-512x512.png" 
                          alt="Bolbaas logo" 
                          width={32} 
                          height={32} 
                          className="mr-2 flex-shrink-0"
                        />
                        <span>→ Product tracking</span>
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Bottom text */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400">En nog veel meer problemen die we voor je oplossen...</p>
                </div>
              </div>
              
              {/* Right column - 25% (1 out of 4 columns) */}
              <div className="bg-black text-white p-8 hidden sm:block order-3">
                <h3 className="text-xl font-semibold mb-6 text-white">Abonnementen</h3>
                
                {/* Pricing plans */}
                <div className="space-y-6">
                  {/* Start Plan */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium text-white">Start</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-semibold text-white">€15</span>
                        <span className="text-sm text-gray-500 line-through">€29</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400">Voor ambitieuze beginners</p>
                    <p className="text-sm text-white font-medium">→ Automatisering & dashboards</p>
                    <p className="text-xs text-green-400 font-medium">+ 1 maand gratis</p>
                  </div>

                  {/* Plus Plan */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium text-white">Plus</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-semibold text-white">€39</span>
                        <span className="text-sm text-gray-500 line-through">€95</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400">Perfecte toolkit voor groei</p>
                    <p className="text-sm text-white font-medium">→ Ranking AI & keyword database</p>
                    <p className="text-xs text-green-400 font-medium">+ 1 maand gratis</p>
                  </div>

                  {/* Pro Plan */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium text-white">Pro</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-semibold text-white">€199</span>
                        <span className="text-sm text-gray-500 line-through">€450</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400">Domineer de markt</p>
                    <p className="text-sm text-white font-medium">→ Onbeperkt + premium support</p>
                    <p className="text-xs text-blue-400 font-medium">+ Gesprek inplannen</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <Link href="/prijzen" passHref>
                    <div className="group relative w-full text-left cursor-pointer overflow-hidden">
                      {/* Original Content - Slides up on hover */}
                      <span className="font-semibold flex justify-between items-center py-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                        Alle plannen bekijken
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </span>
                      {/* Hover Overlay - Slides in from bottom on hover */}
                      <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        Alle plannen bekijken
                        <MdOutlineArrowOutward className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="relative w-full py-16 md:py-24 lg:py-32 hidden"> {/* Standard section padding */}
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

          {/* Container centers content normally ON TOP of the background */}
          <div className="relative z-[70]"> {/* REMOVED container padding */}
            {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
            {/* Add vertical gap between rows */}
            <div className="grid grid-cols-1 sm:grid-cols-[35%_15%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

              {/* Row 1, Column 1: Left Text (35%) */}
              <div className="text-white row-span-2"> {/* Make this span 2 rows */}
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Meer verkopen, minder zorgen</h2>
                <p className="mb-4 text-foreground">Ontdek welke producten en keywords écht werken met onze <span className="font-extrabold">realtime AI database</span> van miljoen zoektermen en producten. Onze <span className="font-extrabold">Ranking AI</span> optimaliseert je listings automatisch voor maximale zichtbaarheid.</p>
                <p className="text-foreground">Zie je groei in <span className="font-extrabold">custom dashboards</span>, laat Bolbaas <span className="font-extrabold">automatisch facturen, e-mails en BTW</span> regelen, en volg elke bestelling met <span className="font-extrabold">levering tracker</span>. Zo heb je meer tijd voor wat echt telt: ondernemen.</p>
              </div>

              {/* Row 1, Column 2: Empty (15%) */}
              <div className="row-span-2"></div> {/* Make this span 2 rows */}

              {/* Row 1, Column 3: Feature Set 1 (25%) */}
              <div className="text-gray-300 hidden sm:block"> {/* This is now implicitly row 1, col 3 */}
                <p className="text-sm text-gray-500 mb-1">01</p> {/* Added number */}
                <h3 className="font-semibold text-white my-3">Vind wat verkoopt</h3> {/* Changed mb-3 to my-3 */}
                <ul className="space-y-2 text-sm text-white pr-4">
                  <li>Ontdek welke producten en keywords succesvol zijn met miljarden realtime datapunten.</li>
                </ul>
                {/* REMOVED New Section 1 from here */}
              </div>

              {/* Row 1, Column 4: Feature Set 2 (25%) */}
              <div className="text-gray-300 pr-4 md:pr-6 hidden sm:block"> {/* This is now implicitly row 1, col 4 */}
                <p className="text-sm text-gray-500 mb-1">02</p> {/* Added number */}
                <h3 className="font-semibold text-white my-3">Automatische facturen</h3> {/* Changed mb-3 to my-3 */}
                <ul className="space-y-2 text-sm text-white">
                  <li>Laat facturen BTW automatisch lopen terwijl jij groeit.</li>
                </ul>
                {/* REMOVED New Section 2 from here */}
              </div>

              {/* Row 2, Column 3: New Section Title 1 */}
              {/* No need for empty divs for row 2 cols 1 & 2 because cols 1 & 2 span 2 rows */}
              <div className="text-gray-300 hidden sm:block"> {/* This is implicitly row 2, col 3 */}
                <p className="text-sm text-gray-500 mb-1">03</p> {/* Added number */}
                <h3 className="font-semibold text-white my-3">Focus op groei</h3> {/* Changed mb-3 to my-3 */}
                <ul className="space-y-2 text-sm text-white pr-5">
                  <li>Laat facturen, BTW en e-mails automatisch lopen terwijl jij groeit.</li>

                </ul>
              </div>

              {/* Row 2, Column 4: New Section Title 2 */}
              <div className="text-gray-300 pr-4 md:pr-6 hidden sm:block"> {/* This is implicitly row 2, col 4 */}
                <p className="text-sm text-gray-500 mb-1">04</p> {/* Added number */}
                <h3 className="font-semibold text-white my-3">Zie wat werkt</h3> {/* Changed mb-3 to my-3 */}
                <ul className="space-y-2 text-sm text-white">
                  <li>Dashboards die je direct laten zien waar je winst vandaan komt.</li>
                </ul>
              </div>

            </div> {/* End grid */}
          </div> {/* End container */}
        </section> {/* End bleed section */}

        {/* Render the new InteractiveTopicSection component */}

        {/* Render the new MiddleContentSection component */}
        <MiddleContentSection />

        {/* <PricingSection /> */}
        {/* <TestimonialsSection /> */}
        {/* Motivational Quote Section */}

        {/* <FAQSection /> */}

      </div>
    </>
  );
}
