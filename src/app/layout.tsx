import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <SiteLayout>{children}</SiteLayout>
        </Provider>
      </body>
    </html>
  );
}
