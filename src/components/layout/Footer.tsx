import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/content";
import { mainNav } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <p className="text-lg font-semibold">{site.name}</p>
            <p className="text-sm opacity-90">{site.tagline}</p>
            <p className="text-sm italic opacity-85">{site.dedication}</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wider uppercase opacity-80">
              Quick Links
            </p>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm opacity-90 hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/donate" className="block text-sm opacity-90 hover:opacity-100">
              Donate
            </Link>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wider uppercase opacity-80">
              Contact
            </p>
            <p className="text-sm opacity-90">Warehouse: {site.warehouseAddress}</p>
            <p className="text-sm opacity-90">501(c)(3) Tax ID: {site.taxId}</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm opacity-90 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm opacity-80">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Chesed Philly is a 501(c)(3) tax-exempt organization.</p>
        </div>
      </div>
    </footer>
  );
}
