"use client";

import AnimatedCounter from "@/components/animated-counter";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export default function StatCard({
  value,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
}: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-pet-purple-500 mb-2">
        <AnimatedCounter
          end={value}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
        />
      </div>
      <div className="text-sm md:text-base text-gray-600">{label}</div>
    </div>
  );
}
