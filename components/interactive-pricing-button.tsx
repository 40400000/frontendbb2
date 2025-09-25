'use client';

import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";

interface InteractivePricingButtonProps {
  href: string;
  children: React.ReactNode;
}

export function InteractivePricingButton({ href, children }: InteractivePricingButtonProps) {
  return (
    <Link 
      href={href} 
      className="w-full bg-white text-[#1A1919] font-medium text-[15px] leading-[15px] py-4 px-6 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-105 mb-8 block text-center relative group overflow-hidden"
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
  );
}
