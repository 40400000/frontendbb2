"use client"

import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

// TODO: Ideally, import this from a shared location instead of duplicating
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  href: string;
  highlight?: boolean;
}

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
        title: "Ranking inzichten",
        description: "Volg en analyseer je product rankings",
        icon: "LineChart",
        href: "/features/ranking-insights"
      },
      {
        title: "Verkoop inzichten",
        description: "Uitgebreid overzicht van je verkoopprestaties",
        icon: "BarChart",
        href: "/features/sales-dashboard"
      },
      {
        title: "Product inzichten",
        description: "Gedetailleerde analyse van je productprestaties",
        icon: "LineChart",
        href: "/features/product-insights"
      },
      {
        title: "Bestellingen inzichten",
        description: "Analyseer bestelgegevens om je bedrijf te optimaliseren",
        icon: "ShoppingCart",
        href: "/features/order-insights"
      },
      {
        title: "Levering tracker",
        description: "Volg de status van je leveringen",
        icon: "Truck",
        href: "/features/delivery-tracker"
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
        description: "Geavanceerde zoekwoord onderzoek en optimalisatie tools",
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
  },
  automation: {
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
        description: "Geautomatiseerde BTW-aangifte berekening",
        icon: "Calculator",
        href: "/features/tax-automation"
      },
      {
        title: "Automatische changelog",
        description: "Houd wijzigingen in listings automatisch bij",
        icon: "FileClock",
        href: "/features/changelog-automation"
      },
    ]
  },
  tracking: {
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
        description: "krijg meldingen als jou listing wordt gehijacked",
        icon: "ShieldAlert",
        href: "/features/listing-hijacker-tracker"
      },
    ]
  }
}

// Function to find the feature title based on the current pathname
function getCurrentPageTitle(currentPath: string): string | null {
  // 1. Check for exact feature item match
  for (const categoryKey in featureCategories) {
    const category = featureCategories[categoryKey];
    const foundItem = category.items.find(item => item.href === currentPath);
    if (foundItem) {
      return foundItem.title;
    }
  }

  // 2. Check for category page match (e.g., /features/automatisering)
  const pathParts = currentPath.split('/');
  if (pathParts.length === 3 && pathParts[1] === 'features') {
    const categoryPathSegment = pathParts[2]; // This will be 'automatisering'
    // Find the category data by comparing the path segment with the category TITLE
    const categoryData = Object.entries(featureCategories).find(
      ([_key, categoryDetails]) => categoryDetails.title.toLowerCase() === categoryPathSegment.toLowerCase()
    );
     if (categoryData) {
       // categoryData is like ['automation', { title: 'Automatisering', ... }]
       return categoryData[1].title; // Return the title like "Automatisering"
     }
  }

  // 3. Check specific paths not in features if needed
  if (currentPath === '/prijzen') return 'Prijzen';
  if (currentPath === '/contact') return 'Contact';

  return null; // Return null if no matching page found or it's the homepage
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const currentPageTitle = getCurrentPageTitle(pathname);
  const isFeaturePage = pathname.startsWith('/features/');

  if (!isFeaturePage || !currentPageTitle) {
    return null; // Don't render breadcrumbs if not on a feature page or no title found
  }

  return (
    <div className="border-t border-b container mx-auto overflow-hidden">
      <div className="container mx-auto py-6 px-0 text-md text-foreground">
        Features   <span className="text-muted-foreground px-2">/</span>   {currentPageTitle}
      </div>
    </div>
  );
} 