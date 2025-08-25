// Services Component
// Generated: 2025-08-25T18:54:49.918Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.2

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Home,
  TrendingUp,
  Search,
  Shield,
  Handshake,
  Users,
  BarChart3,
  Key
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "luxury-home-sales",
      title: "Luxury Home Sales",
      description: "Expert representation for selling your Beverly Hills estate",
      longDescription: "Comprehensive marketing strategy combining premium photography, exclusive networking, and targeted outreach to qualified luxury buyers. Every listing receives white-glove treatment with discretion and professionalism.",
      icon: Home,
      benefits: [
        "Professional staging consultation",
        "Premium marketing materials and photography",
        "Exclusive buyer network access",
        "Confidential and discreet transactions"
      ],
      pricing: "Competitive luxury commission rates",
      timeline: "Average 60-90 days to close",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "buyer-representation",
      title: "Luxury Buyer Services",
      description: "Find your perfect Beverly Hills sanctuary",
      longDescription: "Personalized property search with access to exclusive listings, off-market opportunities, and pre-market properties. Full-service buyer representation from initial search to closing and beyond.",
      icon: Search,
      benefits: [
        "Access to off-market luxury properties",
        "Neighborhood expertise and guidance",
        "Negotiation and due diligence support",
        "Post-purchase concierge services"
      ],
      pricing: "Buyer representation at no cost",
      timeline: "Customized timeline based on needs"
    },
    {
      id: "investment-properties",
      title: "Investment Property Advisory",
      description: "Strategic guidance for luxury real estate investments",
      longDescription: "Comprehensive investment analysis for high-net-worth individuals seeking Beverly Hills real estate opportunities. Market insights, ROI projections, and portfolio optimization strategies.",
      icon: TrendingUp,
      benefits: [
        "Market analysis and ROI projections",
        "Portfolio diversification strategies",
        "Tax advantage consultation",
        "Property management referrals"
      ],
      pricing: "Consultation fees apply",
      timeline: "Ongoing advisory relationship"
    },
    {
      id: "relocation-services",
      title: "Executive Relocation",
      description: "Seamless relocation services for executives and families",
      longDescription: "Complete relocation support for high-profile clients moving to Beverly Hills. From property search to community integration, ensuring a smooth transition to luxury living.",
      icon: Users,
      benefits: [
        "Comprehensive area orientation",
        "School district guidance",
        "Lifestyle and amenity matching",
        "Vendor and service recommendations"
      ],
      pricing: "Custom packages available",
      timeline: "3-6 months typical process",
      badge: "VIP Service"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Luxury Real Estate Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Services for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Beverly Hills Luxury Real Estate
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tailored solutions for discerning clients seeking exceptional properties and unparalleled service in Beverly Hills
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-primary text-primary" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Schedule Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Begin Your Beverly Hills Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether buying or selling luxury real estate, let's discuss how I can exceed your expectations with personalized service.
          </p>
          <Button size="lg">
            Book Private Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}