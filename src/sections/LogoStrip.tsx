import { Reveal } from "@/components/motion";
import { CountUp } from "@/components/ui";

const stats = [
  { to: 30, suffix: "-min", label: "Default summary window" },
  { to: 2, suffix: "", label: "Platforms — Windows & macOS" },
  { to: 3, suffix: "", label: "Access roles built in" },
];

export function LogoStrip() {
  return (
    <section className="section-line border-b border-hair bg-surface-1/30">
      <div className="container-x py-12">
        <Reveal className="text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-faint">
            Built for modern teams · logos are placeholders
          </p>
        </Reveal>

        <Reveal
          className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 justify-center justify-items-center"
          delay={0.1}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-semibold sm:text-4xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
