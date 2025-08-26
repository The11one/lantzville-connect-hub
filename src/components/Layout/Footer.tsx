import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Building & Development", href: "/services/building" },
      { name: "Parks & Recreation", href: "/services/parks" },
      { name: "Public Works", href: "/services/public-works" },
      { name: "Emergency Services", href: "/services/emergency" }
    ]
  },
  {
    title: "Government",
    links: [
      { name: "Council", href: "/council" },
      { name: "Meetings & Agendas", href: "/council/meetings" },
      { name: "Bylaws", href: "/bylaws" },
      { name: "Strategic Plan", href: "/about/strategic-plan" }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { name: "Forms & Applications", href: "/forms" },
      { name: "Pay Bills Online", href: "/pay-bills" },
      { name: "Report an Issue", href: "/report-issue" },
      { name: "Newsletter Signup", href: "/newsletter" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Territory Acknowledgement */}
      <div className="bg-primary-hover py-6">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="font-semibold mb-2">Territory Acknowledgement</h3>
            <p className="text-sm opacity-90">
              The District of Lantzville acknowledges that we are located on the traditional, 
              ancestral and unceded territory of the Snuneymuxw First Nation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/da15074c-676b-4afc-ac6d-5406a5a647c9.png" 
                alt="District of Lantzville Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="font-proxima font-semibold text-lg">District of Lantzville</h3>
                <p className="text-sm font-calibri text-horizon font-medium">LoveLifeHere</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div>7192 Lantzville Road</div>
                  <div>Lantzville, BC V0R 2H0</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">250-390-4006</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@lantzville.ca</span>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <div className="text-sm space-y-1">
                <div>Monday - Friday: 8:30 AM - 4:30 PM</div>
                <div>Saturday - Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Follow Us:</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="hover:text-accent transition-colors">
              Disclaimer
            </Link>
            <Link to="/accessibility" className="hover:text-accent transition-colors">
              Accessibility
            </Link>
            <span className="text-primary-foreground/70">
              © 2024 District of Lantzville
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}