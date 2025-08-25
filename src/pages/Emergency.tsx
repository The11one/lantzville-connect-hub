import { AlertTriangle, Phone, Shield, Heart, FileText, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const emergencyServices = [
  {
    service: "Fire Department",
    description: "Volunteer fire department serving Lantzville and surrounding areas",
    icon: Shield,
    emergency: "911",
    nonEmergency: "(250) 390-2121",
    services: [
      "Fire suppression and rescue",
      "Medical first aid response",
      "Hazardous material response",
      "Vehicle accident response",
      "Fire safety inspections"
    ]
  },
  {
    service: "Police Services", 
    description: "RCMP detachment providing police services to Lantzville",
    icon: Shield,
    emergency: "911",
    nonEmergency: "(250) 756-3251",
    services: [
      "Emergency response",
      "Crime prevention",
      "Traffic enforcement",
      "Community policing",
      "Investigation services"
    ]
  },
  {
    service: "Medical Emergency",
    description: "BC Ambulance Service and emergency medical response",
    icon: Heart,
    emergency: "911",
    nonEmergency: "(250) 390-5752",
    services: [
      "Emergency medical response",
      "Patient transport",
      "Critical care transport",
      "Community paramedicine",
      "Special events medical coverage"
    ]
  }
];

const preparednessGuides = [
  {
    title: "Emergency Kit Checklist",
    description: "Essential items for your 72-hour emergency kit",
    icon: FileText,
    url: "/documents/emergency-kit-checklist.pdf"
  },
  {
    title: "Evacuation Planning",
    description: "How to prepare and execute an evacuation plan",
    icon: FileText,
    url: "/documents/evacuation-planning.pdf"
  },
  {
    title: "Family Emergency Plan",
    description: "Template for creating your family emergency plan",
    icon: FileText,
    url: "/documents/family-emergency-plan.pdf"
  }
];

export default function Emergency() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-destructive to-warning py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-proxima font-bold mb-6">
            Emergency Services
          </h1>
          <p className="text-xl font-calibri mb-8 max-w-3xl mx-auto">
            Emergency preparedness information and contacts for Lantzville residents
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Emergency Alert */}
        <Card className="mb-12 border-destructive bg-destructive/5">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-proxima font-bold mb-4 text-destructive">
                In Case of Emergency
              </h2>
              <p className="text-lg font-calibri mb-6">
                For all life-threatening emergencies, fire, or immediate police response
              </p>
              <Button size="lg" variant="destructive" asChild>
                <a href="tel:911" className="text-2xl px-8 py-4">
                  <Phone className="h-6 w-6 mr-2" />
                  CALL 911
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-proxima font-bold text-center mb-12">Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service) => (
              <Card key={service.service} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center font-proxima">{service.service}</CardTitle>
                  <CardDescription className="text-center font-calibri">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-proxima font-semibold">Emergency:</span>
                      <Badge variant="destructive">{service.emergency}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-proxima font-semibold">Non-Emergency:</span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`tel:${service.nonEmergency.replace(/\D/g, '')}`}>
                          {service.nonEmergency}
                        </a>
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-proxima font-semibold mb-2">Services:</h4>
                      <ul className="space-y-1">
                        {service.services.map((item, index) => (
                          <li key={index} className="text-sm font-calibri text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Preparedness */}
        <section className="mb-16">
          <h2 className="text-3xl font-proxima font-bold text-center mb-12">Emergency Preparedness</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {preparednessGuides.map((guide) => (
              <Card key={guide.title}>
                <CardHeader className="text-center">
                  <guide.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="font-proxima">{guide.title}</CardTitle>
                  <CardDescription className="font-calibri">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={guide.url} target="_blank" rel="noopener noreferrer">
                      Download Guide
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Voyent Alert */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Radio className="h-8 w-8 text-primary mr-2" />
                <CardTitle className="font-proxima">Voyent Alert!</CardTitle>
              </div>
              <CardDescription className="text-center font-calibri">
                Stay informed with emergency alerts and important community notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-calibri mb-6">
                Voyent Alert! is our emergency notification system that sends alerts directly to your phone, 
                email, or other devices during emergencies and important community events.
              </p>
              <Button asChild>
                <a href="https://voyent-alert.com/lantzville" target="_blank" rel="noopener noreferrer">
                  Sign Up for Alerts
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Planning Tips */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="font-proxima">Emergency Planning Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-proxima font-semibold mb-4">Be Prepared</h3>
                  <ul className="space-y-2 font-calibri text-muted-foreground">
                    <li>• Create a family emergency plan</li>
                    <li>• Prepare a 72-hour emergency kit</li>
                    <li>• Know your evacuation routes</li>
                    <li>• Identify meeting points for your family</li>
                    <li>• Keep important documents accessible</li>
                    <li>• Stay informed through official channels</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-proxima font-semibold mb-4">Stay Informed</h3>
                  <ul className="space-y-2 font-calibri text-muted-foreground">
                    <li>• Sign up for Voyent Alert! notifications</li>
                    <li>• Follow @DistrictLantzville on social media</li>
                    <li>• Monitor local radio stations (CHEK, CFAX)</li>
                    <li>• Check Emergency Info BC website</li>
                    <li>• Subscribe to our newsletter for updates</li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <a href="https://www.emergencyinfobc.gov.bc.ca" target="_blank" rel="noopener noreferrer">
                        Emergency Info BC
                      </a>
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