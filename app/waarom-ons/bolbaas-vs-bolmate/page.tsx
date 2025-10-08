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

export const metadata: Metadata = {
  title: "Bolbaas vs Bolmate - het beste alternatief",
  description: "Vergelijk Bolbaas met Bolmate. Ontdek waarom onze partners kiezen voor onbeperkte orders, 12M+ keywords database, AI tools en complete automatisering. Probeer 1 maand gratis.",
  keywords: [
    "Bolmate alternatief",
    "Bolbaas vs Bolmate",
    "bol partner software",
    "bol automatisering",
    "product research tool",
    "keyword tracking",
    "e-mail automatisering",
    "factuur automatisering",
    "bol store management"
  ],
  authors: [{ name: "Bolbaas" }],
  creator: "Bolbaas",
  publisher: "Bolbaas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bolbaas.nl"),
  alternates: {
    canonical: "/waarom-ons/bolbaas-vs-bolmate",
  },
  openGraph: {
    title: "Bolbaas vs Bolmate: Het Beste Alternatief voor Bol Partners",
    description: "Vergelijk Bolbaas met Bolmate. Ontdek waarom tevreden partners kiezen voor onbeperkte orders, 12M+ keywords database, AI tools en complete automatisering.",
    url: "/waarom-ons/bolbaas-vs-bolmate",
    siteName: "Bolbaas",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png",
        width: 1200,
        height: 630,
        alt: "Bolbaas vs Bolmate - Het beste alternatief voor bol partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolbaas vs Bolmate: Het Beste Alternatief voor Bol Partners",
    description: "Vergelijk Bolbaas met Bolmate. Tevreden partners, 12M+ keywords, onbeperkte orders en AI automatisering.",
    images: ["https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png"],
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
      <section className="relative z-20 w-full flex items-start justify-center pt-16 md:pt-24 pb-20 md:pb-32 bg-[#FBFAF9] text-[#111111] overflow-hidden px-4 md:px-6">
        {/* Simple Background */}
        <div className="absolute inset-0 w-full h-full bg-[#FBFAF9]" />
        
        <div className="w-full relative z-10">
          <div className="container max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="text-[#111111] text-[14px] leading-[16px] mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  BOLBAAS
                  <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={32} height={32} className="invert" />
                  <span className="mx-1">VS</span>
                  BOLMATE
                </div>
                
                <h1 className="max-w-[28ch] md:max-w-[32ch] text-[32px] md:text-[40px] leading-[36px] md:leading-[44px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
                  Opzoek naar het <i>beste</i> alternatief voor Bolmate?
                </h1>

                {/* Features List */}
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80">
                      E-mail automatisering
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80">
                      Factuur automatisering
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80">
                      Product research met 12M+ keywords
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
                "Bolbaas biedt alle software die je nodig hebt als bol partner.  De emails en facturen automatiseren is een piece of cake."
              </blockquote>

              <div
                className="text-white/80 text-[14px] md:text-[16px] leading-[16px] md:leading-[18px] font-normal"
              >
                Lucas van gasteren, bol partner
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
                Bolbaas genereert en verstuurt automatisch BTW-facturen naar bol – snel en foutloos afgehandeld.
              </p>

              {/* Three Key Points */}
              {/* Point 1 */}
              <div className="flex items-start gap-3 md:gap-4">
                <FaCircleCheck className="text-[#165DFC] text-lg md:text-xl flex-shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <h4 className="text-[17px] md:text-[19px] font-extrabold text-[#111111]">
                    Proactief versturen naar bol
                  </h4>
                  <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal text-[#111111]/60">
                    Direct na bestelling wordt de factuur aangemaakt en verstuurd naar het klantaccount op bol. Voorkom klantvragen en bespaar tijd.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3 md:gap-4">
                <FaCircleCheck className="text-[#165DFC] text-lg md:text-xl flex-shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <h4 className="text-[17px] md:text-[19px] font-extrabold text-[#111111]">
                    Jouw eigen huisstijl
                  </h4>
                  <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal text-[#111111]/60">
                    Facturen worden automatisch voorzien van jouw logo en bedrijfsgegevens voor een professionele uitstraling.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3 md:gap-4">
                <FaCircleCheck className="text-[#165DFC] text-lg md:text-xl flex-shrink-0 mt-1" />
                <div className="space-y-1.5">
                  <h4 className="text-[17px] md:text-[19px] font-extrabold text-[#111111]">
                    Veilig bewaard
                  </h4>
                  <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal text-[#111111]/60">
                    Alle facturen worden veilig opgeslagen zodat je voldoet aan de wettelijke 7 jaar bewaarplicht.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://app.bolbaas.nl/registreren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-[15px] md:text-[16px] leading-[20px] md:leading-[22px] font-normal hover:bg-blue-700 px-5 md:px-7 py-3 md:py-3.5 h-auto rounded-xl inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>1 maand gratis</span>
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
                Vestuur bol.com review e-mails
              </h2>
              <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80 max-w-md">
                Verstuur automatisch reviewverzoeken een week na levering met een directe link naar je bol.com productpagina. 
                Verbeter je ranking, verhoog je conversie en blijf binnen alle bol.com richtlijnen!
              </p>
            </div>

          </div>

          {/* Feature Cards Layout */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {/* Left Side - Complex Layout */}
            <div className="grid gap-4 md:gap-6">
              {/* Top Row - Two Cards Side by Side */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Reviewverzoeken */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 min-h-[280px] md:min-h-[320px] flex flex-col overflow-hidden relative">
                  <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight">
                    Reviewverzoeken
                  </h3>
                  <p className="text-sm md:text-[15px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
                    Krijg meer reviews door automatische verzoeken.
                  </p>
                  <Image
                    src="/productenreviews.png"
                    alt="Product reviews dashboard"
                    width={407}
                    height={260}
                    className="absolute w-[160%] h-auto -bottom-6 -right-12 border border-gray-200 shadow-sm rounded-2xl"
                  />
                </div>

                {/* Review QR-codes */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 min-h-[280px] md:min-h-[320px] flex flex-col overflow-hidden relative">
                  <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight">
                    AI reviewanalyse
                  </h3>
                  <p className="text-sm md:text-[15px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
                    AI analyseert je reviews en geeft inzicht in mogelijke product verbeteringen.
                  </p>
                  <Image
                    src="/aianalyse.png"
                    alt="AI review analyse dashboard"
                    width={400}
                    height={300}
                    className="absolute w-[160%] h-auto bottom-8 -right-12 border border-gray-200 shadow-sm rounded-2xl"
                  />
                </div>
              </div>

              {/* Bottom - Review Inzichten Card */}
              <div className="border border-gray-200 rounded-2xl p-8 md:p-10 space-y-6 min-h-[350px] md:min-h-[320px] flex flex-col overflow-hidden" style={{ backgroundColor: '#EAF3FF' }}>
                <h3 className="text-[24px] md:text-[28px] leading-[28px] md:leading-[32px] font-normal text-[#111111] tracking-tight">
                  Uitgebreide review inzichten
                </h3>
                <p className="text-base md:text-[16px] leading-[20px] md:leading-[22px] font-normal text-[#111111]/70 flex-1">
                  Analyseer je reviews en krijg inzicht in positieve en negatieve punten.
                </p>
                {/* Reviews dashboard image */}
                <div className="flex-1 relative">
                  <Image
                    src="/reviewsdashboard.png"
                    alt="Review dashboard met inzichten"
                    width={800}
                    height={600}
                    className="absolute bottom-0 right-0 w-[200%] h-auto rounded-2xl transform translate-x-12 translate-y-32"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Review inzichten (Full Height) */}
            <div className="border border-gray-200 rounded-2xl p-8 md:p-10 space-y-6 flex flex-col min-h-[600px] md:min-h-[700px]" style={{ background: 'linear-gradient(to bottom, white 30%, #EAF3FF)' }}>
              <h3 className="text-[24px] md:text-[28px] leading-[28px] md:leading-[32px] font-normal text-[#111111] tracking-tight">
                Kies uit winnende templates
              </h3>
              <p className="text-base md:text-[16px] leading-[20px] md:leading-[22px] font-normal text-[#111111]/70">
                Gebaseerd op onze database van 12 miljoen keywords en miljoenen verzonden e-mails hebben we de perfecte templates ontwikkeld. Onze data toont welke onderwerpen, timing en formuleringen de hoogste conversie opleveren voor bol.com verkopers.
              </p>
              {/* Email templates image */}
              <div className="flex-1 flex items-end">
                <Image
                  src="/email_templates3.png"
                  alt="Email templates voor reviewverzoeken"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="text-[40px] md:text-[56px] leading-[44px] md:leading-[60px] font-normal text-[#111111] tracking-tight mb-8">
                  Onbeperkt orders
                </h2>
                <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-normal text-[#111111]/70 mb-12">
                  Geen limiet op het aantal orders dat je kunt verwerken. Schaal je business zonder extra kosten. Slechts 11 euro per maand, maandelijks opzegbaar.
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
            <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:sticky lg:top-24">
              <div className="mb-8">
                <p className="text-[12px] leading-[14px] font-normal text-gray-500 tracking-wide uppercase mb-2">
                  ZET JE EERSTE STAPPEN
                </p>
                <h3 className="text-[32px] leading-[32px] font-medium text-black mb-4">
                  Start
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-gray-600">
                  Voor ambitieuze beginners die hun bol avontuur willen lanceren.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[24px] leading-[24px] font-normal text-gray-400 line-through">29</span>
                  <span className="text-[40px] leading-[40px] font-medium text-black">11</span>
                  <span className="text-[14px] leading-[14px] font-normal text-gray-500">/maand</span>
                </div>
                <p className="text-[12px] leading-[14px] font-normal text-gray-500">
                  Maandelijks opzegbaar
                </p>
              </div>

              <div className="mb-8">
                <a 
                  href="https://app.bolbaas.nl/registreren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white font-medium text-[15px] leading-[15px] py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 mb-2 block text-center"
                >
                  1 maand gratis
                </a>
                <p className="text-[12px] leading-[14px] font-normal text-gray-500 text-center">
                  Geen betaalgegevens nodig
                </p>
              </div>

              <div className="space-y-4">
                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-black">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
                        Volledig automatische facturen
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
                        Onbeperkt facturen
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
                        Onbeperkt review e-mails
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
                        Onbeperkt aantal bestellingen
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI & Tools */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="blue" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-black">
                      AI & Tools
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
                        Product tracking (10 producten)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
                        Winst & ACoS calculator
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
                        A/B testen van listings
                      </span>
                    </div>
                  </div>
                </div>

                {/* Store Prestaties */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="purple" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-black">
                      Store prestaties
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
                        Custom dashboards & views
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-gray-400" />
                      <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600">
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
      <section className="relative overflow-hidden bg-[#F6F5F3]">
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
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-[#FBFAF9] py-12 md:py-14 lg:py-24">
        <div className="container mx-auto max-w-2xl px-4 md:px-6">
          <h2 className="text-center text-[28px] md:text-4xl lg:text-5xl leading-[32px] md:leading-[44px] lg:leading-[52px] font-normal text-[#111111] mb-8 md:mb-12 lg:mb-16">
            3 gebieden waar Bolbaas <br/>
            <em>meer functies biedt</em> dan Bolmate
          </h2>

          <div className="space-y-0">
            {/* Item 1 */}
            <ComparisonAccordionItem 
              title="Goedkoper én onbeperkt orders, e-mails en facturen"
              bolbaasContent="Bij Bolbaas betaal je slechts €11 per maand voor onbeperkt orders, e-mails en facturen. De prijs blijft altijd hetzelfde, ongeacht hoeveel orders je verwerkt. Geen verrassingen, geen extra kosten bij groei - gewoon een vaste, lage prijs."
              bolmateContent="Bolmate berekent de abonnementsprijs op basis van het aantal orders dat wordt verwerkt. Deze kosten kunnen oplopen tot €69 per maand voor onbeperkt orders. Naarmate je meer orders verwerkt, stijgen je kosten - dit kan impact hebben op je winstmarge bij groei."
            />

            {/* Item 2 */}
            <ComparisonAccordionItem 
              title="Complete product research suite"
              bolbaasContent="Bolbaas biedt een complete product research suite: 12M+ keyword database met CPC data, Ranking AI voor listing optimalisatie, product tracking van concurrenten, keyword tracking, winst & ACoS calculator, A/B testen van listings, en project management. Alles wat je nodig hebt voor succesvolle product research in één platform."
              bolmateContent="Deze tool biedt prima zoekvolume-inzichten en basis research functionaliteiten. Voor uitgebreidere research zoals keyword databases, product rank tracking en uitgebreide A/B testing zijn wellicht externe tools nodig."
            />

            {/* Item 3 */}
            <ComparisonAccordionItem 
              title="Uitgebreide store prestatie-analyse"
              bolbaasContent="Bolbaas biedt complete store prestatie-inzichten: custom dashboards voor jouw belangrijke KPI's, uitgebreide product prestatie-analyse, Levering Tracker, sales en voorraad voorspellingen, en levering tracking. Krijg het volledige overzicht van je store prestaties om betere beslissingen te maken."
              bolmateContent="Deze tool bevat geen levering tracker, custom dashboards of voorraadvoorspellingen, etc.. Het biedt meestal basis rapportage en product inzichten voor je store prestaties."
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


      {/* Apple-like Feature Grid (minimal, monochrome) */}
      <section className="bg-white pb-6 md:pb-8 lg:pb-14 text-[#111111]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-12 gap-2 md:gap-3">
            {/* Keyword Database - prominent */}
            <Link
              href="/features/tools#bolbaas-database"
              className="col-span-12 md:col-span-4 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}
              aria-label="Keyword database met meer dan 12 miljoen termen"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Database: 12M keywords</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">+ CPC data</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Database →</div>
            </Link>

            {/* Highlight: Review Emails */}
            <Link
              href="/features/automatisering#email-campagnes"
              className="col-span-12 md:col-span-5 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#FBEAE6' }}
              aria-label="Automatische review e-mails"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-medium">Review e‑mails</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">automatisch versturen</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">E‑mail automatisering →</div>
            </Link>

            {/* Ranking AI */}
            <Link
              href="/features/tools#ranking-ai"
              className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}
              aria-label="Ranking AI voor listing optimalisatie"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Ranking AI</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">listing optimalisatie</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">AI tools →</div>
            </Link>

            {/* Quote style tile */}
            <div className="col-span-12 md:col-span-5 rounded-xl md:rounded-2xl border border-black/10 p-2.5 md:p-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out">
              <p className="text-[16px] md:text-[18px] leading-[22px] md:leading-[24px]">
                "Bolbaas biedt alle software die je nodig hebt als bol partner."
              </p>
              <p className="mt-1 md:mt-2 text-[11px] md:text-xs text-black/60">Lucas van gasteren — bol partner</p>
            </div>

            {/* BTW Facturen */}
            <Link
              href="/features/automatisering#store-automatisering"
              className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#FBEAE6' }}
              aria-label="Automatische BTW factuur uploads"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">BTW facturen</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">automatisch versturen</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Automatisering →</div>
            </Link>

            {/* Product Tracking */}
            <Link
              href="/features/tools#product-tracking"
              className="col-span-12 md:col-span-4 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}
              aria-label="Product tracking"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Product tracking</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">prijs, ranking, voorraad</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Tracking →</div>
            </Link>

            {/* Custom Dashboards */}
            <Link
              href="/features/store-prestaties#custom-dashboards"
              className="col-span-12 md:col-span-5 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#F3EEFF' }}
              aria-label="Custom sales dashboards"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Custom dashboards</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">sales data op maat</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Dashboards →</div>
            </Link>

            {/* Sales Voorspellingen */}
            <Link
              href="/features/store-prestaties#sales-voorspellingen"
              className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#F3EEFF' }}
              aria-label="Sales en voorraad voorspellingen"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Voorspellingen</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">stock & sales en omzet</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Forecasting →</div>
            </Link>

            {/* Winst Calculator */}
            <Link
              href="/features/tools#winst-calculator"
              className="col-span-12 md:col-span-4 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}
              aria-label="Winst en ACoS calculator"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Winst calculator</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">+ ACoS berekening</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Calculator →</div>
            </Link>

            {/* A/B Testing */}
            <Link
              href="/features/tools#ab-testing"
              className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}
              aria-label="A/B testen van listings"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">A/B testing</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">listing varianten</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Testing →</div>
            </Link>

            {/* Baaspilot */}
            <Link
              href="/features/automatisering#baaspilot"
              className="col-span-12 md:col-span-4 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#FBEAE6' }}
              aria-label="Baaspilot notificaties"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Baaspilot</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">altijd op de hoogte</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Notificaties →</div>
            </Link>

            {/* Bestellingen */}
            <Link
              href="/features/store-prestaties#bestellingen"
              className="col-span-12 md:col-span-5 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#F3EEFF' }}
              aria-label="Bestellingen analysis"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Bestellingen en product analyse</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">gedetailleerd overzicht</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Bestellingen →</div>
            </Link>

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
                    <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={24} height={24} className="md:w-8 md:h-8 invert" />
                    <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-[#111111]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      BOLBAAS
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 md:gap-2">
                    <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-[#111111]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      BOLMATE
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">200</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">200</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">1</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] md:text-[14px] leading-[14px] md:leading-[16px] font-medium text-gray-700">1</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Research database</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Ranking AI</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Precision product tracking</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Keyword tracking</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
                        </div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Beperkt</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Beperkt</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-8 items-start py-3 md:py-4 px-3 md:px-4 lg:px-8 bg-[#F6F5F3]">
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">BTW</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                    <div className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Baaspilot</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
                          <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={16} height={16} className="invert" />
                          <span>Bolbaas</span>
                        </div>
                        <YesBadge />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
                          <span>Bolmate</span>
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
              Bolbaas Plus vergeleken met Bolmate 200 orders abonnement
            </p>
            <p className="text-center text-[11px] md:text-xs text-gray-500 italic mt-2">
              ² Aantal orders, e-mails en facturen zijn op basis van het abonnement. Huidige getallen zijn gebaseerd op de limieten van het €15 abonnement van Bolmate (op basis van hun prijspagina, september 2025).
            </p>
            <p className="text-center text-[11px] md:text-xs text-gray-500 italic mt-2">
              Deze vergelijking is naar ons beste vermogen objectief samengesteld, maar interpretaties kunnen per gebruiker verschillen.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
