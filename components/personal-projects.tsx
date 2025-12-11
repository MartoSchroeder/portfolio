"use client"

// ============================================================================
// PERSONAL PROJECTS COMPONENT
// ============================================================================
// This component displays your personal/indie projects in a grid layout.
// It works exactly like the Work Projects component but shows different projects.
// When a project card is clicked, it opens a detailed modal with more information.
//
// TO MODIFY PROJECT DATA:
// - Find the "personalProjects" array below (starts around line 8)
// - Each project object contains: title, description, role, year, platforms, 
//   image paths, links, and detailed information
// - To add a new project: copy an existing project object and update the values
// - To remove a project: delete its entire object from the array
// ============================================================================

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { Gamepad2, Sparkles } from "lucide-react"

// ============================================================================
// PERSONAL PROJECT DATA ARRAY
// ============================================================================
// This is where all your personal/indie projects are stored.
// Each project is an object with multiple properties you can customize.
//
// IMPORTANT PROPERTIES TO KNOW:
// - title: The project name (shown on the card)
// - description: Short description (shown on card, max 1-2 sentences)
// - role: Your role on the project (e.g., "Solo Developer", "Game Designer")
// - year: The year the project was completed/released
// - platforms: Array of platforms (e.g., ["PC", "Web", "Mobile"])
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
const personalProjects = [
  {
    title: "Dungeon Crawler Prototype",
    description:
      "Personal passion project exploring procedural generation and roguelike mechanics. Built with Unity and custom algorithms for infinite replayability.",
    role: "Solo Developer",
    year: "2024",
    platforms: ["PC", "itch.io"],
    image: "/placeholder/dungeon-crawler-game.jpg",
    gif: "/placeholder/dungeon-crawler-procedural-generation.jpg",
    link: "#",
    duration: "6 months",
    teamSize: "1 (Solo)",
    detailedDescription:
      "A deeply personal project exploring my love for procedural generation and roguelike design. Built entirely solo during evenings and weekends, this prototype features a custom procedural generation system that creates endless dungeon layouts, a modular ability system, and permadeath mechanics. The project served as both a creative outlet and a technical learning experience.",
    technologies: ["Unity", "C#", "ProBuilder", "DOTween", "Git"],
    achievements: [
      "Implemented custom procedural generation algorithm",
      "Created modular ability system with 50+ unique powers",
      "Built reusable enemy AI framework",
      "Released playable demo on itch.io with 1K+ downloads",
      "Featured in Indie Game Roundup newsletter",
    ],
    gallery: ["/placeholder/dungeon-crawler-game.jpg", "/placeholder/dungeon-crawler-procedural-generation.jpg"],
  },
  {
    title: "Puzzle Jam Winner",
    description:
      "First-place winner in Global Game Jam 2023. A mind-bending puzzle game about perspective and spatial reasoning.",
    role: "Designer & Developer",
    year: "2023",
    platforms: ["Web", "Mobile"],
    image: "/placeholder/puzzle-game-levels.jpg",
    gif: "/placeholder/puzzle-game-solving-animation.jpg",
    link: "#",
    highlight: "1st Place GGJ",
    duration: "48 hours",
    teamSize: "4",
    detailedDescription:
      "Created during the intense 48-hour Global Game Jam 2023, this puzzle game challenges players to manipulate perspective and space to solve increasingly complex challenges. Working with a small team of passionate developers and artists, we created a unique mechanic that judges praised for its originality and polish. The game went on to win first place in our local jam site.",
    technologies: ["Godot", "GDScript", "Aseprite", "Audacity"],
    achievements: [
      "Won 1st place at Global Game Jam 2023 local site",
      "Completed and polished game in 48 hours",
      "Designed 15 puzzle levels with progressive difficulty",
      "Received 'Most Innovative Mechanic' award",
      "Played by 5K+ people on itch.io",
    ],
    gallery: ["/placeholder/puzzle-game-levels.jpg", "/placeholder/puzzle-game-solving-animation.jpg"],
  },
  {
    title: "Retro Arcade Collection",
    description:
      "A love letter to classic arcade games, reimagined with modern design principles and accessibility features.",
    role: "Game Designer",
    year: "2022",
    platforms: ["PC", "Steam"],
    image: "/placeholder/retro-arcade-game.png",
    gif: "/placeholder/retro-arcade-gameplay.jpg",
    link: "#",
    highlight: "Community Favorite",
    duration: "4 months",
    teamSize: "2",
    detailedDescription:
      "A passion project born from nostalgia for classic arcade games. This collection reimagines 8 retro arcade classics with modern accessibility features, remappable controls, and assist modes. The project was particularly focused on making classic arcade gameplay accessible to players with disabilities while maintaining the challenge and feel of the originals.",
    technologies: ["GameMaker Studio 2", "GML", "Photoshop", "FL Studio"],
    achievements: [
      "Reimagined 8 classic arcade games with modern features",
      "Implemented comprehensive accessibility options",
      "Released on Steam with 'Very Positive' reviews",
      "Featured in accessibility gaming community highlights",
      "Sold 10K+ copies",
    ],
    gallery: ["/placeholder/retro-arcade-game.png", "/placeholder/retro-arcade-gameplay.jpg"],
  },
]

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
// This is the main component that renders the personal projects section.
// It manages which project is selected and whether the modal is open.
// ============================================================================
export function PersonalProjects() {
  // STATE MANAGEMENT:
  // These variables track which project is currently selected and if the modal is open.
  // You don't need to modify these - they're handled automatically by the component.
  const [selectedProject, setSelectedProject] = useState<(typeof personalProjects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // FUNCTION: When a project card is clicked
  // This function is called automatically when someone clicks on a project card.
  // It sets the selected project and opens the modal to show details.
  const handleProjectClick = (project: (typeof personalProjects)[0]) => {
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
  // 3. Grid of project cards
  // 4. Modal popup (hidden until a project is clicked)
  // ============================================================================
  return (
    <>
      {/* MAIN SECTION CONTAINER */}
      {/* The "id='personal'" is important - it's used by the navigation to scroll to this section */}
      <section id="personal" className="relative py-24 md:py-32 overflow-hidden">
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
            {/* Icon container - you can change the Gamepad2 icon to something else */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10">
              <Gamepad2 className="h-8 w-8 text-primary" />
            </div>
            {/* MAIN TITLE - Change "Personal Projects" to whatever you want */}
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Personal Projects
            </h2>
            {/* SUBTITLE - Change this description text to match your needs */}
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Experimental games and passion projects where I explore new mechanics and ideas
            </p>
            {/* DECORATIVE TEXT WITH SPARKLES */}
            {/* The sparkles animate to draw attention */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              {/* Change this text to highlight your personal projects */}
              <span className="text-sm font-medium text-primary">Made with passion and creativity</span>
              <Sparkles className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>

          {/* PROJECTS GRID */}
          {/* This creates a responsive grid that shows all your personal projects */}
          {/* The grid automatically adjusts: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* MAP THROUGH PROJECTS */}
            {/* This automatically creates a card for each project in the personalProjects array */}
            {/* The animation delay makes cards appear one after another */}
            {personalProjects.map((project, index) => (
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
