export const site = {
  name: "Chesed Philly",
  tagline: "A helping hand for families across Greater Philadelphia.",
  dedication: "l'Ilui nishmas Ruchama bas Yosef Eliezer haLevi",
  taxId: "35-2861084",
  warehouseAddress: "7715 Montgomery Ave, Elkins Park, PA 19027",
  instagram: "https://www.instagram.com/chesedphilly/",
} as const;

export const heroSlides = [
  {
    eyebrow: "Chesed Philly Tomchei Shabbos",
    title: "Shabbos grocery boxes for those in need",
    description:
      "With community support, every donor dollar more than doubles by the time it reaches someone's Shabbos table.",
    cta: { label: "Learn more", href: "/tomchei-shabbos" },
  },
  {
    eyebrow: "Support our mission",
    title: "Your generosity feeds families with dignity",
    description:
      "Join the Chesed Philly family and help neighbors facing difficult financial choices keep food on the table for Shabbos.",
    cta: { label: "Donate today", href: "/donate" },
  },
  {
    eyebrow: "Community Chesed",
    title: "A lifeline when financial pressures become too much",
    description:
      "Together with our esteemed Rabbonim, we serve families across Greater Philadelphia with compassion and confidentiality.",
    cta: { label: "Get involved", href: "/volunteer" },
  },
] as const;

export const programs = [
  {
    title: "Tomchei Shabbos",
    description:
      "Weekly Shabbos grocery support so families can shop with dignity and put appropriate food on the table.",
    href: "/tomchei-shabbos",
  },
  {
    title: "Community Resources & G'machs",
    description:
      "A curated guide to local resources and gemachs that help community members through everyday needs.",
    href: "/community-resources",
  },
  {
    title: "Social Services",
    description:
      "Guidance and referrals for families navigating financial hardship, illness, or other urgent challenges.",
    href: "/social-services",
  },
] as const;

export const donationFunds = [
  {
    id: "tomchei-shabbos",
    label: "Tomchei Shabbos",
    description: "Directly funds Shabbos grocery support for families in need.",
  },
  {
    id: "general",
    label: "General Fund",
    description: "Supports Chesed Philly operations and emerging community needs.",
  },
  {
    id: "maot-chittim",
    label: "Maot Chittim",
    description: "Seasonal Pesach assistance for families across the community.",
  },
  {
    id: "matanot-levyonim",
    label: "Matanot L'evyonim",
    description: "Purim-day distributions to individuals in serious financial distress.",
  },
] as const;

export const donationAmounts = [36, 72, 180, 360, 720] as const;

export const impactStats = [
  { value: "500+", label: "Families supported annually" },
  { value: "2x", label: "Community impact per donor dollar" },
  { value: "100%", label: "Volunteer-driven chesed" },
] as const;
