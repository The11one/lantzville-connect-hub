import { Calendar, Download, Play, Users, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const councilMembers = [
  {
    name: "Mark Swain",
    title: "Mayor",
    email: "mayor@lantzville.ca",
    phone: "250-390-4006",
    image: "/placeholder.svg"
  },
  {
    name: "Councillor Jane Smith",
    title: "Councillor",
    email: "jsmith@lantzville.ca",
    committees: ["Finance", "Parks & Recreation"]
  },
  {
    name: "Councillor John Doe",
    title: "Councillor", 
    email: "jdoe@lantzville.ca",
    committees: ["Planning", "Public Works"]
  },
  {
    name: "Councillor Sarah Wilson",
    title: "Councillor",
    email: "swilson@lantzville.ca",
    committees: ["Environment", "Community Development"]
  }
];

const upcomingMeetings = [
  {
    id: 1,
    title: "Regular Council Meeting",
    date: "2024-08-26",
    time: "7:00 PM",
    location: "Council Chambers",
    agenda: "council-agenda-aug-26-2024.pdf",
    type: "Regular"
  },
  {
    id: 2,
    title: "Committee of the Whole",
    date: "2024-09-09",
    time: "7:00 PM", 
    location: "Council Chambers",
    agenda: "committee-agenda-sep-09-2024.pdf",
    type: "Committee"
  }
];

const pastMeetings = [
  {
    id: 1,
    title: "Regular Council Meeting",
    date: "2024-08-12",
    agenda: "council-agenda-aug-12-2024.pdf",
    minutes: "council-minutes-aug-12-2024.pdf",
    video: "https://youtube.com/watch?v=example",
    status: "complete"
  },
  {
    id: 2,
    title: "Special Council Meeting",
    date: "2024-07-29",
    agenda: "special-council-agenda-jul-29-2024.pdf",
    minutes: "special-council-minutes-jul-29-2024.pdf",
    video: "https://youtube.com/watch?v=example2",
    status: "complete"
  }
];

export default function Council() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mayor and Council
            </h1>
            <p className="text-xl opacity-90">
              Serving the community with transparency, accountability, and dedication 
              to making Lantzville a great place to live, work, and play.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="meetings" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="meetings">Meetings</TabsTrigger>
            <TabsTrigger value="members">Council Members</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          {/* Meetings Tab */}
          <TabsContent value="meetings" className="space-y-8">
            {/* Upcoming Meetings */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Upcoming Meetings</h2>
              <div className="grid gap-6">
                {upcomingMeetings.map((meeting) => (
                  <Card key={meeting.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{meeting.title}</CardTitle>
                          <CardDescription className="mt-2">
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {meeting.location}
                              </div>
                            </div>
                          </CardDescription>
                        </div>
                        <Badge variant={meeting.type === 'Regular' ? 'default' : 'secondary'}>
                          {meeting.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Agenda
                        </Button>
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Add to Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator />

            {/* Past Meetings */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Past Meetings</h2>
              <div className="grid gap-4">
                {pastMeetings.map((meeting) => (
                  <Card key={meeting.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{meeting.title}</CardTitle>
                          <CardDescription>
                            {new Date(meeting.date).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-success border-success">
                          Complete
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Agenda
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Minutes
                        </Button>
                        <Button variant="outline" size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Watch Video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Council Members Tab */}
          <TabsContent value="members" className="space-y-8">
            <div className="grid gap-6">
              {councilMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {member.title}
                        </CardDescription>
                        {member.committees && (
                          <div className="mt-2">
                            <span className="text-sm font-medium">Committees: </span>
                            <span className="text-sm text-muted-foreground">
                              {member.committees.join(", ")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-primary hover:underline"
                      >
                        {member.email}
                      </a>
                      {member.phone && (
                        <span className="text-muted-foreground">{member.phone}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Bylaws & Policies</CardTitle>
                  <CardDescription>
                    Current bylaws, policies, and regulations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    View All Bylaws
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Reports</CardTitle>
                  <CardDescription>
                    Annual budgets and financial statements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Reports
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strategic Plan</CardTitle>
                  <CardDescription>
                    Community vision and strategic objectives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    View Plan
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Public Consultation</CardTitle>
                  <CardDescription>
                    Ongoing and past public engagement opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Get Involved
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