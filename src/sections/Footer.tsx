import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerCols, socials } from "@/lib/data";
import { Button } from "@/components/ui";

function BrandMark() {
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

export function Footer() {
  return (
    <footer className="section-line relative overflow-hidden">
      {/* background texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover opacity-[0.12]"
        style={{ backgroundImage: "url('/footerBackground.png')", backgroundPosition: "center top 80%" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(40rem_18rem_at_50%_0%,rgba(104,110,218,0.18),transparent_70%)]"
        aria-hidden
      />

      <div className="container-x relative z-10">


        {/* Links */}
        <div className="grid gap-10 py-14 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Workforce intelligence — activity monitoring, analytics, device management, and payroll,
              built privacy-first.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 items-center gap-1 rounded-lg border border-hair bg-white/[0.03] px-3 text-xs text-muted transition-colors hover:border-indigo/50 hover:text-white"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <div className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-faint">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-muted transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-hair py-8 sm:flex-row">
            <a
            href="https://www.artlstudio.com"
            target="_blank"
            rel="noreferrer"
            className="order-1 flex flex-row sm:flex-col items-start gap-2 text-xs text-muted transition-opacity hover:opacity-80 sm:order-1"
          >
            <span className="text-faint">Powered by</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/artlstudio-long-white.webp" alt="Artl Studio" className="h-4 w-auto opacity-30" />
          </a>
          <p className="order-2 text-xs text-faint sm:order-2">
            © {new Date().getFullYear()} Employee Tracker. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
}
