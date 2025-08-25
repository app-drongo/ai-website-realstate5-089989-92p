// Footer Component
// Generated: 2025-08-25T18:54:49.917Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Home,
  Award,
  Calendar
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Luxury Home Sales", href: "#services" },
        { name: "Property Buying", href: "#services" },
        { name: "Investment Properties", href: "#services" },
        { name: "Market Analysis", href: "#services" },
        { name: "Property Valuation", href: "#contact" },
        { name: "Relocation Services", href: "#services" }
      ]
    },
    {
      title: "Areas",
      links: [
        { name: "Beverly Hills", href: "#about" },
        { name: "Bel Air", href: "#about" },
        { name: "Malibu", href: "#about" },
        { name: "Hollywood Hills", href: "#about" },
        { name: "Manhattan Beach", href: "#about" },
        { name: "Pasadena", href: "#about" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Market Reports", href: "#about" },
        { name: "Buying Guide", href: "#services" },
        { name: "Selling Guide", href: "#services" },
        { name: "Investment Tips", href: "#services" },
        { name: "Testimonials", href: "#about" },
        { name: "Recent Sales", href: "#about" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Disclosure", href: "/disclosure" },
        { name: "Fair Housing", href: "/fair-housing" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Licensing", href: "/licensing" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/amandafosterhomes" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/amandafosterhomes" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/amandafoster" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/amandafosterhomes" }
  ]

  return (
    <footer className="bg-secondary text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Home className="size-6 text-background" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-background">Amanda Foster</span>
                  <span className="text-sm text-background/80 font-medium">Luxury Homes</span>
                </div>
              </Link>
              <p className="text-background/70 text-sm leading-relaxed mb-6">
                Beverly Hills' premier luxury real estate specialist with over 15 years of experience. 
                Dedicated to providing exceptional service for discerning clients seeking the finest properties.
              </p>
              <div className="flex items-center gap-2 text-sm text-background/80">
                <Award className="size-4 text-primary" />
                <span>Licensed Real Estate Professional • DRE #01234567</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">amanda@fosterluxuryhomes.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">(310) 555-LUXURY</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">9200 Sunset Blvd, Beverly Hills, CA 90210</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background">Luxury Market Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background/10 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/60">
                Get exclusive market insights and luxury property alerts. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© 2024 Amanda Foster Luxury Homes. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Equal Housing Opportunity</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/70 mr-2">Follow:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/70 group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-background/10">
            <Link href="/mls-search" className="text-xs text-background/60 hover:text-background transition-colors">
              MLS Search
            </Link>
            <Link href="/property-alerts" className="text-xs text-background/60 hover:text-background transition-colors">
              Property Alerts
            </Link>
            <Link href="/mortgage-calculator" className="text-xs text-background/60 hover:text-background transition-colors">
              Mortgage Calculator
            </Link>
            <Link href="/schedule-consultation" className="text-xs text-background/60 hover:text-background transition-colors flex items-center gap-1">
              <Calendar className="size-3" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}