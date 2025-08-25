import { AlertTriangle, Cloud, Wind, Thermometer, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const currentAdvisory = {
  level: "WATCH",
  title: "Winter Storm Watch",
  description: "Heavy snowfall expected with accumulations of 15-25 cm possible. Strong winds may create blowing snow and reduced visibility.",
  startTime: "2024-01-15T18:00:00",
  endTime: "2024-01-16T12:00:00",
  affectedAreas: ["All of Lantzville", "Coastal Areas", "Higher Elevations"],
  recommendations: [
    "Avoid non-essential travel during the storm",
    "Ensure emergency kits are stocked",
    "Clear gutters and drains of debris",
    "Secure outdoor furniture and decorations",
    "Check on elderly neighbors and relatives"
  ]
};

const safetyTips = [
  {
    icon: Thermometer,
    title: "Winter Preparedness",
    tips: [
      "Keep emergency supplies for 72 hours",
      "Insulate pipes to prevent freezing",
      "Have alternative heating sources ready",
      "Keep vehicles winter-ready with supplies"
    ]
  },
  {
    icon: Wind,
    title: "Storm Safety",
    tips: [
      "Stay indoors during severe weather",
      "Avoid walking under trees or power lines",
      "Keep flashlights and batteries handy",
      "Monitor local weather updates regularly"
    ]
  }
];

export default function WeatherAdvisory() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warning to-destructive py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-proxima font-bold mb-6">
            Weather Advisory
          </h1>
          <p className="text-xl font-calibri mb-8 max-w-3xl mx-auto">
            Current weather warnings and safety information for Lantzville residents
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Current Advisory */}
        <Card className="mb-12 border-warning">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                {currentAdvisory.level}
              </Badge>
              <div className="flex items-center text-muted-foreground font-calibri">
                <Clock className="h-4 w-4 mr-1" />
                Updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
              </div>
            </div>
            <CardTitle className="text-2xl font-proxima text-warning">
              {currentAdvisory.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-calibri mb-6">
              {currentAdvisory.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-proxima font-semibold mb-2">Active Period</h3>
                <p className="font-calibri text-muted-foreground">
                  {new Date(currentAdvisory.startTime).toLocaleDateString()} at{" "}
                  {new Date(currentAdvisory.startTime).toLocaleTimeString()} -{" "}
                  {new Date(currentAdvisory.endTime).toLocaleDateString()} at{" "}
                  {new Date(currentAdvisory.endTime).toLocaleTimeString()}
                </p>
              </div>
              <div>
                <h3 className="font-proxima font-semibold mb-2">Affected Areas</h3>
                <div className="space-y-1">
                  {currentAdvisory.affectedAreas.map((area) => (
                    <div key={area} className="flex items-center font-calibri text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-proxima font-semibold mb-4">Recommended Actions</h3>
              <ul className="space-y-2">
                {currentAdvisory.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start font-calibri">
                    <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 text-warning flex-shrink-0" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Safety Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {safetyTips.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <category.icon className="h-6 w-6 mr-2 text-primary" />
                  <CardTitle className="font-proxima">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.tips.map((tip, index) => (
                    <li key={index} className="flex items-start font-calibri">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="font-proxima">Additional Resources</CardTitle>
            <CardDescription className="font-calibri">
              Stay informed with official weather and emergency information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" asChild>
                <a href="https://weather.gc.ca" target="_blank" rel="noopener noreferrer">
                  Environment Canada
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.emergencyinfobc.gov.bc.ca" target="_blank" rel="noopener noreferrer">
                  Emergency Info BC
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services">
                  Emergency Services
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}