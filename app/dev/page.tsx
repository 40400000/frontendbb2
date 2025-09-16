import type { Metadata } from "next";
import { Animatedbadge } from "@/components/animatedbadge";

export const metadata: Metadata = {
  title: "Dev | Design A",
};

export default function Page() {
  return (
    <main style={{ minHeight: "100dvh", display: "grid", placeItems: "center", background: "#0E0E0E" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexDirection: "column" }}>
        <Animatedbadge />
        <Animatedbadge label="POPULAR" />
      </div>
    </main>
  );
}


