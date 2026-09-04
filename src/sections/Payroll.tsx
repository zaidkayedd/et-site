"use client";

import { motion } from "motion/react";
import { ArrowRight, Wallet } from "lucide-react";
import { payrollKpis } from "@/lib/data";
import { Button, SectionHeader } from "@/components/ui";
import { fadeUp, Reveal, RevealGroup } from "@/components/motion";

const inputs = [
  "Working hours",
  "Attendance",
  "Overtime",
  "Leave",
  "Breaks",
  "Payroll periods",
];

export function Payroll() {
  return (
    <section id="payroll" className="section-line relative py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/[0.08] blur-[120px]" />

      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            title={
              <>
                Workforce data,{" "}
                <span className="gradient-text">ready for payroll.</span>
              </>
            }
            desc="Payroll is a natural extension of the platform. The same attendance, working-time, and overtime data that powers your analytics feeds directly into payroll workflows — no re-entry, no reconciliation guesswork."
          />

          <Reveal className="mt-8" delay={0.1}>
            <div className="mb-3 text-[0.66rem] font-medium uppercase tracking-[0.14em] text-faint">
              Draws from
            </div>
            <div className="flex flex-wrap gap-2">
              {inputs.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-hair bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                >
                  {i}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-8" delay={0.2}>
            <Button variant="secondary" href="/#pricing" withArrow>
              See payroll in Enterprise
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="card overflow-hidden shadow-card">
            <div className="flex items-center gap-3 border-b border-hair px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-hair bg-white/[0.03] text-indigo-soft">
                <Wallet className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">Payroll overview</div>
                <div className="text-[0.62rem] text-faint">
                  Period · Nov 2026
                </div>
              </div>
              <button className="ml-auto flex items-center gap-1.5 rounded-lg border border-hair px-2.5 py-1.5 text-xs text-muted transition-colors hover:text-white">
                Export <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <RevealGroup className="grid grid-cols-2 gap-3 p-5">
              {payrollKpis.map((k, i) => (
                <motion.div
                  key={k.label}
                  variants={fadeUp}
                  className="rounded-xl border border-hair bg-white/[0.02] p-4"
                >
                  <div className="text-[0.68rem] text-faint">{k.label}</div>
                  <div
                    className="tnum mt-1.5 text-xl font-semibold"
                    style={i === 0 ? { color: "#8A8FE8" } : undefined}
                  >
                    {k.value}
                  </div>
                </motion.div>
              ))}
            </RevealGroup>

            <div className="border-t border-hair px-5 py-4">
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="text-faint">Processed</span>
                <span className="tnum text-muted">89%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg,#686EDA,#8A8FE8)",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "89%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
