// Contacthomepage Component
// Generated: 2025-08-25T18:54:49.918Z
// Template: contact-c001
// Context: Homepage
// Position: pages.0.sections.4

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Home,
  Calendar,
  DollarSign
} from "lucide-react"

export default function Contacthomepage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Amanda",
      description: "Direct line for immediate assistance",
      contact: "+1 (310) 555-LUXURY",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Amanda",
      description: "Detailed property inquiries",
      contact: "amanda@amandafosterhomes.com",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Text Message",
      description: "Quick questions & updates",
      contact: "+1 (310) 555-TEXT",
      action: "Send Text"
    }
  ]

  const serviceAreas = [
    {
      area: "Beverly Hills",
      address: "9200 Sunset Blvd, Suite 1200",
      specialty: "Luxury Estates & Mansions"
    },
    {
      area: "Bel Air",
      address: "By Appointment Only",
      specialty: "Ultra-High-End Properties"
    },
    {
      area: "Holmby Hills",
      address: "Private Showings Available",
      specialty: "Historic Luxury Homes"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            Contact Amanda Foster
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Dream Home?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let's discuss your luxury real estate needs. Whether buying or selling, 
            Amanda Foster provides personalized service for Beverly Hills' finest properties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Home className="size-6 text-primary" />
                Start Your Property Journey
              </CardTitle>
              <CardDescription>
                Tell Amanda about your luxury real estate needs and she'll respond within 2 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="(310) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium mb-2">
                      Interest
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select Interest</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling a Home</option>
                      <option value="investment">Investment Property</option>
                      <option value="consultation">Market Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="2-5m">$2M - $5M</option>
                    <option value="5-10m">$5M - $10M</option>
                    <option value="10-20m">$10M - $20M</option>
                    <option value="20m+">$20M+</option>
                    <option value="consultation">Just Exploring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Amanda About Your Needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your ideal property, timeline, specific requirements, or any questions you have..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group bg-primary hover:bg-primary/90">
                  Schedule Consultation
                  <Calendar className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="size-5 text-primary" />
                Connect with Amanda
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Luxury Markets Served
              </h3>
              <div className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{area.area}</h4>
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                        Specialist
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{area.address}</p>
                    <p className="text-sm font-medium text-primary">{area.specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Availability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <DollarSign className="size-4" />
                    Emergency showings available for qualified buyers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}