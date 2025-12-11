"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export function VideoHero() {
  const scrollToWork = () => {
    const element = document.getElementById("work")
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/placeholder/epic-game-compilation-montage.jpg"
        >
          <source src="/videos/game-compilation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/40 to-background" />

        {/* Animated gradient orbs for playful effect */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-slide-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-primary backdrop-blur-sm glow-effect">
              <Sparkles className="h-4 w-4" />
              Game Designer & Producer
              <Sparkles className="h-4 w-4" />
            </div>
            <h1 className="text-balance text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Martin Schroeder
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Crafting immersive gaming experiences through innovative design and production excellence
            </p>
            <p className="mx-auto max-w-2xl text-pretty text-lg font-semibold text-primary/90 md:text-xl mt-4">
              Shipped to millions of players worldwide
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToWork}
              className="gap-2 bg-primary text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <span>View My Work</span>
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              asChild
            >
              <a href="mailto:martin@example.com">
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-16 w-16 rounded-full border border-border/50 bg-background/30 backdrop-blur-sm hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-7 w-7" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-16 w-16 rounded-full border border-border/50 bg-background/30 backdrop-blur-sm hover:bg-secondary/20 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-7 w-7" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="rounded-full border border-primary/50 bg-primary/10 p-3 backdrop-blur-sm">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
