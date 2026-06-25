export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about#mission" },
      { label: "Rabbinic Support", href: "/about#rabbinic-support" },
    ],
  },
  { label: "Tomchei Shabbos", href: "/tomchei-shabbos" },
  { label: "Community Resources", href: "/community-resources" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Social Services", href: "/social-services" },
  { label: "Contact", href: "/about#contact" },
];
