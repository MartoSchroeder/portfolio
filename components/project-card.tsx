"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

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

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden border-border/50 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative">
        <div
          className="relative aspect-video w-full overflow-hidden bg-muted"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? project.gif : project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl shadow-primary/50 transition-transform duration-300 hover:scale-110">
              <Play className="h-10 w-10 text-white" fill="currentColor" />
            </div>
          </div>

          {project.highlight && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-accent">
              <Award className="h-3.5 w-3.5" />
              {project.highlight}
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card via-card/90 to-transparent" />
        </div>

        <CardHeader className="relative space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 space-y-2">
              <CardTitle className="text-balance text-xl font-bold tracking-tight transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                {project.title}
              </CardTitle>
              <CardDescription className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold text-foreground/90">{project.role}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{project.year}</span>
                {project.duration && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {project.duration}
                    </span>
                  </>
                )}
              </CardDescription>
            </div>
            {project.link && (
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary hover:rotate-12 transition-all duration-300"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="relative space-y-4">
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.platforms.map((platform, index) => (
              <Badge
                key={platform}
                variant="secondary"
                className="border border-primary/30 bg-primary/10 text-xs font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
                style={{
                  animationDelay: `${index * 75}ms`,
                  animation: "slide-up 0.5s ease-out forwards",
                }}
              >
                {platform}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

