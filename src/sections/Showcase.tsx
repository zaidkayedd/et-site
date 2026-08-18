"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { devices, employees, payrollKpis, payrollRows } from "@/lib/data";
import { SectionHeader, StatusDot } from "@/components/ui";
import { Reveal } from "@/components/motion";

const tabs = ["Overview", "Employees", "Devices", "Payroll"] as const;
type Tab = (typeof tabs)[number];

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-3"
    >
      {children}
    </motion.div>
  );
}

function StatCell({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="rounded-xl border border-hair bg-white/[0.02] p-4">
      <div className="text-[0.68rem] text-faint">{label}</div>
      <div className="tnum mt-1.5 text-xl font-semibold" style={tone ? { color: tone } : undefined}>
        {value}
      </div>
    </div>
  );
}

export function Showcase() {
  const [tab, setTab] = useState<Tab>("Overview");

  return (
    <section id="showcase" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
         
          title={
            <>
              One console for <span className="gradient-text">people, devices, and pay.</span>
            </>
          }
          desc="A simplified preview of the real admin experience. Switch views to see how the platform fits together."
          align="center"
        />

        <Reveal className="mx-auto mt-12 max-w-5xl" delay={0.1}>
          <div className="card overflow-hidden shadow-card">
            <div className="flex items-center gap-1 overflow-x-auto border-b border-hair px-3 py-2.5">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative whitespace-nowrap rounded-lg px-4 py-1.5 text-sm transition-colors ${
                    tab === t ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {tab === t && (
                    <motion.span
                      layoutId="tabbg"
                      className="absolute inset-0 rounded-lg border border-hairbright bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{t}</span>
                </button>
              ))}
            </div>

            <div className="p-4 sm:p-6">
              <AnimatePresence mode="wait">
                {tab === "Overview" && (
                  <Panel key="ov">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                      <StatCell label="Active employees" value="184" tone="#8A8FE8" />
                      <StatCell label="Idle time (avg)" value="1.2h" />
                      <StatCell label="Devices online" value="198 / 212" tone="#8A8FE8" />
                      <StatCell label="Alerts" value="2" />
                    </div>
                    <div className="rounded-xl border border-hair bg-white/[0.02] p-4">
                      <div className="mb-3 text-xs text-faint">Recent activity signals</div>
                      <div className="space-y-2.5">
                        {employees.map((e) => (
                          <div key={e.name} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2.5">
                              <StatusDot tone={e.status as "active" | "idle"} />
                              <span className="text-white/85">{e.name}</span>
                              <span className="text-faint">· {e.team}</span>
                            </span>
                            <span className="tnum text-xs text-muted">{e.active} active</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Panel>
                )}

                {tab === "Employees" && (
                  <Panel key="emp">
                    <div className="overflow-hidden rounded-xl border border-hair">
                      <div className="grid grid-cols-[1.4fr_1fr_1fr_auto] gap-2 border-b border-hair bg-white/[0.02] px-4 py-2.5 text-[0.66rem] uppercase tracking-wider text-faint">
                        <span>Employee</span>
                        <span>Team</span>
                        <span>Active</span>
                        <span>Status</span>
                      </div>
                      {employees.map((e) => (
                        <div
                          key={e.name}
                          className="grid grid-cols-[1.4fr_1fr_1fr_auto] items-center gap-2 border-b border-hair px-4 py-3 text-sm last:border-0"
                        >
                          <div>
                            <div className="text-white/90">{e.name}</div>
                            <div className="text-[0.68rem] text-faint">{e.role}</div>
                          </div>
                          <span className="text-muted">{e.team}</span>
                          <span className="tnum text-muted">{e.active}</span>
                          <span className="flex items-center gap-1.5 text-xs text-muted">
                            <StatusDot tone={e.status as "active" | "idle"} />
                            {e.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Panel>
                )}

                {tab === "Devices" && (
                  <Panel key="dev">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {devices.map((d) => (
                        <div key={d.name} className="rounded-xl border border-hair bg-white/[0.02] p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/90">{d.name}</span>
                            <span className="flex items-center gap-1.5 text-[0.66rem] text-muted">
                              <StatusDot tone={d.agent as "healthy" | "idle"} />
                              {d.agent}
                            </span>
                          </div>
                          <div className="tnum mt-3 flex items-center gap-4 text-[0.66rem] text-faint">
                            <span>OS · {d.os}</span>
                            <span>Last · {d.last}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Panel>
                )}

                {tab === "Payroll" && (
                  <Panel key="pay">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {payrollKpis.map((k, i) => (
                        <StatCell key={k.label} label={k.label} value={k.value} tone={i === 0 ? "#8A8FE8" : undefined} />
                      ))}
                    </div>
                    <div className="overflow-hidden rounded-xl border border-hair">
                      <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr_auto] gap-2 border-b border-hair bg-white/[0.02] px-4 py-2.5 text-[0.66rem] uppercase tracking-wider text-faint">
                        <span>Employee</span>
                        <span>Hours</span>
                        <span>Overtime</span>
                        <span>Net</span>
                        <span>Status</span>
                      </div>
                      {payrollRows.map((r) => (
                        <div
                          key={r.name}
                          className="grid grid-cols-[1.3fr_1fr_1fr_1fr_auto] items-center gap-2 border-b border-hair px-4 py-3 text-sm last:border-0"
                        >
                          <span className="text-white/90">{r.name}</span>
                          <span className="tnum text-muted">{r.hours}</span>
                          <span className="tnum text-muted">{r.ot}</span>
                          <span className="tnum text-white/85">{r.net}</span>
                          <span
                            className={`justify-self-start rounded-full border px-2 py-0.5 text-[0.62rem] ${
                              r.status === "Processed"
                                ? "border-mint/30 bg-mint/10 text-mint"
                                : "border-indigo/30 bg-indigo/10 text-indigo-soft"
                            }`}
                          >
                            {r.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Panel>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
