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
  Database,   // Added Upload icon
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
// import OrderProgressTracker from '@/components/order-progress-tracker'; // Keep old import commented for reference or remove
import HighlightedSection from '@/components/highlighted-section'; // Corrected import path
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
// Remove client-side hooks import
import { ToolsClientFeatures } from "@/components/tools-client-features"; // Import the new client component

export default function AutomatiseringPage() { // Rename function if needed, e.g., ToolsPage
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
                  Verhoog winst en optimaliseer rankings
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
          <section className="relative w-full py-4 min-h-[325vh]"> {/* Standard section padding */}
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

            {/* Content Area - Title Above, Columns Below */}
            <div className="relative z-[70] container mx-auto pt-16 text-black">
              {/* Title and Subtitle Area - Aligned to start at the second column */}
              <div className="ml-[25%] w-1/2 mb-8"> {/* Add margin-left, set width, add bottom margin */}
                {/* REVISED TEXT - More Natural */}
                <p className="text-xs text-gray-600">Gebaseerd op data van 12 miljoen+ Bol.com producten & zoekwoorden.</p>
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Vind de juiste zoekwoorden, scoor hoger en verlaag je advertentiekosten.</h2>
              </div>

              {/* Flex Row for Content Columns (below title) */}
              {/* Container for Text Blocks (now stacked vertically in the first quarter) */}
              <div className="flex flex-col w-1/4"> {/* Removed gap-8 as mt-* classes handle spacing */}
                {/* Left Column (New Content - 1/4 width) */}
                <div className="mt-50">
                  {/* Replaced span with Shadcn Badge and positioned above 01 */}
                  <div className="flex items-center justify-start">
                      <div className="relative inline-flex">
                        <div className="absolute inset-0 brutalist-border-v1"></div>
                        <div className="relative z-10 bg-black px-4 py- text-white font-mono uppercase text-sm tracking-widest flex items-center gap-2">
                          DATABASE
                        </div>
                      </div>
                    </div>
                  <span className="block text-sm text-gray-500 my-2">01</span>
                  {/* REVISED TEXT - Natural Flow */}
                  <p className="text-lg font-semibold mb-2">Perfecte keywords: miljarden data punten</p>
                  <p className="text-sm">Uitgebreid research met onze keyword database. Ontdek relevante keywords op basis van zoekgedrag van klanten. Analyseer vraag & aanbod, volume trends, ACoS, reviews en meer voor ruim 6 miljoen keywords.</p>
                </div>

                {/* Right Column (New Content - 1/4 width) */}
                <div className="mt-150">
                  <span className="text-sm text-gray-500">02</span>
                  {/* REVISED TEXT - More Natural */}
                  <p className="text-lg font-semibold my-4">Krijg compleet inzicht</p>
                  <p className="text-sm">Kijk verder dan alleen het zoekvolume van het afgelopen periode. Bekijk trends, seizoensgebondenheid, verdeling NL/BE en meer.</p>
                </div>
                {/* Step 03 */}
                <div className="mt-150"> {/* Add similar top margin for spacing */}
                  <span className="text-sm text-gray-500">03</span>
                  {/* REVISED TEXT - Focus on competitor analysis */}
                  <p className="text-lg font-semibold my-4">Analyseer top concurrenten</p>
                  <p className="text-sm">Identificeer de best presterende concurrenten voor elk keyword. Krijg inzicht in hun Share of Shelf (SoS), review scores en prijsstrategieën. Analyseer hun succes om je eigen strategie te optimaliseren.</p>
                </div>
              </div>
            </div>

            {/* NEW Absolutely Positioned Image Container for Step 03 (Concurrenten/SOS/Trends) - Moved Right, Images Swapped */}
            <div className="absolute top-[calc(50vh+300px)] left-[50%] w-[500px] lg:w-[600px] xl:w-[700px] h-auto z-[67] pointer-events-none mt-[1100px]"> {/* Increased left percentage */}
              {/* Image 1 (Bottom Layer - NOW Trends) - Scaled */}
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/competitor-keyword-iHSFSqFBLe67TvS7tB70MYehqB1g4w.png"
                alt="Trends Analyse Screenshot"
                width={700}
                height={500}
                quality={80} /* Adjusted quality */
                className="relative rounded-xl shadow-lg border border-neutral-700 transform -translate-y-8 -translate-x-24" /* Reduced scale for smaller size */
              />
              {/* Image 2 (Middle Layer - Top Producten) - Made smaller */}
              <Image 
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/03-topproducten-x2FLzDJz534KbmEs01s6nT0tJ1Bw6g.png"
                alt="Top Producten Analyse Screenshot"
                width={300} /* Significantly reduced width */
                height={200} /* Significantly reduced height */
                quality={80}
                className="absolute top-0 left-0 rounded-xl shadow-xl border border-neutral-700 transform translate-y-40 translate-x-90 z-[5]" /* Positioned between others */
              />
              {/* Image 3 (Top Layer - Trends Detail) - Moved down */}

            </div>

            {/* Absolutely Positioned Image Container - Adjusted positioning */}
            <div className="absolute top-50 right-0 w-[600px] lg:w-[700px] xl:w-[800px] h-auto z-[65] transform translate-x-4 pointer-events-none"> {/* Changed translate-x-1/8 to arbitrary translate-x-4 */}
              {/* Original Image (NOW BEHIND) */}
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/explorer-drone-w8vvlMEww5awlHHWHsHSI2mbNcTZKB.png"
                alt="Screenshot of keyword analysis tool"
                width={800} // Adjust width as needed
                height={450} // Adjust height as needed
                className="absolute top-0 left-0 border border-border rounded-xl object-cover w-full shadow-lg transform translate-y-70 -translate-x-20 z-55" // Style for behind image
              />
              {/* New Image (NOW ON TOP) */}
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/explorer-vaas-balk-info-8mNfgpHYIJtOR2pSRfJ9rTQpIx54nX.png"
                alt="Screenshot of second analysis tool view"
                width={800} // Match width or adjust as needed
                height={450} // Match height or adjust as needed
                className="relative border border-border rounded-xl object-cover w-full shadow-xl z-10" // Style for top image
              />
            </div>

            {/* NEW Absolutely Positioned Image Container for Overlapping Images */}
            {/* Positioned below text blocks and moved to the LEFT */}
            {/* Increased top offset for more space */} 
            <div className="absolute top-[calc(50vh+300px)] left-[35%] w-[500px] lg:w-[600px] xl:w-[700px] h-auto z-[66] pointer-events-none mt-80"> {/* Changed top calc from 200px to 300px */} 
              {/* Image 1 (Bottom Layer - Volume) */}
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/keyword-volume-bgtCyDzNTg4rjOypV5iVNlxy0lB4G1.png"
                alt="Keyword Volume Screenshot"
                width={700}
                height={500}
                quality={80}
                className="relative rounded-xl shadow-lg border border-neutral-700 transform -translate-y-8 -translate-x-8"
              />
              {/* Image 2 (Middle Layer - Graph) - Increased horizontal offset */}
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/keyword-graph-tW9QPejHv0llcj8YK7PLkEkdFzLR1g.png"
                alt="Keyword Graph Screenshot"
                width={700}
                height={500}
                quality={80}
                className="absolute top-0 left-0 rounded-xl shadow-xl border border-neutral-700 transform translate-y-20 translate-x-24 z-10" /* Increased translate-y from 12 to 20 */
              />
              {/* Image 3 (Top Layer - Heatmap) - Increased horizontal and adjusted vertical offset */}
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/keyword-heatmap-C5FvxifStN7Nt4Ys5mboRRfctSqsR9.png"
                alt="Keyword Heatmap Screenshot"
                width={700}
                height={500}
                quality={85} /* Higher quality for top image */
                className="absolute top-0 left-0 rounded-xl shadow-2xl border border-neutral-700 transform translate-y-52 translate-x-48 z-20" /* Increased translate-y from 32 to 52 */
              />
                            <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/03-trends-gwvPr7qK6TTQzeWlmObq18HwdZLizr.png"
                alt="Trends Analyse Detail Screenshot"
                width={175}  /* Further reduced width */
                height={125} /* Further reduced height */
                quality={80}
                className="absolute top-0 left-0 rounded-xl shadow-xl border border-neutral-700 transform translate-y-52 translate-x-0 z-10" /* Increased translate-y */
              />
            </div>

          </section> {/* End bleed section */}

          {/* Removed full-width gradient section */}

          {/* Moved Bleed Background Section - Inline Styling */}
          <section className="relative w-full py-16 md:py-24 lg:py-32"> {/* Standard section padding */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            <div className="container px-0 mb-4 z-70 relative"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-6xl font-semibold text-white">Ranking AI</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}
              <div className="grid grid-cols-[35%_15%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (35%) */}
                <div className="text-white row-span-2"> {/* Make this span 2 rows */}
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Verbeter je organisch verkeer met de perfecte listing</h2>
                  <p className="mb-4 text-base">Nee, geen simpele prompt wrapper. Bolbaas analyseert voor jouw keywords de best presterende listings. Op basis van meer dan <span className="font-bold">12 miljoen geanalyseerde producten en keywords.</span></p>
                  <p className="text-base">Verbeter je listings in een handomdraai. Verhoog organisch verkeer en verlaag advertentiekosten.</p>
                </div>

                {/* Row 1, Column 2: Empty (15%) */}
                <div className="row-span-2"></div> {/* Make this span 2 rows */}

                {/* Row 1, Column 3: Feature Set 1 (25%) */}
                <div className="text-gray-300"> {/* This is now implicitly row 1, col 3 */}
                  <p className="text-sm text-gray-500 mb-1">01</p> {/* Added number */}
                  <h3 className="font-semibold text-white my-3">Perfecte keywords</h3> {/* Changed mb-3 to my-3 */}
                  <ul className="space-y-2 text-sm text-white pr-3">
                    <li>Kies de perfecte keywords voor jouw product uit onze database. Weet wat klanten op bol zoeken. </li>
                  </ul>
                  {/* REMOVED New Section 1 from here */}
                </div>

                {/* Row 1, Column 4: Feature Set 2 (25%) */}
                <div className="text-gray-300 pr-4 md:pr-6"> {/* This is now implicitly row 1, col 4 */}
                  <p className="text-sm text-gray-500 mb-1">02</p> {/* Added number */}
                  <h3 className="font-semibold text-white my-3">Ranking AI analyseert top listings</h3> {/* Changed mb-3 to my-3 */}
                  <ul className="space-y-2 text-sm text-white pr-3">
                    <li>Onze AI analyseert de best presterende listings voor jouw keywords, en ziet wat concurrent goed doet.</li>
                  </ul>
                  {/* REMOVED New Section 2 from here */}
                </div>

                <div className="text-gray-300">
                  <p className="text-sm text-gray-500 mb-1">03</p>
                  <h3 className="font-semibold text-white my-3">De perfecte listing</h3>
                  <ul className="space-y-2 text-sm text-white pr-3">
                    <li>Ranking AI schrijft de perfecte listing voor jouw keywords. Op basis van miljoenen datapunten.</li>
                  </ul>
                </div>


                <div className="text-gray-300 pr-4 md:pr-6">
                  <p className="text-sm text-gray-500 mb-1">04</p>
                  <h3 className="font-semibold text-white my-3">A/B testen</h3>
                  <ul className="space-y-2 text-sm text-white pr-3">
                    <li>Test je nieuwe listing, Bolbaas houdt automatisch de prestaties bij.</li>
                  </ul>
                </div>


              </div> {/* End grid */}
            </div> {/* End container */}
          </section> {/* End bleed section */}
          {/* Moved Bleed Background Section - Inline Styling */}
          <section className="relative w-full"> {/* REMOVED padding from here */}
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
