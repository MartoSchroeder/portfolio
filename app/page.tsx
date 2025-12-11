// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
// This is the main page that gets displayed when someone visits your site.
// It imports and arranges all the section components in order.
//
// PAGE STRUCTURE (from top to bottom):
// 1. ScrollNav - Fixed navigation bar at the top
// 2. VideoHero - Hero section with your name and intro
// 3. WorkProjects - Your professional work projects
// 4. PersonalProjects - Your personal/indie projects
// 5. BioSection - Your biography and experience
// 6. SkillsSection - Your skills and expertise
// 7. ContactSection - Contact information and links
//
// TO REORDER SECTIONS:
// - Simply move the component lines up or down in the return statement
// - Make sure ScrollNav stays at the top (it's the navigation bar)
//
// TO ADD/REMOVE SECTIONS:
// - To add: Import the component at the top, then add it in the return statement
// - To remove: Delete the import and remove it from the return statement
// ============================================================================

import { VideoHero } from "@/components/video-hero"
import { ScrollNav } from "@/components/scroll-nav"
import { WorkProjects } from "@/components/work-projects"
import { PersonalProjects } from "@/components/personal-projects"
import { BioSection } from "@/components/bio-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

// ============================================================================
// MAIN PAGE FUNCTION
// ============================================================================
// This is the default export - it's what Next.js displays on the home page.
// ============================================================================
export default function Home() {
  return (
    // MAIN CONTAINER - This wraps all the sections of your portfolio
    <main className="relative min-h-screen bg-background">
      {/* FIXED NAVIGATION BAR - Stays at top while scrolling */}
      <ScrollNav />
      
      {/* HERO SECTION - First thing visitors see */}
      <VideoHero />
      
      {/* WORK PROJECTS SECTION - Your professional projects */}
      <WorkProjects />
      
      {/* PERSONAL PROJECTS SECTION - Your personal/indie projects */}
      <PersonalProjects />
      
      {/* BIO SECTION - Your biography and work experience */}
      <BioSection />
      
      {/* SKILLS SECTION - Your skills and expertise */}
      <SkillsSection />
      
      {/* CONTACT SECTION - Contact information and social links */}
      <ContactSection />
    </main>
  )
}

