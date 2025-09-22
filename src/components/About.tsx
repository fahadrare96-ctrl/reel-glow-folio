import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Zap, Target, Lightbulb } from "lucide-react"
import profileImage from "@/assets/profile.jpg"

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "Every project is crafted with genuine enthusiasm and dedication to storytelling excellence."
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Staying current with the latest editing techniques and industry-standard software."
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering results that exceed expectations and drive engagement."
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description: "Always seeking fresh perspectives and innovative approaches to visual storytelling."
  }
]

const skills = [
  { name: "Video Editing", level: 95 },
  { name: "Color Grading", level: 88 },
  { name: "Motion Graphics", level: 82 },
  { name: "Audio Mixing", level: 79 },
  { name: "Storytelling", level: 92 },
  { name: "Project Management", level: 85 }
]

export function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get to know the person behind the edits - my journey, values, and 
            what drives my passion for video storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile & Bio */}
          <div className="space-y-8 fade-in-left">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <img 
                  src={profileImage} 
                  alt="Video Editor Profile"
                  className="w-full h-full object-cover rounded-2xl shadow-elevated"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Story Behind the Editor</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My journey into video editing began five years ago with a simple fascination: 
                    how raw footage could be transformed into compelling stories that move people. 
                    What started as a hobby quickly became an obsession, then a career.
                  </p>
                  <p>
                    I believe that great editing is invisible - it should serve the story, not 
                    distract from it. Every cut, transition, and color grade is carefully 
                    considered to enhance the narrative and evoke the right emotions.
                  </p>
                  <p>
                    When I'm not editing, you'll find me exploring new filmmaking techniques, 
                    studying color theory, or watching behind-the-scenes content to continuously 
                    improve my craft. I'm passionate about staying at the forefront of video 
                    technology and creative trends.
                  </p>
                </div>
              </div>

              {/* Personal Interests */}
              <div>
                <h4 className="font-semibold mb-3">Beyond Editing</h4>
                <div className="flex flex-wrap gap-2">
                  {["Cinematography", "Photography", "Music Production", "Travel", "Technology", "Art"].map((interest) => (
                    <Badge key={interest} variant="secondary" className="text-sm">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Values */}
          <div className="space-y-8 fade-in-right">
            {/* Core Values */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Core Values</h3>
                <div className="grid gap-6">
                  {values.map((value, index) => {
                    const IconComponent = value.icon
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Fun Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">10,000+</div>
                    <div className="text-sm opacity-90">Hours Edited</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">50TB</div>
                    <div className="text-sm opacity-90">Data Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">1,000+</div>
                    <div className="text-sm opacity-90">Coffee Cups</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">∞</div>
                    <div className="text-sm opacity-90">Passion Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}