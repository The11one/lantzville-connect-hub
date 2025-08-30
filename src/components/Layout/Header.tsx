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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      {/* Weather Advisory Banner */}
      <div className="bg-warning text-warning-foreground border-b border-warning/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <div className="flex-1">
                <span className="font-semibold text-sm">
                  Weather Advisory: Strong winds expected tonight. Secure outdoor items.
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-warning-foreground/10 border-warning-foreground/20 text-warning-foreground hover:bg-warning-foreground/20 text-xs font-medium"
              >
                View Details
              </Button>
              <Button variant="ghost" size="sm" className="text-warning-foreground hover:text-warning-foreground/80 p-1">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background/98 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Site Title */}
            <Link to="/" className="flex items-center space-x-4 group z-10">
              <img 
                src="/lovable-uploads/da15074c-676b-4afc-ac6d-5406a5a647c9.png" 
                alt="District of Lantzville Logo" 
                className="h-16 w-auto transition-transform group-hover:scale-105 drop-shadow-sm"
              />
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-primary font-proxima">District of Lantzville</div>
                <div className="text-sm text-ocean-teal font-medium">British Columbia • #LoveLifeHere</div>
              </div>
            </Link>

            {/* Desktop Navigation - Full Width Display */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-200 px-4 py-2.5 rounded-lg relative ${
                    isActive(item.href)
                      ? 'text-primary bg-accent font-semibold shadow-sm'
                      : 'text-foreground hover:text-primary hover:bg-accent/60'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"></div>
                  )}
                </Link>
              ))}
              
              {/* Search integrated into navigation */}
              <div className="ml-4 pl-4 border-l border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2.5 w-56 text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background shadow-sm"
                  />
                </div>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <Button variant="ghost" size="sm" className="hidden sm:flex hover:bg-accent text-muted-foreground">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden hover:bg-accent"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background/98 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search services, documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                />
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3.5 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-accent font-semibold shadow-sm'
                      : 'text-foreground hover:text-primary hover:bg-accent/70'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-border mt-4">
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