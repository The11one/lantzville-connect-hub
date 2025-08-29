import { Calendar as CalendarIcon, MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Council Meeting",
    date: "2024-08-26",
    time: "7:00 PM - 9:00 PM",
    location: "Council Chambers",
    category: "Government",
    description: "Regular monthly council meeting. Public welcome.",
    attendees: 25
  },
  {
    id: 2,
    title: "Farmers Market",
    date: "2024-08-28",
    time: "9:00 AM - 2:00 PM",
    location: "Community Park",
    category: "Community",
    description: "Weekly farmers market featuring local vendors and fresh produce.",
    attendees: 150
  },
  {
    id: 3,
    title: "Beach Cleanup",
    date: "2024-09-05",
    time: "10:00 AM - 12:00 PM",
    location: "Blueback Beach",
    category: "Environment",
    description: "Community beach cleanup event. Supplies provided.",
    attendees: 45
  },
  {
    id: 4,
    title: "Community Garden Workshop",
    date: "2024-09-12",
    time: "2:00 PM - 4:00 PM",
    location: "Community Garden",
    category: "Education",
    description: "Learn about sustainable gardening practices.",
    attendees: 20
  },
  {
    id: 5,
    title: "Heritage Day Celebration",
    date: "2024-09-21",
    time: "11:00 AM - 5:00 PM",
    location: "Heritage Park",
    category: "Culture",
    description: "Celebrate Lantzville's rich history with activities and displays.",
    attendees: 200
  }
];

const categoryColors = {
  "Government": "bg-primary",
  "Community": "bg-ocean-teal",
  "Environment": "bg-success",
  "Education": "bg-coastal-sage",
  "Culture": "bg-secondary"
};

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    return categoryColors[category as keyof typeof categoryColors] || "bg-muted";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-proxima font-bold mb-6">
            Community Calendar
          </h1>
          <p className="text-xl font-calibri mb-8 max-w-2xl mx-auto opacity-90">
            Stay connected with Lantzville's vibrant community life. Join us for meetings, 
            events, and activities that bring our coastal community together.
          </p>
          <div className="text-lg font-proxima text-ocean-teal font-bold">
            #LoveLifeHere
          </div>
        </div>
      </section>

      {/* Calendar Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Calendar Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-proxima font-bold text-primary mb-2">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground font-calibri">
                Mark your calendar and join your community
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <div className="text-lg font-semibold text-primary font-proxima">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className={`transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border-0 shadow-lg ${
                  selectedEvent === event.id ? 'ring-2 ring-primary shadow-2xl' : ''
                }`}
                onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge 
                      className={`${getCategoryColor(event.category)} text-white font-medium`}
                    >
                      {event.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary font-proxima">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm text-muted-foreground font-calibri">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-proxima text-primary hover:text-ocean-teal transition-colors">
                    {event.title}
                  </CardTitle>
                  
                  <CardDescription className="font-calibri text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="h-4 w-4 mr-3 text-ocean-teal" />
                      <span className="font-calibri">{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-3 text-ocean-teal" />
                      <span className="font-calibri">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-3 text-ocean-teal" />
                      <span className="font-calibri">{event.location}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-3 text-ocean-teal" />
                      <span className="font-calibri">{event.attendees} expected attendees</span>
                    </div>
                  </div>
                  
                  {selectedEvent === event.id && (
                    <div className="pt-4 border-t border-border">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          variant="ocean" 
                          size="sm" 
                          className="flex-1 font-proxima"
                        >
                          Add to Calendar
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 font-proxima hover:bg-accent"
                        >
                          Share Event
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calendar Footer */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-accent/30 to-sandy-beige/20 rounded-2xl p-8">
              <h3 className="text-2xl font-proxima font-bold text-primary mb-4">
                Want to Host an Event?
              </h3>
              <p className="text-muted-foreground font-calibri mb-6 max-w-2xl mx-auto">
                Submit your community event for consideration. We love celebrating 
                everything that makes Lantzville special!
              </p>
              <Button variant="gradient" size="lg" className="font-proxima">
                Submit Event Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}