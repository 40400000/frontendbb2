import type { Metadata } from "next";
import Image from "next/image"; // Import Next Image
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
import Link from 'next/link'; // Ensure Link is imported
import { Phone, Mail } from "lucide-react"; // Import lucide icons
import { ContactStatusDots } from "@/components/contact-status-dots"; // Import the new status dots component
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { AutomatiseringClientFeatures } from "@/components/automatisering-client-features";
// import { InteractiveInput } from "@/components/ui/interactive-input"; // No longer directly used here
import { ContactForm } from "@/components/contact-form"; // Import the new ContactForm component
import { AppointmentForm } from "@/components/appointment-form"; // Import the new AppointmentForm component

export const metadata: Metadata = {
  title: "Contact - Bolbaas",
  description: "Neem contact op met Bolbaas. Wij staan stand-by, ook als je nog geen klant bent. Samen naar het volgende niveau.",
  openGraph: {
    title: "Contact - Bolbaas",
    description: "Neem contact op met Bolbaas. Wij staan stand-by, ook als je nog geen klant bent. Samen naar het volgende niveau.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Contact Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Contacteer Bolbaas",
    description: "Stel je vragen of plan een gesprek. Bolbaas helpt je graag verder met data en automatisering voor bol.com.",
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

        {/* NEW Contact Info Bar */}
        <div className="w-full bg-black z-[70] border-b border-border border-r border-l py-3">
          <div className="container px-0">
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full items-center">
              
              {/* Phone Number - Column 1 on mobile, Column 2 on sm+ */}
              <div className="sm:col-start-2 sm:col-span-1 flex items-center justify-start px-4 sm:px-0 py-3 sm:py-1 mb-2 sm:mb-0">
                <Phone strokeWidth={1.4} className="h-5 w-5 pr-1 text-white flex-shrink-0" />
                <a 
                  href="tel:+31613665348" 
                  className="text-white hover:text-gray-400 transition-colors text-sm"
                >
                  +31 6 13665348 (8:00 - 22:00)
                </a>
                <ContactStatusDots type="phone" />
              </div>
              
              {/* Email - Column 1 on mobile (stacked), Column 3 on sm+ */}
              <div className="sm:col-start-3 sm:col-span-1 flex items-center justify-start px-4 sm:px-0 py-3 sm:py-1">
                <Mail strokeWidth={1.4} className="h-5 w-5 pr-1 text-white flex-shrink-0" />
                <a 
                  href="mailto:thijmendreef@icloud.com" 
                  className="text-white hover:text-gray-400 transition-colors text-sm"
                >
                  thijmendreef@icloud.com
                </a>
                <ContactStatusDots type="email" />
              </div>

            </div>
          </div>
        </div>

        {/* Hero Section - Left Aligned & Reduced Height */}
        <section className="relative z-[60] w-full pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10 min-h-[84vh]">
          <div className="container px-0">
            {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-1 sm:col-span-2 flex flex-col items-start space-y-3 md:space-y-4 w-full">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 w-[60%]">
                  Plan een gesprek.
                </h1>
                {/* Sub-headline */}
                <p className="w-[71.4%]">
                  Wij maken graag tijd vrij voor een persoonlijk gesprek. Samen kijken we naar jouw uitdagingen en mogelijkheden.
                </p>
                {/* Button 2 - Group for hover effects, relative positioning - MOVED HERE */}
                <Link href="/prijzen" passHref className="w-full sm:w-1/2">
                  <div className="group relative w-full text-left cursor-pointer mt-10 overflow-hidden border-t border-b border-border mb-20 sm:mb-0 -mr-1.5">
                    {/* Original Content - Slides up on hover */}
                    <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> {/* Changed font-bold to font-semibold */}
                      Lidmaatschappen bekijken {/* Updated text */}
                      <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                    </span>
                    {/* Hover Overlay - Slides in from bottom on hover */}
                    <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed font-bold to font-semibold */}
                      Lidmaatschappen bekijken {/* Updated text */}
                      <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                    </div>
                  </div>
                </Link>
              </div>
              {/* Placeholder for right two columns on sm+ */}
              <div className="col-span-1 sm:col-span-2">
                 <AppointmentForm /> {/* Use the new AppointmentForm component */}
              </div>
              
              {/* Button Container - This section is now removed as the button is moved above */}
            </div> { /* End grid wrapper */}
          </div>

          {/* Absolutely Positioned Image Container */}

        </section>

        <section className="relative z-[60] w-full pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10 min-h-[84vh]">
          <div className="container px-0">
            {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-1 sm:col-span-2 flex flex-col items-start space-y-3 md:space-y-4 w-full">
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 w-[60%]">
                  Wij staan stand-by, altijd.
                </h1>
                {/* Sub-headline */}
                <p className="w-[71.4%]">
                  Ook als je nog geen klant van Bolbaas bent. Samen naar het volgende niveau.
                </p>
                {/* Button 2 - Group for hover effects, relative positioning - MOVED HERE */}
                <Link href="/prijzen" passHref className="w-full sm:w-1/2">
                  <div className="group relative w-full text-left cursor-pointer mt-10 overflow-hidden border-t border-b border-border mb-20 sm:mb-0 -mr-1.5">
                    {/* Original Content - Slides up on hover */}
                    <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> {/* Changed font-bold to font-semibold */}
                      Lidmaatschappen bekijken {/* Updated text */}
                      <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                    </span>
                    {/* Hover Overlay - Slides in from bottom on hover */}
                    <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed font-bold to font-semibold */}
                      Lidmaatschappen bekijken {/* Updated text */}
                      <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                    </div>
                  </div>
                </Link>
              </div>
              {/* Placeholder for right two columns on sm+ */}
              <div className="col-span-1 sm:col-span-2">
                 <ContactForm /> {/* Use the new ContactForm component */}
              </div>
              
              {/* Button Container - This section is now removed as the button is moved above */}
            </div> { /* End grid wrapper */}
          </div>

          {/* Absolutely Positioned Image Container */}

        </section>

        {/* Removed commented out sections */}


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
