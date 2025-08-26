import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, CheckCircle, Calendar, Users, Leaf, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const newsletterCategories = [
  { id: "news", label: "Community News & Updates", icon: Mail },
  { id: "events", label: "Events & Activities", icon: Calendar },
  { id: "council", label: "Council Meetings & Decisions", icon: Users },
  { id: "environment", label: "Environmental Initiatives", icon: Leaf },
  { id: "development", label: "Development & Planning", icon: Building }
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["news"]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate newsletter signup
    setIsSubmitted(true);
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to the Lantzville community newsletter."
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Newsletter Signup
              </h1>
              <p className="text-xl opacity-90">
                Stay connected with your community
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Thank you for subscribing!</h2>
                <p className="text-muted-foreground mb-6">
                  You'll receive your first newsletter within the next few days. 
                  You can update your preferences or unsubscribe at any time using 
                  the links in our emails.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Subscribe Another Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Newsletter Signup
            </h1>
            <p className="text-xl opacity-90">
              Stay informed about what's happening in Lantzville
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Newsletter Benefits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Why Subscribe?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  <span>Get the latest community news and updates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  <span>Be first to know about events and activities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  <span>Stay informed about council decisions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  <span>Learn about local business and development updates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  <span>Receive important service announcements</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Signup Form */}
          <Card>
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    What would you like to receive? (Select all that apply)
                  </Label>
                  <div className="space-y-3">
                    {newsletterCategories.map((category) => (
                      <div key={category.id} className="flex items-start space-x-3">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category.id, checked as boolean)
                          }
                        />
                        <div className="flex items-start space-x-2">
                          <category.icon className="h-4 w-4 mt-0.5 text-primary" />
                          <Label htmlFor={category.id} className="text-sm cursor-pointer">
                            {category.label}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  By subscribing, you agree to receive emails from the District of Lantzville. 
                  You can unsubscribe at any time using the link in our emails. 
                  We respect your privacy and will never share your information.
                </div>

                <Button type="submit" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                For questions about our newsletter or to update your subscription, 
                contact us at{" "}
                <a href="mailto:newsletter@lantzville.ca" className="text-primary hover:underline">
                  newsletter@lantzville.ca
                </a>{" "}
                or call 250-390-4006.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}