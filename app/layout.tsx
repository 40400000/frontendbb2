import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist_Mono, Inter } from "next/font/google";
import { NavigationMenuDemo } from "@/components/navigation-menu-demo";
import { Button } from "@/components/ui/button";
import PromotionBanner from '@/components/promotion-banner';
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ConditionalBlogBanner } from "@/components/conditional-blog-banner";
import { Analytics } from "@vercel/analytics/next";
import { ThemeHandler } from '@/components/theme-handler';
import Script from "next/script";
import { NavbarB } from "@/components/navbar-b";
import { FooterDark } from "@/components/footer-dark";
import { HelpdeskWidget } from "@/components/helpdesk-widget";

const labilGrotesk = localFont({
  src: "../public/LabilGroteskVariable.otf",
  style: "normal",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bolbaas.nl'), // Replace with your actual domain in production
  title: {
    default: "Bolbaas - data en automatisering voor bol partners",
    template: "%s",
  },
  description: "AI software voor bol.com partners: automatiseer emails & facturen, 12M+ keyword database, product tracking. Verhoog omzet met data-inzichten en store automatisering. Probeer 1 maand gratis.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: "Bolbaas - data en automatisering voor bol partners",
      template: "%s",
    },
    description: "Bolbaas is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Verregaande data over miljoenen keywords en producten, miljarden datapunten.",
    url: new URL('https://bolbaas.nl'), // Should match metadataBase or be the canonical URL
    siteName: "Bolbaas",
    images: [
      {
        url: 'https://bolbaas.nl/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Bolbaas - AI software voor bol partners',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: "Bolbaas - data en automatisering voor bol partners",
      template: "%s - Bolbaas",
    },
    description: "Bolbaas is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Verregaande data over miljoenen keywords en producten, miljarden datapunten.",
    images: ['https://bolbaas.nl/icon-512x512.png'], // Must be an absolute URL
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    title: 'Bolbaas',
    capable: true,
    statusBarStyle: 'default',
  },
  alternates: {
    canonical: 'https://bolbaas.nl/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
      </head>
      <body className={`${labilGrotesk.className} ${geistMono.variable} ${inter.variable} font-sans antialiased overflow-x-hidden bg-[#F6F5F3] text-[#111111]  dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ThemeHandler />
          <NavbarB />
          <main>
            {children}
          </main>
          <FooterDark />
          <HelpdeskWidget />
        </ThemeProvider>
        <Analytics />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17372857270"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17372857270', {
                cookie_domain: 'bolbaas.nl',
              });
              gtag('config', 'G-PM71V62V1Z');
            `,
          }}
        />
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "svbgppdqo5");`,
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Bolbaas",
                url: "https://bolbaas.nl/",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://bolbaas.nl/features/tools#bolbaas-database?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Bolbaas",
                url: "https://bolbaas.nl/",
                logo: "https://bolbaas.nl/icon-512x512.png",
                sameAs: [],
                description: "AI-gedreven software voor bol.com partners: automatisering, keyword research, product tracking en store management tools.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "NL"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Bolbaas",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "12.00",
                  priceCurrency: "EUR",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock"
                },
                description: "Complete automatiseringsoplossing voor bol.com partners met AI-tools, keyword database en store management.",
                featureList: [
                  "Email automatisering",
                  "BTW factuur automatisering", 
                  "12M+ keyword database",
                  "Product tracking",
                  "Ranking AI",
                  "Custom dashboards",
                  "Sales voorspellingen"
                ]
              }
            ]),
          }}
        />
      </body>
    </html>
  );
}
