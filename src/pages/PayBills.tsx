import { CreditCard, FileText, Clock, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const paymentOptions = [
  {
    title: "Property Taxes",
    description: "Pay your annual property taxes online",
    icon: FileText,
    external: true,
    url: "https://taxbills.lantzville.ca"
  },
  {
    title: "Utilities",
    description: "Water, sewer, and garbage services",
    icon: CreditCard,
    external: true,
    url: "https://utilities.lantzville.ca"
  },
  {
    title: "Permits & Licenses",
    description: "Building permits and business licenses",
    icon: FileText,
    external: true,
    url: "https://permits.lantzville.ca"
  }
];

export default function PayBills() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-proxima font-bold mb-6">
            Pay Bills Online
          </h1>
          <p className="text-xl font-calibri mb-8 max-w-3xl mx-auto">
            Conveniently pay your property taxes, utilities, and permits online 24/7
          </p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentOptions.map((option) => (
              <Card key={option.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-proxima">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="font-calibri mb-6">
                    {option.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                  >
                    <a 
                      href={option.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Pay Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-proxima text-center">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-proxima font-semibold mb-2">Office Hours</h3>
                  <p className="font-calibri text-muted-foreground">
                    Monday - Friday: 8:30 AM - 4:30 PM
                  </p>
                </div>
                <div>
                  <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-proxima font-semibold mb-2">Contact Us</h3>
                  <p className="font-calibri text-muted-foreground">
                    Phone: (250) 390-4006<br/>
                    Email: info@lantzville.ca
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}