"use client";

import { useState } from "react";
import Image from "next/image";

interface ComparisonAccordionItemProps {
  title: string;
  bolbaasContent: string;
  bolmateContent: string;
}

export function ComparisonAccordionItem({ 
  title, 
  bolbaasContent, 
  bolmateContent 
}: ComparisonAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#EAEAE8]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left py-4 md:py-6 cursor-pointer hover:opacity-80 transition-opacity duration-200"
      >
        <h3 className="text-base md:text-lg lg:text-xl font-normal text-[#111111] pr-4">
          {title}
        </h3>
        <div className="text-2xl font-light text-[#111111] transition-transform duration-200">
          {isOpen ? '−' : '+'}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[600px] opacity-100 pb-3 md:pb-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Bolbaas Card */}
          <div className="bg-white/50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <Image src="/iconnavbar-mode2.png" alt="Bolbaas" width={20} height={20} className="md:w-6 md:h-6 invert" />
              <h4 className="text-sm md:text-base font-medium text-[#111111]">Bolbaas</h4>
            </div>
            <p className="text-[#111111]/70 text-xs md:text-sm leading-relaxed">
              {bolbaasContent}
            </p>
          </div>

          {/* Bolmate Card */}
          <div className="bg-white/50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <Image src="/BOLMATELOGO.png" alt="Bolmate" width={20} height={20} className="md:w-6 md:h-6" />
              <h4 className="text-sm md:text-base font-medium text-[#111111]">Bolmate</h4>
            </div>
            <p className="text-[#111111]/70 text-xs md:text-sm leading-relaxed">
              {bolmateContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
