'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Package,
  FileText,
  Truck,
  Mail,
  Calculator,
  FileClock,
  Search,
  PieChart,
  Sparkles,
  TestTubeDiagonal,
  Target,
  Activity,
  KeyRound,
  Briefcase,
  ShieldAlert
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  href: string;
  highlight?: boolean;
}

interface FeatureCategory {
  title: string;
  colorClass: string;
  iconClass: string;
  items: FeatureItem[];
}

const automationCategory: FeatureCategory = {
  title: "Automatisering",
  colorClass: "hover:bg-pink-50 group-hover:border-pink-200",
  iconClass: "text-pink-500",
  items: [
    {
      title: "Factuur automatisering",
      description: "Geautomatiseerde factuur generatie en beheer",
      icon: "FileText",
      href: "/features/invoice-automation"
    },
    {
      title: "E-mail automatisering",
      description: "Verzamel meer reviews met geautomatiseerde e-mails",
      icon: "Mail",
      href: "/features/email-automation"
    },
    {
      title: "BTW-aangifte automatisering",
      description: "Vereenvoudig belastingaangifte met geautomatiseerde BTW-aangifte berekening",
      icon: "Calculator",
      href: "/features/tax-automation"
    },
    {
      title: "Baaspilot",
      description: "Wees direct op de hoogte van alle belangrijke gebeurtenissen",
      icon: "FileClock",
      href: "/features/baaspilot"
    },
    
  ]
};

const toolsCategory: FeatureCategory = {
  title: "Tools",
  colorClass: "hover:bg-purple-50 group-hover:border-purple-200",
  iconClass: "text-purple-500",
  items: [
    {
      title: "Keyword database",
      description: "Geavanceerde zoekwoordonderzoek en optimalisatie tools",
      icon: "Search",
      href: "/features/keyword-analysis",
      highlight: true,
    },
    {
      title: "Winst & ACoS calculator",
      description: "Bereken winstgevendheid van producten en campagnes",
      icon: "PieChart",
      href: "/features/profit-calculator"
    },
    {
      title: "Listing AI",
      description: "AI-gestuurde listing optimalisatie voor maximale zichtbaarheid",
      icon: "Sparkles",
      href: "/features/listing-ai"
    },
    {
      title: "A/B testen van listings",
      description: "Test verschillende listing varianten voor optimalisatie",
      icon: "TestTubeDiagonal",
      href: "/features/ab-testing"
    },
  ]
};

const trackingCategory: FeatureCategory = {
  title: "Tracking",
  colorClass: "hover:bg-green-50 group-hover:border-green-200",
  iconClass: "text-green-500",
  items: [
    {
      title: "Precision tracking",
      description: "Nauwkeurige tracking van je belangrijkste statistieken",
      icon: "Target",
      href: "/features/precision-tracking",
      highlight: true,
    },
    {
      title: "Dynamic tracking",
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
      title: "Listing Hijacker tracker",
      description: "krijg meldingen als jouw listing wordt gehijacked",
      icon: "ShieldAlert",
      href: "/features/listing-hijacker-tracker"
    },
  ]
};

function renderIcon(iconName: string, className: string) {
  switch (iconName) {
    case "FileText": return <FileText className={className} />;
    case "Mail": return <Mail className={className} />;
    case "Calculator": return <Calculator className={className} />;
    case "FileClock": return <FileClock className={className} />;
    case "Search": return <Search className={className} />;
    case "PieChart": return <PieChart className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "TestTubeDiagonal": return <TestTubeDiagonal className={className} />;
    case "Target": return <Target className={className} />;
    case "Activity": return <Activity className={className} />;
    case "KeyRound": return <KeyRound className={className} />;
    case "Briefcase": return <Briefcase className={className} />;
    case "ShieldAlert": return <ShieldAlert className={className} />;
    default: return null;
  }
}

interface Step {
  title: string;
  Icon: React.ElementType;
  subtext: string;
  colorClass: string;
  bgColorClass: string;
  isAutomated?: boolean;
  isLast?: boolean;
}

const steps: Step[] = [
  {
    title: "Order ontvangen",
    Icon: Package,
    subtext: "gisteren",
    colorClass: "text-[#0100a4]",
    bgColorClass: "bg-[#0100a4]/10",
  },
  {
    title: "Factuur geupload",
    Icon: FileText,
    subtext: "vandaag",
    colorClass: "text-pink-500",
    bgColorClass: "bg-pink-500/10",
    isAutomated: true,
  },
  {
    title: "Bestellingen verzonden",
    Icon: Truck,
    subtext: "vandaag",
    colorClass: "text-[#0100a4]",
    bgColorClass: "bg-[#0100a4]/10",
  },
  {
    title: "Review email verzonden",
    Icon: Mail,
    subtext: "vandaag",
    colorClass: "text-pink-500",
    bgColorClass: "bg-pink-500/10",
    isAutomated: true,
    isLast: true,
  },
];

function StaticLineConnector() {
  return (
    <svg
      width="2"
      height="20"
      viewBox="0 0 2 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-2"
    >
      {/* Base Grey Line */}
      <line x1="1" y1="0" x2="1" y2="20" stroke="#d1d5db" strokeWidth="2" />
    </svg>
  );
}

interface HighlightedSectionProps {
  variant: 'AutomationSector' | 'InsightsSector' | 'ToolsSector' | 'TrackingSector';
}

export default function HighlightedSection({ variant }: HighlightedSectionProps) {
  if (variant === 'AutomationSector') {
    const category = automationCategory;

    return (
      <section className="w-full md:w-1/2 py-6 md:py-8 lg:py-10 border-t border-r border-b bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-left px-1.5">
            <h3 className="text-sm text-muted-foreground font-normal mb-1">{category.title}</h3>
            <h2 className="text-2xl tracking-tight sm:text-3xl md:text-2xl text-gray-900 dark:text-gray-50">
              Automatiseer processen, focus op ondernemen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-1.5">
              <div className="space-y-1">
                {category.items.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className={cn(
                      "group flex items-start gap-2.5 rounded py-1.5 px-1.5 transition-colors relative",
                      item.highlight
                        ? "bg-gradient-to-r from-purple-50 to-transparent border-l-2 border-purple-500"
                        : "",
                      category.colorClass
                    )}
                  >
                    <div className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded border bg-background transition-colors",
                      category.colorClass
                    )}>
                      <div className={category.iconClass}>
                        {renderIcon(item.icon, "h-4 w-4")}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium group-hover:text-accent-foreground flex items-center gap-2">
                        {item.title}
                        {item.highlight && (
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">
                            NIEUW
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Automation Steps */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center space-y-2 ml-12">
                {steps.map((step) => (
                  <div key={step.title} className="w-full max-w-[320px]">
                    <div
                      className={`
                        relative transition-colors rounded py-1.5 px-1.5 mb-2 flex items-start space-x-3
                        ${step.isAutomated
                          ? 'bg-gradient-to-r from-pink-50 to-transparent border-l-2 border-pink-500'
                          : step.colorClass === 'text-[#0100a4]' ? '' : 'border'
                        }
                      `}
                    >
                      <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border ${step.colorClass !== 'text-[#0100a4]' ? step.bgColorClass : 'bg-transparent border-transparent'}`}>
                          <step.Icon className={`h-5 w-5 ${step.colorClass}`} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="text-left flex-grow">
                        <div className="flex items-center justify-between space-x-1.5 mb-0.5">
                          <h3 className="text-sm font-medium">{step.title}</h3>
                          {step.isAutomated && (
                            <span className="inline-flex items-center rounded-full bg-pink-100 px-2 py-0.5 text-xs font-medium text-pink-800 flex-shrink-0">
                              AUTO
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{step.subtext}</p>
                      </div>
                    </div>
                    {!step.isLast ? (
                      <StaticLineConnector />
                    ) : (
                      <div className="h-[20px] mb-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (variant === 'InsightsSector') {
    return (
      <section className="w-full md:w-1/2 py-6 md:py-8 lg:py-10 border-tpnp relative overflow-hidden border-t border-b bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mb-8 text-left px-1.5">
            <h3 className="text-sm font-normal mb-1 text-muted-foreground">Inzichten</h3>
            <h2 className="text-2xl tracking-tight sm:text-3xl md:text-2xl text-gray-900 dark:text-gray-50">
              Inzicht in alle store data
            </h2>
          </div>
        </div>

        {/* New image positioned above the existing one */}
        <Image 
          src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/inzicht-wMrslhEeyKX4GYOCf8NL2fWwpTcyld.png"
          alt="Store data insights graph"
          width={450}
          height={270}
          className="absolute bottom-[359px] right-0 object-cover z-0"
        />

        {/* Existing image */}

      </section>
    );
  } else if (variant === 'ToolsSector') {
    const category = toolsCategory;
    return (
      <section className="w-full py-6 md:py-8 lg:py-10 border-t border-b bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-left px-1.5">
            <h3 className="text-sm text-muted-foreground font-normal mb-1">{category.title}</h3>
            <h2 className="text-2xl tracking-tight sm:text-3xl md:text-2xl text-gray-900 dark:text-gray-50">
              Krachtige tools voor groei en optimalisatie
            </h2>
          </div>

          {/* Using a similar grid, but it will span full width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Column 1: Tool List */}
            <div className="space-y-1.5">
              <div className="space-y-1">
                {category.items.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className={cn(
                      "group flex items-start gap-2.5 rounded py-1.5 px-1.5 transition-colors relative",
                      item.highlight
                        ? "bg-gradient-to-r from-purple-50 to-transparent border-l-2 border-purple-500"
                        : "",
                      category.colorClass
                    )}
                  >
                    <div className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded border bg-background transition-colors",
                      category.colorClass
                    )}>
                      <div className={category.iconClass}>
                        {renderIcon(item.icon, "h-4 w-4")}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium group-hover:text-accent-foreground flex items-center gap-2">
                        {item.title}
                        {item.highlight && (
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">
                            NIEUW
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Placeholder for visual element or more text */}
            <div className="flex justify-center items-center h-full bg-purple-100/50 rounded-lg p-8">
               <p className="text-center text-purple-700">Visual element for Tools coming soon...</p>
               {/* You can replace this placeholder with an Image or other components */}
            </div>
          </div>
        </div>
      </section>
    );
  } else if (variant === 'TrackingSector') {
    const category = trackingCategory;
    return (
      <section className="w-full py-6 md:py-8 lg:py-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-left px-1.5">
            <h3 className="text-sm text-muted-foreground font-normal mb-1">{category.title}</h3>
            <h2 className="text-2xl tracking-tight sm:text-3xl md:text-2xl text-gray-900 dark:text-gray-50">
              Volg alles, mis niets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Column 1: Tracking Feature List */}
            <div className="space-y-1.5">
              <div className="space-y-1">
                {category.items.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className={cn(
                      "group flex items-start gap-2.5 rounded py-1.5 px-1.5 transition-colors relative",
                      item.highlight
                        ? "bg-gradient-to-r from-green-50 to-transparent border-l-2 border-green-500"
                        : "",
                      category.colorClass
                    )}
                  >
                    <div className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded border bg-background transition-colors",
                      category.colorClass
                    )}>
                      <div className={category.iconClass}>
                        {renderIcon(item.icon, "h-4 w-4")}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium group-hover:text-accent-foreground flex items-center gap-2">
                        {item.title}
                        {item.highlight && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                            NIEUW
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Placeholder for visual element */}
            <div className="flex justify-center items-center h-full rounded-lg p-8">
               <p className="text-center text-green-700">Visual element for Tracking coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
} 