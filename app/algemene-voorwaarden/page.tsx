import { Metadata } from "next";
import Link from "next/link";
import { BlogThemeHandler } from "@/components/blog-theme-handler";

export const metadata: Metadata = {
  title: "Algemene voorwaarden - Bolbaas",
  description:
    "Lees de algemene voorwaarden van Bolbaas. Duidelijke afspraken over gebruik, privacy, aansprakelijkheid en meer.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="relative z-0 flex flex-col min-h-screen border-t bg-white dark:bg-background border-b">
      <BlogThemeHandler />
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
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/80 transition-colors mb-8"
              >
                <span>Terug naar home</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4">
              <div className="col-span-1 sm:col-span-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50">
                  <span className="inline-block mr-4 text-sm font-mono text-foreground/80">01</span>
                  Algemene voorwaarden
                </h1>
                <div className="mt-8 h-px w-1/2 bg-gradient-to-r from-border via-border/50 to-transparent" />
              </div>
              <div className="mt-4 sm:col-start-2 sm:col-span-2 flex items-start justify-center text-sm text-foreground/80 text-center">
                <span className="px-2 py-0.5 rounded border border-border bg-white/60 dark:bg-background/60 mr-2">Privacybelofte</span>
                <span>
                  We verkopen je data nooit. We gebruiken jouw gegevens niet voor ons eigen voordeel—alleen om functies te leveren die jij gebruikt. Lees meer in onze <Link href="/verwerkersovereenkomst" className="underline">verwerkersovereenkomst</Link>.
                </span>
              </div>
            </div>
          </header>

          <div className="max-w-none mx-auto pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-4">
              <div className="sm:col-start-2 sm:col-span-2 prose prose-neutral dark:prose-invert max-w-none">
                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">1. Geldigheid van deze voorwaarden</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Deze voorwaarden zijn van toepassing wanneer je onze website gebruikt, een gebruikersaccount aanmaakt of onze diensten afneemt. Door gebruik te maken van onze diensten ga je akkoord met deze voorwaarden. Afwijken van deze voorwaarden kan alleen als dit uitdrukkelijk schriftelijk of per e-mail is overeengekomen.
                </p>
                <p>
                  Algemene voorwaarden die jij zelf hanteert, zijn niet van toepassing en worden hierbij nadrukkelijk afgewezen.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">2. Wie wij zijn en wie jij bent</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  In deze voorwaarden gebruiken we de je-vorm. Met ‘jij’, ‘je’ of ‘jouw’ bedoelen we jou als gebruiker van onze diensten (online applicatie, apps en/of website). Met ‘wij’, ‘we’, ‘ons’ of ‘onze’ bedoelen we Bolbaas, ingeschreven bij de Kamer van Koophandel onder nummer 89112393 en BTW-nummer NL004693041B93. Je kunt ons bereiken via info@bolbaas.nl of +31 6 13665348.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">3. Aanmaken van een gebruikersaccount</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Bij het aanmaken van een account vragen we om enkele gegevens zodat we je omgeving kunnen inrichten. Je bent verantwoordelijk voor de juistheid van deze gegevens en kunt je bedrijfsinformatie later aanvullen of wijzigen.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">4. Proefperiode en fair-use</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  De eerste maand nadat je een account hebt aangemaakt, kun je Bolbaas kosteloos proberen (m.u.v. optionele betaalde diensten). In deze periode kun je beoordelen of Bolbaas past bij jouw wensen en onderneming. Bevalt het niet, dan kun je tussentijds stoppen. De proefperiode wordt omgezet in een abonnement op het moment dat je je betalingsgegevens hebt toegevoegd.
                </p>
                <h3 className="mt-8 text-xl font-semibold">4.1 Fair-use policy</h3>
                <p>
                Voor het gebruik van je account geldt een fair‑use beleid. Gebruik dat in verhouding tot normaal gebruik buitensporig is, kunnen we beperken of blokkeren. Dit omvat onder meer het (geautomatiseerd) scrapen of crawlen van de applicatie, het massaal opvragen, kopiëren, spiegelen of anderszins dupliceren van door Bolbaas aangeboden data of content, het omzeilen van technische beschermingsmaatregelen en iedere handeling die onevenredige belasting van onze infrastructuur veroorzaakt.                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">5. Prijsmodel en facturatieperiode</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Je facturatieperiode hoeft niet gelijk te lopen met kalendermaanden en is afhankelijk van de aanmelddatum. Meld je je bijvoorbeeld aan op de 12e, dan loopt je periode van de 12e t/m de 11e van de volgende maand.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">6. Stoppen met Bolbaas en verwijderen van data</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
Bij het verwijderen van je account verwijderen we automatisch na 24 uur al je data. Je kan je account verwijderen door contact met ons op te nemen via info@bolbaas.nl. We zullen binnen 24 uur op verwijderingsverzoeken reageren, ook in het weekend.          </p>
                <p>
Via dit e-mailadres kan je ook verzoeken voor dataportabiliteit of inzage indienen. Deze verzoeken behandelen we binnen 5 werkdagen.                </p>

                
                
                
                
                <p>
                  Voor vragen over dataportabiliteit of inzage kun je ook via dit e-mailadres contact opnemen.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">7. Prijswijzigingen</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  We kunnen onze prijzen wijzigen. We informeren je minimaal vier weken van tevoren via onze website of per e-mail. Ben je het niet eens met de wijziging, dan kun je je account opzeggen. Jaarlijkse indexatie op basis van inflatie kan ook plaatsvinden; ook daarvan stellen we je minimaal vier weken vooraf op de hoogte.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">8. Beschikbaarheid, onderhoud en functionaliteiten</h2>
                <p>
                  We doen er alles aan om Bolbaas prettig en betrouwbaar te laten werken. We streven naar hoge beschikbaarheid, maar kunnen 24/7 beschikbaarheid zonder storingen niet garanderen en niet op ieder apparaat.
                </p>
                <h3 className="mt-8 text-xl font-semibold">8.1 Onderhoud</h3>
                <p>
                  Soms is onderhoud nodig. We proberen dit uit te voeren zonder merkbare impact. Als tijdelijk offline gaan nodig is, plannen we dit bij voorkeur ’s nachts of in het weekend.
                </p>
                <h3 className="mt-8 text-xl font-semibold">8.2 Functionaliteiten</h3>
                <p>
                  We mogen functionaliteiten en onderdelen aanpassen, toevoegen of verwijderen. Het kan voorkomen dat bepaalde functies niet langer beschikbaar zijn of niet meer werken op specifieke apparaten.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">9. Informatie, rapportages en externe bronnen</h2>
                <p>
                  We streven naar actuele en correcte informatie, maar kunnen dit niet altijd garanderen. Rapportages, overzichten, facturen of berekeningen kunnen fouten bevatten, door systeemfouten of door onjuiste invoer. Controleer belangrijke informatie voordat je die gebruikt, bijvoorbeeld voor belastingaangiftes.
                </p>
                <h3 className="mt-8 text-xl font-semibold">9.1 Helpdesk support</h3>
                <p>
                  Onze helpdesk helpt je graag. Antwoorden zijn bedoeld als ondersteuning en zijn geen vervanging voor professioneel advies (bijv. van een accountant). Hieraan kunnen geen rechten worden ontleend.
                </p>
   
                <h3 className="mt-8 text-xl font-semibold">9.2 Externe informatie</h3>
                <p>
                  We zijn niet aansprakelijk voor de beschikbaarheid of inhoud van externe websites waarnaar we verwijzen.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">10. Eigendom van de gegevens die je bij ons invoert</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Alle gegevens die je invoert in je account zijn en blijven van jou. Wij maken geen aanspraak op het eigendom van jouw data en gebruiken jouw klant-, account- of bedrijfsgegevens niet voor productbrede analyses, marketingdoeleinden, modeltraining of verkoop aan derden. We voeren geen (geanonimiseerde of geaggregeerde) analyses op jouw data uit buiten wat strikt noodzakelijk is om de door jou gebruikte functies te laten werken. We gebruiken jouw data nooit voor ons eigen voordeel.
                </p>
                <p>
                  We hechten sterk aan privacy en treffen passende technische en organisatorische maatregelen om je data te beschermen. Meer informatie over onze rol als verwerker en de gemaakte afspraken vind je in onze <Link href="/verwerkersovereenkomst">verwerkersovereenkomst</Link>.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">11. Privacy en verwerkersovereenkomst</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  We nemen privacy serieus en streven ernaar te voldoen aan de Algemene Verordening Gegevensbescherming (AVG). Wanneer jij persoonsgegevens invoert, ben jij verwerkingsverantwoordelijke en zijn wij verwerker. We verwerken persoonsgegevens alleen in opdracht van jou, op basis van onze verwerkersovereenkomst.
                </p>
                <p>
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">12. Jouw verantwoordelijk gebruik</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Er gelden enkele regels voor het gebruik van Bolbaas.
                </p>
                <p>
                  Je mag geen workspaces geautomatiseerd aanmaken; je moet voldoen aan de minimale wettelijke leeftijd; één workspace is bedoeld voor één bedrijf (per workspace mag je, afhankelijk van je abonnement, meerdere persoonsgebonden profielen hebben.).
                </p>
                <ul>
                  <li>Wees zorgvuldig en handel in overeenstemming met wet- en regelgeving, openbare orde en goede zeden.</li>
                  <li>Test of scan onze infrastructuur niet zonder voorafgaande schriftelijke toestemming.</li>
                  <li>
                    Omzeil geen beveiligings- en authenticatiemaatregelen en verstuur geen ongewenste reclame of spam via Bolbaas.
                  </li>
                  <li>Verzend geen gewijzigde of misleidende informatie (zoals spoofing of phishing).</li>
                  <li>Zet niet aan tot haat of onverdraagzaamheid en schend geen rechten van anderen.</li>
                  <li>Publiceer of deel geen materiaal dat frauduleus, lasterlijk of misleidend is.</li>
                </ul>
                <p>
                  Bolbaas wordt door veel ondernemers gebruikt. We vertrouwen erop dat je de dienst verantwoord gebruikt.
                </p>
                <p>
                  We behouden ons het recht voor om accounts te blokkeren of te verwijderen bij substantiële vermoedens van misbruik.
                </p>
                <p>
                  Je mag informatie, afbeeldingen en andere materialen van ons niet zonder toestemming reproduceren. Volledig of gedeeltelijk nabouwen van Bolbaas is niet toegestaan.
                </p>
                <p>
                  Je bent zelf verantwoordelijk voor de juistheid van onder jouw naam verzonden e-mails en documenten en voor eventuele claims die daaruit voortvloeien.
                </p>
                <p>
                  Je bent verantwoordelijk voor het gebruik van je account. Kies een sterk wachtwoord en deel dit niet. Wil je iemand toegang geven (zoals je boekhouder of partner), maak dan een extra gebruikersprofiel aan en koppel deze aan je workspace. 
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">13. Schending van de voorwaarden</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Bij schending van de voorwaarden ben je aansprakelijk voor de daardoor ontstane schade. Indien derden ons aanspreken vanwege jouw overtreding, vrijwaar je ons. We kunnen je account (tijdelijk) blokkeren of definitief verwijderen, met of zonder waarschuwing, of op verzoek van een bevoegde instantie. Bij verwijdering ben je je gegevens kwijt; we zijn niet aansprakelijk voor schade die hieruit voortvloeit.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">14. Overmacht</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Als er sprake is van overmacht (bijvoorbeeld storingen bij leveranciers, stroom- of internetstoringen) waardoor we onze diensten niet kunnen leveren, zijn we niet verplicht onze verplichtingen na te komen zolang de overmachtssituatie voortduurt.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">15. Aansprakelijkheid</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Indien je ons aansprakelijk wilt stellen, dien je ons schriftelijk in gebreke te stellen met een redelijke termijn om een oplossing te bieden (herstel of beperking van schade). Aansprakelijkheid voor indirecte schade (waaronder gevolgschade, gemiste besparingen, gederfde winst en schade door bedrijfsstagnatie) is uitgesloten. Onze totale aansprakelijkheid voor directe schade is in alle gevallen beperkt tot € 500,-.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">16. Relatie tot andere bedrijven</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Bolbaas is een onafhankelijk bedrijf en staat los van bol.com B.V. en dochterondernemingen van deze rechtspersoon. Wij zijn geen dochteronderneming van bol.com B.V. en hebben geen relatie met bol.com B.V..
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">17. Wijzigingen in deze voorwaarden</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  We kunnen deze voorwaarden wijzigen. We informeren je hierover tijdig via onze website of per e-mail. Ben je het niet eens met de wijzigingen, dan kun je de overeenkomst beëindigen door je account te verwijderen. Blijf je de dienst gebruiken na de ingangsdatum van de wijzigingen, dan ga je akkoord met de nieuwe voorwaarden.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">18. Oplossen van geschillen</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  We bespreken een geschil eerst graag samen om er in onderling overleg uit te komen. Lukt dat niet, dan wordt het geschil voorgelegd aan de bevoegde Nederlandse rechter. Op deze overeenkomst is Nederlands recht van toepassing.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}


