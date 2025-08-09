import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#research" className="text-foreground hover:text-primary transition-colors">
              Research
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">
              Partner Login
            </Button>
            <Button variant="medical">
              Schedule Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">
                Solutions
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
              <a href="#research" className="text-foreground hover:text-primary transition-colors py-2">
                Research
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost">
                  Partner Login
                </Button>
                <Button variant="medical">
                  Schedule Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;