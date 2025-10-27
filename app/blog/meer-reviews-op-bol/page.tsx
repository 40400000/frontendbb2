import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Direct meer productreviews verzamelen bol.com (5 tips voor retailers) - Baasy educatie",
  description: "Je hebt een topproduct, maar de reviewteller staat op nul. Volg dit stappenplan voor direct resultaat.",
};

export default function BlogPostPage() {
  const post = {
    title: "Direct meer productreviews verzamelen bol.com (5 tips voor retailers)",
    author: "Thijmen Dreef",
    date: "21 juli 2025",
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
                    className="rounded-full object-cover w-16 h-16"
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
                <p className="text-lg text-[#111111] mb-6">Je hebt een topproduct, maar de reviewteller staat op nul. Frustrerend, want je ziet concurrenten met tientallen beoordelingen wel verkopen. Je weet dat je hierdoor omzet misloopt - studies tonen aan dat producten met reviews 270% vaker worden gekocht.</p>
                    
                <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">❌ Het probleem: de reviewkloof</h4>
                  <ul className="space-y-2 text-[#111111]">
                    <li>• Product zonder reviews = 2% conversie</li>
                    <li>• Product met 5+ reviews = 9% conversie</li>
                    <li>• Klanten scrollen voorbij producten met 0 reviews</li>
                    <li>• Concurrent met reviews krijgt jouw verkoop</li>
                  </ul>
                </div>

                <p className="text-lg text-[#111111] mb-6">De goede nieuws? Dit heeft niks te maken met de kwaliteit van je product. Het komt neer op één ding: je maakt het je klanten niet makkelijk genoeg om een review achter te laten.</p>
                <p className="text-lg text-[#111111] mb-6">Hier is de directe aanpak om dat te veranderen:</p>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-8">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🎯 Jouw 5-stappen reviewstrategie:</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Stop met vertrouwen op bol.com</h5>
                        <p className="text-sm text-[#111111]/80">Neem zelf de controle over je reviewverzoeken</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Verstuur e-mails die converteren</h5>
                        <p className="text-sm text-[#111111]/80">Gebruik geoptimaliseerde templates voor 15-25% conversie</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Blijf binnen de regels</h5>
                        <p className="text-sm text-[#111111]/80">Volg richtlijnen die bol heeft opgesteld voor partners voor veilige reviewverzoeken</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Voorkom e-mail blokkades</h5>
                        <p className="text-sm text-[#111111]/80">Houdt je aan de 5 kernregels voor veiligheid</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Focus op productreviews</h5>
                        <p className="text-sm text-[#111111]/80">Besteed energie aan wat je kunt beïnvloeden</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Stap 1: Vertrouw niet blindelings op bol.com</h2>
                <p className="text-lg text-[#111111] mb-6">De grootste fout is denken dat reviews vanzelf komen of dat de standaardmails van bol.com genoeg zijn. De harde waarheid? Die mails worden massaal genegeerd.</p>
                    
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">⚠️ Waarom bol.com's standaardmails falen:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#111111]">
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

                <p className="text-lg text-[#111111] mb-6">De oplossing is om zelf de controle te nemen. Met geautomatiseerde, gepersonaliseerde reviewverzoeken krijg je 10-15x betere resultaten dan de standaardmails van bol.com.</p>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Stap 2: Stuur e-mails die wél converteren</h2>
                <p className="text-lg text-[#111111] mb-6">Misschien stuur je al mails, maar krijg je nauwelijks reacties. Een saaie, generieke mail inspireert niemand. Je hebt een mail nodig die converteert.</p>
                    
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">📧 Anatomie van een converterende reviewmail:</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-[#111111]">Onderwerp: "Hoe bevalt je [PRODUCTNAAM]?"</h5>
                      <p className="text-sm text-[#111111]/80">Persoonlijk + specifiek = hogere open rate</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-[#111111]">Opening: "Hoi [NAAM], bedankt voor je bestelling!"</h5>
                      <p className="text-sm text-[#111111]/80">Directe herkenning en waardering</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-[#111111]">Vraag: "Zou je andere klanten willen helpen?"</h5>
                      <p className="text-sm text-[#111111]/80">Appelleert aan behulpzaamheid i.p.v. eigenbelang</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-[#111111]">CTA: "Review schrijven (30 seconden)"</h5>
                      <p className="text-sm text-[#111111]/80">Duidelijke tijdsindicatie verlaagt drempel</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#111111] mb-6">Daarom hebben we in Baasy onze <strong className="font-semibold text-[#111111]">'magische e-mail templates'</strong> ontwikkeld. Dit zijn geoptimaliseerde templates die consistent 15-25% conversie behalen - dat is 10x beter dan standaardmails.</p>
                    
                <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-[#111111]">Krijg 3x meer reviews binnen 30 dagen</h3>
                  <p className="mt-3 text-lg text-[#111111]/80">
                    Onze magische e-mail templates converteren 15-25% van je klanten naar reviews. Volledig geautomatiseerd en bol.com-goedgekeurd.
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-4 border">
                    <h4 className="font-semibold mb-2 text-[#111111]">✅ Wat je krijgt:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#111111]">
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
                  <p className="mt-4 text-sm text-[#111111]/60">
                    ✓ Installatie in 5 minuten • ✓ Onbeperkt e-mails • ✓ 14 dagen gratis testen
                  </p>
                </div>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Stap 3: Wees niet onzeker over de regels</h2>
                <p className="text-lg text-[#111111] mb-6">Je wilt wel meer vragen om reviews, maar je bent bang om de regels van bol.com te overtreden. Die onzekerheid kan verlammend werken.</p>
                    
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">✅ De regels zijn eigenlijk simpel:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#111111]">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">Mag wel:</h5>
                      <ul className="space-y-1">
                        <li>• Vragen om eerlijke review</li>
                        <li>• Directe productreview links</li>
                        <li>• Persoonlijke e-mails sturen</li>
                        <li>• BTW-factuur meesturen</li>
                        <li>• Follow-up na 1-2 weken</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-700">Mag niet:</h5>
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

                <p className="text-lg text-[#111111] mb-6">De e-mail templates in Baasy zijn al ontworpen om aan deze regels te voldoen, zodat jij je daar geen zorgen over hoeft te maken. Je kunt je focussen op het vragen naar een eerlijke mening, in de wetenschap dat je veilig zit.</p>
                    
                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Stap 4: Voorkom een e-mail blokkade</h2>
                <p className="text-lg text-[#111111] mb-6">Bol.com kan je blokkeren als je je niet aan hun beleid houdt. We hebben dit zien gebeuren bij verkopers, en het is een risico dat je niet wilt nemen. Daarom hebben we de 5 kernregels voor bol-proof reviewverzoeken:</p>
                    
                <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🚨 De 5 kernregels voor veilige reviewverzoeken:</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Maximaal één e-mail per bestelling</h5>
                        <p className="text-sm text-[#111111]/80">Spam voorkom je door jezelf te beperken tot één reviewverzoek</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Vraag om "eerlijke productreview"</h5>
                        <p className="text-sm text-[#111111]/80">Nooit om positieve/5-sterren review vragen</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Geen beloningen aanbieden</h5>
                        <p className="text-sm text-[#111111]/80">Geen korting, winactie of andere beloning in ruil voor review</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">Vermijd externe links</h5>
                        <p className="text-sm text-[#111111]/80">Geen onnodige links naar eigen website of social media</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                      <div>
                        <h5 className="font-semibold text-[#111111]">BTW-factuur altijd meesturen</h5>
                        <p className="text-sm text-[#111111]/80">Baasy doet dit automatisch voor je bij elke e-mail</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#111111] mb-6">Wil je alle details weten? Je leest het volledige <Link href="https://partnerplatform.bol.com/nl/hulp-nodig/prestaties/beleidspunten/zelfpromotie/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#111111]/80">beleid rondom zelfpromotie van bol.com hier</Link>.</p>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Stap 5: Focus op de juiste reviews</h2>
                <p className="text-lg text-[#111111] mb-6">Niet alle reviews zijn gelijk. Er zijn twee soorten reviews op bol.com, en slechts één daarvan kun je direct beïnvloeden.</p>
                    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-gray-50 rounded-lg border">
                    <h4 className="font-semibold text-lg mb-3 text-[#111111]">🏪 Verkopersreviews</h4>
                    <div className="space-y-2 text-sm text-[#111111]">
                      <div>❌ Links alleen via bol.com</div>
                      <div>❌ Kun je niet zelf om vragen</div>
                      <div>❌ Weinig invloed op koopbeslissing</div>
                      <div>❌ Verspilde energie</div>
                    </div>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-lg mb-3 text-[#111111]">📦 Productreviews</h4>
                    <div className="space-y-2 text-sm text-[#111111]">
                      <div>✅ Directe links beschikbaar</div>
                      <div>✅ Kun je zelf om vragen</div>
                      <div>✅ Grote invloed op verkoop</div>
                      <div>✅ Focus je energie hier</div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#111111] mb-6">Focus je energie daarom op wat je wél kunt beïnvloeden: productreviews. Dat is waar klanten op letten en waar jij de controle over hebt. Baasy zorgt er automatisch voor dat de juiste productreview-link in elke e-mail komt te staan.</p>


                <div className="mt-16 pt-10 border-t border-gray-200 text-center">
                  <h3 className="text-2xl font-semibold text-[#111111]">Klaar om direct meer reviews te verzamelen?</h3>
                  <p className="mt-4 text-lg text-[#111111] max-w-2xl mx-auto">
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
                  <p className="mt-6 text-sm text-[#111111]/60">
                    Geen setup kosten • 10+ templates • 14 dagen gratis • Opzeggen wanneer je wilt
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