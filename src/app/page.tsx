import { HeroSection } from "@/components/home/HeroSection";
import { HelpSection } from "@/components/home/HelpSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { RabbinicSupportSection } from "@/components/home/RabbinicSupportSection";
import { MissionSection } from "@/components/home/MissionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <MissionSection />
      <RabbinicSupportSection />
      <HelpSection />
    </>
  );
}
