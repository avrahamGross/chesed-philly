import { Reveal } from "@/components/ui/reveal";
import { impactStats } from "@/lib/content";

export function ImpactSection() {
  return (
    <section className="bg-primary px-4 py-14 text-primary-foreground sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 text-center">
        <Reveal className="mx-auto max-w-2xl space-y-3 text-center" animation="animate-in fade-in slide-in-from-top duration-700 ease-out">
          <h2 className="text-3xl font-bold">Lasting impact begins with you</h2>
          <p className="text-lg opacity-90">
            With your help, families across Greater Philadelphia receive the nourishment and support
            they need — with dignity.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {impactStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              animation={`animate-in fade-in slide-in-from-bottom duration-700 delay-${150 + index * 100} ease-out`}
              className="space-y-2"
            >
              <p className="text-5xl font-bold text-accent md:text-6xl">{stat.value}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
