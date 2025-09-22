import { Card, CardContent } from "@/components/ui/card"
import { Video, Film, Megaphone, Play, Calendar, Package } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Video,
    title: "Reels & Short-Form",
    description: "Quick, punchy cuts optimized for Instagram, TikTok and YouTube Shorts — captions, rhythm edits, and thumbnail-ready frames."
  },
  {
    id: 2,
    icon: Film,
    title: "Storytelling Edits",
    description: "Narrative-driven edits for brand films, short docs and promos — pacing, emotional beats and voiceover integration."
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Ads & Promo Spots",
    description: "Conversion-oriented ads (15s/30s) designed for social and search platforms — A/B variants and platform optimization."
  },
  {
    id: 4,
    icon: Play,
    title: "Channel & Brand Intros",
    description: "Branded intros and stingers — polished, animated, and reusable across episodes."
  },
  {
    id: 5,
    icon: Calendar,
    title: "Event & Highlight Reels",
    description: "Weddings, launches and events — cinematic highlight reels with music sync and color grade."
  },
  {
    id: 6,
    icon: Package,
    title: "Custom Packages & Retainers",
    description: "Ongoing content pipelines, social calendars, and priority turnaround for brands and creators."
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="bg-gradient-primary bg-clip-text text-transparent">I Do</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            I specialize in editing that tells your story — fast, clean, and with measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={service.id} 
                className="service-card group cursor-pointer fade-in-up border-border/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}