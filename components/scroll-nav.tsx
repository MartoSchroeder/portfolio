"use client"

// ============================================================================
// SCROLL NAVIGATION COMPONENT
// ============================================================================
// This component creates the fixed navigation bar at the top of the page.
// It:
// - Stays fixed at the top while scrolling
// - Highlights the current section you're viewing
// - Allows clicking to jump to different sections
// - Shows your name and title
//
// TO MODIFY NAVIGATION ITEMS:
// - Edit the "navItems" array below to add/remove/change menu items
// - Each item needs: id (must match section id), label (text shown), icon (from lucide-react)
// - Make sure section IDs match (e.g., id: "work" matches section id="work")
//
// TO MODIFY YOUR NAME/TITLE:
// - Find the text in the return section below (around line 84-85)
// ============================================================================

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Briefcase, Gamepad2, User, Code, Mail, Home } from "lucide-react"

// ============================================================================
// NAVIGATION ITEMS CONFIGURATION
// ============================================================================
// This array defines what sections appear in the navigation bar.
// TO ADD/REMOVE ITEMS: Edit this array
// - id: Must match the id of the section on the page (e.g., id="work")
// - label: Text shown in the navigation button
// - icon: Icon component from lucide-react (you can import different icons)
// ============================================================================
const navItems = [
  { id: "top", label: "Top", icon: Home },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "personal", label: "Personal", icon: Gamepad2 },
  { id: "bio", label: "Bio", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "contact", label: "Contact", icon: Mail },
]

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
export function ScrollNav() {
  // STATE MANAGEMENT:
  // - activeSection: Tracks which section is currently visible (for highlighting)
  // - isScrolled: Tracks if user has scrolled down (changes nav appearance)
  const [activeSection, setActiveSection] = useState("work")
  const [isScrolled, setIsScrolled] = useState(false)

  // EFFECT: Monitor scroll position
  // This runs automatically when the page loads and whenever you scroll.
  // It updates which section is active and whether the nav should have a background.
  useEffect(() => {
    const handleScroll = () => {
      // Show background if scrolled more than 100 pixels
      setIsScrolled(window.scrollY > 100)

      // Find all sections and their positions
      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id: item.id,
              top: rect.top,
              bottom: rect.bottom,
            }
          }
          return null
        })
        .filter(Boolean)

      // Determine which section is currently in view (within 200px from top)
      const current = sections.find((section) => section && section.top <= 200 && section.bottom > 200)
      if (current) {
        setActiveSection(current.id)
      }
    }

    // Set up scroll listener
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Run once on load
    return () => window.removeEventListener("scroll", handleScroll) // Cleanup
  }, [])

  // FUNCTION: Scroll to a specific section
  // Called when a navigation button is clicked
  // Smoothly scrolls to the section with the given ID
  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  return (
    // NAVIGATION BAR - Fixed at the top, changes appearance when scrolled
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          {/* LEFT SIDE: Your Name and Title */}
          {/* EDIT THESE: Change your name and title */}
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Martin Schroeder</h2>
              <p className="text-sm text-muted-foreground">Production & Game Design</p>
            </div>
          </div>

          {/* RIGHT SIDE: Navigation Buttons */}
          {/* These are automatically generated from the navItems array */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="default"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "gap-2 transition-all duration-300",
                    // Highlight active section with different colors
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {/* Label hidden on small screens, shown on larger screens */}
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
