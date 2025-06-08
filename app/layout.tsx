import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/navigation-menu-demo";
import { Button } from "@/components/ui/button";
import PromotionBanner from '@/components/promotion-banner';
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { cookies, headers } from 'next/headers';
import PasswordGate from '@/components/password-gate';
import { ALLOWED_PASSWORDS } from '@/lib/passwords';
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bolbaas.nl'), // Replace with your actual domain in production
  title: {
    default: "Bolbaas - data en automatisering voor bol partners",
    template: "%s",
  },
  description: "Bolbaas is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Vergaande data over miljoenen keywords en producten, miljarden datapunten.",
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
      template: "%s - Bolbaas",
    },
    description: "Bolbaas is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Vergaande data over miljoenen keywords en producten, miljarden datapunten.",
    url: new URL('https://bolbaas.nl'), // Should match metadataBase or be the canonical URL
    siteName: "Bolbaas",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200, // Provide actual width if known
        height: 630, // Provide actual height if known
        alt: 'Bolbaas Open Graph Image',
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
    description: "Bolbaas is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Vergaande data over miljoenen keywords en producten, miljarden datapunten.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'], // Must be an absolute URL
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check password cookie
  const cookieStore = await cookies();
  const passwordCookie = cookieStore.get('site-password')?.value;
  let isAuthorized = Boolean(
    passwordCookie &&
    ALLOWED_PASSWORDS.map(p => p.toLowerCase()).includes(passwordCookie.toLowerCase())
  );

  // Check for crawler User-Agent
  if (!isAuthorized) {
    const headersList = await headers();
    const userAgent = headersList.get('user-agent')?.toLowerCase() || '';
    const knownCrawlers = [
      'googlebot', 
      'bingbot', 
      'yahoo! slurp', 
      'duckduckbot', 
      'baiduspider', 
      'yandexbot',
      'sogou',
      'exabot',
      'facebot',
      'facebookexternalhit',
      'linkedinbot',
      'twitterbot',
      'pinterestbot',
      'applebot',
      'semrushbot',
      'ahrefsbot',
      'seobilitybot',
      'yoozbot',
      'seobilitybot',
      'adsbot-google',
      'google-adsbot',
      'google-adsbot-mobile',
      'google-adsbot-mobile-home',
      'google-adsbot-mobile-home-page',
      'google-adsbot-mobile-home-page-page',
      'google-adsbot-mobile-home-page-page-page',
      // Add more known crawler user agent substrings here if needed
    ];
    const isCrawler = knownCrawlers.some(crawler => userAgent.includes(crawler));
    if (isCrawler) {
      isAuthorized = true;
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      {!isAuthorized && (
        <head>
          <link rel="icon" href="/icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
        </head>
      )}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* If not authorized, show password gate */}
          {!isAuthorized ? (
            <PasswordGate />
          ) : (
            <>
              <header id="main-header" className="sticky top-0 z-50 w-full bg-background text-white">
                <div className="container mx-auto flex h-17 items-center px-4"> 
                  <div className="flex items-center w-full">
                    <NavigationMenuDemo />
                  </div>
                </div>
              </header>
              
              <main className="container mx-auto pt-0 overflow-x-hidden sm:overflow-x-visible px-4 sm:px-0">
              <Breadcrumbs />
                
                {children}
              </main>
              <div className="container mx-auto px-4 sm:px-0">
                <Footer />
              </div>
            </>
          )}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
