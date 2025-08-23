import { Calendar, FileText, Users, MapPin, AlertCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import heroImage from "@/assets/lantzville-hero.jpg";

const quickLinks = [
  {
    title: "Pay Bills Online",
    description: "Property taxes, utilities, and permits",
    icon: FileText,
    href: "/pay-bills",
    color: "bg-primary"
  },
  {
    title: "Report an Issue",
    description: "Roads, parks, water, or other concerns",
    icon: AlertCircle,
    href: "/report-issue",
    color: "bg-secondary"
  },
  {
    title: "Council Meetings",
    description: "Agendas, minutes, and live streams",
    icon: Users,
    href: "/council/meetings",
    color: "bg-success"
  },
  {
    title: "Forms & Permits",
    description: "Building permits, business licenses",
    icon: FileText,
    href: "/forms",
    color: "bg-warning"
  }
];

const recentNews = [
  {
    id: 1,
    title: "New Community Centre Opens This Fall",
    excerpt: "The District is excited to announce the grand opening of the new community centre scheduled for October 2024.",
    date: "2024-08-20",
    category: "Community"
  },
  {
    id: 2,
    title: "Water Main Upgrades on Lantzville Road",
    excerpt: "Scheduled maintenance will improve water pressure and reliability for residents.",
    date: "2024-08-18",
    category: "Infrastructure"
  },
  {
    id: 3,
    title: "Annual Beach Cleanup Event",
    excerpt: "Join your neighbors in keeping our beautiful coastline clean. Free coffee and lunch provided.",
    date: "2024-08-15",
    category: "Environment"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Council Meeting",
    date: "2024-08-26",
    time: "7:00 PM",
    location: "Council Chambers"
  },
  {
    id: 2,
    title: "Farmers Market",
    date: "2024-08-28",
    time: "9:00 AM - 2:00 PM",
    location: "Community Park"
  },
  {
    id: 3,
    title: "Beach Cleanup",
    date: "2024-09-05",
    time: "10:00 AM - 12:00 PM",
    location: "Blueback Beach"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Lantzville
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A vibrant coastal community where nature meets neighborly spirit. 
              Discover services, stay informed, and connect with your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <link.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {link.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Community News */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Community News</h2>
                <Button variant="outline" asChild>
                  <Link to="/news">View All News</Link>
                </Button>
              </div>
              <div className="space-y-6">
                {recentNews.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Upcoming Events</h2>
                <Button variant="outline" asChild>
                  <Link to="/events">View Calendar</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px]">
                          <div className="text-sm font-medium">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                          <div className="text-xl font-bold">
                            {new Date(event.date).getDate()}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive important updates, 
            community news, and event notifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-foreground"
              aria-label="Email address"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}