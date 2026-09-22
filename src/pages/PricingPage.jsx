import { Link } from "react-router-dom";
import { Check, ArrowRight, Info } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import siteConfig from "../config/siteConfig";

export default function PricingPage() {
  const c = siteConfig.primaryColor;
  const plans = siteConfig.pricing;

  return (
    <>
      <PageHeader
        title="Transparent, Simple Pricing"
        subtitle="No hidden fees, no surprises. Prices below are demo starting prices — contact us for an exact quote tailored to your route and volume."
      />

      <section className="py-16 md:py-24" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-10 flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-amber-50 px-5 py-4 max-w-3xl mx-auto"
            role="note"
          >
            <Info size={18} className="shrink-0 text-amber-600 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              Negotiable for high-volume or recurring business. Final quotes depend on weight,
              dimensions, distance, and delivery speed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p, i) => {
              const highlighted = p.highlighted;
              return (
                <Reveal key={p.name} delay={i * 90}>
                  <div
                    className={`relative h-full flex flex-col rounded-3xl p-7 transition-all duration-300 ${
                      highlighted
                        ? "text-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)] lg:-translate-y-3"
                        : "bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5"
                    }`}
                    style={highlighted ? { background: siteConfig.secondaryColor } : undefined}
                  >
                    {highlighted && (
                      <span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wider text-white px-4 py-1.5 rounded-full"
                        style={{ background: siteConfig.primaryColor }}
                      >
                        Most Popular
                      </span>
                    )}

                    <p className={`text-xs font-extrabold uppercase tracking-widest ${highlighted ? "text-white/60" : "text-slate-400"}`}>
                      {p.name}
                    </p>
                    <div className="mt-4 mb-6">
                      <p className={`text-4xl font-extrabold tracking-tight ${highlighted ? "text-white" : "text-slate-900"}`}>
                        {p.price}
                      </p>
                      <p className={`text-xs font-semibold mt-1.5 ${highlighted ? "text-white/50" : "text-slate-400"}`}>
                        {p.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                            style={{
                              background: highlighted ? `${siteConfig.primaryColor}22` : `${c}14`,
                              color: highlighted ? siteConfig.primaryColor : c,
                            }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className={`text-sm font-medium ${highlighted ? "text-white/85" : "text-slate-600"}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      to={p.cta === "Request Quote" ? "/request-quote" : "/contact"}
                      variant={highlighted ? "primary" : "secondary"}
                      className="w-full"
                    >
                      {p.cta} <ArrowRight size={15} />
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-slate-400 max-w-2xl mx-auto">
            Need something custom — a dedicated vehicle, temperature-controlled transport, or
            same-hour dispatch?{" "}
            <Link to="/contact" className="font-semibold" style={{ color: c }}>
              Contact our sales team
            </Link>{" "}
            and we'll build a plan around your operation.
          </p>
        </div>
      </section>
    </>
  );
}