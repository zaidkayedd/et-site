"use client";

import { motion } from "motion/react";
import { dashboardKpis } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { fadeUp, Reveal, RevealGroup } from "@/components/motion";
import { ActivityAreaChart, AppDonut, TeamBars } from "@/components/Charts";
import { Carousel } from "@/components/Carousel";

const charts = [
  {
    title: "Active vs idle time",
    sub: "Aggregate hours · this week",
    render: () => <ActivityAreaChart />,
  },
  {
    title: "Application usage",
    sub: "Share of active time",
    render: () => <AppDonut />,
  },
  {
    title: "Team activity index",
    sub: "Average engagement by team",
    render: () => <TeamBars />,
  },
];

function ChartCard({ c }: { c: (typeof charts)[number] }) {
  return (
    <div className="card h-full p-6">
      <div className="mb-5">
        <h3 className="text-sm font-semibold">{c.title}</h3>
        <p className="mt-0.5 text-xs text-faint">{c.sub}</p>
      </div>
      {c.render()}
    </div>
  );
}

export function Analytics() {
  return (
    <section id="analytics" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Workforce Analytics"
          title={
            <>
              Turn activity data into <span className="gradient-text">actionable insight.</span>
            </>
          }
          desc="Every chart is illustrative here — in production, your own aggregated data drives active vs idle time, application usage, and team performance."
        />

        {/* KPI row */}
        <Reveal className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4" delay={0.05}>
          {dashboardKpis.map((k) => (
            <div key={k.label} className="card p-5">
              <div className="text-xs text-faint">{k.label}</div>
              <div className="mt-2 flex items-end gap-2">
                <span className="tnum text-2xl font-semibold">{k.value}</span>
                <span className={`tnum mb-1 text-xs ${k.tone === "mint" ? "text-mint" : "text-indigo-soft"}`}>
                  {k.delta}
                </span>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Mobile: charts carousel */}
        <Carousel
          className="mt-4 md:hidden"
          items={charts}
          itemBasis="88%"
          ariaLabel="Analytics charts"
          renderItem={(c) => <ChartCard c={c} />}
        />

        {/* Desktop: chart grid */}
        <RevealGroup className="mt-3 hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <ChartCard c={charts[0]} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ChartCard c={charts[1]} />
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-2 lg:col-span-3">
            <ChartCard c={charts[2]} />
          </motion.div>
        </RevealGroup>
      </div>
    </section>
  );
}
