import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { BlogThemeHandler } from "@/components/blog-theme-handler";

export const metadata: Metadata = {
  title: "Direct meer productreviews verzamelen bol.com (5 tips voor retailers) - Bolbaas educatie",
  description: "Je hebt een topproduct, maar de reviewteller staat op nul. Volg dit stappenplan voor direct resultaat.",
};

export default function BlogPostPage() {
  const post = {
    title: "Direct meer productreviews verzamelen bol.com (5 tips voor retailers)",
    author: "Thijmen Dreef",
    date: "21 juli 2025",
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
                            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/reviewblog.png"
                            alt={post.title}
                            width={420}
                            height={420}
                            className="rounded-lg aspect-square object-cover w-full max-w-md mx-auto"
                        />
                    </div>
                    <p className="text-lg text-foreground mb-6">Je hebt een topproduct, maar de reviewteller staat op nul. Frustrerend, want je ziet concurrenten met tientallen beoordelingen wel verkopen. Je weet dat je hierdoor omzet misloopt - studies tonen aan dat producten met reviews 270% vaker worden gekocht.</p>
                    
                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">❌ Het probleem: de reviewkloof</h4>
                        <ul className="space-y-2 text-foreground">
                            <li>• Product zonder reviews = 2% conversie</li>
                            <li>• Product met 5+ reviews = 9% conversie</li>
                            <li>• Klanten scrollen voorbij producten met 0 reviews</li>
                            <li>• Concurrent met reviews krijgt jouw verkoop</li>
                        </ul>
                    </div>

                    <p className="text-lg text-foreground mb-6">De goede nieuws? Dit heeft niks te maken met de kwaliteit van je product. Het komt neer op één ding: je maakt het je klanten niet makkelijk genoeg om een review achter te laten.</p>
                    <p className="text-lg text-foreground mb-6">Hier is de directe aanpak om dat te veranderen:</p>

                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-8">
                        <h4 className="font-semibold text-lg mb-3">🎯 Jouw 5-stappen reviewstrategie:</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h5 className="font-semibold">Stop met vertrouwen op bol.com</h5>
                                    <p className="text-sm text-foreground/80">Neem zelf de controle over je reviewverzoeken</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h5 className="font-semibold">Verstuur e-mails die converteren</h5>
                                    <p className="text-sm text-foreground/80">Gebruik geoptimaliseerde templates voor 15-25% conversie</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h5 className="font-semibold">Blijf binnen de regels</h5>
                                    <p className="text-sm text-foreground/80">Volg bol.com richtlijnen voor veilige reviewverzoeken</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h5 className="font-semibold">Voorkom e-mail blokkades</h5>
                                    <p className="text-sm text-foreground/80">Houdt je aan de 5 kernregels voor veiligheid</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                                <div>
                                    <h5 className="font-semibold">Focus op productreviews</h5>
                                    <p className="text-sm text-foreground/80">Besteed energie aan wat je kunt beïnvloeden</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 1: Vertrouw niet blindelings op bol.com</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">De grootste fout is denken dat reviews vanzelf komen of dat de standaardmails van bol.com genoeg zijn. De harde waarheid? Die mails worden massaal genegeerd.</p>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">⚠️ Waarom bol.com's standaardmails falen:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold mb-2">Timing problemen:</h5>
                                <ul className="space-y-1">
                                    <li>• Komen te vroeg (voor levering)</li>
                                    <li>• Genefieke onderwerpregel</li>
                                    <li>• Geen persoonlijke toon</li>
                                    <li>• Verstopt tussen andere mails</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">Resultaat:</h5>
                                <ul className="space-y-1">
                                    <li>• 2% conversie naar reviews</li>
                                    <li>• Klanten vergeten het product</li>
                                    <li>• Landen in spam/promo folders</li>
                                    <li>• Geen follow-up mogelijkheid</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-foreground mb-6">De oplossing is om zelf de controle te nemen. Met geautomatiseerde, gepersonaliseerde reviewverzoeken krijg je 10-15x betere resultaten dan de standaardmails van bol.com.</p>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 2: Stuur e-mails die wél converteren</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Misschien stuur je al mails, maar krijg je nauwelijks reacties. Een saaie, generieke mail inspireert niemand. Je hebt een mail nodig die converteert.</p>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">📧 Anatomie van een converterende reviewmail:</h4>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h5 className="font-semibold">Onderwerp: "Hoe bevalt je [PRODUCTNAAM]?"</h5>
                                <p className="text-sm text-foreground/80">Persoonlijk + specifiek = hogere open rate</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4">
                                <h5 className="font-semibold">Opening: "Hoi [NAAM], bedankt voor je bestelling!"</h5>
                                <p className="text-sm text-foreground/80">Directe herkenning en waardering</p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-4">
                                <h5 className="font-semibold">Vraag: "Zou je andere klanten willen helpen?"</h5>
                                <p className="text-sm text-foreground/80">Appelleert aan behulpzaamheid i.p.v. eigenbelang</p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-4">
                                <h5 className="font-semibold">CTA: "Review schrijven (30 seconden)"</h5>
                                <p className="text-sm text-foreground/80">Duidelijke tijdsindicatie verlaagt drempel</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-foreground mb-6">Daarom hebben we in Bolbaas onze <strong className="font-semibold text-foreground">'magische e-mail templates'</strong> ontwikkeld. Dit zijn geoptimaliseerde templates die consistent 15-25% conversie behalen - dat is 10x beter dan standaardmails.</p>
                    
                    <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Krijg 3x meer reviews binnen 30 dagen</h3>
                        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                            Onze magische e-mail templates converteren 15-25% van je klanten naar reviews. Volledig geautomatiseerd en bol.com-goedgekeurd.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4 border">
                            <h4 className="font-semibold mb-2">✅ Wat je krijgt:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div>• 10+ geoptimaliseerde templates</div>
                                <div>• Automatische personalisatie</div>
                                <div>• Perfect getimede verzending</div>
                                <div>• Directe productreview links</div>
                                <div>• A/B testing opties</div>
                                <div>• Voldoet aan bol.com beleid</div>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link href="/prijzen" passHref>
                                <Button size="lg" className="w-full sm:w-auto">Start direct</Button>
                            </Link>
                            <Link href="/" passHref>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">Bekijk alle functies</Button>
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            ✓ Installatie in 5 minuten • ✓ Onbeperkt e-mails • ✓ 1 maand gratis testen
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 3: Wees niet onzeker over de regels</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Je wilt wel meer vragen om reviews, maar je bent bang om de regels van bol.com te overtreden. Die onzekerheid kan verlammend werken.</p>
                    
                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">✅ De regels zijn eigenlijk simpel:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-400">Mag wel:</h5>
                                <ul className="space-y-1">
                                    <li>• Vragen om eerlijke review</li>
                                    <li>• Directe productreview links</li>
                                    <li>• Persoonlijke e-mails sturen</li>
                                    <li>• BTW-factuur meesturen</li>
                                    <li>• Follow-up na 1-2 weken</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2 text-red-700 dark:text-red-400">Mag niet:</h5>
                                <ul className="space-y-1">
                                    <li>• Vragen om 5-sterren review</li>
                                    <li>• Beloningen/kortingen aanbieden</li>
                                    <li>• Links naar eigen website</li>
                                    <li>• Valse reviews aanmoedigen</li>
                                    <li>• Spam-achtig gedrag</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-foreground mb-6">De e-mail templates in Bolbaas zijn al ontworpen om aan deze regels te voldoen, zodat jij je daar geen zorgen over hoeft te maken. Je kunt je focussen op het vragen naar een eerlijke mening, in de wetenschap dat je veilig zit.</p>
                    
                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 4: Voorkom een e-mail blokkade</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Bol.com kan je blokkeren als je je niet aan hun beleid houdt. We hebben dit zien gebeuren bij verkopers, en het is een risico dat je niet wilt nemen. Daarom hebben we de 5 kernregels voor bol-proof reviewverzoeken:</p>
                    
                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800 mb-6">
                        <h4 className="font-semibold text-lg mb-3">🚨 De 5 kernregels voor veilige reviewverzoeken:</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h5 className="font-semibold">Maximaal één e-mail per bestelling</h5>
                                    <p className="text-sm text-foreground/80">Spam voorkom je door jezelf te beperken tot één reviewverzoek</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h5 className="font-semibold">Vraag om "eerlijke productreview"</h5>
                                    <p className="text-sm text-foreground/80">Nooit om positieve/5-sterren review vragen</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h5 className="font-semibold">Geen beloningen aanbieden</h5>
                                    <p className="text-sm text-foreground/80">Geen korting, winactie of andere beloning in ruil voor review</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h5 className="font-semibold">Vermijd externe links</h5>
                                    <p className="text-sm text-foreground/80">Geen onnodige links naar eigen website of social media</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                                <div>
                                    <h5 className="font-semibold">BTW-factuur altijd meesturen</h5>
                                    <p className="text-sm text-foreground/80">Bolbaas doet dit automatisch voor je bij elke e-mail</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-foreground mb-6">Wil je alle details weten? Je leest het volledige <Link href="https://partnerplatform.bol.com/nl/hulp-nodig/prestaties/beleidspunten/zelfpromotie/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/80">beleid rondom zelfpromotie van bol.com hier</Link>.</p>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-10">Stap 5: Focus op de juiste reviews</h2>
                    <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <p className="text-lg text-foreground mb-6">Niet alle reviews zijn gelijk. Er zijn twee soorten reviews op bol.com, en slechts één daarvan kun je direct beïnvloeden.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border">
                            <h4 className="font-semibold text-lg mb-3">🏪 Verkopersreviews</h4>
                            <div className="space-y-2 text-sm">
                                <div>❌ Links alleen via bol.com</div>
                                <div>❌ Kun je niet zelf om vragen</div>
                                <div>❌ Weinig invloed op koopbeslissing</div>
                                <div>❌ Verspilde energie</div>
                            </div>
                        </div>
                        <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                            <h4 className="font-semibold text-lg mb-3">📦 Productreviews</h4>
                            <div className="space-y-2 text-sm">
                                <div>✅ Directe links beschikbaar</div>
                                <div>✅ Kun je zelf om vragen</div>
                                <div>✅ Grote invloed op verkoop</div>
                                <div>✅ Focus je energie hier</div>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-foreground mb-6">Focus je energie daarom op wat je wél kunt beïnvloeden: productreviews. Dat is waar klanten op letten en waar jij de controle over hebt. Bolbaas zorgt er automatisch voor dat de juiste productreview-link in elke e-mail komt te staan.</p>

     

                    <div className="mt-16">
                        <Image
                            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/Scherm%C2%ADafbeelding%202025-07-21%20om%2016.30.38.png"
                            alt="Bolbaas automatische email campagnes dashboard"
                            width={1200}
                            height={800}
                            className="rounded-lg"
                        />
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Het Bolbaas dashboard toont real-time de prestaties van je reviewcampagnes</p>
                    </div>

                    <div className="mt-16 pt-10 border-t border-border text-center">
                        <h3 className="text-2xl font-semibold">Klaar om direct meer reviews te verzamelen?</h3>
                        <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
                            Stop met hopen op reviews en start met een bewezen strategie. Automatiseer je reviewverzoeken met onze magische e-mail templates en zie binnen 30 dagen 3x meer reviews binnenkomen.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/prijzen" passHref>
                                <Button size="lg">Start je gratis proefperiode</Button>
                            </Link>
                            <Link href="/features/automatisering#email-campagnes" passHref>
                                <Button variant="outline" size="lg">Bekijk e-mail campagnes</Button>
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                            Geen setup kosten • 10+ templates • 1 maand gratis • Opzeggen wanneer je wilt
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