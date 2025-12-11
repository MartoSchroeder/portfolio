import { VideoHero } from "@/components/video-hero"
import { ScrollNav } from "@/components/scroll-nav"
import { WorkProjects } from "@/components/work-projects"
import { PersonalProjects } from "@/components/personal-projects"
import { BioSection } from "@/components/bio-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ScrollNav />
      <VideoHero />
      <WorkProjects />
      <PersonalProjects />
      <BioSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}

