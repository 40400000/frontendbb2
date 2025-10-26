import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KiteIcon } from "@/components/ui/kite-icon";
import { EmailSignupForm } from "@/components/email-signup-form";
import { Button } from "@/components/ui/button";
import { RankingChart } from "@/components/ranking-chart";
import { CPCChart } from "@/components/cpc-chart";
import AnimatedMovingBadges from "@/components/animated-moving-badges";
import {
  LineChart,
  Search,
  FileText,
  Sparkles,
  ArrowRight,
  Target,
  Package,
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { RevenueChart } from "@/components/revenue-chart";
import { Animatedbadge } from "@/components/animatedbadge";
import { DatabaseGrid } from "@/components/database-grid";

export const metadata: Metadata = {
  title: "Research tools - Baasy",
  description: "AI gedreven research tools, gebaseerd op miljoenen geanalyseerde producten en keywords.",
  openGraph: {
    title: "Research tools - Baasy",
    description: "AI gedreven research tools, gebaseerd op miljoenen geanalyseerde producten en keywords.",
    images: [
      {
        url: 'https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Baasy Research Tools Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Research tools - Baasy",
    description: "AI gedreven research tools, gebaseerd op miljoenen geanalyseerde producten en keywords.",
    images: ['https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png'],
  },
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
              <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                <h1 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight">
                Research tools op een <i>nieuw</i> niveau.

                </h1>

                {/* Subtitle */}
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
                  AI gedreven research tools, gebaseerd op miljoenen geanalyseerde producten en keywords.
                </p>
              </div>

              {/* Email Signup Form */}
              <EmailSignupForm 
                placeholder="Vul je bedrijfsemail in"
                buttonText="Doe gratis research"
                showTestimonial={true}
                sendTo="AW-17372857270/1maandcta"
              />
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/databasen6.png"
                alt="Database screenshot"
                width={1200}
                height={1200}
                quality={90}
                className="rounded-xl w-full h-auto md:scale-110 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section id="baasy-database" className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            {/* Badge above heading */}
            <div className="flex justify-start mb-6">
              <div 
                className="pl-2 pr-3 py-1 rounded-xl text-xs font-semibold text-gray-700 flex items-center gap-2 bg-white border border-gray-200"
              >
                <Animatedbadge label="NIEUW" />
                <span>12M+ keywords</span>
              </div>
            </div>
            
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-4 md:mb-5">
              Research Database
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
              Ontdek welke keywords en producten écht werken, met 12 miljoen geanalyseerde zoektermen en miljarden datapunten. De grootste database, by far.
            </p>
          </div>

          {/* Animated Badges */}


          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-5">
              {/* Feature Block */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                    <span className="hidden sm:inline">12 MILJOEN GEANALYSEERDE KEYWORDS</span>
                    <span className="sm:hidden">12M+ KEYWORDS</span>
                  </span>
                </div>
                <h3 className="text-[24px] md:text-[45px] leading-[28px] md:leading-[45px] font-normal text-[#111111] tracking-tight md:max-w-lg">
                 Analyseer de markt met database.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 md:max-w-md">
                  Weet precies welke keywords belangrijk zijn, waar vraag en aanbod verschillen, en hoe biedingen effect hebben op campagne strategieën.
                </p>
              </div>


              

              {/* Action Buttons */}
              <div className="flex justify-start">
                <Button 
                  asChild
                  className="bg-[#111111] text-white text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-[#111111]/90 px-3 md:px-6 py-2.5 md:py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.baasy.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Probeer nu gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
                {/* <Button 
                  variant="outline"
                  asChild
                  className="text-[#111111] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal border-gray-300 hover:bg-gray-50 px-4 md:px-6 py-2.5 md:py-3 h-auto bg-white rounded-xl"
                >
                  <Link href="/prijzen">
                    Prijzen
                  </Link>
                </Button> */}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full overflow-hidden">
              <div className="mb-16">
                <AnimatedMovingBadges />
              </div>
            </div>
          </div>



          {/* Database Cards Grid */}
          <DatabaseGrid />

        </div>
      </section>

      {/* Product Tracking Section */}
      <section id="product-tracking" className="relative overflow-hidden bg-[#111111] py-16 md:py-24 lg:py-32" data-dark-section="true">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-white tracking-tight mb-4 md:mb-5">
              Product & keyword tracking
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 max-w-2xl">
              Volg je producten en die van concurrenten nauwkeurig. Zie precies hoe rankings veranderen en waarom, zodat je altijd voorop loopt.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-5">
              {/* Feature Block */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-white tracking-wide uppercase">
                    PRODUCT RANKINGS
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-white tracking-tight md:max-w-lg">
                  Track producten van jezelf en concurrenten.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 md:max-w-md">
                  Weet precies wat concurrenten doen, en hoe rankings veranderen. Kopieer advertentie strategieën.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-start">
                <Button 
                  asChild
                  className="bg-white text-[#111111] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-white/90 px-3 md:px-6 py-2.5 md:py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.baasy.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>14 dagen gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking-QnWkZ19t2pN2FKO0Lr7pl3237LjxMZ.png"
                alt="Product tracking screenshot"
                width={1200}
                height={960}
                quality={90}
                className="rounded-xl w-full h-auto md:scale-110 drop-shadow-lg"
              />
            </div>
          </div>

          {/* 4-Column Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">01</span>
              </div>
              
              <div className="space-y-3 flex-grow">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Concurrentie & koopblok monitoring
                </h3>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-[14px] leading-[18px] font-normal text-white/50">
                    Missen van kritieke veranderingen bij concurrenten die je marktpositie bedreigen?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[12px] leading-[16px] font-normal text-white py-1 bg-white/10 px-3 rounded-xl mt-6">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={32} 
                  height={32} 
                  className="flex-shrink-0"
                />
                <span>→ Zie alle concurrentie bewegingen real-time</span>
              </div>
            </div>

            {/* Feature 2 - Special Tracking Methods Card */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">02</span>
              </div>
              
              <div className="space-y-3 flex-grow">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Twee tracking opties
                </h3>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-[14px] leading-[18px] font-normal text-white/50">
                    Kies de tracking methode die past bij jouw behoeften en doelen
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[12px] leading-[16px] font-normal text-white py-1 bg-white/10 px-3 rounded-xl mt-6">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={32} 
                  height={32} 
                  className="flex-shrink-0"
                />
                <span>→ Kies de beste tracking methode voor jou</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">03</span>
              </div>
              
              <div className="space-y-3 flex-grow">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Verbeter rankings
                </h3>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-[14px] leading-[18px] font-normal text-white/50">
                    Niet weten welke wijzigingen daadwerkelijk werken voor betere rankings?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[12px] leading-[16px] font-normal text-white py-1 bg-white/10 px-3 rounded-xl mt-6">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={32} 
                  height={32} 
                  className="flex-shrink-0"
                />
                <span>→ Data-driven optimalisatie beslissingen</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">04</span>
              </div>
              
              <div className="space-y-3 flex-grow">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Bekijk waar je wel en niet zichtbaar bent
                </h3>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-[14px] leading-[18px] font-normal text-white/50">
                    Geleidelijk marktaandeel verliezen zonder het door te hebben?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[12px] leading-[16px] font-normal text-white py-1 bg-white/10 px-3 rounded-xl mt-6">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={32} 
                  height={32} 
                  className="flex-shrink-0"
                />
                <span>→ Behoud en vergroot je marktpositie</span>
              </div>
            </div>
          </div>

          {/* Keyword Tracking Subsection */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 mt-16">
            {/* Left Image */}
            <div className="relative pr-8">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/savedkeywords-KLc9pX2W931tXCNUfAiXpFc6R7Gvts.png"
                alt="Keyword tracking screenshot"
                width={1200}
                height={960}
                quality={90}
                className="rounded-xl w-full h-auto md:scale-110 drop-shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-5">
              {/* Feature Block */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-white tracking-wide uppercase">
                    TRACK KEYWORDS
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-white tracking-tight md:max-w-lg">
                  Volg keywords uit onze database.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 md:max-w-md">
                  Bekijk dagelijkse updates en trends, over biedingen, volume, trends en nieuwe keywords.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-start">
                <Button 
                  asChild
                  className="bg-white text-[#111111] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-white/90 px-3 md:px-6 py-2.5 md:py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.baasy.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>14 dagen gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Problem vs Solution Comparison */}
         
        </div>
      </section>

      {/* Ranking AI Section */}
      <section id="ranking-ai" className="relative overflow-hidden bg-[#F6F5F3] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-4 md:mb-5">
              Ranking AI
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
              Onze AI analyseert de best presterende listings, klantgedrag en zoektrends voor jouw keywords en creëert automatisch de perfecte listing. Gebaseerd op 12 miljoen geanalyseerde keywords.
            </p>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl mt-3 md:mt-4">
              De perfecte listing zorgt voor meer zichtbaarheid en meer omzet.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-5">
              {/* Feature Block */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                    RANKING AI
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-[#111111] tracking-tight md:max-w-lg">
                  Automatisch de perfecte listing.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 md:max-w-md">
                  AI analyseert de best presterende listings en creëert automatisch de perfecte listing voor jouw product.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-start">
                <Button 
                  asChild
                  className="bg-[#111111] text-white text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-[#111111]/90 px-3 md:px-6 py-2.5 md:py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.baasy.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>14 dagen gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Chart */}
            <div className="relative">
              <RankingChart />
            </div>
          </div>

          {/* 4-Step Process Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="space-y-4 p-4 rounded-sm bg-white hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">STAP 01</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                  Perfecte keywords vinden
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                  Gebruik de Research Database om de meest effectieve keywords voor je product te identificeren
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-[#111111]">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={20} 
                  height={20} 
                  className="flex-shrink-0"
                />
                <span>→ 12M+ keywords beschikbaar</span>
              </div>
            </div>

            {/* Step 2 - Special AI Step */}
            <div className="space-y-4 p-4 rounded-sm bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] leading-[12px] font-normal text-blue-600 tracking-wide uppercase">STAP 02</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                  Ranking AI
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                  Ranking AI analyseert automatisch de best presterende listings, zoektrends, klantgedrag en meer
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-[#111111]">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={20} 
                  height={20} 
                  className="flex-shrink-0"
                />
                <span>→ Ranking AI analyseert de markt</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 p-4 rounded-sm bg-white hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">STAP 03</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                  Geoptimaliseerde listing
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                  AI genereert de perfecte listing (titel en beschrijving) gebaseerd op succesvolle patronen
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-[#111111]">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={20} 
                  height={20} 
                  className="flex-shrink-0"
                />
                <span>→ Klaar voor implementatie</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-4 p-4 rounded-sm bg-white hover:bg-gray-50 transition-colors border border-gray-200">
              <div className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">STAP 04</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                  Ranking verbetering
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                  Monitor je ranking prestaties van de nieuwe listing, en vraag Ranking AI om verandering waar nodig
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-[#111111]">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={20} 
                  height={20} 
                  className="flex-shrink-0"
                />
                <span>→ Top 10 rankings mogelijk</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CPC Tracker Section */}
      <section id="cpc-tracker" className="relative overflow-hidden bg-[#111111] py-16 md:py-24 lg:py-32" data-dark-section="true">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-white tracking-tight mb-4 md:mb-5">
              CPC Tracker
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 max-w-2xl">
              Optimaliseer je biedstrategie met data, volg niet alleen het gemiddelde bod. Baasy analyseert elk keyword elk uur om het beste bod te bepalen.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-5">
              {/* Feature Block */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-white tracking-wide uppercase">
                    CPC TRACKER
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-white tracking-tight md:max-w-lg">
                  Win keywords met lagere biedingen.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 md:max-w-md">
                  Baasy analyseert elk keyword elk uur om het beste bod te bepalen. Win keywords met lagere biedingen, verlaag ACoS en verhoog winst.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-start">
                <Button 
                  asChild
                  className="bg-white text-[#111111] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-white/90 px-3 md:px-6 py-2.5 md:py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.baasy.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>14 dagen gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Chart */}
            <div className="relative">
              <CPCChart />
            </div>
          </div>

          {/* 4-Column Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="space-y-4 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">01</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Real-time biedingen
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Zie hoe biedingen veranderen per keyword en per uur
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-white">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={20} 
                  height={20} 
                  className="flex-shrink-0"
                />
                <span>→ Elke uur nieuwe data</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">02</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Optimale biedstrategie
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Krijg advies over het beste bod per keyword
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-white">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={20} 
                  height={20} 
                  className="flex-shrink-0"
                />
                <span>→ Data-driven beslissingen</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">03</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  ACoS optimalisatie
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Verlaag je ACoS door slimmer te bieden
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-white">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={20} 
                  height={20} 
                  className="flex-shrink-0"
                />
                <span>→ Hogere winstmarges</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">04</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Concurrentie voordeel
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Win meer keywords met lagere biedingen
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-white">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Baasy logo" 
                  width={20} 
                  height={20} 
                  className="flex-shrink-0"
                />
                <span>→ Meer clicks, minder kosten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features Section */}
      <section id="andere-features" className="relative overflow-hidden bg-[#F6F5F3] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-4 md:mb-5">
              Andere features
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
              Automatiseer je strategie met slimme tools die je tijd besparen en je winst verhogen.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Feature 1 - A/B Testing */}
            <div id="ab-testing" className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">01</span>
                </div>
                <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111]">
                  A/B testen
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
                  Test nieuwe listings, Baasy houdt automatisch de prestaties bij. Zo weet je altijd wat de beste listing is.
                </p>
              </div>

              <div className="relative">
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/abtest6.png"
                  alt="A/B Testing"
                  width={1200}
                  height={675}
                  quality={90}
                  className="rounded-xl w-full h-auto drop-shadow-md"
                />
              </div>
            </div>

            {/* Feature 2 - Winst & ACoS Calculator */}
            <div id="winst-calculator" className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">02</span>
                </div>
                <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111]">
                  Winst & ACoS calculator
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
                  Weet precies hoeveel winst een product oplevert en ACoS per keyword. Verhoog je winst.
                </p>
              </div>

              <div className="relative">
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/winst-calculator-3-EwC1kxj0Odx5l91wIfWNyeO8yBeKid.png"
                  alt="Winst & ACoS Calculator"
                  width={1200}
                  height={675}
                  quality={90}
                  className="rounded-xl w-full h-auto drop-shadow-md"
                />
              </div>
            </div>

            {/* Feature 3 - Project Management */}
            <div id="project-management" className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">03</span>
                </div>
                <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111]">
                  Project management
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
                  Breng getrackte producten en keywords onder in verschillende projecten. Maak een project aan voor een product research of voor een klant van jouw agency.
                </p>
              </div>

    
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center mt-16">
            <Button 
              asChild
              className="bg-[#111111] text-white text-[14px] leading-[20px] font-normal hover:bg-[#111111]/90 px-6 py-3 h-auto rounded-xl"
            >
              <a 
                href="https://app.baasy.nl/registreren"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>14 dagen gratis</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
