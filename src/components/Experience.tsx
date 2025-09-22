import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, Film } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Senior Video Editor",
    company: "Creative Studios Inc.",
    period: "2021 - Present",
    type: "Full-time",
    description: "Lead editor for high-profile commercial and corporate video projects. Mentored junior editors and streamlined post-production workflows.",
    achievements: [
      "Increased team efficiency by 40% through workflow optimization",
      "Edited 200+ commercial videos with 15M+ total views",
      "Led post-production for award-winning brand campaigns"
    ],
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Team Leadership"]
  },
  {
    id: 2,
    role: "Freelance Video Editor",
    company: "Multiple Clients",
    period: "2019 - 2021",
    type: "Freelance",
    description: "Worked with diverse clients including music artists, small businesses, and documentary filmmakers to create compelling video content.",
    achievements: [
      "Completed 150+ freelance projects with 100% client satisfaction",
      "Specialized in music videos and social media content",
      "Built long-term partnerships with 20+ recurring clients"
    ],
    skills: ["Final Cut Pro", "Motion Graphics", "Color Grading", "Client Relations"]
  },
  {
    id: 3,
    role: "Junior Video Editor",
    company: "MediaTech Solutions",
    period: "2018 - 2019",
    type: "Full-time",
    description: "Entry-level position focused on learning professional video editing techniques and supporting senior editors on major projects.",
    achievements: [
      "Assisted in editing 50+ corporate training videos",
      "Learned advanced color correction and audio mixing",
      "Contributed to Emmy-nominated documentary project"
    ],
    skills: ["Avid Media Composer", "Pro Tools", "Basic Motion Graphics"]
  }
]

const certifications = [
  { name: "Adobe Certified Expert - Premiere Pro", year: "2022" },
  { name: "DaVinci Resolve Certified Colorist", year: "2021" },
  { name: "Apple Certified Pro - Final Cut Pro", year: "2020" }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A journey through my career in video editing, from learning the fundamentals 
            to leading creative teams and delivering award-winning content.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.id} 
                  className="timeline-item fade-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-medium text-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certifications */}
            <Card className="fade-in-right">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="space-y-1">
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="fade-in-right" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Film className="h-5 w-5 text-primary" />
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Projects</span>
                    <span className="font-semibold text-primary">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                    <span className="font-semibold text-primary">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Happy Clients</span>
                    <span className="font-semibold text-primary">100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Awards Won</span>
                    <span className="font-semibold text-primary">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gradient-primary text-primary-foreground fade-in-right" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold text-lg mb-2">Ready to Collaborate?</h3>
                <p className="text-sm mb-4 opacity-90">
                  Let's bring your video projects to life with professional editing and creative vision.
                </p>
                <button 
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Start a Project
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}