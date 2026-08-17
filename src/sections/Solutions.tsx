"use client";

import { motion } from "motion/react";
import { Check, ShieldCheck, UserCog, Users } from "lucide-react";
import { roles, useCases } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { fadeUp, Reveal, RevealGroup } from "@/components/motion";
import { Carousel } from "@/components/Carousel";

const roleIcons = [ShieldCheck, UserCog, Users];

function UseCaseCard({ u }: { u: { title: string; desc: string } }) {
  return (
    <div className="card card-hover h-full p-6">
      <h3 className="font-semibold text-white">{u.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{u.desc}</p>
    </div>
  );
}

function RoleCard({ r, i }: { r: (typeof roles)[number]; i: number }) {
  const Icon = roleIcons[i % roleIcons.length];
  return (
    <div className="card h-full p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo/40 bg-indigo/10 text-indigo-soft">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <div className="text-sm font-semibold">{r.role}</div>
          <div className="text-[0.72rem] text-faint">{r.blurb}</div>
        </div>
      </div>
      <ul className="space-y-2">
        {r.access.map((a) => (
          <li key={a} className="flex items-start gap-2 text-xs text-muted">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-soft" />
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Solutions"
          title={
            <>
              Built for every team that <span className="gradient-text">runs on people.</span>
            </>
          }
          desc="One platform, many vantage points — each role sees the workforce the way they need to."
        />

        {/* Use cases — mobile carousel */}
        <Carousel
          className="mt-12 md:hidden"
          items={useCases}
          ariaLabel="Use cases"
          renderItem={(u) => <UseCaseCard u={u} />}
        />

        {/* Use cases — desktop grid */}
        <RevealGroup className="mt-14 hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <motion.div key={u.title} variants={fadeUp}>
              <UseCaseCard u={u} />
            </motion.div>
          ))}
        </RevealGroup>

        {/* Role access — three roles */}
        <Reveal className="mt-16" delay={0.1}>
          <div className="mb-6 flex items-baseline justify-between">
            <h3 className="text-lg font-semibold">Role-based access</h3>
            <span className="hidden text-[0.66rem] text-faint sm:block">
              Access scales with responsibility
            </span>
          </div>

          {/* Mobile carousel */}
          <Carousel
            className="md:hidden"
            items={roles}
            itemBasis="82%"
            ariaLabel="Roles"
            renderItem={(r, i) => <RoleCard r={r} i={i} />}
          />

          {/* Desktop grid */}
          <div className="hidden gap-4 md:grid md:grid-cols-3">
            {roles.map((r, i) => (
              <RoleCard key={r.role} r={r} i={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
