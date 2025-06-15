import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react"; // Import lucide icons
import { ContactStatusDots } from "@/components/contact-status-dots"; // Import the new status dots component
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { WachtlijstForm } from "@/components/wachtlijst-form"; // Import the new WachtlijstForm component
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";

export const metadata: Metadata = {
  title: "Wachtlijst - Bolbaas",
  description: "Schrijf je in voor de beta wachtlijst en krijg als eerste toegang tot nieuwe features.",
  openGraph: {
    title: "Wachtlijst - Bolbaas",
    description: "Schrijf je in voor de beta wachtlijst en krijg als eerste toegang tot nieuwe features.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Wachtlijst Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Bolbaas Wachtlijst",
    description: "Schrijf je in voor de beta wachtlijst en krijg als eerste toegang tot nieuwe features.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function WachtlijstPage() {
  const innerLinesTopOffset = "top-0";

  return (
    <>
      <BackgroundPhoto className="fixed inset-0 -z-10" imageOption={2} />

      <div className="relative z-0 flex flex-col min-h-screen">

        {/* Overlay 1: LEFT Outer Border + FIRST Inner Divider (Full Height) */}
        <div className="absolute inset-0 h-full z-50 pointer-events-none border-l border-border">
          <div className="relative h-full max-w-full mx-auto">
            <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Overlay 2: RIGHT Outer Border + SECOND & THIRD Inner Dividers */}
        <div className={`absolute inset-x-0 ${innerLinesTopOffset} bottom-0 z-50 pointer-events-none border-r border-border`}>
          <div className="relative h-full max-w-full mx-auto">
            <div className="absolute hidden sm:block left-1/2 top-0 bottom-0 w-px bg-border"></div>
            <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="w-full bg-black z-[70] border-b border-border border-r border-l py-3">
          <div className="container px-0">
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full items-center">
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
              <div className="sm:col-start-3 sm:col-span-1 flex items-center justify-start px-4 sm:px-0 py-3 sm:py-1">
                <Mail strokeWidth={1.4} className="h-5 w-5 pr-1 text-white flex-shrink-0" />
                <a 
                  href="mailto:info@bolbaas.nl" 
                  className="text-white hover:text-gray-400 transition-colors text-sm"
                >
                  info@bolbaas.nl
                </a>
                <ContactStatusDots type="email" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative z-[60] w-full pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32 h-[84vh]">
          <div className="container px-0">
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full">
              <div className="col-span-1 sm:col-span-2 flex flex-col items-start space-y-3 md:space-y-4 w-full">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50 w-[60%]">
                  Join de bèta van Bolbaas.
                </h1>
                <p className="w-[71.4%]">
                  Krijg als eerste toegang tot ons platform en krijg krachtige tools die je concurrenten niet hebben.
                </p>
              </div>
              <div className="col-span-1 sm:col-span-2">
                 <WachtlijstForm />
              </div>
            </div>
          </div>
        </section>
        
        <InteractiveTopicSection />
        <MiddleContentSection />
      </div>
    </>
  );
} 