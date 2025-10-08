import Link from "next/link";
import { KiteIcon } from "@/components/ui/kite-icon";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { AnimatedHeroBackground } from "@/components/animated-hero-background";
import Image from "next/image";
import { EmailSignupForm } from "@/components/email-signup-form";
import { ScrollVideoEffect } from "@/components/scroll-video-effect";
import { Animatedbadge } from "@/components/animatedbadge";
import { Automatiseringanimation } from "@/components/automatisering-animation";
import { ClickableVideo } from "@/components/clickable-video";

export const metadata = {
  title: "Bolbaas - AI software voor bol.com partners | Automatisering & Keyword Research",
  description: "AI software voor bol.com partners: automatiseer emails & facturen, 12M+ keyword database, product tracking. Verhoog omzet met data-inzichten en store automatisering. Probeer 1 maand gratis.",
  keywords: [
    "bol.com partner software",
    "bol automatisering", 
    "keyword research bol",
    "product tracking bol",
    "email automatisering bol",
    "factuur automatisering",
    "BTW facturen bol",
    "bol store management",
    "AI tools bol partners",
    "bol data analyse",
    "ranking optimalisatie bol",
    "bol omzet verhogen"
  ],
  openGraph: {
    title: "Bolbaas - AI software voor bol.com partners",
    description: "Automatiseer je bol.com store met AI: emails, facturen, keyword research en product tracking. 12M+ keywords database. Probeer 1 maand gratis.",
    images: [
      {
        url: "https://bolbaas.nl/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Bolbaas - AI software voor bol.com partners"
      }
    ]
  }
};

export default function HomePage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full md:min-h-[180vh] flex items-start justify-center pt-16 md:pt-28 pb-10 md:pb-32 bg-white text-[#111111] overflow-hidden px-4 md:px-6">
        {/* Animated Background with White Circle Overlay */}
        <div className="absolute inset-0 w-full h-full">
          {/* Full Animation Background */}
            <div className="absolute inset-0 w-full h-full opacity-90">
            <AnimatedHeroBackground
              color1="232,64,13"
              color2="255,238,216"
              color3="208,178,255"
            />
          </div>
          
          {/* U-Shaped White Overlay with stronger white in top ~35% */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom,
                  rgba(255, 255, 255, 0.9) 0%,
                  rgba(255, 255, 255, 0.9) 20%,
                  rgba(255, 255, 255, 0.85) 35%,
                  rgba(255, 255, 255, 0.55) 50%,
                  rgba(255, 255, 255, 0.3) 70%,
                  rgba(255, 255, 255, 0.12) 85%,
                  transparent 100%
                ),
                linear-gradient(to right,
                  rgba(255, 255, 255, 0.02) 0%,
                  rgba(255, 255, 255, 0.08) 15%,
                  rgba(255, 255, 255, 0.2) 25%,
                  rgba(255, 255, 255, 0.35) 35%,
                  rgba(255, 255, 255, 0.55) 45%,
                  rgba(255, 255, 255, 0.75) 50%,
                  rgba(255, 255, 255, 0.55) 55%,
                  rgba(255, 255, 255, 0.35) 65%,
                  rgba(255, 255, 255, 0.2) 75%,
                  rgba(255, 255, 255, 0.08) 85%,
                  rgba(255, 255, 255, 0.02) 100%
                )`
            }}
          />
          
          {/* U-Shaped Grainy Overlay */}
          <div 
            className="absolute inset-0 w-full h-full opacity-8 mix-blend-overlay pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom,
                  rgba(255, 255, 255, 0.2) 0%,
                  rgba(255, 255, 255, 0.15) 30%,
                  rgba(255, 255, 255, 0.1) 60%,
                  rgba(255, 255, 255, 0.05) 85%,
                  transparent 100%
                ),
                linear-gradient(to right,
                  rgba(255, 255, 255, 0.02) 0%,
                  rgba(255, 255, 255, 0.08) 30%,
                  rgba(255, 255, 255, 0.15) 45%,
                  rgba(255, 255, 255, 0.2) 50%,
                  rgba(255, 255, 255, 0.15) 55%,
                  rgba(255, 255, 255, 0.08) 70%,
                  rgba(255, 255, 255, 0.02) 100%
                )`,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        <div className="w-full relative z-10 flex flex-col">
          {/* Hero Content */}
          <div className="container max-w-2xl md:max-w-3xl text-center mx-auto pt-4">
            <div className="flex justify-center mb-5 md:mb-6">
              <Link
                href="/features/tools#bolbaas-database"
                className="inline-flex items-center gap-1.5 md:gap-2 bg-white rounded-xl px-1.5 py-1.5 shadow-md hover:shadow-lg transition-shadow group"
              >
                <span className="inline-flex items-center bg-[#111111] text-white rounded-xl px-1.5 md:px-2 py-0.5 text-[11px] md:text-xs font-semibold">
                  NIEUW
                </span>
                <span className="text-xs md:text-sm font-medium text-[#111111]">Research database: 12 miljoen+ keywords</span>
                <MdOutlineArrowOutward className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <h1 className="mx-auto max-w-[28ch] md:max-w-[32ch] text-[32px] md:text-[48px] leading-[36px] md:leading-[48px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
            Groei je Bol business sneller met slimme automatisering & research tools
            </h1>

            <p className="mx-auto max-w-xl text-sm md:text-lg leading-[20px] md:leading-[24px] opacity-80 mb-6 md:mb-8">
            Automatiseer BTW facturen & e-mails <br /> en ontdek winstgevende producten.
            </p>

            <EmailSignupForm 
              buttonText="Gratis proberen"
              placeholder="Vul je email in"
              showTestimonial={true}
              sendTo="AW-17372857270/1maandcta"
            />
          </div>

          {/* Hero Video */}
          <ScrollVideoEffect />
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
                <ClickableVideo
                  videoSrc="/facturen_movie.mp4"
                  className="rounded-xl w-full h-auto drop-shadow-lg"
                  ariaLabel="BTW factuur automation demo showing automatic invoice sending to bol.com"
                />
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
                  className="bg-[#111111] text-white text-[15px] md:text-[16px] leading-[20px] md:leading-[22px] font-normal hover:bg-[#111111]/90 px-5 md:px-7 py-3 md:py-3.5 h-auto rounded-xl inline-flex items-center justify-center gap-2 transition-all"
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

      {/* Dark Section */}
      <section className="bg-[#111111] text-white py-16 md:py-32" data-dark-section="true">
        <div className="max-w-100 mx-auto text-center">
          {/* Badge above heading */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div 
              className="pl-2 pr-3 py-1 rounded-xl text-xs font-semibold text-white flex items-center gap-2"
              style={{ backgroundColor: '#272625' }}
            >
              <Animatedbadge label="NIEUW" />
              <span>Research database</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-5 md:mb-6">Product research <br/> op een <i>nieuw</i> niveau.</h2>
          <p className="mx-auto text-white/85 font-normal text-sm md:text-base leading-[18px] md:leading-[21px]">
          Ontdek welke keywords en producten écht werken, met 12 miljoen geanalyseerde zoektermen en miljarden datapunten. De grootste database voor bol, by far.          </p>
        </div>

        {/* Full width image section */}
        <div className="w-full mt-8 md:mt-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/db-1.png"
                alt="Bolbaas keyword database screenshot showing 12 million+ keywords with CPC data for bol.com product research"
                width={1200}
                height={675}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-6 md:mt-8 flex justify-center">
              <button className="bg-white text-[#111111] font-medium text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] py-2.5 md:py-3 px-5 md:px-6 rounded-xl flex items-center gap-2 hover:gap-3 transition-all">
                Onze database
                <MdOutlineArrowOutward className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-like Feature Grid (minimal, monochrome) */}
      <section className="bg-white pt-10 md:pt-16 pb-12 md:pb-20 text-[#111111]">
        <div className="container mx-auto px-4">
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
              <div className="mt-1 text-xs md:text-sm text-black/80">+ CPC data</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">automatisch versturen</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">listing optimalisatie</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">AI tools →</div>
            </Link>

            {/* Quote style tile */}
            <div className="col-span-12 md:col-span-5 rounded-xl md:rounded-2xl border border-black/10 p-2.5 md:p-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out">
              <p className="text-[16px] md:text-[18px] leading-[22px] md:leading-[24px]">
                "Bolbaas biedt alle software die je nodig hebt als bol partner."
              </p>
              <p className="mt-1 md:mt-2 text-[11px] md:text-xs text-black/75">Lucas van gasteren — bol partner</p>
            </div>

            {/* BTW Facturen */}
            <Link
              href="/features/automatisering#store-automatisering"
              className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#FBEAE6' }}
              aria-label="Automatische BTW factuur versturen"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">BTW facturen</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/80">automatisch versturen</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">prijs, ranking, voorraad</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">sales data op maat</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">stock & sales en omzet</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">+ ACoS berekening</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">listing varianten</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">altijd op de hoogte</div>
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
              <div className="mt-1 text-xs md:text-sm text-black/80">gedetailleerd overzicht</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Bestellingen →</div>
            </Link>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-10 md:mb-14 text-center">
            Veelgestelde vragen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
            {/* FAQ 1 */}
            <div className="space-y-3">
              <h3 className="text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] font-semibold text-[#111111]">
                Werkt Bolbaas ook met Fulfilment by Bol (Lvb / Vvb)?
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-[#111111]/70">
                Absoluut! Bolbaas ondersteunt zowel eigen verzending als Lvb / Vvb bestellingen. Voor alle bestellingen wordt automatisch een BTW-factuur aangemaakt en een reviewverzoek verstuurd.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="space-y-3">
              <h3 className="text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] font-semibold text-[#111111]">
                Hoe verbind ik mijn bol.com account?
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-[#111111]/70">
                Via de officiële bol.com retailer API koppel je veilig je verkoopaccount aan Bolbaas. Het proces is eenvoudig en je behoudt volledige controle over je gegevens.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="space-y-3">
              <h3 className="text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] font-semibold text-[#111111]">
                Waarom stuurt bol.com zelf geen facturen?
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-[#111111]/70">
                Bol.com is een platform dat kopers en verkopers met elkaar verbindt, maar is geen partij in de transactie. Als verkoper ben je zelf verantwoordelijk voor het aanmaken en versturen van facturen. Ook moet je de BTW afdragen aan de belastingdienst, ongeacht of een klant een factuur vraagt.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="space-y-3">
              <h3 className="text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] font-semibold text-[#111111]">
                Kan ik mijn eigen huisstijl gebruiken?
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-[#111111]/70">
                Ja! Facturen worden automatisch gegenereerd met jouw bedrijfslogo en bedrijfsgegevens. Voor reviewverzoeken kun je zelfs personaliseren met het specifieke product dat je klant heeft gekocht, voor een persoonlijke touch.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="space-y-3">
              <h3 className="text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] font-semibold text-[#111111]">
                Wat ziet mijn klant als afzender?
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-[#111111]/70">
                Klanten ontvangen e-mails met als afzender: "Van Jouw store via bol.com". Alle mails worden verstuurd via onze servers met een veilig bol.com e-mailadres, dus je hoeft je geen zorgen te maken over SMTP-instellingen of serverbelasting.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="space-y-3">
              <h3 className="text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] font-semibold text-[#111111]">
                Ondersteunt Bolbaas de kleineondernemersregeling?
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-[#111111]/70">
                Zeker! Bij gebruik van de kleineondernemersregeling (KOR) kun je met één klik alle BTW-percentages naar 0% zetten. De juiste KOR-vermelding wordt automatisch op al je facturen toegepast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-mail Campagnes Section */}

    </>
  );
}
