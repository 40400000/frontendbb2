import type { Metadata } from "next";
import { GratisBolFactuurMakenClient } from "./gratis-bol-factuur-maken-client";

export const metadata: Metadata = {
  title: "Gratis BTW factuur maken - Baasy",
  description: "Maak BTW facturen voor je Bol bestellingen. Vul de gegevens in en zie direct een live preview van je factuur.",
  openGraph: {
    title: "Gratis BTW factuur maken - Baasy",
    description: "Maak BTW facturen voor je Bol bestellingen. Vul de gegevens in en zie direct een live preview van je factuur.",
    images: [
      {
        url: 'https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Baasy Gratis Bol factuur maken Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Gratis BTW factuur maken - Baasy",
    description: "Maak BTW facturen voor je Bol bestellingen. Vul de gegevens in en zie direct een live preview van je factuur.",
    images: ['https://glrob7hsjras0ozc.public.blob.vercel-storage.com/baasy_opengraph.png'],
  },
};

export default function GratisBolFactuurMakenPage() {
  return <GratisBolFactuurMakenClient />;
}
