"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, ExternalLink, FileText, Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-float" />

      <div className="container relative mx-auto px-4">
        <div className="mb-16 space-y-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10 animate-float">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Let's Connect</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Ready to collaborate on your next game project?
          </p>
        </div>

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
              <div className="grid gap-3 sm:grid-cols-2">
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

              <div className="relative pt-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or download my resume</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
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
