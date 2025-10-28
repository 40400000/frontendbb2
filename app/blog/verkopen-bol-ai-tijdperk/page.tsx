import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { EducationDisclaimer } from "@/components/education-disclaimer";

export const metadata: Metadata = {
  title: "Verkopen op bol.com in het AI tijdperk: hoe je met Ranking AI de concurrentie voor bent - Baasy",
  description: "50.000+ verkopers op bol.com, maar AI geeft je het voordeel. Ontdek hoe onze Ranking AI je producten automatisch optimaliseert voor betere vindbaarheid en meer verkopen.",
  openGraph: {
    title: "Verkopen op bol.com in het AI tijdperk: hoe je met Ranking AI de concurrentie voor bent",
    description: "50.000+ verkopers op bol.com, maar AI geeft je het voordeel. Ontdek hoe onze Ranking AI je producten automatisch optimaliseert voor betere vindbaarheid en meer verkopen.",
    type: "article",
    images: [
      {
        url: "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/RANKINGAIBLOG_BG.png",
        width: 800,
        height: 800,
        alt: "Verkopen op bol.com in het AI tijdperk: hoe je met Ranking AI de concurrentie voor bent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verkopen op bol.com in het AI tijdperk: hoe je met Ranking AI de concurrentie voor bent",
    description: "50.000+ verkopers op bol.com, maar AI geeft je het voordeel. Ontdek hoe onze Ranking AI je producten automatisch optimaliseert voor betere vindbaarheid en meer verkopen.",
    images: ["https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/RANKINGAIBLOG_BG.png"],
  },
};

export default function BlogPostPage() {
  const post = {
    title: "Verkopen op bol.com in het AI tijdperk: hoe je met Ranking AI de concurrentie voor bent",
    author: "Thijmen Dreef", 
    date: "23 juli 2025",
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
            <EducationDisclaimer />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="max-w-none mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-4">
              <div className="sm:col-start-1 sm:col-span-4">
                <p className="text-lg text-[#111111] mb-6">Je hebt het vast gemerkt: bol.com wordt steeds drukker. Meer dan 50.000 actieve verkopers vechten om dezelfde klanten. Waar je vroeger met een beetje SEO-kennis al op pagina 1 kon komen, is de concurrentie nu veel groter. De vraag is niet meer óf je tools nodig hebt, maar welke tools je echt een groot voordeel geven.</p>
                <p className="text-lg text-[#111111] mb-6">Hier komt AI om de hoek kijken. Nee geen ChatGPT (wrapper), maar modellen die speciaal getraind zijn voor bol.com listings. Terwijl andere verkopers nog handmatig hun listings optimaliseren, analyseert onze Ranking AI in real-time wat werkt en wat niet.</p>
                    
                <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🚨 De harde realiteit van bol.com in 2025:</h4>
                  <ul className="space-y-2 text-[#111111]">
                    <li>• 45.000+ actieve partners</li>
                    <li>• Gemiddeld 15+ verkopers per populair product</li>
                    <li>• Handmatige listing optimalisatie kost uren per week of wordt niet gedaan</li>
                    <li>• Verkeerde keywords = onzichtbaarheid en onderaan de lijst</li>
                    <li>• Zonder data-inzicht loop je achter op concurrenten</li>
                  </ul>
                </div>

                <p className="text-lg text-[#111111] mb-6">Maar juist hier liggen ook kansen. De meeste verkopers werken nog steeds zoals in 2020: gokken, proberen, en hopen dat het werkt. AI geeft je een unfair advantage, je weet precies wat je moet doen en waarom.</p>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">ChatGPT voor listings: de gratis start (maar niet de beste oplossing)</h2>
                <p className="text-lg text-[#111111] mb-6">Voordat we onze hypergespecialiseerde Ranking AI bespreken: je kunt ook gratis beginnen met ChatGPT. Hieronder een aantal simpele prompts die je direct zou kunnen gebruiken:</p>
                    
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">💡 ChatGPT prompts voor bol.com listings optimalisatie:</h4>
                    
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-[#111111]">Producttitels optimaliseren:</h5>
                      <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-2">
                        "Ik verkoop [PRODUCT] op bol.com. Maak 5 geoptimaliseerde producttitels van maximaal 80 karakters. Focus op keywords die mensen zoeken. Maak ze aantrekkelijk voor kopers."
                      </div>
                      <p className="text-sm text-[#111111]/80">Vervang [PRODUCT] met je eigen product en ChatGPT geeft je een paar opties om uit te kiezen.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-[#111111]">Concurrent analyse:</h5>
                      <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-2">
                        "Hier zijn de titels en beschrijvingen van best presterende concurrenten voor [PRODUCT]: [PLAK HIER CONCURRENT DATA]. Verbeter mijn huidige listing op basis hiervan. Zorg dat de inhoud en kenmerken van mijn product hetzelfde blijven, maar optimaliseer de titel en beschrijving voor betere vindbaarheid. Hier is mijn listing: [JOUW LISTING]"
                      </div>
                      <p className="text-sm text-[#111111]/80">Kopieer de titels van top-3 concurrenten en laat ChatGPT jouw listing optimaliseren op basis van wat werkt.</p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-[#111111]">Productbeschrijvingen verbeteren:</h5>
                      <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono mb-2">
                        "Verbeter mijn huidige productbeschrijving voor bol.com: '[JOUW HUIDIGE BESCHRIJVING]'. Maak het overtuigender, voeg belangrijke voordelen toe, en zorg dat het kopers aanspreekt om te kopen. Behoud alle technische specificaties maar maak de tekst aantrekkelijker."
                      </div>
                      <p className="text-sm text-[#111111]/80">Plak je bestaande beschrijving en laat ChatGPT deze verbeteren voor betere conversie.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">📝 Extra ChatGPT tips voor bol.com:</h4>
                  <ul className="space-y-2 text-sm text-[#111111]">
                    <li>• <strong>Keyword research:</strong> "Geef me 20 keywords die mensen zoeken voor [PRODUCT]"</li>
                    <li>• <strong>Productbeschrijving:</strong> "Schrijf een verleidelijke productbeschrijving van 150 woorden voor [PRODUCT]"</li>
                    <li>• <strong>USP's vinden:</strong> "Wat zijn de 5 belangrijkste voordelen van [PRODUCT] die ik moet benadrukken?"</li>
                  </ul>
                </div>

                <p className="text-lg text-[#111111] mb-6">Dit kan je zeker helpen om betere titels te maken. Maar er zitten grote beperkingen aan deze aanpak:</p>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">⚠️ Waarom ChatGPT niet genoeg is voor bol.com:</h4>
                  <ul className="space-y-2 text-[#111111]">
                    <li>• <strong>Geen real-time data:</strong> ChatGPT weet niet wat vandaag werkt op bol.com</li>
                    <li>• <strong>Geen concurrent inzicht:</strong> Ziet niet wat top-sellers doen in jouw niche</li>
                    <li>• <strong>Geen ranking feedback:</strong> Weet niet of je wijzigingen daadwerkelijk werken</li>
                    <li>• <strong>Algemene keywords:</strong> Geeft populaire keywords, niet de winstgevende</li>
                    <li>• <strong>Handmatig werk:</strong> Kost nog steeds uren per product</li>
                  </ul>
                </div>

                <p className="text-lg text-[#111111] mb-6">ChatGPT is een goede start, maar voor echte resultaten op bol.com heb je realtime data en gespecialiseerde AI-modellen nodig. Data over wat werkt, wanneer het werkt, en waarom het werkt. Precies dat is wat onze Ranking AI doet.</p>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Waarom Baasy Ranking AI beter werkt dan ChatGPT</h2>
                <p className="text-lg text-[#111111] mb-6">De Baasy Ranking AI is een model dat getraind is op bol.com data. Het gebruikt realtime data van keywords om te zorgen dat jij de perfecte listing krijgt. Zo kijkt onze AI bijvoorbeeld naar de best presterende concurrenten, zoektrends, gedrag van klanten en meer.</p>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">✅ Wat je direct krijgt met Ranking AI:</h4>
                  <ul className="space-y-3 text-[#111111]">
                    <li>• <strong>Magische listings</strong> - Automatisch geoptimaliseerd voor rankings, zonder dat je er zelf over hoeft na te denken</li>
                    <li>• <strong>De juiste keywords</strong> - Geen gokken meer, gebruik keywords die écht werken. Gebaseerd op miljarden datapunten.</li>
                    <li>• <strong>Ranking vooruitgang</strong> - Monitor of je omhoog of omlaag gaat, en waarom</li>
                    <li>• <strong>Schaalbare resultaten</strong> - Je kan al je producten binnen korte tijd optimaliseren</li>
                  </ul>
                </div>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Waarom handmatige optimalisatie niet meer werkt</h2>
                <p className="text-lg text-[#111111] mb-6">Vijf jaar geleden kon je met een Excel-lijst van keywords en wat A/B testing nog succesvol zijn. Nu? De markt verandert te snel. Concurrentie is groter dan ooit. Je moet nu slimmer, sneller en beter zijn dan je concurrenten.</p>
                    
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">⚠️ Waarom handmatige optimalisatie niet werkt:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#111111]">
                    <div>
                      <h5 className="font-semibold mb-2">Problemen met handwerk:</h5>
                      <ul className="space-y-1">
                        <li>• Kost 4+ uur per week per product</li>
                        <li>• Gebaseerd op gevoel, niet data</li>
                        <li>• Concurrenten bewegen sneller</li>
                        <li>• Trends mis je gemakkelijk</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Gevolgen:</h5>
                      <ul className="space-y-1">
                        <li>• Rankings dalen ongemerkt</li>
                        <li>• Verkeerde keywords = lage kwaliteit traffic</li>
                        <li>• Achterstand groeit wekelijks</li>
                        <li>• Frustratie en tijdverspilling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#111111] mb-6">Het probleem is dat je als ondernemer niet 24/7 de markt kunt monitoren. Maar AI wel. Onze Ranking AI slaapt niet, hoeft niet naar het toilet, en mist geen enkele verandering in de trends op bol.com.</p>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Hoe onze Ranking AI je een unfair advantage geeft</h2>
                <p className="text-lg text-[#111111] mb-6">Onze Ranking AI is geen standaard tool. Het systeem analyseert real-time data van meer dan 12 miljoen keywords, kijkt naar je best presterende concurrenten, en bepaalt precies welke wijzigingen het grootste effect hebben op je ranking. Dit zijn de belangrijkste dingen waar onze AI op let:</p>
                    
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🧠 Wat onze Ranking AI voor je doet:</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-[#111111]">12+ miljoen keywords database</h5>
                      <p className="text-sm text-[#111111]/80">Real-time data analyse van alle relevante keywords op bol.com voor perfecte optimalisatie</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-[#111111]">Best performing competitor analysis</h5>
                      <p className="text-sm text-[#111111]/80">Analyseert wat je top-presterende concurrenten doen en past jouw strategie daarop aan</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-[#111111]">Rankings impact calculation</h5>
                      <p className="text-sm text-[#111111]/80">Berekent welke specifieke wijzigingen het grootste ranking effect hebben en voert deze door.</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-[#111111]">Conversie data analyse</h5>
                      <p className="text-sm text-[#111111]/80">Analyseert hoe je producten worden gekocht en past je content daarop aan</p>
                    </div>
                  </div>
                </div>

                <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-[#111111]">Van pagina 30 naar pagina 1 in 4 weken</h3>
                  <p className="mt-3 text-lg text-[#111111]/80">
                    Onze Ranking AI analyseert je producten en optimaliseert je listing automatisch. Gemiddeld zien verkopers tot 340% meer organische traffic binnen 30 dagen.
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-4 border">
                    <h4 className="font-semibold mb-2 text-[#111111]">🚀 Wat je krijgt met Ranking AI:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#111111]">
                      <div>• 12+ miljoen keywords database</div>
                      <div>• Best-performing competitor analyse</div>
                      <div>• Data-gedreven listing wijzigingen</div>
                      <div>• Automatische listing optimalisatie</div>
                      <div>• Real-time ranking monitoring</div>
                      <div>• Concrete voorstellen per product</div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link href="/prijzen" passHref>
                      <Button size="lg" className="w-full sm:w-auto">Start met Ranking AI</Button>
                    </Link>
                    <Link href="/prijzen" passHref>
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">Probeer Ranking AI gratis</Button>
                    </Link> 
                  </div>
                  <p className="mt-4 text-sm text-[#111111]/60">
                    ✓ Setup in 5 minuten • ✓ Werkt met alle productcategorieën • ✓ 14 dagen gratis testen
                  </p>
                </div>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Een voorbeeld: van onzichtbaar naar top-ranking</h2>
                <p className="text-lg text-[#111111] mb-6">Stel je een verkoper voor die 'Magnetic Tiles' verkoopt. Een populair product, maar de concurrentie zit al goed op de top. Zonder de juiste data en Ranking AI is het bijna onmogelijk om nog op te vallen. Hier is een voorbeeld van hoe AI het verschil maakt voor een verkoper die vastzat op pagina 5 voor keyword 'magnetic tiles'.</p>
                    
                <div className="bg-gray-50 p-6 rounded-lg border mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">Voor AI-optimalisatie:</h4>
                  <div className="space-y-2 text-sm text-[#111111]">
                    <div><strong>Producttitel:</strong> "Magnetic tiles voor kinderen - 60 stuks"</div>
                    <div><strong>Ranking:</strong> Positie #47 voor "magnetic tiles"</div>
                    <div><strong>Maandelijkse verkopen:</strong> 12 stuks</div>
                    <div><strong>Organic traffic:</strong> 210 impressies/maand</div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">Ranking AI analyseerde en vond:</h4>
                  <div className="space-y-3 text-[#111111]">
                    <div>🔍 <strong>Database scan:</strong> Uit 12+ miljoen keywords identificeerde AI 'Montessori', 'constructie speelgoed', 'bouwstenen' en 'educatief' als high-impact zoektermen.</div>
                    <div>📈 <strong>Competitor analyse:</strong> Top-performers gebruiken 'magnetische bouwstenen' en specificeren de doelgroep (bijv. 'speelgoed 8 jaar') voor hogere rankings.</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🚀 Na Ranking AI-optimalisatie</h4>
                  <div className="space-y-2 text-sm text-[#111111]">
                    <div><strong>Nieuwe titel (merknaam weggelaten):</strong> "Magnetic Tiles - 60 Stuks - Montessori Constructie Speelgoed  - Educatieve Magnetische Tegels voor Kinderen - Magnetische Bouwstenen"</div>
                    <div><strong>Ranking:</strong> Positie #4 voor "magnetic tiles" + verbeteringen voor andere keywords zoals 'educatieve speelgoed'</div>
                    <div><strong>Maandelijkse verkopen:</strong> 105 stuks (+775% groei)</div>
                  </div>
                </div>

                <p className="text-lg text-[#111111] mb-6">Het mooie? De verkoper hoefde zelf geen uren te besteden aan handmatig onderzoek en listings van concurrenten te bekijken. De RankingAI deed het zware werk en de resultaten volgden.</p>

                <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-normal text-[#111111] mt-10 mb-6">Waarom je NU écht moet instappen op AI en niet later</h2>
                <p className="text-lg text-[#111111] mb-6">We zitten in een kantelpunt. De early adopters van AI-tools krijgen nu een voorsprong die moeilijk in te halen is.</p>
                    
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">⏰ De AI-adoptie curve op bol.com:</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">Nu</div>
                      <div>
                        <h5 className="font-semibold text-green-600">Early adopters (5% van verkopers)</h5>
                        <p className="text-sm text-[#111111]/80">Gebruiken AI, krijgen 3-5x betere resultaten dan concurrenten</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">6m</div>
                      <div>
                        <h5 className="font-semibold text-orange-600">Early majority (25% van verkopers)</h5>
                        <p className="text-sm text-[#111111]/80">AI wordt mainstream, voordeel wordt kleiner</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">12m</div>
                      <div>
                        <h5 className="font-semibold text-red-600">Late adopters (70% van verkopers)</h5>
                        <p className="text-sm text-[#111111]/80">AI is vereiste om mee te kunnen doen, geen voordeel meer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#111111] mb-6">De vraag is niet of AI de toekomst van bol.com verkopen is, dat is het al. De vraag is of je een early adopter wordt en het voordeel pakt, of dat je straks probeert bij te benen wanneer het te laat is.</p>
                    
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-[#111111]">🎯 Waarom nu starten het slimste is:</h4>
                  <div className="space-y-3 text-[#111111]">
                    <div>🚀 <strong>Eerste movers voordeel:</strong> Minder concurrentie op AI-geoptimaliseerde keywords</div>
                    <div>📈 <strong>Compounding effect:</strong> Betere rankings leiden tot meer verkopen, leiden tot nog betere rankings</div>
                    <div>🧠 <strong>Learning curve:</strong> AI wordt slimmer naarmate het meer van jouw producten leert</div>
                    <div>💰 <strong>ROI maximalisatie:</strong> Langer gebruik = meer voordeel uit je investering</div>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-gray-200 text-center">
                  <h3 className="text-2xl font-semibold text-[#111111]">Klaar om je concurrenten voorbij te streven met AI?</h3>
                  <p className="mt-4 text-lg text-[#111111] max-w-2xl mx-auto">
                    Bol.com wordt alleen maar competitiever. De verkopers die nu AI gebruiken, bouwen een oninhaalbare voorsprong op. Word een early adopter en laat onze Ranking AI jouw producten optimaliseren terwijl je slaapt.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/prijzen" passHref>
                      <Button size="lg">Start je AI-voordeel vandaag</Button>
                    </Link>
                    <Link href="/prijzen" passHref>
                      <Button variant="outline" size="lg">Bekijk Ranking AI in actie</Button>
                    </Link>
                  </div>
                  <p className="mt-6 text-sm text-[#111111]/60">
                    Ranking verbetering binnen 48 uur • 340% meer traffic gemiddeld • 14 dagen gratis testen
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