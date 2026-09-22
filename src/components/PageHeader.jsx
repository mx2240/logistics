import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import siteConfig from "../config/siteConfig";

export default function PageHeader({ title, subtitle, breadcrumb }) {
  const c = siteConfig.primaryColor;
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${siteConfig.secondaryColor} 0%, ${siteConfig.secondaryColor}f2 60%, ${c}33 100%)` }}
    >
      <div
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{ background: c }}
      />
      <div
        className="absolute -bottom-32 left-1/4 h-56 w-56 rounded-full blur-3xl opacity-10"
        style={{ background: siteConfig.accentColor }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/50">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="text-white/90 font-semibold" aria-current="page">
              {breadcrumb || title}
            </li>
          </ol>
        </nav>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-white/65 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}