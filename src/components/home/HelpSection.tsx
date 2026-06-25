import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function HelpSection() {
  return (
    <section className="bg-muted/50 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        <Reveal className="space-y-4 rounded-xl bg-primary p-8 text-primary-foreground md:p-10" animation="animate-in fade-in slide-in-from-left duration-700 ease-out">
          <p className="text-sm font-semibold tracking-widest uppercase opacity-85">
            I want to help
          </p>
          <h2 className="text-2xl font-bold">Are you interested in making a donation?</h2>
          <p className="opacity-90">
            The community&apos;s financial support is vital to this mission. Every donor dollar more
            than doubles by the time it reaches someone&apos;s Shabbos table.
          </p>
          <Button asChild variant="accent">
            <Link href="/donate">Find out more</Link>
          </Button>
        </Reveal>

        <Reveal className="space-y-4 rounded-xl border bg-card p-8 shadow-sm md:p-10" animation="animate-in fade-in slide-in-from-right duration-700 delay-150 ease-out">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            I need help
          </p>
          <h2 className="text-2xl font-bold text-primary">
            Worried you can&apos;t afford to pay your bills?
          </h2>
          <p className="text-muted-foreground">
            Chesed Philly provides confidential support for families facing financial hardship.
            Reach out to learn about Tomchei Shabbos and other assistance.
          </p>
          <Button asChild variant="outline">
            <Link href="/social-services">Find out more</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
