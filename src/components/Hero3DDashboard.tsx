"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Activity, MonitorSmartphone, Timer, Users } from "lucide-react";
import { activityTrend } from "@/lib/data";
import { CountUp, SignalBars, StatusDot } from "./ui";
import { MiniAreaChart } from "./MiniAreaChart";

const kpi = [
  { icon: Users, label: "Active now", to: 184, suffix: "", tone: "#8A8FE8" },
  {
    icon: Timer,
    label: "Avg active",
    to: 6.4,
    suffix: "h",
    decimals: 1,
    tone: "#686EDA",
  },
  {
    icon: MonitorSmartphone,
    label: "Devices",
    to: 212,
    suffix: "",
    tone: "#8A8FE8",
  },
  {
    icon: Activity,
    label: "Idle rate",
    to: 3.1,
    suffix: "%",
    decimals: 1,
    tone: "#15F3AF",
  },
];

const feed = [
  { name: "Engineering", val: "88%", tone: "active" as const },
  { name: "Design", val: "81%", tone: "active" as const },
  { name: "Sales", val: "74%", tone: "idle" as const },
];

const label =
  "text-[0.6rem] font-medium uppercase tracking-[0.14em] text-faint";

export function Hero3DDashboard() {
  const ref = useRef<HTMLDivElement>(null);

  // pointer-driven rotation
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [14, -14]), {
    stiffness: 120,
    damping: 18,
  });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [-12, 12]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-4xl"
      style={{ perspective: 1400 }}
    >
      {/* ambient purple aura */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-indigo/20 blur-[110px]" />

      <motion.div
        className="relative"
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 60, rotateX: 18 }}
        animate={{ opacity: 1, y: [0, -10, 0], rotateX: 0 }}
        transition={{
          opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          rotateX: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Screen */}
        <div
          className="card overflow-hidden shadow-card !bg-white/[0.018]"
          style={{
            transform: "translateZ(0px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* chrome */}
          <div
            className="flex items-center gap-2 border-b border-hair px-4 py-3"
            style={{ transform: "translateZ(30px)" }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-[0.66rem] text-faint">
              app.employeetracker.io / overview
            </span>
            <span className="ml-auto flex items-center gap-2 text-[0.66rem] text-faint">
              <StatusDot tone="active" /> live
            </span>
          </div>

          <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.5fr_1fr]">
            {/* left: KPIs + chart (mid depth) */}
            <div
              className="space-y-4"
              style={{ transform: "translateZ(45px)" }}
            >
              <div className="grid grid-cols-2 gap-3">
                {kpi.map((k, i) => (
                  <motion.div
                    key={k.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="rounded-xl border border-hair bg-white/[0.02] p-3"
                  >
                    <div className="mb-2 flex items-center gap-2 text-faint">
                      <k.icon
                        className="h-3.5 w-3.5"
                        style={{ color: k.tone }}
                      />
                      <span className={label}>{k.label}</span>
                    </div>
                    <div className="text-2xl font-semibold">
                      <CountUp
                        to={k.to}
                        suffix={k.suffix}
                        decimals={k.decimals ?? 0}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-xl border border-hair bg-white/[0.02] p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className={label}>Weekly activity</span>
                  <SignalBars count={6} />
                </div>
                <div className="h-[110px]">
                  <MiniAreaChart data={activityTrend} height={110} />
                </div>
              </div>
            </div>

            {/* right: team feed (deeper) */}
            <div
              className="rounded-xl border border-hair bg-white/[0.02] p-3"
              style={{ transform: "translateZ(35px)" }}
            >
              <div className={`mb-3 ${label}`}>Team activity</div>
              <div className="space-y-3">
                {feed.map((t, i) => (
                  <div key={t.name}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 text-white/80">
                        <StatusDot tone={t.tone} />
                        {t.name}
                      </span>
                      <span className="tnum text-white/60">{t.val}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg,#686EDA,#8A8FE8)",
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: t.val }}
                        transition={{
                          delay: 0.9 + i * 0.12,
                          duration: 1.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-indigo/25 bg-indigo/[0.06] p-3">
                <div className="text-[0.58rem] font-medium uppercase tracking-[0.14em] text-indigo-soft">
                  Privacy mode
                </div>
                <p className="mt-1 text-[0.68rem] leading-relaxed text-white/55">
                  Signals only — no screenshots.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating chips that hover ABOVE the surface (highest depth → strong parallax) */}

        <motion.div
          className="absolute -right-5 bottom-14 hidden items-center gap-2.5 rounded-full border border-hairbright bg-surface-2/90 px-4 py-2.5 shadow-[0_20px_50px_-15px_rgba(104,110,218,0.6)] backdrop-blur sm:flex"
          style={{ transform: "translateZ(130px)" }}
          animate={{ y: [0, 9, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <SignalBars count={5} />
          <span className="text-xs text-white/80">Agent healthy</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
