"use client";

import { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

// Generate sample data for revenue comparison over 12 months
const generateRevenueData = () => {
  const data = [];
  const baseDate = new Date();
  baseDate.setMonth(baseDate.getMonth() - 11); // Start 11 months ago
  
  for (let i = 0; i < 12; i++) {
    const date = new Date(baseDate);
    date.setMonth(date.getMonth() + i);
    
    // Revenue without Baasy: modest growth from €8k to €12k
    const monthProgress = i / 11;
    const baseRevenue = 8000 + (4000 * monthProgress); // €8k to €12k
    const withoutBaasyVariation = (Math.random() - 0.5) * 1000; // ±€500 variation
    const revenueWithoutBaasy = Math.max(6000, baseRevenue + withoutBaasyVariation);
    
    // Revenue with Baasy: accelerated growth from €8k
    let revenueWithBaasy;
    if (i < 3) {
      // First 3 months: similar to without Baasy (implementation period)
      revenueWithBaasy = revenueWithoutBaasy + Math.random() * 500;
    } else {
      // After month 3: exponential growth
      const growthMonths = i - 2;
      const exponentialGrowth = Math.pow(1.18, growthMonths); // 18% monthly growth
      revenueWithBaasy = 8000 * exponentialGrowth;
      const variation = (Math.random() - 0.5) * 1500; // ±€750 variation
      revenueWithBaasy = Math.max(8000, revenueWithBaasy + variation);
    }
    
    data.push({
      month: date.toLocaleDateString('nl-NL', { month: 'short' }),
      monthIndex: i,
      revenueWithoutBaasy: Math.round(revenueWithoutBaasy),
      revenueWithBaasy: Math.round(revenueWithBaasy)
    });
  }
  
  return data;
};

const data = generateRevenueData();
const maxRevenue = Math.max(...data.map(d => d.revenueWithBaasy));
const yAxisMax = Math.ceil(maxRevenue / 5000) * 5000; // Round up to nearest 5k

const lastDataPoint = data[data.length - 1];

export function RevenueComparisonChart() {
  const [isInView, setIsInView] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (chartRef.current) {
            observer.unobserve(chartRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const formatRevenue = (value: number) => {
    if (value >= 1000) {
      return `€${(value / 1000).toFixed(0)}k`;
    }
    return `€${value}`;
  };

  return (
    <div ref={chartRef} className="bg-black py-6 px-4 rounded-lg border-t border-r border-border">
      {/* Chart tag */}
      <div className="mb-4">
        <span className="text-xs text-gray-400 tracking-wider">MAANDELIJKSE OMZET VERGELIJKING</span>
      </div>
      <div className="h-80 relative">
        {isInView ? (
          <>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: -20,
                  bottom: 20,
                }}
              >
                <XAxis 
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#71717a', fontSize: 12 }}
                  interval={0}
                />
                <YAxis 
                  domain={[0, yAxisMax]}
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                />
                
                {/* Revenue without Baasy - Grey line */}
                <Line 
                  type="monotone" 
                  dataKey="revenueWithoutBaasy" 
                  stroke="#71717a"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: '#71717a', strokeWidth: 0 }}
                />
                
                {/* Revenue with Baasy - Blue line */}
                <Line 
                  type="monotone" 
                  dataKey="revenueWithBaasy" 
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }}
                />
                
                <ReferenceLine 
                  y={lastDataPoint.revenueWithBaasy} 
                  stroke="#3b82f6"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                  label={{ 
                    value: "Met Baasy", 
                    position: "insideTopRight",
                    style: { 
                      fill: '#3b82f6', 
                      fontSize: '11px',
                      fontWeight: '400'
                    }
                  }}
                />
              
                <ReferenceLine 
                  y={lastDataPoint.revenueWithoutBaasy} 
                  stroke="#71717a"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                  label={{ 
                    value: "Zonder Baasy", 
                    position: "insideTopRight",
                    style: { 
                      fill: '#71717a', 
                      fontSize: '11px',
                      fontWeight: '400'
                    }
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </>
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
    </div>
  );
} 