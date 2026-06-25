import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/content";
import { mainNav } from "@/lib/nav";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="hover:opacity-90">
          <div>
            <p className="text-lg font-bold tracking-tight sm:text-xl">{site.name}</p>
            <p className="hidden text-xs opacity-85 md:block">{site.dedication}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="accent" size="sm" className="ml-2">
            <Link href="/donate">Donate Today</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild variant="accent" size="sm">
            <Link href="/donate">Donate</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10">
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
