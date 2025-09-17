import Link from "next/link";
import { KiteIcon } from "@/components/ui/kite-icon";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { AnimatedHeroBackground } from "@/components/animated-hero-background";
import Image from "next/image";
import { EmailSignupForm } from "@/components/email-signup-form";
import { ScrollVideoEffect } from "@/components/scroll-video-effect";
import { Animatedbadge } from "@/components/animatedbadge";

export default function HomePage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full min-h-[100vh] md:min-h-[180vh] flex items-start justify-center pt-16 md:pt-28 pb-20 md:pb-32 bg-white text-[#111111] overflow-hidden px-4 md:px-6">
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
              De <em className="italic">AI</em> software oplossing voor bol partners.
            </h1>

            <p className="mx-auto max-w-xl text-sm md:text-lg leading-[20px] md:leading-[24px] opacity-70 mb-6 md:mb-8">
              Automatiseer je bol‑store, krijg data‑inzichten en groei sneller.
            </p>

            <EmailSignupForm 
              buttonText="Gratis proberen"
              placeholder="Vul je email in"
              showTestimonial={true}
            />
          </div>

          {/* Hero Video */}
          <ScrollVideoEffect />
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-12 md:py-22">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <Image
                src="/lvg.jpeg"
                alt="Lucas van gasteren"
                width={128}
                height={128}
                className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover"
              />
            </div>

            {/* Quote content */}
            <div className="flex-1 text-center md:text-left">
              <blockquote
                className="text-[30px] md:text-[36px] leading-[34px] md:leading-[40px] text-[#111111] mb-2 md:mb-3"
                style={{                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                “De emails en facturen automatiseren is een piece of cake.”
              </blockquote>

              <div
                className="text-[#111111]/60 text-[14px] md:text-[16px] leading-[16px] md:leading-[18px] font-normal"
              >
                Lucas van gasteren, bol partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-like Feature Grid (minimal, monochrome) */}
      <section className="bg-white pb-8 md:pb-14 text-[#111111]">
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
              aria-label="Custom dashboards en views"
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
          <p className="mx-auto text-white/80 font-normal text-sm md:text-base leading-[18px] md:leading-[21px]">
          Ontdek welke keywords en producten écht werken, met 12 miljoen geanalyseerde zoektermen en miljarden datapunten. De grootste database voor bol, by far.          </p>
        </div>

        {/* Full width image section */}
        <div className="w-full mt-8 md:mt-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/databasen6.png"
                alt="Database screenshot"
                width={1200}
                height={675}
                quality={95}
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
    </>
  );
}
