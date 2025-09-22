import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Twitter, Instagram, Youtube, Linkedin, Heart } from "lucide-react"
import logo from "@/assets/logo.png"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
]

const services = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics", 
  "Audio Mixing",
  "Documentary Editing",
  "Commercial Videos"
]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-surface border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="VideoCreator Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                VideoCreator
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming stories through precision editing, creative vision, 
              and technical excellence. Let's bring your video projects to life.
            </p>
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="btn-hero"
            >
              Start a Project
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">hello@videocreator.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Los Angeles, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-3">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-background hover:bg-primary/10 border border-border hover:border-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 VideoCreator. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for storytelling.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </button>
            <button 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}