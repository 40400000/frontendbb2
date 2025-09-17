import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KiteIcon } from "@/components/ui/kite-icon";
import { EmailSignupForm } from "@/components/email-signup-form";
import { Button } from "@/components/ui/button";
import { SalesForecastChart } from "@/components/sales-forecast-chart";
import {
  LineChart,
  Search,
  FileText,
  Sparkles,
  ArrowRight,
  Target,
  Package,
  Upload,
  Database,
  ShoppingCart,
  Download,
} from 'lucide-react';
import { IoStar } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Store prestaties - Bolbaas",
  description: "Krijg diepgaande data inzichten in je bol prestaties met Bolbaas. Analyseer product prestaties, maak custom dashboards en beheer bestellingen.",
  openGraph: {
    title: "Store prestaties - Bolbaas",
    description: "Krijg diepgaande data inzichten in je bol prestaties met Bolbaas. Analyseer product prestaties, maak custom dashboards en beheer bestellingen.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Data Inzichten Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Store prestaties - Bolbaas",
    description: "Krijg volledig inzicht in je bol store prestaties met de data tools van Bolbaas.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function StorePrestatiesPage() {
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
                  Store prestaties
                </span>
              </div>

              {/* Main Title */}
              <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                <h1 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight">
                Weet precies wat er <i>gebeurt</i> in je store.

                </h1>

                {/* Subtitle */}
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
                  Maak keuzes op basis van data. Uitgebreide data inzichten voor alle aspecten van je store.
                </p>
              </div>

              {/* Email Signup Form */}
              <EmailSignupForm 
                placeholder="Vul je bedrijfsemail in"
                buttonText="Gratis data analyse"
                showTestimonial={true}
              />
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/dashboard-saUuGHsWymEMI0v8HjTmL1ih11pXWJ.png"
                alt="Store prestaties dashboard"
                width={1200}
                height={1200}
                quality={90}
                className="rounded-xl w-full h-auto scale-110 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Prestaties Section */}
      <section id="product-prestaties" className="relative overflow-hidden bg-[#111111] py-16 md:py-24 lg:py-32" data-dark-section="true">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-white tracking-tight mb-4 md:mb-5">
              Product prestaties
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 max-w-2xl">
              Krijg diepgaande inzichten in hoe je producten presteren. Van reviews tot rankings - zie alles in één dashboard.
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
                    PRODUCT ANALYSE
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-white tracking-tight max-w-lg">
                  Zie precies hoe elk product presteert.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 max-w-md">
                  Van reviews tot rankings, van verkopen tot winst. Alle data die je nodig hebt om betere beslissingen te maken.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  asChild
                  className="bg-white text-[#111111] text-[14px] leading-[20px] font-normal hover:bg-white/90 px-6 py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.bolbaas.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>1 maand gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="text-white text-[14px] leading-[20px] font-normal border-white/30 hover:bg-white/10 px-6 py-3 h-auto bg-transparent rounded-xl"
                >
                  <Link href="/contact">
                    Gesprek inplannen
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/Porduct%20inzicht%20%281%29-KYOfP819QJwzA7EkhJDvQVYhGmQJe6.png"
                alt="Product prestaties analyse"
                width={1200}
                height={960}
                quality={90}
                className="rounded-xl w-full h-auto scale-110 drop-shadow-lg"
              />
            </div>
          </div>

          {/* 4-Column Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-white/10">
            {/* Feature 1 */}
            <div className="p-6 group hover:bg-white/5 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/10 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Search className="w-6 h-6 text-white/60 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="text-xs font-mono text-white/60 tracking-wider">01</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Zie winst, omzet en sales per product</h3>
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm text-white/60 leading-relaxed">Geen duidelijk overzicht van welke producten daadwerkelijk geld opleveren?</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-white font-medium mb-6">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Bolbaas logo" 
                  width={36} 
                  height={36} 
                  className="mr-2 flex-shrink-0"
                />
                <span>→ Krijg complete financiële inzichten per product</span>
              </div>
              
              {/* Technical capabilities */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-blue-400 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-sm font-medium text-white mb-1">Uitgebreide winst / margerekening</div>
                  <div className="text-xs text-white/60">Bolbaas berekent realtime je winst, inclusief alle kosten en commissies</div>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-purple-400 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-sm font-medium text-white mb-1">Sales voorspellingen</div>
                  <div className="text-xs text-white/60">Inzicht in verkooptrends en voorspelling van toekomstige sales</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 group hover:bg-white/5 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-white/60 mr-3 group-hover:text-blue-500 transition-colors duration-300" />
                <span className="text-xs font-mono text-white/60 tracking-wider">02</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Hoe klanten jouw product vinden op Bol</h3>
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm text-white/60 leading-relaxed">Onduidelijk via welke zoektermen en categorieën klanten bij je terechtkomen?</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-white font-medium mb-6">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Bolbaas logo" 
                  width={36} 
                  height={36} 
                  className="mr-2 flex-shrink-0"
                />
                <span>→ Bekijk alle relevante zoektermen en categorieën</span>
              </div>
              
              {/* Technical capabilities */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border-l-4 border-blue-500 hover:bg-white/10 transition-colors duration-300">
                  <div>
                    <div className="text-sm font-medium text-white mb-1">Campagne optimalisatie</div>
                    <div className="text-xs text-white/60">Ontdek op welke zoektermen je achterblijft op zichtbaarheid</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-cyan-400 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-sm font-medium text-white mb-1">Belangrijkste zoektermen</div>
                  <div className="text-xs text-white/60">Analyseer waar je klanten op zoeken en hoe je hierop inspeelt</div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 group hover:bg-white/5 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <LineChart className="w-6 h-6 text-white/60 mr-3 group-hover:text-green-400 transition-colors duration-300" />
                <span className="text-xs font-mono text-white/60 tracking-wider">03</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-white transition-colors">Wat klanten denken over jouw product</h3>
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm text-white/60 leading-relaxed">Onduidelijk waar verbeteringen nodig zijn op basis van klantfeedback?</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-white font-medium mb-6">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Bolbaas logo" 
                  width={36} 
                  height={36} 
                  className="mr-2 flex-shrink-0"
                />
                <span>→ Analyseer reviews en klantfeedback</span>
              </div>
              
              {/* Technical capabilities */}
              <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
                <div className="flex flex-1 items-center space-x-3 rounded-lg border-l-4 border-blue-400 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/10">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/1440x1080a%20%281%29.jpg"
                    alt="Nieuwe product review"
                    width={40}
                    height={40}
                    className="flex-shrink-0 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-white">Nieuwe product review</p>
                    <div className="mt-0.5 flex items-center">
                      <IoStar className="h-4 w-4 text-yellow-400" />
                      <IoStar className="h-4 w-4 text-yellow-400" />
                      <IoStar className="h-4 w-4 text-yellow-400" />
                      <IoStar className="h-4 w-4 text-yellow-400" />
                      <IoStar className="h-4 w-4 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center p-4 bg-white/5 rounded-lg border-l-4 border-green-400 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-sm font-medium text-white mb-1">Belangrijkste verbeterpunten</div>
                  <div className="text-xs text-white/60">Bekijk de belangrijkste klantopmerkingen en verbeterpunten per product</div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="p-6 group hover:bg-white/5 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 flex flex-col h-full relative overflow-hidden">
              {/* Subtle gold animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/3 to-transparent translate-x-[-100%] animate-[slide_5s_ease-in-out_infinite]"></div>
              <div className="flex items-center mb-4 relative z-10">
                <Sparkles className="w-6 h-6 text-yellow-400/80 mr-3 group-hover:text-yellow-300 transition-colors duration-300 animate-pulse" />
                <span className="text-xs font-mono text-white/60 tracking-wider">04</span>
              </div>
              <div className="flex-grow relative z-10">
                <h3 className="font-semibold text-yellow-400/90 text-xl mb-3 group-hover:text-yellow-300 transition-colors duration-300">Zet in op winnende producten</h3>
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm text-white/60 leading-relaxed">Focus op producten die het beste presteren en de meeste winst opleveren</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-white font-medium mb-6 relative z-10">
                <Image 
                  src="/icon-512x512.png" 
                  alt="Bolbaas logo" 
                  width={36} 
                  height={36} 
                  className="mr-2 flex-shrink-0"
                />
                <span className="text-yellow-300/90 group-hover:text-yellow-200 transition-colors duration-300">→ Identificeer je toppers en versterk ze</span>
              </div>
              
              {/* Technical capabilities */}
              <div className="border-t border-yellow-400/30 pt-6 space-y-4 relative z-10">
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-400 hover:bg-white/10 transition-colors duration-300 hover:border-yellow-300">
                  <div className="text-sm font-medium text-white mb-1">Winst analyses</div>
                  <div className="text-xs text-white/60">Zie precies welke producten het meest opleveren</div>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-amber-400 hover:bg-white/10 transition-colors duration-300 hover:border-amber-300">
                  <div className="text-sm font-medium text-white mb-1">Performance rankings</div>
                  <div className="text-xs text-white/60">Top scoorders die vindbaar zijn op Bol met de meeste sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Dashboards Section */}
      <section id="custom-dashboards" className="relative overflow-hidden bg-[#F6F5F3] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-4 md:mb-5">
              Custom dashboards
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
              Maak je eigen dashboards met precies de data die jij belangrijk vindt. Stel zelf in welke metrics je wilt zien.
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
                    CUSTOM DASHBOARDS
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-[#111111] tracking-tight max-w-lg">
                  Jouw data, jouw dashboard.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-md">
                  Kies zelf welke metrics je belangrijk vindt en maak je eigen dashboard. Van verkopen tot reviews, alles op één plek.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  asChild
                  className="bg-[#111111] text-white text-[14px] leading-[20px] font-normal hover:bg-[#111111]/90 px-6 py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.bolbaas.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>1 maand gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="text-[#111111] text-[14px] leading-[20px] font-normal border-gray-300 hover:bg-gray-50 px-6 py-3 h-auto bg-white rounded-xl"
                >
                  <Link href="/contact">
                    Gesprek inplannen
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative -ml-4 lg:-ml-12">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/aanpasbaar2-hpx3vtg1UHpfX3Bik0kYRSYfuaxElx.png"
                alt="Custom dashboards"
                width={1600}
                height={1280}
                quality={90}
                className="rounded-xl w-full h-auto drop-shadow-lg lg:scale-130"
              />
            </div>
          </div>

          {/* 3-Column Dashboard Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-[#FBFAF9] p-6 md:p-8 rounded-xl border border-[#F5F4F2] hover:border-[#F5F4F2] transition-all duration-300 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <Database className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">01</span>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-[16px] leading-[18px] md:leading-[20px] font-normal text-[#111111]">
                  Drag & drop interface
                </h3>
                <p className="text-xs md:text-[14px] leading-[16px] md:leading-[18px] font-normal text-[#111111]/70">
                  Sleep widgets waar je ze wilt hebben. Maak je dashboard precies zoals jij het wilt.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FBFAF9] p-8 rounded-xl border border-[#F5F4F2] hover:border-[#F5F4F2] transition-all duration-300 space-y-6">
              <div className="flex items-center gap-3">
                <LineChart className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">02</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                  Real-time data
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                  Alle data wordt real-time bijgewerkt. Zie direct wat er gebeurt in je store.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FBFAF9] p-8 rounded-xl border border-[#F5F4F2] hover:border-[#F5F4F2] transition-all duration-300 space-y-6">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">03</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                  Export mogelijkheden
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                  Download je data als Excel of PDF voor presentaties of verdere analyse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestellingen Beheren Section */}
      <section id="bestellingen-beheren" className="relative overflow-hidden bg-[#111111] py-16 md:py-24 lg:py-32" data-dark-section="true">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-white tracking-tight mb-4 md:mb-5">
              Bestellingen beheren
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 max-w-2xl">
              Beheer al je bestellingen vanuit één overzicht. Van nieuwe orders tot retouren - alles overzichtelijk op één plek.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Left Image */}
            <div className="relative order-last lg:order-first">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/Ordertable6.png"
                alt="Bestellingen beheren dashboard"
                width={1200}
                height={960}
                quality={90}
                className="rounded-xl w-full h-auto scale-100 drop-shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-5">
              {/* Feature Block */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-white tracking-wide uppercase">
                    BESTELLINGEN
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-white tracking-tight max-w-lg">
                  Alles overzichtelijk in één dashboard.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-white/70 max-w-md">
                  Van nieuwe bestellingen tot retouren en klachten. Beheer alles vanuit één overzichtelijk dashboard.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  asChild
                  className="bg-white text-[#111111] text-[14px] leading-[20px] font-normal hover:bg-white/90 px-6 py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.bolbaas.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>1 maand gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="text-white text-[14px] leading-[20px] font-normal border-white/30 hover:bg-white/10 px-6 py-3 h-auto bg-transparent rounded-xl"
                >
                  <Link href="/contact">
                    Gesprek inplannen
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Order Management Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="space-y-4 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">01</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Order overzicht
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Alle bestellingen op één plek met status updates
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">02</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Zoek & filter
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Vind snel de bestelling die je zoekt met slimme filters
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">03</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Levering Tracker™
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Automatische updates over verzendstatus en bezorging
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4 p-4 rounded-sm bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-white/60" />
                <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">04</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[16px] leading-[20px] font-normal text-white">
                  Retour afhandeling
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Eenvoudig retouren verwerken en klachten afhandelen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Forecasting Section */}
      <section id="sales-forecasting" className="relative overflow-hidden bg-[#F6F5F3] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-4 md:mb-5">
              Sales forecasting
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
              Voorspel je toekomstige verkopen op basis van historische data en seizoenstrends. Plan je voorraad en marketing strategieën.
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
                    SALES FORECASTING
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-[#111111] tracking-tight max-w-lg">
                  Voorspel je toekomstige verkopen.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-md">
                  Bolbaas analyseert je historische verkopen en voorspelt toekomstige trends. Zo kun je beter plannen en voorbereiden.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  asChild
                  className="bg-[#111111] text-white text-[14px] leading-[20px] font-normal hover:bg-[#111111]/90 px-6 py-3 h-auto rounded-xl"
                >
                  <a 
                    href="https://app.bolbaas.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>1 maand gratis</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="text-[#111111] text-[14px] leading-[20px] font-normal border-gray-300 hover:bg-gray-50 px-6 py-3 h-auto bg-white rounded-xl"
                >
                  <Link href="/contact">
                    Gesprek inplannen
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Chart */}
            <div className="relative">
              <SalesForecastChart />
            </div>
          </div>

          {/* Forecasting Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Benefit 1 */}
            <div className="bg-[#FBFAF9] p-6 md:p-8 rounded-xl border border-[#F5F4F2] hover:border-[#F5F4F2] transition-all duration-300 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <Package className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">01</span>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-[16px] leading-[18px] md:leading-[20px] font-normal text-[#111111]">
                  Voorraad planning
                </h3>
                <p className="text-xs md:text-[14px] leading-[16px] md:leading-[18px] font-normal text-[#111111]/70">
                  Weet precies hoeveel voorraad je nodig hebt voor de komende periode.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#FBFAF9] p-8 rounded-xl border border-[#F5F4F2] hover:border-[#F5F4F2] transition-all duration-300 space-y-6">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">02</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                  Marketing timing
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                  Start campagnes op het juiste moment om maximaal rendement te halen.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#FBFAF9] p-8 rounded-xl border border-[#F5F4F2] hover:border-[#F5F4F2] transition-all duration-300 space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">03</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                  Seizoen trends
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                  Zie seizoenstrends en bereid je voor op piekperiodes en rustige tijden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}