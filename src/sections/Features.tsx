"use client";

import { features } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { fadeUp, RevealGroup } from "@/components/motion";
import { motion } from "motion/react";
import { Carousel } from "@/components/Carousel";
import type { ComponentType } from "react";

type Feature = { icon: ComponentType<{ className?: string }>; title: string; desc: string };

function Card({ f }: { f: Feature }) {
  const Icon = f.icon;
  return (
    <div className="card card-hover group h-full p-6">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-hair bg-white/[0.03] text-indigo-soft transition-colors group-hover:border-indigo/50">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-white">{f.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
    
          title={
            <>
              Everything you need to <span className="gradient-text">track, understand, and manage.</span>
            </>
          }
          desc="A complete workforce intelligence layer — not a single-purpose tracker."
        />

        {/* Mobile carousel */}
        <Carousel
          className="mt-12 md:hidden"
          items={features as Feature[]}
          ariaLabel="Capabilities"
          renderItem={(f) => <Card f={f} />}
        />

        {/* Desktop grid */}
        <RevealGroup className="mt-14 hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div key={f.title} variants={fadeUp}>
              <Card f={f} />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
