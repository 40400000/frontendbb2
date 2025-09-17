"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Badge {
  text: string;
  color: string;
  trend: "up" | "down" | "stable";
  percentage?: number;
  bidPrice?: number;
}

const volumeBadges: Badge[] = [
  { text: "Matcha set", color: "bg-green-500", trend: "up", percentage: 15 },
  { text: "Elektrische muizenval", color: "bg-gray-500", trend: "up", percentage: 22 },
  { text: "Daglicht lamp", color: "bg-yellow-500", trend: "up", percentage: 18 },
  { text: "Drone", color: "bg-blue-500", trend: "down", percentage: 8 },
  { text: "Keukenblender", color: "bg-red-500", trend: "up", percentage: 12 },
  { text: "Yoga mat", color: "bg-purple-500", trend: "up", percentage: 9 },
  { text: "Airfryer", color: "bg-orange-500", trend: "up", percentage: 25 },
  { text: "Planten pot", color: "bg-green-500", trend: "stable" },
  { text: "Koffiezetapparaat", color: "bg-brown-500", trend: "up", percentage: 14 },
  { text: "Stofzuiger robot", color: "bg-gray-500", trend: "up", percentage: 20 },
  { text: "Boekenlegger", color: "bg-indigo-500", trend: "down", percentage: 3 },
  { text: "Bamboe bestek", color: "bg-green-500", trend: "up", percentage: 16 },
  { text: "Massage gun", color: "bg-pink-500", trend: "up", percentage: 11 },
  { text: "Kruidenrek", color: "bg-amber-500", trend: "stable" },
  { text: "Wandklok", color: "bg-slate-500", trend: "down", percentage: 5 },
  { text: "Kussensloop set", color: "bg-rose-500", trend: "up", percentage: 7 },
  { text: "Waterfles", color: "bg-cyan-500", trend: "up", percentage: 13 },
  { text: "Kaarsen", color: "bg-yellow-500", trend: "up", percentage: 19 },
  { text: "Schoonmaakdoekjes", color: "bg-blue-500", trend: "stable" },
  { text: "Kruidenpotjes", color: "bg-emerald-500", trend: "up", percentage: 6 },
  { text: "Handdoeken", color: "bg-teal-500", trend: "down", percentage: 2 },
  { text: "Kookpannen", color: "bg-slate-500", trend: "up", percentage: 10 },
  { text: "Bordspel", color: "bg-violet-500", trend: "up", percentage: 17 },
  { text: "Plantenvoeding", color: "bg-green-500", trend: "stable" },
  { text: "Koffiebonen", color: "bg-amber-500", trend: "up", percentage: 8 },
  { text: "Slaapmasker", color: "bg-purple-500", trend: "up", percentage: 21 },
  { text: "Kookboek", color: "bg-red-500", trend: "down", percentage: 4 },
  { text: "Bathmat", color: "bg-cyan-500", trend: "up", percentage: 9 },
  { text: "Kruidenplantjes", color: "bg-green-500", trend: "up", percentage: 14 },
  { text: "Koffie filter", color: "bg-brown-500", trend: "stable" },
  { text: "Wanddecoratie", color: "bg-pink-500", trend: "up", percentage: 12 },
  { text: "Keukenhanddoeken", color: "bg-orange-500", trend: "down", percentage: 1 },
];

const biddingBadges: Badge[] = [
  { text: "Matcha set", color: "bg-green-500", trend: "up", bidPrice: 1.20 },
  { text: "Elektrische muizenval", color: "bg-gray-500", trend: "down", bidPrice: 0.85 },
  { text: "Daglicht lamp", color: "bg-yellow-500", trend: "up", bidPrice: 2.10 },
  { text: "Drone", color: "bg-blue-500", trend: "down", bidPrice: 2.80 },
  { text: "Keukenblender", color: "bg-red-500", trend: "up", bidPrice: 1.45 },
  { text: "Yoga mat", color: "bg-purple-500", trend: "stable", bidPrice: 0.95 },
  { text: "Airfryer", color: "bg-orange-500", trend: "up", bidPrice: 2.50 },
  { text: "Planten pot", color: "bg-green-500", trend: "down", bidPrice: 0.70 },
  { text: "Koffiezetapparaat", color: "bg-brown-500", trend: "up", bidPrice: 1.80 },
  { text: "Stofzuiger robot", color: "bg-gray-500", trend: "up", bidPrice: 2.30 },
  { text: "Boekenlegger", color: "bg-indigo-500", trend: "down", bidPrice: 0.60 },
  { text: "Bamboe bestek", color: "bg-green-500", trend: "up", bidPrice: 1.15 },
  { text: "Massage gun", color: "bg-pink-500", trend: "stable", bidPrice: 1.90 },
  { text: "Kruidenrek", color: "bg-amber-500", trend: "down", bidPrice: 0.75 },
  { text: "Wandklok", color: "bg-slate-500", trend: "up", bidPrice: 1.35 },
  { text: "Kussensloop set", color: "bg-rose-500", trend: "up", bidPrice: 0.90 },
  { text: "Waterfles", color: "bg-cyan-500", trend: "down", bidPrice: 1.05 },
  { text: "Kaarsen", color: "bg-yellow-500", trend: "up", bidPrice: 1.25 },
  { text: "Schoonmaakdoekjes", color: "bg-blue-500", trend: "stable", bidPrice: 0.80 },
  { text: "Kruidenpotjes", color: "bg-emerald-500", trend: "up", bidPrice: 1.10 },
  { text: "Handdoeken", color: "bg-teal-500", trend: "down", bidPrice: 0.65 },
  { text: "Kookpannen", color: "bg-slate-500", trend: "up", bidPrice: 1.55 },
  { text: "Bordspel", color: "bg-violet-500", trend: "up", bidPrice: 1.40 },
  { text: "Plantenvoeding", color: "bg-green-500", trend: "stable", bidPrice: 0.85 },
  { text: "Koffiebonen", color: "bg-amber-500", trend: "up", bidPrice: 1.30 },
  { text: "Slaapmasker", color: "bg-purple-500", trend: "up", bidPrice: 1.65 },
  { text: "Kookboek", color: "bg-red-500", trend: "down", bidPrice: 0.95 },
  { text: "Bathmat", color: "bg-cyan-500", trend: "up", bidPrice: 1.20 },
  { text: "Kruidenplantjes", color: "bg-green-500", trend: "up", bidPrice: 1.50 },
  { text: "Koffie filter", color: "bg-brown-500", trend: "stable", bidPrice: 0.70 },
  { text: "Wanddecoratie", color: "bg-pink-500", trend: "up", bidPrice: 1.75 },
  { text: "Keukenhanddoeken", color: "bg-orange-500", trend: "down", bidPrice: 0.60 },
];

const BadgeRow = ({ 
  badges, 
  direction, 
  speed = 50
}: { 
  badges: Badge[]; 
  direction: "left" | "right"; 
  speed?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#F6F5F3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#F6F5F3] to-transparent z-10 pointer-events-none" />
      
        <div 
        className="flex gap-1.5 py-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
          animationPlayState: isHovered ? 'paused' : 'running',
          transition: 'animation-play-state 0.5s ease-out'
        }}
      >
        {/* Duplicate badges for seamless loop */}
        {[...badges, ...badges].map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-[#FBFAF9] px-4 py-3 rounded-xl border border-gray-200 whitespace-nowrap flex-shrink-0"
          >
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {badge.trend === "up" && (
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  {badge.percentage && (
                    <span className="text-xs font-medium text-green-600">+{badge.percentage}%</span>
                  )}
                  {badge.bidPrice && (
                    <span className="text-xs font-medium text-green-600">€{badge.bidPrice}</span>
                  )}
                </div>
              )}
              {badge.trend === "down" && (
                <div className="flex items-center gap-1">
                  <TrendingDown className="w-3 h-3 text-red-600" />
                  {badge.percentage && (
                    <span className="text-xs font-medium text-red-600">-{badge.percentage}%</span>
                  )}
                  {badge.bidPrice && (
                    <span className="text-xs font-medium text-red-600">€{badge.bidPrice}</span>
                  )}
                </div>
              )}
              {badge.trend === "stable" && (
                <div className="flex items-center gap-1">
                  <Minus className="w-3 h-3 text-gray-500" />
                  {badge.percentage === undefined && badge.bidPrice && (
                    <span className="text-xs font-medium text-gray-500">€{badge.bidPrice}</span>
                  )}
                  {badge.percentage !== undefined && (
                    <span className="text-xs font-medium text-gray-500">Stable</span>
                  )}
                </div>
              )}
            </div>
            <span className="text-sm font-medium text-gray-800">
              {badge.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AnimatedMovingBadges() {
  // Combine all badges and distribute evenly across 4 rows
  const allBadges = [...volumeBadges, ...biddingBadges];
  const badgesPerRow = Math.ceil(allBadges.length / 4);
  
  const row1 = allBadges.slice(0, badgesPerRow);
  const row2 = allBadges.slice(badgesPerRow, badgesPerRow * 2);
  const row3 = allBadges.slice(badgesPerRow * 2, badgesPerRow * 3);
  const row4 = allBadges.slice(badgesPerRow * 3, badgesPerRow * 4);

  return (
    <div className="w-full space-y-1">
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      
      <BadgeRow badges={row1} direction="left" speed={20} />
      <BadgeRow badges={row2} direction="right" speed={15} />
      <BadgeRow badges={row3} direction="left" speed={25} />
      <BadgeRow badges={row4} direction="right" speed={27} />
    </div>
  );
}
