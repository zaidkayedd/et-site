"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { steps } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/motion";

export function Platform() {
  const [active, setActive] = useState(0);
  const step = steps[active]; // Restored step definition

  return (
    <section id="platform" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          title={
            <>
              From endpoint to insight, <span className="gradient-text">step by step.</span>
            </>
          }
          desc="A clean pipeline that stays the same whether your teams are remote, hybrid, or in-office. Step through it."
        />

        <Reveal className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14" delay={0.1}>
          {/* Stepper rail */}
          <ol className="relative">
            {/* SVG Defs for the curved path gradient */}
            <svg className="sr-only" aria-hidden>
              <defs>
                <linearGradient id="s-progress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
            </svg>

            {steps.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              const isEven = i % 2 === 0;
              const isLast = i === steps.length - 1;

              return (
                <li key={s.n} className="relative z-10">
                  {/* S-curve line segment to the next step */}
                  {!isLast && (
                    <svg
                      className="absolute left-[16px] top-[30px] -z-10 h-full w-[52px] pointer-events-none"
                      preserveAspectRatio="none"
                      viewBox="0 0 52 100"
                      aria-hidden
                    >
                      {/* Background segment */}
                      <path
                        d={isEven ? "M 2 0 C 2 50, 50 50, 50 100" : "M 50 0 C 50 50, 2 50, 2 100"}
                        fill="none"
                        stroke="currentColor"
                        className="text-hair"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Animated Progress segment */}
                      <motion.path
                        d={isEven ? "M 2 0 C 2 50, 50 50, 50 100" : "M 50 0 C 50 50, 2 50, 2 100"}
                        fill="none"
                        stroke="url(#s-progress)"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isDone ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </svg>
                  )}

                  <button
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className={`group flex w-full items-center gap-4 py-3 text-left transition-all duration-500 ease-out ${
                      isEven ? "pl-0" : "pl-[48px]"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                        isActive
                          ? "border-indigo bg-indigo text-white shadow-[0_0_20px_-4px_rgba(104,110,218,0.8)]"
                          : isDone
                            ? "border-indigo/50 bg-indigo text-indigo-soft"
                            : "border-hairbright bg-surface-1 text-faint group-hover:text-white"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isActive ? "text-white" : "text-muted group-hover:text-white"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Active step panel */}
          <div className="card min-h-[240px] p-7 lg:p-9">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3">
                <span className="tnum text-4xl font-bold text-indigo-soft">{step.n}</span>
                <span className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-faint">
                  Step {active + 1} of {steps.length}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{step.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {step.detail.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-hair bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={() => setActive((v) => Math.max(0, v - 1))}
                  disabled={active === 0}
                  className="rounded-full border border-hair px-4 py-2 text-sm text-muted transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Back
                </button>
                <button
                  onClick={() => setActive((v) => Math.min(steps.length - 1, v + 1))}
                  disabled={active === steps.length - 1}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-base transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next step
                </button>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}