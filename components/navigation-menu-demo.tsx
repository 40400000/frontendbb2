"use client"

import * as React from "react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from 'next/navigation'

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  BarChart,
  LineChart,
  ShoppingCart,
  FileText,
  Mail,
  Calculator,
  PieChart,
  Search,
  Sparkles,
  Image,
  FileClock,
  TestTubeDiagonal,
  Target,
  Activity,
  KeyRound,
  Briefcase,
  ShieldAlert,
  Truck,
} from "lucide-react"

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  href: string;
  highlight?: boolean;
  comingSoon?: boolean;
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const featureCategories: {
  [key: string]: {
    title: string;
    colorClass: string;
    iconClass: string;
    items: FeatureItem[];
  };
} = {
  insights: {
    title: "Inzichten",
    colorClass: "hover:bg-blue-50 group-hover:border-blue-200",
    iconClass: "text-blue-500",
    items: [
      {
        title: "Aanpasbare dashboards en views",
        description: "Zie alles precies zoals je het wilt zien.",
        icon: "LineChart",
        href: "/features/ranking-insights"
      },
      {
        title: "Product prestaties ",
        description: "Uitgebreid overzicht van je verkoopprestaties",
        icon: "BarChart",
        href: "/features/sales-dashboard"
      },
      {
        title: "Bestellingen",
        description: "Gedetailleerde analyse van je productprestaties",
        icon: "LineChart",
        href: "/features/product-insights"
      },
      {
        title: "Winst en omzet analyses ",
        description: "Analyseer bestelgegevens om je bedrijf te optimaliseren",
        icon: "ShoppingCart",
        href: "/features/order-insights"
      },
      {
        title: "Listing Hijacker tracker",
        description: "krijg meldingen als jou listing wordt gehijacked",
        icon: "ShieldAlert",
        href: "/features/listing-hijacker-tracker"
      },
    ]
  },
  tools: {
    title: "Tools",
    colorClass: "hover:bg-purple-50 group-hover:border-purple-200",
    iconClass: "text-purple-500",
    items: [
      {
        title: "Keyword database",
        description: "Geavanceerde keyword onderzoek op basis van meer dan 12 miljoen keywords en producten",
        icon: "Search",
        href: "/features/tools#keyword-database",
        highlight: true,
      },
      {
        title: "Listing AI",
        description: "AI-gestuurde listing optimalisatie voor maximale zichtbaarheid",
        icon: "Sparkles",
        href: "/features/tools#listing-ai"
      },
      {
        title: "Winst & ACoS calculator",
        description: "Bereken winstgevendheid van producten en campagnes",
        icon: "PieChart",
        href: "/features/profit-calculator"
      },
      {
        title: "A/B testen van listings",
        description: "Test verschillende listing varianten voor optimalisatie",
        icon: "TestTubeDiagonal",
        href: "/features/ab-testing"
      },
    ]
  },
  automation: {
    title: "Automatisering",
    colorClass: "hover:bg-pink-50 group-hover:border-pink-200",
    iconClass: "text-pink-500",
    items: [
      {
        title: "Factuur automatisering",
        description: "Geautomatiseerde BTW-factuur uploads en boekhouding",
        icon: "FileText",
        href: "/features/automatisering#factuur-automatisering"
      },
      {
        title: "E-mail automatisering",
        description: "Verzamel meer reviews met geautomatiseerde e-mails",
        icon: "Mail",
        href: "/features/automatisering#email-automatisering"
      },
      {
        title: "BTW-aangifte automatisering",
        description: "Geautomatiseerde BTW-aangifte berekening. Weet precies hoeveel BTW je moet betalen.",
        icon: "Calculator",
        href: "/features/automatisering#andere-features"
      },
      {
        title: "Baaspilot",
        description: "Wees direct op de hoogte van alle belangrijke gebeurtenissen",
        icon: "FileClock",
        href: "/features/automatisering#andere-features"
      },
    ]
  },
  tracking: {
    title: "Tracking",
    colorClass: "hover:bg-green-50 group-hover:border-green-200",
    iconClass: "text-green-500",
    items: [
      {
        title: "Precision product tracking",
        description: "Nauwkeurige tracking van je belangrijkste statistieken",
        icon: "Target",
        href: "/features/precision-tracking",
        highlight: true,
      },
      {
        title: "Dynamic product tracking",
        description: "Dynamische aanpassing van tracking parameters",
        icon: "Activity",
        href: "/features/dynamic-tracking"
      },
      {
        title: "Keyword tracking",
        description: "Volg de prestaties van specifieke zoekwoorden",
        icon: "KeyRound",
        href: "/features/keyword-tracking"
      },
      {
        title: "Project management",
        description: "Beheer je projecten en taken efficiënt",
        icon: "Briefcase",
        href: "/features/project-management"
      },
      {
        title: "Omzet research",
        description: "Bekijk de omzet van meer dan 4 miljoen producten op bol.com",
        icon: "Truck",
        href: "/features/delivery-tracker",
        comingSoon: true
      },
    ]
  }
}

// Helper function to render icons based on name
function renderIcon(iconName: string, className: string) {
  switch (iconName) {
    // Insights
    case "LineChart": return <Icons.lineChart className={className} />;
    case "BarChart": return <Icons.barChart className={className} />;
    case "ShoppingCart": return <Icons.shoppingCart className={className} />;
    case "Truck": return <Truck className={className} />;
    // Tools
    case "Search": return <Icons.search className={className} />;
    case "PieChart": return <Icons.pieChart className={className} />;
    case "Sparkles": return <Icons.sparkles className={className} />;
    case "TestTubeDiagonal": return <TestTubeDiagonal className={className} />;
    // Automation
    case "FileText": return <Icons.fileText className={className} />;
    case "Mail": return <Icons.mail className={className} />;
    case "Calculator": return <Icons.calculator className={className} />;
    case "FileClock": return <FileClock className={className} />;
    // Tracking
    case "Target": return <Target className={className} />;
    case "Activity": return <Activity className={className} />;
    case "KeyRound": return <KeyRound className={className} />;
    case "Briefcase": return <Briefcase className={className} />;
    case "ShieldAlert": return <ShieldAlert className={className} />;
    default: return null;
  }
}

// Define menu identifiers
type MenuId = "ai" | "automation" | "data" | "tracking" | null;

// Content rendering component/helper
function MenuContent({ activeMenu }: { activeMenu: MenuId }) {
  if (!activeMenu) return null;

  const SidebarContent = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 py-5 z-10">
      <p className="text-xl font-bold text-white">{title}</p>
      <p className="text-base font-medium text-white/90">{subtitle}</p>
    </div>
  );

  // Define content for each menu
  const menuContents: Record<Exclude<MenuId, null>, React.ReactNode> = {
    ai: (
      <div className="flex w-full min-h-[350px] bg-background transition-opacity duration-300 ease-in">
        <div className="w-[200px] border-r">
          <div className="relative w-full h-full overflow-hidden bg-[url('https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/randomshape_saturnus_ring-7XP26BfqyIei6Htoe3bKyGCLXztD4E.png')] bg-cover bg-right-top after:absolute after:inset-0 after:bg-black/20 text-white">
            <SidebarContent title="Bolbaas AI Tools" subtitle="Ontdek onze tools" />
          </div>
        </div>
        <div className="flex flex-1 gap-0">
          {featureCategories.tools.items.map((item, index, arr) => {
            const category = featureCategories.tools;
            return (
              <div key={item.title} className={cn(
                "group flex flex-col flex-1 hover:bg-gray-800 text-white",
                index < arr.length - 1 && "border-r border-border"
              )}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-start gap-2.5 p-2 relative h-full border border-transparent"
                  )}>
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded border bg-background transition-colors"
                  )}>
                    <div className={category.iconClass}>
                      {renderIcon(item.icon, "h-4 w-4")}
                    </div>
                  </div>
                  <div className="flex flex-col mt-auto">
                    {item.comingSoon ? (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 mb-1 self-start">
                        BINNENKORT
                      </span>
                    ) : item.highlight && (
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 mb-1 self-start">
                        NIEUW
                      </span>
                    )}
                    <div className={cn(
                      "text-base font-semibold text-white",
                      item.comingSoon && "text-muted-foreground group-hover:text-muted-foreground"
                    )}>
                      {item.title}
                    </div>
                    <p className={cn(
                      "text-sm leading-relaxed text-muted-foreground mt-1",
                      item.comingSoon && "group-hover:text-muted-foreground"
                    )}>
                      {item.description}
                    </p>
                    <span className={cn(
                      "inline-block border border-gray-600 text-gray-400 group-hover:border-purple-500 group-hover:text-purple-400 text-xs font-medium px-2 py-1 rounded mt-2 self-start",
                      item.comingSoon && "border-gray-300 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-500 cursor-not-allowed"
                    )}>
                      Lees meer
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    ),
    automation: (
       <div className="flex w-full min-h-[350px] bg-background transition-opacity duration-300 ease-in">
              <div className="w-[200px] border-r">
                 <div className="relative w-full h-full overflow-hidden bg-[url('https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/randomshapes_waves-2IT1fSqB0PF3nYQ4v1kl1wnzRS5Jep.png')] bg-cover bg-right-top after:absolute after:inset-0 after:bg-black/20 text-white">
                   <SidebarContent title="Bolbaas Automatisering" subtitle="Beheer je winkel" />
                </div>
              </div>
               <div className="flex flex-1 gap-0">
                 {featureCategories.automation.items.map((item, index, arr) => {
                    const category = featureCategories.automation;
                    return (
                      <div key={item.title} className={cn(
                        "group flex flex-col flex-1 hover:bg-gray-800 text-white",
                        index < arr.length - 1 && "border-r border-border"
                      )}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex flex-col items-start gap-2.5 p-2 relative h-full border border-transparent"
                          )}>
                          <div className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded border bg-background transition-colors"
                          )}>
                            <div className={category.iconClass}>
                              {renderIcon(item.icon, "h-4 w-4")}
                            </div>
                          </div>
                          <div className="flex flex-col mt-auto">
                            {item.comingSoon ? (
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 mb-1 self-start">
                                BINNENKORT
                              </span>
                            ) : item.highlight && (
                              <span className="inline-flex items-center rounded-full bg-pink-100 px-2 py-0.5 text-xs font-medium text-pink-800 mb-1 self-start">
                                NIEUW
                              </span>
                            )}
                            <div className={cn(
                              "text-base font-semibold text-white",
                              item.comingSoon && "text-muted-foreground group-hover:text-muted-foreground"
                            )}>
                              {item.title}
                            </div>
                            <p className={cn(
                              "text-sm leading-relaxed text-muted-foreground mt-1",
                              item.comingSoon && "group-hover:text-muted-foreground"
                            )}>
                              {item.description}
                            </p>
                            <span className={cn(
                               "inline-block border border-gray-600 text-gray-400 group-hover:border-pink-500 group-hover:text-pink-400 text-xs font-medium px-2 py-1 rounded mt-2 self-start",
                               item.comingSoon && "border-gray-300 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-500 cursor-not-allowed"
                            )}>
                              Lees meer
                            </span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
               </div>
            </div>
    ),
    data: (
        <div className="flex w-full min-h-[350px] bg-background transition-opacity duration-300 ease-in">
              <div className="w-[200px] border-r">
                 <div className="relative w-full h-full overflow-hidden bg-[url('https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/randomshape4_dp-DWgpSDrHRewQcM4gRPYaBvJXfSEwJI.png')] bg-cover bg-right-top after:absolute after:inset-0 after:bg-black/20 text-white">
                    <SidebarContent title="Bolbaas Data Inzichten" subtitle="Diepgaande data analyse" />
                </div>
              </div>
               <div className="flex flex-1 gap-0">
                 {featureCategories.insights.items.map((item, index, arr) => {
                    const category = featureCategories.insights;
                    return (
                     <div key={item.title} className={cn(
                       "group flex flex-col flex-1 hover:bg-gray-800 text-white",
                       index < arr.length - 1 && "border-r border-border"
                     )}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex flex-col items-start gap-2.5 p-2 relative h-full border border-transparent"
                          )}>
                           <div className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded border bg-background transition-colors"
                           )}>
                            <div className={category.iconClass}>
                              {renderIcon(item.icon, "h-4 w-4")}
                            </div>
                          </div>
                          <div className="flex flex-col mt-auto">
                            {item.comingSoon ? (
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 mb-1 self-start">
                                BINNENKORT
                              </span>
                            ) : item.highlight && (
                              <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 mb-1 self-start">
                                NIEUW
                              </span>
                            )}
                            <div className={cn(
                              "text-base font-semibold text-white",
                              item.comingSoon && "text-muted-foreground group-hover:text-muted-foreground"
                            )}>
                              {item.title}
                            </div>
                            <p className={cn(
                              "text-sm leading-relaxed text-muted-foreground mt-1",
                              item.comingSoon && "group-hover:text-muted-foreground"
                            )}>
                              {item.description}
                            </p>
                            <span className={cn(
                               "inline-block border border-gray-600 text-gray-400 group-hover:border-blue-500 group-hover:text-blue-400 text-xs font-medium px-2 py-1 rounded mt-2 self-start",
                               item.comingSoon && "border-gray-300 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-500 cursor-not-allowed"
                            )}>
                              Lees meer
                            </span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
               </div>
            </div>
    ),
    tracking: (
       <div className="flex w-full min-h-[350px] bg-background transition-opacity duration-300 ease-in">
              <div className="w-[200px] border-r">
                 <div className="relative w-full h-full overflow-hidden bg-[url('https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/randomshape3_infinity-RQwVTN6n7sFsxxOBmFe5NbkKjawrI8.png')] bg-cover bg-right-top after:absolute after:inset-0 after:bg-black/20 text-white">
                    <SidebarContent title="Bolbaas Tracking" subtitle="Monitor je prestaties" />
                </div>
              </div>
               <div className="flex flex-1 gap-0">
                 {featureCategories.tracking.items.map((item, index, arr) => {
                    const category = featureCategories.tracking;
                    return (
                      <div key={item.title} className={cn(
                        "group flex flex-col flex-1 hover:bg-gray-800 text-white",
                        index < arr.length - 1 && "border-r border-border"
                      )}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex flex-col items-start gap-2.5 p-2 relative h-full border border-transparent"
                          )}>
                           <div className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded border bg-background transition-colors"
                           )}>
                            <div className={category.iconClass}>
                              {renderIcon(item.icon, "h-4 w-4")}
                            </div>
                          </div>
                           <div className="flex flex-col mt-auto">
                            {item.comingSoon ? (
                              <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 mb-1 self-start">
                                BINNENKORT
                              </span>
                            ) : item.highlight && (
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 mb-1 self-start">
                                NIEUW
                              </span>
                            )}
                            <div className={cn(
                              "text-base font-semibold text-white",
                              item.comingSoon && "text-muted-foreground group-hover:text-muted-foreground"
                            )}>
                              {item.title}
                            </div>
                            <p className={cn(
                              "text-sm leading-relaxed text-muted-foreground mt-1",
                              item.comingSoon && "group-hover:text-muted-foreground"
                            )}>
                              {item.description}
                            </p>
                            <span className={cn(
                               "inline-block border border-gray-600 text-gray-400 group-hover:border-green-500 group-hover:text-green-400 text-xs font-medium px-2 py-1 rounded mt-2 self-start",
                               item.comingSoon && "border-gray-300 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-500 cursor-not-allowed"
                            )}>
                              Lees meer
                            </span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
               </div>
            </div>
    ),
  };

  return menuContents[activeMenu];
}

export function NavigationMenuDemo() {
  const [activeMenu, setActiveMenu] = useState<MenuId>(null);
  const [navbarMode, setNavbarMode] = useState<'dark' | 'light'>('dark');
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null); // Ref for the component's root element
  const [headerHeight, setHeaderHeight] = useState(0); // State to store header height for dropdown positioning

  const handleMouseEnter = (menuId: Exclude<MenuId, null>) => {
     if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    // Delay closing the menu slightly
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100); // 100ms delay
  };

   const handleDropdownMouseEnter = () => {
    // Clear timeout if mouse enters the dropdown content area
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleSimpleLinkEnter = () => {
    // Immediately close any active menu when hovering over a simple link
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(null);
  };

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById('main-header');
      const navElement = navRef.current;
      if (!navElement || !headerElement) return;

      // Update header height state if it hasn't been set
      if (headerHeight === 0) {
         setHeaderHeight(headerElement.offsetHeight);
      }

      const navBottom = navElement.getBoundingClientRect().bottom;
      const lightSections = document.querySelectorAll('[data-navbar-mode="light"]');
      let isOverLightSection = false;

      lightSections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        // Check if the bottom of the nav is within the vertical bounds of a light section
        if (sectionRect.top <= navBottom && sectionRect.bottom >= navBottom) {
          isOverLightSection = true;
        }
      });

      const newMode = isOverLightSection ? 'light' : 'dark';
      setNavbarMode(newMode);

      // Update header class directly
      if (newMode === 'light') {
        headerElement.classList.remove('bg-background', 'text-white');
        headerElement.classList.add('bg-white', 'text-black');
      } else {
        headerElement.classList.remove('bg-white', 'text-black');
        headerElement.classList.add('bg-background', 'text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
   <div ref={navRef}> {/* Outer wrapper div - now ONLY has ref */}
    {/* Navigation Bar and Dropdown Wrapper - Removed container mx-auto, handled by layout */}
    <div className="relative" onMouseLeave={handleMouseLeave}> 
      {/* Apply background transparent to NavigationMenu to inherit from parent */}
      <NavigationMenu className="z-10 relative bg-transparent">
        <NavigationMenuList>
          {/* AI Tools Trigger */}
          <div
            onMouseEnter={() => handleMouseEnter("ai")}
            className={cn(
              navigationMenuTriggerStyle(),
              "cursor-pointer relative bg-transparent", // Made background transparent
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100", // Removed transition
              navbarMode === 'light' ? "after:bg-black hover:bg-gray-100" : "after:bg-white hover:bg-gray-800", // Conditional underline and hover bg
              activeMenu === "ai" && "after:opacity-100" // Keep active underline
            )}
          >
            AI & Tools
          </div>

          {/* Automatisering Trigger */}
           <div
             onMouseEnter={() => handleMouseEnter("automation")}
             className={cn(
                navigationMenuTriggerStyle(),
                "cursor-pointer relative bg-transparent",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100", // Removed transition
                navbarMode === 'light' ? "after:bg-black hover:bg-gray-100" : "after:bg-white hover:bg-gray-800",
                activeMenu === "automation" && "after:opacity-100"
             )}
            >
             Automatisering
           </div>

          {/* Data inzichten Trigger */}
          <div
            onMouseEnter={() => handleMouseEnter("data")}
            className={cn(
              navigationMenuTriggerStyle(),
              "cursor-pointer relative bg-transparent",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100", // Removed transition
              navbarMode === 'light' ? "after:bg-black hover:bg-gray-100" : "after:bg-white hover:bg-gray-800",
              activeMenu === "data" && "after:opacity-100"
            )}
          >
             Data inzichten
           </div>

          {/* Tracking Trigger */}
          <div
            onMouseEnter={() => handleMouseEnter("tracking")}
            className={cn(
              navigationMenuTriggerStyle(),
              "cursor-pointer relative bg-transparent",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100", // Removed transition
              navbarMode === 'light' ? "after:bg-black hover:bg-gray-100" : "after:bg-white hover:bg-gray-800",
              activeMenu === "tracking" && "after:opacity-100"
            )}
          >
            Tracking
          </div>

          {/* Prijzen Link (only hover effect) */}
          <li 
            className={cn(
              "list-none relative", 
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100", // Removed transition
              navbarMode === 'light' ? "after:bg-black" : "after:bg-white"
            )}
            onMouseEnter={handleSimpleLinkEnter}
          >
            <Link href="/prijzen" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent", navbarMode === 'light' ? "hover:bg-gray-100" : "hover:bg-gray-800")}>
                Prijzen
              </NavigationMenuLink>
            </Link>
          </li>

          {/* Contact Link (only hover effect) */}
          <li 
            className={cn(
              "list-none relative", 
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100", // Removed transition
              navbarMode === 'light' ? "after:bg-black" : "after:bg-white"
            )}
            onMouseEnter={handleSimpleLinkEnter}
          >
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent", navbarMode === 'light' ? "hover:bg-gray-100" : "hover:bg-gray-800")}>
                Contact
              </NavigationMenuLink>
            </Link>
          </li>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Dropdown Container with keyed MenuContent (fixed position, higher z-index) */}
       {activeMenu && (
        <div
          onMouseEnter={handleDropdownMouseEnter}
          className="fixed left-0 right-0 bg-background shadow-lg z-50 overflow-hidden"
          style={{ top: `${headerHeight}px` }} // Dynamic top position based on header height
        >
           <div className="container mx-auto">
             <MenuContent key={activeMenu} activeMenu={activeMenu} />
           </div>
        </div>
      )}
    </div>
   </div> // Closing outer wrapper div
  );
} 