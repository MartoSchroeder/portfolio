"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Briefcase, Heart } from "lucide-react"

export function BioSection() {
  return (
    <section id="bio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-float" />

      <div className="container relative mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/50 bg-accent/10 animate-float">
            <User className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">About Me</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            My journey through the gaming industry
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-primary" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate game designer and production specialist with over 8 years of experience crafting
                engaging gameplay experiences across multiple platforms. My expertise lies in systems design, player
                psychology, and bridging the gap between creative vision and technical execution.
              </p>
              <p>
                Throughout my career, I've worked on AAA titles, indie projects, and everything in between. I specialize
                in multiplayer systems, economy design, and creating mechanics that keep players engaged for thousands
                of hours. My approach combines data-driven iteration with creative experimentation to find the perfect
                balance.
              </p>
              <p>
                When I'm not designing games professionally, you'll find me prototyping experimental mechanics,
                participating in game jams, or diving deep into the latest indie releases to study what makes them tick.
                I believe great game design comes from understanding both the art and science of player engagement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Briefcase className="h-6 w-6 text-secondary" />
                Experience Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative space-y-6 pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-accent">
                <div className="relative space-y-2 animate-slide-up">
                  <div className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/50" />
                  <h3 className="font-semibold text-lg text-foreground">Senior Game Designer</h3>
                  <p className="text-sm font-medium text-primary">Quantum Studios • 2021 - Present</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leading design on next-gen multiplayer experiences, managing cross-functional teams, and driving
                    innovation in competitive gameplay systems.
                  </p>
                </div>

                <div className="relative space-y-2 animate-slide-up" style={{ animationDelay: "100ms" }}>
                  <div className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-secondary bg-background shadow-lg shadow-secondary/50" />
                  <h3 className="font-semibold text-lg text-foreground">Game Designer</h3>
                  <p className="text-sm font-medium text-secondary">Pixel Forge Games • 2018 - 2021</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Designed core gameplay loops, progression systems, and monetization strategies for mobile and PC
                    titles reaching millions of players.
                  </p>
                </div>

                <div className="relative space-y-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <div className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background shadow-lg shadow-accent/50" />
                  <h3 className="font-semibold text-lg text-foreground">Junior Designer</h3>
                  <p className="text-sm font-medium text-accent">Indie Collective • 2016 - 2018</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Prototyped gameplay mechanics, conducted playtesting sessions, and contributed to multiple
                    award-winning indie titles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
