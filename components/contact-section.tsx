"use client"

// ============================================================================
// CONTACT SECTION COMPONENT
// ============================================================================
// This component displays your contact information and social media links.
// It shows:
// - Section header with title and description
// - Contact buttons (Email, LinkedIn, GitHub, ArtStation, etc.)
// - Resume download button
//
// TO MODIFY CONTACT INFORMATION:
// - Find the Button components with links below
// - Update the href attributes with your actual URLs
// - Update the email address in the mailto link
// - Update the resume file path if needed
// - Add or remove contact buttons as needed
// ============================================================================

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, ExternalLink, FileText, Send, MessageCircle, Sparkles } from "lucide-react"

// ============================================================================
// MAIN COMPONENT FUNCTION
// ============================================================================
export function ContactSection() {
  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  return (
    // MAIN SECTION CONTAINER
    // The "id='contact'" is important - it's used by the navigation to scroll to this section
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
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
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          {/* MAIN TITLE - Change "Let's Connect" to whatever you want */}
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Let's Connect
          </h2>
          {/* SUBTITLE - Change this description text */}
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
            Ready to collaborate on your next game project?
          </p>
          {/* DECORATIVE TEXT WITH SPARKLES */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Always open to new opportunities and collaborations</span>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="mx-auto max-w-2xl">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl shadow-primary/10">
            <CardHeader className="text-center space-y-3">
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Interested in collaborating or discussing game design? Reach out through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* CONTACT BUTTONS GRID */}
              {/* This creates a 2-column grid of contact buttons on larger screens */}
              <div className="grid gap-3 sm:grid-cols-2">
                {/* EMAIL BUTTON - EDIT THE EMAIL ADDRESS HERE */}
                <Button
                  variant="outline"
                  size="lg"
                  className="justify-start border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:martin.schroeder@example.com">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    Email Me
                  </a>
                </Button>

                {/* LINKEDIN BUTTON - EDIT THE URL HERE */}
                <Button
                  variant="outline"
                  size="lg"
                  className="justify-start border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://linkedin.com/in/martin-schroeder" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5 text-primary" />
                    LinkedIn
                  </a>
                </Button>

                {/* GITHUB BUTTON - EDIT THE URL HERE */}
                <Button
                  variant="outline"
                  size="lg"
                  className="justify-start border-secondary/30 bg-secondary/5 hover:bg-secondary/10 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://github.com/martinschroeder" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 text-secondary" />
                    GitHub
                  </a>
                </Button>

                {/* ARTSTATION BUTTON - EDIT THE URL HERE, OR REMOVE IF NOT NEEDED */}
                <Button
                  variant="outline"
                  size="lg"
                  className="justify-start border-secondary/30 bg-secondary/5 hover:bg-secondary/10 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://artstation.com/martinschroeder" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5 text-secondary" />
                    ArtStation
                  </a>
                </Button>
              </div>

              {/* DIVIDER */}
              <div className="relative pt-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or download my resume</span>
                </div>
              </div>

              {/* RESUME DOWNLOAD BUTTON */}
              {/* EDIT THE FILE PATH HERE - Make sure the file exists in the /public/cv/ folder */}
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                asChild
              >
                <a href="/cv/Martin Schroeder CV - English.pdf" target="_blank" rel="noreferrer" download>
                  <span className="absolute inset-0 shimmer-effect" />
                  <FileText className="mr-2 h-5 w-5 relative" />
                  <span className="relative">Download Resume</span>
                  <Send className="ml-2 h-5 w-5 relative group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
