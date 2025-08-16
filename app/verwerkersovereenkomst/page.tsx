import { Metadata } from "next";
import Link from "next/link";
import { BlogThemeHandler } from "@/components/blog-theme-handler";

export const metadata: Metadata = {
  title: "Verwerkersovereenkomst - Bolbaas",
  description:
    "Verwerkersovereenkomst (DPA) tussen verwerkingsverantwoordelijke en Bolbaas (verwerker). Heldere afspraken over privacy, beveiliging en dataverwerking.",
};

export default function VerwerkersovereenkomstPage() {
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
                  <span className="inline-block mr-4 text-sm font-mono text-foreground/80">02</span>
                  Verwerkersovereenkomst
                </h1>
                <div className="mt-8 h-px w-1/2 bg-gradient-to-r from-border via-border/50 to-transparent" />
              </div>
            </div>
          </header>

          <div className="max-w-none mx-auto pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-4">
              <div className="sm:col-start-2 sm:col-span-2 prose prose-neutral dark:prose-invert max-w-none">
                <p className="italic text-foreground/80">
                  Dit is de verwerkersovereenkomst (Data Processing Agreement) tussen jou als verwerkingsverantwoordelijke en Bolbaas als verwerker. Zij vult onze algemene voorwaarden aan en gaat voor waar nodig.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">1. Partijen</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  1. Verwerkingsverantwoordelijke: de natuurlijke of rechtspersoon die persoonsgegevens via Bolbaas laat verwerken in het kader van de geleverde diensten.
                </p>
                <p>
                  2. Verwerker: Bolbaas, KvK 89112393, BTW NL004693041B93, bereikbaar via info@bolbaas.nl en +31 6 13665348.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">2. Onderwerp, aard, doel en duur</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Verwerker verwerkt in opdracht en op schriftelijke (waaronder elektronische) instructies van verwerkingsverantwoordelijke persoonsgegevens die noodzakelijk zijn voor het leveren van de overeengekomen diensten. De verwerking vangt aan na akkoord op deze overeenkomst en duurt zolang de diensten worden afgenomen.
                </p>
                <p>
                  Verwerker gebruikt persoonsgegevens uitsluitend voor het leveren van de dienst en niet voor eigen (product)analyses, marketing, advertenties, verkoop aan derden of modeltraining. Wij verkopen jouw data nooit.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">3. Soorten persoonsgegevens en betrokkenen</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Het kan gaan om identificatie- en contactgegevens, bestel- en transactiedata, en andere gegevens die door verwerkingsverantwoordelijke of diens gebruikers worden ingevoerd. Betrokkenen kunnen onder meer klanten, leveranciers en medewerkers van verwerkingsverantwoordelijke zijn.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">4. Verplichtingen verwerkingsverantwoordelijke</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Verwerkingsverantwoordelijke staat in voor een geldige rechtsgrond voor de verwerking, correcte en actuele persoonsgegevens, en het verstrekken van passende en rechtmatige instructies aan verwerker.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">5. Verplichtingen verwerker</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li>Verwerkt uitsluitend op gedocumenteerde instructies van verwerkingsverantwoordelijke en uitsluitend voor de overeengekomen doeleinden.</li>
                  <li>Gebruikt persoonsgegevens niet voor eigen doeleinden; geen verkoop van data; geen gebruik voor marketing, advertentieprofilering of productbrede analyses.</li>
                  <li>Waarborgt passende technische en organisatorische maatregelen (o.a. TLS/SSL in transit, encryptie at rest, least-privilege-toegang, MFA, logging/monitoring, back-ups).</li>
                  <li>Waarborgt geheimhouding door personeel en hulppersonen en zorgt voor passende autorisaties en instructies.</li>
                  <li>Assisteert verwerkingsverantwoordelijke, waar mogelijk, bij verzoeken van betrokkenen, DPIA’s en contacten met de AP.</li>
                </ul>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">6. Locatie, doorgifte en subverwerkers</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li>Verwerking vindt primair plaats binnen de Europese Economische Ruimte. Indien doorgifte buiten de EER noodzakelijk is, treft verwerker passende waarborgen (waaronder EU-standaardcontractbepalingen) en informeert verwerkingsverantwoordelijke.</li>
                  <li>Verwerker mag subverwerkers inschakelen indien zij minimaal gelijkwaardige verplichtingen krijgen opgelegd. Een actueel overzicht is op verzoek beschikbaar. Verwerker zal verwerkingsverantwoordelijke vooraf informeren over wijzigingen in subverwerkers; verwerkingsverantwoordelijke kan binnen 30 dagen gemotiveerd bezwaar maken. Bij onopgelost bezwaar mag verwerkingsverantwoordelijke de overeenkomst beëindigen voor de betreffende dienst.</li>
                </ul>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">7. Beveiliging en datalekken</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Verwerker onderhoudt een passend informatiebeveiligingsniveau dat rekening houdt met de stand van de techniek, de uitvoeringskosten, en de aard, omvang, context en doeleinden van de verwerking. Verwerker meldt zonder onredelijke vertraging en in ieder geval zo spoedig mogelijk (streeftermijn: binnen 48 uur) elke inbreuk in verband met persoonsgegevens aan verwerkingsverantwoordelijke, met relevante informatie voor beoordeling en eventuele melding aan de toezichthouder en betrokkenen.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">8. Rechten van betrokkenen</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Verwerker zal verwerkingsverantwoordelijke, waar mogelijk, bijstaan in het vervullen van diens plichten bij verzoeken betreffende inzage, rectificatie, verwijdering, beperking, dataportabiliteit en bezwaar.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">9. Audit en informatie</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border/50 to-transparent" />
                <p>
                  Verwerker stelt alle informatie ter beschikking die nodig is om naleving van deze overeenkomst aan te tonen en staat audits toe door verwerkingsverantwoordelijke of een door deze gemachtigde auditor, eens per 12 maanden of vaker indien objectief noodzakelijk (bijv. na een datalek), binnen redelijke grenzen en met inachtneming van vertrouwelijkheid. Kosten zijn voor de partij die ze maakt, tenzij non-conformiteit wordt vastgesteld.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">10. Einde van de overeenkomst</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Na beëindiging van de dienstverlening of op eerste verzoek van verwerkingsverantwoordelijke verwijdert of retourneert verwerker alle persoonsgegevens binnen 24 uur, tenzij opslag verplicht is op grond van Unierecht of lidstatelijk recht. Eventuele back-ups worden in de reguliere rotatie automatisch overschreven en daarmee onomkeerbaar verwijderd binnen de gebruikelijke retentietermijn. Op verzoek verstrekt verwerker een verwijderbevestiging.
                
                Wij verstaan onder beëindiging van de dienstverlening de verwijdering van het account van de gebruiker. Verwijdering gebeurt op verzoek van de eigenaar van het account, en wordt binnen 24 uur gehonoreerd. 
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">11. Geheimhouding en non-disclosure</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Verwerker en haar medewerkers houden alle persoonsgegevens en daarmee samenhangende informatie strikt vertrouwelijk en delen deze niet met derden, behalve subverwerkers onder dezelfde verplichtingen of wanneer dit wettelijk verplicht is.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">12. Toepasselijk recht</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>Op deze verwerkersovereenkomst is Nederlands recht van toepassing.</p>

                <div className="mt-12 p-4 border rounded-lg text-sm text-foreground/80">
                  Privacybelofte: we verkopen je data nooit, we gebruiken je data niet voor marketing of advertentieprofilering en we verwerken uitsluitend wat noodzakelijk is om de dienst te leveren. Vragen? Neem contact op via info@bolbaas.nl.
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}



