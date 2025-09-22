import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah I.",
    role: "Marketing Lead",
    content: "Fahad brought our concept to life — fast turnaround and metric-driven edits. Our campaign had record engagement.",
    rating: 5
  },
  {
    id: 2,
    name: "Omar K.",
    role: "Content Manager", 
    content: "Our YouTube intros finally feel like the brand we built. Clean, punchy, and so consistent.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients <span className="bg-gradient-primary bg-clip-text text-transparent">Say</span>
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="testimonial-card fade-in-up border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Quote className="h-8 w-8 text-primary/60" />
                  
                  <p className="text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                    
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}