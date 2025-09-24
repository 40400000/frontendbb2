"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

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
  FileClock,
  TestTubeDiagonal,
  Target,
  Activity,
  KeyRound,
  Briefcase,
  ShieldAlert,
  Truck,
  Menu as MenuIcon,
  X as XIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  href: string;
  highlight?: boolean;
  comingSoon?: boolean;
  imageUrl?: string;
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
        title: "Custom sales dashboards",
        description: "Bouw dashboards die precies laten zien wat jij belangrijk vindt",
        icon: "LineChart",
        href: "/features/store-prestaties#custom-dashboards"
      },
      {
        title: "Product prestaties ",
        description: "Uitgebreid overzicht van je verkoopprestaties",
        icon: "BarChart",
        href: "/features/store-prestaties#product-prestaties"
      },
      {
        title: "Bestellingen",
        description: "Gedetailleerde analyse van je bestellingen",
        icon: "LineChart",
        href: "/features/store-prestaties#bestellingen"
      },
      {
        title: "Sales en voorraad schattingen",
        description: "Weet precies hoeveel je gaat verkopen en wanneer je moet bijbestellen",
        icon: "ShoppingCart",
        href: "/features/store-prestaties#sales-voorspellingen"
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
        description: "Geavanceerde keywordonderzoek op basis van meer dan 12 miljoen keywords en producten",
        icon: "Search",
        href: "/features/tools#bolbaas-database",
        highlight: true,
      },
      {
        title: "Ranking AI",
        description: "AI-gestuurde listing optimalisatie voor maximale zichtbaarheid",
        icon: "Sparkles",
        href: "/features/tools#ranking-ai"
      },
      {
        title: "Product tracking",
        description: "Track je producten en concurrenten nauwkeurig",
        icon: "Target",
        href: "/features/tools#product-tracking"
      },
    ]
  },
  toolsExtras: {
    title: "Andere Tools",
    colorClass: "hover:bg-purple-50 group-hover:border-purple-200",
    iconClass: "text-purple-500",
    items: [
      {
        title: "Winst & ACoS calculator",
        description: "",
        icon: "PieChart",
        href: "/features/tools#winst-calculator"
      },
      {
        title: "A/B testen van listings",
        description: "",
        icon: "TestTubeDiagonal",
        href: "/features/tools#ab-testing"
      },
      {
        title: "Project management",
        description: "",
        icon: "Briefcase",
        href: "/features/tools#project-management"
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
        href: "/features/automatisering#store-automatisering"
      },
      {
        title: "E-mail automatisering",
        description: "Verzamel meer reviews met geautomatiseerde e-mails",
        icon: "Mail",
        href: "/features/automatisering#email-campagnes"
      },
      {
        title: "BTW-aangifte automatisering",
        description: "Geautomatiseerde BTW-aangifte berekening en boekhouding",
        icon: "Calculator",
        href: "/features/automatisering#btw-aangifte-automatisering"
      },
      {
        title: "Baaspilot",
        description: "Wees direct op de hoogte van alle belangrijkste gebeurtenissen",
        icon: "FileClock",
        href: "/features/automatisering#baaspilot"
      },
    ]
  },
  educatie: {
    title: "Educatie",
    colorClass: "hover:bg-indigo-50 group-hover:border-indigo-200",
    iconClass: "text-indigo-500",
    items: [
      {
        title: "Alle artikelen",
        description: "Bekijk alle artikelen op onze blog voor tips en tricks",
        icon: "FileText",
        href: "/blog"
      },
      {
        title: "Starten als Bol partner",
        description: "Een complete gids om je op weg te helpen als nieuwe verkoper.",
        icon: "FileText",
        href: "/blog/starten-als-bol-partner-in-2025",
        imageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/partnerstartblog.png",
      },
      {
        title: "Verkopen in het AI tijdperk",
        description: "Ontdek hoe je AI in je voordeel kunt gebruiken op Bol.com.",
        icon: "FileText",
        href: "/blog/verkopen-bol-ai-tijdperk",
        imageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/RANKINGAIBLOG_BG.png",
      },
       {
        title: "Meer reviews op Bol.com",
        description: "Effectieve methoden om je review-score te verhogen.",
        icon: "FileText",
        href: "/blog/meer-reviews-op-bol",
        imageUrl: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/reviewblog.png",
      }
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
type MenuId = "ai" | "automation" | "data" | "educatie" | null;

// Content rendering component/helper
function MenuContent({ activeMenu }: { activeMenu: MenuId }) {
  if (!activeMenu) return null;

  const SidebarContent = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent pl-4 py-5 z-10">
      <p className="text-xl font-bold text-white">{title}</p>
      <p className="text-base font-medium text-white/90 mb-2">{subtitle}</p>
      <span className="text-sm font-semibold text-white underline underline-offset-2 hover:text-gray-200 transition-colors">
        Details bekijken &rarr;
      </span>
    </div>
  );

  // Define content for each menu
  const menuContents: Record<Exclude<MenuId, null>, React.ReactNode> = {
    ai: (
      <div className="flex w-full min-h-[350px] bg-background transition-opacity duration-300 ease-in">
        <Link href="/features/tools" className="w-[200px] border-r block hover:opacity-90 transition-opacity">
          <div className="relative w-full h-full overflow-hidden text-white">
            <Image
              src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/randomshape_saturnus_ring-7XP26BfqyIei6Htoe3bKyGCLXztD4E.png"
              alt="Bolbaas AI Tools Achtergrond"
              fill
              sizes="200px"
              quality={80}
              style={{ objectFit: 'cover' }}
              priority
            />
            <SidebarContent title="Bolbaas AI Tools" subtitle="" />
          </div>
        </Link>
        <div className="flex flex-1 gap-0">
          {/* Main tools - 3 columns */}
          {featureCategories.tools.items.map((item, index, arr) => {
            const category = featureCategories.tools;
            return (
              <div key={item.title} className={cn(
                "group flex flex-col flex-1 hover:bg-gray-800 text-white border-r border-border"
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
                      <span className="inline-flex items-center rounded-full bg-red-200 px-2 py-0.5 text-xs font-medium text-red-800 mb-1 self-start">
                        Nieuwe CPC Tracker
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
          
          {/* Extra tools - single column with stacked cards */}
          <div className="group flex flex-col flex-1 hover:bg-gray-800 text-white">
            <div className="flex flex-col gap-0 h-full">
              {featureCategories.toolsExtras.items.map((item, index) => {
                const category = featureCategories.toolsExtras;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 p-3 hover:bg-gray-700 transition-colors border-b border-border last:border-b-0 flex-1"
                    )}>
                    <div className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded border bg-background transition-colors"
                    )}>
                      <div className={category.iconClass}>
                        {renderIcon(item.icon, "h-3 w-3")}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-white">
                      {item.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    ),
    automation: (
       <div className="flex w-full min-h-[350px] bg-background transition-opacity duration-300 ease-in">
              <Link href="/features/automatisering" className="w-[200px] border-r block hover:opacity-90 transition-opacity">
                 <div className="relative w-full h-full overflow-hidden text-white">
                   <Image
                     src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/randomshapes_waves-2IT1fSqB0PF3nYQ4v1kl1wnzRS5Jep.png"
                     alt="Bolbaas Automatisering Achtergrond"
                     fill
                     sizes="200px"
                     quality={80}
                     style={{ objectFit: 'cover' }}
                     priority
                   />
                   <SidebarContent title="Bolbaas Automatisering" subtitle="" />
                </div>
              </Link>
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
              <Link href="/features/store-prestaties" className="w-[200px] border-r block hover:opacity-90 transition-opacity">
                 <div className="relative w-full h-full overflow-hidden text-white">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/randomshape4_dp-DWgpSDrHRewQcM4gRPYaBvJXfSEwJI.png"
                      alt="Bolbaas Data Inzichten Achtergrond"
                      fill
                      sizes="200px"
                      quality={80}
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <SidebarContent title="Bolbaas Data Inzichten" subtitle="" />
                </div>
             </Link>
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
    educatie: (
       <div className="flex w-full min-h-[350px] bg-background transition-opacity duration-300 ease-in">
              <Link href="/blog" className="w-[200px] border-r block hover:opacity-90 transition-opacity">
                 <div className="relative w-full h-full overflow-hidden text-white">
                    <Image
                      src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/randomshape3_infinity-RQwVTN6n7sFsxxOBmFe5NbkKjawrI8.png"
                      alt="Bolbaas Educatie Achtergrond"
                      fill
                      sizes="200px"
                      quality={80}
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <SidebarContent title="Bolbaas Educatie" subtitle="Leer van de experts" />
                </div>
              </Link>
               <div className="grid grid-cols-4 flex-1">
                 {featureCategories.educatie.items.map((item, index, arr) => {
                    const category = featureCategories.educatie;
                    return (
                      <div key={item.title} className={cn(
                        "group flex flex-col hover:bg-gray-800 text-white",
                        index < arr.length - 1 && "border-r border-border"
                      )}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex flex-col items-start h-full border border-transparent"
                          )}>
                            <div className="relative w-full aspect-square overflow-hidden bg-gray-900">
                                {item.imageUrl ? (
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    sizes="250px"
                                    style={{ objectFit: 'cover' }}
                                    className="group-hover:scale-105 transition-transform duration-300"
                                />
                                ) : (
                                <div className="flex items-center justify-center h-full">
                                    <div className={cn(
                                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-gray-800 transition-colors",
                                        category.iconClass
                                        )}>
                                        {renderIcon(item.icon, "h-6 w-6")}
                                    </div>
                                </div>
                                )}
                            </div>
                           <div className="flex flex-col p-3 flex-1">
                            <div className="flex flex-col mt-auto">
                                {item.highlight && (
                                <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800 mb-1 self-start">
                                    NIEUW
                                </span>
                                )}
                                <div className={cn(
                                "text-base font-semibold text-white",
                                )}>
                                {item.title}
                                </div>
                                <p className={cn(
                                "text-sm leading-relaxed text-muted-foreground mt-1",
                                )}>
                                {item.description}
                                </p>
                                <span className={cn(
                                "inline-block border border-gray-600 text-gray-400 group-hover:border-indigo-500 group-hover:text-indigo-400 text-xs font-medium px-2 py-1 rounded mt-2 self-start",
                                )}>
                                Lees meer
                                </span>
                            </div>
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
  const componentRootRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerBottomPosition, setHeaderBottomPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBlogPostPage = pathname.startsWith('/blog');
  const { theme } = useTheme();

  const lightLogoUrl = "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/logo_head-NO6JxOe2DYaItWOrqQqPrDhwgEaN5z.png";
  const darkLogoUrl = "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/logo_head_zwart-yUz45E2pM84TsaxNb7K57ZxcaTfTsH.png";

  const handleMouseEnter = (menuId: Exclude<MenuId, null>) => {
     if (isMobileMenuOpen) return;
     if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menuId);
  };

  const handleMouseLeaveDesktopMenu = () => {
    if (isMobileMenuOpen) return;
    // Delay closing the menu slightly
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100); // 100ms delay
  };

   const handleDropdownMouseEnter = () => {
    if (isMobileMenuOpen) return;
    // Clear timeout if mouse enters the dropdown content area
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleSimpleLinkEnter = () => {
    if (isMobileMenuOpen) return;
    // Immediately close any active menu when hovering over a simple link
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    const newMobileMenuState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newMobileMenuState);
    if (newMobileMenuState) {
      setActiveMenu(null);
      if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
      }
    }
  };
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    const headerElement = document.getElementById('main-header');
    if (!headerElement) {
        console.warn("main-header element not found for scroll handling.");
        return;
    }

    const updateHeaderState = () => {
      // Force light navbar on legal pages
      if (
        pathname.startsWith('/verwerkersovereenkomst') ||
        pathname.startsWith('/privacy') ||
        pathname.startsWith('/algemene-voorwaarden')
      ) {
        if (navbarMode !== 'light') setNavbarMode('light');
        headerElement.classList.remove('bg-background', 'text-white');
        headerElement.classList.add('bg-white', 'text-black');
        return;
      }
      const currentHeaderHeight = headerElement.offsetHeight;
      if (headerHeight !== currentHeaderHeight) {
        setHeaderHeight(currentHeaderHeight);
      }

      const headerBottom = headerElement.getBoundingClientRect().bottom;
      if (headerBottomPosition !== headerBottom) {
        setHeaderBottomPosition(headerBottom);
      }

      if (isBlogPostPage) {
        // On blog pages, theme is driven by system preference via BlogThemeHandler
        setNavbarMode(theme === 'dark' ? 'dark' : 'light');
        if (theme === 'dark') {
          headerElement.classList.remove('bg-white', 'text-black');
          headerElement.classList.add('bg-background', 'text-white');
        } else {
          headerElement.classList.remove('bg-background', 'text-white');
          headerElement.classList.add('bg-white', 'text-black');
        }
      } else {
        // On other pages, theme changes based on scrolling over light sections
        const lightSections = document.querySelectorAll<HTMLElement>('[data-navbar-mode="light"]');
        let isOverLightSection = false;
        lightSections.forEach((section) => {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top <= headerBottom && sectionRect.bottom >= headerBottom) {
            isOverLightSection = true;
          }
        });

        const newMode = isOverLightSection ? 'light' : 'dark';
        if (navbarMode !== newMode) {
          setNavbarMode(newMode);
          if (newMode === 'light') {
            headerElement.classList.remove('bg-background', 'text-white');
            headerElement.classList.add('bg-white', 'text-black');
          } else {
            headerElement.classList.remove('bg-white', 'text-black');
            headerElement.classList.add('bg-background', 'text-white');
          }
        }
      }
    };
    
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState);
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, [isBlogPostPage, navbarMode, headerHeight, theme, headerBottomPosition, pathname]);

  useEffect(() => {
    if (headerHeight === 0) {
        const headerElement = document.getElementById('main-header');
        if (headerElement) {
            setHeaderHeight(headerElement.offsetHeight);
        }
    }
  }, [headerHeight]);

  const commonMobileLinkClasses = "block px-3 py-2 rounded-md text-base font-medium";
  const mobileLinkHoverClasses = navbarMode === 'light' ? "hover:bg-gray-100 text-gray-900" : "hover:bg-gray-700 text-white";
  const mobileBorderClass = navbarMode === 'light' ? "border-gray-200" : "border-gray-700";
  const mobileTextColor = navbarMode === 'light' ? "text-black" : "text-white";

  return (
   <div ref={componentRootRef} className="w-full h-full">
    <div className="flex items-center justify-between w-full h-full px-4 sm:px-0">
        <Link href="/" className="flex-shrink-0" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
            <Image
            src={navbarMode === 'light' ? darkLogoUrl : lightLogoUrl}
            alt="Bolbaas Logo"
            width={180} 
            height={48} 
            priority
            />
        </Link>

        <div className="sm:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className={cn(
                    "p-2 rounded-md focus:outline-none",
                    navbarMode === 'light' ? "text-black hover:bg-gray-100" : "text-white hover:bg-gray-700"
                )}
                aria-label="Open main menu"
                aria-expanded={isMobileMenuOpen}
            >
            {isMobileMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </Button>
        </div>

        <div className="hidden sm:flex sm:items-center sm:ml-auto" onMouseLeave={handleMouseLeaveDesktopMenu}>
            <NavigationMenu className="bg-transparent pl-0">
                <NavigationMenuList>
                    <div
                        onMouseEnter={() => handleMouseEnter("ai")}
                        className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer relative bg-transparent", 
                        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100", 
                        navbarMode === 'light' ? "after:bg-black hover:bg-gray-100 hover:text-gray-900 text-gray-900" : "after:bg-white hover:bg-gray-800 text-white",
                        activeMenu === "ai" && !isMobileMenuOpen && "after:opacity-100"
                        )}
                    >
                        <Link href="/features/tools">AI & Tools</Link>
                    </div>

                    <div
                        onMouseEnter={() => handleMouseEnter("automation")}
                        className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer relative bg-transparent",
                        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100",
                        navbarMode === 'light' ? "after:bg-black hover:bg-gray-100 hover:text-gray-900 text-gray-900" : "after:bg-white hover:bg-gray-800 text-white",
                        activeMenu === "automation" && !isMobileMenuOpen && "after:opacity-100"
                        )}
                    >
                        <Link href="/features/automatisering">Automatisering</Link>
                    </div>

                    <div
                        onMouseEnter={() => handleMouseEnter("data")}
                        className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer relative bg-transparent",
                        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100",
                        navbarMode === 'light' ? "after:bg-black hover:bg-gray-100 hover:text-gray-900 text-gray-900" : "after:bg-white hover:bg-gray-800 text-white",
                        activeMenu === "data" && !isMobileMenuOpen && "after:opacity-100"
                        )}
                    >
                        <Link href="/features/store-prestaties">Store prestaties</Link>
                    </div>

                    <div
                        onMouseEnter={() => handleMouseEnter("educatie")}
                        className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer relative bg-transparent",
                        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100",
                        navbarMode === 'light' ? "after:bg-black hover:bg-gray-100 hover:text-gray-900 text-gray-900" : "after:bg-white hover:bg-gray-800 text-white",
                        activeMenu === "educatie" && !isMobileMenuOpen && "after:opacity-100"
                        )}
                    >
                        <Link href="/blog">Educatie</Link>
                    </div>

                    <li
                        className={cn(
                        "list-none relative", 
                        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100",
                        navbarMode === 'light' ? "after:bg-black" : "after:bg-white"
                        )}
                        onMouseEnter={handleSimpleLinkEnter}
                    >
                        <Link href="/prijzen" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent", navbarMode === 'light' ? "hover:bg-gray-100 hover:text-gray-900 text-gray-900" : "hover:bg-gray-800 text-white")}>
                            Prijzen
                        </NavigationMenuLink>
                        </Link>
                    </li>

                    <li 
                        className={cn(
                        "list-none relative", 
                        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:opacity-0 hover:after:opacity-100",
                        navbarMode === 'light' ? "after:bg-black" : "after:bg-white"
                        )}
                        onMouseEnter={handleSimpleLinkEnter}
                    >
                        <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent", navbarMode === 'light' ? "hover:bg-gray-100 hover:text-gray-900 text-gray-900" : "hover:bg-gray-800 text-white")}>
                            Contact
                        </NavigationMenuLink>
                        </Link>
                    </li>
                    <li className="flex items-center space-x-2 ml-auto list-none pl-2">
                        <Link href="https://app.bolbaas.nl/inloggen" passHref>
                          <Button variant="outline"
                          className={cn(
                            navbarMode === 'light' 
                              ? "border-gray-300 text-black hover:bg-gray-100 hover:text-black" 
                              : "border-gray-700 text-white hover:bg-gray-800 hover:text-white", 
                            "bg-transparent cursor-pointer rounded-lg"
                          )}
                          >Inloggen</Button>
                        </Link>
                        <Link href="/prijzen" passHref>
                          <Button
                          className={cn(
                            navbarMode === 'light' 
                              ? "bg-black text-white hover:bg-gray-800 hover:text-white" 
                              : "bg-white text-black hover:bg-gray-200 hover:text-black",
                            "cursor-pointer rounded-lg"
                          )}
                          >Aanmelden</Button>
                        </Link>
                    </li>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>

    {activeMenu && !isMobileMenuOpen && headerHeight > 0 && (
    <div
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleMouseLeaveDesktopMenu}
        className="dark hidden sm:block fixed left-0 right-0 bg-background shadow-lg z-30 overflow-hidden"
        style={{ top: `${headerBottomPosition}px` }}
    >
        <div className="container mx-auto">
            <MenuContent key={activeMenu} activeMenu={activeMenu} />
        </div>
    </div>
    )}

    {isMobileMenuOpen && headerHeight > 0 && (
    <div
        className={cn(
            "sm:hidden fixed inset-x-0 z-50 transform transition-transform ease-in-out duration-300 overflow-y-auto",
            navbarMode === 'light' ? "bg-white" : "bg-background",
            mobileTextColor
        )}
        style={{ top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)` }}
    >
        <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/features/tools" className={cn(commonMobileLinkClasses, mobileLinkHoverClasses, mobileTextColor)} onClick={toggleMobileMenu}>AI & Tools</Link>
            <Link href="/features/automatisering" className={cn(commonMobileLinkClasses, mobileLinkHoverClasses, mobileTextColor)} onClick={toggleMobileMenu}>Automatisering</Link>
            <Link href="/features/store-prestaties" className={cn(commonMobileLinkClasses, mobileLinkHoverClasses, mobileTextColor)} onClick={toggleMobileMenu}>Store prestaties</Link>
            <Link href="/blog" className={cn(commonMobileLinkClasses, mobileLinkHoverClasses, mobileTextColor)} onClick={toggleMobileMenu}>Educatie</Link>
            <Link href="/prijzen" className={cn(commonMobileLinkClasses, mobileLinkHoverClasses, mobileTextColor)} onClick={toggleMobileMenu}>Prijzen</Link>
            <Link href="/contact" className={cn(commonMobileLinkClasses, mobileLinkHoverClasses, mobileTextColor)} onClick={toggleMobileMenu}>Contact</Link>
            
            <div className={cn("pt-4 mt-4 border-t", mobileBorderClass)}>
                <Link href="https://app.bolbaas.nl/inloggen" passHref>
                  <Button variant="outline" className={cn(
                    "w-full mb-2 bg-transparent cursor-pointer rounded-lg", 
                    navbarMode === 'light' 
                      ? "border-gray-300 text-black hover:bg-gray-100 hover:text-black" 
                      : "border-gray-700 text-white hover:bg-gray-800 hover:text-white"
                  )} onClick={toggleMobileMenu}>Inloggen</Button>
                </Link>
                <Link href="/wachtlijst" passHref>
                  <Button className={cn(
                    "w-full cursor-pointer rounded-lg", 
                    navbarMode === 'light' 
                      ? "bg-black text-white hover:bg-gray-800 hover:text-white" 
                      : "bg-white text-black hover:bg-gray-200 hover:text-black"
                  )} onClick={toggleMobileMenu}>Aanmelden bèta</Button>
                </Link>
            </div>
        </div>
    </div>
    )}
   </div>
  );
} 