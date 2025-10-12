'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { KiteIcon } from '@/components/ui/kite-icon';

export function NavbarB() {
const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('automatisering');
  const [activeWhyCategory, setActiveWhyCategory] = useState<string>('vergelijkingen');
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);

  const handlePrijzenClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/waarom-ons/bolbaas-vs-bolmate' || pathname === '/waarom-ons/bolbaas-vs-bolbuddy' || pathname === '/waarom-ons/bolbaas-vs-buddli') {
      e.preventDefault();
      const prijzenSection = document.getElementById('prijzen');
      if (prijzenSection) {
        prijzenSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

      const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Find all sections marked as dark
      const darkSections = document.querySelectorAll('[data-dark-section="true"]');
      let isOverDarkSection = false;
      
      // Debug logging
      if (process.env.NODE_ENV === 'development') {
        console.log('🌙 Dark mode detection:', {
          scrollY: window.scrollY,
          scrolled,
          darkSectionsFound: darkSections.length,
        });
      }
      
      // Check if navbar overlaps with any dark section
      const navbarHeight = 100; // Height of navbar detection area
      
      darkSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        // A section overlaps with navbar if:
        // - Section top is above navbar bottom AND
        // - Section bottom is below navbar top
        const isOverlapping = rect.top <= navbarHeight && rect.bottom >= 0;
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`🌙 Section ${index + 1}:`, {
            top: Math.round(rect.top),
            bottom: Math.round(rect.bottom),
            height: Math.round(rect.height),
            isOverlapping,
            className: section.className,
          });
        }
        
        if (isOverlapping) {
          isOverDarkSection = true;
        }
      });
      
      // Activate dark mode when over dark section (both scrolled and unscrolled states)
      const shouldBeDark = isOverDarkSection;
      
      if (process.env.NODE_ENV === 'development') {
        console.log('🌙 Final result:', {
          isOverDarkSection,
          scrolled,
          shouldBeDark,
          willChange: shouldBeDark !== isDarkMode,
        });
      }
      
      setIsDarkMode(shouldBeDark);
    };

// Effect for pathname changes - refresh navbar state when navigating
  useEffect(() => {
    // Small delay to ensure DOM is updated after navigation
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Effect for scroll events
  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial check on page load

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [isDarkMode]);

  // Left side categories for the mega menu
  const functionCategories: {
    id: string;
    label: string;
    subtitle: string;
    href: string;
    color: 'blue' | 'orange' | 'purple';
  }[] = [
    { id: 'tools', label: 'AI Research tools', subtitle: 'Next level product research tools', href: '/features/tools', color: 'blue' },
    { id: 'automatisering', label: 'Automatisering', subtitle: 'Automatisch e-mails en facturen', href: '/features/automatisering', color: 'orange' },
    { id: 'store-prestaties', label: 'Store prestaties', subtitle: 'Overzicht en inzichten over je store', href: '/features/store-prestaties', color: 'purple' },
  ];

  // Right side subsections per category (from original navigation-menu-demo.tsx)
  const functionSubsections: Record<string, { title: string; description: string; href: string; badge?: string }[]> = {
    automatisering: [
      { title: 'Factuur automatisering', description: 'BTW-factuur uploads en boekhouding', href: '/features/automatisering#store-automatisering' },
      { title: 'E-mail automatisering', description: 'Verzamel meer reviews automatisch', href: '/features/automatisering#email-campagnes' },
      { title: 'BTW-aangifte automatisering', description: 'Automatische berekening en boekhouding', href: '/features/automatisering#btw-automatisering' },
      { title: 'Baaspilot', description: 'Direct op de hoogte van gebeurtenissen', href: '/features/automatisering#baaspilot' },
    ],
    'store-prestaties': [
      { title: 'Custom sales dashboard', description: 'Bouw dashboards voor jouw belangrijke cijfers', href: '/features/store-prestaties#custom-dashboards' },
      { title: 'Product prestaties', description: 'Uitgebreid overzicht van verkoopprestaties', href: '/features/store-prestaties#product-prestaties' },
      { title: 'Bestellingen', description: 'Gedetailleerde analyse van je bestellingen', href: '/features/store-prestaties#bestellingen-beheren' },
      { title: 'Sales en voorraad schattingen', description: 'Voorspel verkoop en wanneer bijbestellen', href: '/features/store-prestaties#sales-forecasting' },
      { title: 'Levering tracker', description: 'Track leveringen en verwachte aankomsttijden', href: '/features/store-prestaties#levering-tracker' },
    ],
    tools: [
      { title: 'Keyword database', description: 'Keywordonderzoek met 12+ miljoen keywords', href: '/features/tools#bolbaas-database', badge: 'NIEUW' },
      { title: 'Ranking AI', description: 'AI-gestuurde listing optimalisatie', href: '/features/tools#ranking-ai' },
      { title: 'Product & keyword tracking', description: 'Track producten en concurrenten nauwkeurig', href: '/features/tools#product-tracking' },
      { title: 'CPC tracker', description: 'Monitor advertising kosten en prestaties', href: '/features/tools#cpc-tracker' },
      { title: 'Winst & ACoS calculator', description: 'Bereken winst en advertising kosten', href: '/features/tools#winst-calculator' },
      { title: 'A/B testen van listings', description: 'Test verschillende versies van productpagina', href: '/features/tools#ab-testing' },
      { title: 'Project management', description: 'Organiseer je Bol.com projecten efficiënt', href: '/features/tools#project-management' },
    ],
  };

  // Waarom ons dropdown data (no icons)
  const whyCategories: { id: string; label: string; subtitle?: string; href?: string }[] = [
    { id: 'vergelijkingen', label: 'Bolbaas vs andere tools', subtitle: 'Zie hoe we ons verhouden' },
    { id: 'partner', label: 'Partner worden', subtitle: 'Word affiliate partner bij groei van Bolbaas', href: '/partner-worden' },
    { id: 'educatie', label: 'Educatie', subtitle: 'Handleidingen en blogs', href: '/blog' },
  ];

  const whySubsections: Record<string, { title: string; href: string }[]> = {
    vergelijkingen: [
      { title: 'Bolbaas vs. Bolmate', href: '/waarom-ons/bolbaas-vs-bolmate' },
      { title: 'Bolbaas vs. Bolbuddy', href: '/waarom-ons/bolbaas-vs-bolbuddy' },
      { title: 'Bolbaas vs. Buddli', href: '/waarom-ons/bolbaas-vs-buddli' },
      { title: 'Bolbaas vs. Bollify', href: '/waarom-ons/bolbaas-vs-bollify' },
      { title: 'Bolbaas vs. Boloo', href: '/waarom-ons/bolbaas-vs-boloo' },
      { title: 'Bolbaas vs. Rylee', href: '/waarom-ons/bolbaas-vs-rylee' },
    ],
  };


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'pt-2 px-4' 
          : ''
      }`}
    >
      <div 
        className={`transition-all duration-500 ease-out ${
          isScrolled
            ? `container mx-auto max-w-5xl rounded-xl shadow-lg ${
                isDarkMode 
                  ? 'bg-[#242323] border border-[#2D2C2B]' 
                  : 'bg-white/80 backdrop-blur-md border border-black/5'
              }`
            : 'w-full border border-transparent'
        }`}
      >
        <div className={`flex items-center ${
          isScrolled ? 'justify-between px-2 pr-4 h-12' : 'justify-start gap-4 px-4 sm:px-24 h-18'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {isScrolled ? (
              <Image
                src="/iconnavbar-mode2.png"
                alt="Bolbaas"
                width={40}
                height={40}
                className={`filter ${isDarkMode ? '' : 'invert'}`}
              />
            ) : (
              <>
                {/* Desktop: Show big logo */}
                <div className="hidden md:block">
                  {isDarkMode ? (
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/logo_head_zwart-yUz45E2pM84TsaxNb7K57ZxcaTfTsH.png"
                      alt="Bolbaas"
                      width={220}
                      height={74}
                      className="filter invert"
                    />
                  ) : (
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/logo_head_zwart-yUz45E2pM84TsaxNb7K57ZxcaTfTsH.png"
                      alt="Bolbaas"
                      width={220}
                      height={74}
                    />
                  )}
                </div>
                {/* Mobile: Show icon only */}
                <div className="md:hidden">
                  <Image
                    src="/iconnavbar-mode2.png"
                    alt="Bolbaas"
                    width={40}
                    height={40}
                    className={`filter ${isDarkMode ? '' : 'invert'}`}
                  />
                </div>
              </>
            )}
          </Link>

          {/* Navigation */}
          <nav className={`hidden md:flex gap-6 text-sm font-medium relative ${
            isScrolled ? '' : 'flex-1'
          } ${
            isDarkMode ? 'text-white' : 'text-[#111111]'
          }`}>
            {/* Functies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('functies');
                setIsHoveringDropdown(true);
              }}
              onMouseLeave={() => {
                setIsHoveringDropdown(false);
                setTimeout(() => {
                  if (!isHoveringDropdown) {
                    setActiveDropdown(null);
                  }
                }, 100);
              }}
            >
              <button className={`flex items-center gap-1 transition-all duration-200 px-4 py-2 rounded-xl relative ${
                activeDropdown === 'functies' 
                  ? isDarkMode 
                    ? 'bg-[#242323] border border-[#2D2C2B] shadow-sm text-white' 
                    : 'bg-white/100 backdrop-blur-md shadow-sm text-black'
                  : isDarkMode 
                    ? 'hover:text-white/80' 
                    : 'hover:text-black/80'
              }`}>
                Functies
                <ChevronDown className="h-3 w-3" />
                {pathname.startsWith('/features') && (
                  <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                    isDarkMode ? 'bg-white' : 'bg-[#111111]'
                  }`} />
                )}
              </button>
              {activeDropdown === 'functies' && (
                <div
                  className={`absolute top-full left-0 mt-2 w-[720px] border rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 overflow-hidden p-2 animate-in fade-in-0 zoom-in-95 duration-200 transition-all ${
                    isDarkMode 
                      ? 'bg-[#242323] border-[#2D2C2B]' 
                      : 'bg-white/100 backdrop-blur-md border-black/5'
                  }`}
                  onMouseEnter={() => setIsHoveringDropdown(true)}
                  onMouseLeave={() => {
                    setIsHoveringDropdown(false);
                    setActiveDropdown(null);
                  }}
                >
                  <div
                    className="grid grid-cols-[240px_1px_1fr] transition-all duration-300 ease-out"
                    style={{
                      minHeight: (functionSubsections[activeCategory] ?? []).length > 4 ? '320px' : 
                                 (functionSubsections[activeCategory] ?? []).length > 2 ? '240px' : '200px'
                    }}
                  >
                    {/* Left: categories */}
                    <div className="relative">
                      <div className="flex flex-col gap-1.5 py-2 px-2">
                        {functionCategories.map((cat) => {
                          const isActive = activeCategory === cat.id;
                          return (
                            <Link
                              key={cat.id}
                              href={cat.href}
                              onMouseEnter={() => setActiveCategory(cat.id)}
                              onFocus={() => setActiveCategory(cat.id)}
                              className={`group flex items-start gap-0 px-2.5 py-2.5 text-left transition-colors cursor-pointer ${
                                isActive 
                                  ? isDarkMode 
                                    ? 'bg-[#323131] border border-[#3D3C3B] rounded-xl' 
                                    : 'bg-[#F6F5F3] border border-[#EAE9E7] rounded-xl'
                                  : isDarkMode 
                                    ? 'hover:bg-white/[0.05] rounded-xl' 
                                    : 'hover:bg-black/[0.03] rounded-xl'
                              }`}
                            >
                              <div className="flex-1 scale-95 origin-left">
                                <div className={`flex items-center gap-2 text-[15px] leading-[15px] font-medium ${
                                  isDarkMode ? 'text-white' : 'text-[#111111]'
                                }`}>
                                  <KiteIcon variant={cat.color} size={9} />
                                  {cat.label}
                                </div>
                                <div className={`text-[13px] leading-[16px] ${
                                  isDarkMode ? 'text-white/60' : 'text-[rgba(17,17,17,0.6)]'
                                }`}>{cat.subtitle}</div>
                              </div>
                              <span className={`ml-auto scale-95 ${
                                isDarkMode ? 'text-white/50' : 'text-[#111111]/50'
                              }`}>→</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    {/* Separator */}
                    <div className={`my-2 ${
                      isDarkMode ? 'bg-[#3D3C3B]' : 'bg-[#EAE9E7]'
                    }`}></div>
                    {/* Right: contextual subsections */}
                    <div className="relative">
                      <div className={`gap-1.5 px-2 transition-all duration-300 ease-out ${
                        (functionSubsections[activeCategory] ?? []).length > 3 
                          ? 'grid grid-cols-2' 
                          : 'flex flex-col'
                      }`}>
                        {(functionSubsections[activeCategory] ?? []).map((item) => (
                          <Link
                            key={`${activeCategory}-${item.title}`}
                            href={item.href}
                            className="group rounded-xl px-2.5 py-2.5 transition-all duration-200 cursor-pointer scale-95 origin-left hover:bg-transparent animate-in fade-in-0 duration-300"
                          >
                            <div className="flex-1">
                              <div className={`flex items-center gap-2 text-[15px] leading-[15px] font-medium transition-colors ${
                                isDarkMode 
                                  ? 'text-white group-hover:text-red-400' 
                                  : 'text-[#111111] group-hover:text-red-500'
                              }`}>
                         
                                {item.title}


                                       {item.badge && (
                                  <span className="inline-flex items-center rounded-xl bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-800">
                                    {item.badge}
                                  </span>
                                )}


                              </div>
                              <p className={`mt-1 text-[13px] leading-[16px] ${
                                isDarkMode ? 'text-white/60' : 'text-[rgba(17,17,17,0.6)]'
                              }`}>
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          
            {/* Waarom ons Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('waarom-ons');
                setIsHoveringDropdown(true);
              }}
              onMouseLeave={() => {
                setIsHoveringDropdown(false);
                setTimeout(() => {
                  if (!isHoveringDropdown) {
                    setActiveDropdown(null);
                  }
                }, 100);
              }}
            >
              <button className={`flex items-center gap-1 transition-all duration-200 px-4 py-2 rounded-xl relative ${
                activeDropdown === 'waarom-ons' 
                  ? isDarkMode 
                    ? 'bg-[#242323] border border-[#2D2C2B] shadow-sm text-white' 
                    : 'bg-white/100 backdrop-blur-md shadow-sm text-black'
                  : isDarkMode 
                    ? 'hover:text-white/80' 
                    : 'hover:text-black/80'
              }`}>
                Waarom ons
                <ChevronDown className="h-3 w-3" />
                {(pathname.startsWith('/waarom-ons') || pathname.startsWith('/blog') || pathname.startsWith('/partner-worden')) && (
                  <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                    isDarkMode ? 'bg-white' : 'bg-[#111111]'
                  }`} />
                )}
              </button>
              {activeDropdown === 'waarom-ons' && (
                <div
                  className={`absolute top-full left-0 mt-2 ${
                    activeWhyCategory === 'vergelijkingen' ? 'w-[460px]' : 'w-[280px]'
                  } border rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 overflow-hidden p-2 animate-in fade-in-0 zoom-in-95 duration-200 transition-all ${
                    isDarkMode 
                      ? 'bg-[#242323] border-[#2D2C2B]' 
                      : 'bg-white/100 backdrop-blur-md border-black/5'
                  }`}
                  onMouseEnter={() => setIsHoveringDropdown(true)}
                  onMouseLeave={() => {
                    setIsHoveringDropdown(false);
                    setActiveDropdown(null);
                  }}
                >
                  <div
                    className={`${
                      activeWhyCategory === 'vergelijkingen' 
                        ? 'grid grid-cols-[240px_1px_180px]' 
                        : 'flex'
                    } transition-all duration-300 ease-out`}
                    style={{
                      minHeight: activeWhyCategory === 'vergelijkingen' 
                        ? ((whySubsections[activeWhyCategory] ?? []).length > 4 ? '320px' : 
                           (whySubsections[activeWhyCategory] ?? []).length > 2 ? '240px' : '200px')
                        : '200px'
                    }}
                  >
                    {/* Left: categories (no icons) */}
                    <div className={`relative ${
                      activeWhyCategory === 'vergelijkingen' ? '' : 'w-full'
                    }`}>
                      <div className="flex flex-col gap-1.5 py-2 px-2">
                        {whyCategories.map((cat) => {
                          const isActive = activeWhyCategory === cat.id;
                          const commonClasses = `group flex items-start gap-0 px-2.5 py-2.5 text-left transition-colors cursor-pointer ${
                            isActive 
                              ? isDarkMode 
                                ? 'bg-[#323131] border border-[#3D3C3B] rounded-xl' 
                                : 'bg-[#F6F5F3] border border-[#EAE9E7] rounded-xl'
                              : isDarkMode 
                                ? 'hover:bg-white/[0.05] rounded-xl' 
                                : 'hover:bg-black/[0.03] rounded-xl'
                          }`;
                          return cat.href ? (
                            <Link
                              key={cat.id}
                              href={cat.href}
                              className={`${commonClasses} group`}
                              onMouseEnter={() => setActiveWhyCategory('')}
                            >
                              <div className="flex-1 scale-95 origin-left">
                                <div className={`flex items-center gap-2 text-[15px] leading-[15px] font-medium transition-colors ${
                                  isDarkMode 
                                    ? 'text-white group-hover:text-red-400' 
                                    : 'text-[#111111] group-hover:text-red-500'
                                }`}>
                                  {cat.label}
                                </div>
                                {cat.subtitle && (
                                  <div className={`text-[13px] leading-[16px] ${
                                    isDarkMode ? 'text-white/60' : 'text-[rgba(17,17,17,0.6)]'
                                  }`}>{cat.subtitle}</div>
                                )}
                              </div>
                            </Link>
                          ) : (
                            <button
                              key={cat.id}
                              onMouseEnter={() => setActiveWhyCategory(cat.id)}
                              onFocus={() => setActiveWhyCategory(cat.id)}
                              className={commonClasses}
                            >
                              <div className="flex-1 scale-95 origin-left">
                                <div className={`flex items-center gap-2 text-[15px] leading-[15px] font-medium ${
                                  isDarkMode ? 'text-white' : 'text-[#111111]'
                                }`}>
                                  {cat.label}
                                </div>
                                {cat.subtitle && (
                                  <div className={`text-[13px] leading-[16px] ${
                                    isDarkMode ? 'text-white/60' : 'text-[rgba(17,17,17,0.6)]'
                                  }`}>{cat.subtitle}</div>
                                )}
                              </div>
                              <span className={`ml-auto scale-95 ${
                                isDarkMode ? 'text-white/50' : 'text-[#111111]/50'
                              }`}>→</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {/* Separator and Right section (only for comparisons) */}
                    {activeWhyCategory === 'vergelijkingen' && (
                      <>
                        <div className={`my-2 ${
                          isDarkMode ? 'bg-[#3D3C3B]' : 'bg-[#EAE9E7]'
                        }`}></div>
                        <div className="relative">
                      <div className="flex flex-col gap-2 px-2 py-2 transition-all duration-300 ease-out">
                        {(whySubsections[activeWhyCategory] ?? []).map((item) => {
                          const isBolmate = item.title === 'Bolbaas vs. Bolmate';
                          const isBolbuddy = item.title === 'Bolbaas vs. Bolbuddy';
                          const isBuddli = item.title === 'Bolbaas vs. Buddli';
                          const isBollify = item.title === 'Bolbaas vs. Bollify';
                          const isBoloo = item.title === 'Bolbaas vs. Boloo';
                          const isDisabled = !isBolmate && !isBolbuddy && !isBuddli && !isBollify && !isBoloo;
                          
                          return isDisabled ? (
                            <div
                              key={`${activeWhyCategory}-${item.title}`}
                              className="rounded-xl px-3 py-2.5 cursor-not-allowed animate-in fade-in-0 duration-300"
                            >
                              <div className="flex-1">
                                <div className={`flex items-center gap-2 text-[14px] leading-[18px] font-medium ${
                                  isDarkMode 
                                    ? 'text-white/30' 
                                    : 'text-[#111111]/30'
                                }`}>
                                  {item.title}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={`${activeWhyCategory}-${item.title}`}
                              href={item.href}
                              className={`group rounded-xl px-3 py-2.5 transition-all duration-200 cursor-pointer hover:bg-transparent animate-in fade-in-0 duration-300 ${
                                isDarkMode 
                                  ? 'hover:bg-white/[0.05]' 
                                  : 'hover:bg-black/[0.03]'
                              }`}
                            >
                              <div className="flex-1">
                                <div className={`flex items-center gap-2 text-[14px] leading-[18px] font-medium transition-colors ${
                                  isDarkMode 
                                    ? 'text-white group-hover:text-red-400' 
                                    : 'text-[#111111] group-hover:text-red-500'
                                }`}>
                                  {item.title}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Gratis tools Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('gratis-tools');
                setIsHoveringDropdown(true);
              }}
              onMouseLeave={() => {
                setIsHoveringDropdown(false);
                setTimeout(() => {
                  if (!isHoveringDropdown) {
                    setActiveDropdown(null);
                  }
                }, 100);
              }}
            >
              <button className={`flex items-center gap-1 transition-all duration-200 px-4 py-2 rounded-xl relative ${
                activeDropdown === 'gratis-tools' 
                  ? isDarkMode 
                    ? 'bg-[#242323] border border-[#2D2C2B] shadow-sm text-white' 
                    : 'bg-white/100 backdrop-blur-md shadow-sm text-black'
                  : isDarkMode 
                    ? 'hover:text-white/80' 
                    : 'hover:text-black/80'
              }`}>
                Gratis tools
                <ChevronDown className="h-3 w-3" />
                {pathname.startsWith('/gratis-bol-factuur-maken') && (
                  <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                    isDarkMode ? 'bg-white' : 'bg-[#111111]'
                  }`} />
                )}
              </button>
              {activeDropdown === 'gratis-tools' && (
                <div
                  className={`absolute top-full left-0 mt-2 w-[280px] border rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 overflow-hidden p-2 animate-in fade-in-0 zoom-in-95 duration-200 transition-all ${
                    isDarkMode 
                      ? 'bg-[#242323] border-[#2D2C2B]' 
                      : 'bg-white/100 backdrop-blur-md border-black/5'
                  }`}
                  onMouseEnter={() => setIsHoveringDropdown(true)}
                  onMouseLeave={() => {
                    setIsHoveringDropdown(false);
                    setActiveDropdown(null);
                  }}
                >
                  <div className="flex flex-col gap-1.5 py-2">
                    <Link
                      href="/gratis-bol-factuur-maken"
                      className={`group rounded-xl px-3 py-2.5 transition-all duration-200 cursor-pointer hover:bg-transparent animate-in fade-in-0 duration-300 ${
                        isDarkMode 
                          ? 'hover:bg-white/[0.05]' 
                          : 'hover:bg-black/[0.03]'
                      }`}
                    >
                      <div className="flex-1">
                        <div className={`flex items-center gap-2 text-[14px] leading-[18px] font-medium transition-colors ${
                          isDarkMode 
                            ? 'text-white group-hover:text-red-400' 
                            : 'text-[#111111] group-hover:text-red-500'
                        }`}>
                          <KiteIcon variant="blue" size={9} />
                          BTW factuur maken
                        </div>
                        <div className={`text-[13px] leading-[16px] mt-1 ${
                          isDarkMode ? 'text-white/60' : 'text-[rgba(17,17,17,0.6)]'
                        }`}>
                          Maak gratis BTW facturen voor je Bol bestellingen
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/prijzen" onClick={handlePrijzenClick} className={`flex items-center gap-1 transition-colors px-4 py-2 relative ${
              isDarkMode ? 'hover:text-white/80' : 'hover:text-black/80'
            }`}>
              Prijzen
              {pathname === '/prijzen' && (
                <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                  isDarkMode ? 'bg-white' : 'bg-[#111111]'
                }`} />
              )}
            </Link>
            <Link href="/contact" className={`flex items-center gap-1 transition-colors px-4 py-2 relative ${
              isDarkMode ? 'hover:text-white/80' : 'hover:text-black/80'
            }`}>
              Contact
              {pathname === '/contact' && (
                <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                  isDarkMode ? 'bg-white' : 'bg-[#111111]'
                }`} />
              )}
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className={`hidden md:flex items-center gap-3 ${
            isScrolled ? 'ml-auto' : 'ml-auto'
          }`}>
            <Button 
              variant="outline" 
              asChild
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer ${
                isDarkMode 
                  ? 'border border-white/30 text-white bg-transparent hover:bg-white/5'
                  : 'border border-[#111111]/30 text-[#111111] bg-transparent hover:bg-[#111111]/5'
              }`}
            >
              <Link href="https://app.bolbaas.nl" target="_blank" rel="noopener noreferrer">
                Naar app
              </Link>
            </Button>
            <Button 
              asChild
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer ${
                isDarkMode
                  ? 'bg-white text-[#111111] hover:bg-white/90'
                  : 'bg-[#111111] text-white hover:bg-black/80'
              }`}
            >
              <Link href="https://app.bolbaas.nl/registreren" target="_blank" rel="noopener noreferrer">
                Probeer gratis
              </Link>
            </Button>
          </div>

          {/* Mobile Action Button - Only "Probeer gratis" */}
          <div className={`md:hidden flex items-center ${
            isScrolled ? 'ml-auto mr-3' : 'ml-auto'
          }`}>
            <Button 
              asChild
              className={`rounded-xl px-3 py-0 text-xs font-medium transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer ${
                isDarkMode
                  ? 'bg-white text-[#111111] hover:bg-white/90'
                  : 'bg-[#111111] text-white hover:bg-black/80'
              }`}
            >
              <Link href="https://app.bolbaas.nl/registreren" target="_blank" rel="noopener noreferrer">
                Probeer gratis
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-1 ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span className={`block h-[1.5px] w-5 bg-current rounded-xl transform transition-all duration-300 ease-in-out absolute ${
                isMenuOpen ? 'rotate-45' : 'top-[7px]'
              }`} />
              <span className={`block h-[1.5px] w-5 bg-current rounded-xl transform transition-all duration-300 ease-in-out absolute ${
                isMenuOpen ? '-rotate-45' : 'bottom-[7px]'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className={`md:hidden ${
              isDarkMode 
                ? 'bg-[#111111]' 
                : 'bg-white'
            }`}
            role="navigation"
            aria-label="Mobiele navigatie"
          >
            <div className="flex flex-col">
              {/* Functies Section */}
              <div className={`border-b ${
                isDarkMode ? 'border-white/10' : 'border-black/5'
              }`}>
                <button
                  onClick={() => setExpandedMobileSection(expandedMobileSection === 'functies' ? null : 'functies')}
                  className={`w-full flex items-center justify-between px-4 py-4 text-left ${
                    isDarkMode 
                      ? 'text-white hover:text-white/80' 
                      : 'text-[#111111] hover:text-[#111111]/80'
                  }`}
                >
                  <span className="font-medium">Functies</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    expandedMobileSection === 'functies' ? 'rotate-180' : ''
                  }`} />
                </button>
                {expandedMobileSection === 'functies' && (
                  <div className={`px-4 pb-4 ${
                    isDarkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'
                  }`}>
                    {functionCategories.map((category) => (
                      <div key={category.id} className="mb-3 last:mb-0">
                        <div className="flex items-center justify-between">
                          <Link
                            href={category.href}
                            className={`flex-1 block py-2 font-medium ${
                              isDarkMode 
                                ? 'text-white hover:text-red-400' 
                                : 'text-[#111111] hover:text-red-500'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.label}
                          </Link>
                          <button
                            onClick={() => setExpandedMobileSubmenu(
                              expandedMobileSubmenu === category.id ? null : category.id
                            )}
                            className={`p-2 ${
                              isDarkMode 
                                ? 'text-white/60 hover:text-white' 
                                : 'text-[#111111]/60 hover:text-[#111111]'
                            }`}
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                              expandedMobileSubmenu === category.id ? 'rotate-180' : ''
                            }`} />
                          </button>
                        </div>
                        {expandedMobileSubmenu === category.id && (
                          <div className="ml-4 mt-2 space-y-2">
                            {functionSubsections[category.id]?.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className={`block text-sm py-1 ${
                                  isDarkMode 
                                    ? 'text-white/70 hover:text-white' 
                                    : 'text-[#111111]/70 hover:text-[#111111]'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.title}
                                {item.badge && (
                                  <span className="ml-2 inline-flex items-center rounded-xl bg-red-100 px-1.5 py-0.5 text-[10px] font-medium text-red-800">
                                    {item.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Waarom ons Section */}
              <div className={`border-b ${
                isDarkMode ? 'border-white/10' : 'border-black/5'
              }`}>
                <button
                  onClick={() => setExpandedMobileSection(expandedMobileSection === 'waarom-ons' ? null : 'waarom-ons')}
                  className={`w-full flex items-center justify-between px-4 py-4 text-left ${
                    isDarkMode 
                      ? 'text-white hover:text-white/80' 
                      : 'text-[#111111] hover:text-[#111111]/80'
                  }`}
                >
                  <span className="font-medium">Waarom ons</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    expandedMobileSection === 'waarom-ons' ? 'rotate-180' : ''
                  }`} />
                </button>
                {expandedMobileSection === 'waarom-ons' && (
                  <div className={`px-4 pb-4 ${
                    isDarkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'
                  }`}>
                    {whyCategories.map((category) => (
                      <div key={category.id} className="mb-3 last:mb-0">
                        {category.href ? (
                          <Link
                            href={category.href}
                            className={`block py-2 font-medium ${
                              isDarkMode 
                                ? 'text-white hover:text-red-400' 
                                : 'text-[#111111] hover:text-red-500'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.label}
                          </Link>
                        ) : (
                          <>
                            <div className="flex items-center justify-between">
                              <div className={`flex-1 py-2 font-medium ${
                                isDarkMode ? 'text-white' : 'text-[#111111]'
                              }`}>
                                {category.label}
                              </div>
                              {category.id === 'vergelijkingen' && (
                                <button
                                  onClick={() => setExpandedMobileSubmenu(
                                    expandedMobileSubmenu === category.id ? null : category.id
                                  )}
                                  className={`p-2 ${
                                    isDarkMode 
                                      ? 'text-white/60 hover:text-white' 
                                      : 'text-[#111111]/60 hover:text-[#111111]'
                                  }`}
                                >
                                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                                    expandedMobileSubmenu === category.id ? 'rotate-180' : ''
                                  }`} />
                                </button>
                              )}
                            </div>
                            {category.id === 'vergelijkingen' && expandedMobileSubmenu === category.id && (
                              <div className="ml-4 mt-2 space-y-2">
                                {whySubsections[category.id]?.map((item) => {
                                  const isBolmate = item.title === 'Bolbaas vs. Bolmate';
                                  const isBolbuddy = item.title === 'Bolbaas vs. Bolbuddy';
                                  const isBuddli = item.title === 'Bolbaas vs. Buddli';
                                  const isBollify = item.title === 'Bolbaas vs. Bollify';
                                  const isBoloo = item.title === 'Bolbaas vs. Boloo';
                                  const isDisabled = !isBolmate && !isBolbuddy && !isBuddli && !isBollify && !isBoloo;
                                  
                                  return isDisabled ? (
                                    <div
                                      key={item.title}
                                      className={`block text-sm py-1 ${
                isDarkMode 
                                          ? 'text-white/30' 
                                          : 'text-[#111111]/30'
                                      }`}
                                    >
                                      {item.title}
                                    </div>
                                  ) : (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      className={`block text-sm py-1 ${
                isDarkMode 
                                          ? 'text-white/70 hover:text-white' 
                                          : 'text-[#111111]/70 hover:text-[#111111]'
                                      }`}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {item.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link 
                href="/prijzen" 
                className={`block px-4 py-4 font-medium border-b ${
                isDarkMode 
                    ? 'text-white hover:text-white/80 border-white/10' 
                    : 'text-[#111111] hover:text-[#111111]/80 border-black/5'
                }`}
                onClick={handlePrijzenClick}
              >
                Prijzen
              </Link>
              <Link 
                href="/contact" 
                className={`block px-4 py-4 font-medium border-b ${
                isDarkMode 
                    ? 'text-white hover:text-white/80 border-white/10' 
                    : 'text-[#111111] hover:text-[#111111]/80 border-black/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 p-4">
                <Button 
                  variant="outline" 
                  asChild
                  className={`rounded-xl cursor-pointer ${
                  isDarkMode
                    ? 'border border-white/30 text-white bg-transparent hover:bg-white/5'
                    : 'border border-[#111111]/30 text-[#111111] bg-transparent hover:bg-[#111111]/5'
                  }`}
                >
                  <Link href="https://app.bolbaas.nl" target="_blank" rel="noopener noreferrer">
                    Naar app
                  </Link>
                </Button>
                <Button 
                  asChild
                  className={`rounded-xl cursor-pointer ${
                    isDarkMode
                      ? 'bg-white text-[#111111] hover:bg-white/90'
                      : 'bg-[#111111] text-white hover:bg-black/80'
                  }`}
                >
                  <Link href="https://app.bolbaas.nl/registreren" target="_blank" rel="noopener noreferrer">
                    Probeer gratis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


