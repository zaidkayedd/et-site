"use client";

import { useInView, useMotionValue, animate } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./motion";

/* ---------------- Button ---------------- */

export function Button({
  children,
  variant = "primary",
  href = "#",
  className = "",
  withArrow = false,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  withArrow?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none";
  const styles = {
    primary: "bg-white text-base hover:bg-white/90 hover:-translate-y-px",
    secondary:
      "border border-hairbright bg-white/[0.02] text-white hover:bg-white/[0.06] hover:border-white/25",
    ghost: "text-[rgba(255,255,255,0.6)] hover:text-white",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

/* ---------------- Pill ---------------- */

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hair bg-white/[0.03] px-3 py-1">
      <span className="h-1.5 w-1.5 rounded-full bg-indigo shadow-[0_0_8px_#686EDA]" />
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[rgba(255,255,255,0.6)]">
        {children}
      </span>
    </span>
  );
}

/* ---------------- Section header ---------------- */

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  desc?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <div className={`eyebrow mb-4 ${align === "center" ? "justify-center flex" : ""}`}>
        {eyebrow}
      </div>
      <h2 className="text-[length:var(--text-display-md)] font-semibold leading-[1.08]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-[0.98rem] text-muted leading-relaxed">{desc}</p>}
    </Reveal>
  );
}

/* ---------------- Signal bars (product motif) ---------------- */

export function SignalBars({
  count = 5,
  className = "",
  color = "#686EDA",
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  return (
    <div className={`flex items-end gap-[3px] h-5 ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full"
          style={{
            height: "100%",
            background: color,
            transformOrigin: "bottom",
            animation: `signal-pulse ${1.4 + (i % 3) * 0.35}s ease-in-out ${i * 0.12}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- Count up ---------------- */

export function CountUp({
  to,
  suffix = "",
  decimals = 0,
  prefix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  decimals?: number;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return controls.stop;
  }, [inView, to, decimals, mv]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- Status dot ---------------- */

export function StatusDot({ tone }: { tone: "active" | "idle" | "healthy" }) {
  const map = { active: "#15F3AF", healthy: "#15F3AF", idle: "#686EDA" };
  const c = map[tone];
  return (
    <span className="relative inline-flex h-2 w-2">
      <span
        className="absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ background: c, animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }}
      />
      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: c }} />
    </span>
  );
}
