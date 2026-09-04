"use client";

import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-surface-1/80 via-surface-1/40 to-surface-1/20 p-8 sm:p-16 text-center backdrop-blur-2xl shadow-2xl shadow-indigo/5">
            {/* Modern ambient multi-color glow */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"
              aria-hidden
            />

            <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
              {/* High-impact modern typography */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl leading-[1.15]">
                Ready to transform your{" "}
                <span className="gradient-text">workforce data</span>?
              </h2>

              {/* Refined body text */}
              <p className="mt-4 text-sm  leading-relaxed text-muted max-w-xl">
                Bring employee activity, deep analytics, and privacy-first
                workflows together into one unified platform.
              </p>

              {/* Modern high-contrast action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
                <Button
                  variant="primary"
                  href="/#pricing"
                  className="w-full sm:w-auto h-11 px-6 text-sm font-medium bg-white text-gray-950 hover:bg-gray-100 transition-all shadow-lg shadow-white/10 group"
                >
                  Get started
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="secondary"
                  href="/contact"
                  className="w-full sm:w-auto h-11 px-6 text-sm font-medium bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 transition-all"
                >
                  Talk to sales
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
