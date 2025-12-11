"use client"

// ============================================================================
// VIDEO HERO COMPONENT
// ============================================================================
// This is the main hero section at the top of the page.
// It displays:
// - Background video (or image if video doesn't load)
// - Your name and title
// - Call-to-action buttons
// - Social media links
//
// TO MODIFY:
// - Change the video path in the <video> tag (or remove video to use image)
// - Update your name and title text
// - Update the email address in the "Get in Touch" button
// - Update social media links (LinkedIn, GitHub)
// - Modify the scroll target if you want the button to scroll to a different section
// ============================================================================

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
export function VideoHero() {
  // FUNCTION: Scroll to Work section
  // When the "View My Work" button is clicked, this smoothly scrolls to the work section
  // You can change "work" to any other section ID (like "personal", "bio", etc.)
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

  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  return (
    // HERO SECTION - Full screen hero section at the top of the page
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* BACKGROUND VIDEO/IMAGE - This creates the background video. If video doesn't exist, it shows the poster image. TO CHANGE VIDEO: Update the src path or remove video tag to use static image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/placeholder/epic-game-compilation-montage.jpg"
        >
          {/* EDIT THIS: Change the video file path, or remove video to use static image */}
          <source src="/videos/game-compilation.mp4" type="video/mp4" />
        </video>
        {/* OVERLAY LAYERS - These create the darkening and gradient effects over the video */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/40 to-background" />

        {/* ANIMATED GRADIENT ORBS - Decorative glowing circles */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* CONTENT SECTION - Text and buttons overlaid on the video */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-slide-up">
          <div className="space-y-4">
            {/* JOB TITLE BADGE - EDIT THIS TEXT */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-primary backdrop-blur-sm glow-effect">
              <Sparkles className="h-4 w-4" />
              Game Designer & Producer
              <Sparkles className="h-4 w-4" />
            </div>
            {/* YOUR NAME - EDIT THIS */}
            <h1 className="text-balance text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl text-foreground">
              Martin Schroeder
            </h1>
            {/* MAIN TAGLINE - EDIT THIS DESCRIPTION */}
            <p className="mx-auto max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Crafting immersive gaming experiences through innovative design and production excellence
            </p>
            {/* SECONDARY TAGLINE - EDIT THIS */}
            <p className="mx-auto max-w-2xl text-pretty text-lg font-semibold text-primary/90 md:text-xl mt-4">
              Shipped to millions of players worldwide
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* VIEW MY WORK BUTTON - Scrolls to work section when clicked */}
            <Button
              size="lg"
              onClick={scrollToWork}
              className="gap-2 bg-primary text-lg border-2 border-white hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group px-8 py-6"
            >
              <span>View My Work</span>
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
            </Button>
            {/* GET IN TOUCH BUTTON - EDIT THE EMAIL ADDRESS HERE */}
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-2 border-white bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:border-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 px-8 py-6"
              asChild
            >
              <a href="mailto:martin@example.com">
                <Mail className="h-6 w-6" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* SOCIAL MEDIA BUTTONS - EDIT THE URLs HERE */}
          <div className="flex items-center justify-center gap-4 pt-4">
            {/* LINKEDIN BUTTON */}
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
            {/* GITHUB BUTTON */}
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

      {/* SCROLL INDICATOR - Animated arrow at the bottom */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="rounded-full border border-primary/50 bg-primary/10 p-3 backdrop-blur-sm">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
