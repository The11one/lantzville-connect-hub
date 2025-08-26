import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, Target, Users, Leaf, Building, Heart } from "lucide-react";

const visionPillars = [
  {
    icon: Heart,
    title: "Community Well-being",
    description: "Fostering a healthy, inclusive, and vibrant community where residents thrive",
    progress: 75
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "Protecting and enhancing our natural environment for future generations",
    progress: 68
  },
  {
    icon: Building,
    title: "Sustainable Development",
    description: "Balanced growth that preserves our small-town character",
    progress: 82
  },
  {
    icon: Users,
    title: "Engaged Governance",
    description: "Transparent, accountable leadership that reflects community values",
    progress: 90
  }
];

const strategicGoals = [
  {
    title: "Enhance Quality of Life",
    objectives: [
      "Expand recreational facilities and programs",
      "Improve accessibility in public spaces",
      "Support local businesses and economic development",
      "Strengthen community safety and emergency preparedness"
    ]
  },
  {
    title: "Protect Natural Environment",
    objectives: [
      "Implement climate action initiatives",
      "Preserve green spaces and natural areas",
      "Promote sustainable transportation options",
      "Enhance water conservation efforts"
    ]
  },
  {
    title: "Foster Community Connection",
    objectives: [
      "Increase civic engagement opportunities",
      "Celebrate local culture and heritage",
      "Support volunteer organizations",
      "Improve communication with residents"
    ]
  },
  {
    title: "Ensure Fiscal Responsibility",
    objectives: [
      "Maintain sustainable financial practices",
      "Optimize service delivery efficiency",
      "Pursue strategic partnerships",
      "Plan for long-term infrastructure needs"
    ]
  }
];

export default function StrategicPlan() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Plan 2024-2028
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Building a sustainable future for Lantzville - where community thrives
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Download className="h-5 w-5 mr-2" />
              Download Full Plan
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Vision Statement */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-xl text-center italic text-muted-foreground leading-relaxed">
              "Lantzville: A vibrant, sustainable community where residents love life here - 
              balancing growth with environmental stewardship, fostering connection, 
              and preserving our unique small-town character on beautiful Vancouver Island."
            </blockquote>
          </CardContent>
        </Card>

        {/* Vision Pillars */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Strategic Pillars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {visionPillars.map((pillar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <pillar.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Implementation Progress</span>
                      <span>{pillar.progress}%</span>
                    </div>
                    <Progress value={pillar.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Strategic Goals & Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strategicGoals.map((goal, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    {goal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {goal.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Implementation Timeline */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Implementation Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-lg p-4 mb-2">
                    <strong>Year 1</strong>
                  </div>
                  <p className="text-sm">Foundation & Planning</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/80 text-primary-foreground rounded-lg p-4 mb-2">
                    <strong>Year 2</strong>
                  </div>
                  <p className="text-sm">Implementation Phase 1</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/60 text-primary-foreground rounded-lg p-4 mb-2">
                    <strong>Year 3</strong>
                  </div>
                  <p className="text-sm">Implementation Phase 2</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/40 text-primary-foreground rounded-lg p-4 mb-2">
                    <strong>Year 4</strong>
                  </div>
                  <p className="text-sm">Evaluation & Renewal</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Get Involved */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Get Involved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              The success of our strategic plan depends on community engagement. 
              Learn how you can contribute to building Lantzville's future:
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Attend Council Meetings</Button>
              <Button variant="outline">Join a Committee</Button>
              <Button variant="outline">Participate in Surveys</Button>
              <Button variant="outline">Volunteer for Projects</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}