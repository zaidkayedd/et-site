"use client";

import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { ecosystem } from "@/lib/data";

/**
 * "The Ecosystem" — interactive horizontal data pipeline.
 */
export function EcosystemPipeline() {
  const [active, setActive] = useState(0);
  
  // Strongly type nodeRefs to accept button elements or null values
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const safeEcosystem = ecosystem && ecosystem.length > 0 ? ecosystem : [];
  const currentActive = Math.min(active, Math.max(0, safeEcosystem.length - 1));
  const Node = safeEcosystem[currentActive];
  const Icon = Node?.icon;

  // Immediately scroll the carousel on mobile whenever active node changes
  useEffect(() => {
    const currentNodeEl = nodeRefs.current[currentActive];
    if (currentNodeEl) {
      currentNodeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentActive]);

  if (!safeEcosystem.length) return null;

  return (
    <div className="w-full">
      {/* Mobile Controls Header */}
      <div className="mb-3 flex items-center justify-between gap-3 md:hidden">
        <span className="text-[0.68rem] font-medium uppercase tracking-wider text-faint">
          Stage {currentActive + 1} of {safeEcosystem.length}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActive((v) => Math.max(0, v - 1))}
            disabled={currentActive === 0}
            className="rounded-lg border border-hair px-3 py-1 text-xs text-muted transition-colors hover:text-white disabled:opacity-30"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setActive((v) => Math.min(safeEcosystem.length - 1, v + 1))}
            disabled={currentActive === safeEcosystem.length - 1}
            className="rounded-lg border border-hair bg-surface-1 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-surface-1/80 disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-x-auto pb-3 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:overflow-visible md:pb-0">
        {/* Track Container */}
        <div className="relative flex min-w-max md:min-w-0 md:w-full md:grid md:grid-cols-7 md:gap-2">
          
          {/* Connector Line - Mobile */}
          <div 
            className="absolute left-14 right-14 top-7 h-px bg-hair md:hidden" 
            aria-hidden 
          />
          <motion.div
            className="absolute left-14 top-7 h-px bg-gradient-to-r from-indigo to-indigo-soft md:hidden"
            aria-hidden
            initial={false}
            animate={{
              width: `calc(${(currentActive / (safeEcosystem.length - 1))} * (100% - 7rem))`,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Connector Line - Desktop */}
          <div 
            className="absolute left-[calc(100%/14)] right-[calc(100%/14)] top-7 hidden h-px bg-hair md:block" 
            aria-hidden 
          />
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
          {safeEcosystem.map((n, i) => {
            const StageIcon = n.icon;
            const isActive = i === currentActive;

            return (
              <button
                key={n.id || i}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative flex w-28 shrink-0 flex-col items-center text-center focus:outline-none md:w-auto md:shrink"
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
      <div className="mt-4 overflow-hidden rounded-2xl border border-hair bg-surface-1/50 md:mt-8">
        <motion.div
          key={currentActive}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
        >
          <div className="flex items-center justify-between sm:block">
            {Icon && (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo/40 bg-indigo/10 text-indigo-soft">
                <Icon className="h-6 w-6" />
              </div>
            )}
            <div className="tnum text-3xl font-bold text-white/10 sm:hidden">
              {String(currentActive + 1).padStart(2, "0")}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-base font-semibold text-white sm:text-lg">{Node?.label}</h3>
              {Node?.sub && (
                <span className="rounded-full border border-hair px-2.5 py-0.5 text-[0.66rem] text-muted">
                  {Node.sub}
                </span>
              )}
            </div>
            {Node?.desc && (
              <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">{Node.desc}</p>
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