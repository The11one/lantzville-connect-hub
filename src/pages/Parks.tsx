import { Trees, MapPin, Camera, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const parks = [
  {
    name: "Kin Park",
    description: "Family-friendly park with playground equipment, picnic tables, and beach access",
    amenities: ["Playground", "Picnic Tables", "Beach Access", "Parking"],
    address: "Kin Park Road, Lantzville BC",
    hours: "Dawn to Dusk"
  },
  {
    name: "Blueback Beach",
    description: "Beautiful sandy beach perfect for swimming, beach combing, and sunset viewing",
    amenities: ["Beach Access", "Parking", "Washrooms", "Picnic Area"],
    address: "Blueback Road, Lantzville BC", 
    hours: "Dawn to Dusk"
  },
  {
    name: "Community Park",
    description: "Central park with sports facilities, walking trails, and community gathering spaces",
    amenities: ["Walking Trails", "Sports Field", "Community Events", "Parking"],
    address: "Lantzville Road, Lantzville BC",
    hours: "Dawn to Dusk"
  }
];

const activities = [
  {
    title: "Beach Activities",
    description: "Swimming, beach volleyball, sandcastle building, and tide pooling",
    icon: Camera,
    season: "Summer"
  },
  {
    title: "Nature Walks",
    description: "Guided and self-guided nature walks through our beautiful trails",
    icon: Trees,
    season: "Year Round"
  },
  {
    title: "Community Events",
    description: "Farmers markets, festivals, and outdoor movie nights",
    icon: Users,
    season: "Spring/Summer"
  }
];

export default function Parks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-success to-primary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-proxima font-bold mb-6">
            Parks & Recreation
          </h1>
          <p className="text-xl font-calibri mb-8 max-w-3xl mx-auto">
            Discover Lantzville's beautiful parks, beaches, and recreational opportunities for the whole family
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Parks Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-proxima font-bold text-center mb-12">Our Parks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {parks.map((park) => (
              <Card key={park.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-proxima">{park.name}</CardTitle>
                  <CardDescription className="font-calibri">
                    {park.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-proxima font-semibold mb-2">Amenities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {park.amenities.map((amenity) => (
                          <Badge key={amenity} variant="secondary">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <p className="text-sm font-calibri text-muted-foreground">
                          {park.address}
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Clock className="h-4 w-4 text-primary mt-1" />
                        <p className="text-sm font-calibri text-muted-foreground">
                          {park.hours}
                        </p>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-proxima font-bold text-center mb-12">Activities & Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Card key={activity.title}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <activity.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-proxima">{activity.title}</CardTitle>
                  <Badge variant="outline">{activity.season}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="font-calibri text-center text-muted-foreground">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Park Rules & Information */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="font-proxima">Park Guidelines & Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-proxima font-semibold mb-4">Park Rules</h3>
                  <ul className="space-y-2 font-calibri text-muted-foreground">
                    <li>• Parks are open from dawn to dusk</li>
                    <li>• Keep pets on leash and clean up after them</li>
                    <li>• No camping or overnight stays</li>
                    <li>• Alcohol prohibited in all parks</li>
                    <li>• Respect wildlife and natural areas</li>
                    <li>• Take only photos, leave only footprints</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-proxima font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-2 font-calibri text-muted-foreground">
                    <p>For park maintenance issues or to report problems:</p>
                    <p><strong>Phone:</strong> (250) 390-4006</p>
                    <p><strong>Email:</strong> parks@lantzville.ca</p>
                    <p><strong>Emergency:</strong> Call 911</p>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <a href="/report-issue">Report an Issue</a>
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