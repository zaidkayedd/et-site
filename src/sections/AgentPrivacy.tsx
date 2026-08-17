import { Check, X, Cpu } from "lucide-react";
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
  "Produces 30-minute time-windowed summaries",
  "Respects configurable tracking policies",
  "Aggregates data centrally & securely",
];

const privacyNever = [
  "Captures screenshots",
  "Records the content of keystrokes",
  "Accesses personal files",
  "Reads message content",
];

const microLabel = "text-[0.62rem] font-medium uppercase tracking-[0.14em]";

export function AgentPrivacy() {
  return (
    <section id="agent" className="section-line relative py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
        {/* Agent */}
        <div>
          <SectionHeader
            eyebrow="The Agent"
            title={
              <>
                A lightweight endpoint agent for <span className="gradient-text">Windows & macOS.</span>
              </>
            }
            desc="Built on .NET 9, the Employee Tracker agent runs quietly as a background service and measures engagement signals — never the content of anyone's work."
          />

          <Reveal className="mt-8 card p-6" delay={0.1}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-hair bg-white/[0.03] text-indigo-soft">
                <Cpu className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">Tracker Agent</div>
                <div className="text-[0.62rem] text-faint">.NET 9 Worker Service</div>
              </div>
              <SignalBars className="ml-auto" count={7} color="#686EDA" />
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {signals.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
                  {s}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Privacy */}
        <div id="privacy" className="scroll-mt-24">
          <SectionHeader
            eyebrow="Privacy & Transparency"
            title={
              <>
                Visibility <span className="gradient-text">without invasive surveillance.</span>
              </>
            }
            desc="Trust is the product. Employee Tracker is designed so employers get meaningful insight and employees keep their privacy."
          />

          <Reveal className="mt-8 grid gap-3 sm:grid-cols-2" delay={0.1}>
            <div className="card p-5">
              <div className={`mb-3 text-indigo-soft ${microLabel}`}>What it does</div>
              <ul className="space-y-2.5">
                {privacyDoes.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-soft" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <div className={`mb-3 text-faint ${microLabel}`}>What it never does</div>
              <ul className="space-y-2.5">
                {privacyNever.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/55">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal
            className="mt-3 card p-5 shadow-[0_0_44px_-16px_rgba(104,110,218,0.45)]"
            delay={0.2}
          >
            <p className="text-sm leading-relaxed text-white/85">
              <span className="font-semibold text-indigo-soft">Measure activity signals,</span> not private
              content. Organizations configure exactly what is tracked, and everyone sees the same fair,
              aggregated picture.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
