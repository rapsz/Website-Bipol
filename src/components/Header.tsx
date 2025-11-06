import { Bus, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Bus className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Bipol Tracker</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Beranda
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Tentang
          </a>
          <a href="#help" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Bantuan
          </a>
          <Button size="sm" className="ml-2">
            Hubungi Kami
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a
              href="#home"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang
            </a>
            <a
              href="#help"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bantuan
            </a>
            <Button size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Hubungi Kami
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
