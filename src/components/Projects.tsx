import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ExternalLink, ArrowRight } from "lucide-react"
import project1 from "@/assets/project1.jpg"
import project2 from "@/assets/project2.jpg"
import project3 from "@/assets/project3.jpg"

const projects = [
  {
    id: 1,
    title: "Corporate Brand Film",
    description: "A sleek brand story for a Fortune 500 company, showcasing their innovation and company culture through compelling visual storytelling.",
    image: project1,
    category: "Corporate",
    duration: "3:24",
    views: "2.1M",
  },
  {
    id: 2,
    title: "Music Video - Neon Dreams",
    description: "High-energy music video with dynamic color grading and synchronized editing that perfectly matches the artist's electronic sound.",
    image: project2,
    category: "Music Video",
    duration: "4:15",
    views: "8.7M",
  },
  {
    id: 3,
    title: "Documentary - Climate Change",
    description: "Award-winning documentary featuring intimate interviews and powerful B-roll footage that brings environmental stories to life.",
    image: project3,
    category: "Documentary",
    duration: "52:30",
    views: "1.5M",
  },
  {
    id: 4,
    title: "Tech Product Launch",
    description: "Product showcase video for a cutting-edge tech startup, featuring sleek motion graphics and seamless transitions.",
    image: project1,
    category: "Commercial",
    duration: "2:45",
    views: "950K",
  },
  {
    id: 5,
    title: "Wedding Highlight Reel",
    description: "Emotional wedding film capturing the couple's special day with cinematic flair and heartfelt storytelling.",
    image: project2,
    category: "Wedding",
    duration: "8:30",
    views: "125K",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    description: "Series of short-form videos for social media platforms, optimized for engagement and brand awareness.",
    image: project3,
    category: "Social Media",
    duration: "0:30-1:00",
    views: "5.2M",
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
            A showcase of my recent work across various genres and platforms, 
            each project crafted with attention to detail and creative vision.
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
