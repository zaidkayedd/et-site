"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { steps } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/motion";

export function Platform() {
  const [active, setActive] = useState(0);
  const progress = (active / (steps.length - 1)) * 100;
  const step = steps[active];

  return (
    <section id="platform" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Platform"
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
            <span className="absolute left-[18px] top-2 bottom-2 w-px bg-hair" aria-hidden />
            <span
              className="absolute left-[18px] top-2 w-px bg-gradient-to-b from-indigo to-indigo-soft transition-[height] duration-500"
              style={{ height: `calc((100% - 1rem) * ${progress / 100})` }}
              aria-hidden
            />
            {steps.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              return (
                <li key={s.n} className="relative">
                  <button
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className="group flex w-full items-center gap-4 py-3 text-left"
                  >
                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                        isActive
                          ? "border-indigo bg-indigo text-white shadow-[0_0_20px_-4px_rgba(104,110,218,0.8)]"
                          : isDone
                            ? "border-indigo/50 bg-indigo/15 text-indigo-soft"
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

          {/* Active step panel — keyed fade-in, no exit gap (fixes transparency) */}
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
