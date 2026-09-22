import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import siteConfig from "../config/siteConfig";

export default function Logo({ light = false }) {
  const logoSrc = siteConfig.logo;
  const [first, ...rest] = siteConfig.companyName.split(" ");

  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${siteConfig.companyName} home`}>
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={`${siteConfig.companyName} logo`}
          className="h-9 w-auto"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm"
          style={{ background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.primaryColor}dd)` }}
        >
          <Package size={20} strokeWidth={2.2} />
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
          {first}
          {rest.length > 0 && <span style={{ color: siteConfig.primaryColor }}> {rest.join(" ")}</span>}
        </span>
        <span className={`text-[10px] font-medium tracking-widest uppercase ${light ? "text-white/60" : "text-slate-400"} mt-0.5`}>
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}