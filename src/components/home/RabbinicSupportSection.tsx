import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RabbinicSupportSection() {
  return (
    <section className="bg-muted px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Rabbinic Support</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          The <strong className="text-foreground">community</strong> together with the support and
          encouragement of <strong className="text-foreground">our esteemed Rabbonim</strong> have the
          power to make sure that the Tomchei Shabbos initiative can continue to make deep and lasting
          impact on families in need in our community.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          <strong className="text-foreground">It could be someone you know</strong> — a neighbor,
          fellow shul member, or member of your family — who receives this{" "}
          <strong className="text-foreground">lifeline</strong> when financial pressures become too
          much to handle.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          What would you do if you knew an elderly couple, a single-parent household, or someone who
          just lost their job was making painful choices between keeping the lights on or putting
          appropriate food on the table?
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          <strong className="text-foreground">
            As a unified community, the individual ask is small but the collective impact is
            tremendous!
          </strong>{" "}
          We welcome you to join the Chesed Philly family and take part in this holy community
          service.
        </p>
        <Button asChild size="lg">
          <Link href="/volunteer">Join the Chesed Philly family</Link>
        </Button>
      </div>
    </section>
  );
}
