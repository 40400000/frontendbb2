"use client";

import { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

// Generate sample data for 12 weeks (4 weeks historical + 8 weeks forecast)
const generateSalesForecastData = () => {
  const data = [];
  const baseDate = new Date();
  
  // 1. Generate realistic weekly sales data
  const weeklySales = [];
  for (let i = -4; i <= 7; i++) {
    let sales;
    if (i <= 0) { // Historical weekly sales: relatively stable
      sales = 35 + (Math.random() - 0.5) * 10;
    } else { // Forecasted weekly sales: with a clear growth trend
      sales = 35 + (i * 3) + (Math.random() - 0.5) * 10;
    }
    weeklySales.push(Math.round(Math.max(20, sales)));
  }

  // 2. Calculate cumulative sales from weekly sales
  const cumulativeSalesData = [];
  let cumulativeTotal = 500; // Start with a base of 500 sales before week 1
  for (const sales of weeklySales) {
    cumulativeTotal += sales;
    cumulativeSalesData.push(cumulativeTotal);
  }
  
  // 3. Set stock to be zero at week 8. This is the cumulative sales value at that point.
  // Week 8 corresponds to index 7 in our 0-indexed arrays (i = 3).
  const stockZeroPoint = cumulativeSalesData[7];

  // 4. Build the final dataset for the chart
  for (let i = -4; i <= 7; i++) {
    const date = new Date();
    date.setDate(baseDate.getDate() + (i * 7));
    
    const weekNumber = i + 5; // Week 1-12 for display
    const currentCumulativeSales = cumulativeSalesData[i + 4];
    
    // Stock is the inverse of cumulative sales, calibrated to cross zero at week 8.
    const voorraad = stockZeroPoint - currentCumulativeSales;
    
    data.push({
      week: `Week ${weekNumber}`,
      weekNumber: weekNumber,
      historicalSales: i <= 0 ? currentCumulativeSales : undefined,
      forecastSales: i >= 0 ? currentCumulativeSales : undefined,
      historicalVoorraad: i <= 0 ? Math.round(voorraad) : undefined,
      forecastVoorraad: i >= 0 ? Math.round(voorraad) : undefined,
      date: date.toISOString().split('T')[0]
    });
  }
  
  return data;
};

const data = generateSalesForecastData();

export function SalesForecastChart() {
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
        <span className="text-xs text-gray-400 tracking-wider">VERKOOPPROGNOSE 'DRAADLOZE HOOFDTELEFOON'</span>
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
                dataKey="weekNumber"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#71717a', fontSize: 12 }}
                interval={1}
                tickFormatter={(value) => `W${value}`}
              />
              <YAxis 
                domain={[-250, 1000]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#71717a', fontSize: 12 }}
                tickFormatter={(value) => `${value}`}
              />
              
              {/* Historical Sales line (solid blue) */}
              <Line 
                type="monotone" 
                dataKey="historicalSales" 
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }}
                connectNulls
              />
              
              {/* Forecast Sales line (dotted blue) */}
              <Line 
                type="monotone" 
                dataKey="forecastSales" 
                stroke="#3b82f6"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                activeDot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }}
                connectNulls
              />

              {/* Historical Stock line (solid zinc) */}
              <Line 
                  type="monotone" 
                  dataKey="historicalVoorraad" 
                  stroke="#71717a"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: '#71717a', strokeWidth: 0 }}
                  connectNulls
              />

              {/* Forecast Stock line (dotted zinc) */}
              <Line 
                  type="monotone" 
                  dataKey="forecastVoorraad" 
                  stroke="#71717a"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={{ r: 4, fill: '#71717a', strokeWidth: 0 }}
                  connectNulls
              />
              
              {/* Reference line to separate historical from forecast */}
              <ReferenceLine 
                x={5} 
                stroke="#71717a"
                strokeDasharray="2 2"
                strokeWidth={1}
                label={{ 
                  value: "Vandaag", 
                  position: "insideTopLeft",
                  style: { 
                    fill: '#71717a', 
                    fontSize: '11px',
                    fontWeight: '400'
                  }
                }}
              />
              
              {/* Voorraad op (out of stock) reference line */}
              <ReferenceLine 
                x={8} 
                stroke="#f59e0b"
                strokeDasharray="3 3"
                strokeWidth={1}
                label={{ 
                  value: "Voorraad op", 
                  position: "insideTopLeft",
                  style: { 
                    fill: '#f59e0b', 
                    fontSize: '11px',
                    fontWeight: '400'
                  }
                }}
              />

              {/* Zero line for voorraad */}
              <ReferenceLine 
                y={0} 
                stroke="#374151"
                strokeWidth={1}
                opacity={0.5}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      
      {/* Chart legend */}
      <div className="flex items-center justify-end mt-2 text-xs text-zinc-500 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-blue-500 mr-2"></div>
          <span>Verkopen</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-zinc-500 mr-2"></div>
          <span>Voorraad</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-0.5 border-t border-dashed border-zinc-500 mr-2"></div>
          <span>Voorspelling</span>
        </div>
      </div>
    </div>
  );
} 