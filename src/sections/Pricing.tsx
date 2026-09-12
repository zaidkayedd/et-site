"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Rocket, Building2, Sparkles } from "lucide-react";
import { pricing } from "@/lib/data";
import { Button, SectionHeader } from "@/components/ui";
import { fadeUp, Reveal, RevealGroup } from "@/components/motion";
import { Carousel } from "@/components/Carousel";

type Plan = (typeof pricing)[number];
const icons = [Rocket, Sparkles, Building2];

function PlanCard({ p, i, yearly }: { p: Plan; i: number; yearly: boolean }) {
  const Icon = icons[i % icons.length];
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-7 transition-colors ${
        p.featured
          ? "border border-indigo/50 bg-surface-1 bg-gradient-to-b from-indigo/[0.14] to-transparent shadow-[0_0_60px_-18px_rgba(104,110,218,0.65)]"
          : "border border-hair bg-surface-1 hover:border-hairbright"
      }`}
    >
      {p.featured && (
        <span className="absolute right-5 top-6 rounded-full border border-indigo/40 bg-indigo/15 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-indigo-soft">
          Most popular
        </span>
      )}

      <div
        className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${
          p.featured ? "border-indigo/40 bg-indigo/15 text-white" : "border-hair bg-white/[0.03] text-indigo-soft"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-lg font-semibold">{p.name}</h3>
      <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>

      <div className="mt-6 flex items-end gap-1.5">
        {p.monthly === null ? (
          <span className="text-4xl font-bold">Custom</span>
        ) : (
          <>
            <span className="tnum text-5xl font-bold tracking-tight">${yearly ? p.yearly : p.monthly}</span>
            <span className="mb-2 text-sm text-faint">/ endpoint / mo</span>
          </>
        )}
      </div>

      <div className="my-6 h-px bg-hair" />

      <ul className="flex-1 space-y-3">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo/20 text-indigo-soft">
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Button variant={p.featured ? "primary" : "secondary"} href="/#cta" className="mt-8 w-full">
        {p.cta}
      </Button>
    </div>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
         
          title={
            <>
              Simple pricing that <span className="gradient-text">scales with your workforce.</span>
            </>
          }
          desc="Per active endpoint, per month. Placeholder pricing — finalize before launch."
          align="center"
        />

        <Reveal className="mt-8 flex items-center justify-center gap-3" delay={0.05}>
          <span className={`text-sm ${!yearly ? "text-white" : "text-faint"}`}>Monthly</span>
          <button
            onClick={() => setYearly((v) => !v)}
            className="relative h-6 w-11 rounded-full border border-hair bg-white/[0.05]"
            aria-label="Toggle yearly billing"
          >
            <motion.span
              className="absolute top-0.5 h-4 w-4 rounded-full bg-indigo shadow-[0_0_10px_#686EDA]"
              animate={{ left: yearly ? 24 : 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm ${yearly ? "text-white" : "text-faint"}`}>
            Yearly <span className="text-indigo-soft">−20%</span>
          </span>
        </Reveal>

        {/* Mobile carousel */}
        <Carousel
          className="mt-12 md:hidden"
          items={pricing as unknown as Plan[]}
          itemBasis="86%"
          ariaLabel="Pricing plans"
          renderItem={(p, i) => <PlanCard p={p} i={i} yearly={yearly} />}
        />

        {/* Desktop grid */}
        <RevealGroup className="mx-auto mt-12 hidden max-w-5xl items-stretch gap-4 md:grid md:grid-cols-3">
          {pricing.map((p, i) => (
            <motion.div key={p.name} variants={fadeUp} className={p.featured ? "md:-mt-3 md:mb-3" : ""}>
              <PlanCard p={p} i={i} yearly={yearly} />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
