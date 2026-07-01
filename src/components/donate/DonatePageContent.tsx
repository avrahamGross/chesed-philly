"use client";

import { useMemo, useState } from "react";
import { Heading, Stack, Tabs } from "@chakra-ui/react";
import { ChesedPhillyFamilySelector } from "./ChesedPhillyFamilySelector";
import { AdoptAFamilySelector } from "./AdoptAFamilySelector";
import { ShabbosSponsorshipPackagesSelector } from "./ShabbosSponsorshipPackagesSelector";
import { DonationCheckout } from "./DonationCheckout";

type DonationType = "family" | "adopt" | "sponsor";

interface AdoptPackage {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface SponsorshipPackage {
  id: string;
  title: string;
  description: string;
  price: number;
}

const ADOPT_PACKAGES: AdoptPackage[] = [
  {
    id: "1-2-person-household",
    title: "1 Family (1-2 person household)",
    description: "Monthly",
    price: 200,
  },
  {
    id: "3-5-person-household",
    title: "1 Family (3-5 person household)",
    description: "Monthly",
    price: 300,
  },
  {
    id: "5-8-person-household",
    title: "1 Family (5-8 person household)",
    description: "Monthly",
    price: 400,
  },
];

const SPONSORSHIP_PACKAGES: SponsorshipPackage[] = [
  {
    id: "challah",
    title: "Sponsor Challah",
    description: "Sponsor Challah for Shabbos for all recipients",
    price: 500,
  },
  {
    id: "shabbos-all",
    title: "Sponsor Shabbos",
    description: "Sponsor 1 week for all recipients",
    price: 6000,
  },
  {
    id: "month",
    title: "Sponsor Shabbos for a Month",
    description: "Sponsor Shabbos for all recipients for a month",
    price: 24000,
  },
];

export function DonatePageContent() {
  const [activeDonationType, setActiveDonationType] = useState<DonationType>("family");

  // Chesed Philly Family state
  const [familyAmount, setFamilyAmount] = useState<string>("25");
  const [familyCustomAmount, setFamilyCustomAmount] = useState("");

  // Adopt a Family state
  const [adoptPackage, setAdoptPackage] = useState<string>("1-2-person-household");

  // Sponsor Shabbos state
  const [sponsorPackage, setSponsorPackage] = useState<string>("custom");
  const [sponsorCustomAmount, setSponsorCustomAmount] = useState("");

  // Calculate current amount
  const currentAmount = useMemo(() => {
    switch (activeDonationType) {
      case "family":
        return familyAmount === "custom"
          ? Number(familyCustomAmount) || 0
          : Number(familyAmount);
      case "adopt": {
        const pkg = ADOPT_PACKAGES.find((p) => p.id === adoptPackage);
        return pkg?.price || 0;
      }
      case "sponsor":
        if (sponsorPackage === "custom") {
          return Number(sponsorCustomAmount) || 0;
        }
        const pkg = SPONSORSHIP_PACKAGES.find((p) => p.id === sponsorPackage);
        return pkg?.price || 0;
      default:
        return 0;
    }
  }, [activeDonationType, familyAmount, familyCustomAmount, adoptPackage, sponsorPackage, sponsorCustomAmount]);

  const getPackageLabel = () => {
    switch (activeDonationType) {
      case "family":
        return "Weekly donation";
      case "adopt": {
        const pkg = ADOPT_PACKAGES.find((p) => p.id === adoptPackage);
        return pkg ? `${pkg.title} - ${pkg.description}` : "";
      }
      case "sponsor":
        if (sponsorPackage === "custom") {
          return "Custom sponsorship";
        }
        const sponsorPkg = SPONSORSHIP_PACKAGES.find((p) => p.id === sponsorPackage);
        return sponsorPkg ? `${sponsorPkg.title} - ${sponsorPkg.description}` : "";
      default:
        return "";
    }
  };

  return (
    <Stack gap={12}>
      {/* Tabbed Donation Options */}
      <Stack gap={8}>
        <Heading size="lg" color="brand.emphasized">
          Choose how to give
        </Heading>

        <Tabs.Root
          defaultValue="weekly"
          onValueChange={(details) => {
            if (details.value === "weekly") setActiveDonationType("family");
            else if (details.value === "monthly") setActiveDonationType("adopt");
            else if (details.value === "onetime") setActiveDonationType("sponsor");
          }}
        >
          <Tabs.List>
            <Tabs.Trigger value="weekly">Weekly</Tabs.Trigger>
            <Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
            <Tabs.Trigger value="onetime">One-Time Donation</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="weekly">
            <ChesedPhillyFamilySelector
              selectedAmount={familyAmount}
              customAmount={familyCustomAmount}
              onAmountChange={setFamilyAmount}
              onCustomAmountChange={setFamilyCustomAmount}
            />
          </Tabs.Content>

          <Tabs.Content value="monthly">
            <AdoptAFamilySelector
              selectedPackage={adoptPackage}
              onPackageChange={setAdoptPackage}
            />
          </Tabs.Content>

          <Tabs.Content value="onetime">
            <ShabbosSponsorshipPackagesSelector
              selectedPackage={sponsorPackage}
              customAmount={sponsorCustomAmount}
              onPackageChange={setSponsorPackage}
              onCustomAmountChange={setSponsorCustomAmount}
            />
          </Tabs.Content>
        </Tabs.Root>
      </Stack>

      {/* Unified Checkout Form */}
      <Stack gap={6}>
        <Heading size="lg" color="brand.emphasized">
          Complete your donation
        </Heading>
        <DonationCheckout
          donationType={activeDonationType}
          amount={currentAmount}
          packageLabel={getPackageLabel()}
        />
      </Stack>
    </Stack>
  );
}
