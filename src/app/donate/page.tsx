import type { Metadata } from "next";
import { DonationForm } from "@/components/donate/DonationForm";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Chesed Philly's mission. Every donor dollar more than doubles by the time it reaches someone's Shabbos table.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support Chesed Philly"
        title="Donate"
        description="The community's financial support is vital to this mission. Every donor dollar more than doubles by the time it reaches someone's Shabbos table."
      />

      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <DonationForm />

        <div className="space-y-6">
          <div className="space-y-3 rounded-xl bg-muted p-6">
            <h2 className="text-lg font-semibold text-primary">Your gift multiplies</h2>
            <p className="text-muted-foreground">
              Chesed Philly leverages community partnerships so that each donated dollar stretches
              further — putting appropriate food on Shabbos tables across Greater Philadelphia.
            </p>
          </div>

          <div className="space-y-3 rounded-xl border p-6">
            <h2 className="font-semibold text-primary">Seasonal campaigns</h2>
            <p className="text-muted-foreground">
              In addition to year-round Tomchei Shabbos support, Chesed Philly runs Maot Chittim
              before Pesach and Matanot L&apos;evyonim on Purim — distributing 100% of collected
              funds to local families in need.
            </p>
          </div>

          <div className="space-y-3 rounded-xl border p-6">
            <h2 className="font-semibold text-primary">Other ways to give</h2>
            <p className="text-muted-foreground">
              Prefer to give by check or stock transfer? Contact us through our social services page
              and we&apos;ll be happy to assist.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
