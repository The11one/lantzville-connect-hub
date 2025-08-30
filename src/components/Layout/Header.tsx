import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, AlertTriangle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Council", href: "/council" },
  { name: "Services", href: "/services" },
  { name: "Forms", href: "/forms" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Weather Advisory Banner - Top Priority */}
      <div className="bg-warning text-warning-foreground border-b-2 border-warning/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <span className="font-semibold text-sm">
                High wind warning in effect until 6 PM today
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="/weather-advisory">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-warning-foreground/10 border-warning-foreground/30 text-warning-foreground hover:bg-warning-foreground/20 text-xs font-semibold px-4 py-2 transition-all duration-200"
                >
                  View Details
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="text-warning-foreground hover:text-warning-foreground/80 p-1.5">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header - MS.gov Style */}
      <div className="bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/da15074c-676b-4afc-ac6d-5406a5a647c9.png" 
                alt="District of Lantzville Logo" 
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-primary font-proxima">District of Lantzville</div>
                <div className="text-xs text-ocean-teal font-medium">British Columbia</div>
              </div>
            </Link>

            {/* Full-Width Desktop Navigation - MS.gov Style */}
            <div className="hidden lg:flex items-center flex-1 justify-center ml-8">
              <nav className="flex items-center space-x-1">
                
                {/* Search Bar - First in Order */}
                <div className="relative mr-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search services, documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-72 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-200"
                  />
                </div>

                {/* Navigation Links */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-all duration-200 px-4 py-3 rounded-md hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      isActive(item.href)
                        ? 'text-primary bg-accent font-semibold border-b-2 border-primary'
                        : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Side - Language & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hidden sm:flex text-muted-foreground hover:text-foreground hover:bg-accent">
                <Globe className="h-4 w-4 mr-1" />
                <span className="text-xs">EN</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden hover:bg-accent p-2"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu - MS.gov Style */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border/50 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search services, documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            
            {/* Mobile Navigation Links */}
            <nav className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-accent font-semibold border-l-4 border-primary'
                      : 'text-foreground hover:text-primary hover:bg-accent/70'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Language Selector */}
            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-accent">
                <Globe className="h-4 w-4 mr-3" />
                English
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}