"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { nav } from "@/lib/data";

function Logo() {
  return (
    <Link href="/#top" className="flex items-center gap-2.5" aria-label="Employee Tracker home">
      <span className="flex items-end gap-[3px]" aria-hidden>
        <span className="h-3 w-[3px] rounded-full bg-indigo" />
        <span className="h-5 w-[3px] rounded-full bg-indigo-soft" />
        <span className="h-4 w-[3px] rounded-full bg-mint" />
        <span className="h-6 w-[3px] rounded-full bg-mint-soft" />
      </span>
      <span className="text-[0.95rem] font-semibold tracking-tight">
        Employee<span className="text-muted"> Tracker</span>
      </span>
    </Link>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string; desc?: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted transition-all duration-200 hover:bg-white/[0.04] hover:text-white">
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-2xl border border-hairbright bg-surface-2/95 p-1.5 shadow-[0_28px_70px_-24px_rgba(4,6,13,0.95)] backdrop-blur-xl">
              {items.map((it) => (
                <Link
                  key={it.label}
                  href={it.href}
                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo/60 transition-colors group-hover:bg-indigo" />
                  <span>
                    <span className="block text-sm font-medium text-white/90 group-hover:text-white">
                      {it.label}
                    </span>
                    {it.desc && <span className="mt-0.5 block text-xs text-faint">{it.desc}</span>}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-hair bg-base/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center justify-end gap-5 md:flex">
            <Dropdown label="Product" items={nav.product} />
            <Dropdown label="Solutions" items={nav.solutions} />
            {nav.top.map((it) => (
              <Link
                key={it.label}
                href={it.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {it.label}
              </Link>
            ))}
            <Link href="/contact" className="text-sm text-muted transition-colors hover:text-white">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-hair bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x space-y-1 py-4">
              {[...nav.product, ...nav.top, { label: "Contact", href: "/contact" }].map((it) => (
                <Link
                  key={it.label + it.href}
                  href={it.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-muted hover:bg-white/[0.04] hover:text-white"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
