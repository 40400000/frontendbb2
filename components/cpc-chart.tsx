"use client";

import { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

// Generate sample data for 30 days with downward trend
const generateCPCData = () => {
  const data = [];
  const baseDate = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - i);
    
    // Generate interesting CPC pattern: fast decline, level off, then uptick
    const progress = (29 - i) / 29; // Progress from 0 to 1
    let trendCPC;
    
    if (progress < 0.4) {
      // First 40%: Fast decline from 1.15 to 0.70
      const localProgress = progress / 0.4;
      trendCPC = 1.15 - (1.15 - 0.70) * localProgress;
    } else if (progress < 0.7) {
      // Middle 30%: Gradual decline from 0.70 to 0.62
      const localProgress = (progress - 0.4) / 0.3;
      trendCPC = 0.70 - (0.70 - 0.62) * localProgress;
    } else {
      // Last 30%: Uptick from 0.62 to 0.75 (clear of reference line)
      const localProgress = (progress - 0.7) / 0.3;
      trendCPC = 0.62 + (0.75 - 0.62) * localProgress;
    }
    
    // Add some random variation but keep the pattern
    const variation = (Math.random() - 0.5) * 0.04; // ±€0.02 variation
    const cpc = Math.max(0.20, Math.min(1.20, trendCPC + variation));
    
    data.push({
      date: date.toISOString().split('T')[0],
      day: date.getDate(),
      dayIndex: 29 - i, // 0 to 29 for consistent spacing
      cpc: parseFloat(cpc.toFixed(2))
    });
  }
  
  return data;
};

const data = generateCPCData();

export function CPCChart() {
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

  return (
    <div ref={chartRef} className="bg-black py-4 border-border">
      {/* Chart tag */}
      <div className="mb-4">
        <span className="text-xs text-gray-400 tracking-wider">BIEDINGEN VOOR 'DRONE'</span>
      </div>
      <div className="h-64">
        {isInView ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <XAxis 
                dataKey="dayIndex"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#71717a', fontSize: 12 }}
                interval={4} // Show every 5th day
                tickFormatter={(value) => {
                  const dataPoint = data[value];
                  return dataPoint ? `${dataPoint.day}` : '';
                }}
              />
              <YAxis 
                domain={[0.20, 1.20]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#71717a', fontSize: 12 }}
                tickFormatter={(value) => `€${value.toFixed(2)}`}
              />
              <Line 
                type="monotone" 
                dataKey="cpc" 
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }}
              />
              
              {/* Reference lines */}
              <ReferenceLine 
                y={0.95} 
                stroke="#71717a"
                strokeDasharray="3 3"
                strokeWidth={1}
                label={{ 
                  value: "Advies bieding Bol", 
                  position: "insideTopRight",
                  style: { 
                    fill: '#71717a', 
                    fontSize: '11px',
                    fontWeight: '400'
                  }
                }}
              />
              
              <ReferenceLine 
                y={0.65} 
                stroke="#22c55e"
                strokeDasharray="3 3"
                strokeWidth={1}
                label={{ 
                  value: "Winnend bod", 
                  position: "insideTopRight",
                  style: { 
                    fill: '#22c55e', 
                    fontSize: '11px',
                    fontWeight: '400'
                  }
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      
      {/* Chart legend */}
      <div className="flex items-center justify-end mt-2 text-xs text-zinc-500">
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-blue-500 mr-2"></div>
          <span>Gemiddelde CPC (€)</span>
        </div>
      </div>
    </div>
  );
} 