'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  badge?: string;
}

export function FooterDark() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const productLinks: FooterLink[] = [
    { title: 'AI Research tools', href: '/features/tools' },
    { title: 'Automatisering', href: '/features/automatisering' },
    { title: 'Store prestaties', href: '/features/store-prestaties' },
    { title: 'Product tracking', href: '/features/tracking' },
    { title: 'Keyword database', href: '/features/tools#bolbaas-database', badge: 'NIEUW' },
    { title: 'Ranking AI', href: '/features/tools#ranking-ai' },
  ];

  const whyUsLinks: FooterLink[] = [
    { title: 'Prijzen', href: '/prijzen' },
    { title: 'Bolbaas vs. Bolmate', href: '/waarom-ons/bolbaas-vs-bolmate' },
    { title: 'Partner worden', href: '/partner-worden' },
    { title: 'Educatie & Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
    { title: 'Wachtlijst', href: '/wachtlijst' },
  ];

  const resourcesLinks: FooterLink[] = [
    { title: 'Starten als Bol partner in 2025', href: '/blog/starten-als-bol-partner-in-2025' },
    { title: 'BTW-aangifte Bol ICP', href: '/blog/btw-aangifte-bol-icp' },
    { title: 'Meer reviews op Bol', href: '/blog/meer-reviews-op-bol' },
    { title: 'Verkopen Bol AI tijdperk', href: '/blog/verkopen-bol-ai-tijdperk' },
    { title: 'Alle blogs', href: '/blog' },
    { title: 'YouTube', href: '#' },
  ];

  const contactLinks: FooterLink[] = [
    { title: 'Contact opnemen', href: '/contact' },
    { title: 'Affiliate partner', href: '/affiliate-partner' },
    { title: 'Help Center', href: '/contact' },
  ];

  const footerSections: { id: string; title: string; links: FooterLink[] }[] = [
    {
      id: 'product',
      title: 'Product',
      links: productLinks
    },
    {
      id: 'why-us',
      title: 'Waarom ons',
      links: whyUsLinks
    },
    {
      id: 'resources',
      title: 'Educatie',
      links: resourcesLinks
    },
    {
      id: 'contact',
      title: 'Contact',
      links: contactLinks
    }
  ];

  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/iconnavbar-mode2.png"
                alt="Bolbaas"
                width={120}
                height={40}
                className=""
              />
            </Link>
            
            <div className="space-y-2 text-sm text-white/60">
              
            </div>


            {/* Demo Button */}
            <div className="mt-6">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#111111] px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Bekijk Demo
              </Link>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.id} className="lg:col-span-1">
              {/* Mobile Toggle Header */}
              <button
                className="lg:hidden w-full flex items-center justify-between py-3 text-left font-medium text-white"
                onClick={() => toggleSection(section.id)}
              >
                {section.title}
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    openSections.includes(section.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Desktop Header */}
              <h3 className="hidden lg:block font-medium text-white mb-4">
                {section.title}
              </h3>

              {/* Links */}
              <div className={`${
                openSections.includes(section.id) 
                  ? 'block' 
                  : 'hidden'
              } lg:block space-y-3`}>
                {section.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-sm text-white/60 hover:text-white/80 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {link.title}
                      {link.badge && (
                        <span className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded">
                          {link.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2025 Bolbaas
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-white/80 transition-colors">
                Privacy Beleid
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white/80 transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="/verwerkersovereenkomst" className="hover:text-white/80 transition-colors">
                Verwerkersovereenkomst
              </Link>


            </div>

            {/* Right side images */}
            <div className="flex items-center gap-4">
              <Image
                src="/Flag_of_Europe.svg.png"
                alt="European Union Flag"
                width={48}
                height={48}
                className=""
              />
              <Image
                src="/1035147.png"
                alt="GDPR Compliant"
                width={48}
                height={48}
                className="rounded-full invert"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
