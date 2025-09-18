import Link from "next/link";
import { KiteIcon } from "@/components/ui/kite-icon";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { EmailSignupForm } from "@/components/email-signup-form";
import { AffiliateForm } from "@/components/affiliate-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Affiliate partner worden - Bolbaas",
    description: "Word affiliate partner van Bolbaas. Verdien met Bol coaches, communities en influencers. Samen groeien in de Bol ecosystem.",
    openGraph: {
      title: "Affiliate partner worden - Bolbaas",
      description: "Word affiliate partner van Bolbaas. Verdien met Bol coaches, communities en influencers. Samen groeien in de Bol ecosystem.",
      images: [
        {
          url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
          width: 1200,
          height: 630,
          alt: 'Bolbaas Affiliate Partner Open Graph Image',
        },
      ],
    },
    twitter: {
      title: "Affiliate partner worden - Bolbaas",
      description: "Word affiliate partner van Bolbaas. Verdien met Bol coaches, communities en influencers.",
      images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
    },
  };

export default function AffiliatePartnerPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full min-h-[100vh] md:min-h-[180vh] flex items-start justify-center pt-16 md:pt-28 pb-20 md:pb-32 bg-white text-[#111111] overflow-hidden px-4 md:px-6">
        {/* Simple background */}
        <div className="absolute inset-0 w-full h-full bg-white" />
        
        <div className="w-full relative z-10 flex flex-col">
          {/* Hero Content */}
          <div className="container max-w-2xl md:max-w-3xl text-center mx-auto pt-4">
            <div className="flex justify-center mb-5 md:mb-6">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 md:gap-2 bg-white rounded-xl px-1.5 py-1.5 shadow-md hover:shadow-lg transition-shadow group"
              >
                <span className="inline-flex items-center bg-[#111111] text-white rounded-xl px-1.5 md:px-2 py-0.5 text-[11px] md:text-xs font-semibold">
                  AFFILIATE
                </span>
                <span className="text-xs md:text-sm font-medium text-[#111111]">Verdien met Bolbaas</span>
                <MdOutlineArrowOutward className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <h1 className="mx-auto max-w-[28ch] md:max-w-[32ch] text-[32px] md:text-[48px] leading-[36px] md:leading-[48px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
              Verdien <em className="italic">geld</em> door Bolbaas te delen.
            </h1>

            <p className="mx-auto max-w-xl text-sm md:text-lg leading-[20px] md:leading-[24px] opacity-70 mb-6 md:mb-8">
              Tot €200 per referral + 30% maandelijkse commissie. Perfect voor Bol coaches, communities en influencers.
            </p>

            <EmailSignupForm 
              buttonText="Partner worden"
              placeholder="Vul je email in"
              showTestimonial={false}
            />
          </div>

          {/* Earnings Stats Section */}
          <div className="container max-w-4xl mx-auto mt-16 md:mt-20 mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-medium text-[#111111] mb-2">
                  Partner Program
                </h2>
                <p className="text-sm md:text-base text-[#111111]/70">
                  Verdien geld voor elke klant die je onze kant op stuurt
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">Tot €200</div>
                  <div className="text-sm md:text-base text-[#111111]/70">Per succesvolle referral</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">30%</div>
                  <div className="text-sm md:text-base text-[#111111]/70">Maandelijkse commissie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">€0</div>
                  <div className="text-sm md:text-base text-[#111111]/70">Kosten om te beginnen</div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-sm">
                  <span className="text-2xl">💰</span>
                  <div className="text-left">
                    <div className="text-lg font-bold text-[#111111]">€12.000+</div>
                    <div className="text-xs text-[#111111]/70">Totaal verdiend door partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-white py-12 md:py-22">
        <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-[#111111]">
                Verdien geld met je Bol expertise
              </h2>
              <p className="text-sm md:text-base text-[#111111]/70 max-w-2xl mx-auto">
                Of je nu coach bent, community runt of influencer - krijg betaald voor elke Bolbaas referral
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Bol Coaches */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <KiteIcon variant="blue" size={12} />
                <h3 className="text-xl md:text-2xl font-medium text-[#111111]">Bol coaches</h3>
              </div>
              <p className="text-sm md:text-base text-[#111111]/70 mb-6">
                Help je klanten met de beste Bol tools. <strong>Krijg tot €200 per referral + 30% maandelijkse commissie.</strong>
              </p>
            </div>

            {/* Bol Communities */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <KiteIcon variant="orange" size={12} />
                <h3 className="text-xl md:text-2xl font-medium text-[#111111]">Bol communities</h3>
              </div>
              <p className="text-sm md:text-base text-[#111111]/70 mb-6">
                Deel Bolbaas met je community. <strong>Verdien tot €200 per member + 30% maandelijkse commissie.</strong>
              </p>
            </div>

            {/* Bol Influencers */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <KiteIcon variant="purple" size={12} />
                <h3 className="text-xl md:text-2xl font-medium text-[#111111]">Bol influencers</h3>
              </div>
              <p className="text-sm md:text-base text-[#111111]/70 mb-6">
                Monetiseer je Bol content. <strong>Verdien tot €200 per follower + 30% maandelijkse commissie.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-white pb-8 md:pb-14 text-[#111111]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-2 md:gap-3">
            {/* Commission Structure */}
            <div className="col-span-12 md:col-span-4 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Tot €200</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">Per succesvolle referral</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Commissie →</div>
            </div>

            {/* Recurring Revenue */}
            <div className="col-span-12 md:col-span-5 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#FBEAE6' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-medium">30% recurring</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">Maandelijkse commissie</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Passive income →</div>
            </div>

            {/* Tracking Dashboard */}
            <div className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Real-time</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">tracking dashboard</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Analytics →</div>
            </div>

            {/* Marketing Materials */}
            <div className="col-span-12 md:col-span-5 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#F3EEFF' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Marketing kit</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">banners, content, links</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Materials →</div>
            </div>

            {/* Support */}
            <div className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#FBEAE6' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">24/7 support</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">dedicated team</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Help →</div>
            </div>

            {/* Custom Landing Pages */}
            <div className="col-span-12 md:col-span-4 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Custom pages</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">personalized landing</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Landing →</div>
            </div>


            {/* Payment Terms */}
            <div className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#F3EEFF' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Monthly payouts</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">via bank transfer</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Payments →</div>
            </div>

            {/* Performance Bonus */}
            <div className="col-span-12 md:col-span-4 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#FBEAE6' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="orange" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Performance bonus</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">extra rewards</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Bonus →</div>
            </div>

            {/* API Access */}
            <div className="col-span-12 md:col-span-3 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#EAF3FF' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="blue" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">API access</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">integration tools</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Developers →</div>
            </div>

            {/* Training Program */}
            <div className="col-span-12 md:col-span-5 rounded-xl md:rounded-2xl border border-transparent p-2.5 md:p-4 hover:opacity-95 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"
              style={{ backgroundColor: '#F3EEFF' }}>
              <div className="flex items-center gap-2">
                <KiteIcon variant="purple" size={10} />
                <div className="text-[24px] md:text-[28px] leading-none font-normal">Training program</div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-black/70">onboarding & support</div>
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] font-medium">Education →</div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-12 md:py-22">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-medium text-blue-600">SB</span>
              </div>
            </div>

            {/* Quote content */}
            <div className="flex-1 text-center md:text-left">
              <blockquote
                className="text-[30px] md:text-[36px] leading-[34px] md:leading-[40px] text-[#111111] mb-2 md:mb-3"
                style={{                  
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                "Met Bolbaas verdien ik €1.200+ per maand door mijn community te helpen groeien."
              </blockquote>

              <div
                className="text-[#111111]/60 text-[14px] md:text-[16px] leading-[16px] md:leading-[18px] font-normal"
              >
                Sarah van der Berg, Bol coach & affiliate partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-[#111111]">
              Word affiliate partner
            </h2>
            <p className="text-sm md:text-base text-[#111111]/70">
              Vul het formulier in en we nemen binnen 24 uur contact met je op
            </p>
          </div>

          <AffiliateForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111111] text-white py-16 md:py-32" data-dark-section="true">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-5 md:mb-6">Klaar om geld te verdienen?</h2>
          <p className="mx-auto text-white/80 font-normal text-sm md:text-base leading-[18px] md:leading-[21px] mb-8 md:mb-10 max-w-2xl">
            Word affiliate partner en verdien tot €200 per referral + 30% maandelijkse commissie. Geen kosten, geen risico's.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <EmailSignupForm 
              buttonText="Partner worden"
              placeholder="Vul je email in"
              showTestimonial={false}
            />
            <Link 
              href="/contact"
              className="text-white/80 hover:text-white text-sm md:text-base underline underline-offset-4 transition-colors"
            >
              Of stel je vragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
