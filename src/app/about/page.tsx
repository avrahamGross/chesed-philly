import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Chesed Philly's mission serving families across Greater Philadelphia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Chesed with dignity"
        description="A volunteer organization serving as the Jewish community's financial safety net across Greater Philadelphia."
      />

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
        <section className="space-y-4" id="mission">
          <h2 className="text-2xl font-bold text-primary">Our mission</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Chesed Philly helps individuals and families facing financial hardship with Tomchei
            Shabbos grocery support, community resource guidance, and confidential social services
            referrals. Our goal is to help families get back on their feet while preserving their
            dignity.
          </p>
        </section>

        <section className="space-y-4" id="rabbinic-support">
          <h2 className="text-2xl font-bold text-primary">Rabbinic support</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Chesed Philly operates with the encouragement and support of our community&apos;s
            esteemed Rabbonim. Their leadership helps ensure that assistance is provided with
            sensitivity, halachic awareness, and true chesed.
          </p>
        </section>

        <section className="space-y-3 rounded-xl bg-muted p-6" id="contact">
          <h2 className="text-lg font-semibold text-primary">Contact</h2>
          <p className="text-muted-foreground">
            Warehouse: 7715 Montgomery Ave, Elkins Park, PA 19027
          </p>
          <p className="text-muted-foreground">501(c)(3) Tax ID: 35-2861084</p>
        </section>
      </div>
    </>
  );
}
