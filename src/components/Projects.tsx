import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ExternalLink, ArrowRight } from "lucide-react"
import project1 from "@/assets/project1.jpg"
import project2 from "@/assets/project2.jpg"
import project3 from "@/assets/project3.jpg"

const projects = [
  {
    id: 1,
    title: "StreetBeat Reels Campaign",
    description: "15 social reels for an urban clothing drop — fast cuts, text overlays, and trending sound edits.",
    image: project1,
    category: "Reels & Short-Form",
    duration: "0:15-0:30",
    views: "1.2M",
    caseStudy: "Role: Lead editor. Tools: Premiere Pro, After Effects, Audition. Deliverables: 15 IG reels, 3 TikTok formats. Impact: 1.2M total views across platforms; +42% follower growth in 6 weeks."
  },
  {
    id: 2,
    title: "EchoMotion Brand Film",
    description: "3-minute brand story blending interviews and product b-roll.",
    image: project2,
    category: "Storytelling",
    duration: "3:00",
    views: "285K",
    caseStudy: "Role: Editor & finishing. Tools: DaVinci Resolve, Premiere Pro. Deliverables: 3-min film + 3 cutdowns. Impact: average view completion 58%; used on landing page and ads."
  },
  {
    id: 3,
    title: "QuickCart 30s Ad",
    description: "Crisp 30s ad optimized for Facebook and YouTube.",
    image: project3,
    category: "Ads & Promo",
    duration: "0:30",
    views: "450K",
    caseStudy: "Role: Edit + A/B ad variants. Tools: Premiere Pro, After Effects. Impact: CTR uplift +32% vs previous creatives; conversion lift +18%."
  },
  {
    id: 4,
    title: "Pulse Channel Intro",
    description: "8s animated intro with alpha channel for quick re-use.",
    image: project1,
    category: "Intro / Stinger",
    duration: "0:08",
    views: "N/A",
    caseStudy: "Role: Motion edit and deliverables. Tools: After Effects. Deliverables: 8s MP4, 4k, alpha .mov. Result: professional brand identity across 120 episodes."
  },
  {
    id: 5,
    title: "Lumiere Event Highlight",
    description: "4-minute cinematic highlight for a product launch event.",
    image: project2,
    category: "Event / Highlights",
    duration: "4:00",
    views: "78K",
    caseStudy: "Role: Lead editor. Tools: Premiere Pro, color grade in Resolve. Deliverables: 4-min highlight + social cutdowns."
  },
  {
    id: 6,
    title: "Atlas Corporate Promo",
    description: "Corporate promo mixing interviews, product shots and motion graphics.",
    image: project3,
    category: "Corporate / Showreel",
    duration: "2:15",
    views: "156K",
    caseStudy: "Role: Editing, motion interstitials. Tools: Premiere Pro + After Effects. Deliverables: 2:15 promo + 3 short clips for social."
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Selected projects across Reels, Storytelling, Ads and Intros — click any card for a short case study.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card group cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-glow" />
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="icon" className="bg-primary/80 hover:bg-primary">
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/80 text-primary-foreground text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{project.duration}</span>
                    <span>{project.views} views</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Watch
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center fade-in-up">
          <Button variant="outline" size="lg" className="btn-ghost-hero">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// Missing import
