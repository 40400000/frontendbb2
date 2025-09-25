import type { Metadata } from "next";
import { GratisBolFactuurMakenClient } from "./gratis-bol-factuur-maken-client";

export const metadata: Metadata = {
  title: "Gratis BTW factuur maken - Bolbaas",
  description: "Maak professionele facturen voor je Bol.com verkopen. Vul de gegevens in en zie direct een live preview van je factuur.",
  openGraph: {
    title: "Gratis BTW factuur maken - Bolbaas",
    description: "Maak professionele facturen voor je Bol.com verkopen. Vul de gegevens in en zie direct een live preview van je factuur.",
    images: [
      {
        url: 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png',
        width: 1200,
        height: 630,
        alt: 'Bolbaas Gratis Bol factuur maken Open Graph Image',
      },
    ],
  },
  twitter: {
    title: "Gratis BTW factuur maken - Bolbaas",
    description: "Maak professionele facturen voor je Bol.com verkopen. Vul de gegevens in en zie direct een live preview van je factuur.",
    images: ['https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/openGraphImage-tTIUrEjUXMWiho6PBlQhwBGhEnD6Zg.png'],
  },
};

export default function GratisBolFactuurMakenPage() {
  return <GratisBolFactuurMakenClient />;
}
