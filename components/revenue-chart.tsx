"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const revenueData = [
  { week: "W1", revenue: 580 },
  { week: "W2", revenue: 820 },
  { week: "W3", revenue: 1100 },
  { week: "W4", revenue: 1300 },
  { week: "W5", revenue: 1600 },
  { week: "W6", revenue: 2100 },
  { week: "W7", revenue: 1800 },
  { week: "W8", revenue: 2000 },
  { week: "W9", revenue: 2200 },
  { week: "W10", revenue: 2400 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <h5 className="text-[12px] leading-[14px] font-medium text-[#111111]">
          Omzet per week (€)
        </h5>
        <TrendingUp className="h-3 w-3 text-green-500" />
      </div>
      <ChartContainer config={chartConfig} className="w-full flex-1">
        <BarChart accessibilityLayer data={revenueData} margin={{ left: 20, right: 20, bottom: 40, top: 10 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="week"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent 
              hideLabel 
              formatter={(value) => [`€${value}`]}
            />}
          />
          <Bar dataKey="revenue" fill="#328EFB" radius={2} maxBarSize={20} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
