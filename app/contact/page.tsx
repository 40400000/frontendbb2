import type { Metadata } from "next";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';
import { Phone, Mail } from "lucide-react";
import { ContactStatusDots } from "@/components/contact-status-dots";
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { ContactForm } from "@/components/contact-form";
import { AppointmentForm } from "@/components/appointment-form";

export const metadata: Metadata = {
  title: "Contact - Baasy",
  description: "Neem contact op met Baasy. Wij staan stand-by, ook als je nog geen klant bent. Samen naar het volgende niveau.",
  openGraph: {
    title: "Contact - Baasy",
    description: "Neem contact op met Baasy. Wij staan stand-by, ook als je nog geen klant bent. Samen naar het volgende niveau.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Baasy Contact Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Contacteer Baasy",
    description: "Stel je vragen of plan een gesprek. Baasy helpt je graag verder met data en automatisering voor bol.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full min-h-[100vh] md:min-h-[120vh] flex items-start justify-center pt-16 md:pt-28 pb-20 md:pb-32 bg-white text-[#111111] overflow-hidden px-4 md:px-6">
        {/* Simple background */}
        <div className="absolute inset-0 w-full h-full bg-white" />
        
        <div className="w-full relative z-10 flex flex-col">
          {/* Contact Info Bar */}
          <div className="container max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="bg-[#111111] rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/70 text-sm font-medium mb-1">Telefoon</div>
                    <div className="flex items-center gap-3">
                      <a 
                        href="tel:+31613665348" 
                        className="text-white hover:text-white/80 transition-colors font-medium text-lg"
                      >
                        +31 6 13665348
                      </a>
                      <ContactStatusDots type="phone" />
                    </div>
                    <div className="text-white/60 text-sm">(8:00 - 22:00)</div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/70 text-sm font-medium mb-1">Email</div>
                    <div className="flex items-center gap-3">
                      <a 
                        href="mailto:info@baasy.nl" 
                        className="text-white hover:text-white/80 transition-colors font-medium text-lg"
                      >
                        info@baasy.nl
                      </a>
                      <ContactStatusDots type="email" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-start">
                <h1 className="text-[32px] md:text-[48px] leading-[36px] md:leading-[48px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
                  Wij staan stand-by, <em className="italic">altijd</em>.
                </h1>
                
                <p className="text-sm md:text-lg leading-[20px] md:leading-[24px] opacity-70 mb-8 md:mb-10">
                  Ook als je nog geen klant van Baasy bent. Samen naar het volgende niveau.
                </p>

                <Link 
                  href="/prijzen" 
                  className="inline-flex items-center gap-2 bg-[#111111] text-white font-medium text-sm md:text-base py-3 md:py-4 px-6 rounded-xl hover:bg-[#111111]/90 transition-colors w-fit"
                >
                  Lidmaatschappen bekijken
                  <MdOutlineArrowOutward className="h-4 w-4" />
                </Link>
              </div>

              {/* Right Column - Contact Form */}
              <div className="flex flex-col">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
