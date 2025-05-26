import type { Metadata } from "next";
import Image from "next/image"; // Import Next Image
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
import Link from 'next/link'; // Added Link import
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { AutomatiseringClientFeatures } from "@/components/automatisering-client-features";

export const metadata: Metadata = {
  title: "Automatisering - Bolbaas",
  description: "Automatiseer je bol.com store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
  openGraph: {
    title: "Automatisering - Bolbaas",
    description: "Automatiseer je bol.com store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Automatisering Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Automatisering - Bolbaas",
    description: "Automatiseer je bol.com store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function AutomatiseringPage() { // Rename function if needed, e.g., ToolsPage
  // Removed featureCategories array

  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-0"; // Example: 384px - Offset remains

  // Removed State and Refs for Intersection Observer
  // Removed Effect for Intersection Observer

  return (
    <>
      {/* Fixed Background Photo */}
      <BackgroundPhoto className="fixed inset-0 -z-10" imageOption={2} />

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
        <section className="relative z-[60] w-full pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10 min-h-[84vh]">
          <div className="container px-0">
            {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-2 sm:col-span-4 flex flex-col items-start space-y-3 md:space-y-4 max-w-none sm:max-w-3xl w-full">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 w-[65%] sm:w-auto">
                  Automatiseer je store, focus op groei.
                </h1>
                {/* Sub-headline */}
                <p className="w-[71.4%]">
                  Automatisch uploaden van BTW-facturen, maak e-mail campagnes, reageer automatisch op factuuraanvragen en meer.
                </p>
              </div>
              {/* Button Container - Add t/b borders, keep left padding */}
              <div className="col-span-2 sm:col-span-1 mt-20 flex flex-col pl-0.5 border-t border-b border-border "> {/* Added border-t, border-b */}
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
              <section data-navbar-mode="light" id="store-automatisering" className="relative w-full py-16 md:py-24 lg:py-32 min-h-[2000px] sm:min-h-[2200px]"> {/* Further increased section height */}
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
              <h2 className="text-5xl sm:text-6xl font-semibold text-black z-90">Store Automatisering</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (35%) */}
                <div className="text-black ro w-span-2 z-80 relative"> {/* Span container across two rows */}
                  <p className="mb-4 text-base">Geen tijd meer verspillen aan facturen uploaden of BTW-aangiftes maken. Bolbaas regelt dit automatisch, zodat jij kunt focussen op verkopen en groeien.</p>
                  {/* Wrapper to constrain width of feature blocks below to 25% of grid container */}
                  <div className="w-full">
                    {/* Moved Feature Set 1 into first column */}
                    <div className="sm:mt-30 z-80 relativ pt-10">
                      <p className="text-sm text-gray-500 mb-1">BTW FACTUREN</p>
                      <h3 className="font-semibold text-black my-3">Automatisch BTW facturen uploaden naar bol.com</h3>
                      <ul className="space-y-2 text-sm text-black pr-3">
                          <li>Geen tijd meer besteden aan het beantwoorden van klantvragen omtrent facturen. Bolbaas uploadt automatisch BTW facturen naar bol.com en slaat deze op in jouw database.</li>
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

                    <div id="email-campagnes" className="scroll-mt-40 mt-85 z-80 relativ pt-10">
                      <p className="text-sm text-gray-500 mb-1">E-MAIL CAMPAGNES</p>
                      <h3 className="font-semibold text-black my-3">Verhoog reviews en voorkom klantvragen met e-mail campagnes</h3>
                      <ul className="space-y-2 text-sm text-black pr-3">
                        <li>Automatische e-mail campagnes. Maak e-mails precies zoals je het wilt, of gebruik een van onze templates.</li>
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
                    <li>Bolbaas berekent op basis van jouw verkopen hoeveel verkopen je de aankomende 12 weken kan verwachten per product.</li>
                  </ul>
                </div> */}


              </div> {/* End grid */}
              {/* Divider title between steps */}
              
              {/* End dynamic label */}
     
              {/* NEW Absolutely Positioned Image Container for Product Prestaties */}
              <div className="absolute top-[36%] sm:top-[11%] sm:right-[-10%] w-[100%] sm:w-[75%] h-auto z-70 pointer-events-none"> {/* Adjusted top/right positioning */} 
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/facturenuploaden-D1ctHKHU7dEgDV1tJPokJTIgIZSpHj.png"
                  alt="Bestellingen screenshot"
                  width={1200} // Adjust width as needed, larger for better quality scaling down
                  height={960} // Adjust height based on aspect ratio
                  quality={85}
                  className="relative rounded-lg" // Removed shadow and border
                />
              </div>
              <div className="absolute top-[92%] sm:top-[70%] sm:right-[-10%] w-[100%] sm:w-[75%] h-auto z-70 pointer-events-none"> {/* Adjusted top/right positioning */} 
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/automatiseringemails-RJgmyQy8b1KleXBT53jLvpxYZMlj7B.png"
                  alt="Bestellingen screenshot"
                  width={1200} // Adjust width as needed, larger for better quality scaling down
                  height={960} // Adjust height based on aspect ratio
                  quality={85}
                  className="relative rounded-lg" // Removed shadow and border
                />
              </div>
              {/* Ranking insights graph */}
   

            </div> {/* End container */}

            {/* NEW Text Block at the bottom */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[78%] sm:top-[80%] w-full sm:w-[50%] z-80 text-left text-black space-y-6"> {/* Added text-black and space-y-4 */}
              <h2 className="text-4xl md:text-5xl font-semibold">Focus op ondernemen, niet op boekhouding.</h2>
              <p className="text-base">
                Automatisering die écht werkt. Facturen uploaden, BTW berekenen, e-mails versturen - alles gebeurt automatisch op de achtergrond. Zo heb je meer tijd voor echt ondernemen.
              </p>
            </div>

            {/* NEW Buttons container at the bottom */}
            <div className="absolute sm:left-[25%] top-[90%] w-full sm:w-[50%] z-80 grid grid-cols-2 text-black"> {/* Adjusted top, added text-black */}
              {/* Button 1 in First Column */}
              <div className="border-t border-b border-gray-200"> {/* Added border-r, changed border color */}
                <Link href="/prijzen" passHref>
                  <div className="group relative w-full text-left cursor-pointer overflow-hidden">
                    {/* Original Content */}
                    <span className="block py-6 pl-4 border-r border-gray-200 sm:border-r-0 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                      Lidmaatschappen bekijken
                    </span>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black text-white py-6 pl-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed overlay background to black */}
                      Lidmaatschappen bekijken
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

          {/* Removed full-width gradient section */}

          {/* Moved Bleed Background Section - Inline Styling */}
          <section id="btw-aangifte-automatisering" className="relative w-full pt-24 sm:pt-32 pb-60 "> {/* Standard section padding + INCREASED min-h */}
            {/* Full-width background element */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            <div className="container px-0 mb-4 z-80 relative"> {/* Container for alignment, added bottom margin */}
              <h2 className="text-5xl sm:text-6xl font-semibold text-white">BTW automatisering</h2>
            </div>
            {/* Container centers content normally ON TOP of the background */}
            <div className="relative z-60"> {/* REMOVED container padding */}
              {/* Use custom grid columns to achieve 35% 15% 25% 25% split, remove gap */}
              {/* Add vertical gap between rows */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_25%_25%_25%] gap-x-0 gap-y-6 text-white"> {/* Updated grid definition, added gap-y-6 */}

                {/* Row 1, Column 1: Left Text (35%) */}
                <div className="text-white row-span-2"> {/* Span container across two rows */}
                  <p className="mb-4 text-base">Nooit meer stress over BTW-aangiftes of zoekraken van facturen. Bolbaas regelt alles automatisch, zodat je rustig kunt slapen en focussen op wat je leuk vindt: ondernemen.</p>
                  {/* Wrapper to constrain width of feature blocks below to 25% of grid container */}
                  <div className="w-full pt-10">
                    {/* Moved Feature Set 1 into first column */}
                    <div className="sm:mt-6">
                      <p className="text-sm text-gray-400 mb-1">BTW BEREKENING</p>
                      <h3 className="font-semibold text-white my-3">BTW aangifte automatisch berekend</h3>
                      <ul className="space-y-2 text-sm text-white pr-3">
                        <li>Bolbaas berekent de BTW op basis van jouw orders en rekent facturen van bol zelf mee. Zo weet je altijd precies hoeveel BTW je moet betalen.</li>
                      </ul>
                    </div>
                    {/* Moved Feature Set 2 into first column */}
                    <div className="mt-10 pr-4 md:pr-6">
                      <p className="text-sm text-gray-400 mb-1">BTW BOEKHOUDING</p>
                      <h3 className="font-semibold text-white my-3">BTW facturen automatisch opgeslagen</h3>
                      <ul className="space-y-2 text-sm text-white pr-3">
                        <li>Jouw persoonlijke boekhouder. Bolbaas bewaart alle facturen van jouw orders en van bol.com.</li>
                      </ul>
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
                    <li>Bolbaas berekent op basis van jouw verkopen hoeveel verkopen je de aankomende 12 weken kan verwachten per product.</li>
                  </ul>
                </div> */}


              </div> {/* End grid */}

              {/* NEW Absolutely Positioned Image Container for Product Prestaties */}
              <div className="absolute top-[89%] sm:top-[0%] sm:right-[-10%] w-[100%] sm:w-[75%] h-auto z-70 pointer-events-none"> {/* Adjusted top/right positioning */} 
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/BTW-AANGIFTE-A9lWkyaqM7TBPlTmmCG5YRNzU1J8xl.png"
                  alt="Product prestaties screenshot"
                  width={1200} // Adjust width as needed, larger for better quality scaling down
                  height={960} // Adjust height based on aspect ratio
                  quality={85}
                  className="relative rounded-lg" // Removed shadow and border
                />
              </div>

            </div> {/* End container */}
          </section> {/* End bleed section */}

          {/* Moved Bleed Background Section - Inline Styling */}
          
          {/* Moved Bleed Background Section - Inline Styling */}
          <section id="automatisering" className="relative w-full"> {/* REMOVED padding from here */}
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
