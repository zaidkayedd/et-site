"use client";

import { motion } from "motion/react";
import { activityTrend, appUsage, teamActivity } from "@/lib/data";

/* ---------------- Activity area chart ---------------- */

export function ActivityAreaChart() {
  const W = 520;
  const H = 220;
  const padX = 10;
  const padY = 18;
  const data = activityTrend;
  const max = Math.max(...data.flatMap((d) => [d.active, d.idle])) * 1.12;

  const x = (i: number) => padX + (i * (W - padX * 2)) / (data.length - 1);
  const y = (v: number) => H - padY - (v / max) * (H - padY * 2);

  const line = (key: "active" | "idle") =>
    data.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(d[key]).toFixed(1)}`).join(" ");
  const area = (key: "active" | "idle") =>
    `${line(key)} L ${x(data.length - 1)} ${H - padY} L ${x(0)} ${H - padY} Z`;

  const grid = [0.25, 0.5, 0.75, 1];

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
        <defs>
          <linearGradient id="aActive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#686EDA" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#686EDA" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="aIdle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#15F3AF" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#15F3AF" stopOpacity={0} />
          </linearGradient>
        </defs>

        {grid.map((g) => (
          <line
            key={g}
            x1={padX}
            x2={W - padX}
            y1={padY + g * (H - padY * 2)}
            y2={padY + g * (H - padY * 2)}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
          />
        ))}

        <motion.path d={area("active")} fill="url(#aActive)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} />
        <motion.path d={area("idle")} fill="url(#aIdle)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.45 }} />
        <motion.path d={line("active")} fill="none" stroke="#686EDA" strokeWidth={2.2} strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: "easeInOut" }} />
        <motion.path d={line("idle")} fill="none" stroke="#15F3AF" strokeWidth={2.2} strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} />
      </svg>
      <div className="mt-2 flex justify-between px-1">
        {data.map((d) => (
          <span key={d.day} className="text-[0.62rem] text-faint">
            {d.day}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-5 text-xs text-muted">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: "#686EDA" }} /> Active
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: "#15F3AF" }} /> Idle
        </span>
      </div>
    </div>
  );
}

/* ---------------- App-usage donut ---------------- */

const donutColors = ["#686EDA", "#8A8FE8", "#3B3F7A", "#b6b9f0", "#15F3AF"];

export function AppDonut() {
  const total = appUsage.reduce((s, d) => s + d.value, 0);
  const R = 52;
  const C = 2 * Math.PI * R;
  let offset = 0;

  return (
    <div className="flex items-center gap-6">
      <svg viewBox="0 0 140 140" className="h-36 w-36 shrink-0 -rotate-90">
        <circle cx="70" cy="70" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
        {appUsage.map((d, i) => {
          const frac = d.value / total;
          const dash = frac * C;
          const seg = (
            <motion.circle
              key={d.name}
              cx="70"
              cy="70"
              r={R}
              fill="none"
              stroke={donutColors[i % donutColors.length]}
              strokeWidth="14"
              strokeDasharray={`${dash} ${C - dash}`}
              strokeDashoffset={-offset}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            />
          );
          offset += dash;
          return seg;
        })}
      </svg>
      <ul className="space-y-2 text-sm">
        {appUsage.map((d, i) => (
          <li key={d.name} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: donutColors[i % donutColors.length] }} />
            <span className="text-muted">{d.name}</span>
            <span className="tnum ml-auto pl-4 text-white/80">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Team activity bars ---------------- */

export function TeamBars() {
  return (
    <div className="space-y-4">
      {teamActivity.map((t, i) => (
        <div key={t.team}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-muted">{t.team}</span>
            <span className="tnum text-white/80">{t.pct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg,#686EDA,#8A8FE8)" }}
              initial={{ width: 0 }}
              whileInView={{ width: `${t.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
