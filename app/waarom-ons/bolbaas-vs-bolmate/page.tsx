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
      <section className="relative z-20 w-full flex items-start justify-center pt-16 md:pt-40 pb-20 md:pb-32 bg-[#FBFAF9] text-[#111111] overflow-hidden px-4 md:px-6">
        {/* Simple Background */}
        <div className="absolute inset-0 w-full h-full bg-[#FBFAF9]" />
        
        <div className="w-full relative z-10 flex flex-col">
          {/* Hero Content */}
          <div className="container max-w-2xl md:max-w-3xl text-center mx-auto pt-4">
            <div className="text-[#111111] text-[14px] leading-[16px] mb-4 flex items-center justify-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              BOLBAAS
              <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={32} height={32} className="invert" />

              <span className="mx-1">VS</span>
              BOLMATE
            </div>
            
            <h1 className="mx-auto max-w-[28ch] md:max-w-[32ch] text-[32px] md:text-[40px] leading-[36px] md:leading-[44px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
              Opzoek naar het <i>beste</i> alternatief voor Bolmate?
            </h1>

            <EmailSignupForm sendTo="AW-17372857270/1maandcta" />

            <div className="mt-4 flex items-center justify-center gap-2 text-xs md:text-sm opacity-70">
              <FaGoogle className="h-4 w-4 text-[#111111]" />
              <div className="flex items-center gap-0.5">
                <IoStar className="h-4 w-4 text-[#111111]" />
                <IoStar className="h-4 w-4 text-[#111111]" />
                <IoStar className="h-4 w-4 text-[#111111]" />
                <IoStar className="h-4 w-4 text-[#111111]" />
                <IoStar className="h-4 w-4 text-[#111111]" />
              </div>
              <span className="text-[#111111]/50">|</span>
              <span>Tevreden partners</span>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="container max-w-6xl mx-auto mt-12 md:mt-16">
            <h2 className="text-center text-base md:text-lg font-normal text-[#111111]/75 mb-3 md:mb-4">
              Waarom mensen voor Bolbaas kiezen¹
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
              {/* Card 1 - Pink Background */}
              <div className="bg-pink-100 rounded-xl md:rounded-2xl p-4 md:p-6 text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#111111] mb-1 md:mb-2">12M+</div>
                <div className="text-base md:text-lg font-medium text-[#111111] mb-1 md:mb-2">keywords</div>
                <div className="text-xs md:text-sm text-[#111111]/80">in onze uitgebreide database.</div>
              </div>

              {/* Card 2 - Light Gray Background */}
              <div className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#111111] mb-1 md:mb-2">Tevreden</div>
                <div className="text-base md:text-lg font-medium text-[#111111] mb-1 md:mb-2">partners</div>
                <div className="text-xs md:text-sm text-[#111111]/80">vertrouwen onze automatisering.</div>
              </div>

              {/* Card 3 - Yellow Background */}
              <div className="bg-yellow-100 rounded-xl md:rounded-2xl p-4 md:p-6 text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#111111] mb-1 md:mb-2">3x</div>
                <div className="text-base md:text-lg font-medium text-[#111111] mb-1 md:mb-2">snellere groei</div>
                <div className="text-xs md:text-sm text-[#111111]/80">met AI-gedreven inzichten & automatisering.</div>
              </div>

              {/* Card 4 - Light Gray Background */}
              <div className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#111111] mb-1 md:mb-2">10+</div>
                <div className="text-base md:text-lg font-medium text-[#111111] mb-1 md:mb-2">uren bespaard</div>
                <div className="text-xs md:text-sm text-[#111111]/80">per week met store automatisering.</div>
              </div>

              {/* Card 5 - Light Purple Background */}
              <div className="bg-purple-100 rounded-xl md:rounded-2xl p-4 md:p-6 text-left">
                <div className="text-3xl md:text-4xl font-bold text-[#111111] mb-1 md:mb-2">5-sterren</div>
                <div className="text-base md:text-lg font-medium text-[#111111] mb-1 md:mb-2">ondersteuning</div>
                <div className="text-xs md:text-sm text-[#111111]/80">die je elke stap begeleidt.</div>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-[11px] md:text-xs text-[#111111]/70">
                ¹ Dit zijn algemene feiten die niet vergeleken worden met Bolmate
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Automatisering Hero Section */}
      <section className="relative overflow-hidden bg-[#FDFDFC]">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            {/* Left Content */}
            <div className="text-left">
              {/* Top Text with Kite Icon */}
              <div className="flex items-center gap-2 mb-2">
                <KiteIcon variant="blue" size={11} />
                <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                  Automatisering
                </span>
              </div>

              {/* Main Title */}
              <div className="space-y-5 mb-8">
                <h1 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight">
                Automatiseer je store, focus op <i>groei</i>.

                </h1>

                {/* Features List */}
                <div className="space-y-2 md:space-y-3 max-w-2xl">
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
                      BTW automatisering
                    </span>
                  </div>
                </div>
              </div>

              {/* Email Signup Form */}
              <EmailSignupForm 
                placeholder="Vul je bedrijfsemail in"
                buttonText="Demo proberen"
                showTestimonial={false}
                align="left"
                sendTo="AW-17372857270/1maandcta"
              />
            </div>

            {/* Right Content - Animation/Visual */}
            <div className="lg:pl-8">
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
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <Image
                src="/lvg.jpeg"
                alt="Lucas van Gasteren"
                width={128}
                height={128}
                className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover"
              />
            </div>

            {/* Quote content */}
            <div className="flex-1 text-center md:text-left">
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
              bolbaasContent="Bij Bolbaas betaal je slechts €12 per maand voor onbeperkt orders, e-mails en facturen. De prijs blijft altijd hetzelfde, ongeacht hoeveel orders je verwerkt. Geen verrassingen, geen extra kosten bij groei - gewoon een vaste, lage prijs."
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
        </div>
      </section>

      {/* E-mail Campagnes Section */}
      <section id="email-campagnes" className="relative overflow-hidden bg-white py-10 md:py-14 lg:py-18">
        <div className="container mx-auto px-4">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Video */}
            <div className="relative order-last lg:order-first">
              <video
                src="https://glrob7hsjras0ozc.public.blob.vercel-storage.com/emailsauto.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl w-full h-auto scale-90 drop-shadow-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-5">
              {/* Feature Block */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                    E-MAIL CAMPAGNES
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-[#111111] tracking-tight max-w-lg">
                  Verhoog reviews en voorkom klantvragen.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80 max-w-md">
                  Automatische e-mail campagnes. Maak e-mails precies zoals je het wilt, of gebruik een van onze templates.
                </p>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://app.bolbaas.nl/registreren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-[#111111]/90 px-4 md:px-6 py-2.5 md:py-3 h-auto rounded-xl inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>1 maand gratis</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTW Facturen Automatisering Section */}
      <section id="store-automatisering" className="relative overflow-hidden bg-white py-10 md:py-14 lg:py-18">
        <div className="container mx-auto px-4">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-5">
              {/* Feature Block */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                    BTW FACTUREN
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-[#111111] tracking-tight max-w-lg">
                 Automatisch BTW facturen uploaden naar bol.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/80 max-w-md">
                  Geen tijd meer besteden aan het beantwoorden van klantvragen omtrent facturen. Bolbaas uploadt automatisch BTW facturen naar bol en slaat deze op in jouw database.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://app.bolbaas.nl/registreren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-[#111111]/90 px-4 md:px-6 py-2.5 md:py-3 h-auto rounded-xl inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>1 maand gratis</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative">
              <video
                src="https://glrob7hsjras0ozc.public.blob.vercel-storage.com/facturen.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl w-full h-auto scale-95 drop-shadow-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
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
              <div className="mt-1 text-xs md:text-sm text-black/70">automatisch uploaden</div>
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
