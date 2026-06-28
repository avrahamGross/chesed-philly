import { FaDollarSign, FaTruck } from "react-icons/fa6";
import { BsFillHouseHeartFill } from "react-icons/bs";

export const site = {
  name: "Chesed Philly",
  tagline: "A helping hand for families across Greater Philadelphia.",
  dedication: "l'Ilui nishmas Ruchama bas Yosef Eliezer haLevi",
  taxId: "35-2861084",
  warehouseAddress: "7715 Montgomery Ave, Elkins Park, PA 19027",
  instagram: "https://www.instagram.com/chesedphilly/",
} as const;

export const homepageHero = {
  eyebrow: "Tomchei Shabbos",
  title: "No family should worry about the Shabbos table",
  description:
    "Together, our community ensures that families experiencing hardship have the food they need to celebrate Shabbos with joy.",
  primaryCta: { label: "Donate now", href: "/donate" },
  secondaryCta: { label: "Volunteer", href: "/volunteer" },
} as const;

export const homepageFeatures = [
  {
    icon: <BsFillHouseHeartFill />,
    title: "Neighbors in need",
    description:
      "When families face job loss, health challenges or unexpected expenses they can be forced to choose between paying the bills and putting food on the table.",
  },
  {
    icon: <FaTruck />,
    title: "Delivered to the door",
    description:
      "Dedicated volunteers come together each week to pack and discreetly deliver boxes of food to families in need.",
  },
  {
    icon: <FaDollarSign />,
    title: "Your dollar goes far",
    description:
      "Your dollar goes further. With no salaries and minimal overhead, every donation is maximized to provide nearly twice the value in food and support for families in need.",
  },
] as const;

export const homepageWays = [
  {
    title: "Give",
    description:
      "Your donation feeds families immediately. Every gift helps keep Shabbos meals reliable and secure.",
    href: "/donate",
    label: "Donate now",
  },
  {
    title: "Volunteer",
    description:
      "Join our volunteer family to pack boxes, drive deliveries, or help coordinate support for neighbors in need.",
    href: "/volunteer",
    label: "Get involved",
  },
  {
    title: "Contact",
    description:
      "Need help or want to partner with our community? Reach out and we’ll connect you with the right local support.",
    href: "/contact",
    label: "Get in touch",
  },
] as const;

export const programs = [
  {
    title: "Tomchei Shabbos",
    description:
      "Weekly grocery support helps families shop with dignity and put appropriate food on the table for Shabbos.",
    href: "/tomchei-shabbos",
  },
  {
    title: "Community Resources",
    description:
      "A curated guide to local resources and gemachs that help community members through everyday needs.",
    href: "/community-resources",
  },
  {
    title: "Social Services",
    description:
      "Confidential guidance and referrals for families navigating financial hardship, illness, or other urgent challenges.",
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
  { value: "100+", label: "Families supported weekly" },
  { value: "3,500+", label: "Pounds of food distributed weekly" },
  { value: "100%", label: "Volunteer driven" },
  { value: "9", label: "Communities assisted" },
] as const;
