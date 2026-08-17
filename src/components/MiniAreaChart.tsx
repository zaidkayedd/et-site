"use client";

import { motion } from "motion/react";

/** Dependency-free SVG area+line chart that draws itself in. */
export function MiniAreaChart({
  data,
  height = 120,
}: {
  data: { day: string; active: number; idle: number }[];
  height?: number;
}) {
  const W = 320;
  const H = height;
  const pad = 8;
  const max = Math.max(...data.flatMap((d) => [d.active, d.idle])) * 1.1;

  const x = (i: number) => pad + (i * (W - pad * 2)) / (data.length - 1);
  const y = (v: number) => H - pad - (v / max) * (H - pad * 2);

  const line = (key: "active" | "idle") =>
    data.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(d[key]).toFixed(1)}`).join(" ");

  const area = (key: "active" | "idle") =>
    `${line(key)} L ${x(data.length - 1)} ${H - pad} L ${x(0)} ${H - pad} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="miniActive" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#686EDA" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#686EDA" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="miniIdle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15F3AF" stopOpacity={0.35} />
          <stop offset="100%" stopColor="#15F3AF" stopOpacity={0} />
        </linearGradient>
      </defs>

      <motion.path d={area("active")} fill="url(#miniActive)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} />
      <motion.path d={area("idle")} fill="url(#miniIdle)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />
      <motion.path d={line("active")} fill="none" stroke="#686EDA" strokeWidth={2} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }} />
      <motion.path d={line("idle")} fill="none" stroke="#15F3AF" strokeWidth={2} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1.6, ease: "easeInOut" }} />
    </svg>
  );
}
