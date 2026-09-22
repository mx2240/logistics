import { Link } from "react-router-dom";
import { ArrowRight, CalendarClock, MapPinPlus, Radar, PackageCheck, Quote, Star, ChevronRight } from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ServicesGrid from "../components/ServicesGrid";
import TrackingPreviewCard from "../components/TrackingPreviewCard";
import ServiceIcon from "../components/ServiceIcon";
import FAQAccordion from "../components/FAQAccordion";
import siteConfig from "../config/siteConfig";

const steps = [
  { title: "Book a Delivery", desc: "Schedule a pickup online or by phone in under a minute.", icon: CalendarClock },
  { title: "We Pick It Up", desc: "Our rider collects your package from the specified location.", icon: MapPinPlus },
  { title: "Track Your Shipment", desc: "Follow live status updates at every stage of the journey.", icon: Radar },
  { title: "Receive Your Package", desc: "Your package arrives safely, on time, every time.", icon: PackageCheck },
];

export default function HomePage() {
  const c = siteConfig.primaryColor;
  const stats = siteConfig.statistics;
  const why = siteConfig.whyChooseUs;
  const faqs = siteConfig.faq.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(165deg, #ffffff 0%, ${siteConfig.lightColor} 55%, ${c}0d 100%)` }}>
        <div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{ background: `${c}40` }}
        />
        <div
          className="absolute top-1/3 -right-32 h-80 w-80 rounded-full blur-3xl opacity-20"
          style={{ background: `${siteConfig.accentColor}60` }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
                style={{ color: c, background: `${c}12` }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: c }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: c }} />
                </span>
                {siteConfig.tagline}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                {siteConfig.hero.title.split(" ").slice(0, 2).join(" ")}{" "}
                <span style={{ color: c }}>
                  {siteConfig.hero.title.split(" ").slice(2).join(" ")}
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">
                {siteConfig.hero.subtitle}
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
                <Button to="/tracking" className="w-full sm:w-auto">
                  {siteConfig.hero.ctaPrimary}
                  <ArrowRight size={16} />
                </Button>
                <Button to="/request-quote" variant="secondary" className="w-full sm:w-auto">
                  {siteConfig.hero.ctaSecondary}
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="absolute inset-0 -z-10">
                <img
                  src={siteConfig.images.hero}
                  alt="Logistics delivery van"
                  className="h-full w-full object-cover rounded-[2rem] opacity-20 blur-[1px]"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-[2rem]" style={{ background: `linear-gradient(140deg, transparent 30%, ${c}20 100%)` }} />
              </div>
              <TrackingPreviewCard tracking={siteConfig.trackingPreview} />
            </div>
          </div>

          {/* Trusted strip */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-slate-200/70">
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-5 opacity-60">
              {["E-commerce", "Retail", "Healthcare", "Manufacturing", "Fintech", "FMCG"].map((ind) => (
                <span key={ind} className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Logistics Solutions"
            subtitle="From same-day courier to international freight, we move what matters to your business."
          />
          <ServicesGrid items={siteConfig.services} limit={6} />
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all"
              style={{ color: c }}
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Four Simple Steps"
            subtitle="Getting your package where it needs to be has never been easier."
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 120}>
                  <div className="relative text-center">
                    <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-3xl rotate-45"
                        style={{ background: `${c}10` }}
                      />
                      <div
                        className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${c}, ${c}cc)` }}
                      >
                        <Icon size={26} />
                      </div>
                      <span
                        className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold text-white"
                        style={{ background: siteConfig.accentColor }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed px-2">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACKING PROMO */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ background: siteConfig.secondaryColor }}>
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full blur-3xl opacity-25" style={{ background: c }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full" style={{ color: siteConfig.accentColor, background: `${siteConfig.accentColor}1f` }}>
                Live Tracking
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                Know Exactly Where Your Package Is — In Real Time
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
                Every shipment gets a live timeline: pickup, distribution, out-for-delivery, and delivered.
                No guesswork, no support tickets — just clarity.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                <Button to="/tracking">
                  Track a Shipment <ArrowRight size={16} />
                </Button>
                <Button to="/services" variant="secondary" className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
                  Explore Services
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl bg-white/[0.06] border border-white/10 p-6 md:p-8 backdrop-blur-sm">
              <div className="space-y-5">
                {siteConfig.trackingPreview &&
                  [
                    { label: "Tracking Number", value: siteConfig.trackingPreview.trackingNumber, accent: false },
                    { label: "Status", value: siteConfig.trackingPreview.status, accent: true },
                    { label: "Current Location", value: siteConfig.trackingPreview.currentLocation, accent: false },
                    { label: "Estimated Delivery", value: siteConfig.trackingPreview.estimatedDelivery, accent: false },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0">
                      <span className="text-sm text-white/50">{row.label}</span>
                      <span
                        className={`text-sm font-bold text-right ${row.accent ? "px-3 py-1 rounded-full" : "text-white"}`}
                        style={row.accent ? { background: `${siteConfig.accentColor}22`, color: siteConfig.accentColor } : undefined}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="text-center rounded-3xl border border-slate-100 bg-slate-50/60 py-8 md:py-10 px-4 hover:border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: c }}>
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for Reliability. Designed for Trust."
            subtitle="Everything you expect from a modern logistics partner — and nothing you don't."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="group h-full bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ background: `${siteConfig.secondaryColor}`, color: siteConfig.accentColor }}
                  >
                    <ServiceIcon name={w.icon} size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{w.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Trusted by growing businesses across the region."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <blockquote className="h-full rounded-3xl border border-slate-100 bg-white p-7 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <Quote size={28} style={{ color: c }} className="mb-4 opacity-60" />
                  <p className="text-slate-700 leading-relaxed text-base md:text-lg">"{t.content}"</p>
                  <footer className="mt-6 flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold text-white"
                      style={{ background: `linear-gradient(135deg, ${c}, ${c}bb)` }}
                    >
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={14} fill={siteConfig.accentColor} color={siteConfig.accentColor} />
                      ))}
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-16 md:py-24" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services."
          />
          <FAQAccordion items={faqs} />
          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all"
              style={{ color: c }}
            >
              View All FAQs <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] px-6 py-12 md:px-14 md:py-16 text-center" style={{ background: `linear-gradient(135deg, ${c}, ${c}dd 55%, ${siteConfig.secondaryColor} 130%)` }}>
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl opacity-30" style={{ background: siteConfig.accentColor }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Ready to Move Your Business Forward?</h2>
              <p className="mt-4 text-white/75 max-w-2xl mx-auto md:text-lg">
                Get a custom quote in minutes — or track an existing shipment right now.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
                <Button to="/request-quote" variant="secondary" className="!bg-white !text-slate-900 hover:!bg-slate-50">
                  Request a Quote <ArrowRight size={16} />
                </Button>
                <Button to="/tracking" className="!bg-white/10 !text-white !border !border-white/30 shadow-none hover:!bg-white/20">
                  Track Shipment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}