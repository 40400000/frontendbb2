import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KiteIcon } from "@/components/ui/kite-icon";
import { EmailSignupForm } from "@/components/email-signup-form";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { RankingChart } from "@/components/ranking-chart";
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
  AlertTriangle,
  Archive,
  Send,
} from 'lucide-react';
import { IoStar } from "react-icons/io5";
import { BaaspilotAutomatisering } from "@/components/baaspilot-automatisering";
import { Automatiseringanimation } from "@/components/automatisering-animation";

export const metadata: Metadata = {
  title: "Automatisering - Bolbaas",
  description: "Automatiseer je bol store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
  openGraph: {
    title: "Automatisering - Bolbaas",
    description: "Automatiseer je bol store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Automatisering Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Automatisering - Bolbaas",
    description: "Automatiseer je bol store. Focus op ondernemen en groei. Automatische e-mail campagnes, BTW facturen uploaden en meer.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function AutomatiseringPage() {
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
                  Automatisering
                </span>
              </div>

              {/* Main Title */}
              <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                <h1 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight">
                Automatiseer je store, focus op <i>groei</i>.

                </h1>

                {/* Features List */}
                <div className="space-y-2 md:space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
                      E-mail automatisering
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
                      Factuur automatisering
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70">
                      BTW automatisering
                    </span>
                  </div>
                </div>
              </div>

              {/* Email Signup Form */}
              <EmailSignupForm 
                placeholder="Vul je bedrijfsemail in"
                buttonText="Demo proberen"
                showTestimonial={true}
                align="left"
              />
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <Automatiseringanimation />

            </div>
          </div>
        </div>
      </section>

      {/* Store Automatisering Section */}
      <section id="store-automatisering" className="relative overflow-hidden bg-[#F6F5F3] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-4 md:mb-5">
              Store Automatisering
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
              Automatisering die écht werkt. Facturen uploaden, BTW berekenen, e-mails versturen - alles gebeurt automatisch op de achtergrond. Zo heb je meer tijd voor echt ondernemen.
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
                    BTW FACTUREN
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[45px] leading-[32px] md:leading-[45px] font-normal text-[#111111] tracking-tight max-w-lg">
                 Automatisch BTW facturen uploaden naar bol.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-md">
                  Geen tijd meer besteden aan het beantwoorden van klantvragen omtrent facturen. Bolbaas uploadt automatisch BTW facturen naar bol en slaat deze op in jouw database.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild
                  className="bg-[#111111] text-white text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-[#111111]/90 px-4 md:px-6 py-2.5 md:py-3 h-auto rounded-xl"
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


              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/facturenuploaden%20%281%29.png"
                alt="Automatisch BTW facturen uploaden"
                width={1200}
                height={1200}
                quality={90}
                className="rounded-xl w-full h-auto scale-95 drop-shadow-lg"
              />
            </div>
          </div>

          {/* 4-Step BTW Process Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Step 1 */}
              <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
                  <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">STAP 01</span>
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-sm md:text-[16px] leading-[18px] md:leading-[20px] font-normal text-[#111111]">
                    Bestelling komt binnen
                  </h3>
                  <p className="text-xs md:text-[14px] leading-[16px] md:leading-[18px] font-normal text-[#111111]/70">
                    Een klant bestelt jouw product via bol.
                  </p>
                </div>
              </div>

              {/* Step 2 - Bolbaas Step */}
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 space-y-4 shadow-md shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] leading-[12px] font-normal text-blue-500 tracking-wide uppercase">STAP 02</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-blue-900">
                    Bolbaas maakt factuur
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-blue-700">
                    Voor de klant wordt automatisch een BTW factuur gemaakt
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-blue-900">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={20} 
                    height={20} 
                    className="flex-shrink-0"
                  />
                  <span>Geregeld door Bolbaas</span>
                </div>
              </div>

              {/* Step 3 - Bolbaas Step */}
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 space-y-4 shadow-md shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] leading-[12px] font-normal text-blue-500 tracking-wide uppercase">STAP 03</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-blue-900">
                    Upload naar Bol & e-mail
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-blue-700">
                    De factuur wordt geüpload naar bol.com en optioneel naar de klant gemaild.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-blue-900">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={20} 
                    height={20} 
                    className="flex-shrink-0"
                  />
                  <span>Geregeld door Bolbaas</span>
                </div>
              </div>

              {/* Step 4 - Bolbaas Step */}
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 space-y-4 shadow-md shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] leading-[12px] font-normal text-blue-500 tracking-wide uppercase">STAP 04</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-blue-900">
                    Boekhouding bijgewerkt
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-blue-700">
                    Alle facturen worden automatische opgeslagen voor je boekhouding.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-blue-900">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={20} 
                    height={20} 
                    className="flex-shrink-0"
                  />
                  <span>Geregeld door Bolbaas</span>
                </div>
              </div>
            </div>
            
            {/* Arrows between steps */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 md:gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <Image
                src="/lvg.jpeg"
                alt="Lucas van Gasteren"
                width={128}
                height={128}
                className="w-24 h-24 md:w-28 md:h-28 md:w-32 md:h-32 rounded-xl object-cover"
              />
            </div>

            {/* Quote content */}
            <div className="flex-1 text-center md:text-left">
              <blockquote
                className="text-[24px] md:text-[36px] leading-[28px] md:leading-[40px] text-[#111111] mb-2 md:mb-3"
                style={{
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                "Door Bolbaas kunnen wij ons focussen op ondernemen, en niet op de boekhouding."
              </blockquote>

              <div
                className="text-[#111111]/60 text-sm md:text-[16px] leading-[16px] md:leading-[18px] font-normal"
              >
                Lucas van Gasteren, bol partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-mail Campagnes Section */}
      <section id="email-campagnes" className="relative overflow-hidden bg-[#F6F5F3] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-4 md:mb-5">
              E-mail campagnes
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
              Verhoog reviews en voorkom klantvragen met e-mail campagnes. Automatische e-mail campagnes. Maak e-mails precies zoals je het wilt, of gebruik een van onze templates.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Left Image */}
            <div className="relative order-last lg:order-first">
              <Image
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/automatiseringemails-2.png"
                alt="E-mail campagnes automatisering"
                width={1200}
                height={960}
                quality={90}
                className="rounded-xl w-full h-auto scale-90 drop-shadow-lg"
              />
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
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-md">
                  Automatische e-mail campagnes. Maak e-mails precies zoals je het wilt, of gebruik een van onze templates.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild
                  className="bg-[#111111] text-white text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-[#111111]/90 px-4 md:px-6 py-2.5 md:py-3 h-auto rounded-xl"
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

              </div>
            </div>
          </div>

          {/* 4-Step Email Process Section */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-gray-600" />
                  <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">STAP 01</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                    Bestelling komt binnen
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                    Een klant bestelt jouw product via bol.
                  </p>
                </div>
              </div>

              {/* Step 2 - Bolbaas Step */}
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 space-y-4 shadow-md shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] leading-[12px] font-normal text-blue-500 tracking-wide uppercase">STAP 02</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-blue-900">
                    Geautomatiseerde e-mail
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-blue-700">
                    Op het juiste moment sturen we een e-mail met een reviewverzoek.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-blue-900">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={20} 
                    height={20} 
                    className="flex-shrink-0"
                  />
                  <span>Geregeld door Bolbaas</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 space-y-4">
                <div className="flex items-center gap-3">
                  <IoStar className="w-5 h-5 text-yellow-500" />
                  <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">STAP 03</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                    Klant laat review achter
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                    Tevreden klanten delen hun ervaring op bol.com, wat je zichtbaarheid vergroot.
                  </p>
                </div>

                <div className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-gray-50 p-3 shadow-sm">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/1440x1080a%20%281%29.jpg"
                    alt="Nieuwe product review"
                    width={32}
                    height={32}
                    className="rounded object-cover"
                  />
                  <div>
                    <p className="text-[12px] leading-[16px] font-medium text-[#111111]">Nieuwe product review</p>
                    <div className="flex items-center mt-0.5">
                      <IoStar className="w-3 h-3 text-yellow-400" />
                      <IoStar className="w-3 h-3 text-yellow-400" />
                      <IoStar className="w-3 h-3 text-yellow-400" />
                      <IoStar className="w-3 h-3 text-yellow-400" />
                      <IoStar className="w-3 h-3 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 - Bolbaas Step */}
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 space-y-4 shadow-md shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <LineChart className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] leading-[12px] font-normal text-blue-500 tracking-wide uppercase">STAP 04</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-blue-900">
                    Analyseer klantfeedback
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-blue-700">
                    Wij verzamelen en analyseren met AI de feedback om je productprestaties te verbeteren.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-blue-900">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={20} 
                    height={20} 
                    className="flex-shrink-0"
                  />
                  <span>Bekijk in Store Prestaties</span>
                </div>
              </div>
            </div>
            
            {/* Arrows between steps */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTW Automatisering Section */}
      <section id="btw-automatisering" className="relative overflow-hidden bg-[#F6F5F3] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 md:mb-12">
            <h2 className="text-[32px] md:text-[45px] leading-[36px] md:leading-[45px] font-normal text-[#111111] tracking-tight mb-4 md:mb-5">
              BTW automatisering
            </h2>
            <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-2xl">
              Nooit meer stress over BTW-aangiftes of zoekraken van facturen. Bolbaas regelt alles automatisch, zodat je rustig kunt slapen en focussen op wat je leuk vindt: ondernemen.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-5">
              {/* Feature Block 1 */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                    BTW BEREKENING
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight max-w-lg">
                  BTW aangifte automatisch berekend.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-md">
                  Bolbaas berekent de BTW op basis van jouw orders en rekent facturen van bol zelf mee. Zo weet je altijd precies hoeveel BTW je moet betalen.
                </p>
              </div>

              {/* Feature Block 2 */}
              <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
                <div className="flex items-center gap-2 mb-2">
                  <KiteIcon variant="blue" size={11} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                    BTW BOEKHOUDING
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-normal text-[#111111] tracking-tight max-w-lg">
                  BTW facturen automatisch opgeslagen.
                </h3>
                <p className="text-sm md:text-[16px] leading-[18px] md:leading-[21px] font-normal text-[#111111]/70 max-w-md">
                  Jouw persoonlijke boekhouder. Bolbaas bewaart alle facturen van jouw orders en van bol.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild
                  className="bg-[#111111] text-white text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal hover:bg-[#111111]/90 px-4 md:px-6 py-2.5 md:py-3 h-auto rounded-xl"
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
                  className="text-[#111111] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal border-gray-300 hover:bg-gray-50 px-4 md:px-6 py-2.5 md:py-3 h-auto bg-white rounded-xl"
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
                src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/btw-dashboard-2.png"
                alt="BTW automatisering dashboard"
                width={1200}
                height={960}
                quality={90}
                className="rounded-xl w-full h-auto scale-110 drop-shadow-lg"
              />
            </div>
          </div>

          {/* 4-Step BTW Aangifte Process Grid */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 - Deadline */}
              <div className="bg-yellow-50/50 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500/40 transition-all duration-300 space-y-4 shadow-md shadow-yellow-500/10">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <span className="text-[10px] leading-[12px] font-normal text-yellow-600 tracking-wide uppercase">STAP 01</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-yellow-900">
                    Deadline BTW komt eraan
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-yellow-800">
                    Je ontvangt een melding dat de BTW-deadline nadert.
                  </p>
                </div>
              </div>

              {/* Step 2 - Bolbaas stelt op */}
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 space-y-4 shadow-md shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] leading-[12px] font-normal text-blue-500 tracking-wide uppercase">STAP 02</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-blue-900">
                    Bolbaas stelt BTW-aangifte op
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-blue-700">
                    Wij stellen een complete BTW-aangifte voor bol op.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-blue-900">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={20} 
                    height={20} 
                    className="flex-shrink-0"
                  />
                  <span>Geregeld door Bolbaas</span>
                </div>
              </div>

              {/* Step 3 - Bewaren */}
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 space-y-4 shadow-md shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <Archive className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] leading-[12px] font-normal text-blue-500 tracking-wide uppercase">STAP 03</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-blue-900">
                    Bolbaas bewaart alles 7 jaar
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-blue-700">
                    Al jouw facturen en aangiftes worden veilig bewaard voor de Belastingdienst.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] leading-[16px] font-normal text-blue-900">
                  <Image 
                    src="/icon-512x512.png" 
                    alt="Bolbaas logo" 
                    width={20} 
                    height={20} 
                    className="flex-shrink-0"
                  />
                  <span>Geregeld door Bolbaas</span>
                </div>
              </div>

              {/* Step 4 - Indienen */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 space-y-4">
                <div className="flex items-center gap-3">
                  <Send className="w-5 h-5 text-gray-600" />
                  <span className="text-[10px] leading-[12px] font-normal text-gray-600 tracking-wide uppercase">STAP 04</span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[20px] font-normal text-[#111111]">
                    Binnen minuten indienen
                  </h3>
                  <p className="text-[14px] leading-[18px] font-normal text-[#111111]/70">
                    Je controleert de aangifte en dient deze in bij de Belastingdienst.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Arrows between steps */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>


        </div>
      </section>



      {/* Baaspilot Section */}
      <BaaspilotAutomatisering />


    </main>
  );
}
