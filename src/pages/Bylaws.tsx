import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Eye, Calendar } from "lucide-react";

const bylaws = [
  {
    id: 1,
    number: "2024-01",
    title: "Zoning Bylaw",
    category: "Planning",
    dateAdopted: "2024-01-15",
    status: "In Force",
    description: "Comprehensive zoning regulations for the District of Lantzville"
  },
  {
    id: 2,
    number: "2023-15",
    title: "Building and Construction Bylaw",
    category: "Building",
    dateAdopted: "2023-12-10",
    status: "In Force",
    description: "Building permit requirements and construction standards"
  },
  {
    id: 3,
    number: "2023-12",
    title: "Parks and Recreation Facilities Bylaw",
    category: "Parks",
    dateAdopted: "2023-09-25",
    status: "In Force",
    description: "Rules and regulations for public parks and recreational facilities"
  },
  {
    id: 4,
    number: "2023-08",
    title: "Business License Bylaw",
    category: "Business",
    dateAdopted: "2023-06-12",
    status: "In Force",
    description: "Requirements for obtaining and maintaining business licenses"
  },
  {
    id: 5,
    number: "2022-20",
    title: "Traffic and Parking Bylaw",
    category: "Traffic",
    dateAdopted: "2022-11-28",
    status: "In Force",
    description: "Traffic regulations and parking restrictions within the District"
  },
  {
    id: 6,
    number: "2022-18",
    title: "Animal Control Bylaw",
    category: "Animal Control",
    dateAdopted: "2022-10-15",
    status: "In Force",
    description: "Regulations for pet ownership and animal control within the District"
  }
];

const categories = ["All", "Planning", "Building", "Parks", "Business", "Traffic", "Animal Control"];

export default function Bylaws() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBylaws = bylaws.filter(bylaw => {
    const matchesSearch = bylaw.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bylaw.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bylaw.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || bylaw.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bylaws & Regulations
            </h1>
            <p className="text-xl opacity-90">
              Search and access current bylaws, policies, and regulations
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search bylaws..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Bylaws List */}
        <div className="space-y-6">
          {filteredBylaws.map((bylaw) => (
            <Card key={bylaw.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Bylaw {bylaw.number}: {bylaw.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="secondary">{bylaw.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        Adopted: {new Date(bylaw.dateAdopted).toLocaleDateString()}
                      </div>
                      <Badge variant="outline" className="text-success border-success">
                        {bylaw.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{bylaw.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Read Online
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBylaws.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No bylaws found matching your search criteria.
            </p>
          </div>
        )}

        {/* Additional Information */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              If you need assistance finding a specific bylaw or have questions about 
              municipal regulations, please contact us:
            </p>
            <div className="space-y-2">
              <p>Email: <a href="mailto:bylaws@lantzville.ca" className="text-primary hover:underline">bylaws@lantzville.ca</a></p>
              <p>Phone: 250-390-4006</p>
              <p>Office Hours: Monday - Friday, 8:30 AM - 4:30 PM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}