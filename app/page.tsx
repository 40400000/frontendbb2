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
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
// import OrderProgressTracker from '@/components/order-progress-tracker'; // Keep old import commented for reference or remove
import HighlightedSection from '@/components/highlighted-section'; // Corrected import path
import { BackgroundVideo } from "@/components/ui/background-video"; // Import the background video
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";

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
        <section className="relative z-[60] w-full pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10 min-h-[70vh] sm:min-h-[60vh] lg:max-h-[800px]">
          <div className="container px-0">
            {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-2 sm:col-span-4 flex flex-col items-start space-y-3 md:space-y-4 max-w-none sm:max-w-3xl w-full">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 w-[65%] sm:w-[45%] lg:w-[68%]">
                  De zekerheid van data en automatisering voor bol partners.
                </h1>
                {/* Sub-headline */}
                <p className="w-[71.4%]">
                  Alles wat je nodig hebt, in één AI-gedreven platform.
                </p>
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
          <div className="absolute top-[60%] sm:top-16 right-0 w-full sm:w-[700px] lg:w-[800px] xl:w-[900px] h-auto z-999 transform sm:translate-x-1/2 pointer-events-none overflow-x-hidden sm:overflow-x-visible">
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/hero_imgs-hujfpHyHKSEgnBNLz6c4tZ1Yw2Ggsx.png"
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

        {/* Gradient Visual Section - Reduced bottom padding */}
        <section className="relative z-10 w-full">

        </section>

        {/* Motivational Quote Section - Adjusted padding, bold text, line break */}
        <section className="w-full pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-16 lg:pb-20">
            <div className="container text-center relative z-[70]">
              <blockquote className="max-w-4xl mx-auto">
                <p className="text-3xl tracking-tight sm:text-5xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
                  Focus op groei en ondernemen <br /> door data en automatisering.
                </p>
              </blockquote>
            </div>
          </section>

        {/* Moved Bleed Background Section - Inline Styling */}
        <section className="relative w-full py-16 md:py-24 lg:py-32"> {/* Standard section padding */}
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
                <p className="mb-4 text-base">Ontdek welke producten en keywords écht werken met onze database van 12 miljoen zoektermen. Onze ranking AI optimaliseert je listings automatisch voor maximale zichtbaarheid.</p>
                <p className="text-base">Zie je groei in realtime dashboards, laat Bolbaas je facturen en BTW regelen, en volg elke bestelling. Zo heb je meer tijd voor wat echt telt: ondernemen.</p>
              </div>

              {/* Row 1, Column 2: Empty (15%) */}
              <div className="row-span-2"></div> {/* Make this span 2 rows */}

              {/* Row 1, Column 3: Feature Set 1 (25%) */}
              <div className="text-gray-300 hidden sm:block"> {/* This is now implicitly row 1, col 3 */}
                <p className="text-sm text-gray-500 mb-1">01</p> {/* Added number */}
                <h3 className="font-semibold text-white my-3">Vind wat verkoopt</h3> {/* Changed mb-3 to my-3 */}
                <ul className="space-y-2 text-sm text-white pr-4">
                  <li>Ontdek welke producten en keywords succesvol zijn met 12 miljoen datapunten.</li>
                </ul>
                {/* REMOVED New Section 1 from here */}
              </div>

              {/* Row 1, Column 4: Feature Set 2 (25%) */}
              <div className="text-gray-300 pr-4 md:pr-6 hidden sm:block"> {/* This is now implicitly row 1, col 4 */}
                <p className="text-sm text-gray-500 mb-1">02</p> {/* Added number */}
                <h3 className="font-semibold text-white my-3">Blijf altijd op de hoogte</h3> {/* Changed mb-3 to my-3 */}
                <ul className="space-y-2 text-sm text-white">
                  <li>Volg je rankings en prestaties automatisch, zodat je altijd voorop loopt.</li>
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
        <InteractiveTopicSection />

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
