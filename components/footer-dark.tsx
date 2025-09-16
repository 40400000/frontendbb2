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
    { title: 'AI & Tools', href: '/design-b/features/tools' },
    { title: 'Automatisering', href: '/design-b/features/automatisering' },
    { title: 'Store prestaties', href: '/design-b/features/store-prestaties' },
    { title: 'Product tracking', href: '/design-b/features/tools#product-tracking' },
    { title: 'Keyword database', href: '/design-b/features/tools#bolbaas-database' },
    { title: 'Ranking AI', href: '/design-b/features/tools#ranking-ai' },
  ];

  const whyUsLinks: FooterLink[] = [
    { title: 'Prijzen', href: '/design-b/prijzen' },
    { title: 'Klanten', href: '/design-b/contact' },
    { title: 'Oplossingen', href: '/design-b/features/tools' },
    { title: 'Vergelijking', href: '/design-b/blog' },
    { title: 'Over ons', href: '/design-b/contact' },
    { title: 'Manifest', href: '/design-b/blog' },
  ];

  const resourcesLinks: FooterLink[] = [
    { title: 'Blog', href: '/design-b/blog' },
    { title: 'YouTube', href: '#' },
    { title: 'Handleidingen', href: '/design-b/blog' },
    { title: 'Bol.com tips', href: '/design-b/blog' },
    { title: 'Nieuws', href: '/design-b/blog' },
    { title: 'Brand richtlijnen', href: '#' },
  ];

  const contactLinks: FooterLink[] = [
    { title: 'Word een Partner', href: '/design-b/contact' },
    { title: 'Help Center', href: '/design-b/contact' },
    { title: 'Carrières', href: '/design-b/contact', badge: 'WE HUREN' },
  ];

  const footerSections: { id: string; title: string; links: FooterLink[] }[] = [
    {
      id: 'product',
      title: 'Product',
      links: productLinks
    },
    {
      id: 'why-us',
      title: 'Waarom wij',
      links: whyUsLinks
    },
    {
      id: 'resources',
      title: 'Bronnen',
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
            <Link href="/design-b" className="flex items-center mb-6">
              <Image
                src="/iconnavbar-mode2.png"
                alt="Bolbaas"
                width={120}
                height={40}
                className=""
              />
            </Link>
            
            <div className="space-y-2 text-sm text-white/60">
              <p>Het Schip 237</p>
              <p>7325NM, Apeldoorn</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>

            {/* Demo Button */}
            <div className="mt-6">
              <Link 
                href="/design-b/contact"
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
              <Link href="/design-b/privacy" className="hover:text-white/80 transition-colors">
                Privacy Beleid
              </Link>
              <Link href="/design-b/algemene-voorwaarden" className="hover:text-white/80 transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="/design-b/verwerkersovereenkomst" className="hover:text-white/80 transition-colors">
                Verwerkersovereenkomst
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                Cookie Beleid
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                Veiligheid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
