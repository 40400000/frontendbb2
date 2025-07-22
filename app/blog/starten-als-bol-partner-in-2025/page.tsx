import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { BlogThemeHandler } from "@/components/blog-theme-handler";

export const metadata: Metadata = {
  title: "Bol.com partner worden: alle wettelijke eisen en administratie op een rij (6 essentiële stappen) - Bolbaas",
  description: "Wil je gaan verkopen op bol.com? Deze complete gids legt uit welke wettelijke verplichtingen je hebt, welke documenten je nodig hebt en hoe je alles correct opzet.",
};

export default function BlogPostPage() {
  const post = {
    title: "Bol.com partner worden: alle wettelijke eisen en administratie op een rij (6 essentiële stappen)",
    author: "Thijmen Dreef",
    date: "23 juli 2025",
  };

  return (
    <div className="relative z-0 flex flex-col min-h-screen border-t bg-white dark:bg-background border-b">
      <BlogThemeHandler />
      {/* Overlay Grid */}
      <div className="absolute inset-0 h-full z-10 pointer-events-none border-l border-r border-gray-200">
        <div className="relative h-full max-w-full mx-auto">
          <div className="hidden sm:block absolute left-[20%] top-0 bottom-0 w-px bg-border border-gray-200"></div>
          <div className="hidden sm:block absolute left-[80%] top-0 bottom-0 w-px bg-border border-gray-200"></div>
        </div>
      </div>

      <main className="relative z-20 container px-0 pt-16 md:pt-24 lg:pt-32">
        <article>
          <header>
            <div className="w-full">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/80 transition-colors mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Terug naar educatie</span>
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
                        <Image
                            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/partnerstartblog.png"
                            alt={post.title}
                            width={420}
                            height={420}
                            className="rounded-lg aspect-square object-cover w-full max-w-md mx-auto"
                        />
                    </div>
                    <p className="text-lg text-foreground mb-6">Je wilt gaan ondernemen en verkopen op bol.com. Gaaf, vele successen zijn al geboekt door je toekomstige concullega's! Maar voordat je je eerste product online zet, moet je aan verschillende wettelijke eisen voldoen. Lang leven regeltjes... KVK-inschrijving, btw-registratie, factuurverplichtingen - het voelt overweldigend. Wat heb je écht nodig om te starten, en hoe kan je zo snel mogelijk beginnen met ondernemen?</p>
                    <p className="text-lg text-foreground mb-6">Het probleem is dat veel nieuwe verkopers beginnen zonder de juiste papieren op orde te hebben. Gevolg? Problemen met bol partnerservice, Belastingdienst, boetes, en (zakelijke)klanten die hun facturen niet krijgen. Daarom is goede voorbereiding, ook op bol, het halve werk..</p>
                    
                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">⚠️ Wat er mis gaat zonder goede voorbereiding:</h4>
                        <ul className="space-y-2 text-foreground">
                            <li>• Account wordt geblokkeerd door bol.com partnerservice</li>
                            <li>• Klanten krijgen geen facturen = veel klantvragen en slechte reviews</li>
                            <li>• Verkeerde btw-tarieven = mogelijk verloren winst</li>
                            <li>• Naheffingen van de Belastingdienst</li>
                        </ul>
                    </div>

                    <p className="text-lg text-foreground mb-6">Het goede nieuws? Met de juiste volgorde en praktische tips kun je binnen een kleine week alles op orde hebben. En als je het goed doet, hoef je er later nooit meer naar om te kijken. In één keer goed regelen dus!</p>
                    <p className="text-lg text-foreground mb-6">Hier is jouw complete stappenplan:</p>

                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-8">
                        <h4 className="font-semibold text-lg mb-3">🎯 Jouw 6-stappen checklist om goed af te trappen op bol.com:</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h5 className="font-semibold">KVK-inschrijving met juiste SBI-codes (zie hieronder)</h5>
                                    <p className="text-sm text-foreground/80">Verplicht voor bol.com partner account</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h5 className="font-semibold">Btw-status bepalen</h5>
                                    <p className="text-sm text-foreground/80">Kleine ondernemersregeling of btw-plichtig?</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h5 className="font-semibold">Bol.com eis: facturen versturen</h5>
                                    <p className="text-sm text-foreground/80">Klanten die factuur vragen, moeten binnen 24u correcte btw-factuur krijgen</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h5 className="font-semibold">Bol.com eis: bedrijfsgegevens correct</h5>
                                    <p className="text-sm text-foreground/80">KVK-nummer, btw-nummer en contactgegevens in je partner account zetten</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                                <div>
                                    <h5 className="font-semibold">Wettelijke eis: btw-aangifte doen</h5>
                                    <p className="text-sm text-foreground/80">Kwartaal btw-aangifte bij Belastingdienst (als je btw-plichtig bent)</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                                <div>
                                    <h5 className="font-semibold">Wettelijke eis: administratie bijhouden</h5>
                                    <p className="text-sm text-foreground/80">7 jaar bewaren van facturen en btw-berekeningen</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 1: KVK-inschrijving - je verplichte startdocument</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Zonder geldig KVK-nummer kun je geen bol.com partner account aanmaken. Dit is hard requirement nummer één. Maar let op: niet elke KVK-inschrijving is geschikt voor e-commerce.</p>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">📋 Complete KVK-inschrijving checklist:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold mb-2">Benodigde documenten:</h5>
                                <ul className="space-y-1">
                                    <li>• Geldig identiteitsbewijs</li>
                                    <li>• BSN (Burgerservicenummer)</li>
                                    <li>• Bedrijfsadres (thuisadres mogelijk)</li>
                                    <li>• Bedrijfsnaam en beschrijving</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">Timing en kosten:</h5>
                                <ul className="space-y-1">
                                    <li>• €50 eenmalige kosten</li>
                                    <li>• 15 minuten procedure</li>
                                    <li>• Direct KVK-nummer, binnen enkele dagen een btw-nummer</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
                            <h5 className="font-semibold text-base mb-3">💡 Cruciale tip: kies de juiste SBI-codes</h5>
                            <div className="space-y-3">
                                <div><strong>Hoofdactiviteit:</strong> <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">47919</code> - Detailhandel via internet in overige non-food</div>
                                <div><strong>Extra activiteiten (optioneel):</strong></div>
                                <ul className="text-sm space-y-1 ml-4">
                                    <li>• <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">46901</code> - Handel in computers, randapparatuur en software</li>
                                    <li>• <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">47789</code> - Overige detailhandel in nieuwe artikelen</li>
                                </ul>
                                <p className="text-sm text-foreground/80 mt-2">Deze combinatie dekt vrijwel alle producten die je via bol.com kunt verkopen.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 2: Btw-status strategisch bepalen</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Bij je KVK-inschrijving krijg je automatisch een btw-nummer, maar je moet nog kiezen: kleine ondernemersregeling of direct btw-plichtig? Deze keuze bepaalt je hele administratie. Het een is niet per se beter dan het ander, maar het is belangrijk dat je weet wat je kiest.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
                            <h4 className="font-semibold text-lg mb-3">🏠 Kleine ondernemersregeling</h4>
                            <div className="space-y-2 text-sm">
                                <div><strong>Voor wie:</strong> Verwachte omzet minder dan €20.000/jaar</div>
                                <div><strong>Voordelen:</strong></div>
                                <div>✅ Geen btw af te dragen</div>
                                <div>✅ Eenvoudigere administratie</div>
                                <div>✅ Geen factuurverplichtingen</div>
                                <div><strong>Nadelen:</strong></div>
                                <div>❌ Geen btw-aftrek op inkopen</div>
                                <div>❌ Minder professioneel bij B2B</div>
                                <div>❌ Automatisch btw-plichtig bij €20k+</div>
                            </div>
                        </div>
                        <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
                            <h4 className="font-semibold text-lg mb-3">💼 Direct btw-plichtig</h4>
                            <div className="space-y-2 text-sm">
                                <div><strong>Voor wie:</strong> Verwachte omzet meer dan €20.000/jaar</div>
                                <div><strong>Voordelen:</strong></div>
                                <div>✅ 21% btw terug op alle inkopen</div>
                                <div>✅ Professioneel naar zakelijke klanten</div>
                                <div>✅ Geen omzetlimiet</div>
                                <div>✅ Meer groeimogelijkheden</div>
                                <div><strong>Nadelen:</strong></div>
                                <div>❌ Btw afdragen op verkopen</div>
                                <div>❌ Kwartaal btw-aangifte verplicht</div>
                                <div>❌ Complexere administratie</div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">💡 Praktische tip: btw-tarieven per productcategorie</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold mb-2 text-red-700 dark:text-red-400">21% (hoog tarief)</h5>
                                <ul className="space-y-1">
                                    <li>• Elektronica</li>
                                    <li>• Kleding</li>
                                    <li>• Speelgoed</li>
                                    <li>• Meeste andere producten</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">9% (laag tarief)</h5>
                                <ul className="space-y-1">
                                    <li>• Voedingsmiddelen</li>
                                    <li>• Boeken</li>
                                    <li>• Medicijnen</li>
                                    <li>• Planten en bloemen</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-400">0% (of vrijgesteld)</h5>
                                <ul className="space-y-1">
                                    <li>• Bepaalde specifieke producten</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-sm text-foreground/80 mt-4">Bij twijfel over tarieven: raadpleeg de <Link href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/goederen_9_btw/" target="_blank" rel="noopener noreferrer" className="underline">officiële lijst van de Belastingdienst</Link>.</p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 3: Bol.com eis - facturen versturen aan klanten</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Als bol.com partner ben je verplicht om facturen te versturen aan klanten die daarom vragen. Dit is een harde eis van bol.com - als je dit niet doet, kan je account geblokkeerd worden. Klanten verwachten hun factuur binnen 24 uur.</p>
                    
                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">🚨 Bol.com factuurvereisten die je moet nakomen:</h4>
                        <div className="space-y-2 text-sm">
                            <div>✅ <strong>Snelheid:</strong> Factuur binnen 24 uur na aanvraag klant</div>
                            <div>✅ <strong>Correcte gegevens:</strong> Juiste KVK-nummer en btw-nummer</div>
                            <div>✅ <strong>Productspecificatie:</strong> Exacte omschrijving zoals op bol.com</div>
                            <div>✅ <strong>Bedragen klopend:</strong> Bedrag moet overeenkomen met betaalde prijs</div>
                            <div>✅ <strong>Btw correct:</strong> Juiste btw-tarief per productcategorie</div>
                            <div>✅ <strong>Professioneel:</strong> Ziet er betrouwbaar uit voor zakelijke klanten</div>
                            <div>⚠️ <strong>Gevolg bij fouten:</strong> Account waarschuwing of blokkering</div>
                        </div>
                    </div>

                    <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Stop met handmatige facturen</h3>
                        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                            Elke bol.com bestelling heeft een factuur nodig. Handmatig maken = uren werk + risico op fouten. Bolbaas zorgt ervoor dat elke klant binnen minuten een perfecte btw-factuur ontvangt.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4 border">
                            <h4 className="font-semibold mb-2">✅ Bolbaas regelt automatisch:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div>• Factuur direct na bestelling</div>
                                <div>• Juiste btw-tarieven per product</div>
                                <div>• Alle wettelijke verplichte gegevens</div>
                                <div>• Automatische archivering</div>
                                <div>• Export voor boekhouder</div>
                                <div>• Facturen die voldoen aan bol.com en wettelijke eisen</div>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link href="/prijzen" passHref>
                                <Button size="lg" className="w-full sm:w-auto">Start direct</Button>
                            </Link>
                            <Link href="/features/automatisering" passHref>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">Bekijk factuurautomatisering</Button>
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            ✓ Installatie in 5 minuten • ✓ 1 maand gratis • ✓ Voldoet aan alle wettelijke eisen
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 4: Bol.com eis - bedrijfsgegevens correct instellen</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Bol.com vereist dat je bedrijfsgegevens compleet en correct zijn ingevuld in je partner profiel. Dit is niet alleen voor verificatie - klanten zien deze gegevens ook, en zakelijke klanten gebruiken ze voor hun eigen administratie.</p>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">📋 Verplichte gegevens in je bol.com partner profiel:</h4>
                        <div className="space-y-3 text-sm">
                            <div>✅ <strong>KVK-nummer:</strong> Exacte 8-cijferige nummer zoals geregistreerd</div>
                            <div>✅ <strong>Btw-nummer:</strong> NL gevolgd door 9 cijfers en B01</div>
                            <div>✅ <strong>Bedrijfsnaam:</strong> Officiële naam volgens KVK-uittreksel</div>
                            <div>✅ <strong>Bedrijfsadres:</strong> Volledig adres inclusief postcode</div>
                            <div>✅ <strong>Telefoonnummer:</strong> Voor klantcontact en verificatie</div>
                            <div>✅ <strong>E-mailadres:</strong> Professioneel zakelijk adres</div>
                            <div>✅ <strong>Bankrekeningnummer:</strong> IBAN op naam van je bedrijf</div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">⚠️ Gevolgen van onjuiste gegevens:</h4>
                        <div className="space-y-2 text-sm">
                            <div>❌ <strong>Account blokkering:</strong> Bol.com kan je account tijdelijk blokkeren</div>
                            <div>❌ <strong>Uitbetaling problemen:</strong> Verkeerde bankgegevens = geen geld</div>
                            <div>❌ <strong>Klantproblemen:</strong> Zakelijke klanten kunnen geen btw aftrekken, en krijgen onjuiste facturen</div>
                            <div>❌ <strong>Belastingdienst:</strong> Onjuiste gegevens kunnen tot onderzoek leiden</div>
                        </div>
                    </div>

        
                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 5: Wettelijke eis - kwartaal btw-aangifte doen</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Als je btw-plichtig bent, moet je elk kwartaal btw-aangifte doen bij de Belastingdienst. Dit is jouw eigen verantwoordelijkheid - bol.com doet dit niet voor je. De aangifte moet kloppen met je verkopen en inkopen, anders volgen er naheffingen. Bolbaas berekent automatisch je btw-aangifte op basis van je bol.com verkopen.</p>
                    
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">📅 Btw-aangifte termijnen en deadlines voor bol partners</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">Q1</div>
                                <div>
                                    <h5 className="font-semibold">Kwartaal 1 (jan-mrt)</h5>
                                    <p className="text-sm text-foreground/80">Aangifte deadline: 30 april</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">Q2</div>
                                <div>
                                    <h5 className="font-semibold">Kwartaal 2 (apr-jun)</h5>
                                    <p className="text-sm text-foreground/80">Aangifte deadline: 31 juli</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">Q3</div>
                                <div>
                                    <h5 className="font-semibold">Kwartaal 3 (jul-sep)</h5>
                                    <p className="text-sm text-foreground/80">Aangifte deadline: 31 oktober</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">Q4</div>
                                <div>
                                    <h5 className="font-semibold">Kwartaal 4 (okt-dec)</h5>
                                    <p className="text-sm text-foreground/80">Aangifte deadline: 31 januari (volgend jaar)</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-foreground/80 mt-4">⚠️ <strong>Let op:</strong> Te late aangifte = dure boetes, naheffingen en rente op je btw-schuld</p>
                    </div>

                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">🧮 Wat je moet berekenen voor je btw-aangifte:</h4>
                        <div className="space-y-3 text-sm">
                            <div>📊 <strong>Uitgaande btw:</strong> Btw die je hebt berekend over je verkopen</div>
                            <div>📊 <strong>Inkomende btw:</strong> Btw die je hebt betaald bij je inkopen</div>
                            <div>📊 <strong>Verschillende tarieven:</strong> 21%, 9% en 0% apart berekenen</div>
                            <div>📊 <strong>EU-export:</strong> Intracommunautaire leveringen (0% btw)</div>
                            <div>📊 <strong>Saldo:</strong> Uitgaand min inkomend = te betalen of terug te krijgen</div>
                        </div>
                    </div>

                    <div className="my-12 p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Bolbaas doet dit allemaal voor je</h3>
                        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                            Handmatig btw-aangiftes uitrekenen kost uren per kwartaal. Bolbaas berekent automatisch al je uitgaande en inkomende btw, houdt rekening met verschillende tarieven, en genereert je complete aangifte. Klaar in 5 minuten.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4 border">
                            <h4 className="font-semibold mb-2">🎯 Wat Bolbaas automatisch doet:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div>• Alle bol.com verkopen analyseren</div>
                                <div>• Juiste btw-tarieven per product</div>
                                <div>• B2B naar België en andere landen worden berekent met ICP levering</div>
                                <div>• Wij bewaren je archief 7 jaar</div>
                                <div>• Complete aangifte genereren in 2 minuten</div>
                                <div>• Export voor je eigen administratie of boekhouder</div>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link href="/prijzen" passHref>
                                <Button size="lg" className="w-full sm:w-auto">Automatiseer bol administartie</Button>
                            </Link>
                            <Link href="/features/automatisering" passHref>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">Bekijk administratie-automatisering</Button>
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            ✓ Van 6 uur naar 5 minuten • ✓ 100% accuraat • ✓ 1 maand gratis testen
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 6: Wettelijke eis - administratie 7 jaar bewaren</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">De Belastingdienst kan tot 7 jaar terug je administratie controleren. Als je documenten niet kunt overleggen, volgen er naheffingen en boetes. Je moet dus alle facturen, btw-berekeningen en onderliggende gegevens 7 jaar bewaren. Bolbaas archiveert automatisch al je bol.com administratie voor 7+ jaar, zodat je altijd compliant bent.</p>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">📋 Wat je in ieder geval7 jaar moet bewaren (wettelijke bewaarplicht):</h4>
                        <div className="space-y-3">
                            <div>📄 <strong>Alle uitgaande facturen:</strong> Die je naar klanten hebt verstuurd</div>
                            <div>📄 <strong>Alle inkoopfacturen:</strong> Van je leveranciers en dienstverleners</div>
                            <div>📄 <strong>Btw-aangiftes:</strong> Inclusief onderliggende berekeningen</div>
                            <div>📄 <strong>Bankafschriften:</strong> Bewijs van alle betalingen</div>
                        </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">✅ Hoe Bolbaas je administratie automatisch regelt:</h4>
                        <div className="space-y-3">
                            <div>💾 <strong>Automatische archivering:</strong> Alle facturen en documenten direct opgeslagen</div>
                            <div>🔍 <strong>Doorzoekbaar archief:</strong> Vind binnen seconden elke factuur of transactie</div>
                            <div>📊 <strong>Btw-rapporten:</strong> Kwartaaloverzichten klaar voor je aangifte</div>
                            <div>☁️ <strong>Cloud opslag:</strong> Veilig opgeslagen, altijd toegankelijk</div>
                            <div>📑 <strong>Export mogelijkheden:</strong> PDF, Excel voor je boekhouder</div>
                            <div>⏰ <strong>7+ jaar bewaring:</strong> Voldoet automatisch aan alle bewaarplichten</div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <Image
                            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/Scherm%C2%ADafbeelding%202025-07-21%20om%2016.30.38.png"
                            alt="Bolbaas btw-aangifte dashboard voor bol.com partners"
                            width={1200}
                            height={800}
                            className="rounded-lg"
                        />
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Het Bolbaas dashboard houdt automatisch alle btw-eisen in de gaten</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-6 mt-12">
                        <h4 className="font-semibold text-lg mb-3">✅ Praktische checklist: ben je klaar voor de start?</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold mb-2">Wettelijke registraties:</h5>
                                <ul className="space-y-1">
                                    <li>□ KVK-inschrijving met juiste SBI-codes (47919)</li>
                                    <li>□ Btw-status bepaald (kleine ondernemersregeling of btw-plichtig)</li>
                                    <li>□ Bankrekening op bedrijfsnaam geopend</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">Bol.com partner eisen:</h5>
                                <ul className="space-y-1">
                                    <li>□ Bedrijfsgegevens correct ingevuld in partner profiel</li>
                                    <li>□ Factuurversturen geregeld (binnen 24u aan klanten)</li>
                                    <li>□ KVK en btw-nummer correct in systeem</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-semibold mb-2">Administratie & belastingen:</h5>
                            <ul className="space-y-1 text-sm">
                                <li>□ Btw-aangifte proces opgezet (kwartaal, als btw-plichtig)</li>
                                <li>□ Archiveringssysteem voor 7 jaar bewaarplicht</li>
                                <li>□ Btw-tarieven per productcategorie bekend (21%, 9%, 0%)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-gray-200 text-center">
                        <h3 className="text-2xl font-semibold">Klaar om je bol.com verplichtingen te automatiseren?</h3>
                        <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
                            Voldoen aan bol.com eisen (facturen versturen) én je eigen administratie bijhouden (btw-aangifte) hoeft niet stressvol te zijn. Bolbaas automatiseert beide: klanten krijgen direct hun facturen, en jouw btw-aangifte staat altijd klaar.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/prijzen" passHref>
                                <Button size="lg">Automatiseer je bol.com administratie</Button>
                            </Link>
                            <Link href="/features/automatisering" passHref>
                                <Button variant="outline" size="lg">Bekijk factuur & btw automatisering</Button>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                            Facturen binnen minuten • Btw-aangifte altijd klaar • 1 maand gratis testen
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