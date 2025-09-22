import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@videocreator.com",
    href: "mailto:hello@videocreator.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: "https://maps.google.com/?q=Los Angeles, CA"
  }
]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    })
    
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to bring your video project to life? I'd love to hear about your 
            vision and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="fade-in-left">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-surface border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-surface border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Video editing project inquiry"
                    className="bg-surface border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, timeline, and vision..."
                    className="bg-surface border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-right">
            {/* Contact Details */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <a 
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface transition-colors duration-200 group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <div className="text-muted-foreground text-sm">{info.value}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Follow My Work</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-surface hover:bg-primary/10 border border-border hover:border-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow me for behind-the-scenes content, editing tips, and latest project updates.
                </p>
              </CardContent>
            </Card>

            {/* Quick Response Card */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-sm opacity-90 mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to call directly.
                </p>
                <div className="text-sm font-medium">
                  Average Response Time: <span className="text-lg">4 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}