import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  description: "Bolbaas is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Verregaande data over miljoenen keywords en producten, miljarden datapunten.",
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
    description: "Bolbaas is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Verregaande data over miljoenen keywords en producten, miljarden datapunten.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ThemeHandler />
          <>
            <ConditionalBlogBanner />
            
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
      </body>
    </html>
  );
}
