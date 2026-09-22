import { Target, Eye, ArrowRight, HeartHandshake, Cpu, Headphones } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import siteConfig from "../config/siteConfig";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Reliability",
    text: "We show up when we say we will. Consistent pickup windows, consistent delivery times, and careful handling on every single shipment.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "Modern tracking and dispatch systems keep every package visible to you and to us — from the first scan to the final handover.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    text: "Real people answer your questions. Whether it's one parcel a week or hundreds a day, support is always within reach.",
  },
];

export default function AboutPage() {
  const c = siteConfig.primaryColor;
  const a = siteConfig.about;

  return (
    <>
      <PageHeader
        title={`About ${siteConfig.companyName}`}
        subtitle={`${siteConfig.tagline} — a logistics partner built around speed, transparency, and technology.`}
      />

      {/* Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={siteConfig.images.about}
                alt="Logistics team handling packages"
                className="rounded-[2rem] w-full h-[400px] object-cover shadow-xl"
                loading="lazy"
              />
              <div
                className="absolute -bottom-5 left-5 md:left-8 rounded-2xl px-6 py-4 shadow-xl"
                style={{ background: c }}
              >
                <p className="text-2xl font-extrabold text-white">{siteConfig.statistics[1].value}</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">
                  {siteConfig.statistics[1].label}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Logistics That Grows With You"
                center={false}
              />
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {siteConfig.companyName} started with a simple observation: businesses
                  needed deliveries they could count on, without navigating complex pricing
                  or opaque tracking.
                </p>
                <p>
                  Today we serve e-commerce stores, retailers, clinics, and growing
                  businesses — moving parcels across the city and across borders with the
                  same care we gave our very first customer.
                </p>
                <p>
                  We stay deliberately lean: enough scale to be dependable, small enough
                  that every client has a name, not an account number.
                </p>
              </div>

              <div className="mt-9 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: `${c}14`, color: c }}>
                      <Target size={17} />
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Mission</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.mission}</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: `${siteConfig.accentColor}1f`, color: "#B7791F" }}>
                      <Eye size={17} />
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Vision</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.vision}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Three Pillars Behind Every Delivery"
            subtitle="The principles our team applies on every route, every day."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 100}>
                  <div className="h-full bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl mb-5"
                      style={{ background: siteConfig.secondaryColor, color: siteConfig.accentColor }}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {a.values.map((v) => (
              <span
                key={v}
                className="text-xs font-bold px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {siteConfig.statistics.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="rounded-3xl border border-slate-100 py-8 px-4 text-center">
                  <p className="text-3xl md:text-4xl font-extrabold" style={{ color: c }}>{s.value}</p>
                  <p className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="rounded-[2rem] px-6 py-12 md:px-14 text-center" style={{ background: siteConfig.lightColor }}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Let's build a delivery plan that fits your business</h2>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3.5">
              <Button to="/request-quote">Request a Quote <ArrowRight size={16} /></Button>
              <Button to="/services" variant="secondary">Browse Services</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}