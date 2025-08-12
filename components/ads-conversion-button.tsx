"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useCallback, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface AdsConversionButtonProps {
  href: string;
  children: React.ReactNode;
  sendTo?: string; // e.g. "AW-17372857270/XXXXXXXXXXX"
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
}

function navigateTo(href: string) {
  if (href.startsWith("http")) window.location.href = href;
  else window.location.assign(href);
}

export function AdsConversionButton(props: AdsConversionButtonProps) {
  const { href, children, sendTo, variant, size, className } = props;
  const clickedRef = useRef(false);

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // Prevent default navigation to ensure the conversion is sent
      event.preventDefault();
      if (clickedRef.current) return;
      clickedRef.current = true;

      const destination = href;
      const fallback = setTimeout(() => {
        console.warn("[AdsConversionButton] Navigating via fallback timeout", { destination });
        navigateTo(destination);
      }, 700);

      // Fire Google Ads conversion if configured
      const sendToKey = sendTo || process.env.NEXT_PUBLIC_GADS_SEND_TO;
      const hasGtag = typeof window !== "undefined" && typeof window.gtag === "function";
      console.info("[AdsConversionButton] Click detected", {
        destination,
        hasGtag,
        sendToKey: sendToKey || null,
      });

      if (sendToKey && typeof window !== "undefined" && typeof window.gtag === "function") {
        try {
          const payload = {
            send_to: String(sendToKey),
            event_callback: () => {
              console.info("[AdsConversionButton] Conversion callback fired, navigating", { destination });
              clearTimeout(fallback);
              navigateTo(destination);
            },
          } as const;
          console.info("[AdsConversionButton] Firing gtag conversion", { payload });
          const gtag = window.gtag; // narrowed by typeof guard
          gtag("event", "conversion", payload as unknown as Record<string, unknown>);
          return; // Let callback handle navigation
        } catch {
          console.error("[AdsConversionButton] Error firing gtag conversion; navigating directly");
          // fallback to direct navigation below
        }
      }

      // If no gtag or send_to not set, just navigate
      if (!sendToKey) console.warn("[AdsConversionButton] Missing send_to; set NEXT_PUBLIC_GADS_SEND_TO env var");
      if (!hasGtag) console.warn("[AdsConversionButton] window.gtag is not available (blocked or not loaded)");
      clearTimeout(fallback);
      navigateTo(destination);
    },
    [href, sendTo]
  );

  return (
    <Button onClick={onClick} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}


