"use client";

import { Check, X, Cpu, ShieldCheck, Activity, Lock } from "lucide-react";
import { SectionHeader, SignalBars } from "@/components/ui";
import { Reveal } from "@/components/motion";

const signals = [
  "Active time",
  "Idle time",
  "Mouse activity",
  "Keyboard engagement",
  "Application usage",
  "Break usage",
  "Overtime context",
  "Behavioral indicators",
];

const privacyDoes = [
  "Measures activity signals",
  "30-min time-windowed summaries",
  "Configurable tracking policies",
  "Aggregated & secure central storage",
];

const privacyNever = [
  "Captures screenshots",
  "Records keystroke content",
  "Accesses personal files",
  "Reads message content",
];

export function AgentPrivacy() {
  return (
    <section id="agent" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        {/* Unified Modern Header */}
        <SectionHeader
          title={
            <>
              Visibility{" "}
              <span className="gradient-text">
                without invasive surveillance.
              </span>
            </>
          }
          desc="Built on .NET 9, our lightweight desktop service measures high-level engagement signals while enforcing strict privacy boundaries by default."
        />

        {/* Bento Grid Layout */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* LEFT: Live Endpoint Telemetry Widget (7 cols) */}
          <Reveal className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-hair bg-surface-1 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-indigo/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-hair/60 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-indigo/30 bg-indigo/10 text-indigo-soft shadow-[0_0_15px_-3px_rgba(104,110,218,0.3)]">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-white">
                        Tracker Service
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-400 border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-muted">
                      .NET 9 Background Service • macOS & Windows
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-3 rounded-xl border border-hair bg-base/50 px-3 py-1.5">
                  <span className="text-[0.68rem] text-faint uppercase font-medium tracking-wider">
                    Signal Level
                  </span>
                  <SignalBars
                    count={7}
                    colors={["#15f3af", "#fb7185", "#f59e0b"]}
                  />
                </div>
              </div>

              {/* Signals Grid Badge Display */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-soft">
                  <Activity className="h-3.5 w-3.5" />
                  <span>Monitored Signals</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {signals.map((s) => (
                    <div
                      key={s}
                      className="group/chip flex items-center gap-2 rounded-xl border border-hair/80 bg-base/40 px-3 py-2.5 text-xs text-muted transition-all duration-200 hover:border-indigo/40 hover:bg-indigo/5 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-soft/60 group-hover/chip:bg-indigo group-hover/chip:shadow-[0_0_8px_#686EDA]" />
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status Footer */}
            <div className="mt-8 flex items-center justify-between rounded-xl border border-hair/50 bg-base/30 px-4 py-3 text-xs text-muted">
              <span>
                Memory Footprint:{" "}
                <strong className="text-white font-mono">&lt; 18 MB</strong>
              </span>
              <span>
                CPU Usage:{" "}
                <strong className="text-white font-mono">&lt; 0.2%</strong>
              </span>
            </div>
          </Reveal>

          {/* RIGHT: Modern Privacy Matrix Card (5 cols) */}
          <Reveal
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-hair bg-surface-1 p-6 sm:p-8 backdrop-blur-xl"
            delay={0.15}
          >
            <div>
              <div className="flex items-center justify-between border-b border-hair/60 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Privacy Safeguards
                    </h3>
                    <p className="text-xs text-muted">
                      Zero invasive telemetry
                    </p>
                  </div>
                </div>
              </div>

              {/* Matrix Columns */}
              <div className="mt-6 space-y-5">
                {/* Does Section */}
                <div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-indigo-soft">
                    What It Collects
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {privacyDoes.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-xs text-white/80"
                      >
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo/20 text-indigo-soft">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-hair/60" />

                {/* Never Does Section */}
                <div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-rose-400/80">
                    Strict Boundaries
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {privacyNever.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-xs text-white/50"
                      >
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
                          <X className="h-2.5 w-2.5" />
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* BOTTOM: Trust Guarantee Banner */}
        <Reveal className="mt-6" delay={0.25}>
          <div className="relative overflow-hidden rounded-2xl border border-hair bg-gradient-to-r from-indigo/10 via-surface-1/80 to-surface-1/40 p-5 sm:p-6 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(104,110,218,0.25)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hair bg-base text-indigo-soft">
                  <Lock className="h-4 w-4" />
                </div>
                <p className="text-sm leading-relaxed text-white/85">
                  <span className="font-semibold text-white">
                    Trust is built-in.
                  </span>{" "}
                  Organizations configure transparent rules, ensuring employees
                  retain full privacy over personal files, keystrokes, and
                  messaging.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
