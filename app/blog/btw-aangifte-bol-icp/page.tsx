import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Je bol.com btw-aangifte een chaos? 'Intracommunautaire levering' uitgelegd - Baasy",
  description: "Belgische bestelling van een zakelijke klant? Geen btw rekenen! We leggen uit wat het betekent en hoe je de btw correct berekent, zonder stress.",
};

export default function BlogPostPage() {
  const post = {
    title: "Je bol.com btw-aangifte een chaos? 'Intracommunautaire levering' uitgelegd",
    author: "Thijmen Dreef",
    date: "22 juli 2025",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-20 w-full flex items-start justify-center pt-16 md:pt-28 pb-8 md:pb-12 bg-white text-[#111111] overflow-hidden px-4 md:px-6">
        {/* Simple background */}
        <div className="absolute inset-0 w-full h-full bg-white" />
        
        <div className="w-full relative z-10 flex flex-col">
          <div className="container max-w-4xl mx-auto">
            <div className="w-full">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#111111]/70 hover:text-[#111111] transition-colors mb-8">
                <ArrowLeft className="h-4 w-4" />
                <span>Terug naar educatie</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4">
              <div className="col-span-1 sm:col-span-3">
                <h1 className="text-[32px] md:text-[48px] leading-[36px] md:leading-[48px] font-normal tracking-tight text-[#111111] mb-6">
                  {post.title}
                </h1>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/blogfoto.JPG"
                    alt="Author profile picture"
                    width={64}
                    height={64}
                    className="rounded-full object-cover w-16 h-16 "
                  />
                  <div>
                    <p className="text-lg font-medium text-[#111111]">{post.author}</p>
                    <p className="text-sm text-[#111111]/60">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="max-w-none mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-4">
              <div className="sm:col-start-1 sm:col-span-4">
                <div className="mb-8">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/icpfactuurblog2.png"
                    alt={post.title}
                    width={420}
                    height={420}
                    className="rounded-lg aspect-square object-cover w-full max-w-md mx-auto invert"
                  />
                </div>
                <p className="text-lg text-[#111111] mb-6">Je krijgt je factuurspecificatie van bol.com binnen en ziet ineens: 'intracommunautaire levering'. Wat betekent dit precies? En hoe ga je hiermee om in je btw-aangifte? Voor veel ondernemers is dit een bron van verwarring en stress, maar het hoeft niet ingewikkeld te zijn.</p>
                <p className="text-lg text-[#111111] mb-6">Simpel gezegd: bol.com laat de btw-berekening aan jou over bij bestellingen naar andere EU-landen. Zij kennen de btw-tarieven van jouw producten niet, dus jij bent verantwoordelijk voor de juiste btw-afdracht. Dit betekent handmatig uitzoeken welke producten welk tarief hebben - en dat is precies waar het mis gaat voor veel sellers.</p>
                    
                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Wat is een 'intracommunautaire levering' eigenlijk?</h2>
                <p className="text-lg text-[#111111] mb-6">Een intracommunautaire levering is de officiële term voor een levering van goederen aan een zakelijke klant in een ander EU-land. In de praktijk betekent dit:</p>
                    
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🇧🇪 Belgische zakelijke bestelling: wat gebeurt er?</h4>
                  <ul className="space-y-3 text-[#111111]">
                    <li>• <strong>Scenario:</strong> Een Belgische ondernemer bestelt vanuit een particulier account en vraagt een factuur</li>
                    <li>• <strong>Probleem:</strong> Hij betaalt Nederlandse btw (21%), maar als zakelijke klant hoort hij 0% btw te betalen</li>
                    <li>• <strong>Oplossing:</strong> Je stort de btw terug en maakt een nieuwe factuur met 0% btw</li>
                    <li>• <strong>Administratie:</strong> Deze bestelling registreer je als intracommunautaire levering</li>
                  </ul>
                </div>

                <p className="text-lg text-[#111111] mb-6">Dit geldt voor alle EU-landen: België, Duitsland, Frankrijk, enzovoort. De klant gebruikt de 0%-factuur om in zijn eigen land de juiste btw af te dragen (reverse charge mechanisme).</p>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">1. De valkuil van handmatige btw-berekeningen</h2>
                <p className="text-lg text-[#111111] mb-6">De handmatige methode is werken met de Excel-factuurspecificatie van bol.com. Dit lijkt simpel, maar de realiteit is anders. Het bestand bevat honderden of duizenden regels met productdata, bestellingen, retouren en verschillende btw-tarieven door elkaar.</p>
                    
                <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">⚠️ Waarom handmatig uitrekenen risicovol is:</h4>
                  <ul className="space-y-2 text-[#111111]">
                    <li>• Elke productcategorie heeft een ander btw-tarief (0%, 9%, 21%)</li>
                    <li>• Intracommunautaire leveringen moeten apart worden behandeld</li>
                    <li>• Retouren en correcties moeten worden verwerkt</li>
                    <li>• Een fout kan leiden tot een naheffing van de Belastingdienst</li>
                    <li>• Het kost gemakkelijk 4-8 uur per kwartaal</li>
                  </ul>
                </div>

                <p className="text-lg text-[#111111] mb-6">Je hebt niet alleen kennis van draaitabellen nodig, maar ook van btw-regelgeving. Voor veel ondernemers is dit gewoon te complex en tijdrovend - terwijl één fout kostbare gevolgen kan hebben.</p>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">2. De automatische btw-aangifte van Baasy: hoe werkt het?</h2>
                <p className="text-lg text-[#111111] mb-6">Onze automatische btw-tool is speciaal ontwikkeld voor bol.com sellers die geen tijd willen verspillen aan handmatige berekeningen. Het systeem werkt volledig geautomatiseerd:</p>
                    
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🚀 Zo automatiseer je je btw-aangifte in 3 stappen:</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Koppel je bol.com account</h5>
                        <p className="text-sm text-[#111111]/80">Via de officiële API halen we veilig je factuurspecificaties op</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Configureer je btw-tarieven</h5>
                        <p className="text-sm text-[#111111]/80">Geef eenmalig aan welke producten afwijkende tarieven hebben (9% of 0%)</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Exporteer je btw-aangifte</h5>
                        <p className="text-sm text-[#111111]/80">Met één klik krijg je de complete aangifte, klaar voor je boekhouder</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#111111] mb-6">Het systeem herkent automatisch intracommunautaire leveringen en past de juiste behandeling toe. Alle berekeningen gebeuren conform de regels van de Belastingdienst, zodat je zeker weet dat alles klopt.</p>
                    
                <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-[#111111]">Jouw btw-aangifte in 5 minuten geregeld</h3>
                  <p className="mt-3 text-lg text-[#111111]/80">
                     Onze automatische btw-tool berekent alle in- en uitgaande btw voor je bol.com verkopen. Intracommunautaire leveringen, verschillende tarieven, retouren - alles wordt automatisch verwerkt volgens de laatste regelgeving.
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-4 border">
                    <h4 className="font-semibold mb-2 text-[#111111]">✅ Wat de tool automatisch doet:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#111111]">
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
                  <p className="mt-4 text-sm text-[#111111]/60">
                    ✓ Koppel in 2 minuten • ✓ 1 maand gratis testen • ✓ Opzeggen wanneer je wilt
                  </p>
                </div>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">3. Praktijkvoorbeeld: Belgische zakelijke bestelling</h2>
                <p className="text-lg text-[#111111] mb-6">Stel: een Belgische ondernemer bestelt voor €100 aan producten. Hij betaalt €121 (inclusief 21% Nederlandse btw), maar vraagt een factuur.</p>
                    
                <div className="bg-gray-50 p-6 rounded-lg border mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">📊 Handmatige verwerking (wat je zelf moet doen):</h4>
                  <div className="space-y-2 text-sm font-mono text-[#111111]">
                    <div>1. Herken dat het een zakelijke EU-klant betreft</div>
                    <div>2. Bereken: €21 btw terugstorten naar klant</div>
                    <div>3. Maak nieuwe factuur: €100 met 0% btw</div>
                    <div>4. Registreer als intracommunautaire levering</div>
                    <div>5. Verwerk in je btw-aangifte als €100 tegen 0%</div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🤖 Automatische verwerking (met Baasy):</h4>
                  <div className="space-y-2 text-sm text-[#111111]">
                    <div>✅ Systeem herkent automatisch de intracommunautaire levering</div>
                    <div>✅ Berekent correct €100 omzet tegen 0% btw</div>
                    <div>✅ Voegt toe aan je btw-aangifte export</div>
                    <div>✅ Genereert overzicht voor je boekhouder</div>
                    <div>✅ Zorgt voor compliance met alle regels</div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">4. Waarom automatisering niet meer optioneel is</h2>
                <p className="text-lg text-[#111111] mb-6">De btw-regelgeving wordt alleen maar complexer. Met de groei van grensoverschrijdende e-commerce komen er steeds meer regels bij. Als ondernemer kun je er niet omheen: je hebt betrouwbare systemen nodig.</p>
                    
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">⏰ Tijd = Geld: de rekensom</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#111111]">
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
                  <p className="mt-4 font-semibold text-green-700">Besparing: €850+ per jaar + gemoedsrust</p>
                </div>

                <p className="text-lg text-[#111111] mb-6">Daarnaast krijg je met automatisering real-time inzicht in je werkelijke winstmarges. Je kunt vooruit plannen met betrouwbare cijfers in plaats van achteraf verrast worden door btw-correcties.</p>
                    
                <div className="mt-16">
                  <Image
                    src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/Scherm%C2%ADafbeelding%202025-07-21%20om%2016.30.38.png"
                    alt="Baasy automatische btw-aangifte dashboard"
                    width={1200}
                    height={800}
                    className="rounded-lg"
                  />
                  <p className="text-sm text-center text-[#111111]/60 mt-2">Het Baasy dashboard toont al je btw-gegevens overzichtelijk per periode</p>
                </div>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">5. Meer dan alleen btw: complete financiële controle</h2>
                <p className="text-lg text-[#111111] mb-6">Onze automatische btw-tool is onderdeel van een compleet pakket voor bol.com sellers. Naast btw-berekeningen krijg je ook:</p>
                    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-lg mb-3 text-[#111111]">📊 Winstanalyses</h4>
                    <p className="text-sm text-[#111111]">Real-time inzicht in je werkelijke winst per product, na aftrek van alle kosten en btw.</p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-lg mb-3 text-[#111111]">📈 Trending producten</h4>
                    <p className="text-sm text-[#111111]">Ontdek welke producten het beste presteren en waar je je voorraad op moet focussen.</p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-lg mb-3 text-[#111111]">🎯 Keyword tracking</h4>
                    <p className="text-sm text-[#111111]">Monitor je rankings en optimaliseer je producttitels voor betere vindbaarheid.</p>
                  </div>
                  <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-lg mb-3 text-[#111111]">📋 Compliance monitoring</h4>
                    <p className="text-sm text-[#111111]">Blijf automatisch op de hoogte van regelgevingswijzigingen en verplichtingen.</p>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-gray-200 text-center">
                  <h3 className="text-2xl font-semibold text-[#111111]">Klaar om de controle terug te nemen?</h3>
                  <p className="mt-4 text-lg text-[#111111] max-w-2xl mx-auto">
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
                  <p className="mt-6 text-sm text-[#111111]/60">
                    Geen setup kosten • 1 maand gratis • Opzeggen wanneer je wilt
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}