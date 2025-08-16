import { Metadata } from "next";
import Link from "next/link";
import { BlogThemeHandler } from "@/components/blog-theme-handler";

export const metadata: Metadata = {
  title: "Privacy statement - Bolbaas",
  description:
    "Kort privacy statement van Bolbaas: jouw data blijft altijd van jou. Geen verkoop of eigen gebruik; we verwerken uitsluitend voor functies die jij gebruikt.",
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

                <h2 className="mt-10 text-2xl sm:text-3xl font-semibold">Jouw rechten</h2>
                <div className="mt-4 mb-6 h-px w-1/3 bg-gradient-to-r from-border via-border/50 to-transparent" />
                <ul>
                  <li>Inzage, rectificatie, verwijdering, beperking en dataportabiliteit.</li>
                  <li>Stuur je verzoek naar <Link href="mailto:info@bolbaas.nl">info@bolbaas.nl</Link>. We reageren snel en handelen verwijderverzoeken binnen 24 uur af. Export verzoeken kunnen tot 5 werkdagen duren.</li>
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


