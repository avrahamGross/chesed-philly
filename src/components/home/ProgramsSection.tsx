import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { programs } from "@/lib/content";

export function ProgramsSection() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <h2 className="text-3xl font-bold text-primary">
            Making a difference through community programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Chesed Philly serves as a financial safety net for families across Greater Philadelphia
            — with dignity, confidentiality, and care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal
              key={program.title}
              animation={`animate-in fade-in slide-in-from-bottom duration-700 delay-${150 + index * 100} ease-out`}
              className="flex flex-col"
            >
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-primary">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild variant="outline">
                    <Link href={program.href}>Read more</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
