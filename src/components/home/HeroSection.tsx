"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/content";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {slide.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {slide.title}
          </h2>
          <p className="max-w-2xl text-lg opacity-90 sm:text-xl">{slide.description}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href={slide.cta.href}>{slide.cta.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/10"
            >
              <Link href="/donate">Donate today</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
              className={cn(
                "h-2 w-10 rounded-full transition-colors",
                index === active ? "bg-accent" : "bg-white/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
