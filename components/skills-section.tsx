"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Lightbulb, Users, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

export function SkillsSection() {
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

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl animate-float" />

      <div className="container relative mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10 animate-float">
            <Code className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Skills & Expertise</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Tools and technologies I use to bring games to life
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={category.title}
                className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 75}ms`, animationFillMode: "both" }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
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
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
