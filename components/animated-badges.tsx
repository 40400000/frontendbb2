"use client";

import { useState, useEffect } from "react";

interface BadgeData {
  id: string;
  text: string;
  color: string;
}

const badgeData: BadgeData[] = [
  { id: "1", text: "12M+ Keywords", color: "bg-blue-200" },
  { id: "2", text: "Real-time Data", color: "bg-green-200" },
  { id: "3", text: "AI Analysis", color: "bg-purple-200" },
  { id: "4", text: "Market Trends", color: "bg-orange-200" },
  { id: "5", text: "Competitor Intel", color: "bg-red-200" },
  { id: "6", text: "ROI Tracking", color: "bg-cyan-200" },
  { id: "7", text: "Auto Reports", color: "bg-pink-200" },
  { id: "8", text: "Smart Alerts", color: "bg-indigo-200" },
  { id: "9", text: "Data Export", color: "bg-yellow-200" },
  { id: "10", text: "API Access", color: "bg-teal-200" },
  { id: "11", text: "Custom Dashboards", color: "bg-rose-200" },
  { id: "12", text: "24/7 Monitoring", color: "bg-violet-200" },
];

export function AnimatedBadges() {
  const [isHovered, setIsHovered] = useState(false);

  // Create 4 rows with different data
  const row1 = badgeData.slice(0, 3);
  const row2 = badgeData.slice(3, 6);
  const row3 = badgeData.slice(6, 9);
  const row4 = badgeData.slice(9, 12);

  // Create enough duplicates to ensure seamless scrolling
  const createInfiniteArray = (arr: BadgeData[], copies: number = 8) => {
    const result = [];
    for (let i = 0; i < copies; i++) {
      result.push(...arr);
    }
    return result;
  };

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F6F5F3] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F6F5F3] to-transparent z-10 pointer-events-none" />
      
      {/* Row 1 - Right to Left */}
      <div className="flex mb-1 overflow-hidden">
        <div 
          className={`flex gap-4 whitespace-nowrap transition-all duration-1000 ease-out ${
            isHovered ? '' : 'animate-scroll-right'
          }`}
          style={{
            animationDuration: '40s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            width: 'max-content',
          }}
        >
          {createInfiniteArray(row1).map((badge, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-2 bg-[#FBFAF9] px-4 py-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex-shrink-0"
            >
              <div className={`w-3 h-3 rounded-lg ${badge.color}`} />
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Left to Right */}
      <div className="flex mb-1 overflow-hidden">
        <div 
          className={`flex gap-4 whitespace-nowrap transition-all duration-1000 ease-out ${
            isHovered ? '' : 'animate-scroll-left'
          }`}
          style={{
            animationDuration: '50s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            width: 'max-content',
          }}
        >
          {createInfiniteArray(row2).map((badge, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-2 bg-[#FBFAF9] px-4 py-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex-shrink-0"
            >
              <div className={`w-3 h-3 rounded-lg ${badge.color}`} />
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3 - Right to Left */}
      <div className="flex mb-1 overflow-hidden">
        <div 
          className={`flex gap-4 whitespace-nowrap transition-all duration-1000 ease-out ${
            isHovered ? '' : 'animate-scroll-right'
          }`}
          style={{
            animationDuration: '45s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            width: 'max-content',
          }}
        >
          {createInfiniteArray(row3).map((badge, index) => (
            <div
              key={`row3-${index}`}
              className="flex items-center gap-2 bg-[#FBFAF9] px-4 py-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex-shrink-0"
            >
              <div className={`w-3 h-3 rounded-lg ${badge.color}`} />
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 4 - Left to Right */}
      <div className="flex overflow-hidden">
        <div 
          className={`flex gap-4 whitespace-nowrap transition-all duration-1000 ease-out ${
            isHovered ? '' : 'animate-scroll-left'
          }`}
          style={{
            animationDuration: '35s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            width: 'max-content',
          }}
        >
          {createInfiniteArray(row4).map((badge, index) => (
            <div
              key={`row4-${index}`}
              className="flex items-center gap-2 bg-[#FBFAF9] px-4 py-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex-shrink-0"
            >
              <div className={`w-3 h-3 rounded-lg ${badge.color}`} />
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
