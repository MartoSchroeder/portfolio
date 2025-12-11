"use client"

import { useState } from "react"
import { X, ExternalLink, Calendar, User, Clock, Award, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  description: string
  role: string
  year: string
  platforms: string[]
  image: string
  gif: string
  link?: string
  highlight?: string
  duration?: string
  detailedDescription?: string
  gallery?: string[]
  technologies?: string[]
  achievements?: string[]
  teamSize?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !project) return null

  const gallery = project.gallery || [project.image, project.gif]

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 rounded-xl shadow-2xl pointer-events-auto animate-in zoom-in-95 duration-300 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50 scrollbar-thumb-rounded-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background hover:rotate-90 transition-all duration-300"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="relative h-[40vh] md:h-[50vh] w-full bg-muted overflow-hidden">
            <img
              src={gallery[currentImageIndex] || "/icons/placeholder.svg"}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="h-full w-full object-cover"
            />

            {gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}

            {project.highlight && (
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-accent/50 bg-accent/20 backdrop-blur-md px-4 py-2 text-sm font-semibold text-accent">
                <Award className="h-4 w-4" />
                {project.highlight}
              </div>
            )}
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-foreground">{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{project.year}</span>
                </div>
                {project.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="h-4 w-4 text-primary" />
                    <span>Team of {project.teamSize}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.platforms.map((platform) => (
                  <Badge
                    key={platform}
                    variant="secondary"
                    className="border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">About This Project</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-secondary/50 bg-secondary/10 text-secondary hover:bg-secondary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.achievements && project.achievements.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Key Achievements</h3>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.link && (
              <Button className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

