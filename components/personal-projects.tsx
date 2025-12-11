"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { Gamepad2, Heart } from "lucide-react"

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

export function PersonalProjects() {
  const [selectedProject, setSelectedProject] = useState<(typeof personalProjects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof personalProjects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="personal" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container relative mx-auto px-4">
          <div className="mb-16 space-y-4 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary/50 bg-secondary/10">
              <Gamepad2 className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent">
              Personal Projects
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Experimental games and passion projects where I explore new mechanics and ideas
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <Heart className="h-4 w-4 text-accent animate-pulse fill-accent" />
              <span className="text-sm font-medium text-accent">Made with passion and creativity</span>
              <Heart className="h-4 w-4 text-accent animate-pulse fill-accent" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project, index) => (
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
