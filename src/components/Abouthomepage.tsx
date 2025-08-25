// Abouthomepage Component
// Generated: 2025-08-25T18:54:49.918Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Home
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: Target,
      title: "Precision Marketing",
      description: "Every luxury property deserves a bespoke marketing strategy that reaches the right buyers through exclusive channels and premium positioning."
    },
    {
      icon: Home,
      title: "Market Expertise",
      description: "Deep knowledge of Beverly Hills neighborhoods, from the flats to the hills, ensuring clients make informed decisions in this exclusive market."
    },
    {
      icon: Heart,
      title: "Client-First Service",
      description: "White-glove service tailored to high-net-worth individuals, with discretion, professionalism, and attention to every detail."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive connections with international buyers, luxury developers, and industry professionals worldwide."
    }
  ]

  const stats = [
    { value: "2015", label: "Licensed", icon: Award },
    { value: "$500M+", label: "Sales Volume", icon: TrendingUp },
    { value: "98%", label: "Client Retention", icon: Users },
    { value: "15+", label: "Years Experience", icon: Globe }
  ]

  const credentials = [
    {
      name: "Amanda Foster",
      role: "Luxury Real Estate Specialist",
      image: "AF",
      bio: "Beverly Hills native with 15+ years in luxury real estate. Top 1% agent specializing in $5M+ properties."
    },
    {
      name: "Certified Luxury Home",
      role: "Marketing Specialist (CLHMS)", 
      image: "CL",
      bio: "Advanced certification in luxury home marketing strategies and high-end client service."
    },
    {
      name: "Graduate, REALTOR®",
      role: "Institute (GRI)",
      image: "GR",
      bio: "Comprehensive real estate education covering all aspects of residential transactions."
    },
    {
      name: "International Property",
      role: "Specialist (CIPS)",
      image: "IP",
      bio: "Expertise in international real estate transactions and global luxury markets."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Amanda Foster
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Beverly Hills Luxury
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Real Estate Expert
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 15 years of experience in Beverly Hills luxury real estate, Amanda Foster 
            delivers unparalleled service to discerning clients seeking exceptional properties.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Born and raised in Beverly Hills, I've witnessed the evolution of this prestigious 
                market firsthand. My deep-rooted connections and intimate knowledge of the area 
                provide clients with invaluable insights.
              </p>
              <p>
                After graduating from UCLA with a degree in Business Economics, I began my real estate 
                career focusing exclusively on luxury properties. My commitment to excellence has earned 
                recognition as a top 1% agent in Beverly Hills.
              </p>
              <p>
                Today, I'm proud to have facilitated over $500 million in luxury real estate transactions, 
                helping high-net-worth individuals find their perfect Beverly Hills sanctuary.
              </p>
            </div>
            <Button className="group">
              View My Recent Sales
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Luxury real estate isn't just about properties—it's about understanding dreams and making them reality."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Amanda Foster</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">My Approach</h3>
            <p className="text-muted-foreground">
              The principles that guide my service to every luxury real estate client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Credentials */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Professional Credentials</h3>
            <p className="text-muted-foreground">
              Continuous education and certifications ensure the highest level of service and market expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {credentials.map((credential, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {credential.image}
                  </div>
                  <h4 className="font-semibold mb-1">{credential.name}</h4>
                  <p className="text-sm text-primary mb-3">{credential.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {credential.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Download Full Resume
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Amanda's knowledge of Beverly Hills is unmatched. She found us the perfect estate and 
                handled every detail with the utmost professionalism. Truly exceptional service."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RH
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Harrison</div>
                  <div className="text-sm text-muted-foreground">Beverly Hills Estate Owner</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}