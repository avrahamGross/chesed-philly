import { HeroSection } from "@/components/home/HeroSection";
import { HelpSection } from "@/components/home/HelpSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { RabbinicSupportSection } from "@/components/home/RabbinicSupportSection";
import { MissionSection } from "@/components/home/MissionSection";
import { WaysSection } from "@/components/home/WaysSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <RabbinicSupportSection />
      <WaysSection />
      <HelpSection />
      <ProgramsSection />
      <NewsletterSection />
    </>
  );
}
