import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, User, Building2, MessageSquare } from "lucide-react";
import PageHeader from "../components/PageHeader";
import contactService from "../services/contactService";
import siteConfig from "../config/siteConfig";

const inputBase =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-shadow";

const contactCards = [
  { icon: Phone, label: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: Mail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`,
  },
];

export default function ContactPage() {
  const c = siteConfig.primaryColor;
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await contactService.submit(form);
    setSubmitting(false);
    setSent(true);
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Questions, dispatch requests, or partnership inquiries — our team is a call or message away."
      />

      <section className="py-14 md:py-20" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="group bg-white rounded-3xl border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ background: `${c}14`, color: c }}
                  >
                    <Icon size={20} />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{card.label}</p>
                  <p className="mt-1 text-sm font-bold text-slate-800 break-all">{card.value}</p>
                </a>
              );
            })}
            <div className="bg-white rounded-3xl border border-slate-100 p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${siteConfig.accentColor}1f`, color: "#B7791F" }}>
                <Clock size={20} />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</p>
              <p className="mt-1 text-sm font-bold text-slate-800 leading-relaxed">{siteConfig.operatingHours}</p>
            </div>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-9 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900 mb-1">Send a Message</h2>
              <p className="text-sm text-slate-400 mb-7">We usually reply within one business day.</p>

              {sent ? (
                <div className="text-center py-10 animate-fade-in">
                  <span
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white"
                    style={{ background: `linear-gradient(135deg, ${c}, ${c}cc)` }}
                  >
                    <CheckCircle2 size={30} />
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">Message Sent</h3>
                  <p className="mt-2 text-sm text-slate-500">Thanks for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                        <User size={14} style={{ color: c }} /> Full Name <span className="text-red-500">*</span>
                      </label>
                      <input id="contact-name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputBase} />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                        <Building2 size={14} style={{ color: c }} /> Company
                      </label>
                      <input id="contact-company" value={form.company} onChange={set("company")} placeholder="Company (optional)" className={inputBase} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                      <Mail size={14} style={{ color: c }} /> Email <span className="text-red-500">*</span>
                    </label>
                    <input id="contact-email" type="email" required value={form.email} onChange={set("email")} placeholder="you@company.com" className={inputBase} />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                      <MessageSquare size={14} style={{ color: c }} /> Message <span className="text-red-500">*</span>
                    </label>
                    <textarea id="contact-message" rows={5} required value={form.message} onChange={set("message")} placeholder="How can we help?" className={`${inputBase} resize-y`} />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 cursor-pointer"
                    style={{ background: `linear-gradient(135deg, ${c}, ${c}cc)` }}
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Address + Map */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `${c}14`, color: c }}>
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">Head Office</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      {siteConfig.address}
                      <br />
                      {siteConfig.operatingHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-h-[320px] rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                <div
                  className="relative h-full min-h-[320px] flex items-center justify-center"
                  style={{ background: `linear-gradient(160deg, ${siteConfig.secondaryColor}, ${siteConfig.secondaryColor}e6)` }}
                  role="img"
                  aria-label="Map placeholder"
                >
                  <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "28px 28px" }} />
                  <div className="relative text-center px-6">
                    <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg" style={{ background: c }}>
                      <MapPin size={24} />
                    </span>
                    <p className="font-bold text-white">Our Service Area</p>
                    <p className="mt-1 text-sm text-white/60">Interactive map goes here</p>
                    <p className="mt-3 text-xs text-white/40">Replace with Google Maps embed, Leaflet, or MapLibre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}