"use client";

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

// Generate sample data for ranking performance with dramatic improvement
const generateRankingData = () => {
  const data = [];
  const baseDate = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - i);
    
    const progress = (29 - i) / 29; // Progress from 0 to 1
    let ranking;
    
    if (progress < 0.6) {
      // First 60%: Poor rankings (high numbers = bad ranking)
      const baseRanking = 45; // Start at rank 45
      const endRanking = 38; // Slowly improve to rank 38
      const localProgress = progress / 0.6;
      ranking = baseRanking - (baseRanking - endRanking) * localProgress;
    } else {
      // Last 40%: Ranking AI kicks in - dramatic improvement
      const startRanking = 38; // Start from rank 38
      const endRanking = 3; // End at rank 3 (top positions)
      const localProgress = (progress - 0.6) / 0.4;
      // Use exponential curve for dramatic improvement
      const exponentialProgress = Math.pow(localProgress, 0.5);
      ranking = startRanking - (startRanking - endRanking) * exponentialProgress;
    }
    
    // Add small random variation
    const variation = (Math.random() - 0.5) * 2;
    const finalRanking = Math.max(1, Math.min(50, ranking + variation));
    
    data.push({
      date: date.toISOString().split('T')[0],
      day: date.getDate(),
      dayIndex: 29 - i,
      ranking: Math.round(finalRanking)
    });
  }
  
  return data;
};

const data = generateRankingData();

export function RankingChart() {
  return (
    <div className="bg-black">
      {/* Chart tag */}
      <div className="mb-4">
        <span className="text-xs text-gray-400 tracking-wider">PRODUCT RANKING VOOR 'DRONE CAMERA'</span>
      </div>
      <div className="h-64">
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
              domain={[1, 50]}
              reversed={true} // Lower numbers (better rankings) at top
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#71717a', fontSize: 12 }}
              tickFormatter={(value) => `#${value}`}
            />
            <Line 
              type="monotone" 
              dataKey="ranking" 
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }}
            />
            
            {/* Reference line at day when Ranking AI was activated */}
            <ReferenceLine 
              x={18} // Around day 18 (60% of 30 days)
              stroke="#22c55e"
              strokeDasharray="2 8"
              strokeWidth={3}
              label={{ 
                value: "🚀 Ranking AI geactiveerd", 
                position: "insideTopLeft",
                style: { 
                  fill: '#22c55e', 
                  fontSize: '12px',
                  fontWeight: '600',
                  background: '#000000',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Chart legend */}
      <div className="flex items-center justify-end mt-2 text-xs text-zinc-500">
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-blue-500 mr-2"></div>
          <span>Zoekresultaat positie</span>
        </div>
      </div>
    </div>
  );
} 