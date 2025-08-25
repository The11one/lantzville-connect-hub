import { Wrench, Droplets, Truck, Phone, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Water & Sewer",
    description: "Water distribution, sewer maintenance, and utility connections",
    icon: Droplets,
    services: [
      "Water main repairs and maintenance",
      "Sewer line inspections and cleaning", 
      "New water and sewer connections",
      "Water quality testing and monitoring",
      "Emergency leak repairs"
    ],
    contact: "utilities@lantzville.ca"
  },
  {
    title: "Roads & Infrastructure",
    description: "Road maintenance, snow removal, and infrastructure repairs",
    icon: Truck,
    services: [
      "Road surface repairs and resurfacing",
      "Snow plowing and ice control",
      "Street cleaning and maintenance",
      "Traffic sign installation and repair",
      "Storm drain maintenance"
    ],
    contact: "roads@lantzville.ca"
  },
  {
    title: "General Maintenance",
    description: "Parks, facilities, and general municipal maintenance",
    icon: Wrench,
    services: [
      "Park and facility maintenance",
      "Equipment repairs and servicing",
      "Building maintenance projects",
      "Landscaping and grounds keeping",
      "Cemetery maintenance"
    ],
    contact: "maintenance@lantzville.ca"
  }
];

const emergencyContacts = [
  {
    service: "Water Emergency",
    description: "Water main breaks, no water service",
    number: "(250) 390-4006",
    hours: "24/7"
  },
  {
    service: "Road Emergency", 
    description: "Dangerous road conditions, fallen trees",
    number: "(250) 390-4006",
    hours: "24/7"
  },
  {
    service: "After Hours Emergency",
    description: "Critical municipal infrastructure issues",
    number: "(250) 390-4006",
    hours: "Evenings & Weekends"
  }
];

export default function PublicWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-proxima font-bold mb-6">
            Public Works
          </h1>
          <p className="text-xl font-calibri mb-8 max-w-3xl mx-auto">
            Maintaining Lantzville's infrastructure, utilities, and community facilities
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Emergency Alert */}
        <Card className="mb-12 border-warning bg-warning/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-warning mt-1" />
              <div>
                <h3 className="font-proxima font-semibold mb-2">Emergency Services</h3>
                <p className="font-calibri text-muted-foreground mb-4">
                  For water emergencies, road hazards, or critical infrastructure issues, contact us immediately at (250) 390-4006.
                  After hours emergency line is available 24/7.
                </p>
                <Button variant="outline" asChild>
                  <a href="tel:2503904006">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency Line
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-proxima font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center font-proxima">{service.title}</CardTitle>
                  <CardDescription className="text-center font-calibri">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-proxima font-semibold mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.services.map((item, index) => (
                          <li key={index} className="text-sm font-calibri text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`mailto:${service.contact}`}>
                        Contact Department
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-proxima font-bold text-center mb-12">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact) => (
              <Card key={contact.service} className="border-destructive">
                <CardHeader>
                  <CardTitle className="font-proxima text-destructive">{contact.service}</CardTitle>
                  <CardDescription className="font-calibri">
                    {contact.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="font-proxima font-semibold">{contact.number}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-calibri text-muted-foreground">{contact.hours}</span>
                    </div>
                    <Button variant="destructive" className="w-full" asChild>
                      <a href={`tel:${contact.number.replace(/\D/g, '')}`}>
                        Call Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Requests */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="font-proxima">Submit a Work Request</CardTitle>
              <CardDescription className="font-calibri">
                Report issues or request maintenance services for municipal infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-proxima font-semibold mb-4">How to Report Issues</h3>
                  <ul className="space-y-2 font-calibri text-muted-foreground">
                    <li>• Use our online reporting form for non-urgent issues</li>
                    <li>• Call (250) 390-4006 for urgent matters</li>
                    <li>• Provide detailed location information</li>
                    <li>• Include photos if possible</li>
                    <li>• We will respond within 1-2 business days</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-proxima font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 font-calibri text-muted-foreground">
                    <p><strong>Monday - Friday:</strong> 7:00 AM - 3:30 PM</p>
                    <p><strong>Emergency Line:</strong> 24/7</p>
                    <p><strong>Location:</strong> 7192 Lantzville Road</p>
                    <p><strong>Email:</strong> publicworks@lantzville.ca</p>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Button className="w-full" asChild>
                      <a href="/report-issue">Report an Issue Online</a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:2503904006">Call Public Works</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}