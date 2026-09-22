import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import ServicesGrid from "../components/ServicesGrid";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import siteConfig from "../config/siteConfig";

const processSteps = [
  "Tell us about your shipment — size, weight, and destination.",
  "We quote a transparent, fixed price with no hidden fees.",
  "A rider picks up from your door at the scheduled time.",
  "Track the journey live until it's safely delivered.",
];

export default function ServicesPage() {
  const c = siteConfig.primaryColor;

  return (
    <>
      <PageHeader
        title="Logistics & Courier Services"
        subtitle="Nine ways to move your packages — local, national, and international. Pick what fits, or combine them into one plan."
      />

      <section className="py-16 md:py-24" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesGrid items={siteConfig.services} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={siteConfig.images.warehouse}
                alt="Warehouse package handling"
                className="rounded-[2rem] w-full h-[380px] object-cover shadow-xl"
                loading="lazy"
              />
              <div
                className="absolute -bottom-6 -right-4 md:right-8 rounded-2xl px-6 py-5 shadow-xl text-white"
                style={{ background: siteConfig.secondaryColor }}
              >
                <p className="text-3xl font-extrabold" style={{ color: siteConfig.accentColor }}>
                  {siteConfig.statistics[0].value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  {siteConfig.statistics[0].label}
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our Process"
              title="From Pickup to Delivery in Four Moves"
              center={false}
            />
            <ul className="space-y-5">
              {processSteps.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold text-white"
                    style={{ background: c }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <Button to="/request-quote">Request a Quote <ArrowRight size={16} /></Button>
              <Button to="/pricing" variant="secondary">View Pricing</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Included"
            title="Every Shipment Comes With"
            subtitle="Standard on all service levels — no upgrade required."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Real-time tracking updates",
              "Proof of delivery confirmation",
              "Protective package handling",
              "Transparent, upfront pricing",
              "Customer support on demand",
              "SMS / email status notifications",
            ].map((f, i) => (
              <Reveal key={f} delay={i * 70}>
                <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-5 py-4 text-left hover:shadow-md transition-shadow">
                  <CheckCircle2 size={20} style={{ color: c }} className="shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contact" className="font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all" style={{ color: c }}>
              Talk to our team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}