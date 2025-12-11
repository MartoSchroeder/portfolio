"use client"

import { ProjectCard } from "@/components/project-card"

interface Project {
  id: string
  title: string
  description: string
  role: string
  year: string
  platforms: string[]
  image: string
  gif: string
  link?: string
}

const workProjects: Project[] = [
  {
    id: "1",
    title: "Neon Nexus",
    description: "A fast-paced multiplayer shooter with innovative mechanics and competitive gameplay",
    role: "Lead Game Designer",
    year: "2024",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    image: "/placeholder/futuristic-shooter-game-screenshot.jpg",
    gif: "/placeholder/futuristic-shooter-gameplay-animated.jpg",
  },
  {
    id: "2",
    title: "EA SPORTS™ Madden NFL 25",
    description: "EA Madden NFL is an American football sports video game series developed by EA Orlando for EA Sports.",
    role: "Producer",
    year: "2024",
    platforms: ["PC", "Consoles"],
    image: "/madden 25/m25-promo1.png",
    gif: "/placeholder/fantasy-rpg-crafting-animation.jpg",
  },
  {
    id: "3",
    title: "Velocity Racer",
    description: "High-speed racing game featuring procedural track generation and physics-based gameplay",
    role: "Game Designer",
    year: "2023",
    platforms: ["PC", "Switch"],
    image: "/placeholder/racing-game-neon-tracks.jpg",
    gif: "/placeholder/racing-game-speed-animation.jpg",
  },
]

const personalProjects: Project[] = [
  {
    id: "4",
    title: "Puzzle Dimensions",
    description: "Experimental puzzle game exploring non-euclidean geometry and mind-bending mechanics",
    role: "Solo Developer",
    year: "2024",
    platforms: ["PC", "Web"],
    image: "/placeholder/abstract-puzzle-game-geometry.jpg",
    gif: "/placeholder/puzzle-game-animation-shifting-geometry.jpg",
    link: "https://itch.io",
  },
  {
    id: "5",
    title: "Roguelike Prototype",
    description: "Turn-based roguelike with procedural generation and unique card-based combat system",
    role: "Designer & Developer",
    year: "2024",
    platforms: ["PC"],
    image: "/placeholder/roguelike-dungeon-game.jpg",
    gif: "/placeholder/roguelike-game-combat-animation.jpg",
    link: "https://github.com",
  },
  {
    id: "6",
    title: "Horror Jam Entry",
    description: "Atmospheric horror experience created in 48 hours for Global Game Jam 2024",
    role: "Game Designer",
    year: "2024",
    platforms: ["PC"],
    image: "/placeholder/horror-game-dark-atmosphere.jpg",
    gif: "/placeholder/horror-game-spooky-animation.jpg",
  },
]

interface ProjectsGridProps {
  type: "work" | "personal"
}

export function ProjectsGrid({ type }: ProjectsGridProps) {
  const projects = type === "work" ? workProjects : personalProjects

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

