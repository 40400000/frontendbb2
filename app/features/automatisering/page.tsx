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
// Remove client-side hooks import
import { AutomatiseringClientFeatures } from '@/components/automatisering-client-features'; // Import the new client component



export default function AutomatiseringPage() {
  // Removed featureCategories array (was commented out)

  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-0"; // Example: 384px - Offset remains

  // Removed State and Refs for Intersection Observer
  // Removed Effect for Intersection Observer
  // Removed parallax factors

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
        <section className="relative z-[60] min-h-[85vh] w-full pt-8 md:pt-16 lg:pt-24 pb-6 md:pb-8 lg:pb-10">
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

          </section>


          {/* Absolutely Positioned Image Container */}
  <section className="relative w-full py-4"> {/* Standard section padding */}
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

              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl my-6">Minder werk, meer omzet: <br /> bol store automatisering die werkt.
              </h2>
              <p className="mb-4 text-base">Werk slimmer, niet harder. Laat Bolbaas je store automatiseren en groeien.</p>
            </div>

            <div className="relative z-[70] w-1/2 mx-auto pt-16 text-black"> {/* Centered, 50% width, above background, top padding */}

              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl my-3">Facturen
              </h2>

                  <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl my-3">E-mails
              </h2>

              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl my-3">BTW berekening
              </h2>
            </div>

          </section> {/* End bleed section */}


          {/* Moved Bleed Background Section - Inline Styling */}
          <section className="relative w-full py-4"> {/* Standard section padding - ADDED relative */}
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

          {/* Facturen Image Group Container - Mirrored position/size of Email section */}
          <div className="w-[50%] z-55 absolute top-64 right-0 transform translate-x-[15%]"> {/* Moved down slightly */}
            {/* Small Image 1 (Facturen Acties) - Re-adjusted position */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/facturen-acties-SVNLW2UmidUza4cYzKz2zcMs7eRz1r.png"
              alt="Facturen Acties Badge"
              width={150} // Keeping badge size small
              height={150} // Keeping badge size small
              className="absolute top-8 left-[-7rem] z-10 rounded-xl shadow-lg border border-neutral-800" // Moved up and left // Added border
            />
            {/* Small Image 2 (Facturen Green Badges) - Re-adjusted position */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/facturen-green%20badges-i7n7AaNQ8Qcvws0I9TGtnCNsl4DiRl.png"
              alt="Facturen Green Badges"
              width={250} // Keeping badge size small
              height={250} // Keeping badge size small
              className="absolute top-56 left-[-11rem] z-10 rounded-xl shadow-lg border border-neutral-800" // Moved further left // Added border
            />
            {/* Main Facturen Image - Matched size of Email main image */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/facturen-main-WNkgafK1YrKB8HTPYqYBAKfjNhWqCS.png"
              alt="Facturen Dashboard Screenshot"
              width={1800} // Matched width from Email section
              height={1013} // Matched height from Email section
              className="rounded-xl shadow-lg object-cover border border-neutral-800" // Added border
            />
          </div>

          {/* Title added before the steps */}
          <div className="relative container px-0 mb-4 mt-4 z-65"> {/* Container for alignment, added bottom margin - Increased z-index & added relative */}
            <h2 className="text-6xl font-semibold text-white z-60">Factuur automatisering</h2>
          </div>

          {/* Div with borders and height equal to 1/4 container width via aspect ratio */}
          <div className="relative border-t border-b border-border aspect-[12/1] z-65">
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

          <div className="relative text-white row-span-2 w-[35%] pt-5 z-65"> {/* Make this span 2 rows - Added relative and z-65 */}
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

          <div className="h-30"></div>

        {/* Moved Bleed Background Section - Inline Styling */}
        <section className="relative w-full py-16 md:py-24 lg:py-32"> {/* Standard section padding - Added relative */}
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

          {/* Image container moved to top right of section and shifted slightly right */}
          <div className="w-[50%] z-55 absolute top-36 right-0 transform translate-x-[15%]"> {/* Changed w-[40%] to w-[50%] */}
            {/* Added Badge Image - Moved to right of flow image */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/email-vestruud%20badge-GxzHMYU26KOUQJ3uyk2qRCNigxgRnW.png"
              alt="Email Sent Badge"
              width={180}
              height={180}
              className="absolute bottom-32 right-16 z-10 rounded-xl border border-neutral-800" // Increased bottom offset further // Added border
            />
            {/* Main Dashboard Image - Increased size */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/email-dashboard-vvoPzVlvPFaRplSzltczqxJblP3VE0.png"
              alt="Dashboard showing automated email features"
              width={1800} // Increased width again
              height={1013} // Increased height again (maintaining ~16:9 ratio)
              className="rounded-xl shadow-lg object-cover border border-neutral-800" // Added border
            />

            {/* Added Email Flow Image Below */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/email-flow-tR6zVPhWZKFwd7wF05b57LG0mrt7CC.png"
              alt="Email Automation Flow Diagram"
              width={400} // Increased width slightly
              height={160} // Increased height slightly (maintaining aspect ratio)
              className="relative rounded-xl shadow-lg object-contain mt-2 ml-8 block h-auto border border-neutral-800" // Increased ml to ml-8 to shift further right // Added border
            />
          </div>

          <div className="relative container px-0 mb-4 z-65"> {/* Container for alignment, added bottom margin, relative, z-65 */}
            <h2 className="text-6xl font-semibold text-white">E-mail automatisering</h2>
          </div>
          {/* Container centers content normally ON TOP of the background */}
          <div className="relative z-65"> {/* REMOVED container padding - Added z-65 */}
            {/* Add vertical gap between rows */}
            {/* CHANGE: Grid to 4 equal columns */}
            <div className="grid grid-cols-4 gap-x-0 gap-y-6 text-white"> {/* Changed grid definition */}

              {/* Row 1, Columns 1-2: Left Text (50%) */}
              <div className="text-white col-span-2"> {/* Added col-span-2 */}
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Automatiseer e-mails, voorkom klantvragen en ontvang meer reviews</h2>
                <p className="mb-4 text-base">Verstuur automatisch gepersonaliseerde e-mails om klanten proactief te informeren over hun bestelling en verzending. Dit vermindert het aantal klantvragen aanzienlijk.</p>
                <p className="text-base">Stimuleer positieve klantervaringen en verzamel automatisch meer productreviews. Bolbaas stroomlijnt je aftersales, zodat jij kunt focussen op de groei van je bedrijf.</p>
              </div>

              {/* Row 1, Column 3: Empty (25%) */}
              <div className=""></div>

              {/* Row 1, Column 4: Empty (25%) */}
              <div className=""></div>

              {/* Row 2, Column 1: Feature Set 1 (Moved Here) */}
              <div className="text-gray-300 pt-6"> {/* Positioned in col 1 of row 2 */}
                <p className="text-sm text-gray-500 mb-1">01</p>
                <h3 className="font-semibold text-white my-3">Automatisch e-mails</h3>
                <ul className="space-y-2 text-sm text-white">
                  <li>Verstuur automatisch gepersonaliseerde e-mails naar klanten.</li>
                </ul>
              </div>

              {/* Row 2, Column 2: Feature Set 2 (Moved Here) */}
              <div className="text-gray-300 pt-6 pr-4 md:pr-6 z-60 pl-[1px]"> {/* Positioned in col 2 of row 2 */}
                <p className="text-sm text-gray-500 mb-1">02</p>
                <h3 className="font-semibold text-white my-3">Ontvang meer reviews</h3>
                <ul className="space-y-2 text-sm text-white">
                  <li>Stimuleer positieve klantervaringen en verzamel automatisch meer productreviews.</li>
                </ul>
              </div>

              {/* Row 2, Column 3: Empty (25%) */}
              <div className=""></div>

              {/* Row 2, Column 4: Empty (25%) */}
              <div className=""></div>

            </div> {/* End grid */}

          </div> {/* End container */}
        </section> {/* End bleed section */}

        {/* Moved Bleed Background Section - Inline Styling */}
        <section className="relative w-full pt-24"> {/* REMOVED padding from here */}
          {/* Full-width background element */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>

          {/* Render the client component containing the sticky sections */}
          <AutomatiseringClientFeatures />

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
