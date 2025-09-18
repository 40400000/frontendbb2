
import type { Metadata } from "next";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { darkSection } from "@/lib/section-utils";
import { KiteIcon } from "@/components/ui/kite-icon";
import { InteractivePricingButton } from "@/components/interactive-pricing-button";
import { Animatedbadge } from "@/components/animatedbadge";

export const metadata: Metadata = {
  title: "Prijzen - Bolbaas",
  description: "Ontdek de Bolbaas abonnementen: Start, Plus en Pro. Word founding member en krijg korting voor altijd.",
  openGraph: {
    title: "Prijzen - Bolbaas",
    description: "Bekijk de Bolbaas abonnementen en word founding member voor exclusieve voordelen.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Prijzen Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Prijzen - Bolbaas",
    description: "Bekijk de Bolbaas abonnementen en word founding member voor exclusieve voordelen.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function PrijzenPage() {
  return (
    <>
      {/* Dark Section */}
      <section {...darkSection("bg-[#111111] text-white py-20 md:py-32")}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Title Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">

              <span className="text-[10px] leading-[12px] font-normal text-white tracking-wide uppercase">
                PRICING PLANS
              </span>
            </div>
            <h1 className="text-[45px] leading-[45px] font-normal text-white tracking-tight mb-6">
              Kies het plan dat bij jou past
            </h1>
            <p className="text-[16px] leading-[21px] font-normal text-white/70 max-w-md mx-auto mb-8">
              Van eerste stappen tot marktdominantie - wij hebben het juiste plan voor jouw bol avontuur.
            </p>
            
            {/* Founding Member Banner */}
            <div className="relative max-w-lg mx-auto">

            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Start Plan */}
            <div className="bg-[#1A1919] rounded-2xl p-8 relative">
              <div className="mb-8">
                <p className="text-[12px] leading-[14px] font-normal text-white/60 tracking-wide uppercase mb-2">
                  ZET JE EERSTE STAPPEN
                </p>
                <h3 className="text-[32px] leading-[32px] font-medium text-white mb-4">
                  Start
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Voor ambitieuze beginners die hun bol avontuur willen lanceren.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[24px] leading-[24px] font-normal text-white/40 line-through">39</span>
                  <span className="text-[40px] leading-[40px] font-medium text-white">15</span>
                  <span className="text-[14px] leading-[14px] font-normal text-white/60">/maand</span>
                </div>
                <p className="text-[12px] leading-[14px] font-normal text-white/50">
                  1 gebruiker inclusief
                </p>
              </div>

              <InteractivePricingButton href="https://app.bolbaas.nl/registreren">
                1 maand gratis
              </InteractivePricingButton>

              <div className="space-y-4 mb-8">
                {/* AI & Tools */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="blue" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      AI & Tools
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Product tracking (10 producten)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Winst & ACoS calculator
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        A/B testen van listings
                      </span>
                    </div>
                  </div>
                </div>

                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        E-mail, Facturen, BTW automatisering
                      </span>
                    </div>
                  </div>
                </div>

                {/* Store Prestaties */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="purple" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      Store prestaties
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Custom dashboards & views
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Bestellingen, Producten, Sales inzichten
                      </span>
                    </div>
                  </div>
                </div>
        </div>

            </div>

            {/* Plus Plan */}
            <div className="bg-[#1A1919] rounded-2xl p-8 relative">
              <div className="mb-8">
                <p className="text-[12px] leading-[14px] font-normal text-white/60 tracking-wide uppercase mb-2">
                  BOOST JE VERKOOP
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-[32px] leading-[32px] font-medium text-white">
                    Plus
                  </h3>
                  <Animatedbadge label="POPULAIR" />
                </div>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  De perfecte toolkit voor verkopers die klaar zijn voor serieuze groei.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[24px] leading-[24px] font-normal text-white/40 line-through">75</span>
                  <span className="text-[40px] leading-[40px] font-medium text-white">39</span>
                  <span className="text-[14px] leading-[14px] font-normal text-white/60">/maand</span>
                </div>
                <p className="text-[12px] leading-[14px] font-normal text-white/50">
                  2 gebruikers inclusief
                </p>
              </div>

              <InteractivePricingButton href="https://app.bolbaas.nl/registreren">
                1 maand gratis
              </InteractivePricingButton>

              <div className="space-y-4 mb-8">
                {/* AI & Tools */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="blue" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      AI & Tools
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Research database & Ranking AI
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Product tracking (100) + Precision (30)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Keyword tracking + A/B testing
                      </span>
                    </div>
                  </div>
                </div>

                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        E-mail, Facturen, BTW automatisering
                      </span>
                    </div>
                  </div>
                </div>

                {/* Store Prestaties */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="purple" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      Store prestaties
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Custom dashboards & views
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Bestellingen, Producten, Sales inzichten
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Pro Plan */}
            <div className="bg-[#1A1919] rounded-2xl p-8 relative">
              <div className="mb-8">
                <p className="text-[12px] leading-[14px] font-normal text-white/60 tracking-wide uppercase mb-2">
                  DOMINEER DE MARKT
                </p>
                <h3 className="text-[32px] leading-[32px] font-medium text-white mb-4">
                  Pro
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-white/70">
                  Voor bol ondernemers en agencies die willen excelleren.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[24px] leading-[24px] font-normal text-white/40 line-through">199</span>
                  <span className="text-[40px] leading-[40px] font-medium text-white">99</span>
                  <span className="text-[14px] leading-[14px] font-normal text-white/60">/maand</span>
                </div>
                <p className="text-[12px] leading-[14px] font-normal text-white/50">
                  Onbeperkt gebruikers inclusief
                </p>
              </div>

              <a href="/design-b/contact" className="w-full bg-white text-[#1A1919] font-medium text-[15px] leading-[15px] py-4 px-6 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-105 mb-8 block text-center">
                Contact opnemen
              </a>

              <div className="space-y-4 mb-8">
                {/* AI & Tools */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="blue" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      AI & Tools
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Research database & Ranking AI
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Onbeperkt tracking + Precision (400)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Keyword + Winst & ACoS + A/B testing
                      </span>
                    </div>
                  </div>
                </div>

                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        E-mail, Facturen, BTW automatisering
                      </span>
                    </div>
                  </div>
                </div>

                {/* Store Prestaties */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="purple" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-white">
                      Store prestaties
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
                        Custom dashboards & views
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCircleCheck className="w-3 h-3 text-white/40" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-white/70">
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

      {/* Comparison Table Section */}
      <section className="bg-[#F6F5F3] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[32px] leading-[36px] font-medium text-gray-900 mb-12 text-left">
            Vergelijk features
          </h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl overflow-visible">
              {/* Header Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 bg-[#F6F5F3] border-b border-gray-200">
                <div className="hidden md:block"></div>
                <div className="text-center">
                  <h3 className="text-[20px] leading-[24px] font-medium text-gray-900 mb-4">Start</h3>
                  <a 
                    href="https://app.bolbaas.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto px-8 border border-gray-300 text-gray-700 font-medium text-[14px] leading-[14px] py-3 rounded-xl hover:border-gray-400 transition-colors inline-block"
                  >
                    Gratis proberen
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="text-[20px] leading-[24px] font-medium text-gray-900 mb-4">Plus</h3>
                  <a 
                    href="https://app.bolbaas.nl/registreren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto px-8 bg-black text-white font-medium text-[14px] leading-[14px] py-3 rounded-xl hover:bg-gray-800 transition-colors inline-block"
                  >
                    Gratis proberen
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="text-[20px] leading-[24px] font-medium text-gray-900 mb-4">Pro</h3>
                  <a 
                    href="/contact"
                    className="w-auto px-8 border border-gray-300 text-gray-700 font-medium text-[14px] leading-[14px] py-3 rounded-xl hover:border-gray-400 transition-colors inline-block"
                  >
                    Contact opnemen
                  </a>
                </div>
              </div>

              {/* Account Limits Section */}
              <div>
                <div className="flex items-center gap-2 px-4 md:px-8 py-4 bg-[#F6F5F3]">
                  <KiteIcon variant="purple" size={12} />
                  <h4 className="text-[16px] leading-[20px] font-medium text-gray-900">Account limieten</h4>
                </div>
                
                {/* Feature Rows */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">
                      Aantal stores
                      <div className="text-[12px] leading-[14px] text-gray-500 mt-1">Maximum aantal gekoppelde bol stores per account.</div>
                    </div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">2 stores</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">2 stores</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt stores</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-[#F6F5F3]">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">
                      Aantal seats
                      <div className="text-[12px] leading-[14px] text-gray-500 mt-1">Het aantal gebruikers dat toegang heeft tot het account.</div>
                    </div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">2 seats</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">2 seats</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">
                      Aantal orders
                      <div className="text-[12px] leading-[14px] text-gray-500 mt-1">Het aantal orders dat verwerkt kan worden.</div>
                    </div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI & Tools Section */}
              <div>
                <div className="flex items-center gap-2 px-4 md:px-8 py-4 bg-[#F6F5F3]">
                  <KiteIcon variant="blue" size={12} />
                  <h4 className="text-[16px] leading-[20px] font-medium text-gray-900">AI & Tools</h4>
                </div>
                
                {/* Feature Rows */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Product tracking</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">10</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">100</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">10 producten</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">100 producten</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-[#F6F5F3]">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Precision product tracking</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">30</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">400</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">30 producten</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">400 producten</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Research database</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Ranking AI</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Keyword tracking</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[12px] leading-[14px] text-gray-500">-</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-[#F6F5F3]">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Winst & ACoS calculator</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">A/B testen van listings</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Automatisering Section */}
              <div>
                <div className="flex items-center gap-2 px-4 md:px-8 py-4 bg-[#F6F5F3]">
                  <KiteIcon variant="orange" size={12} />
                  <h4 className="text-[16px] leading-[20px] font-medium text-gray-900">Automatisering</h4>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">E-mail</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-[#F6F5F3]">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Facturen</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Aantal e-mails en facturen</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <span className="text-[13px] leading-[15px] font-medium text-gray-700">Onbeperkt</span>
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                    <div className="hidden md:block text-center">
                      <span className="text-[14px] leading-[16px] font-medium text-gray-700">Onbeperkt</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-[#F6F5F3]">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">BTW</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-[#F6F5F3]">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Baaspilot</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Store Prestaties Section */}
              <div>
                <div className="flex items-center gap-2 px-4 md:px-8 py-4 bg-[#F6F5F3]">
                  <KiteIcon variant="purple" size={12} />
                  <h4 className="text-[16px] leading-[20px] font-medium text-gray-900">Store prestaties</h4>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Custom dashboards and views</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-[#F6F5F3]">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Bestellingen</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Producten</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-[#F6F5F3]">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Sales en voorraad schattingen</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center py-4 px-4 md:px-8 bg-gray-50">
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Levering tracker</div>
                    
                    {/* Mobile: Plans side by side */}
                    <div className="md:hidden grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Start</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Plus</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-600 mb-1">Pro</div>
                        <FaCircleCheck className="w-3 h-3 text-black mx-auto" />
                      </div>
                    </div>
                    
                    {/* Desktop: Original layout */}
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                    <div className="hidden md:block text-center">
                      <FaCircleCheck className="w-4 h-4 text-black mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-[14px] leading-[18px] font-normal text-white/60 mb-6">
              Nog vragen over welk plan het beste bij je past?
            </p>
            <button className="bg-transparent border border-white/20 text-white font-medium text-[14px] leading-[14px] py-3 px-6 rounded-xl flex items-center gap-2 hover:gap-3 transition-all mx-auto hover:border-white/40">
              Neem contact op
              <MdOutlineArrowOutward className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
