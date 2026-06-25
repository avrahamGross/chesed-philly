import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Join the Chesed Philly family and take part in holy community service.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Volunteer"
        description="As a unified community, the individual ask is small but the collective impact is tremendous."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Chesed Philly relies on dedicated volunteers to pack boxes, coordinate deliveries, and
          support families with compassion and confidentiality. Whether you can help weekly or for a
          seasonal campaign, your time makes a real difference.
        </p>
        <h2 className="font-semibold text-primary">Interested in volunteering?</h2>
        <p className="text-muted-foreground">
          Volunteer sign-up will be connected here. For now, reach out through our contact
          information on the About page.
        </p>
        <Button asChild variant="outline">
          <Link href="/about#contact">Contact us</Link>
        </Button>
      </div>
    </>
  );
}
