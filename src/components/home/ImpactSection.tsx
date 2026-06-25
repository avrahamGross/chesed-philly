import { impactStats } from "@/lib/content";

export function ImpactSection() {
  return (
    <section className="bg-primary px-4 py-14 text-primary-foreground sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 text-center">
        <div className="mx-auto max-w-2xl space-y-3">
          <h2 className="text-3xl font-bold">Lasting impact begins with you</h2>
          <p className="text-lg opacity-90">
            With your help, families across Greater Philadelphia receive the nourishment and support
            they need — with dignity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {impactStats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-5xl font-bold text-accent md:text-6xl">{stat.value}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
