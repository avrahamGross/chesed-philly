import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tomchei Shabbos",
  description: "Shabbos grocery food boxes for families in need across Greater Philadelphia.",
};

export default function TomcheiShabbosPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Chesed Philly Tomchei Shabbos"
        description="Shabbos grocery food boxes for those in need."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Tomchei Shabbos helps community members in financial distress purchase food for Shabbos and
          Yom Tov. Families receive support in a way that lets them shop with dignity — so they can
          put appropriate food on the table like everyone else in the community.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Nobody chooses a financial challenge. When Hashem presents these tests, it is our privilege
          and responsibility to respond with chesed.
        </p>
        <div className="space-y-4 rounded-xl bg-muted p-6">
          <h2 className="font-semibold text-primary">Support Tomchei Shabbos</h2>
          <p className="text-muted-foreground">
            Your donation directly helps stock Shabbos tables across Greater Philadelphia.
          </p>
          <Button asChild>
            <Link href="/donate">Donate today</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
