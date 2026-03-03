import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMobileMenu = () => {
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`no-print fixed top-0 left-0 right-0 h-18 max-sm:h-16 bg-[rgba(255,255,255,0.97)] backdrop-blur-md z-1000 transition-all duration-250 border-b border-slate-200 ${isScrolled ? "shadow-md" : "shadow-[0_1px_0_0_rgba(15,23,42,0.06)]"}`}
        style={{
          transform: hideNavbar ? "translateY(-100%)" : "translateY(0)",
        }}
        id="navbar">
        <div className="max-w-300 mx-auto px-8 max-md:px-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <img
                src="/images/FusionTechLogo.png"
                alt="FusionTech Logo"
                className="h-10 w-auto object-contain transition-all duration-250 hover:scale-105 max-md:h-9 max-sm:h-8"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="flex items-center gap-7 list-none max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative no-underline font-medium text-[0.9375rem] transition-colors duration-150 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:rounded-full after:transition-[width] after:duration-250 hover:after:w-full hover:text-primary ${isActive(item.path) ? "text-primary after:w-full!" : "text-slate-600"}`}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="inline-block bg-accent text-white! px-5 py-2.5 rounded-lg border-2 border-accent font-semibold shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(37,99,235,0.4)] transition-all duration-250 no-underline">
                Get a Quote
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="hidden max-lg:flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 transition-colors duration-150 hover:bg-slate-100 cursor-pointer bg-transparent border-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — rendered outside <nav> via portal-like pattern */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-998 lg:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-18 max-sm:top-16 left-0 w-full bottom-0 bg-white z-999 overflow-y-auto transition-transform duration-300 ease-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"}`}>
        <div className="flex flex-col p-6 pb-8">
          <ul className="list-none flex flex-col gap-1 mb-6">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-3.5 px-4 rounded-lg text-base font-medium no-underline transition-all duration-150 ${isActive(item.path) ? "bg-accent/8 text-accent border-l-3 border-accent" : "text-slate-700 hover:bg-slate-50 hover:text-primary"}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-px bg-slate-200 mb-6" />
          <Link
            to="/contact"
            className="block text-center bg-accent text-white! py-3.5 rounded-lg border-2 border-accent font-semibold shadow-[0_2px_8px_rgba(37,99,235,0.3)] hover:bg-accent-dark hover:border-accent-dark transition-all duration-250 no-underline text-base">
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
