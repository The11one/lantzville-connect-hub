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
    <footer className="bg-gradient-to-br from-primary to-secondary text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-ocean-teal rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coastal-sage rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Territory Acknowledgement */}
        <div className="mb-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <h3 className="font-bold mb-3 text-ocean-teal text-lg font-proxima">Territory Acknowledgement</h3>
          <p className="text-white/90 leading-relaxed font-calibri">
            The District of Lantzville acknowledges that we are located on the traditional, 
            ancestral and unceded territory of the Snuneymuxw First Nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/da15074c-676b-4afc-ac6d-5406a5a647c9.png" 
                alt="District of Lantzville Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-proxima font-bold text-xl text-ocean-teal">District of Lantzville</h3>
                <p className="text-coastal-sage font-medium font-calibri">LoveLifeHere</p>
              </div>
            </div>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ocean-teal mt-1 flex-shrink-0" />
                <div className="font-calibri">
                  <div>7192 Lantzville Road</div>
                  <div>Lantzville, BC V0R 2H0</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ocean-teal flex-shrink-0" />
                <span className="font-calibri">250-390-4006</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ocean-teal flex-shrink-0" />
                <span className="font-calibri">info@lantzville.ca</span>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="font-semibold mb-3 text-coastal-sage font-proxima">Office Hours</h4>
              <div className="text-white/90 space-y-1 font-calibri">
                <div>Monday - Friday: 8:30 AM - 4:30 PM</div>
                <div>Saturday - Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-6 text-ocean-teal text-lg font-proxima">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-ocean-teal transition-colors font-calibri hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media and Legal Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex space-x-6">
                <a href="#" className="text-white/70 hover:text-ocean-teal transition-colors transform hover:scale-110">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/70 hover:text-ocean-teal transition-colors transform hover:scale-110">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/70 hover:text-ocean-teal transition-colors transform hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              <div className="text-ocean-teal font-bold text-lg font-proxima">
                #LoveLifeHere
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm">
              <Link to="/privacy-policy" className="text-white/80 hover:text-ocean-teal transition-colors font-calibri hover:underline">
                Privacy Policy
              </Link>
              <Link to="/disclaimer" className="text-white/80 hover:text-ocean-teal transition-colors font-calibri hover:underline">
                Disclaimer
              </Link>
              <Link to="/accessibility" className="text-white/80 hover:text-ocean-teal transition-colors font-calibri hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-white/70 font-calibri">
            © 2024 District of Lantzville. All rights reserved. • Lovable, Livable Lantzville
          </div>
        </div>
      </div>
    </footer>
  );
}