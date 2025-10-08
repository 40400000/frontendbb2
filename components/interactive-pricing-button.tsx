'use client';

import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";
import { useCallback, useRef } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function navigateTo(href: string) {
  if (href.startsWith("http")) window.location.href = href;
  else window.location.assign(href);
}

interface InteractivePricingButtonProps {
  href: string;
  children: React.ReactNode;
  sendTo?: string;
}

export function InteractivePricingButton({ href, children, sendTo }: InteractivePricingButtonProps) {
  const clickedRef = useRef(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (!sendTo) {
        return;
      }
      
      event.preventDefault();
      if (clickedRef.current) return;
      clickedRef.current = true;

      const destination = href;
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
        } catch (e) {
          console.error("Error firing gtag conversion; navigating directly", e);
        }
      }

      clearTimeout(fallback);
      navigateTo(destination);
    },
    [href, sendTo]
  );
  
  return (
    <div className="mb-8">
      <Link 
        href={href} 
        onClick={handleClick}
        className="w-full bg-blue-600 text-white font-medium text-[15px] leading-[15px] py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 mb-2 block text-center relative group overflow-hidden"
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
          {children}
          <MdOutlineArrowOutward className="h-4 w-4" />
        </span>
        <span className="cursor-emoji absolute top-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm pointer-events-none">
          🚀
        </span>
      </Link>
      <p className="text-[12px] leading-[14px] font-normal text-gray-500 text-center">
        Geen betaalgegevens nodig
      </p>
    </div>
  );
}
