"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Briefcase, Gamepad2, User, Code, Mail, Home } from "lucide-react"

const navItems = [
  { id: "top", label: "Top", icon: Home },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "personal", label: "Personal", icon: Gamepad2 },
  { id: "bio", label: "Bio", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "contact", label: "Contact", icon: Mail },
]

export function ScrollNav() {
  const [activeSection, setActiveSection] = useState("work")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

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

      const current = sections.find((section) => section && section.top <= 200 && section.bottom > 200)
      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Martin Schroeder</h2>
              <p className="text-sm text-muted-foreground">Production & Game Design</p>
            </div>
          </div>

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
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  <Icon className="h-5 w-5" />
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
