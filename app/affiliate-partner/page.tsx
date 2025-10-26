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
    title: "Affiliate partner worden - Baasy",
    description: "Word affiliate partner van Baasy. Verdien met Bol coaches, communities en influencers. Samen groeien in de Bol ecosystem.",
    openGraph: {
      title: "Affiliate partner worden - Baasy",
      description: "Word affiliate partner van Baasy. Verdien met Bol coaches, communities en influencers. Samen groeien in de Bol ecosystem.",
      images: [
        {
          url: 'https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png',
          width: 1200,
          height: 630,
          alt: 'Baasy Affiliate Partner Open Graph Image',
        },
      ],
    },
    twitter: {
      title: "Affiliate partner worden - Baasy",
      description: "Word affiliate partner van Baasy. Verdien met Bol coaches, communities en influencers.",
      images: ['https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png'],
    },
  };

export default function AffiliatePartnerPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full flex items-start justify-center pt-16 md:pt-28 pb-20 md:pb-32 bg-white text-[#111111] overflow-hidden px-4 md:px-6">
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
                <span className="text-xs md:text-sm font-medium text-[#111111]">Verdien met Baasy</span>
                <MdOutlineArrowOutward className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <h1 className="mx-auto max-w-[28ch] md:max-w-[32ch] text-[32px] md:text-[48px] leading-[36px] md:leading-[48px] font-normal tracking-tight mb-5 md:mb-6 text-balance">
              Verdien <em className="italic">geld</em> door Baasy te delen.
            </h1>

            <p className="mx-auto max-w-xl text-sm md:text-lg leading-[20px] md:leading-[24px] opacity-70 mb-6 md:mb-8">
              Tot €200 per referral + 30% maandelijkse commissie. Perfect voor Bol coaches, communities en influencers.
            </p>

            <EmailSignupForm 
              buttonText="Partner worden"
              placeholder="Vul je email in"
              showTestimonial={false}
              sendTo="AW-17372857270/1maandcta"
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
                Of je nu coach bent, community runt of influencer - krijg betaald voor elke Baasy referral
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
                Deel Baasy met je community. <strong>Verdien tot €200 per member + 30% maandelijkse commissie.</strong>
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



      {/* Testimonial Section */}


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
              sendTo="AW-17372857270/1maandcta"
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
