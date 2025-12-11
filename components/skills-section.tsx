"use client"

// ============================================================================
// SKILLS SECTION COMPONENT
// ============================================================================
// This component displays your skills organized into categories.
// Each category is shown as a card with an icon, title, and skill badges.
//
// TO MODIFY YOUR SKILLS:
// - Edit the "skillCategories" array below
// - Each category has: title, icon, color, and skills (array of skill names)
// - To add a skill: Add it to the skills array of the appropriate category
// - To remove a skill: Delete it from the skills array
// - To add a category: Copy an existing category object and update it
// - To remove a category: Delete its object from the array
// ============================================================================

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Lightbulb, Users, Palette, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
export function SkillsSection() {
  // ============================================================================
  // SKILL CATEGORIES DATA
  // ============================================================================
  // This array defines all your skill categories and the skills within each.
  // Each category object contains:
  // - title: Category name (e.g., "Game Engines & Tools")
  // - icon: Icon component from lucide-react (you can change these)
  // - color: Color theme ("primary", "secondary", or "accent")
  // - skills: Array of skill names as strings
  // ============================================================================
  const skillCategories = [
    {
      title: "Game Engines & Tools",
      icon: Wrench,
      color: "primary",
      skills: ["Unity", "Unreal Engine 5", "Godot", "GameMaker Studio"],
    },
    {
      title: "Design Specialties",
      icon: Lightbulb,
      color: "secondary",
      skills: [
        "Systems Design",
        "Level Design",
        "Economy Design",
        "Multiplayer Design",
        "Narrative Design",
        "UI/UX Design",
      ],
    },
    {
      title: "Technical Skills",
      icon: Code,
      color: "accent",
      skills: ["C#", "C++", "Python", "Blueprint", "Version Control (Git)", "Data Analysis"],
    },
    {
      title: "Production & Management",
      icon: Users,
      color: "primary",
      skills: ["Agile/Scrum", "Jira", "Confluence", "Miro", "Team Leadership", "Project Planning"],
    },
    {
      title: "Creative Tools",
      icon: Palette,
      color: "secondary",
      skills: ["Figma", "Photoshop", "Blender (Basic)", "Audacity", "Notion"],
    },
  ]

  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  return (
    // MAIN SECTION CONTAINER - The "id='skills'" is important - it's used by the navigation to scroll to this section
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div
        className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      {/* HEADER SECTION */}
      <div className="container relative mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10">
            <Code className="h-8 w-8 text-primary" />
          </div>
          {/* MAIN TITLE - Change "Skills & Expertise" to whatever you want */}
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          {/* SUBTITLE - Change this description text */}
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
            Tools and technologies I use to bring games to life
          </p>
          {/* DECORATIVE TEXT WITH SPARKLES */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Continuously learning and expanding my toolkit</span>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* SKILL CATEGORIES GRID */}
        {/* Automatically creates a card for each category in skillCategories array */}
        <div className="mx-auto max-w-4xl space-y-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              // SKILL CATEGORY CARD - Each category gets its own card with icon, title, and skill badges
              <Card
                key={category.title}
                className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 75}ms`, animationFillMode: "both" }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    {/* CATEGORY ICON - Icon color changes based on category.color property */}
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg border",
                        category.color === "primary" && "bg-primary/10 border-primary/30",
                        category.color === "secondary" && "bg-secondary/10 border-secondary/30",
                        category.color === "accent" && "bg-accent/10 border-accent/30"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          category.color === "primary" && "text-primary",
                          category.color === "secondary" && "text-secondary",
                          category.color === "accent" && "text-accent"
                        )}
                      />
                    </div>
                    {/* CATEGORY TITLE */}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* SKILL BADGES */}
                  {/* Creates a badge for each skill in the category */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="border border-primary/30 bg-primary/10 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
                        style={{
                          animationDelay: `${index * 75 + skillIndex * 30}ms`,
                          animationFillMode: "both",
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
