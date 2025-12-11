"use client"

// ============================================================================
// PROJECT CARD COMPONENT
// ============================================================================
// This component creates a single project card that displays:
// - Project image (switches to GIF on hover)
// - Project title, role, year, and duration
// - Short description
// - Platform badges
// - Optional highlight badge (like "50M+ Players")
// - Optional external link button
//
// TO CUSTOMIZE THE CARD APPEARANCE:
// - Colors and styling are controlled by CSS classes (Tailwind CSS)
// - Hover effects are automatic (image zoom, border glow, etc.)
// - To change hover behavior, look for "group-hover" classes
// - To change colors, modify the "primary", "secondary", "accent" color values
// ============================================================================

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================
// These define what properties a project object should have.
// You don't need to modify these unless you want to add new properties.
// ============================================================================
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

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
// This function creates a single project card.
// It receives a project object and an onClick function (for opening the modal).
// ============================================================================
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  // STATE: Track if the card is being hovered
  // When hovered, the image switches from static image to animated GIF
  const [isHovered, setIsHovered] = useState(false)

  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  // This is what gets displayed for each project card.
  // The card has hover effects, image switching, and click functionality.
  // ============================================================================
  return (
    // MAIN CARD CONTAINER
    // The "group" class enables hover effects on child elements
    // Clicking anywhere on the card triggers the onClick function (opens modal)
    <Card
      className="group relative overflow-hidden border-border/50 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      {/* CARD CONTENT WRAPPER */}
      <div className="relative overflow-hidden">
        {/* IMAGE SECTION */}
        {/* This displays the project image and handles the hover-to-GIF effect */}
        <div className="relative aspect-video w-full overflow-hidden bg-transparent">
          {/* IMAGE CONTAINER WITH HOVER DETECTION - When mouse enters, isHovered becomes true and shows the GIF. When mouse leaves, shows the static image */}
          <div
            className="relative h-full w-full overflow-hidden bg-transparent"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              {/* PROJECT IMAGE - Shows project.image when not hovered, project.gif when hovered. Both images fill the container completely */}
              <img
              src={isHovered ? project.gif : project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* HIGHLIGHT BADGE - Shows special achievements like "50M+ Players" or "1st Place GGJ". Only displays if the project has a "highlight" property */}
          {project.highlight && (
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-accent">
              <Award className="h-3.5 w-3.5" />
              {project.highlight}
            </div>
          )}
        </div>

        {/* CARD HEADER - Contains the project title, role, year, and duration */}
        <CardHeader className="relative space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 space-y-2">
              {/* PROJECT TITLE */}
              <CardTitle className="text-balance text-xl font-bold tracking-tight">
                {project.title}
              </CardTitle>
              {/* PROJECT METADATA - Shows role, year, and optionally duration */}
              <CardDescription className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold text-foreground/90">{project.role}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{project.year}</span>
                {/* Duration is optional - only shows if project has a duration property */}
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
            {/* EXTERNAL LINK BUTTON - Only shows if the project has a link property. Opens the link in a new tab when clicked */}
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

        {/* CARD CONTENT - Contains the description and platform badges */}
        <CardContent className="relative space-y-4">
          {/* PROJECT DESCRIPTION - Short description text (1-2 sentences) */}
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          
          {/* PLATFORM BADGES - Creates a badge for each platform (PC, Mobile, Console, etc.). Each badge animates in with a slight delay for a staggered effect */}
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

