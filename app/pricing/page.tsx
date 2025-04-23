import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, Rocket, Crown, Building2, Zap, Sparkles, Target, XIcon, ExternalLink, Globe, ChartNoAxesCombined, Wrench, ArrowRight, CheckCircle, Settings, SearchCode, Activity, HelpCircle, MessageSquare, BarChart, Database, FileText, Mail, Bot } from "lucide-react"
import * as React from "react"

const pricingPlans = [
  {
    name: "Start",
    tagline: "Zet je eerste stappen",
    price: 20,
    priceSuffix: "/ maand",
    description: "Voor ambitieuze beginners die hun bol.com avontuur willen lanceren.",
    iconFeatures: [
      { text: "Automatisering van facturen, emails en btw aangifte", icon: Settings },
      { text: "Ontdek kansrijke zoekwoorden", icon: SearchCode },
      { text: "Volg rankings van 10 producten", icon: Activity },
      { text: "Persoonlijke e-mail helpdesk", icon: HelpCircle },
    ],
    cta: "1 maand gratis",
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
      { text: "Geavanceerd inzichtendashboard", icon: BarChart },
      { text: "Krachtige zoekwoordanalyse", icon: Database },
      { text: "Volg 25 producten in detail", icon: Activity },
      { text: "Facturen op autopilot", icon: FileText },
      { text: "Zorgeloze BTW-afhandeling", icon: Bot },
      { text: "Directe chat ondersteuning", icon: MessageSquare },
    ],
    cta: "1 maand gratis",
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
      { text: "Premium analytics dashboard", icon: BarChart },
      { text: "Onbeperkte zoekwoordmogelijkheden", icon: Database },
      { text: "Ongelimiteerd productmonitoring", icon: Activity },
      { text: "Complete automatisering suite", icon: Settings },
      { text: "VIP ondersteuning 24/7", icon: HelpCircle },
      { text: "Persoonlijke strategie consultant", icon: MessageSquare },
    ],
    cta: "Schaal je business",
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
  hobby: "1 seat",
  pro: "5 seats",
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

// Define the new projects feature
const projectFeature: FeatureComparisonItem = {
  name: "Aantal projecten",
  description: "Het aantal projecten dat je kunt beheren.", // Placeholder description, you might want to refine this
  hobby: "-",
  pro: "5",
  enterprise: "Onbeperkt"
};

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
  }
];

// Define insight features
const insightFeatures: FeatureComparisonItem[] = [
  {
    name: "Verkoop inzichten",
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
    name: "Levering tracker",
    description: "Volg je leveringen en prestaties.", // Placeholder description
    hobby: "✕",
    pro: "✓",
    enterprise: "✓"
  }
];

// Define ranking features
const rankingFeatures: FeatureComparisonItem[] = [
  {
    name: "Product tracking",
    description: "Volg de prestaties van je producten.", // Placeholder description
    hobby: "10",
    pro: "200",
    enterprise: "Onbeperkt"
  },
  {
    name: "Precision product tracking",
    description: "Gedetailleerde tracking voor geavanceerde analyse.", // Placeholder description
    hobby: "-",
    pro: "30",
    enterprise: "400"
  }
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
  }
];

const allFeaturesData = [...featuresData, ...dataToolsFeatures, ...insightFeatures, ...automationFeatures];

export default function PricingPage() {
  return (
    <div className="container mx-auto transform origin-center py-12">
      <div className="border rounded-lg shadow-none mx-auto max-w-5xl relative overflow-hidden">
        
        {/* === NEW: Founding Member Alert Banner === */}
        <div className="relative overflow-hidden border-b bg-gradient-to-br from-blue-700 via-indigo-600 to-gray-900 p-6 text-left">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20 z-0">
            <div className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 bg-white/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 -translate-x-20 translate-y-20 bg-white/30 rounded-full blur-xl"></div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <p className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              Word founding member: pak 25% korting voor <span className="italic">lifetime</span>!
            </p>
            <p className="mt-2 text-lg font-medium text-white/90">
              Als dank voor je vroege support, krijg je levenslang 25% korting op je abonnement. Word partner in groei, direct vanaf de start.
            </p>
          </div>
        </div>
        {/* === END: Founding Member Alert Banner === */}

        {/* Pricing Plans Section */}
        <div className="grid gap-0 sm:grid-cols-1 lg:grid-cols-3 w-full border-b bg-background">
          {pricingPlans.map((plan, index) => {
            const discountedPrice = Math.round(plan.price * 0.75);

            return (
              <div
                key={plan.name}
                className={cn(
                  "relative overflow-hidden border-r last:border-r-0 p-6 flex flex-col justify-between",
                )}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm uppercase tracking-wide text-muted-foreground block font-medium">
                        {plan.tagline}
                      </span>
                      <h3 className="text-2xl font-semibold mt-1">{plan.name}</h3>
                    </div>
                    <div className={cn("p-2 rounded-lg", plan.iconBgColor)}>
                      <plan.planIcon className={cn("w-5 h-5", plan.iconTextColor)} />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 h-12">
                    {plan.description}
                  </p>

                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{discountedPrice}</span>
                    <span className="text-xl font-medium text-muted-foreground line-through">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.priceSuffix}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.iconFeatures.map((feature) => (
                      <div key={feature.text} className="flex items-center">
                        <feature.icon className="mr-2.5 h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  className={cn(
                    "w-full group",
                    plan.ctaVariant === 'default' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* New Feature Comparison Section */}
        <div className="w-full border-b">
          {/* Header Row */}
          <div className="grid grid-cols-4 border-b sticky top-16 bg-background z-10">
            <div className="p-4 font-semibold col-span-1">Features</div>
            <div className="p-4 font-semibold text-center col-span-1 border-l">Start</div>
            <div className="p-4 font-semibold text-center col-span-1 border-l">Plus</div>
            <div className="p-4 font-semibold text-center col-span-1 border-l">Pro</div>
          </div>

          {/* Render the single store feature row */}
          <div className="grid grid-cols-4 border-b">
            <div className="p-4 col-span-1">
              <p className="font-medium flex items-center gap-1">
                {storeFeature.name}
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{storeFeature.description}</p>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{storeFeature.hobby}</span>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{storeFeature.pro}</span>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{storeFeature.enterprise}</span>
            </div>
          </div>

          {/* Render the seats feature row */}
          <div className="grid grid-cols-4 border-b">
            <div className="p-4 col-span-1">
              <p className="font-medium flex items-center gap-1">
                {seatFeature.name}
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{seatFeature.description}</p>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{seatFeature.hobby}</span>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{seatFeature.pro}</span>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{seatFeature.enterprise}</span>
            </div>
          </div>

          {/* Render the orders feature row */}
          <div className="grid grid-cols-4 border-b">
            <div className="p-4 col-span-1">
              <p className="font-medium flex items-center gap-1">
                {orderFeature.name}
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{orderFeature.description}</p>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{orderFeature.hobby}</span>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{orderFeature.pro}</span>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{orderFeature.enterprise}</span>
            </div>
          </div>

          {/* Render the new project feature row */}
          <div className="grid grid-cols-4 border-b">
            <div className="p-4 col-span-1">
              <p className="font-medium flex items-center gap-1">
                {projectFeature.name}
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{projectFeature.description}</p>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{projectFeature.hobby}</span>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{projectFeature.pro}</span>
            </div>
            <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
              <span className="text-sm">{projectFeature.enterprise}</span>
            </div>
          </div>

          {/* === MOVED: Automatisering Section Header === */}
          <div className="grid grid-cols-4 border-b bg-gray-50/50">
            <div className="p-4 col-span-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Automatisering</p>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-foreground" />
                <h3 className="text-lg font-semibold">Bespaar tijd en moeite</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Automatiseer repeterende taken en focus op groei.
              </p>
            </div>
          </div>

          {/* === MOVED: Feature Rows - Automatisering === */}
          <div className="divide-y">
            {automationFeatures.map((feature) => (
              <div key={feature.name} className="grid grid-cols-4">
                {/* Feature Name & Description */}
                <div className="p-4 col-span-1">
                  <p className="font-medium flex items-center gap-1">
                    {feature.name}
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
                {/* Hobby Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.hobby === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.hobby === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.hobby}</span>}
                </div>
                {/* Pro Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.pro === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.pro === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.pro}</span>}
                </div>
                {/* Enterprise Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.enterprise === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.enterprise === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.enterprise}</span>}
                </div>
              </div>
            ))}
          </div>
          {/* === END MOVED: Automatisering Section === */}

          {/* Data Tools Section Header */}
          <div className="grid grid-cols-4 border-b bg-gray-50/50">
            <div className="p-4 col-span-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Data Tools</p>
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-foreground" />
                <h3 className="text-lg font-semibold">Ontdek & Optimaliseer</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Krachtige tools voor data-gedreven beslissingen.
              </p>
            </div>
          </div>

          {/* Feature Rows - Data Tools */}
          <div className="divide-y">
            {dataToolsFeatures.map((feature) => (
              <div 
                key={feature.name} 
                className={cn(
                  "grid grid-cols-4", 
                  feature.name === "Keyword database" && 
                    "bg-gradient-to-r from-purple-50 to-transparent border-l-2 border-l-purple-500"
                )}
              >
                {/* Feature Name & Description */}
                <div className="p-4 col-span-1">
                  <p className="font-medium flex items-center gap-1">
                    {feature.name}
                    {feature.name === "Keyword database" && 
                      <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">NIEUW</span>
                    }
                    <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
                {/* Hobby Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.hobby === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.hobby === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.hobby}</span>}
                </div>
                {/* Pro Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.pro === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.pro === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.pro}</span>}
                </div>
                {/* Enterprise Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.enterprise === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.enterprise === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.enterprise}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Managed Infrastructure Section Header */}
          <div className="grid grid-cols-4 border-b border-t bg-gray-50/50">
            <div className="p-4 col-span-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Inzichten</p>
              <div className="flex items-center gap-2">
                <ChartNoAxesCombined className="h-5 w-5 text-foreground" />
                <h3 className="text-lg font-semibold">Inzicht in prestaties</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Weet wat werkt, zie wat groeit. Stuur op data, niet op gevoel.
              </p>
            </div>
          </div>

          {/* Feature Rows - Insights */}
          <div className="divide-y">
            {insightFeatures.map((feature) => (
              <div key={feature.name} className="grid grid-cols-4">
                {/* Feature Name & Description */}
                <div className="p-4 col-span-1">
                  <p className="font-medium flex items-center gap-1">
                    {feature.name}
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
                {/* Hobby Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.hobby === "✓" ? 
                    <CheckIcon className="h-5 w-5 text-green-500" /> : 
                    <span className="text-sm">{feature.hobby}</span>
                  }
                </div>
                {/* Pro Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.pro === "✓" ? 
                    <CheckIcon className="h-5 w-5 text-green-500" /> : 
                    <span className="text-sm">{feature.pro}</span>
                  }
                </div>
                {/* Enterprise Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.enterprise === "✓" ? 
                    <CheckIcon className="h-5 w-5 text-green-500" /> : 
                    <span className="text-sm">{feature.enterprise}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Ranking Inzichten Section Header */}
          <div className="grid grid-cols-4 border-b border-t bg-gray-50/50">
            <div className="p-4 col-span-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Inzichten</p>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-foreground" />
                <h3 className="text-lg font-semibold">Optimaliseer rankings van producten</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Tools om hoger te scoren in zoekresultaten.
              </p>
            </div>
          </div>

          {/* Feature Rows - Ranking */}
          <div className="divide-y">
            {rankingFeatures.map((feature) => (
              <div 
                key={feature.name} 
                className={cn(
                  "grid grid-cols-4", 
                  feature.name === "Precision product tracking" && 
                    "bg-gradient-to-r from-purple-50 to-transparent border-l-2 border-l-purple-500"
                )}
              >
                {/* Feature Name & Description */}
                <div className="p-4 col-span-1">
                  <p className="font-medium flex items-center gap-1">
                    {feature.name}
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
                {/* Hobby Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.hobby === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.hobby === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.hobby}</span>}
                </div>
                {/* Pro Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.pro === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.pro === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.pro}</span>}
                </div>
                {/* Enterprise Plan */}
                <div className="p-4 text-center border-l col-span-1 flex items-center justify-center">
                  {feature.enterprise === "✓" ? <CheckIcon className="h-5 w-5 text-green-500" /> : 
                   feature.enterprise === "✕" ? <XIcon className="h-5 w-5 text-red-500" /> : 
                   <span className="text-sm">{feature.enterprise}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="py-6 px-4 text-center">
          <p className="text-xs text-muted-foreground">
            Getoonde prijzen zijn exclusief 21% btw en kunnen onderhevig zijn aan wijzigingen. Maandelijks gefactureerd.
          </p>
        </div>

        {/* Bottom CTA Section */}
        <div className="w-full border-b bg-gradient-to-br from-gray-50 to-white">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-100">
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">14 dagen gratis uitproberen</h2>
                <p className="text-muted-foreground mt-2">
                  Begin direct met groeien. Geen verplichtingen, geen creditcard nodig.
                </p>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 border-none shrink-0">
              Start je gratis proefperiode
            </Button>
          </div>
        </div>

        {/* Maatwerk Section */}
        <div className="py-8 w-full text-center">
          <h2 className="text-xl font-semibold mb-4">Maatwerk nodig voor jouw situatie?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Voor enterprise verkopers hebben we speciale oplossingen op maat.
            Onze experts denken graag met je mee over een passende aanpak.
          </p>
          <Button variant="outline" className="mx-auto">
            Plan een strategiesessie
          </Button>
        </div>
      </div>
    </div>
  )
} 