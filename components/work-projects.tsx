"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { CompanyLogosBanner } from "@/components/company-logos-banner"
import { Briefcase, Sparkles } from "lucide-react"

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
      "EA Madden NFL (known as John Madden Football until 1993) is an American football sports video game series developed by EA Orlando for EA Sports.",
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
      "Combat designer, character design and implementation and encounter balancing",
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
]

export function WorkProjects() {
  const [selectedProject, setSelectedProject] = useState<(typeof workProjects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof workProjects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="work" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container relative mx-auto px-4">
          <div className="mb-16 space-y-4 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Professional Work
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              AAA productions and commercial games that have reached players worldwide
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Shipped to millions of players worldwide</span>
              <Sparkles className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>

        <CompanyLogosBanner />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              >
                <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
