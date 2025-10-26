import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { KiteIcon } from "@/components/ui/kite-icon";
import { FaGoogle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { EmailSignupForm } from "@/components/email-signup-form";
import { Automatiseringanimation } from "@/components/automatisering-animation";
import AnimatedMovingBadges from "@/components/animated-moving-badges";
import { ComparisonAccordionItem } from "@/components/comparison-accordion-item";
import { AnimatedHeroBackground } from "@/components/animated-hero-background";
import { InteractivePricingButton } from "@/components/interactive-pricing-button";
import { ReviewAutomationGrid } from "@/components/review-automation-grid";
import { DatabaseGrid } from "@/components/database-grid";

export const metadata: Metadata = {
  title: "Baasy vs Boloo - het beste alternatief",
  description: "Vergelijk Baasy met Boloo. Ontdek waarom onze partners kiezen voor onbeperkte orders, 12M+ keywords database, AI tools en complete automatisering. Probeer 14 dagen gratis.",
  keywords: [
    "Boloo alternatief",
    "Baasy vs Boloo",
    "bol partner software",
    "bol automatisering",
    "product research tool",
    "keyword tracking",
    "e-mail automatisering",
    "factuur automatisering",
    "bol store management"
  ],
  authors: [{ name: "Baasy" }],
  creator: "Baasy",
  publisher: "Baasy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://baasy.nl"),
  alternates: {
    canonical: "/waarom-ons/baasy-vs-boloo",
  },
  openGraph: {
    title: "Baasy vs Boloo: Het Beste Alternatief voor Bol Partners",
    description: "Vergelijk Baasy met Boloo. Ontdek waarom tevreden partners kiezen voor onbeperkte orders, 12M+ keywords database, AI tools en complete automatisering.",
    url: "/waarom-ons/baasy-vs-boloo",
    siteName: "Baasy",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png",
        width: 1200,
        height: 630,
        alt: "Baasy vs Boloo - Het beste alternatief voor bol partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baasy vs Boloo: Het Beste Alternatief voor Bol Partners",
    description: "Vergelijk Baasy met Boloo. Tevreden partners, 12M+ keywords, onbeperkte orders en AI automatisering.",
    images: ["https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

// Badge Components
function YesBadge() {
  return (
    <span className="bg-[#111111] text-white px-2 py-0.5 rounded-xl text-xs font-medium">
      Ja
    </span>
  );
}

function NoBadge() {
  return (
    <span className="bg-white text-[#111111] border border-gray-300 px-2 py-0.5 rounded-xl text-xs font-medium">
      Nee
    </span>
  );
}

function GeenACoSBadge() {
  return (
    <span className="bg-white text-[#111111] border border-gray-300 px-2 py-0.5 rounded-xl text-xs font-medium">
      Geen ACoS
    </span>
  );
}

function BeperktereInzichtenBadge() {
  return (
    <span className="bg-white text-[#111111] border border-gray-300 px-2 py-0.5 rounded-xl text-xs font-medium">
      Beperktere inzichten
    </span>
  );
}


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full flex items-start justify-center pt-16 md:pt-24 pb-20 md:pb-32 bg-white text-[#111111] overflow-hidden px-4 md:px-6">
        {/* Subtle Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full opacity-60">
            <AnimatedHeroBackground
              color1="232,64,13"
              color2="255,238,216"
              color3="208,178,255"
            />
          </div>
          
          {/* Smooth Gradient Overlay - fades from white at top */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom,
                  rgba(255, 255, 255, 1) 0%,
                  rgba(255, 255, 255, 0.98) 15%,
                  rgba(255, 255, 255, 0.92) 40%,
                  rgba(255, 255, 255, 0.88) 60%,
                  rgba(255, 255, 255, 0.92) 80%,
                  rgba(255, 255, 255, 0.98) 100%
                )`
            }}
          />
        </div>
        
        <div className="w-full relative z-10">
          <div className="container max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="text-[#111111] text-[14px] leading-[16px] mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  BAASY
                  <Image src="/iconnavbar-mode2.png" alt="Baasy" width={32} height={32} className="invert" />
                  <span className="mx-1">VS</span>
                  BOLOO
                </div>
                
                <h1 className="max-w-[28ch] md:max-w-[32ch] text-[32px] md:text-[40px] leading-[36px] md:leading-[44px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
                  Opzoek naar het <i>beste</i> alternatief voor Boloo?
                </h1>

                {/* Features List */}
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80">
                      Goedkoper per maand
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80">
                      Stabiel platform
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80">
                      Onbeperkt orders
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80">
                      Product research met 12 miljoen keywords
                    </span>
                  </div>
                </div>

                <EmailSignupForm sendTo="AW-17372857270/1maandcta" align="left" />
              </div>

              {/* Right Content - Animation */}
              <div className="relative">
                <Automatiseringanimation />
              </div>
            </div>
            
            {/* Disclaimer */}
            <p className="text-[11px] md:text-xs text-[#111111]/60 text-center mt-8 md:mt-12">
              Gebaseerd op onze analyse. Interpretaties kunnen verschillen. Goedkoper bij basisabonnement.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#111111] text-white py-16 md:py-20 lg:py-28" data-dark-section="true">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
            {/* Photo - Commented out */}
            {/* <div className="flex-shrink-0">
              <Image
                src="/lvg.jpeg"
                alt="Lucas van Gasteren"
                width={128}
                height={128}
                className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover"
              />
            </div> */}

            {/* Quote content */}
            <div className="flex-1 text-left">
              <blockquote
                className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-white mb-2 md:mb-3"
                style={{                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                "Wij zijn overgestapt naar Baasy, omdat wij opzoek waren naar een platform dat stabiel was en zonder bugs."
              </blockquote>

              <div
                className="text-white/80 text-[14px] md:text-[16px] leading-[16px] md:leading-[18px] font-normal"
              >
                Lucas van Gasteren, bol partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTW Facturen Automatisering Section */}
      <section id="store-automatisering" className="relative overflow-hidden bg-white py-10 md:py-14 lg:py-18">
        <div className="container mx-auto px-4">
          {/* Section Header */}

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Header */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                    BTW FACTUREN
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-[#111111] tracking-tight max-w-lg">
                  Automatische bol facturen
                </h3>
              </div>

              {/* Video */}
              <div className="relative -mx-2 md:mx-0">
                <video
                  src="/facturen_movie.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl w-full h-auto drop-shadow-lg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right - Description, Button and Three Key Points */}
            <div className="space-y-5 md:space-y-6">
              {/* Description */}
              <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80 max-w-md">
                Elke factuur wordt binnen seconden aangemaakt, geüpload naar bol en klaar voor je boekhouding. Geen handmatig werk meer.
              </p>

              {/* Three Key Points */}
              {/* Point 1 */}
              <div className="flex items-start gap-3 md:gap-4">
                <FaCircleCheck className="text-[#165DFC] text-lg md:text-xl flex-shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <h4 className="text-[17px] md:text-[19px] font-extrabold text-[#111111]">
                    Geen factuuraanvragen meer
                  </h4>
                  <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal text-[#111111]/60">
                    Klanten vinden hun factuur direct in hun bol account. Stop met handmatig facturen opsturen en bespaar uren per week.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3 md:gap-4">
                <FaCircleCheck className="text-[#165DFC] text-lg md:text-xl flex-shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <h4 className="text-[17px] md:text-[19px] font-extrabold text-[#111111]">
                    In jouw branding
                  </h4>
                  <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal text-[#111111]/60">
                    Upload je logo één keer en elk document draagt jouw bedrijfsidentiteit. Professioneel en consistent.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3 md:gap-4">
                <FaCircleCheck className="text-[#165DFC] text-lg md:text-xl flex-shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <h4 className="text-[17px] md:text-[19px] font-extrabold text-[#111111]">
                    Altijd compliant
                  </h4>
                  <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal text-[#111111]/60">
                    7 jaar archivering gegarandeerd. Bij een controle heb je alles binnen seconden paraat.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://app.baasy.nl/registreren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-[15px] md:text-[16px] leading-[20px] md:leading-[22px] font-normal hover:bg-blue-700 px-5 md:px-7 py-3 md:py-3.5 h-auto rounded-xl inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>14 dagen gratis</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 4-Step BTW Process Grid */}

        </div>
      </section>

      <section id="email-campagnes" className="relative overflow-hidden bg-white pb-10 md:pb-14 lg:pb-18">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="max-w-4xl mb-8 md:mb-12">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <KiteIcon variant="orange" size={11} />
                <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                  Automatische e-mails
                </span>
              </div>
              <h2 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-[#111111] tracking-tight">
                Vestuur perfecte review e-mails
              </h2>
              <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80 max-w-md">
                Verstuur automatisch reviewverzoeken een week na levering met een directe link naar je productpagina op bol. 
                Verbeter je ranking, verhoog je conversie en blijf binnen alle richtlijnen die bol heeft opgesteld voor partners!
              </p>
            </div>

          </div>

          {/* Feature Cards Layout */}
          <ReviewAutomationGrid />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prijzen" className="relative bg-white py-12 md:py-16 overflow-hidden">
        {/* Subtle Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full opacity-60">
            <AnimatedHeroBackground
              color1="232,64,13"
              color2="255,238,216"
              color3="208,178,255"
            />
          </div>
          
          {/* Smooth Gradient Overlay - fades from white at top */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom,
                  rgba(255, 255, 255, 1) 0%,
                  rgba(255, 255, 255, 0.95) 15%,
                  rgba(255, 255, 255, 0.85) 40%,
                  rgba(255, 255, 255, 0.8) 60%,
                  rgba(255, 255, 255, 0.85) 80%,
                  rgba(255, 255, 255, 0.95) 100%
                )`
            }}
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px_340px] gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="text-[40px] md:text-[56px] leading-[44px] md:leading-[60px] font-normal text-[#111111] tracking-tight mb-8">
                  Groei zonder grenzen
                </h2>
                <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-normal text-[#111111]/70 mb-12">
                  Van 10 tot 10.000 orders per maand – de prijs blijft hetzelfde. Geen verborgen kosten of prijsverhogingen bij groei. Vanaf €9 per maand, stop wanneer je wilt. Geen technische kennis nodig.
                </p>
              </div>

              {/* Compact Feature List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaCircleCheck className="text-blue-600 text-base flex-shrink-0" />
                  <span className="text-[15px] md:text-[16px] text-[#111111]/80">
                    Automatische facturen & e-mails
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCircleCheck className="text-blue-600 text-base flex-shrink-0" />
                  <span className="text-[15px] md:text-[16px] text-[#111111]/80">
                    Product research tools
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCircleCheck className="text-blue-600 text-base flex-shrink-0" />
                  <span className="text-[15px] md:text-[16px] text-[#111111]/80">
                    Custom dashboards & inzichten
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCircleCheck className="text-blue-600 text-base flex-shrink-0" />
                  <span className="text-[15px] md:text-[16px] text-[#111111]/80">
                    A/B testing & optimalisatie
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Start Plan Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="mb-6">
                <p className="text-[12px] leading-[14px] font-normal text-gray-500 tracking-wide uppercase mb-2">
                  ZET JE EERSTE STAPPEN
                </p>
                <h3 className="text-[28px] leading-[28px] font-medium text-black mb-3">
                  Start
                </h3>
                <p className="text-[13px] leading-[17px] font-normal text-gray-600">
                  Voor ambitieuze beginners die hun bol avontuur willen lanceren.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[36px] leading-[36px] font-medium text-black">9</span>
                  <span className="text-[13px] leading-[13px] font-normal text-gray-500">/maand</span>
                </div>
                <p className="text-[11px] leading-[13px] font-normal text-gray-500">
                  Maandelijks opzegbaar
                </p>
              </div>

              <InteractivePricingButton 
                href="https://app.baasy.nl/registreren"
                sendTo="AW-17372857270/1maandcta"
              >
                14 dagen gratis
              </InteractivePricingButton>

              <div className="space-y-3">
                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={9} />
                    <span className="text-[14px] leading-[20px] font-normal text-black">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-4">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Volledig automatische facturen
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Onbeperkt facturen
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Onbeperkt review e-mails
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Onbeperkt aantal bestellingen
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI & Tools */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="blue" size={9} />
                    <span className="text-[14px] leading-[20px] font-normal text-black">
                      AI & Tools
                    </span>
                  </div>
                  <div className="space-y-1 pl-4">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Product tracking (10 producten)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Winst & ACoS calculator
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        A/B testen van listings
                      </span>
                    </div>
                  </div>
                </div>

                {/* Store Prestaties */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="purple" size={9} />
                    <span className="text-[14px] leading-[20px] font-normal text-black">
                      Store prestaties
                    </span>
                  </div>
                  <div className="space-y-1 pl-4">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Custom dashboards & views
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Bestellingen, Producten, Sales inzichten
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plus Plan Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="mb-6">
                <p className="text-[12px] leading-[14px] font-normal text-gray-500 tracking-wide uppercase mb-2">
                  BOOST JE VERKOOP
                </p>
                <h3 className="text-[28px] leading-[28px] font-medium text-black mb-3">
                  Plus
                </h3>
                <p className="text-[13px] leading-[17px] font-normal text-gray-600">
                  De perfecte toolkit voor verkopers die klaar zijn voor serieuze groei.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[36px] leading-[36px] font-medium text-black">29</span>
                  <span className="text-[13px] leading-[13px] font-normal text-gray-500">/maand</span>
                </div>
                <p className="text-[11px] leading-[13px] font-normal text-gray-500">
                  Maandelijks opzegbaar
                </p>
              </div>

              <InteractivePricingButton 
                href="https://app.baasy.nl/registreren"
                sendTo="AW-17372857270/1maandcta"
              >
                14 dagen gratis
              </InteractivePricingButton>

              <div className="space-y-3">
                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={9} />
                    <span className="text-[14px] leading-[20px] font-normal text-black">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-4">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Volledig automatische facturen
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Onbeperkt facturen
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Onbeperkt review e-mails
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Onbeperkt aantal bestellingen
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI & Tools */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="blue" size={9} />
                    <span className="text-[14px] leading-[20px] font-normal text-black">
                      AI & Tools
                    </span>
                  </div>
                  <div className="space-y-1 pl-4">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-purple-500" />
                      <span className="font-inter text-[13px] leading-[17px] font-medium text-purple-600">
                        Research database & Ranking AI
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Product tracking (100) + <span className="font-medium text-purple-600">Precision</span> (30)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Keyword tracking + A/B testing
                      </span>
                    </div>
                  </div>
                </div>

                {/* Store Prestaties */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="purple" size={9} />
                    <span className="text-[14px] leading-[20px] font-normal text-black">
                      Store prestaties
                    </span>
                  </div>
                  <div className="space-y-1 pl-4">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Custom dashboards & views
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-2.5 h-2.5 text-gray-400" />
                      <span className="font-inter text-[13px] leading-[17px] font-light text-gray-600">
                        Bestellingen, Producten, Sales inzichten
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            {/* Left Content */}
            <div className="text-left">
              {/* Top Text with Kite Icon */}
              <div className="flex items-center gap-2 mb-2">
                <KiteIcon variant="blue" size={11} />
                <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                  AI & Tools
                </span>
              </div>

              {/* Main Title */}
              <div className="space-y-5 mb-8">
                <h1 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight">
                Research tools op een <i>nieuw</i> niveau.

                </h1>

                {/* Subtitle */}
                <p className="text-[14px] md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80 max-w-2xl">
                  Ontdek welke keywords en producten écht werken, met 12 miljoen geanalyseerde zoektermen en miljarden datapunten. Een van de grootste databases voor bol.
                </p>
              </div>

              {/* Email Signup Form */}
              <EmailSignupForm 
                placeholder="Vul je bedrijfsemail in"
                buttonText="Doe gratis research"
                showTestimonial={false}
                align="left"
                sendTo="AW-17372857270/1maandcta"
              />
            </div>

            {/* Right Side - Animated Badges */}
            <div className="relative">
              <div className="mb-16">
                <AnimatedMovingBadges />
              </div>
            </div>
          </div>

          {/* Database Grid */}
          <DatabaseGrid />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-[#FBFAF9] py-12 md:py-14 lg:py-24">
        <div className="container mx-auto max-w-2xl px-4 md:px-6">
          <h2 className="text-center text-[28px] md:text-4xl lg:text-5xl leading-[32px] md:leading-[44px] lg:leading-[52px] font-normal text-[#111111] mb-8 md:mb-12 lg:mb-16">
            4 gebieden waar Baasy <br/>
            <em>meer functies biedt</em> dan Boloo
          </h2>

          <div className="space-y-0">
            {/* Item 1 */}
            <ComparisonAccordionItem 
              title="Goedkoper én geen extra orderkosten bij groei"
              baasyContent="Bij Baasy betaal je €9 per maand voor onbeperkt orders, e-mails en facturen. De prijs blijft altijd hetzelfde, ongeacht hoeveel orders je verwerkt. Voor advanced research tools betaal je €29/maand (Plus) - nog steeds goedkoper dan Boloo's Business plan, maar met meer features."
              bolmateContent="Boloo rekent €24,92/maand voor Starter (zonder automatisering) of €33,25/maand voor Business. Maar let op: je betaalt voor elke order EXTRA per maand bovenop je abonnement. Dit kan oplopen tot €59,95. Totaal dus €93,20/maand bij groei. Voor unlimited orders zonder meerkosten betaal je €83,25/maand (Enterprise)."
            />

            {/* Item 2 */}
            <ComparisonAccordionItem 
              title="Stabiel platform zonder bugs"
              baasyContent="Baasy is gebouwd op een stabiele, goed geteste infrastructuur. Onze partners ervaren een betrouwbaar platform waar ze dagelijks op kunnen vertrouwen. Updates worden zorgvuldig getest voordat ze live gaan, zodat je store management altijd soepel verloopt."
              bolmateContent="Volgens Google reviews kampt Boloo met verschillende bugs en technische problemen in hun applicatie. Gebruikers melden regelmatig issues met de software die hun dagelijkse werkzaamheden kunnen verstoren."
            />

            {/* Item 3 */}
            <ComparisonAccordionItem 
              title="Complete product research suite"
              baasyContent="Baasy biedt een complete product research suite: 12M+ keyword database met CPC data, Ranking AI voor listing optimalisatie, product tracking van concurrenten, keyword tracking, winst & ACoS calculator, A/B testen van listings, en project management. Alles wat je nodig hebt voor succesvolle product research in één platform."
              bolmateContent="Boloo biedt product tracking en een winstcalculator in alle plannen. Echter, keyword verkenner en product ranking checker zijn alleen beschikbaar in Business en Enterprise plannen. Daarnaast ontbreken Ranking AI en keyword tracking volledig. Voor uitgebreide research zijn mogelijk aanvullende tools nodig."
            />

            {/* Item 4 */}
            <ComparisonAccordionItem 
              title="Uitgebreide store prestatie-analyse"
              baasyContent="Baasy biedt complete store prestatie-inzichten: custom dashboards voor jouw belangrijke KPI's, uitgebreide product prestatie-analyse, Levering Tracker, sales en voorraad voorspellingen, en levering tracking. Krijg het volledige overzicht van je store prestaties om betere beslissingen te maken."
              bolmateContent="Boloo's Starter plan mist essentiële analytics zoals sales dashboard, analytics per product. Deze features zijn alleen beschikbaar in Business en Enterprise plannen. Voor volledige store inzichten betaal je dus minimaal €33,25/maand. Zonder dat je al de features van Baasy hebt."
            />
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-[11px] md:text-xs text-[#111111]/70">
              Deze vergelijkingen zijn naar ons beste vermogen objectief samengesteld, maar interpretaties kunnen per gebruiker verschillen.
            </p>
          </div>
        </div>
      </section>
      {/* Comparison Table Section */}
      <section className="bg-[#F6F5F3] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-[24px] md:text-[32px] leading-[28px] md:leading-[36px] font-medium text-gray-900 mb-8 md:mb-12 text-center">
            Volledige feature vergelijking
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-visible">
              {/* Header Row - Sticky */}
              <div className="sticky top-[60px] md:top-[72px] z-[45] grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 p-4 md:p-6 lg:p-8 bg-[#F6F5F3] border-b border-gray-200">
                <div className="hidden md:block"></div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 md:gap-2">
                    <Image src="/iconnavbar-mode2.png" alt="Baasy" width={24} height={24} className="md:w-8 md:h-8 invert" />
                    <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-[#111111]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      BAASY
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 md:gap-2">
                    <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-[#111111]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      BOLOO
                    </span>
                  </div>
                </div>
              </div>

              {/* Account Limits Section */}
              <div>
                <div className="flex items-center gap-2 px-3 md:px-4 lg:px-8 py-3 md:py-4 bg-[#F6F5F3]">
                  <KiteIcon variant="purple" size={12} />
                  <h4 className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] font-medium text-gray-900">Account limieten</h4>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-center py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">
                      Aantal orders²
                      <div className="text-[11px] md:text-[12px] leading-[13px] md:leading-[14px] text-gray-500 mt-1">Het aantal orders dat verwerkt kan worden.</div>
                    </div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt*</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">Onbeperkt*</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-center py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">
                      Aantal stores²
                      <div className="text-[11px] md:text-[12px] leading-[13px] md:leading-[14px] text-gray-500 mt-1">Maximum aantal gekoppelde bol stores per account.</div>
                    </div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">1 (+€9,95 p/m)²</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">1 (+€9,95 p/m)²</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI & Tools Section */}
              <div>
                <div className="flex items-center gap-2 px-3 md:px-4 lg:px-8 py-3 md:py-4 bg-[#F6F5F3]">
                  <KiteIcon variant="blue" size={12} />
                  <h4 className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] font-medium text-gray-900">AI & Tools</h4>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Product tracking</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Alleen dynamic</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">Alleen dynamic</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-center py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">
                      Aantal traceerbare producten
                      <div className="text-[11px] md:text-[12px] leading-[13px] md:leading-[14px] text-gray-500 mt-1">Maximum aantal producten dat je kunt volgen.</div>
                    </div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">500-2000²</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">500-2000²</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Research keyword database</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Ranking AI</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Keyword tracking</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Product ranking checker</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Winst & ACoS calculator</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <YesBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">A/B testen van listings</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                </div>
              </div>

              {/* Automatisering Section */}
              <div>
                <div className="flex items-center gap-2 px-3 md:px-4 lg:px-8 py-3 md:py-4 bg-[#F6F5F3]">
                  <KiteIcon variant="orange" size={12} />
                  <h4 className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] font-medium text-gray-900">Automatisering</h4>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">E-mail</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <YesBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Facturen</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <YesBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-center py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Aantal e-mails en facturen²</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt*</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt*</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">BTW</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Baaspilot</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                </div>
              </div>

              {/* Store Prestaties Section */}
              <div>
                <div className="flex items-center gap-2 px-3 md:px-4 lg:px-8 py-3 md:py-4 bg-[#F6F5F3]">
                  <KiteIcon variant="purple" size={12} />
                  <h4 className="text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] font-medium text-gray-900">Store prestaties</h4>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Custom dashboards and views</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Bestellingen</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <YesBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Producten</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <BeperktereInzichtenBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <BeperktereInzichtenBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Sales en voorraad schattingen</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-gray-50">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Levering tracker</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Baasy" width={16} height={16} className="invert" />
                          <span>Baasy</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Boloo</span>
                        </div>
                        <NoBadge />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <YesBadge />
                    </div>
                    <div className="hidden md:block text-center">
                      <NoBadge />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="max-w-5xl mx-auto mt-6 md:mt-8">
            <p className="text-center text-[11px] md:text-xs text-gray-500 italic">
              Baasy Plus vergeleken met Boloo Business abonnement (€33,25/maand)
            </p>
            <p className="text-center text-[11px] md:text-xs text-gray-500 italic mt-2">
              * Boloo heeft volume pricing: extra kosten vanaf 2001-3000 orders (€49,95/maand extra). Starter plan heeft beperkte features.
            </p>
            <p className="text-center text-[11px] md:text-xs text-gray-500 italic mt-2">
              ² Boloo Starter: 500 producten, Business: 2000 producten, Enterprise (€83,25/m): unlimited. Extra stores: +€9,95 p/m vanaf Business plan.
            </p>
            <p className="text-center text-[11px] md:text-xs text-gray-500 italic mt-2">
              Deze vergelijking is naar ons beste vermogen objectief samengesteld op basis van Boloo's prijspagina (oktober 2025), maar interpretaties kunnen per gebruiker verschillen.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
