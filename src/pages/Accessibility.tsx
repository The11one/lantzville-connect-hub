import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Ear, Mouse, Keyboard, Mail, Phone } from "lucide-react";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Accessibility
            </h1>
            <p className="text-xl opacity-90">
              Committed to providing accessible services for all residents
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The District of Lantzville is committed to ensuring that our website 
                and digital services are accessible to all users, including people 
                with disabilities. We strive to meet or exceed the Web Content 
                Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Eye className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Visual Accessibility</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>High contrast color schemes</li>
                      <li>Scalable text and images</li>
                      <li>Alternative text for images</li>
                      <li>Clear visual hierarchy</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Keyboard className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Keyboard Navigation</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>Full keyboard accessibility</li>
                      <li>Logical tab order</li>
                      <li>Visible focus indicators</li>
                      <li>Skip navigation links</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Ear className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Screen Reader Support</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>Semantic HTML structure</li>
                      <li>Descriptive link text</li>
                      <li>Form labels and instructions</li>
                      <li>ARIA landmarks and labels</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mouse className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Motor Accessibility</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>Large clickable areas</li>
                      <li>No time limits on forms</li>
                      <li>Easy-to-use navigation</li>
                      <li>Mobile-friendly design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alternative Formats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you need information from our website in an alternative format, 
                we can provide documents in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Large print</li>
                <li>Audio format</li>
                <li>Braille</li>
                <li>Plain language versions</li>
                <li>Electronic formats compatible with assistive technology</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback and Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We welcome your feedback on the accessibility of our website. 
                If you encounter any barriers or have suggestions for improvement, 
                please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:accessibility@lantzville.ca" className="text-primary hover:underline">
                    accessibility@lantzville.ca
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>250-390-4006</span>
                </div>
              </div>
              <div className="pt-4">
                <Button>
                  Report Accessibility Issue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}