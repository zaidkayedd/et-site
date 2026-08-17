import type { Metadata } from "next";
import { Mail, MessageSquare, LifeBuoy, ShieldCheck, Zap } from "lucide-react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ContactForm } from "@/components/ContactForm";
import { contact, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Employee Tracker",
  description: "Talk to the Employee Tracker team about demos, pricing, security, or partnerships.",
};

const channelIcons = [Mail, MessageSquare, LifeBuoy];
const points = [
  { icon: Zap, text: "See a live demo tailored to your team" },
  { icon: ShieldCheck, text: "Get answers on security & privacy" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-32 pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(46rem_26rem_at_50%_-10%,rgba(104,110,218,0.24),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />

        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14 lg:items-start">
            {/* Left — branded panel */}
            <div className="relative overflow-hidden rounded-[1.6rem] border border-indigo/25 bg-gradient-to-b from-indigo/[0.12] to-transparent p-8 sm:p-10">
              <div className="eyebrow mb-4">Contact</div>
              <h1 className="text-[length:var(--text-display-lg)] font-bold leading-[1.05]">
                Let&apos;s talk about your <span className="gradient-text">workforce.</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Questions about a demo, pricing, security, or a partnership? Send a note and the team
                will get back to you.
              </p>

              <ul className="mt-8 space-y-3">
                {points.map((p) => (
                  <li key={p.text} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-indigo/40 bg-indigo/10 text-indigo-soft">
                      <p.icon className="h-4 w-4" />
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-hair" />

              <div className="space-y-3">
                {contact.channels.map((c, i) => {
                  const Icon = channelIcons[i % channelIcons.length];
                  return (
                    <a
                      key={c.label}
                      href={`mailto:${c.value}`}
                      className="group flex items-center gap-3.5 rounded-xl border border-hair bg-white/[0.02] p-3.5 transition-colors hover:border-indigo/40"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hair bg-white/[0.03] text-indigo-soft">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[0.64rem] font-medium uppercase tracking-[0.14em] text-faint">
                          {c.label}
                        </div>
                        <div className="text-sm text-white/85 group-hover:text-white">{c.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-hair bg-white/[0.03] px-3 py-1.5 text-xs text-muted transition-colors hover:border-indigo/50 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
         
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
