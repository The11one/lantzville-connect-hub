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
      {/* Emergency Alert Bar */}
      <div className="bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <AlertTriangle className="h-4 w-4" />
            <span className="font-medium">
              Weather Advisory: Strong winds expected tonight. Secure outdoor items.
            </span>
            <Button variant="ghost" size="sm" className="text-destructive-foreground hover:text-destructive-foreground/80 p-1">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Site Title */}
          <Link to="/" className="flex items-center space-x-4 group">
            <img 
              src="/lovable-uploads/da15074c-676b-4afc-ac6d-5406a5a647c9.png" 
              alt="District of Lantzville Logo" 
              className="h-14 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-primary font-proxima">District of Lantzville</div>
              <div className="text-sm text-ocean-teal font-medium">British Columbia • #LoveLifeHere</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary px-3 py-2 rounded-md ${
                  isActive(item.href)
                    ? 'text-primary bg-accent font-semibold'
                    : 'text-foreground hover:bg-accent/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search services, documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 w-72 text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50"
                />
              </div>
            </div>

            {/* Language Selector */}
            <Button variant="ghost" size="sm" className="hidden sm:flex hover:bg-accent">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-4 pb-4 space-y-2">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search services, documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Mobile Navigation */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-accent font-semibold'
                      : 'text-foreground hover:text-primary hover:bg-accent/70'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}