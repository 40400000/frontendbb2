
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineArrowOutward } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { KiteIcon } from "@/components/ui/kite-icon";
import { InteractivePricingButton } from "@/components/interactive-pricing-button";
import { Animatedbadge } from "@/components/animatedbadge";

export const metadata: Metadata = {
  title: "Prijzen - Baasy",
  description: "Ontdek de Baasy abonnementen: Start, Plus en Pro. Word founding member en krijg korting voor altijd.",
  openGraph: {
    title: "Prijzen - Baasy",
    description: "Bekijk de Baasy abonnementen en word founding member voor exclusieve voordelen.",
    images: [
      {
        url: 'https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Baasy Prijzen Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Prijzen - Baasy",
    description: "Bekijk de Baasy abonnementen en word founding member voor exclusieve voordelen.",
    images: ['https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png'],
  },
};

export default function PrijzenPage() {
  return (
    <>
      {/* Pricing Section */}
      <section className="bg-[#FBFAF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Title Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">

              <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">
PRIJZEN              </span>
            </div>
            <h1 className="text-[45px] leading-[45px] font-normal text-black tracking-tight mb-6">
Word founding member         </h1>
            <p className="text-[16px] leading-[21px] font-normal text-gray-600 max-w-md mx-auto mb-8">
                Korting voor de eerste leden, voor altijd. <br /> Wij hebben het juiste plan voor jouw avontuur.
            </p>
            
            {/* Founding Member Banner */}
            <div className="relative max-w-lg mx-auto">

            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Start Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative">
              <div className="mb-8">
                <p className="text-[12px] leading-[14px] font-normal text-gray-500 tracking-wide uppercase mb-2">
                  ZET JE EERSTE STAPPEN
                </p>
                <h3 className="text-[32px] leading-[32px] font-medium text-black mb-4">
                  Start
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-gray-600">
                  Voor ambitieuze beginners die hun avontuur willen lanceren.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[24px] leading-[24px] font-normal text-gray-400 line-through">19</span>
                  <span className="text-[40px] leading-[40px] font-medium text-black">9</span>
                  <span className="text-[14px] leading-[14px] font-normal text-gray-500">/maand</span>
                </div>
                <p className="text-[12px] leading-[14px] font-normal text-gray-500">
                  Maandelijks opzegbaar
                </p>
              </div>

              <InteractivePricingButton 
                href="https://app.baasy.nl/registreren"
                sendTo="AW-17372857270/1maandcta"
              >
                14 dagen gratis
              </InteractivePricingButton>

              <div className="space-y-4 mb-8">
                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-black">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <Link href="/features/automatisering#store-automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Volledig automatische facturen
                      </span>
                    </Link>
                    <Link href="/features/automatisering#store-automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt facturen
                      </span>
                    </Link>
                    <Link href="/features/automatisering#email-campagnes" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt review e-mails
                      </span>
                    </Link>
                    <Link href="/features/automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt aantal bestellingen
                      </span>
                    </Link>
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
                    <Link href="/features/tools#product-tracking" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Product tracking (10 producten)
                      </span>
                    </Link>
                    <Link href="/features/tools#winst-calculator" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Winst & ACoS calculator
                      </span>
                    </Link>
                    <Link href="/features/tools#ab-testing" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        A/B testen van listings
                      </span>
                    </Link>
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
                    <Link href="/features/store-prestaties#custom-dashboards" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Custom dashboards & views
                      </span>
                    </Link>
                    <Link href="/features/store-prestaties#product-prestaties" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Bestellingen, Producten, Sales inzichten
                      </span>
                    </Link>
                  </div>
                </div>
        </div>

            </div>

                {/* Plus Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative">
              <div className="mb-8">
                <p className="text-[12px] leading-[14px] font-normal text-gray-500 tracking-wide uppercase mb-2">
                  BOOST JE VERKOOP
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-[32px] leading-[32px] font-medium text-black">
                    Plus
                  </h3>
                  <Animatedbadge label="POPULAIR" />
                </div>
                <p className="text-[14px] leading-[18px] font-normal text-gray-600">
                  De perfecte toolkit voor verkopers die klaar zijn voor serieuze groei.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[24px] leading-[24px] font-normal text-gray-400 line-through">59</span>
                  <span className="text-[40px] leading-[40px] font-medium text-black">29</span>
                  <span className="text-[14px] leading-[14px] font-normal text-gray-500">/maand</span>
                </div>
                <p className="text-[12px] leading-[14px] font-normal text-gray-500">
                  Maandelijks opzegbaar
                </p>
              </div>

              <InteractivePricingButton 
                href="https://app.baasy.nl/registreren"
                sendTo="AW-17372857270/1maandcta"
              >
                14 dagen gratis
              </InteractivePricingButton>

              <div className="space-y-4 mb-8">
                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-black">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <Link href="/features/automatisering#store-automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Volledig automatische facturen
                      </span>
                    </Link>
                    <Link href="/features/automatisering#store-automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt facturen
                      </span>
                    </Link>
                    <Link href="/features/automatisering#email-campagnes" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt review e-mails
                      </span>
                    </Link>
                    <Link href="/features/automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt aantal bestellingen
                      </span>
                    </Link>
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
                    <Link href="/features/tools#baasy-database" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-purple-500 group-hover:text-purple-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-medium text-purple-600 group-hover:text-purple-700 transition-colors">
                        Research database & Ranking AI
                      </span>
                    </Link>
                    <Link href="/features/tools#product-tracking" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Product tracking (100) + <span className="font-medium text-purple-600">Precision</span> (30)
                      </span>
                    </Link>
                    <Link href="/features/tools#ab-testing" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Keyword tracking + A/B testing
                      </span>
                    </Link>
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
                    <Link href="/features/store-prestaties#custom-dashboards" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Custom dashboards & views
                      </span>
                    </Link>
                    <Link href="/features/store-prestaties#product-prestaties" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Bestellingen, Producten, Sales inzichten
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Pro Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative">
              <div className="mb-8">
                <p className="text-[12px] leading-[14px] font-normal text-gray-500 tracking-wide uppercase mb-2">
                  DOMINEER DE MARKT
                </p>
                <h3 className="text-[32px] leading-[32px] font-medium text-black mb-4">
                  Pro
                </h3>
                <p className="text-[14px] leading-[18px] font-normal text-gray-600">
                  Voor bol ondernemers en agencies die willen excelleren.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[24px] leading-[24px] font-normal text-gray-400 line-through">199</span>
                  <span className="text-[40px] leading-[40px] font-medium text-black">99</span>
                  <span className="text-[14px] leading-[14px] font-normal text-gray-500">/maand</span>
                </div>
                <p className="text-[12px] leading-[14px] font-normal text-gray-500">
                  Maandelijks opzegbaar
                </p>
              </div>

              <div className="mb-8">
                <a href="/contact" className="w-full bg-black text-white font-medium text-[15px] leading-[15px] py-4 px-6 rounded-xl hover:bg-black/90 transition-all duration-200 hover:scale-105 mb-2 block text-center">
                  Contact opnemen
                </a>
                <div className="h-[14px]"></div>
              </div>

              <div className="space-y-4 mb-8">
                {/* Automatisering */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <KiteIcon variant="orange" size={10} />
                    <span className="text-[15px] leading-[21px] font-normal text-black">
                      Automatisering
                    </span>
                  </div>
                  <div className="space-y-1 pl-5">
                    <Link href="/features/automatisering#store-automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Volledig automatische facturen
                      </span>
                    </Link>
                    <Link href="/features/automatisering#store-automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt facturen
                      </span>
                    </Link>
                    <Link href="/features/automatisering#email-campagnes" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt review e-mails
                      </span>
                    </Link>
                    <Link href="/features/automatisering" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt aantal bestellingen
                      </span>
                    </Link>
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
                    <Link href="/features/tools#baasy-database" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-purple-500 group-hover:text-purple-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-medium text-purple-600 group-hover:text-purple-700 transition-colors">
                        Research database & Ranking AI
                      </span>
                    </Link>
                    <Link href="/features/tools#product-tracking" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Onbeperkt tracking + <span className="font-medium text-purple-600">Precision</span> (400)
                      </span>
                    </Link>
                    <Link href="/features/tools#ab-testing" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Keyword + Winst & ACoS + A/B testing
                      </span>
                    </Link>
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
                    <Link href="/features/store-prestaties#custom-dashboards" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Custom dashboards & views
                      </span>
                    </Link>
                    <Link href="/features/store-prestaties#product-prestaties" target="_blank" className="flex items-center gap-2 group decoration-dotted underline-offset-2 hover:underline">
                      <FaCircleCheck className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
                       <span className="font-inter text-[15px] leading-[18px] font-light text-gray-600 group-hover:text-gray-800 transition-colors">
                        Bestellingen, Producten, Sales inzichten
                      </span>
                    </Link>
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
                    href="https://app.baasy.nl/registreren"
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
                    href="https://app.baasy.nl/registreren"
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
                    <div className="text-[15px] leading-[18px] font-light text-gray-700 md:mb-0 mb-3">Custom sales dashboards</div>
                    
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
            <a href="/contact" className="bg-white text-[#111111] font-medium text-[14px] leading-[14px] py-3 px-6 rounded-xl flex items-center gap-2 hover:gap-3 transition-all mx-auto hover:bg-white/90 w-fit">
              Neem contact op
              <MdOutlineArrowOutward className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
