import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { LogoStrip } from "@/sections/LogoStrip";
import { Ecosystem } from "@/sections/Ecosystem";
import { Features } from "@/sections/Features";
import { AgentPrivacy } from "@/sections/AgentPrivacy";
import { Analytics } from "@/sections/Analytics";
import { Showcase } from "@/sections/Showcase";
import { Payroll } from "@/sections/Payroll";
import { Platform } from "@/sections/Platform";
import { Solutions } from "@/sections/Solutions";
import { Pricing } from "@/sections/Pricing";
import { CTA } from "@/sections/CTA";
import { Footer } from "@/sections/Footer";
import { SignalLines } from "@/components/SignalLines";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-base"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        {/* Ambient signal-line animation behind everything EXCEPT the hero */}
        <div className="relative">
          <SignalLines />
          <div className="relative z-10">
            <Ecosystem />
            <Features />
            <AgentPrivacy />
            <Analytics />
            <Showcase />
            <Payroll />
            <Platform />
            <Solutions />
            <Pricing />
            <CTA />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
