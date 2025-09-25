"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
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
  const [email, setEmail] = useState("");
  const router = useRouter();
  const clickedRef = useRef(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    const encodedEmail = encodeURIComponent(email);
    const destination = `${redirectUrl}?email=${encodedEmail}`;

    if (!sendTo) {
      router.push(destination);
      return;
    }

    if (clickedRef.current) return;
    clickedRef.current = true;
    
    const gtag = window.gtag;
    const hasGtag = typeof gtag === "function";

    const navigateTo = () => router.push(destination);

    const fallback = setTimeout(() => {
      navigateTo();
    }, 700);

    if (hasGtag) {
      try {
        const payload = {
          send_to: sendTo,
          event_callback: () => {
            clearTimeout(fallback);
            navigateTo();
          },
        } as const;
        gtag("event", "conversion", payload as unknown as Record<string, unknown>);
        return;
      } catch (err) {
        console.error("Error firing gtag conversion; navigating directly", err);
      }
    }

    clearTimeout(fallback);
    navigateTo();
  }, [email, redirectUrl, router, sendTo]);

  const alignmentClass = align === "left" ? "max-w-md" : "mx-auto max-w-md";
  const testimonialAlignmentClass = align === "left" ? "justify-start" : "justify-center";

  return (
    <div>
      <form 
        onSubmit={handleSubmit} 
        className={`${alignmentClass} flex flex-col md:flex-row items-stretch md:items-center rounded-2xl border border-[#111111]/8 p-1.5 bg-white transition-all focus-within:border-[#111111]/20 ${className}`}
      >
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow h-10 border-none bg-transparent px-4 placeholder:text-[#111111]/60 focus:outline-none text-[#111111] mb-2 md:mb-0"
        />
        <Button 
          type="submit"
          className="h-10 rounded-2xl bg-[#111111] px-4 text-white hover:bg-black/80 text-sm font-medium cursor-pointer w-full md:w-auto"
        >
          {buttonText}
        </Button>
      </form>
      
        {showTestimonial && (
          <div className={`mt-4 flex flex-col md:flex-row items-center ${testimonialAlignmentClass} gap-2 md:gap-2 text-sm opacity-70`}>
          <div className="flex items-center gap-2">
            <FaGoogle className="h-4 w-4 text-[#111111]" />
            <div className="flex items-center gap-0.5">
              <IoStar className="h-4 w-4 text-[#111111]" />
              <IoStar className="h-4 w-4 text-[#111111]" />
              <IoStar className="h-4 w-4 text-[#111111]" />
              <IoStar className="h-4 w-4 text-[#111111]" />
              <IoStar className="h-4 w-4 text-[#111111]" />
            </div>
          </div>
          <span className="text-[#111111]/30 hidden md:inline">|</span>
          <span className="text-[#111111]">Tevreden partners</span>
        </div>
      )}
    </div>
  );
}