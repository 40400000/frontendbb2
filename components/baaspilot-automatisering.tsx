'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";
import { KiteIcon } from "./ui/kite-icon";
import Link from 'next/link';
import { Button } from "./ui/button";

export function BaaspilotAutomatisering() {
  const [isBaaspilotVisible, setIsBaaspilotVisible] = useState(false);
  const baaspilotTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === baaspilotTextRef.current) {
              setIsBaaspilotVisible(true);
              observer.unobserve(entry.target); // Stop observing once visible
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentBaaspilotRef = baaspilotTextRef.current;

    if (currentBaaspilotRef) {
      observer.observe(currentBaaspilotRef);
    }

    return () => {
      if (currentBaaspilotRef) {
        observer.unobserve(currentBaaspilotRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section id="baaspilot" className="relative overflow-hidden bg-[#111111] py-24 lg:py-32" data-dark-section="true">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-[45px] leading-[45px] font-normal text-white tracking-tight mb-5">
            Baaspilot
          </h2>
          <p className="text-[16px] leading-[21px] font-normal text-white/70 max-w-2xl">
            Jouw persoonlijke copiloot die je op de hoogte houdt van alle belangrijke gebeurtenissen in jouw store en getrackte producten.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div ref={baaspilotTextRef} className="space-y-5">
            {/* Feature Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <KiteIcon variant="blue" size={11} />
                <span className="text-[10px] leading-[12px] font-normal text-white tracking-wide uppercase">
                  AI ASSISTENT
                </span>
              </div>
              <h3 className="text-[45px] leading-[45px] font-normal text-white tracking-tight max-w-lg">
                Jouw copiloot voor bol.
              </h3>
              <p className="text-[16px] leading-[21px] font-normal text-white/70 max-w-md">
                Baaspilot houdt je op de hoogte van alle belangrijkste gebeurtenissen in jouw store en getrackte producten. Van nieuwe reviews tot prijswijzigingen van concurrenten.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start">
              <Button 
                asChild
                className="bg-white text-[#111111] text-[14px] leading-[20px] font-normal hover:bg-white/90 px-6 py-3 h-auto rounded-xl"
              >
                <a 
                  href="https://app.baasy.nl/registreren"
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

          {/* Right side: Animated Image Stack */}
          <div className={`relative w-full transition-opacity duration-1000 ease-in ${isBaaspilotVisible ? 'opacity-100' : 'opacity-0'} min-h-[450px]`}>
            {/* Image 1 (Bottom) */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/baas-pilot-3-XhikBukvJB9xm24eCCRcpdQ0qiCh8z.png"
              alt="Baaspilot Visualisatie 3"
              width={500}
              height={281}
              className={`absolute top-16 -left-4 sm:left-0 z-10 rounded-xl shadow-lg object-cover border border-neutral-700 transition-transform duration-700 ease-out ${isBaaspilotVisible ? 'translate-y-0' : 'translate-y-10'}`}
            />
            {/* Image 2 (Middle) */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/baas-pilot-2-VBiH89oPhW8QatnzHzMJcg0pXYjucc.png"
              alt="Baaspilot Visualisatie 2"
              width={500}
              height={281}
              className={`absolute top-28 left-8 sm:left-12 z-20 rounded-xl shadow-lg object-cover border border-neutral-700 transition-transform duration-700 ease-out delay-100 ${isBaaspilotVisible ? 'translate-y-0' : 'translate-y-12'}`}
            />
            {/* Image 3 (Top) */}
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/baas-pilot-1-bSfLTh4FTYs4O9cAyzETz1tuVeLpXJ.png"
              alt="Baaspilot Visualisatie 1"
              width={500}
              height={281}
              className={`absolute top-40 left-20 sm:left-24 z-30 rounded-xl shadow-lg object-cover border border-neutral-700 transition-transform duration-700 ease-out delay-200 ${isBaaspilotVisible ? 'translate-y-0' : 'translate-y-14'}`}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Feature 1 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 01-7.5-7.5h-5l5-5 5 5h-5v5a7.5 7.5 0 017.5 7.5z" />
              </svg>
              <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">01</span>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-[16px] leading-[20px] font-normal text-white">
                Automatische meldingen
              </h3>
              <p className="text-[14px] leading-[18px] font-normal text-white/70">
                Krijg direct een melding bij belangrijke gebeurtenissen zoals nieuwe reviews, prijswijzigingen of voorraadproblemen.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">02</span>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-[16px] leading-[20px] font-normal text-white">
Koopblok monitoring              </h3>
              <p className="text-[14px] leading-[18px] font-normal text-white/70">
Baaspilot houdt automatisch het koopblok in de gaten, zodat je actie kan ondernemen als je deze verliest.             </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-[10px] leading-[12px] font-normal text-white/60 tracking-wide uppercase">03</span>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-[16px] leading-[20px] font-normal text-white">
                Proactieve waarschuwingen
              </h3>
              <p className="text-[14px] leading-[18px] font-normal text-white/70">
                Krijg een waarschuwing voordat problemen optreden, zoals dalende rankings of uitverkochte producten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
