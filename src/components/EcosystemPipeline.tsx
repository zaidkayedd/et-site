"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ecosystem } from "@/lib/data";

/**
 * "The Ecosystem" — interactive horizontal data pipeline.
 */
export function EcosystemPipeline() {
  const [active, setActive] = useState(0);

  // Fallbacks to prevent "undefined reading icon" runtime errors
  const safeEcosystem = ecosystem && ecosystem.length > 0 ? ecosystem : [];
  const currentActive = Math.min(active, Math.max(0, safeEcosystem.length - 1));
  const Node = safeEcosystem[currentActive];
  const Icon = Node?.icon;

  if (!safeEcosystem.length) return null;

  return (
    <div className="w-full">
      {/* Horizontal Rail */}
      <div className="relative">
        {/* Background Line (Desktop/Tablet) */}
        <div 
          className="absolute left-[calc(100%/14)] right-[calc(100%/14)] top-7 hidden h-px bg-hair md:block" 
          aria-hidden 
        />
        
        {/* Animated Active Progress Line (Desktop/Tablet) */}
        <motion.div
          className="absolute left-[calc(100%/14)] top-7 hidden h-px bg-gradient-to-r from-indigo to-indigo-soft md:block"
          aria-hidden
          initial={false}
          animate={{
            width: `calc(${(currentActive / (safeEcosystem.length - 1)) * 100}% * (1 - 1/7))`,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Pipeline Nodes */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7 md:gap-2">
          {safeEcosystem.map((n, i) => {
            const StageIcon = n.icon;
            const isActive = i === currentActive;

            return (
              <button
                key={n.id || i}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative flex flex-col items-center text-center focus:outline-none"
                aria-pressed={isActive}
              >
                <span
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-indigo bg-indigo/15 text-white shadow-[0_0_28px_-6px_rgba(104,110,218,0.7)] bg-surface-1"
                      : "border-hair bg-surface-1 text-indigo-soft group-hover:border-hairbright"
                  }`}
                >
                  {StageIcon && <StageIcon className="h-6 w-6" />}
                  
                  {/* Step Badge */}
                  <span
                    className={`tnum absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[0.55rem] ring-1 transition-colors duration-300 ${
                      isActive
                        ? "bg-indigo text-white ring-indigo"
                        : "bg-base text-faint ring-hair"
                    }`}
                  >
                    {i + 1}
                  </span>
                </span>

                <span
                  className={`mt-3 text-xs font-medium transition-colors ${
                    isActive ? "text-white" : "text-muted group-hover:text-white"
                  }`}
                >
                  {n.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-hair bg-surface-1/50">
        <motion.div
          key={currentActive}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
        >
          {Icon && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo/40 bg-indigo/10 text-indigo-soft">
              <Icon className="h-6 w-6" />
            </div>
          )}

          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{Node?.label}</h3>
              {Node?.sub && (
                <span className="rounded-full border border-hair px-2.5 py-0.5 text-[0.66rem] text-muted">
                  {Node.sub}
                </span>
              )}
            </div>
            {Node?.desc && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{Node.desc}</p>
            )}
          </div>

          <div className="tnum ml-auto hidden text-5xl font-bold text-white/5 sm:block">
            {String(currentActive + 1).padStart(2, "0")}
          </div>
        </motion.div>
      </div>
    </div>
  );
}