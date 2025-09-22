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
          <div className="space-y-6 fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">Transforming Stories</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Through Precision
              </span>
              <span className="block">Editing</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Hi — I'm <span className="text-foreground font-semibold">Fahad Hussain</span>. 5 years editing reels, storytelling shorts, ads and intros that grab attention and convert viewers into customers.
              </p>
              
              <div className="text-lg text-primary font-medium">
                Fast turnarounds • Cinematic pacing • Social-first optimised edits
              </div>
            </div>
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
              onClick={() => window.open('mailto:fahadrare96@gmail.com', '_blank')}
            >
              Book a Free Consult
            </Button>
          </div>
          
          {/* Hero microcopy */}
          <div className="text-sm text-muted-foreground fade-in-up" style={{ animationDelay: "0.5s" }}>
            Available for freelance & retainer projects — quick demos on request.
            <br />
            <a href="mailto:fahadrare96@gmail.com" className="text-primary hover:underline text-xs">
              Book a 15-min free consult
            </a>
          </div>

          {/* Stats or badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 fade-in-up" style={{ animationDelay: "0.7s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50M+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5</div>
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