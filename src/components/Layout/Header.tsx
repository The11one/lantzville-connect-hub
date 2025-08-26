import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Bell, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
    <header className="bg-card border-b border-border sticky top-0 z-50">
      {/* Emergency Alert Bar */}
      <div className="bg-warning text-warning-foreground px-4 py-2">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="font-medium">Weather Advisory:</span>
            <span>High wind warning in effect until 6 PM today.</span>
          </div>
          <Button variant="ghost" size="sm" asChild className="text-warning-foreground hover:bg-warning-foreground/10">
            <a href="/weather-advisory">View Details</a>
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/da15074c-676b-4afc-ac6d-5406a5a647c9.png" 
              alt="District of Lantzville Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-proxima font-bold text-foreground">District of Lantzville</div>
              <div className="text-xs font-calibri text-horizon font-medium">LoveLifeHere</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search site..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>

            {/* Language Selector */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Search */}
              <div className="px-4 pt-4 border-t border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search site..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}