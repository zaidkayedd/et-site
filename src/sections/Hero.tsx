"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui";
import { Hero3DDashboard } from "@/components/Hero3DDashboard";
import { ParticleField } from "@/components/ParticleField";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <ParticleField className="absolute inset-0 h-full w-full opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(50rem_28rem_at_50%_-10%,rgba(104,110,218,0.28),transparent_65%)]" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
     

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-4 text-[length:var(--text-display-xl)] font-bold leading-[1.02]"
          >
            Understand how your
            <br className="hidden sm:block" /> <span className="gradient-text">workforce works.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            Activity monitoring, workforce analytics, employee and device management, and payroll
            workflows — in one centralized, privacy-conscious platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button variant="primary" href="/#pricing" withArrow>
              Get started
            </Button>
            <Button variant="secondary" href="/#platform">
              Explore the platform
            </Button>
          </motion.div>
        </div>

        <div className="mt-20 lg:mt-24">
          <Hero3DDashboard />
        </div>
      </div>
    </section>
  );
}
