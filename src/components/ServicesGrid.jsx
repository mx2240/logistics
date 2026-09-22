import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./Reveal";
import siteConfig from "../config/siteConfig";

export default function ServicesGrid({ items, limit }) {
  const c = siteConfig.primaryColor;
  const services = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={(i % 3) * 80}>
          <article className="group h-full bg-white rounded-3xl border border-slate-100 p-6 md:p-7 shadow-[0_1px_3px_rgba(7,17,31,0.04)] hover:shadow-[0_24px_48px_-24px_rgba(7,17,31,0.18)] hover:-translate-y-1.5 transition-all duration-300">
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${c}14`, color: c }}
            >
              <ServiceIcon name={s.icon} size={22} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.description}</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
              style={{ color: c }}
            >
              Learn More
              <ArrowRight size={15} />
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}