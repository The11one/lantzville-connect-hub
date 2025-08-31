import { Users, MapPin, History, Award, TreePine, Waves } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageBanner } from "@/components/ui/page-banner";
import aboutBanner from "@/assets/about-banner.jpg";

const stats = [
  { label: "Population", value: "7,000+", icon: Users },
  { label: "Established", value: "1948", icon: History },
  { label: "Area", value: "31 km²", icon: MapPin },
  { label: "Coastline", value: "15 km", icon: Waves }
];

const highlights = [
  {
    title: "Natural Beauty",
    description: "Situated on Vancouver Island with stunning ocean views and forest trails",
    icon: TreePine,
    color: "bg-secondary"
  },
  {
    title: "Community Spirit",
    description: "Strong sense of community with active resident participation",
    icon: Users,
    color: "bg-primary"
  },
  {
    title: "Rich Heritage",
    description: "Historical roots dating back to First Nations and early settlers",
    icon: History,
    color: "bg-success"
  },
  {
    title: "Strategic Location", 
    description: "Close to Nanaimo with easy access to amenities and services",
    icon: MapPin,
    color: "bg-warning"
  }
];

const leadership = [
  {
    name: "Mark Swain",
    title: "Mayor",
    description: "Leading Lantzville with vision for sustainable growth and community development"
  },
  {
    name: "Municipal Council",
    title: "Elected Representatives",
    description: "Dedicated councilors working to serve the community's best interests"
  },
  {
    name: "Administrative Team",
    title: "Professional Staff",
    description: "Experienced staff delivering quality municipal services"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Banner */}
      <PageBanner
        title="About Lantzville"
        subtitle="A vibrant coastal community where natural beauty meets small-town charm and community spirit."
        backgroundImage={aboutBanner}
        height="lg"
      />

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The District of Lantzville is a picturesque coastal community located on the east coast of 
                Vancouver Island, just south of Nanaimo. With a population of over 7,000 residents, 
                Lantzville combines the tranquility of small-town living with easy access to urban amenities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our community is known for its stunning natural beauty, including pristine beaches, 
                dense forests, and scenic trails. The area has a rich history, with evidence of First Nations 
                presence dating back thousands of years, and European settlement beginning in the late 1800s.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Lantzville is a thriving municipality that values environmental stewardship, 
                community engagement, and sustainable development. We pride ourselves on maintaining 
                the perfect balance between growth and preservation of our natural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Makes Us Special</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${highlight.color} rounded-lg flex items-center justify-center`}>
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{highlight.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {leader.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    To be a sustainable, vibrant coastal community that balances growth with 
                    environmental stewardship, while maintaining our small-town character and 
                    strong community connections.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    To provide excellent municipal services, foster community engagement, 
                    protect our natural environment, and support sustainable development 
                    that enhances quality of life for all residents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}