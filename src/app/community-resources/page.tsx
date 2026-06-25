import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Community Resources",
  description: "Community resources and g'machs for Greater Philadelphia.",
};

export default function CommunityResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Community Resources & G'machs"
        description="A guide to local resources that help community members through everyday needs."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-lg leading-relaxed text-muted-foreground">
          This page will host a curated directory of community gemachs, referral services, and local
          resources. Content from the current site will be migrated here in a future pass.
        </p>
        <h2 className="font-semibold text-primary">Coming soon</h2>
        <p className="text-muted-foreground">
          We are building an easy-to-browse resource library organized by category — clothing,
          furniture, meals, and more.
        </p>
      </div>
    </>
  );
}
