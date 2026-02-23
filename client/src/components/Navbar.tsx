import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    subLinks: [
      { label: "About Clinic", path: "/about" },
      { label: "FAQ", path: "/faq" },
      { label: "Testimonials", path: "/testimonials" },
    ],
  },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2 mt-2">
          <img src="/assets/images/logo.png" alt="PrimeCare" className="h-[70px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 outline-none ${location.pathname.startsWith(link.path) || link.subLinks.some(sub => location.pathname === sub.path)
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-background border-border">
                  {link.subLinks.map((sub) => (
                    <DropdownMenuItem key={sub.path} asChild>
                      <Link
                        to={sub.path}
                        className={`w-full cursor-pointer px-4 py-2 text-sm ${location.pathname === sub.path ? "text-primary bg-secondary" : "text-muted-foreground"
                          }`}
                      >
                        {sub.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+11234567890" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            (123) 456-7890
          </a>
          <Button asChild>
            <Link to="/book-appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col gap-1">
                {link.subLinks ? (
                  <>
                    <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                      {link.label}
                    </div>
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === sub.path
                          ? "text-primary bg-secondary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                          }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <a href="tel:+11234567890" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" /> (123) 456-7890
              </a>
              <Button asChild className="w-full">
                <Link to="/book-appointment">Book Appointment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
