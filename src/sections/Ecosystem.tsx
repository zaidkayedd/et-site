import { SectionHeader } from "@/components/ui";
import { EcosystemPipeline } from "@/components/EcosystemPipeline";
import { Reveal } from "@/components/motion";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="section-line relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Ecosystem"
          title={
            <>
              One platform. <span className="gradient-text">Complete workforce visibility.</span>
            </>
          }
          desc="Every signal follows the same clean path — from the endpoint to your analytics and payroll. Step across the pipeline to see what happens at each stage."
          align="center"
        />

        <Reveal className="mx-auto mt-16 max-w-5xl" delay={0.15}>
          <EcosystemPipeline />
        </Reveal>
      </div>
    </section>
  );
}
