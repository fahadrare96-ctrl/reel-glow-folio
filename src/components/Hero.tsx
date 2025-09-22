import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main headline */}
          <div className="space-y-4 fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">Transforming</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Stories Through
              </span>
              <span className="block">Video Editing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting compelling narratives through precision editing, 
              creative vision, and technical excellence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              onClick={scrollToProjects}
              className="btn-hero group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="ghost" 
              className="btn-ghost-hero group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Showreel
            </Button>
          </div>

          {/* Stats or badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50M+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}