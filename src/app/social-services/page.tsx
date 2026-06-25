import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Social Services",
  description: "Confidential support for families facing financial hardship.",
};

export default function SocialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Assistance"
        title="Social Services"
        description="Are you worried you can't afford to pay your bills? We can help."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Chesed Philly provides confidential guidance for individuals and families navigating
          financial hardship. Our team can help you understand available programs — including Tomchei
          Shabbos — and connect you with appropriate community resources.
        </p>
        <h2 className="font-semibold text-primary">Request assistance</h2>
        <p className="text-muted-foreground">
          An intake form will be added here. All requests are handled with sensitivity and
          discretion.
        </p>
        <Button asChild>
          <Link href="/about#contact">Get in touch</Link>
        </Button>
      </div>
    </>
  );
}
