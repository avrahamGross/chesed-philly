"use client";

import { Reveal } from "@/components/ui/reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-primary px-4 py-12 text-primary-foreground sm:px-6 sm:py-16">
      <Reveal className="mx-auto max-w-4xl space-y-4 text-center" animation="animate-in fade-in zoom-in duration-700 ease-out">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto max-w-2xl text-lg opacity-90">{description}</p>
        ) : null}
      </Reveal>
    </section>
  );
}
