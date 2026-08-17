import { Button, SignalBars } from "@/components/ui";
import { Reveal } from "@/components/motion";

export function CTA() {
  return (
    <section id="cta" className="section-line relative overflow-hidden py-24 lg:py-32">
      <div className="container-x relative z-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-indigo/25 px-6 py-16 text-center sm:px-12 lg:py-24">
            {/* soft gradient wash */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60rem 30rem at 50% -20%, rgba(104,110,218,0.28), transparent 70%), radial-gradient(40rem 24rem at 50% 120%, rgba(104,110,218,0.14), transparent 70%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{ background: "linear-gradient(180deg, rgba(11,20,33,0.2), rgba(7,14,25,0.6))" }}
              aria-hidden
            />

            <div className="relative mx-auto max-w-2xl">
              <div className="mb-6 flex justify-center">
                <SignalBars count={7} />
              </div>
              <h2 className="text-[length:var(--text-display-lg)] font-bold leading-[1.06]">
                Your workforce generates data every day.{" "}
                <span className="gradient-text">Turn it into insight.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Bring employee activity, workforce analytics, device management, and payroll workflows
                into one centralized, privacy-conscious platform.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button variant="primary" href="/#pricing" withArrow>
                  Get started
                </Button>
                <Button variant="secondary" href="/contact">
                  Talk to us
                </Button>
              </div>
              <p className="mt-6 text-xs text-faint">
                Signals only — no screenshots, no keystroke content.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
