import { Calendar, MapPin, Clock, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageBanner } from "@/components/ui/page-banner";
import eventsBanner from "@/assets/events-banner.jpg";

const events = [
  {
    id: 1,
    title: "Council Meeting",
    description: "Regular monthly council meeting open to the public",
    date: "2024-08-26",
    time: "7:00 PM",
    endTime: "9:00 PM",
    location: "Council Chambers, Municipal Hall",
    category: "Government",
    type: "Public Meeting",
    featured: true
  },
  {
    id: 2,
    title: "Farmers Market",
    description: "Weekly farmers market featuring local vendors and fresh produce",
    date: "2024-08-28",
    time: "9:00 AM",
    endTime: "2:00 PM",
    location: "Community Park",
    category: "Community",
    type: "Market",
    recurring: "Weekly"
  },
  {
    id: 3,
    title: "Beach Cleanup Day",
    description: "Community volunteer event to keep our beaches clean and beautiful",
    date: "2024-09-05",
    time: "10:00 AM",
    endTime: "12:00 PM",
    location: "Blueback Beach",
    category: "Environment",
    type: "Volunteer"
  },
  {
    id: 4,
    title: "Heritage Day Celebration",
    description: "Annual celebration of Lantzville's rich history and heritage",
    date: "2024-09-15",
    time: "11:00 AM",
    endTime: "4:00 PM",
    location: "Heritage Park",
    category: "Cultural",
    type: "Festival"
  },
  {
    id: 5,
    title: "Public Consultation - Waterfront Development",
    description: "Community input session for proposed waterfront development project",
    date: "2024-09-20",
    time: "7:00 PM",
    endTime: "9:00 PM",
    location: "Community Centre",
    category: "Planning",
    type: "Public Meeting"
  },
  {
    id: 6,
    title: "Fire Safety Workshop",
    description: "Learn fire safety tips and emergency preparedness from local firefighters",
    date: "2024-10-03",
    time: "6:30 PM",
    endTime: "8:00 PM",
    location: "Fire Hall",
    category: "Safety",
    type: "Workshop"
  }
];

const categories = ["All", "Government", "Community", "Environment", "Cultural", "Planning", "Safety"];

function EventCard({ event }: { event: any }) {
  const eventDate = new Date(event.date);
  const isUpcoming = eventDate > new Date();
  
  return (
    <Card className={`hover:shadow-md transition-shadow ${event.featured ? 'ring-2 ring-primary' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={isUpcoming ? 'default' : 'outline'}>
                {event.category}
              </Badge>
              {event.featured && (
                <Badge variant="secondary">Featured</Badge>
              )}
              {event.recurring && (
                <Badge variant="outline">{event.recurring}</Badge>
              )}
            </div>
            <CardTitle className="text-xl">{event.title}</CardTitle>
            <CardDescription className="mt-2">
              {event.description}
            </CardDescription>
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px] ml-4">
            <div className="text-sm font-medium">
              {eventDate.toLocaleDateString('en-US', { month: 'short' })}
            </div>
            <div className="text-xl font-bold">
              {eventDate.getDate()}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {event.time} - {event.endTime}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {event.type}
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm" className="flex-1">
            <Calendar className="h-4 w-4 mr-2" />
            Add to Calendar
          </Button>
          {isUpcoming && (
            <Button size="sm" className="flex-1">
              Learn More
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Banner */}
      <PageBanner
        title="Community Events"
        subtitle="Stay connected with what's happening in Lantzville. From council meetings to community celebrations."
        backgroundImage={eventsBanner}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search events..."
              className="w-full"
            />
          </div>
          <Select defaultValue="All">
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="upcoming">
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="all">All Events</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Calendar Integration */}
        <section className="mt-16 bg-muted/30 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our community calendar to receive notifications about 
              upcoming events and important meetings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <Calendar className="h-4 w-4 mr-2" />
                Subscribe to Calendar
              </Button>
              <Button variant="outline">
                Download Calendar App
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}