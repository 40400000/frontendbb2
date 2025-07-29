import type { Metadata } from "next";
import Image from "next/image"; // Import Next Image
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
import Link from 'next/link'; // Added Link import
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { AutomatiseringClientFeatures } from "@/components/automatisering-client-features";
import { ShoppingCart, Sparkles, Upload, Database, ArrowRight, FileText, LineChart, Package, AlertTriangle, Archive, Send } from "lucide-react"; // Added new icons
import { IoStar } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Automatisering - Bolbaas",
  description: "Automatiseer je bol store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
  openGraph: {
    title: "Automatisering - Bolbaas",
    description: "Automatiseer je bol store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
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
    description: "Automatiseer je bol store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
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
        <section className="relative z-[60] w-full pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10 h-[84vh]">
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
              <section data-navbar-mode="light" id="store-automatisering" className="relative w-full py-16 md:py-24 lg:py-32"> {/* Removed min-height */}
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
                  {/* Feature 1: BTW Facturen */}
                  <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] gap-x-0 gap-y-6 text-black mt-12">
                    {/* Column 1: Text */}
                    <div className="text-black z-80 relative">
                      <div className="w-full">
                        <div className="sm:mt-10 z-80 relative">
                          <p className="text-sm text-gray-500 mb-1">BTW FACTUREN</p>
                          <h3 className="font-semibold text-black my-3">Automatisch BTW facturen uploaden naar bol</h3>
                          <ul className="space-y-2 text-sm text-black pr-3">
                            <li>Geen tijd meer besteden aan het beantwoorden van klantvragen omtrent facturen. Bolbaas uploadt automatisch BTW facturen naar bol en slaat deze op in jouw database.</li>
                          </ul>
                        </div>
                        <Link href="/contact" passHref>
                          <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-gray-200 mt-6" >
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
                    </div>
                    {/* Column 2: Image */}
                    <div className="flex justify-center sm:ml-[8vw] pointer-events-none">
                      <div className="w-full sm:w-[60%] h-auto">
                        <Image
                          src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/facturenuploaden%20%281%29.png"
                          alt="Automatisch BTW facturen uploaden"
                          width={1200}
                          height={960}
                          quality={85}
                          className="relative rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 4-Step Process Section for BTW Facturen */}
                  <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-black mt-20 py-0 border-t border-b border-gray-200 items-stretch">
                    {/* Step 1 */}
                    <div className="px-6 py-8 group hover:bg-gray-50 transition-all duration-300 ease-out flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <Package className="w-6 h-6 text-gray-400 mr-3 group-hover:text-gray-600 transition-colors" />
                        <span className="text-xs font-mono text-gray-500 tracking-wider">STAP 01</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-black text-lg mb-2">Bestelling komt binnen</h3>
                        <p className="text-sm text-gray-600">Een klant bestelt jouw product via bol.</p>
                      </div>
                    </div>

                    {/* Step 2 - Bolbaas Step */}
                    <div className="px-6 py-8 group hover:bg-blue-50/80 transition-all duration-300 ease-out flex flex-col h-full border border-blue-500/20 bg-blue-50/50 shadow-md shadow-blue-500/10">
                      <div className="flex items-center mb-4">
                        <Sparkles className="w-6 h-6 text-blue-500 mr-3" />
                        <span className="text-xs font-mono text-blue-500 tracking-wider">STAP 02</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-blue-900 text-lg mb-2">Bolbaas maakt factuur</h3>
                        <p className="text-sm text-blue-700">Voor de klant wordt automatisch een BTW factuur gemaakt</p>
                      </div>
                      <div className="flex items-center text-sm text-blue-900 font-medium mt-4">
                        <Image src="/icon-512x512.png" alt="Bolbaas logo" width={24} height={24} className="mr-2"/>
                        <span>Geregeld door Bolbaas</span>
                      </div>
                    </div>

                    {/* Step 3 - Bolbaas Step */}
                    <div className="px-6 py-8 group hover:bg-blue-50/80 transition-all duration-300 ease-out flex flex-col h-full border border-blue-500/20 bg-blue-50/50 shadow-md shadow-blue-500/10">
                      <div className="flex items-center mb-4">
                        <Upload className="w-6 h-6 text-blue-500 mr-3" />
                        <span className="text-xs font-mono text-blue-500 tracking-wider">STAP 03</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-blue-900 text-lg mb-2">Upload naar Bol & e-mail</h3>
                        <p className="text-sm text-blue-700">De factuur wordt geüpload naar bol.com en optioneel naar de klant gemaild.</p>
                      </div>
                      <div className="flex items-center text-sm text-blue-900 font-medium mt-4">
                        <Image src="/icon-512x512.png" alt="Bolbaas logo" width={24} height={24} className="mr-2"/>
                        <span>Geregeld door Bolbaas</span>
                      </div>
                    </div>

                    {/* Step 4 - Bolbaas Step */}
                    <div className="px-6 py-8 group hover:bg-blue-50/80 transition-all duration-300 ease-out flex flex-col h-full border border-blue-500/20 bg-blue-50/50 shadow-md shadow-blue-500/10">
                      <div className="flex items-center mb-4">
                        <Database className="w-6 h-6 text-blue-500 mr-3" />
                        <span className="text-xs font-mono text-blue-500 tracking-wider">STAP 04</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-blue-900 text-lg mb-2">Boekhouding bijgewerkt</h3>
                        <p className="text-sm text-blue-700">Alle facturen worden automatische opgeslagen voor je boekhouding.</p>
                      </div>
                      <div className="flex items-center text-sm text-blue-900 font-medium mt-4">
                        <Image src="/icon-512x512.png" alt="Bolbaas logo" width={24} height={24} className="mr-2"/>
                        <span>Geregeld door Bolbaas</span>
                      </div>
                    </div>
                    
                    {/* Step Arrows for desktop */}
                    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2 text-gray-400 bg-white p-2 rounded-full border border-gray-200">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-gray-400 bg-white p-2 rounded-full border border-gray-200">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-3/4 -translate-x-1/2 text-gray-400 bg-white p-2 rounded-full border border-gray-200">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>


                  {/* Feature 2: Email Campagnes */}
                  <div className="grid grid-cols-1 sm:grid-cols-[75%_25%] gap-x-0 gap-y-6 text-black mt-24">
                    {/* Column 1: Image */}
                    <div className="flex justify-center sm:justify-start sm:ml-[4vw] order-last sm:order-first pointer-events-none">
                        <div className="w-full sm:w-[60%] h-auto sm:mr-[-10%]">
                            <Image
                                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/automatiseringemails-2.png"
                                alt="E-mail campagnes automatisering"
                                width={1200}
                                height={960}
                                quality={85}
                                className="relative rounded-lg"
                            />
                        </div>
                    </div>
                    {/* Column 2: Text */}
                    <div className="text-black z-80 relative">
                      <div className="w-full">
                        <div id="email-campagnes" className="sm:mt-10 z-80 relative">
                          <p className="text-sm text-gray-500 mb-1">E-MAIL CAMPAGNES</p>
                          <h3 className="font-semibold text-black my-3">Verhoog reviews en voorkom klantvragen met e-mail campagnes</h3>
                          <ul className="space-y-2 text-sm text-black pr-3">
                            <li>Automatische e-mail campagnes. Maak e-mails precies zoals je het wilt, of gebruik een van onze templates.</li>
                          </ul>
                        </div>
                        <Link href="/contact" passHref>
                            <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden border-t border-b border-gray-200 mt-6" >
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
                    </div>
                  </div>

                  {/* 4-Step Process Section for E-mail Campagnes */}
                  <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-black mt-20 py-0 border-t border-b border-gray-200 items-stretch">
                    {/* Step 1 */}
                    <div className="px-6 py-8 group hover:bg-gray-50 transition-all duration-300 ease-out flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <Package className="w-6 h-6 text-gray-400 mr-3 group-hover:text-gray-600 transition-colors" />
                        <span className="text-xs font-mono text-gray-500 tracking-wider">STAP 01</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-black text-lg mb-2">Bestelling komt binnen</h3>
                        <p className="text-sm text-gray-600">Een klant bestelt jouw product via bol.</p>
                      </div>
                    </div>

                    {/* Step 2 - Bolbaas Step */}
                    <div className="px-6 py-8 group hover:bg-blue-50/80 transition-all duration-300 ease-out flex flex-col h-full border border-blue-500/20 bg-blue-50/50 shadow-md shadow-blue-500/10">
                      <div className="flex items-center mb-4">
                        <Sparkles className="w-6 h-6 text-blue-500 mr-3" />
                        <span className="text-xs font-mono text-blue-500 tracking-wider">STAP 02</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-blue-900 text-lg mb-2">Geautomatiseerde e-mail</h3>
                        <p className="text-sm text-blue-700">Op het juiste moment sturen we een e&#8209;mail met een reviewverzoek.</p>
                      </div>
                      <div className="flex items-center text-sm text-blue-900 font-medium mt-4">
                        <Image src="/icon-512x512.png" alt="Bolbaas logo" width={24} height={24} className="mr-2"/>
                        <span>Geregeld door Bolbaas</span>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="px-6 py-8 group hover:bg-gray-50 transition-all duration-300 ease-out flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <IoStar className="w-6 h-6 text-yellow-500 mr-3 group-hover:text-yellow-600 transition-colors" />
                        <span className="text-xs font-mono text-gray-500 tracking-wider">STAP 03</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-black text-lg mb-2">Klant laat review achter</h3>
                        <p className="text-sm text-gray-600">Tevreden klanten delen hun ervaring op bol.com, wat je zichtbaarheid vergroot.</p>
                        <div className="mt-4 flex items-center space-x-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                          <Image
                            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/1440x1080a%20%281%29.jpg"
                            alt="Nieuwe product review"
                            width={56}
                            height={56}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <p className="font-semibold text-sm text-gray-800">Nieuwe product review</p>
                            <div className="flex items-center mt-0.5">
                              <IoStar className="w-4 h-4 text-yellow-400" />
                              <IoStar className="w-4 h-4 text-yellow-400" />
                              <IoStar className="w-4 h-4 text-yellow-400" />
                              <IoStar className="w-4 h-4 text-yellow-400" />
                              <IoStar className="w-4 h-4 text-yellow-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 - Bolbaas Step */}
                    <div className="px-6 py-8 group hover:bg-blue-50/80 transition-all duration-300 ease-out flex flex-col h-full border border-blue-500/20 bg-blue-50/50 shadow-md shadow-blue-500/10">
                      <div className="flex items-center mb-4">
                        <LineChart className="w-6 h-6 text-blue-500 mr-3" />
                        <span className="text-xs font-mono text-blue-500 tracking-wider">STAP 04</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-blue-900 text-lg mb-2">Analyseer klantfeedback</h3>
                        <p className="text-sm text-blue-700">Wij verzamelen en analyseren met AI de feedback om je productprestaties te verbeteren.</p>
                      </div>
                      <Link href="/features/store-prestaties" className="flex items-center text-sm text-blue-900 font-medium mt-4 group/link">
                        <Image src="/icon-512x512.png" alt="Bolbaas logo" width={24} height={24} className="mr-2"/>
                        <span className="group-hover/link:underline">Bekijk in Store Prestaties</span>
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                    
                    {/* Step Arrows for desktop */}
                    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2 text-gray-400 bg-white p-2 rounded-full border border-gray-200">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-gray-400 bg-white p-2 rounded-full border border-gray-200">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-3/4 -translate-x-1/2 text-gray-400 bg-white p-2 rounded-full border border-gray-200">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Bottom Content Block */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-black mt-32">
                    <div />
                    <div className="sm:col-span-2 text-center space-y-6">
                        <h2 className="text-4xl md:text-5xl font-semibold">Focus op ondernemen, niet op boekhouding.</h2>
                        <p className="text-base">
                        Automatisering die écht werkt. Facturen uploaden, BTW berekenen, e-mails versturen - alles gebeurt automatisch op de achtergrond. Zo heb je meer tijd voor echt ondernemen.
                        </p>
                    </div>
                    <div />
                  </div>

                  {/* Bottom Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-black mt-12">
                      <div />
                      <div className="sm:col-span-2 grid grid-cols-2">
                          <div className="border-t border-b border-gray-200">
                              <Link href="/prijzen" passHref>
                                  <div className="group relative w-full text-left cursor-pointer overflow-hidden">
                                      <span className="block py-6 pl-4 border-r border-gray-200 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                                          Lidmaatschappen bekijken
                                      </span>
                                      <div className="absolute inset-0 bg-black text-white py-6 pl-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                          Lidmaatschappen bekijken
                                      </div>
                                  </div>
                              </Link>
                          </div>
                          <div className="border-t border-b border-gray-200">
                              <Link href="/contact" passHref>
                                  <div className="group relative w-full text-left cursor-pointer overflow-hidden">
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
                      </div>
                      <div />
                  </div>
                </div> {/* End container */}
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
              {/* Feature grid with text and image */}
              <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] gap-x-0 gap-y-6 text-white mt-12">
                {/* Column 1: Text */}
                <div className="text-white z-80 relative">
                  <div className="w-full">
                    <div className="sm:mt-10 z-80 relative">
                      <p className="mb-4 text-base">Nooit meer stress over BTW-aangiftes of zoekraken van facturen. Bolbaas regelt alles automatisch, zodat je rustig kunt slapen en focussen op wat je leuk vindt: ondernemen.</p>
                      {/* Feature Set 1 */}
                      <div className="mt-10">
                        <p className="text-sm text-gray-400 mb-1">BTW BEREKENING</p>
                        <h3 className="font-semibold text-white my-3">BTW aangifte automatisch berekend</h3>
                        <ul className="space-y-2 text-sm text-white pr-3">
                          <li>Bolbaas berekent de BTW op basis van jouw orders en rekent facturen van bol zelf mee. Zo weet je altijd precies hoeveel BTW je moet betalen.</li>
                        </ul>
                      </div>
                      {/* Feature Set 2 */}
                      <div className="mt-10 pr-4 md:pr-6">
                        <p className="text-sm text-gray-400 mb-1">BTW BOEKHOUDING</p>
                        <h3 className="font-semibold text-white my-3">BTW facturen automatisch opgeslagen</h3>
                        <ul className="space-y-2 text-sm text-white pr-3">
                          <li>Jouw persoonlijke boekhouder. Bolbaas bewaart alle facturen van jouw orders en van bol.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column 2: Image */}
                <div className="flex justify-center sm:ml-[10vw] pointer-events-none sm:mt-15">
                  <div className="w-full sm:w-[95%] h-auto">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/btw-dashboard-2.png"
                      alt="BTW automatisering dashboard"
                      width={1200}
                      height={960}
                      quality={85}
                      className="relative rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* 4-Step Process Section for BTW Aangifte */}
              <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-x-0 text-white py-0 border-t border-b border-gray-800 items-stretch mt-10 sm:mt-40">
                {/* Step 1 - Deadline */}
                <div className="px-6 py-8 group hover:bg-yellow-900/20 transition-all duration-300 ease-out flex flex-col h-full border border-yellow-500/30 bg-yellow-900/10 shadow-md shadow-yellow-500/10">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                    <span className="text-xs font-mono text-yellow-400 tracking-wider">STAP 01</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-yellow-200 text-lg mb-2">Deadline BTW komt eraan</h3>
                    <p className="text-sm text-yellow-300">Je ontvangt een melding dat de BTW-deadline nadert.</p>
                  </div>
                </div>

                {/* Step 2 - Bolbaas stelt op */}
                <div className="px-6 py-8 group hover:bg-blue-900/30 transition-all duration-300 ease-out flex flex-col h-full border border-blue-500/20 bg-blue-900/20 shadow-md shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-xs font-mono text-blue-400 tracking-wider">STAP 02</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-blue-200 text-lg mb-2">Bolbaas stelt BTW-aangifte op</h3>
                    <p className="text-sm text-blue-300">Wij stellen een complete BTW-aangifte voor bol op.</p>
                  </div>
                  <div className="flex items-center text-sm text-blue-200 font-medium mt-4">
                    <Image src="/icon-512x512.png" alt="Bolbaas logo" width={24} height={24} className="mr-2"/>
                    <span>Geregeld door Bolbaas</span>
                  </div>
                </div>

                {/* Step 3 - Bewaren */}
                <div className="px-6 py-8 group hover:bg-blue-900/30 transition-all duration-300 ease-out flex flex-col h-full border border-blue-500/20 bg-blue-900/20 shadow-md shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <Archive className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-xs font-mono text-blue-400 tracking-wider">STAP 03</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-blue-200 text-lg mb-2">Bolbaas bewaart alles 7 jaar</h3>
                    <p className="text-sm text-blue-300">Al jouw facturen en aangiftes worden veilig bewaard voor de Belastingdienst.</p>
                  </div>
                  <div className="flex items-center text-sm text-blue-200 font-medium mt-4">
                    <Image src="/icon-512x512.png" alt="Bolbaas logo" width={24} height={24} className="mr-2"/>
                    <span>Geregeld door Bolbaas</span>
                  </div>
                </div>

                {/* Step 4 - Indienen */}
                <div className="px-6 py-8 group hover:bg-gray-800 transition-all duration-300 ease-out flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Send className="w-6 h-6 text-gray-400 mr-3 group-hover:text-gray-300 transition-colors" />
                    <span className="text-xs font-mono text-gray-500 tracking-wider">STAP 04</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white text-lg mb-2">Binnen minuten indienen</h3>
                    <p className="text-sm text-gray-400">Je controleert de aangifte en dient deze in bij de Belastingdienst.</p>
                  </div>
                </div>

                {/* Step Arrows for desktop */}
                <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2 text-gray-600 bg-black p-2 rounded-full border border-gray-700">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-gray-600 bg-black p-2 rounded-full border border-gray-700">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-3/4 -translate-x-1/2 text-gray-600 bg-black p-2 rounded-full border border-gray-700">
                  <ArrowRight className="w-6 h-6" />
                </div>
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
