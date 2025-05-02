import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import Next Image
// Import necessary icons from lucide-react
import {
  LineChart,
  Search,
  FileText,
  Target,
  ShoppingCart,
  Package, // Added Package icon
  Download, // Added Download icon
  Upload,   // Added Upload icon
  Sparkle,
  Sparkles,
  HelpCircle,
  Activity,
  SearchCode,
  Settings,
  Rocket,
  BarChart,
  Database,
  Bot,
  MessageSquare,
  Crown,
  Building2, // Added Sparkle icon
  ArrowRight, // Added ArrowRight icon
  CheckIcon,  // Added CheckIcon
  ExternalLink, // Added ExternalLink
  Wrench,     // Added Wrench
  ChartNoAxesCombined, // Added ChartNoAxesCombined
  Zap,        // Added Zap
  TestTubeDiagonal, // Added for A/B testing
  ShieldAlert, // Added for Hijacker tracker
  FileClock, // Added for Baaspilot
  KeyRound, // Added for Keyword Tracking
  Briefcase, // Added for Project Management (moved)
  Truck, // Added for Omzet Research
  Mail, // Added for Email Campaigns
  Reply, // Added for Auto-reply invoice requests
  TrendingDown, // Added for ACoS reduction
  TrendingUp, // Added for Profit increase
} from 'lucide-react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Added icon import
import { IoStarOutline } from "react-icons/io5"; // Added icon import
// import OrderProgressTracker from '@/components/order-progress-tracker'; // Keep old import commented for reference or remove
import HighlightedSection from '@/components/highlighted-section'; // Corrected import path
import { BackgroundPhoto } from "@/components/ui/background-photo"; // Import the background photo
import { InteractiveTopicSection } from "@/components/interactive-topic-section";
import { MiddleContentSection } from "@/components/middle-content-section";
import { DataInzichtenClientFeatures } from "@/components/data-inzichten-client-features"; // Import the new client component
import { TrackingClientFeatures } from "@/components/tracking-client-features";
import { cn } from "@/lib/utils"; // Added cn import

const pricingPlans = [
  {
    name: "Start",
    tagline: "Zet je eerste stappen",
    price: 20,
    priceSuffix: "/ maand",
    description: "Voor ambitieuze beginners die hun bol.com avontuur willen lanceren.",
    iconFeatures: [
      { text: "Automatisering facturen", icon: FileText },
      { text: "Automatisch reageren factuuraanvragen", icon: Reply },
      { text: "Custom e-mail campagnes", icon: Mail },
      { text: "Verzamel meer reviews", icon: IoStarOutline },
      { text: "Automatisering BTW aangifte", icon: FileClock },
      { text: "Volg rankings van 10 producten", icon: Activity },
      { text: "Sales, winst & product dashboards", icon: LineChart },
    ],
    cta: "21 dagen gratis",
    ctaVariant: "outline" as const,
    planIcon: Rocket,
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-500",
  },
  {
    name: "Plus",
    tagline: "Boost je verkoop",
    price: 90,
    priceSuffix: "/ maand",
    description: "De perfecte toolkit voor verkopers die klaar zijn voor serieuze groei.",
    iconFeatures: [
      { text: "Keyword database & analyse", icon: Database },
      { text: "Winst verhogen", icon: TrendingUp },
      { text: "Listing AI optimalisatie", icon: Sparkles },
      { text: "Volg 200 producten (incl. Precision & Keyword)", icon: Target },
      { text: "Listing Hijacker Alerts", icon: ShieldAlert },
      { text: "Baaspilot notificaties", icon: Bot },
      { text: "Project management (5 projecten)", icon: Briefcase },
    ],
    cta: "21 dagen gratis",
    ctaVariant: "default" as const,
    planIcon: Crown,
    iconBgColor: "bg-purple-100",
    iconTextColor: "text-purple-500",
  },
  {
    name: "Pro",
    tagline: "Domineer de markt",
    price: 450,
    priceSuffix: "/ maand",
    description: "Voor bol.com ondernemers en agencies die willen excelleren.",
    iconFeatures: [
      { text: "Onbeperkte stores & gebruikers", icon: Building2 },
      { text: "ACoS verlagen", icon: TrendingDown },
      { text: "Onbeperkt product & keyword tracking", icon: Activity },
      { text: "400 precision product trackers", icon: Target },
      { text: "Dedicated project manager", icon: Crown },
      { text: "Premium support & strategie sessies", icon: Rocket },

      { text: "AI biedingen & omzet research tools (Binnenkort)", icon: Zap },
    ],
    cta: "Gesprek inplannen",
    ctaVariant: "outline" as const,
    planIcon: Building2,
    iconBgColor: "bg-indigo-100",
    iconTextColor: "text-indigo-500",
  },
]

interface FeatureComparisonItem {
  name: string;
  description: string;
  hobby: string;
  pro: string;
  enterprise: string;
  comingSoon?: boolean; // Add optional comingSoon flag
}

// Define the single store feature separately
const storeFeature: FeatureComparisonItem = {
  name: "Aantal stores",
  description: "Maximum aantal gekoppelde bol stores per account.",
  hobby: "2 stores",
  pro: "Onbeperkt stores",
  enterprise: "Onbeperkt"
};

// Define the seats feature separately
const seatFeature: FeatureComparisonItem = {
  name: "Aantal seats",
  description: "Het aantal gebruikers dat toegang heeft tot het account.",
  hobby: "-",
  pro: "2 seats",
  enterprise: "Onbeperkt"
};

// Define the orders feature separately
const orderFeature: FeatureComparisonItem = {
  name: "Aantal orders",
  description: "Het aantal orders dat verwerkt kan worden.", // Placeholder description
  hobby: "Onbeperkt",
  pro: "Onbeperkt",
  enterprise: "Onbeperkt"
};

// Define the new projects feature - REMOVED, will be part of trackingFeatures
// const projectFeature: FeatureComparisonItem = {
//   name: "Aantal projecten",
//   description: "Het aantal projecten dat je kunt beheren.", // Placeholder description, you might want to refine this
//   hobby: "-",
//   pro: "5",
//   enterprise: "Onbeperkt"
// };

// New feature comparison data (excluding the store feature)
const featuresData: FeatureComparisonItem[] = [
];

// Define data tools features
const dataToolsFeatures: FeatureComparisonItem[] = [
  {
    name: "Keyword database",
    description: "Geavanceerde zoekwoord onderzoek en optimalisatie tools voor perfecte organisch en geadverteerde rankings.",
    hobby: "✕",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Listing AI",
    description: "AI-gestuurde listing optimalisatie voor maximale zichtbaarheid",
    hobby: "✕",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Winst & ACoS calculator",
    description: "Bereken winstgevendheid van producten en campagnes",
    hobby: "✓",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "A/B testen van listings",
    description: "Test verschillende listing varianten voor optimalisatie",
    hobby: "✕",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "AI gestuurde biedingen",
    description: "Bied automatisch op keywords met AI, gebaseerd op miljoenen historische data punten",
    hobby: "-",
    pro: "-",
    enterprise: "✓",
    comingSoon: true
  }
];

// Define insight features
const insightFeatures: FeatureComparisonItem[] = [
  {
    name: "Aanpasbare dashboards en views",
    description: "Zie alles precies zoals je het wilt zien.",
    hobby: "✓", // Assuming basic view for Start
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Product prestaties", // Renamed from "Verkoop inzichten" to match nav
    description: "Uitgebreid overzicht van je verkoopprestaties",
    hobby: "✓",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Product inzichten",
    description: "Gedetailleerde analyse van je productprestaties",
    hobby: "✓",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Bestellingen inzichten",
    description: "Analyseer bestelgegevens om je bedrijf te optimaliseren",
    hobby: "✓",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Listing Hijacker tracker",
    description: "Krijg meldingen als jou listing wordt gehijacked",
    hobby: "✕",
    pro: "✓",
    enterprise: "✓"
  },
  // Removed "Levering tracker"
  // {
  //   name: "Levering tracker",
  //   description: "Volg je leveringen en prestaties.", // Placeholder description
  //   hobby: "✕",
  //   pro: "✓",
  //   enterprise: "✓"
  // }
];

// Define ranking/tracking features
const trackingFeatures: FeatureComparisonItem[] = [ // Renamed from rankingFeatures
  {
    name: "Product tracking",
    description: "Volg de prestaties van je producten.", // Placeholder description
    hobby: "10",
    pro: "200",
    enterprise: "Onbeperkt"
  },
  {
    name: "Precision product tracking",
    description: "Nauwkeurige tracking van je belangrijkste statistieken", // Updated description
    hobby: "-",
    pro: "30",
    enterprise: "400"
  },
  {
    name: "Dynamic product tracking",
    description: "Dynamische aanpassing van tracking parameters",
    hobby: "✕",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Keyword tracking",
    description: "Volg de prestaties van specifieke zoekwoorden",
    hobby: "✕", // Assuming not in Start plan
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Project management", // Moved from separate feature
    description: "Beheer je projecten en taken efficiënt",
    hobby: "-", // Matches old projectFeature allocation
    pro: "5",   // Matches old projectFeature allocation
    enterprise: "Onbeperkt" // Matches old projectFeature allocation
  },
  {
    name: "Omzet research",
    description: "Bekijk de omzet van meer dan 4 miljoen producten op bol.com", // Removed (Binnenkort) from description
    hobby: "✕",
    pro: "✓", // Assuming Plus/Pro
    enterprise: "✓",
    comingSoon: true // Mark as coming soon
  },
];

// Define automation features
const automationFeatures: FeatureComparisonItem[] = [
  {
    name: "Factuur automatisering",
    description: "Geautomatiseerde factuur generatie en beheer",
    hobby: "✓",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "E-mail automatisering",
    description: "Verzamel meer reviews met geautomatiseerde e-mails",
    hobby: "✓",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "BTW-aangifte automatisering",
    description: "Vereenvoudig belastingaangifte met geautomatiseerde BTW-aangifte berekening",
    hobby: "✓",
    pro: "✓",
    enterprise: "✓"
  },
  {
    name: "Baaspilot",
    description: "Wees direct op de hoogte van alle belangrijke gebeurtenissen",
    hobby: "✕", // Assuming not in Start plan
    pro: "✓",
    enterprise: "✓"
  }
];

// Define Pro exclusive features
const proExclusiveFeatures: FeatureComparisonItem[] = [
  {
    name: "Hulp bij advertentiebeheer",
    description: "Ondersteuning bij het opzetten en beheren van je bol.com advertentiecampagnes.",
    hobby: "-",
    pro: "-",
    enterprise: "✓"
  },
  {
    name: "Optionele bi-wekelijkse call-ins",
    description: "Regelmatige check-ins om voortgang en strategie te bespreken.",
    hobby: "-",
    pro: "-",
    enterprise: "✓"
  },
  {
    name: "Advies voor zichtbaarheidsoptimalisatie",
    description: "Strategisch advies om de zichtbaarheid van je producten te maximaliseren.",
    hobby: "-",
    pro: "-",
    enterprise: "✓"
  },
  {
    name: "Aangewezen project manager",
    description: "Een vast aanspreekpunt voor strategie en ondersteuning.",
    hobby: "-",
    pro: "-",
    enterprise: "✓" // Pro plan (represented by enterprise key)
  },
];

const allFeaturesData = [...featuresData, ...dataToolsFeatures, ...insightFeatures, ...automationFeatures];

// Helper to render check, cross, or text
const renderFeatureValue = (value: string) => {
  if (value === "✓") return <CheckIcon className="h-5 w-5 text-green-500" />;
  // Use a dash for both '✕' and '-' values
  if (value === "✕" || value === "-") return <span className="text-sm text-muted-foreground">-</span>;
  // Render the value directly if it's not a check or cross/dash
  return <span className="text-sm">{value}</span>;
};

export default function PricingPage() { // Renamed function
  // Define a top offset for the two rightmost lines. Adjust as needed.
  const innerLinesTopOffset = "top-0"; // Example: 384px - Offset remains

  return (
    <>
      {/* Fixed Background Photo */}
      <BackgroundPhoto className="fixed inset-0 -z-10" imageOption={1} />

      {/* Scrollable Content Container */}
      <div className="relative z-0 flex flex-col min-h-screen">

        {/* Overlay 1: LEFT Outer Border + FIRST Inner Divider (Full Height) - Uses border variable */}
        <div className="absolute inset-0 h-full z-[70] pointer-events-none border-l border-border">
          {/* This relative container holds the line element */}
          <div className="relative h-full max-w-full mx-auto">
            {/* Line between cols 1 & 2 (visible only on sm+) - Uses border variable */}
            <div className="hidden sm:block absolute left-1/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Overlay 2: RIGHT Outer Border + SECOND & THIRD Inner Dividers (Starts Lower) - Uses border variable */}
        {/* This container applies the top offset, fade-in mask, and the RIGHT border */}
        <div className={`absolute inset-x-0 ${innerLinesTopOffset} bottom-0 z-[70] pointer-events-none border-r border-border`}>
          {/* This relative container holds the actual line elements */}
          <div className="relative h-full max-w-full mx-auto">
            {/* Divider line that appears in the middle on mobile (2 cols) and between cols 2 & 3 on sm+ (4 cols) - Uses border variable */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border"></div>

            {/* Additional divider line visible only on sm screens and up (4 cols) - Uses border variable */}
            {/* Line between cols 3 & 4 */}
            <div className="hidden sm:block absolute left-3/4 top-0 bottom-0 w-px bg-border"></div>
          </div>
        </div>

        {/* Hero Section - Left Aligned & Reduced Height */}
        <section className="relative z-[60] w-full pt-8 md:pt-16 lg:pt-24 pb-0">
          
          
           <div className="container px-0">
          {/* Grid wrapper to align content and buttons with columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
              {/* Text container spanning full width, but capped by max-w */}
              <div className="col-span-2 sm:col-span-4 flex flex-col items-start space-y-3 md:space-y-4 max-w-3xl pl-0 z-[70] relative"> {/* Added pl-6 for padding */}
                {/* Headline - Reduced font size and corrected tag to h1 */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50">
                  Word founding member
                </h1>
                {/* Sub-headline */}
                <p className="text-white text-4xl w-[71.4%]">
                  Een geduceerd tarief voor de eerste leden. Voor altijd.
                </p>
              </div>
              {/* Button Container - Add t/b borders, keep left padding */}
              <div className="col-span-1 mt-4 flex flex-col pl-0.5 border-t border-border"> {/* Added border-t, border-b */}
                {/* Button 1 - Group for hover effects, relative positioning */}
                <div className="group relative w-full text-left border-b border-border cursor-pointer -mr-1.5 overflow-hidden"> {/* Added group, relative, overflow-hidden. Removed py-6, pl-4 from here */}
                  {/* Original Content - Slides up on hover */}
                  <span className="block py-6 pl-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> {/* Added block, transitions, hover transforms */}
                    Lidmaatschappen bekijken {/* Updated text */}
                  </span>
                  {/* Hover Overlay - Slides in from bottom on hover */}
                  <div className="absolute inset-0 bg-white text-black py-6 pl-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Added absolute overlay with transitions and hover state */}
                  Lidmaatschappen bekijken {/* Updated text */}
                  </div>
                </div>
                {/* Button 2 - Group for hover effects, relative positioning */}
                <div className="group relative w-full text-left cursor-pointer -mr-1.5 overflow-hidden"> {/* Added group, relative, overflow-hidden. Removed py-6, pl-4 from here */}
                  {/* Original Content - Slides up on hover */}
                  <span className="font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"> {/* Changed font-bold to font-semibold */}
                    Neem contact op {/* Updated text */}
                    <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                  </span>
                  {/* Hover Overlay - Slides in from bottom on hover */}
                  <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> {/* Changed font-bold to font-semibold */}
                    Neem contact op {/* Updated text */}
                    <MdOutlineArrowOutward className="h-5 w-5" /> {/* Added icon */}
                  </div>
                </div>
              </div>
            </div> { /* End grid wrapper */}
          </div>

          {/* New Pricing Section */}
          <section className="relative z-[50] w-full border-border">
            {/* Bleed Background */}
            <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
            {/* Pricing Plans Section - Placed directly after hero content, aligned with columns */}
            <div className="container px-0"> {/* Pricing section container (no borders) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
                {/* Empty column for spacing on sm+ screens */}
                <div className="hidden sm:block sm:col-span-1 border-t border-border"></div>

                {/* Pricing Plans - Occupy the right 3 columns on sm+, stack on mobile */}
                {pricingPlans.map((plan, index) => {
                  const discountedPrice = Math.round(plan.price * 0.75);

                  return (
                    <div
                      key={plan.name}
                      className={cn(
                        "relative overflow-hidden p-6 flex flex-col justify-between col-span-2 sm:col-span-1 border-t border-border",
                         index < pricingPlans.length -1 && " border-border"
                      )}
                    >
                      <div>
                        <div className="flex items-start justify-between mb-4">

                        <div className="mt-6">
                        <p className="text-sm text-gray-300 mb-1">{plan.tagline}</p>
                        <h3 className="font-semibold text-white my-3">{plan.name}</h3>
                        <ul className="space-y-2 text-sm text-white pr-3">
                          <li>{plan.description}</li>
                        </ul>
                      </div>

                          {/* <div>
                            <span className="text-sm uppercase tracking-wide text-muted-foreground block font-medium">
                              {plan.tagline}
                            </span>
                            <h3 className="text-2xl font-semibold mt-1">{plan.name}</h3>
                          </div>
                          <div className={cn("p-2 rounded-lg", plan.iconBgColor)}>
                            <plan.planIcon className={cn("w-5 h-5", plan.iconTextColor)} />
                          </div> */}
                        </div>



                        <div className="mb-6 flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-white">{discountedPrice}</span> {/* Changed text color to white */}
                          <span className="text-xl font-medium text-muted-foreground line-through">{plan.price}</span>
                          <span className="text-sm text-muted-foreground">{plan.priceSuffix}</span>
                        </div>

                        <div className="space-y-3 mb-8">
                          {plan.iconFeatures.map((feature) => (
                            <div key={feature.text} className="flex items-center">
                              <feature.icon
                                className={cn(
                                  "mr-2.5 h-5 w-5 flex-shrink-0",
                                  (feature.text === "Premium support & strategie sessies" ||
                                   feature.text === "AI biedingen & omzet research tools (Binnenkort)") && plan.name === "Pro"
                                    ? "text-purple-500" // Purple for specific Pro features
                                    : "text-muted-foreground" // Default color
                                )}
                                strokeWidth={1.5}
                              />
                              <span className="text-sm text-white">{feature.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>



                      <Button
                        variant={plan.ctaVariant}
                        size="lg"
                        className={cn(
                          "w-full group text-black", // Ensure text is black for buttons
                          plan.ctaVariant === 'default' ? 'bg-white hover:bg-gray-200' : 'bg-transparent border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-white hover:text-black' // Adjusted default and outline styles
                        )}
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section> {/* End New Pricing Section */}

          {/* Absolutely Positioned Image Container */}

        </section>

        {/* Feature Comparison Section */}
        <section className="relative z-[40] w-full border-t border-border">
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
          {/* Container matching the main layout grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
            {/* Sticky Header Row - Aligned with columns */}
            {/* Spans full width on mobile, aligns to columns on sm+ */}
            <div className="col-span-2 sm:col-span-4 sticky top-0 bg-background z-10 grid grid-cols-2 sm:grid-cols-4 border-b border-border">
              <div className="p-4 font-semibold col-span-1 sm:col-span-1">Features</div>
              <div className="p-4 font-semibold text-center col-span-1 sm:col-span-1">Start</div>
              {/* These two are hidden on mobile (2-col grid), shown on sm+ (4-col grid) */}
              <div className="hidden sm:block p-4 font-semibold text-center col-span-1">Plus</div>
              <div className="hidden sm:block p-4 font-semibold text-center col-span-1">Pro</div>
            </div>

            {/* Feature Rows Container - Spans full width */}
            <div className="col-span-2 sm:col-span-4">

              {/* --- Core Features --- */}
              {/* Each feature row uses the same grid structure */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-border">
                {/* Feature Name/Desc (Col 1) */}
                <div className="p-4 col-span-1 sm:col-span-1">
                  <p className="font-medium flex items-center gap-1">
                    {storeFeature.name}
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{storeFeature.description}</p>
                </div>
                {/* Start Plan (Col 2) */}
                <div className="p-4 text-center col-span-1 sm:col-span-1 flex items-center justify-center">
                  {renderFeatureValue(storeFeature.hobby)}
                </div>
                {/* Plus Plan (Col 3 - sm+) */}
                <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">
                  {renderFeatureValue(storeFeature.pro)}
                </div>
                {/* Pro Plan (Col 4 - sm+) */}
                <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">
                  {renderFeatureValue(storeFeature.enterprise)}
                </div>
              </div>
              {/* Repeat structure for other core features... */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-border">
                <div className="p-4 col-span-1 sm:col-span-1">
                  <p className="font-medium flex items-center gap-1">{seatFeature.name}<ExternalLink className="h-3 w-3 text-muted-foreground" /></p>
                  <p className="text-sm text-muted-foreground mt-1">{seatFeature.description}</p>
                </div>
                <div className="p-4 text-center col-span-1 sm:col-span-1 flex items-center justify-center">{renderFeatureValue(seatFeature.hobby)}</div>
                <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">{renderFeatureValue(seatFeature.pro)}</div>
                <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">{renderFeatureValue(seatFeature.enterprise)}</div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-border">
                <div className="p-4 col-span-1 sm:col-span-1">
                  <p className="font-medium flex items-center gap-1">{orderFeature.name}<ExternalLink className="h-3 w-3 text-muted-foreground" /></p>
                  <p className="text-sm text-muted-foreground mt-1">{orderFeature.description}</p>
                </div>
                <div className="p-4 text-center col-span-1 sm:col-span-1 flex items-center justify-center">{renderFeatureValue(orderFeature.hobby)}</div>
                <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">{renderFeatureValue(orderFeature.pro)}</div>
                <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">{renderFeatureValue(orderFeature.enterprise)}</div>
              </div>

              {/* --- Automatisering Section --- */}
              {/* Section Header - Spans full width */}
              <div className="col-span-2 sm:col-span-4 grid grid-cols-1 border-b border-border bg-gray-50/50 dark:bg-gray-900/30">
                <div className="p-4 col-span-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Automatisering</p>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-foreground" />
                    <h3 className="text-lg font-semibold">Bespaar tijd en moeite</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Automatiseer repeterende taken en focus op groei.</p>
                </div>
              </div>
              {/* Feature Rows for Automatisering */}
              <div className="divide-y divide-border">
                {automationFeatures.map((feature) => (
                  <div key={feature.name} className="grid grid-cols-2 sm:grid-cols-4">
                    <div className="p-4 col-span-1 sm:col-span-1">
                      <p className="font-medium flex items-center gap-1">{feature.name}<ExternalLink className="h-3 w-3 text-muted-foreground" /></p>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                    <div className="p-4 text-center col-span-1 sm:col-span-1 flex items-center justify-center">{renderFeatureValue(feature.hobby)}</div>
                    <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">{renderFeatureValue(feature.pro)}</div>
                    <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">{renderFeatureValue(feature.enterprise)}</div>
                  </div>
                ))}
              </div>

              {/* --- Data Tools Section --- */}
              <div className="col-span-2 sm:col-span-4 grid grid-cols-1 border-b border-t border-border bg-gray-50/50 dark:bg-gray-900/30">
                <div className="p-4 col-span-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Tools</p> {/* Renamed section */}
                  <div className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-foreground" />
                    <h3 className="text-lg font-semibold">Ontdek & Optimaliseer</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Krachtige tools voor data-gedreven beslissingen.</p>
                </div>
              </div>
              <div className="divide-y divide-border">
                {dataToolsFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={cn(
                      "grid grid-cols-2 sm:grid-cols-4",
                      feature.name === "Keyword database" &&
                      "bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 border-l-2 border-l-purple-500 -ml-px" // Highlight style
                    )}
                  >
                    <div className="p-4 col-span-1 sm:col-span-1">
                      <p className={cn(
                         "font-medium flex items-center gap-1",
                         feature.comingSoon && "text-muted-foreground" // Grey out name if coming soon
                      )}>
                        {feature.name}
                        {feature.comingSoon && (
                          <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300">BINNENKORT</span>
                        )}
                        {feature.name === "Keyword database" && // Keep NIEUW badge logic if needed, applied in Data Tools section
                         <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">NIEUW</span>
                        }
                        <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                      </p>
                      <p className={cn(
                         "text-sm text-muted-foreground mt-1",
                         feature.comingSoon && "text-muted-foreground/70" // Further grey out description
                      )}>{feature.description}</p>
                    </div>
                    <div className={cn(
                      "p-4 text-center col-span-1 sm:col-span-1 flex items-center justify-center",
                      feature.comingSoon && "opacity-50" // Grey out plan value
                     )}>{renderFeatureValue(feature.hobby)}</div>
                    <div className={cn(
                      "hidden sm:flex p-4 text-center col-span-1 items-center justify-center",
                      feature.comingSoon && "opacity-50" // Grey out plan value
                    )}>{renderFeatureValue(feature.pro)}</div>
                    <div className={cn(
                      "hidden sm:flex p-4 text-center col-span-1 items-center justify-center",
                      feature.comingSoon && "opacity-50" // Grey out plan value
                     )}>{renderFeatureValue(feature.enterprise)}</div>
                  </div>
                ))}
              </div>

              {/* --- Inzichten Section --- */}
              <div className="col-span-2 sm:col-span-4 grid grid-cols-1 border-b border-t border-border bg-gray-50/50 dark:bg-gray-900/30">
                <div className="p-4 col-span-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Inzichten</p>
                  <div className="flex items-center gap-2">
                    <ChartNoAxesCombined className="h-5 w-5 text-foreground" />
                    <h3 className="text-lg font-semibold">Inzicht in prestaties</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Weet wat werkt, zie wat groeit. Stuur op data, niet op gevoel.</p>
                </div>
              </div>
              <div className="divide-y divide-border">
                {insightFeatures.map((feature) => (
                  <div key={feature.name} className="grid grid-cols-2 sm:grid-cols-4">
                    <div className="p-4 col-span-1 sm:col-span-1">
                      <p className="font-medium flex items-center gap-1">{feature.name}<ExternalLink className="h-3 w-3 text-muted-foreground" /></p>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                    <div className="p-4 text-center col-span-1 sm:col-span-1 flex items-center justify-center">{renderFeatureValue(feature.hobby)}</div>
                    <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">{renderFeatureValue(feature.pro)}</div>
                    <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">{renderFeatureValue(feature.enterprise)}</div>
                  </div>
                ))}
              </div>

              {/* --- Tracking Section --- */} {/* Renamed from Ranking Inzichten */}
              <div className="col-span-2 sm:col-span-4 grid grid-cols-1 border-b border-t border-border bg-gray-50/50 dark:bg-gray-900/30">
                <div className="p-4 col-span-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Tracking</p> {/* Renamed */}
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-foreground" /> {/* Kept Target icon */}
                    <h3 className="text-lg font-semibold">Monitor en optimaliseer prestaties</h3> {/* Updated title */}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Volg producten, keywords en projecten.</p> {/* Updated description */}
                </div>
              </div>
              <div className="divide-y divide-border">
                {trackingFeatures.map((feature) => ( // Use trackingFeatures
                  <div
                    key={feature.name}
                    className={cn(
                      "grid grid-cols-2 sm:grid-cols-4",
                      (feature.name === "Precision product tracking" || feature.name === "Keyword database") && // Keep highlight for Precision Tracking & Keyword DB
                      "bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 border-l-2 border-l-purple-500 -ml-px" // Highlight style
                    )}
                  >
                    <div className="p-4 col-span-1 sm:col-span-1">
                      <p className={cn(
                         "font-medium flex items-center gap-1",
                         feature.comingSoon && "text-muted-foreground" // Grey out name if coming soon
                      )}>
                        {feature.name}
                        {feature.comingSoon && (
                          <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300">BINNENKORT</span>
                        )}
                        {feature.name === "Keyword database" && // Keep NIEUW badge logic if needed, applied in Data Tools section
                         <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">NIEUW</span>
                        }
                        <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                      </p>
                      <p className={cn(
                         "text-sm text-muted-foreground mt-1",
                         feature.comingSoon && "text-muted-foreground/70" // Further grey out description
                      )}>{feature.description}</p>
                    </div>
                    <div className={cn(
                      "p-4 text-center col-span-1 sm:col-span-1 flex items-center justify-center",
                      feature.comingSoon && "opacity-50" // Grey out plan value
                     )}>{renderFeatureValue(feature.hobby)}</div>
                    <div className={cn(
                      "hidden sm:flex p-4 text-center col-span-1 items-center justify-center",
                      feature.comingSoon && "opacity-50" // Grey out plan value
                    )}>{renderFeatureValue(feature.pro)}</div>
                    <div className={cn(
                      "hidden sm:flex p-4 text-center col-span-1 items-center justify-center",
                      feature.comingSoon && "opacity-50" // Grey out plan value
                     )}>{renderFeatureValue(feature.enterprise)}</div>
                  </div>
                ))}
              </div>

              {/* --- Premium Service Section (Pro Exclusives) --- */}
              <div className="col-span-2 sm:col-span-4 grid grid-cols-1 border-b border-t border-border bg-gray-50/50 dark:bg-gray-900/30">
                <div className="p-4 col-span-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Premium Service</p>
                  <div className="flex items-center gap-2">
                    <Sparkle className="h-5 w-5 text-foreground" /> {/* Using Sparkle icon */}
                    <h3 className="text-lg font-semibold">Exclusieve Pro voordelen</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Extra ondersteuning en begeleiding voor Pro leden.</p>
                </div>
              </div>
              <div className="divide-y divide-border">
                {proExclusiveFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className={cn(
                      "grid grid-cols-2 sm:grid-cols-4",
                      // Apply distinct styling for this section
                      "bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-900/20 border-l-2 border-l-indigo-500 -ml-px"
                    )}
                  >
                    <div className="p-4 col-span-1 sm:col-span-1">
                      <p className="font-medium flex items-center gap-1">
                        {feature.name}
                        <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                    {/* Hobby Column */}
                    <div className="p-4 text-center col-span-1 sm:col-span-1 flex items-center justify-center">
                      {renderFeatureValue(feature.hobby)}
                    </div>
                    {/* Plus Column (uses feature.pro) - Removed font-semibold */}
                    <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center">
                      {renderFeatureValue(feature.pro)}
                    </div>
                    {/* Pro Column (uses feature.enterprise) - Kept font-semibold */}
                    <div className="hidden sm:flex p-4 text-center col-span-1 items-center justify-center font-semibold">
                      {renderFeatureValue(feature.enterprise)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer Text */}
              <div className="py-6 px-4 text-center border-t border-border">
                <p className="text-xs text-muted-foreground">            Getoonde prijzen zijn in euro's, vrijgesteld van btw op grond van KOR, dit kan veranderen en kunnen onderhevig zijn aan wijzigingen. Maandelijks gefactureerd. 
</p>
              </div>
            </div> { /* End Feature Rows Container */}

            {/* Bottom CTA Section - Spans full width - REMOVED FROM HERE */}
      {/* <div className="sm:col-start-2 sm:col-span-2 mb-8 space-y-6 z-90 relative"> ... </div> */}



          </div> { /* End main grid wrapper for features section */}
        </section>

        {/* New Section for Bottom CTA Text */}
        <section className="relative z-[60] w-full py-60"> {/* High z-index */}
          <div className="absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2 bg-black"></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full"> {/* Re-establish grid */}
            {/* CTA Content placed in correct columns */}
            <div className="col-span-2 sm:col-start-2 sm:col-span-2 mb-8 space-y-6 p-0"> {/* Added padding */}
              {/* Updated Headline with larger font size */}
              <h2 className="text-4xl md:text-5xl font-semibold">Grip op je bol.com succes.</h2>
              {/* Updated Paragraph text - Smaller font size and white text */}
              <p className="text-base text-foreground">
                De huidige golf van bol-platforms belooft veel, maar komen deze beloftes niet waar. Data ontbreekt, en de automatisering is niet flexibel genoeg.
              </p>
              {/* Added separate paragraph for the middle part */}
              <p className="text-base text-foreground">
                Bolbaas doet dit anders. Krijg de controle terug met diepgaande analyses, krachtige tools en slimme automatisering, ontworpen om jouw groei op bol.com te maximaliseren. Eerlijk waar.
              </p>
              {/* Added separate paragraph for the final sentence */}
              <p className="text-base font-semibold text-foreground">
                Met Bolbaas maak je keuzes op basis van echte data.
              </p>
            </div>
          </div>
        </section>


        {/* Removed commented out sections */}


      </div>  {/* close scrollable content container */}
    </>
  )
}
