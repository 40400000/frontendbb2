import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { BlogThemeHandler } from "@/components/blog-theme-handler";

export const metadata: Metadata = {
  title: "Je bol.com btw-aangifte een chaos? 'Intracommunautaire levering' uitgelegd - Bolbaas",
  description: "Belgische bestelling van een zakelijke klant? Geen btw rekenen! We leggen uit wat het betekent en hoe je de btw correct berekent, zonder stress.",
};

export default function BlogPostPage() {
  const post = {
    title: "Je bol.com btw-aangifte een chaos? 'Intracommunautaire levering' uitgelegd",
    author: "Thijmen Dreef",
    date: "22 juli 2025",
  };

  return (
    <div className="relative z-0 flex flex-col min-h-screen border-t bg-white dark:bg-background border-b">
      <BlogThemeHandler />
      {/* Overlay Grid */}
      <div className="absolute inset-0 h-full z-10 pointer-events-none border-l border-r border-border">
        <div className="relative h-full max-w-full mx-auto">
          <div className="hidden sm:block absolute left-[20%] top-0 bottom-0 w-px bg-border"></div>
          <div className="hidden sm:block absolute left-[80%] top-0 bottom-0 w-px bg-border"></div>
        </div>
      </div>

      <main className="relative z-20 container px-0 pt-16 md:pt-24 lg:pt-32">
        <article>
          <header>
            <div className="w-full">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/80 transition-colors mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Terug naar blog</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4">
                <div className="col-span-1 sm:col-span-3">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50">
                        {post.title}
                    </h1>
                    <div className="mt-8 h-px w-1/2 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <div className="mt-6 flex items-center gap-4">
                        <Image
                            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG"
                            alt="Author profile picture"
                            width={64}
                            height={64}
                            className="rounded-full object-cover w-16 h-16"
                        />
                        <div>
                            <p className="text-lg font-medium">{post.author}</p>
                            <p className="text-sm text-foreground/80">{post.date}</p>
                        </div>
                    </div>
                </div>
            </div>
          </header>

          <div className="max-w-none mx-auto pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-4">
                <div className="sm:col-start-2 sm:col-span-2">
                    <div className="mb-8">
                        {/* TODO: Replace with a relevant image for this blog post */}
                        <Image
                            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/BLOG_1.png"
                            alt={post.title}
                            width={420}
                            height={420}
                            className="rounded-lg aspect-square object-cover w-full max-w-md mx-auto"
                        />
                    </div>
                    <p className="text-lg text-foreground mb-6">Je krijgt je factuurspecificatie van bol.com binnen en ziet ineens: 'intracommunautaire levering'. Wat betekent dit precies? En hoe ga je hiermee om in je btw-aangifte? Voor veel ondernemers is dit een bron van verwarring en stress, maar het hoeft niet ingewikkeld te zijn.</p>
                    <p className="text-lg text-foreground mb-6">Simpel gezegd: bol.com laat de btw-berekening aan jou over bij bestellingen naar andere EU-landen. Zij kennen de btw-tarieven van jouw producten niet, dus jij bent verantwoordelijk voor de juiste btw-afdracht. Dit betekent handmatig uitzoeken welke producten welk tarief hebben - en dat is precies waar het mis gaat voor veel sellers.</p>
                    
                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Wat is een 'intracommunautaire levering' eigenlijk?</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Een intracommunautaire levering is de officiële term voor een levering van goederen aan een zakelijke klant in een ander EU-land. In de praktijk betekent dit:</p>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">🇧🇪 Belgische zakelijke bestelling: wat gebeurt er?</h4>
                        <ul className="space-y-3 text-foreground">
                            <li>• <strong>Scenario:</strong> Een Belgische ondernemer bestelt vanuit een particulier account en vraagt een factuur</li>
                            <li>• <strong>Probleem:</strong> Hij betaalt Nederlandse btw (21%), maar als zakelijke klant hoort hij 0% btw te betalen</li>
                            <li>• <strong>Oplossing:</strong> Je stort de btw terug en maakt een nieuwe factuur met 0% btw</li>
                            <li>• <strong>Administratie:</strong> Deze bestelling registreer je als intracommunautaire levering</li>
                        </ul>
                    </div>

                    <p className="text-lg text-foreground mb-6">Dit geldt voor alle EU-landen: België, Duitsland, Frankrijk, enzovoort. De klant gebruikt de 0%-factuur om in zijn eigen land de juiste btw af te dragen (reverse charge mechanisme).</p>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">1. De valkuil van handmatige btw-berekeningen</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">De handmatige methode is werken met de Excel-factuurspecificatie van bol.com. Dit lijkt simpel, maar de realiteit is anders. Het bestand bevat honderden of duizenden regels met productdata, bestellingen, retouren en verschillende btw-tarieven door elkaar.</p>
                    
                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">⚠️ Waarom handmatig uitrekenen risicovol is:</h4>
                        <ul className="space-y-2 text-foreground">
                            <li>• Elke productcategorie heeft een ander btw-tarief (0%, 9%, 21%)</li>
                            <li>• Intracommunautaire leveringen moeten apart worden behandeld</li>
                            <li>• Retouren en correcties moeten worden verwerkt</li>
                            <li>• Een fout kan leiden tot een naheffing van de Belastingdienst</li>
                            <li>• Het kost gemakkelijk 4-8 uur per kwartaal</li>
                        </ul>
                    </div>

                    <p className="text-lg text-foreground mb-6">Je hebt niet alleen kennis van draaitabellen nodig, maar ook van btw-regelgeving. Voor veel ondernemers is dit gewoon te complex en tijdrovend - terwijl één fout kostbare gevolgen kan hebben.</p>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">2. De automatische btw-aangifte van Bolbaas: hoe werkt het?</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Onze automatische btw-tool is speciaal ontwikkeld voor bol.com sellers die geen tijd willen verspillen aan handmatige berekeningen. Het systeem werkt volledig geautomatiseerd:</p>
                    
                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">🚀 Zo automatiseer je je btw-aangifte in 3 stappen:</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h5 className="font-semibold">Koppel je bol.com account</h5>
                                    <p className="text-sm text-foreground/80">Via de officiële API halen we veilig je factuurspecificaties op</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h5 className="font-semibold">Configureer je btw-tarieven</h5>
                                    <p className="text-sm text-foreground/80">Geef eenmalig aan welke producten afwijkende tarieven hebben (9% of 0%)</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h5 className="font-semibold">Exporteer je btw-aangifte</h5>
                                    <p className="text-sm text-foreground/80">Met één klik krijg je de complete aangifte, klaar voor je boekhouder</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-foreground mb-6">Het systeem herkent automatisch intracommunautaire leveringen en past de juiste behandeling toe. Alle berekeningen gebeuren conform de regels van de Belastingdienst, zodat je zeker weet dat alles klopt.</p>
                    
                    <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Jouw btw-aangifte in 5 minuten geregeld</h3>
                        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                           Onze automatische btw-tool berekent alle in- en uitgaande btw voor je bol.com verkopen. Intracommunautaire leveringen, verschillende tarieven, retouren - alles wordt automatisch verwerkt volgens de laatste regelgeving.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4 border">
                            <h4 className="font-semibold mb-2">✅ Wat de tool automatisch doet:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div>• Intracommunautaire leveringen herkennen</div>
                                <div>• Juiste btw-tarieven toewijzen</div>
                                <div>• Retouren correct verwerken</div>
                                <div>• Export voor boekhouder maken</div>
                                <div>• Quarterly overzichten genereren</div>
                                <div>• Compliance met Belastingdienst</div>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link href="/prijzen" passHref>
                                <Button size="lg" className="w-full sm:w-auto">Start je gratis proefperiode</Button>
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            ✓ Koppel in 2 minuten • ✓ 1 maand gratis testen • ✓ Opzeggen wanneer je wilt
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">3. Praktijkvoorbeeld: Belgische zakelijke bestelling</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Stel: een Belgische ondernemer bestelt voor €100 aan producten. Hij betaalt €121 (inclusief 21% Nederlandse btw), maar vraagt een factuur.</p>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border mb-6">
                        <h4 className="font-semibold text-lg mb-3">📊 Handmatige verwerking (wat je zelf moet doen):</h4>
                        <div className="space-y-2 text-sm font-mono">
                            <div>1. Herken dat het een zakelijke EU-klant betreft</div>
                            <div>2. Bereken: €21 btw terugstorten naar klant</div>
                            <div>3. Maak nieuwe factuur: €100 met 0% btw</div>
                            <div>4. Registreer als intracommunautaire levering</div>
                            <div>5. Verwerk in je btw-aangifte als €100 tegen 0%</div>
                        </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">🤖 Automatische verwerking (met Bolbaas):</h4>
                        <div className="space-y-2 text-sm">
                            <div>✅ Systeem herkent automatisch de intracommunautaire levering</div>
                            <div>✅ Berekent correct €100 omzet tegen 0% btw</div>
                            <div>✅ Voegt toe aan je btw-aangifte export</div>
                            <div>✅ Genereert overzicht voor je boekhouder</div>
                            <div>✅ Zorgt voor compliance met alle regels</div>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">4. Waarom automatisering niet meer optioneel is</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">De btw-regelgeving wordt alleen maar complexer. Met de groei van grensoverschrijdende e-commerce komen er steeds meer regels bij. Als ondernemer kun je er niet omheen: je hebt betrouwbare systemen nodig.</p>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">⏰ Tijd = Geld: de rekensom</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold mb-2">Handmatige verwerking:</h5>
                                <ul className="space-y-1">
                                    <li>• 6 uur per kwartaal</li>
                                    <li>• €50/uur = €300 per kwartaal</li>
                                    <li>• €1.200 per jaar aan tijd</li>
                                    <li>• + risico op fouten en naheffingen</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">Automatische verwerking:</h5>
                                <ul className="space-y-1">
                                    <li>• 30 minuten per kwartaal</li>
                                    <li>• Tool kosten: vanaf €29/maand</li>
                                    <li>• €348 per jaar totaal</li>
                                    <li>• 0% risico op fouten</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4 font-semibold text-green-700 dark:text-green-400">Besparing: €850+ per jaar + gemoedsrust</p>
                    </div>

                    <p className="text-lg text-foreground mb-6">Daarnaast krijg je met automatisering real-time inzicht in je werkelijke winstmarges. Je kunt vooruit plannen met betrouwbare cijfers in plaats van achteraf verrast worden door btw-correcties.</p>
                    
                    <div className="mt-16">
                        {/* TODO: Replace with a relevant image for this blog post */}
                        <Image
                            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/Scherm%C2%ADafbeelding%202025-07-21%20om%2016.30.38.png"
                            alt="Bolbaas automatische btw-aangifte dashboard"
                            width={1200}
                            height={800}
                            className="rounded-lg"
                        />
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Het Bolbaas dashboard toont al je btw-gegevens overzichtelijk per periode</p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">5. Meer dan alleen btw: complete financiële controle</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Onze automatische btw-tool is onderdeel van een compleet pakket voor bol.com sellers. Naast btw-berekeningen krijg je ook:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold text-lg mb-3">📊 Winstanalyses</h4>
                            <p className="text-sm">Real-time inzicht in je werkelijke winst per product, na aftrek van alle kosten en btw.</p>
                        </div>
                        <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                            <h4 className="font-semibold text-lg mb-3">📈 Trending producten</h4>
                            <p className="text-sm">Ontdek welke producten het beste presteren en waar je je voorraad op moet focussen.</p>
                        </div>
                        <div className="p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h4 className="font-semibold text-lg mb-3">🎯 Keyword tracking</h4>
                            <p className="text-sm">Monitor je rankings en optimaliseer je producttitels voor betere vindbaarheid.</p>
                        </div>
                        <div className="p-6 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <h4 className="font-semibold text-lg mb-3">📋 Compliance monitoring</h4>
                            <p className="text-sm">Blijf automatisch op de hoogte van regelgevingswijzigingen en verplichtingen.</p>
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-border text-center">
                        <h3 className="text-2xl font-semibold">Klaar om de controle terug te nemen?</h3>
                        <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
                            Stop met handmatig uitrekenen en start met automatische btw-verwerking. Onze tool zorgt ervoor dat intracommunautaire leveringen, verschillende btw-tarieven en alle andere complexiteiten automatisch correct worden verwerkt.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/prijzen" passHref>
                                <Button size="lg">Start je gratis proefperiode</Button>
                            </Link>
                            <Link href="/" passHref>
                                <Button variant="outline" size="lg">Bekijk alle features</Button>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                            Geen setup kosten • 1 maand gratis • Opzeggen wanneer je wilt
                        </p>
                    </div>

                </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
} 