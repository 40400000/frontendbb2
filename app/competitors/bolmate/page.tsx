import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { KiteIcon } from "@/components/ui/kite-icon";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { AnimatedHeroBackground } from "@/components/animated-hero-background";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full min-h-[180vh] flex items-start justify-center pt-32 md:pt-40 pb-24 md:pb-32 bg-white text-[#111111] overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 w-full h-full bg-white" />
        
        <div className="w-full relative z-10 flex flex-col">
          {/* Hero Content */}
          <div className="container max-w-2xl md:max-w-3xl text-center mx-auto pt-4">
            <div className="text-[#111111] text-[14px] leading-[16px] mb-4 flex items-center justify-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              BOLBAAS
              <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={32} height={32} className="invert" />

              <span className="mx-1">VS</span>
              <Image src="/BOLMATELOGO.png" alt="Bolmate" width={32} height={32} />
              BOLMATE
            </div>
            
            <h1 className="mx-auto max-w-[28ch] md:max-w-[32ch] text-[40px] leading-[44px] font-normal tracking-tight mb-6 text-balance">
              Opzoek naar het <i>beste</i> alternatief voor Bolmate?
            </h1>

            <div className="mx-auto max-w-md flex items-center rounded-2xl border border-[#111111]/8 p-1.5 bg-white transition-all">
              <Input
                type="email"
                placeholder="Vul je email in"
                className="flex-grow h-10 border-none bg-transparent px-4 placeholder:text-[#111111]/60"
              />
              <Button className="h-10 rounded-2xl bg-[#111111] px-4 text-white hover:bg-black/80 text-sm font-medium">
                Gratis proberen
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm opacity-70">
              <FaGoogle className="h-4 w-4 text-[#111111]" />
              <div className="flex items-center gap-0.5">
                <IoStar className="h-4 w-4 text-[#111111]" />
                <IoStar className="h-4 w-4 text-[#111111]" />
                <IoStar className="h-4 w-4 text-[#111111]" />
                <IoStar className="h-4 w-4 text-[#111111]" />
                <IoStar className="h-4 w-4 text-[#111111]" />
              </div>
              <span className="text-[#111111]/30">|</span>
              <span>300+ tevreden partners</span>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="container max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Card 1 - Pink Background */}
              <div className="bg-pink-100 rounded-2xl p-6 text-left">
                <div className="text-4xl font-bold text-[#111111] mb-2">12M+</div>
                <div className="text-lg font-medium text-[#111111] mb-2">keywords</div>
                <div className="text-sm text-[#111111]/70">in onze uitgebreide database.</div>
              </div>

              {/* Card 2 - Light Gray Background */}
              <div className="bg-gray-100 rounded-2xl p-6 text-left">
                <div className="text-4xl font-bold text-[#111111] mb-2">300+</div>
                <div className="text-lg font-medium text-[#111111] mb-2">partners</div>
                <div className="text-sm text-[#111111]/70">vertrouwen onze automatisering.</div>
              </div>

              {/* Card 3 - Yellow Background */}
              <div className="bg-yellow-100 rounded-2xl p-6 text-left">
                <div className="text-4xl font-bold text-[#111111] mb-2">3x</div>
                <div className="text-lg font-medium text-[#111111] mb-2">snellere groei</div>
                <div className="text-sm text-[#111111]/70">met AI-gedreven inzichten & automatisering.</div>
              </div>

              {/* Card 4 - Light Gray Background */}
              <div className="bg-gray-100 rounded-2xl p-6 text-left">
                <div className="text-4xl font-bold text-[#111111] mb-2">10+</div>
                <div className="text-lg font-medium text-[#111111] mb-2">uren bespaard</div>
                <div className="text-sm text-[#111111]/70">per week met geautomatiseerde workflows.</div>
              </div>

              {/* Card 5 - Light Purple Background */}
              <div className="bg-purple-100 rounded-2xl p-6 text-left">
                <div className="text-4xl font-bold text-[#111111] mb-2">5-sterren</div>
                <div className="text-lg font-medium text-[#111111] mb-2">ondersteuning</div>
                <div className="text-sm text-[#111111]/70">die je elke stap begeleidt.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-200 rounded-xl" />
            </div>

            {/* Quote content */}
            <div className="flex-1 text-center md:text-left">
              <blockquote
                className="text-[36px] leading-[40px] text-[#111111] mb-3"
                style={{                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                “Bolbaas biedt alle software die je nodig hebt als bol partner.  De emails en facturen automatiseren is een piece of cake.”
              </blockquote>

              <div
                className="text-[#111111]/60 text-[16px] leading-[18px] font-normal"
              >
                Lucas van gasteren, bol partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-like Feature Grid (minimal, monochrome) */}
      <section className="bg-white py-10 md:py-14 text-[#111111]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-2 md:gap-3">
            {/* Keyword Database - prominent */}
            <Link
              href="/features/tools#bolbaas-database"
              className="col-span-12 md:col-span-4 rounded-2xl border border-black/10 p-3 md:p-4 hover:bg-black/[0.02] transition-colors"
              aria-label="Keyword database met meer dan 12 miljoen termen"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[28px] leading-none font-normal">Database: 12M keywords</div>
              </div>
              <div className="mt-1 text-sm text-black/70">+ CPC data</div>
              <div className="mt-3 text-[13px] font-medium">Database →</div>
            </Link>

            {/* Highlight: Review Emails */}
            <Link
              href="/features/automatisering#email-campagnes"
              className="col-span-12 md:col-span-5 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#FBEAE6' }}
              aria-label="Automatische review e-mails"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[28px] leading-none font-medium">Review e‑mails</div>
              </div>
              <div className="mt-1 text-sm text-black/70">automatisch versturen</div>
              <div className="mt-3 text-[13px] font-medium">E‑mail automatisering →</div>
            </Link>

            {/* Ranking AI */}
            <Link
              href="/features/tools#ranking-ai"
              className="col-span-12 md:col-span-3 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#F3EEFF' }}
              aria-label="Ranking AI voor listing optimalisatie"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[28px] leading-none font-normal">Ranking AI</div>
              </div>
              <div className="mt-1 text-sm text-black/70">listing optimalisatie</div>
              <div className="mt-3 text-[13px] font-medium">AI tools →</div>
            </Link>

            {/* Quote style tile */}
            <div className="col-span-12 md:col-span-5 rounded-2xl border border-black/10 p-3 md:p-4">
              <p className="text-[18px] leading-[24px]">
                "Bolbaas biedt alle software die je nodig hebt als bol partner."
              </p>
              <p className="mt-2 text-xs text-black/60">Lucas van gasteren — bol partner</p>
            </div>

            {/* BTW Facturen */}
            <Link
              href="/features/automatisering#store-automatisering"
              className="col-span-12 md:col-span-3 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#EAF3FF' }}
              aria-label="Automatische BTW factuur uploads"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[28px] leading-none font-normal">BTW facturen</div>
              </div>
              <div className="mt-1 text-sm text-black/70">automatisch uploaden</div>
              <div className="mt-3 text-[13px] font-medium">Automatisering →</div>
            </Link>

            {/* Product Tracking */}
            <Link
              href="/features/tools#product-tracking"
              className="col-span-12 md:col-span-4 rounded-2xl border border-black/10 p-3 md:p-4 hover:bg-black/[0.02] transition-colors"
              aria-label="Product tracking"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[28px] leading-none font-normal">Product tracking</div>
              </div>
              <div className="mt-1 text-sm text-black/70">prijs, ranking, voorraad</div>
              <div className="mt-3 text-[13px] font-medium">Tracking →</div>
            </Link>

            {/* Custom Dashboards */}
            <Link
              href="/features/store-prestaties#custom-dashboards"
              className="col-span-12 md:col-span-5 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#F8FAFF' }}
              aria-label="Custom dashboards en views"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[28px] leading-none font-normal">Custom dashboards</div>
              </div>
              <div className="mt-1 text-sm text-black/70">sales data op maat</div>
              <div className="mt-3 text-[13px] font-medium">Dashboards →</div>
            </Link>

            {/* Sales Voorspellingen */}
            <Link
              href="/features/store-prestaties#sales-voorspellingen"
              className="col-span-12 md:col-span-3 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#F3EEFF' }}
              aria-label="Sales en voorraad voorspellingen"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[28px] leading-none font-normal">Voorspellingen</div>
              </div>
              <div className="mt-1 text-sm text-black/70">stock & sales</div>
              <div className="mt-3 text-[13px] font-medium">Forecasting →</div>
            </Link>

            {/* Winst Calculator */}
            <Link
              href="/features/tools#winst-calculator"
              className="col-span-12 md:col-span-4 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#EAF3FF' }}
              aria-label="Winst en ACoS calculator"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[28px] leading-none font-normal">Winst calculator</div>
              </div>
              <div className="mt-1 text-sm text-black/70">+ ACoS berekening</div>
              <div className="mt-3 text-[13px] font-medium">Calculator →</div>
            </Link>

            {/* A/B Testing */}
            <Link
              href="/features/tools#ab-testing"
              className="col-span-12 md:col-span-3 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#EAF3FF' }}
              aria-label="A/B testen van listings"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[28px] leading-none font-normal">A/B testing</div>
              </div>
              <div className="mt-1 text-sm text-black/70">listing varianten</div>
              <div className="mt-3 text-[13px] font-medium">Testing →</div>
            </Link>

            {/* Baaspilot */}
            <Link
              href="/features/automatisering#baaspilot"
              className="col-span-12 md:col-span-2 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#FBEAE6' }}
              aria-label="Baaspilot notificaties"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[28px] leading-none font-normal">Baaspilot</div>
              </div>
              <div className="mt-1 text-sm text-black/70">event alerts</div>
              <div className="mt-3 text-[13px] font-medium">Notificaties →</div>
            </Link>

            {/* Bestellingen */}
            <Link
              href="/features/store-prestaties#bestellingen"
              className="col-span-12 md:col-span-5 rounded-2xl border border-transparent p-3 md:p-4 hover:opacity-95 transition-colors"
              style={{ backgroundColor: '#F3EEFF' }}
              aria-label="Bestellingen analysis"
            >
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[28px] leading-none font-normal">Bestellingen en product analyse</div>
              </div>
              <div className="mt-1 text-sm text-black/70">gedetailleerd overzicht</div>
              <div className="mt-3 text-[13px] font-medium">Bestellingen →</div>
            </Link>

          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="bg-[#111111] text-white py-20 md:py-32" data-dark-section="true">
        <div className="max-w-100 mx-auto text-center">
          <h2 className="text-4xl font-medium mb-6">Product research <br/> op een <i>nieuw</i> niveau.</h2>
          <p className="mx-auto text-white/80 font-normal" style={{ fontSize: '16px', lineHeight: '21px' }}>
          Ontdek welke keywords en producten écht werken, met 12 miljoen geanalyseerde zoektermen en miljarden datapunten. De grootste database voor bol, by far.          </p>
        </div>

        {/* Full width image section */}
        <div className="w-full mt-10">
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

            <div className="mt-8 flex justify-center">
              <button className="bg-white text-[#111111] font-medium text-[14px] leading-[14px] py-3 px-6 rounded-xl flex items-center gap-2 hover:gap-3 transition-all">
                Onze onze database
                <MdOutlineArrowOutward className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
