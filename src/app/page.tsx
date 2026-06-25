import { HelpSection } from "@/components/home/HelpSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { RabbinicSupportSection } from "@/components/home/RabbinicSupportSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RabbinicSupportSection />
      <ProgramsSection />
      <HelpSection />
      <ImpactSection />
      <NewsletterSection />
    </>
  );
}
