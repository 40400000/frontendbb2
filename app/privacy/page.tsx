import { Metadata } from "next";
import Link from "next/link";
import { BlogThemeHandler } from "@/components/blog-theme-handler";

export const metadata: Metadata = {
  title: "Privacy statement - Baasy",
  description:
    "Kort privacy statement van Baasy: jouw data blijft altijd van jou. Geen verkoop of eigen gebruik; we verwerken uitsluitend voor functies die jij gebruikt.",
};

export default function PrivacyPage() {
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
                  <span className="inline-block mr-4 text-sm font-mono text-foreground/80">03</span>
                  Privacy statement
                </h1>
                <div className="mt-8 h-px w-1/2 bg-gradient-to-r from-border via-border/50 to-transparent" />
              </div>
              <div className="mt-4 sm:col-start-2 sm:col-span-2 text-sm text-foreground/90 text-center">
                <span className="inline-block px-2 py-0.5 rounded border border-border bg-white/60 dark:bg-background/60 mr-2">Privacybelofte</span>
                <span>
                  Jouw data blijft altijd van jou. We verkopen je data nooit en gebruiken je gegevens niet voor ons eigen voordeel—alleen om functies te leveren die jij gebruikt.
                </span>
              </div>
            </div>
          </header>

          <div className="max-w-none mx-auto pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-4">
              <div className="sm:col-start-2 sm:col-span-2 prose prose-neutral dark:prose-invert max-w-none">
                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Wat je van ons mag verwachten</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li><strong>Data-eigendom</strong>: alle gegevens in je account zijn en blijven van jou.</li>
                  <li><strong>Geen eigen gebruik</strong>: geen verkoop van data en geen gebruik voor marketing, advertenties, productbrede analyses of modeltraining.</li>
                  <li><strong>Alleen voor functies</strong>: we verwerken uitsluitend wat nodig is om features te laten werken die jij gebruikt.</li>
                  <li><strong>Subverwerkers</strong>: we schakelen alleen noodzakelijke subverwerkers in onder gelijkwaardige verplichtingen; zie onze <Link href="/verwerkersovereenkomst">verwerkersovereenkomst</Link>.</li>
                  <li><strong>Doorgifte</strong>: verwerking binnen de EER; als doorgifte nodig is, passen we passende waarborgen toe (zoals SCC’s).</li>
                  <li><strong>Beveiliging</strong>: versleuteling in transit en at rest, least‑privilege‑toegang, MFA en monitoring.</li>
                  <li><strong>Bewaren & verwijderen</strong>: we bewaren niet langer dan nodig. Op verzoek verwijderen we je data binnen 24 uur; bij accountverwijdering wissen we je data ook binnen 24 uur (back‑ups verlopen via rotatie).</li>
                </ul>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Welke gegevens we verwerken (met jouw toestemming)</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Koppel je je bol store via API en geef je toestemming, dan halen we via de bol API alleen de gegevens op die nodig zijn om voor jou store(s) de functies te laten werken (dashboards, alerts, automatiseringen).
                </p>
                <ul>
                  <li><strong>Bestellingen, verzendingen en retouren</strong>: orderregels, fulfillment‑status en basic logistieke gegevens.</li>
                  <li><strong>Reviews en klantreacties</strong>: beoordelingsteksten, scores en metadata om je service te verbeteren.</li>
                  <li><strong>Winkel- en productprestaties</strong>: omzet- en prestatiestatistieken, conversie‑signalen en listing‑statussen.</li>
                  <li><strong>Voorraad en contentstatus</strong>: voorraadniveaus, leverbaarheid en publicatiestatus van artikelen.</li>
                </ul>
                <p className="mt-4">
                  Deze gegevens gebruiken we uitsluitend voor jou als klant binnen je eigen omgeving. We verkopen data niet en gebruiken deze niet voor eigen doeleinden.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Workspaces, bol stores en gebruikers</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  We werken met <strong>workspaces</strong>. Bol stores worden gekoppeld aan een workspace. Binnen een workspace kun je meerdere gebruikers toevoegen met passende rollen en rechten.
                </p>
                <ul>
                  <li><strong>Toegang en scheiding</strong>: winkeldata is alleen zichtbaar binnen de betreffende workspace.</li>
                  <li><strong>Beheer</strong>: eigenaren/beheerders bepalen wie toegang heeft tot een workspace.</li>
                  <li><strong>Intrekken van toegang</strong>: verbreek je de koppeling met bol of trek je tokens in, dan stoppen we direct met synchroniseren. Op verzoek verwijderen we historische sync‑data binnen 24 uur.</li>
                </ul>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Beveiliging</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li><strong>Transport</strong>: alle verkeer is versleuteld met TLS.</li>
                  <li><strong>Opslag</strong>: encryptie at rest en streng sleutelbeheer (bijv. KMS).</li>
                  <li><strong>Toegang</strong>: least‑privilege‑toegang, MFA/2FA verplicht voor admins.</li>
                  <li><strong>Controle</strong>: uitgebreide audit logging en continue monitoring.</li>
                  <li><strong>Rollen</strong>: toegangsbeheer op workspace‑niveau met rollen en rechten.</li>
                </ul>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Toestemming & intrekken</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li><strong>Toestemming</strong>: je koppelt je bol store via OAuth/bol API. We gebruiken tokens om data te synchroniseren voor door jou ingeschakelde functies.</li>
                  <li><strong>Intrekken</strong>: trek je tokens in of verbreek je de koppeling, dan stopt synchronisatie direct.</li>
                  <li><strong>Verwijdering</strong>: verwijderen van historische sync‑data gebeurt alleen op verzoek via <Link href="mailto:info@baasy.nl">info@baasy.nl</Link> en is binnen 24 uur geregeld.</li>
                </ul>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Automatisering/AI</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li><strong>Geen modeltraining</strong>: we trainen geen modellen op klantdata.</li>
                  <li><strong>Geen geautomatiseerde besluitvorming</strong>: geen beslissingen met rechtsgevolgen uitsluitend op basis van geautomatiseerde verwerking.</li>
                </ul>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Support‑toegang</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li><strong>Tijdelijk</strong>: alleen op verzoek van de klant voor supportdoeleinden.</li>
                  <li><strong>Gelogd</strong>: alle toegang wordt gelogd met tijdstip en gebruiker.</li>
                  <li><strong>Minimale scope</strong>: zo beperkt als mogelijk en met automatische expiratie.</li>
                </ul>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Meerdere stores per workspace</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <p>
                  Store‑data blijft logisch gescheiden per workspace, ook als een gebruiker lid is van meerdere workspaces.
                </p>

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Jouw rechten</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li>Inzage, rectificatie, verwijdering, beperking en dataportabiliteit.</li>
                  <li>Stuur je verzoek naar <Link href="mailto:info@baasy.nl">info@baasy.nl</Link>. We reageren snel en handelen verwijderverzoeken binnen 24 uur af. Export verzoeken kunnen tot 5 werkdagen duren.</li>
                </ul>

                <p className="mt-6">
                  Meer informatie vind je in onze <Link href="/verwerkersovereenkomst">verwerkersovereenkomst</Link> en <Link href="/algemene-voorwaarden">algemene voorwaarden</Link>.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}


