"use client"

// ============================================================================
// WORK PROJECTS COMPONENT
// ============================================================================
// This component displays your professional work projects in a grid layout.
// When a project card is clicked, it opens a detailed modal with more information.
//
// TO MODIFY PROJECT DATA:
// - Find the "workProjects" array below (starts around line 9)
// - Each project object contains: title, description, role, year, platforms, 
//   image paths, links, and detailed information
// - To add a new project: copy an existing project object and update the values
// - To remove a project: delete its entire object from the array
// ============================================================================

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { CompanyLogosBanner } from "@/components/company-logos-banner"
import { Briefcase, Sparkles } from "lucide-react"

// ============================================================================
// PROJECT DATA ARRAY
// ============================================================================
// This is where all your professional work projects are stored.
// Each project is an object with multiple properties you can customize.
//
// IMPORTANT PROPERTIES TO KNOW:
// - title: The project name (shown on the card)
// - description: Short description (shown on card, max 1-2 sentences)
// - role: Your role on the project (e.g., "Producer", "Game Designer")
// - year: The year the project was completed/released
// - platforms: Array of platforms (e.g., ["PC", "Mobile", "Console"])
// - image: Path to the main image (shown when card is not hovered)
// - gif: Path to animated image (shown when hovering over card)
// - link: URL to project website (optional - can be "#" if no link)
// - highlight: Special achievement text (optional - shown as badge)
// - duration: How long you worked on it (optional)
// - teamSize: Size of the team (optional)
// - detailedDescription: Long description (shown in modal popup)
// - technologies: Array of tools/tech used (shown in modal)
// - achievements: Array of achievement strings (shown as bullet list in modal)
// - gallery: Array of image paths for the modal gallery (optional)
// ============================================================================
const workProjects = [
  {
    title: "Epic Battle Royale",
    description:
      "Led production for a AAA battle royale game with 100+ concurrent players, implementing advanced matchmaking systems and seasonal content pipelines.",
    role: "Lead Producer",
    year: "2023",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    image: "/placeholder/battle-royale-game-screenshot.jpg",
    gif: "/placeholder/battle-royale-game-action-gameplay.jpg",
    link: "#",
    highlight: "50M+ Players",
    duration: "18 months",
    teamSize: "120+",
    detailedDescription:
      "Spearheaded the production of a massive-scale battle royale game that became a cultural phenomenon. Managed cross-functional teams across multiple studios, implemented agile workflows for rapid content delivery, and coordinated live-ops strategies that kept players engaged for years. The game achieved record-breaking player counts and generated significant revenue through ethical monetization practices.",
    technologies: ["Unreal Engine 5", "AWS", "PlayFab", "Wwise", "Perforce", "JIRA", "Confluence"],
    achievements: [
      "Shipped game to 50+ million players worldwide",
      "Managed 18-month production cycle with on-time delivery",
      "Implemented seasonal content pipeline reducing update time by 40%",
      "Coordinated 3 international studios across different time zones",
      "Achieved 95% positive user reviews at launch",
    ],
    gallery: ["/placeholder/battle-royale-game-screenshot.jpg", "/placeholder/battle-royale-game-action-gameplay.jpg"],
  },
  {
    title: "EA SPORTS™ Madden NFL 25",
    description:
      "EA Madden NFL is an American football sports video game series developed by EA Orlando for EA Sports.",
    role: "Producer",
    year: "2024",
    platforms: ["PC", "Consoles"],
    image: "/madden 25/m25-promo1.png",
    gif: "/placeholder/fantasy-rpg-combat-gameplay.jpg",
    link: "https://www.ea.com/games/madden-nfl/madden-nfl-25",
    highlight: "Best-selling in the United States",
    duration: "1 year",
    detailedDescription:
      "Production lead, as Globant contractor, for Team Pass feature.",
    technologies: ["Frostbyte", "Team Leading", "Production Lead", "Perforce", "Jira", "Miro"],
    achievements: [
      "Implemented new features into the game that interacted with well stablished systems of the game",
      "Number 6 in best-selling video games in the United States",
    ],
    gallery: ["/placeholder/fantasy-rpg-game-environment.jpg", "/placeholder/fantasy-rpg-combat-gameplay.jpg"],
  },
  {
    title: "Mortal Kombat: Onslaught",
    description:
      "Mortal Kombat: Onslaught is a 2023 action-adventure beat 'em up role-playing video game, developed by NetherRealm Studios",
    role: "Game Designer",
    year: "2023",
    platforms: ["Mobile"],
    image: "/mko/mko-promo1.png",
    gif: "/placeholder/racing-game-fast-action.jpg",
    link: "#",
    duration: "1 year",
    detailedDescription:
      "With the other Combat team members, created and implemented characters into the game, with balancing and polishing as key aspects of the workflow",
    technologies: ["Unreal Engine", "Blueprints", "Niagara Particles", "Balancing", "Animation"],
    achievements: [
      "Learned a lot about the Unreal Engine workflow",
    ],
    gallery: ["/placeholder/racing-game-track.jpg", "/placeholder/racing-game-fast-action.jpg"],
  },
  {
    title: "Candy Crush Jelly Saga",
    description:
      "Candy Crush Jelly Saga is a singleplayer tile matching game in the Candy Crush series.",
    role: "Producer",
    year: "2024",
    platforms: ["Mobile"],
    image: "/ccjs/ccjs-promo1.png",
    gif: "/ccjs/ccjs-gif1.gif",
    link: "https://www.king.com/es/game/candycrushjelly/",
    highlight: "100M+ downloads",
    duration: "1 year",
    detailedDescription:
      "Lead Level Designer, as King contractor, for Candy Crush Jelly Saga.",
    technologies: ["Custom Tools", "Level Design", "Team Leading", "Analytics", "Balancing"],
    achievements: [
      "4.5 stars in the App Store",
      "Led a team of level designers in a new contract with King",
      "Expanded team capacity due to client's positive feedback",
    ],
    gallery: ["/placeholder/fantasy-rpg-game-environment.jpg", "/placeholder/fantasy-rpg-combat-gameplay.jpg"],
  },
]

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
// This is the main component that renders the work projects section.
// It manages which project is selected and whether the modal is open.
// ============================================================================
export function WorkProjects() {
  // STATE MANAGEMENT:
  // These variables track which project is currently selected and if the modal is open.
  // You don't need to modify these - they're handled automatically by the component.
  const [selectedProject, setSelectedProject] = useState<(typeof workProjects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // FUNCTION: When a project card is clicked
  // This function is called automatically when someone clicks on a project card.
  // It sets the selected project and opens the modal to show details.
  const handleProjectClick = (project: (typeof workProjects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  // FUNCTION: When the modal is closed
  // This function closes the modal and clears the selected project after a short delay.
  // The delay (300ms) allows the closing animation to play smoothly.
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  // This is what gets displayed on the page. The structure is:
  // 1. Section container with background effects
  // 2. Header with title and description
  // 3. Company logos banner
  // 4. Grid of project cards
  // 5. Modal popup (hidden until a project is clicked)
  // ============================================================================
  return (
    <>
      {/* MAIN SECTION CONTAINER */}
      {/* The "id='work'" is important - it's used by the navigation to scroll to this section */}
      <section id="work" className="relative py-24 md:py-32 overflow-hidden">
        {/* BACKGROUND DECORATIVE ELEMENTS */}
        {/* These create the gradient background and glowing orb effects */}
        {/* You can modify colors in globals.css if you want different background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />

        {/* HEADER SECTION */}
        {/* This contains the section title, description, and decorative text */}
        <div className="container relative mx-auto px-4">
          <div className="mb-16 space-y-4 text-center">
            {/* Icon container - you can change the Briefcase icon to something else */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            {/* MAIN TITLE - Change "Professional Work" to whatever you want */}
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Professional Work
            </h2>
            {/* SUBTITLE - Change this description text to match your needs */}
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              AAA productions and commercial games that have reached players worldwide
            </p>
            {/* DECORATIVE TEXT WITH SPARKLES */}
            {/* The sparkles animate to draw attention */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              {/* Change this text to highlight your achievements */}
              <span className="text-sm font-medium text-primary">Shipped to millions of players worldwide</span>
              <Sparkles className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>

        {/* COMPANY LOGOS BANNER */}
        {/* This displays a scrolling banner of company logos */}
        {/* To modify the logos, see company-logos-banner.tsx component */}
        <CompanyLogosBanner />

        {/* PROJECTS GRID */}
        {/* This creates a responsive grid that shows all your projects */}
        {/* The grid automatically adjusts: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* MAP THROUGH PROJECTS */}
            {/* This automatically creates a card for each project in the workProjects array */}
            {/* The animation delay makes cards appear one after another */}
            {workProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              >
                {/* PROJECT CARD COMPONENT */}
                {/* Each card shows project image, title, role, year, and description */}
                {/* Clicking it opens the modal with full details */}
                <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL POPUP */}
      {/* This is the detailed view that appears when you click a project card */}
      {/* It's hidden by default and only shows when isModalOpen is true */}
      {/* The modal shows: full description, technologies, achievements, gallery images */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
