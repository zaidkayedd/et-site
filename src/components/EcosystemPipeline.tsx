"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ecosystem } from "@/lib/data";

/**
 * "The Ecosystem" — reimagined as an interactive data pipeline.
 * All seven stages are visible on one connected rail; hover/tap a stage to
 * surface its detail below. Replaces the previous dashed-dot flow.
 */
export function EcosystemPipeline() {
  const [active, setActive] = useState(0);
  const Node = ecosystem[active];
  const Icon = Node.icon;

  return (
    <div>
      {/* Rail */}
      <div className="relative">
        {/* connector line */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-hair md:block" aria-hidden />
        <motion.div
          className="absolute top-7 hidden h-px bg-gradient-to-r from-indigo to-indigo-soft md:block"
          aria-hidden
          initial={false}
          animate={{ width: `${(active / (ecosystem.length - 1)) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7 md:gap-2">
          {ecosystem.map((n, i) => {
            const StageIcon = n.icon;
            const isActive = i === active;
            return (
              <button
                key={n.id}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative flex flex-col items-center text-center focus:outline-none"
                aria-pressed={isActive}
              >
                <span
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-indigo bg-indigo/15 text-white shadow-[0_0_28px_-6px_rgba(104,110,218,0.7)]"
                      : "border-hair bg-surface-1 text-indigo-soft group-hover:border-hairbright"
                  }`}
                >
                  <StageIcon className="h-6 w-6" />
                  <span className="tnum absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-base text-[0.55rem] text-faint ring-1 ring-hair">
                    {i + 1}
                  </span>
                </span>
                <span
                  className={`mt-3 text-xs font-medium transition-colors ${
                    isActive ? "text-white" : "text-muted"
                  }`}
                >
                  {n.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-hair bg-surface-1/50">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo/40 bg-indigo/10 text-indigo-soft">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{Node.label}</h3>
              <span className="rounded-full border border-hair px-2.5 py-0.5 text-[0.66rem] text-muted">
                {Node.sub}
              </span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{Node.desc}</p>
          </div>
          <div className="tnum ml-auto hidden text-5xl font-bold text-white/5 sm:block">
            {String(active + 1).padStart(2, "0")}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
