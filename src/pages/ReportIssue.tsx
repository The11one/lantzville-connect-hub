import { AlertTriangle, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const issueTypes = [
  "Road Maintenance",
  "Water/Sewer Issues", 
  "Parks & Recreation",
  "Streetlights",
  "Garbage Collection",
  "Bylaw Concerns",
  "Other"
];

const emergencyContacts = [
  {
    service: "Fire Emergency",
    number: "911",
    description: "Fire, medical emergency, hazardous materials"
  },
  {
    service: "Police Emergency", 
    number: "911",
    description: "Crime in progress, suspicious activity"
  },
  {
    service: "Water Emergency",
    number: "(250) 390-4006",
    description: "Water main breaks, sewer backups"
  }
];

export default function ReportIssue() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-warning py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-proxima font-bold mb-6">
            Report an Issue
          </h1>
          <p className="text-xl font-calibri mb-8 max-w-3xl mx-auto">
            Help us keep Lantzville beautiful and safe by reporting issues in your community
          </p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-destructive/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-destructive">
            <AlertTriangle className="h-6 w-6 mr-2" />
            <p className="font-proxima font-semibold">
              For emergencies, call 911 immediately. This form is for non-urgent issues only.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Report Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-proxima">Submit a Report</CardTitle>
                <CardDescription className="font-calibri">
                  Please provide as much detail as possible to help us address your concern quickly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="issueType" className="font-proxima">Issue Type</Label>
                    <Select>
                      <SelectTrigger id="issueType">
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        {issueTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location" className="font-proxima">Location</Label>
                    <Input 
                      id="location" 
                      placeholder="Street address or nearest intersection"
                      className="font-calibri"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="font-proxima">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Please describe the issue in detail..."
                      className="min-h-32 font-calibri"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-proxima">Your Name</Label>
                      <Input id="name" placeholder="Name" className="font-calibri" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-proxima">Phone Number</Label>
                      <Input id="phone" placeholder="Phone" className="font-calibri" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-proxima">Email Address</Label>
                    <Input id="email" type="email" placeholder="Email" className="font-calibri" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-hover font-proxima">
                    Submit Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contacts & Info */}
          <div className="space-y-8">
            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="font-proxima text-destructive">Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emergencyContacts.map((contact) => (
                    <div key={contact.service} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-proxima font-semibold">{contact.service}</h3>
                        <Button variant="destructive" size="sm" asChild>
                          <a href={`tel:${contact.number.replace(/\D/g, '')}`}>
                            {contact.number}
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm font-calibri text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="font-proxima">District Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-calibri">
                        7192 Lantzville Road<br/>
                        Lantzville, BC V0R 2H0
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-calibri">
                        Phone: (250) 390-4006<br/>
                        Email: info@lantzville.ca
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-calibri">
                        Monday - Friday<br/>
                        8:30 AM - 4:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}