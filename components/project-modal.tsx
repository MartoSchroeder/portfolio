"use client"

// ============================================================================
// PROJECT MODAL COMPONENT
// ============================================================================
// This component creates a popup modal that shows detailed information about
// a project when you click on a project card.
//
// WHAT IT DISPLAYS:
// - Large project image with gallery navigation (if multiple images)
// - Project title, role, year, duration, team size
// - Full detailed description
// - Technologies used (as badges)
// - Key achievements (as bullet list)
// - Link to external project page (if available)
//
// TO CUSTOMIZE:
// - The modal layout and styling can be modified in the return section
// - Colors and spacing are controlled by CSS classes
// - The gallery navigation appears automatically if project has multiple images
// ============================================================================

import { useState } from "react"
import { X, ExternalLink, Calendar, User, Clock, Award, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
// This function creates the modal popup that shows project details.
// It receives: the project data, whether it's open, and a function to close it.
// ============================================================================
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // STATE: Track which image in the gallery is currently displayed
  // When a project has multiple images, users can navigate between them
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // EARLY RETURN: If modal is not open or no project is selected, don't render anything
  // This makes the modal invisible when closed
  if (!isOpen || !project) return null

  // GALLERY SETUP: Use project.gallery if it exists, otherwise use image and gif
  // This ensures there's always at least one image to display
  const gallery = project.gallery || [project.image, project.gif]

  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  // This is what gets displayed in the modal popup.
  // The modal has a backdrop (dark overlay) and a content area.
  // ============================================================================
  return (
    <>
      {/* BACKDROP OVERLAY */}
      {/* This is the dark semi-transparent background behind the modal */}
      {/* Clicking it closes the modal */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* MODAL CONTAINER */}
      {/* This centers the modal content on the screen */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        {/* MODAL CONTENT BOX */}
        {/* This is the actual modal box with all the project information */}
        {/* The "pointer-events-auto" allows clicking inside the modal */}
        {/* The "stopPropagation" prevents clicks inside from closing the modal */}
        <div
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 rounded-xl shadow-2xl pointer-events-auto animate-in zoom-in-95 duration-300 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50 scrollbar-thumb-rounded-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          {/* X button in the top-right corner to close the modal */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background hover:rotate-90 transition-all duration-300"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* IMAGE GALLERY SECTION */}
          {/* Shows the main project image, with navigation dots if multiple images exist */}
          <div className="relative h-[40vh] md:h-[50vh] w-full bg-muted overflow-hidden">
            {/* CURRENT GALLERY IMAGE */}
            {/* Displays the image at the current index in the gallery array */}
            <img
              src={gallery[currentImageIndex] || "/icons/placeholder.svg"}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="h-full w-full object-cover"
            />

            {/* GALLERY NAVIGATION DOTS */}
            {/* Only shows if there are multiple images in the gallery */}
            {/* Clicking a dot switches to that image */}
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

            {/* HIGHLIGHT BADGE */}
            {/* Shows special achievements like "50M+ Players" */}
            {/* Only displays if the project has a "highlight" property */}
            {project.highlight && (
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-accent/50 bg-accent/20 backdrop-blur-md px-4 py-2 text-sm font-semibold text-accent">
                <Award className="h-4 w-4" />
                {project.highlight}
              </div>
            )}
          </div>

          {/* CONTENT SECTION */}
          {/* This contains all the text information about the project */}
          <div className="p-8 space-y-8">
            {/* PROJECT HEADER SECTION */}
            {/* Contains title, role, year, duration, team size, and platforms */}
            <div className="space-y-4">
              {/* PROJECT TITLE */}
              {/* Large gradient title at the top */}
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {project.title}
              </h2>

              {/* PROJECT METADATA */}
              {/* Shows role, year, duration (if available), and team size (if available) */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-foreground">{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{project.year}</span>
                </div>
                {/* Duration is optional - only shows if project has a duration property */}
                {project.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {/* Team size is optional - only shows if project has a teamSize property */}
                {project.teamSize && (
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="h-4 w-4 text-primary" />
                    <span>Team of {project.teamSize}</span>
                  </div>
                )}
              </div>

              {/* PLATFORM BADGES */}
              {/* Shows all platforms the project was released on */}
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

            {/* ABOUT SECTION */}
            {/* Shows the detailed description of the project */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">About This Project</h3>
              {/* Uses detailedDescription if available, otherwise falls back to description */}
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* TECHNOLOGIES SECTION */}
            {/* Only shows if the project has technologies listed */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Technologies & Tools</h3>
                {/* Creates a badge for each technology */}
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

            {/* ACHIEVEMENTS SECTION */}
            {/* Only shows if the project has achievements listed */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Key Achievements</h3>
                {/* Creates a bullet list of achievements */}
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

            {/* EXTERNAL LINK BUTTON */}
            {/* Only shows if the project has a link property */}
            {/* Opens the project website in a new tab */}
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

