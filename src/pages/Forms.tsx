import { FileText, Download, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageBanner } from "@/components/ui/page-banner";
import formsBanner from "@/assets/forms-banner.jpg";

const buildingForms = [
  {
    title: "Building Permit Application",
    description: "Apply for residential or commercial building permits",
    type: "Fillable PDF",
    size: "2.1 MB",
    updated: "2024-08-15",
    category: "building"
  },
  {
    title: "Home Occupation Permit",
    description: "Permit to operate a business from your residence",
    type: "Fillable PDF",
    size: "1.8 MB",
    updated: "2024-07-20",
    category: "building"
  },
  {
    title: "Development Permit Application",
    description: "Development variance and subdivision applications",
    type: "Fillable PDF",
    size: "3.2 MB",
    updated: "2024-08-01",
    category: "building"
  }
];

const businessForms = [
  {
    title: "Business License Application",
    description: "Apply for or renew your business license",
    type: "Online Form",
    size: "N/A",
    updated: "2024-08-10",
    category: "business"
  },
  {
    title: "Temporary Use Permit",
    description: "Short-term permits for events or temporary businesses",
    type: "Fillable PDF",
    size: "1.5 MB",
    updated: "2024-07-25",
    category: "business"
  }
];

const utilityForms = [
  {
    title: "Water & Sewer Connection Application",
    description: "Connect new properties to municipal utilities",
    type: "Fillable PDF",
    size: "2.8 MB",
    updated: "2024-08-05",
    category: "utilities"
  },
  {
    title: "Utility Account Setup",
    description: "Set up new utility billing account",
    type: "Online Form",
    size: "N/A",
    updated: "2024-08-12",
    category: "utilities"
  }
];

const generalForms = [
  {
    title: "Freedom of Information Request",
    description: "Request access to municipal documents",
    type: "Fillable PDF",
    size: "1.2 MB",
    updated: "2024-07-30",
    category: "general"
  },
  {
    title: "Property Tax Payment Form",
    description: "Make property tax payments by mail",
    type: "Printable PDF",
    size: "0.8 MB",
    updated: "2024-01-15",
    category: "general"
  },
  {
    title: "Council Meeting Delegation Request",
    description: "Request to address Council at a meeting",
    type: "Fillable PDF",
    size: "1.1 MB",
    updated: "2024-06-10",
    category: "general"
  }
];

const allForms = [...buildingForms, ...businessForms, ...utilityForms, ...generalForms];

function FormCard({ form }: { form: any }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{form.title}</CardTitle>
            <CardDescription className="mt-2">
              {form.description}
            </CardDescription>
          </div>
          <Badge variant={form.type === 'Online Form' ? 'default' : 'outline'}>
            {form.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>Updated: {new Date(form.updated).toLocaleDateString()}</span>
          {form.size !== 'N/A' && <span>Size: {form.size}</span>}
        </div>
        <div className="flex gap-2">
          {form.type === 'Online Form' ? (
            <Button className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              Fill Online
            </Button>
          ) : (
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Forms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Banner */}
      <PageBanner
        title="Forms & Applications"
        subtitle="Access all municipal forms, permits, and applications. Many forms can be filled out online or downloaded as PDFs."
        backgroundImage={formsBanner}
        height="lg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search forms by name or description..."
              className="pl-12 h-12 text-lg"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Forms</TabsTrigger>
            <TabsTrigger value="building">Building</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="utilities">Utilities</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allForms.map((form, index) => (
                <FormCard key={index} form={form} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="building" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {buildingForms.map((form, index) => (
                <FormCard key={index} form={form} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {businessForms.map((form, index) => (
                <FormCard key={index} form={form} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="utilities" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {utilityForms.map((form, index) => (
                <FormCard key={index} form={form} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="general" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {generalForms.map((form, index) => (
                <FormCard key={index} form={form} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <section className="mt-16 bg-muted/30 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find the form you need or have questions about an application? 
              Our staff is here to help guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                Contact Us
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Application Guide
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}