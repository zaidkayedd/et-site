import type { Metadata } from "next";
import { Mail, MessageSquare, LifeBuoy } from "lucide-react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ContactForm } from "@/components/ContactForm";
import { TrackWordmark } from "@/components/TrackWordmark";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Employee Tracker",
  description: "Talk to the Employee Tracker team about demos, pricing, security, or partnerships.",
};

const channelIcons = [Mail, MessageSquare, LifeBuoy];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28 pb-0 lg:pt-36">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_58%_50%_at_50%_-4%,rgba(104,110,218,0.22),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />

        <div className="container-x relative mx-auto max-w-5xl">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Let&apos;s talk about your <span className="gradient-text">workforce.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
              Questions about a demo, pricing, security, or partnerships? Send us a note and our team
              will get back to you promptly.
            </p>
          </div>

          {/* Form card with purple glow — no white border */}
          <div className="relative mx-auto max-w-2xl">
            <div
              className="pointer-events-none absolute -inset-2 rounded-[2.2rem] opacity-80 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 0%, rgba(104,110,218,0.55), transparent 70%), radial-gradient(50% 50% at 50% 100%, rgba(138,143,232,0.28), transparent 70%)",
              }}
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-indigo/20 bg-surface-2/70 p-6 backdrop-blur-xl shadow-[0_40px_90px_-24px_rgba(104,110,218,0.55),0_0_60px_-12px_rgba(104,110,218,0.35)] sm:p-10">
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(138,143,232,0.6), transparent)" }}
                aria-hidden
              />

              <div className="mb-6 border-b border-white/[0.06] pb-5">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Send us a message</h2>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  Fill out the details below and we&apos;ll respond within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Direct channels */}
          <div className="mt-20">
            <div className="mb-8 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
                Or reach out directly
              </h2>
            </div>

            <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
              {contact.channels.map((c, i) => {
                const Icon = channelIcons[i % channelIcons.length];
                return (
                  <a
                    key={c.label}
                    href={`mailto:${c.value}`}
                    className="group flex items-center justify-center gap-3.5 py-2 transition-colors"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center text-indigo-soft transition-transform group-hover:scale-105">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-faint">
                        {c.label}
                      </div>
                      <div className="truncate text-sm font-medium text-white/85 transition-colors group-hover:text-white">
                        {c.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Resend-style swept wordmark, flush to the bottom */}
        <div className="relative ">
          <TrackWordmark text="Track" />
          {/* fade the very bottom into the footer */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-base"
            aria-hidden
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
