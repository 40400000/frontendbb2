"use client";

import { useCallback, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function navigateTo(href: string) {
  if (href.startsWith("http")) window.location.href = href;
  else window.location.assign(href);
}

interface EmailSignupFormProps {
  buttonText?: string;
  placeholder?: string;
  redirectUrl?: string;
  className?: string;
  showTestimonial?: boolean;
  align?: "left" | "center";
  sendTo?: string;
}

export function EmailSignupForm({ 
  buttonText = "Gratis proberen",
  placeholder = "Vul je email in",
  redirectUrl = "https://app.bolbaas.nl/registreren",
  className = "",
  showTestimonial = false,
  align = "center",
  sendTo
}: EmailSignupFormProps) {
  const clickedRef = useRef(false);

  const handleClick = useCallback(
    (destination: string) => {
      if (!sendTo) {
        navigateTo(destination);
        return;
      }

      if (clickedRef.current) return;
      clickedRef.current = true;

      const gtag = window.gtag;
      const hasGtag = typeof gtag === "function";

      const fallback = setTimeout(() => {
        navigateTo(destination);
      }, 700);

      if (hasGtag) {
        try {
          const payload = {
            send_to: sendTo,
            event_callback: () => {
              clearTimeout(fallback);
              navigateTo(destination);
            },
          } as const;
          gtag("event", "conversion", payload as unknown as Record<string, unknown>);
          return;
        } catch (err) {
          console.error("Error firing gtag conversion; navigating directly", err);
        }
      }

      clearTimeout(fallback);
      navigateTo(destination);
    },
    [sendTo]
  );

  const alignmentClass = align === "left" ? "max-w-md" : "mx-auto max-w-md";
  const testimonialAlignmentClass = align === "left" ? "justify-start" : "justify-center";

  return (
    <div>
      <div className={`${alignmentClass} flex flex-col md:flex-row items-stretch md:items-center gap-3 ${className}`}>
        {/* Primary Button - Start gratis proef periode */}
        <button
          onClick={() => handleClick(redirectUrl)}
          className="w-full md:w-2/3 bg-blue-600 text-white font-medium text-[15px] leading-[15px] py-4 px-12 rounded-2xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 relative group overflow-hidden whitespace-nowrap cursor-pointer"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const emoji = e.currentTarget.querySelector('.cursor-emoji') as HTMLElement;
            if (emoji) {
              emoji.style.left = `${x - 8}px`;
              emoji.style.top = `${y - 8}px`;
            }
          }}
          onMouseLeave={(e) => {
            const emoji = e.currentTarget.querySelector('.cursor-emoji') as HTMLElement;
            if (emoji) {
              emoji.style.left = '';
              emoji.style.top = '';
            }
          }}
        >
          <span className="flex items-center justify-center gap-2">
            Start gratis proefperiode
            <MdOutlineArrowOutward className="h-4 w-4" />
          </span>
          <span className="cursor-emoji absolute top-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pointer-events-none">
            🚀
          </span>
        </button>

        {/* Secondary Button - Google Sign Up */}
        <button
          onClick={() => handleClick(redirectUrl)}
          className="w-full md:w-1/3 bg-white text-[#111111] font-medium text-[15px] leading-[15px] py-4 px-4 rounded-2xl border border-[#111111]/20 hover:border-[#111111]/40 transition-all duration-200 whitespace-nowrap cursor-pointer"
        >
          <span className="flex items-center justify-center gap-2">
            <FaGoogle className="h-4 w-4" />
            Met Google
          </span>
        </button>
      </div>
      
      <div className={`mt-4 flex flex-col md:flex-row items-center ${testimonialAlignmentClass} gap-2 md:gap-3 text-sm opacity-70`}>
        <span className="text-[#111111] whitespace-nowrap">Stopt vanzelf</span>
        <span className="hidden md:inline text-[#111111]">•</span>
        <span className="text-[#111111] whitespace-nowrap">Geen technische kennis nodig</span>
        <span className="hidden md:inline text-[#111111]">•</span>
        <span className="text-[#111111] whitespace-nowrap">Geen betaalmethode</span>
      </div>
    </div>
  );
}