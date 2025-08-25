import { FileText, Home, Building2, Clock, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const permitTypes = [
  {
    title: "Building Permits",
    description: "New construction, renovations, additions",
    icon: Home,
    requirements: [
      "Completed application form",
      "Site plan and building plans",
      "Structural engineering (if required)",
      "BC Building Code compliance"
    ],
    fee: "$150 - $500 (varies by project size)"
  },
  {
    title: "Development Permits",
    description: "Land use and development approval",
    icon: Building2,
    requirements: [
      "Development permit application",
      "Site plan and elevations", 
      "Landscape plan",
      "Environmental assessment (if required)"
    ],
    fee: "$300 - $1,500"
  },
  {
    title: "Subdivision Approval",
    description: "Land subdivision and parcel creation",
    icon: FileText,
    requirements: [
      "Preliminary layout review",
      "Subdivision application",
      "Survey and legal documents",
      "Servicing agreements"
    ],
    fee: "$2,000 - $5,000"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Pre-Application",
    description: "Meet with planning staff to discuss your project and requirements"
  },
  {
    step: 2,
    title: "Application Submission",
    description: "Submit completed application with required documents and fees"
  },
  {
    step: 3,
    title: "Review Process", 
    description: "Staff review for compliance with bylaws and building codes"
  },
  {
    step: 4,
    title: "Approval & Permits",
    description: "Receive approval and permits to begin construction"
  }
];

export default function Building() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-proxima font-bold mb-6">
            Building & Development
          </h1>
          <p className="text-xl font-calibri mb-8 max-w-3xl mx-auto">
            Information and resources for building permits, development applications, and construction in Lantzville
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="permits" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="permits">Permits</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="bylaws">Bylaws</TabsTrigger>
          </TabsList>

          <TabsContent value="permits">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {permitTypes.map((permit) => (
                <Card key={permit.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <permit.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-center font-proxima">{permit.title}</CardTitle>
                    <CardDescription className="text-center font-calibri">
                      {permit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-proxima font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {permit.requirements.map((req, index) => (
                            <li key={index} className="text-sm font-calibri text-muted-foreground">
                              • {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-proxima font-semibold mb-1">Fee Range:</h4>
                        <p className="text-sm font-calibri text-muted-foreground">{permit.fee}</p>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary-hover">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process">
            <Card>
              <CardHeader>
                <CardTitle className="font-proxima">Application Process</CardTitle>
                <CardDescription className="font-calibri">
                  Step-by-step guide to obtaining permits and approvals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {processSteps.map((step) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-proxima font-semibold mb-2">{step.title}</h3>
                        <p className="font-calibri text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-proxima font-semibold mb-4">Need Help Getting Started?</h3>
                  <p className="font-calibri mb-4">
                    Our planning staff are available to help you understand the requirements for your project.
                    We encourage pre-application meetings to ensure your application is complete.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button asChild>
                      <a href="tel:2503904006">
                        <Phone className="h-4 w-4 mr-2" />
                        Call (250) 390-4006
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="mailto:planning@lantzville.ca">
                        Email Planning Dept
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bylaws">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-proxima">Zoning Bylaw</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-calibri mb-4">
                    The Zoning Bylaw regulates land use, building placement, and development standards throughout Lantzville.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/documents/zoning-bylaw.pdf" target="_blank">
                      <FileText className="h-4 w-4 mr-2" />
                      View Zoning Bylaw
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-proxima">Building Bylaw</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-calibri mb-4">
                    The Building Bylaw establishes standards for construction, renovations, and building safety in Lantzville.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/documents/building-bylaw.pdf" target="_blank">
                      <FileText className="h-4 w-4 mr-2" />
                      View Building Bylaw
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-proxima">Development Procedures</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-calibri mb-4">
                    Guidelines and procedures for development permit and subdivision applications.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/documents/development-procedures.pdf" target="_blank">
                      <FileText className="h-4 w-4 mr-2" />
                      View Procedures
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-proxima">Fee Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-calibri mb-4">
                    Current fees for building permits, development applications, and related services.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/documents/fee-schedule.pdf" target="_blank">
                      <FileText className="h-4 w-4 mr-2" />
                      View Fee Schedule
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}