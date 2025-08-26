import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Disclaimer
            </h1>
            <p className="text-xl opacity-90">
              Important information about the use of this website
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <p className="text-sm">
              Please read this disclaimer carefully before using this website.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Information Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                While the District of Lantzville strives to ensure the accuracy and 
                currency of information on this website, we cannot guarantee that all 
                information is complete, accurate, or up-to-date at all times.
              </p>
              <p>
                Users should verify critical information directly with the District 
                before making decisions based on website content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The District of Lantzville will not be liable for any damages arising 
                from the use of this website or reliance on its content, including but 
                not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>External Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                This website may contain links to external sites. The District of 
                Lantzville is not responsible for the content, accuracy, or privacy 
                practices of linked websites.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Website Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We strive to maintain website availability but cannot guarantee 
                uninterrupted access. The website may be temporarily unavailable 
                for maintenance or due to technical issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                For questions about this disclaimer, contact the District of Lantzville 
                at <a href="mailto:info@lantzville.ca" className="text-primary hover:underline">info@lantzville.ca</a> 
                or call 250-390-4006.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}