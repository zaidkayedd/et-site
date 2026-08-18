"use client";

import { Button, SignalBars } from "@/components/ui";
import { Reveal } from "@/components/motion";

export function CTA() {
  return (
    <section id="cta" className="relative py-12 sm:py-16">
      <div className="container-x">
        <Reveal>
          {/* Expanded container width to max-w-5xl */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-hair/80 bg-surface-1/30 px-6 py-10 text-center backdrop-blur-md sm:px-12 sm:py-14">
            {/* Soft, delicate background glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/10 blur-3xl"
              aria-hidden
            />

            <div className="relative z-10 mx-auto max-w-2xl">
            

              {/* Compact title */}
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Ready to transform your workforce data?
              </h2>

              {/* Soft body text */}
              <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                Bring employee activity, analytics, and privacy-first workflows into one simple platform.
              </p>

              {/* Action buttons */}
              <div className="mt-6 flex items-center justify-center gap-2.5">
                <Button variant="primary" href="/#pricing" withArrow className="h-9 px-4 text-xs">
                  Get started
                </Button>
                <Button variant="secondary" href="/contact" className="h-9 px-4 text-xs">
                  Talk to us
                </Button>
              </div>

              {/* Footer text */}
              <p className="mt-4 text-[0.68rem] text-faint">
                Signals only — no screenshots or keystroke recording.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}