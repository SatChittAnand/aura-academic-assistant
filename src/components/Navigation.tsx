import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Users, 
  MessageSquare,
  Settings,
  Sparkles
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Features", href: "#features", icon: Sparkles },
  { label: "Learn", href: "#learn", icon: BookOpen },
  { label: "Community", href: "#community", icon: Users },
  { label: "Chat", href: "#chat", icon: MessageSquare },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-holographic rounded-lg flex items-center justify-center animate-glow-pulse">
              <Brain className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-holographic bg-clip-text text-transparent">
              EduNova
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
              Sign In
            </Button>
            <Button variant="holographic">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              })}
              
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Button variant="outline" className="justify-start border-primary/20">
                  Sign In
                </Button>
                <Button variant="holographic" className="justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}