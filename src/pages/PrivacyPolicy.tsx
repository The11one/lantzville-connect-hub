import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl opacity-90">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The District of Lantzville collects personal information only when necessary 
                to provide municipal services and fulfill our legal obligations.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information for service requests and communications</li>
                <li>Property information for taxation and utility billing</li>
                <li>Application details for permits and licenses</li>
                <li>Website usage data for improving user experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Your personal information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide municipal services and process applications</li>
                <li>Send important notices and updates</li>
                <li>Respond to inquiries and service requests</li>
                <li>Maintain accurate records as required by law</li>
                <li>Improve our services and website functionality</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We do not sell, trade, or otherwise transfer your personal information 
                to third parties except as required by law or to provide municipal services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                For questions about this privacy policy or your personal information, 
                contact us at <a href="mailto:privacy@lantzville.ca" className="text-primary hover:underline">privacy@lantzville.ca</a> 
                or call 250-390-4006.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}