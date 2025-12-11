"use client"

// ============================================================================
// BIO SECTION COMPONENT
// ============================================================================
// This component displays your biography and work experience timeline.
// It shows:
// - About Me section with personal description
// - Experience Highlights with a timeline of your work history
//
// TO MODIFY YOUR BIO:
// - Find the text content in the CardContent sections below
// - Update the paragraphs with your own information
// - Modify the experience timeline entries (job titles, companies, dates, descriptions)
// - Change icons if desired (Heart, Briefcase)
// ============================================================================

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Briefcase, Heart, Sparkles } from "lucide-react"

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
export function BioSection() {
  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  return (
    // MAIN SECTION CONTAINER
    // The "id='bio'" is important - it's used by the navigation to scroll to this section
    <section id="bio" className="relative py-24 md:py-32 overflow-hidden">
        {/* BACKGROUND DECORATIVE ELEMENTS - These create the gradient background and glowing orb effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />

      {/* HEADER SECTION */}
      <div className="container relative mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          {/* Icon container */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10">
            <User className="h-8 w-8 text-primary" />
          </div>
          {/* MAIN TITLE - Change "About Me" to whatever you want */}
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            About Me
          </h2>
          {/* SUBTITLE - Change this description text */}
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
            My journey through the gaming industry
          </p>
          {/* DECORATIVE TEXT WITH SPARKLES - Change this text to highlight your passion */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Passionate about creating memorable gaming experiences</span>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* CONTENT CARDS */}
        <div className="mx-auto max-w-4xl space-y-6">
          {/* ABOUT ME CARD */}
          {/* This card contains your personal bio/description */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-primary" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              {/* EDIT THESE PARAGRAPHS: Replace with your own bio text */}
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

          {/* EXPERIENCE HIGHLIGHTS CARD */}
          {/* This card contains your work experience timeline */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Briefcase className="h-6 w-6 text-secondary" />
                Experience Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* TIMELINE CONTAINER */}
              {/* The "before:" classes create the vertical timeline line */}
              <div className="relative space-y-6 pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-accent">
                {/* EXPERIENCE ENTRY 1 */}
                {/* To add more entries, copy this entire div block and update the content */}
                {/* To remove an entry, delete its entire div block */}
                <div className="relative space-y-2 animate-slide-up">
                  {/* Timeline dot indicator */}
                  <div className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/50" />
                  {/* Job Title - EDIT THIS */}
                  <h3 className="font-semibold text-lg text-foreground">Senior Game Designer</h3>
                  {/* Company and Date - EDIT THIS */}
                  <p className="text-sm font-medium text-primary">Quantum Studios • 2021 - Present</p>
                  {/* Job Description - EDIT THIS */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leading design on next-gen multiplayer experiences, managing cross-functional teams, and driving
                    innovation in competitive gameplay systems.
                  </p>
                </div>

                {/* EXPERIENCE ENTRY 2 */}
                {/* Copy this structure to add more experience entries */}
                <div className="relative space-y-2 animate-slide-up" style={{ animationDelay: "100ms" }}>
                  <div className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-secondary bg-background shadow-lg shadow-secondary/50" />
                  <h3 className="font-semibold text-lg text-foreground">Game Designer</h3>
                  <p className="text-sm font-medium text-secondary">Pixel Forge Games • 2018 - 2021</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Designed core gameplay loops, progression systems, and monetization strategies for mobile and PC
                    titles reaching millions of players.
                  </p>
                </div>

                {/* EXPERIENCE ENTRY 3 */}
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
