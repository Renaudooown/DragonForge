import { AgendaSection } from "@/components/AgendaSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { CinematicVenue } from "@/components/CinematicVenue";
import { GettingThereSection } from "@/components/GettingThereSection";
import { Hero } from "@/components/Hero";
import { PackingSection } from "@/components/PackingSection";
import { PeopleSection } from "@/components/PeopleSection";
import { RoomsSection } from "@/components/RoomsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <CinematicVenue />
        <PeopleSection />
        <AgendaSection />
        <ActivitiesSection />
        <RoomsSection />
        <GettingThereSection />
        <PackingSection />
      </main>
      <SiteFooter />
    </>
  );
}
