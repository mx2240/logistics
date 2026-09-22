import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3.5 text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer";

const variants = {
  primary: `text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5`,
  secondary: `bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5`,
  ghost: `text-slate-700 hover:text-slate-900 hover:bg-slate-100`,
  dark: `bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5`,
};

export default function Button({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const style =
    variant === "primary"
      ? { background: `linear-gradient(135deg, ${siteConfig.primaryColor}, ${siteConfig.primaryColor}cc)` }
      : {};

  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} style={style} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} style={style} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} style={style} {...props}>
      {children}
    </button>
  );
}
