import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Logo from "../components/Logo";
import SocialIcon from "../components/SocialIcon";
import siteConfig from "../config/siteConfig";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/tracking", label: "Track Shipment" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/request-quote", label: "Request a Quote" },
];

export default function Footer() {
  const c = siteConfig.primaryColor;
  const year = siteConfig.year || new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white" style={{ background: siteConfig.secondaryColor }}>
      <div
        className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{ background: c }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              {siteConfig.tagline} — {siteConfig.seo.defaultDescription}
            </p>
            <div className="mt-5 flex gap-2.5">
              {siteConfig.socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  aria-label={s.name}
                  className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
                >
                  <SocialIcon name={s.name} size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {siteConfig.services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 mt-0.5" style={{ color: siteConfig.accentColor }} />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 mt-0.5" style={{ color: siteConfig.accentColor }} />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: siteConfig.accentColor }} />
                <span>{siteConfig.address}</span>
              </li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 mt-6 mb-3">Newsletter</h3>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-lg bg-white/10 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg text-white transition-transform hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                style={{ background: c }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {year} {siteConfig.companyName}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">{siteConfig.operatingHours}</p>
        </div>
      </div>
    </footer>
  );
}