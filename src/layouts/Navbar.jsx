import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import siteConfig from "../config/siteConfig";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/tracking", label: "Tracking" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(
    typeof window !== "undefined" ? () => window.scrollY > 12 : false
  );
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu on route change.
    // oxlint-disable-next-line react/set-state-in-effect
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-[72px]" aria-label="Main navigation">
        <Logo />

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive ? "text-blue-700" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`
                }
                style={({ isActive }) =>
                  isActive ? { color: siteConfig.primaryColor } : undefined
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/request-quote" className="!py-2.5 !px-5">
            Request a Quote
          </Button>
        </div>

        <button
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="px-4 sm:px-6 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                  isActive ? "bg-blue-50" : "text-slate-700 hover:bg-slate-50"
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? { color: siteConfig.primaryColor, background: `${siteConfig.primaryColor}10` }
                  : undefined
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Button to="/request-quote" className="w-full">
              Request a Quote
            </Button>
            <Button to="/faq" variant="secondary" className="w-full">
              FAQ
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
