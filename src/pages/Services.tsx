import { Building, Trees, Wrench, Shield, Phone, FileText, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Building & Development",
    icon: Building,
    description: "Building permits, inspections, and development applications",
    items: [
      "Building Permits",
      "Development Applications", 
      "Building Inspections",
      "Zoning Information",
      "Subdivision Applications"
    ],
    contact: "planning@lantzville.ca",
    phone: "250-390-4006"
  },
  {
    title: "Parks & Recreation",
    icon: Trees,
    description: "Community parks, recreational facilities, and programs",
    items: [
      "Park Bookings",
      "Recreational Programs",
      "Sports Field Rentals",
      "Community Events",
      "Park Maintenance"
    ],
    contact: "parks@lantzville.ca",
    phone: "250-390-4006"
  },
  {
    title: "Public Works",
    icon: Wrench,
    description: "Roads, water, sewer, and infrastructure maintenance",
    items: [
      "Road Maintenance",
      "Water & Sewer Services",
      "Waste Management",
      "Snow Removal",
      "Infrastructure Projects"
    ],
    contact: "publicworks@lantzville.ca",
    phone: "250-390-4006"
  },
  {
    title: "Emergency Services",
    icon: Shield,
    description: "Fire protection, emergency preparedness, and safety",
    items: [
      "Fire Protection",
      "Emergency Response",
      "Disaster Preparedness",
      "Safety Programs",
      "Evacuation Planning"
    ],
    contact: "fire@lantzville.ca",
    phone: "250-390-4006"
  }
];

const emergencyContacts = [
  {
    service: "Fire/Medical Emergency",
    number: "911",
    description: "Life-threatening emergencies"
  },
  {
    service: "Police (Non-Emergency)",
    number: "250-754-2345",
    description: "RCMP Nanaimo detachment"
  },
  {
    service: "After Hours Emergency",
    number: "250-390-4006",
    description: "Water, sewer, or road emergencies"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Municipal Services
            </h1>
            <p className="text-xl opacity-90">
              Comprehensive services to support our community's needs, 
              from building permits to emergency response.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-8 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold text-lg">{contact.service}</h3>
                <div className="text-2xl font-bold my-2">{contact.number}</div>
                <p className="text-sm opacity-90">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Services Include:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          {service.phone}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <FileText className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Service Hours</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Municipal Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:30 AM - 4:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Holidays:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>7192 Lantzville Road</div>
                    <div>Lantzville, BC V0R 2H0</div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}