import { useState } from "react";
import {
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  Navigation,
  Package,
  Weight,
  Zap,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Send,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import quoteService from "../services/quoteService";
import siteConfig from "../config/siteConfig";

const packageTypes = [
  "Envelope / Documents",
  "Small Parcel (under 2kg)",
  "Medium Box (2 - 10kg)",
  "Large Box (10 - 30kg)",
  "Pallet / Freight",
  "Other",
];

const deliveryTypes = ["Same-Day", "Express (Next Day)", "Standard (2-3 Days)", "Nationwide", "International"];

const fields = [
  { name: "fullName", label: "Full Name", type: "text", required: true, icon: User, placeholder: "Your full name", col: "sm:col-span-2" },
  { name: "company", label: "Company Name (optional)", type: "text", icon: Building2, placeholder: "Company" },
  { name: "email", label: "Email", type: "email", required: true, icon: Mail, placeholder: "you@company.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, icon: Phone, placeholder: "+233 ..." },
  { name: "pickup", label: "Pickup Location", type: "text", required: true, icon: MapPin, placeholder: "Pickup address / city" },
  { name: "delivery", label: "Delivery Location", type: "text", required: true, icon: Navigation, placeholder: "Delivery address / city" },
  { name: "packageType", label: "Package Type", type: "select", options: packageTypes, icon: Package },
  { name: "weight", label: "Package Weight", type: "number", icon: Weight, placeholder: "kg" },
  { name: "deliveryType", label: "Delivery Type", type: "select", options: deliveryTypes, icon: Zap },
  { name: "date", label: "Preferred Date", type: "date", icon: Calendar },
];

const initialForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  pickup: "",
  delivery: "",
  packageType: packageTypes[0],
  weight: "",
  deliveryType: deliveryTypes[0],
  date: "",
  notes: "",
};

export default function RequestQuotePage() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");
  const c = siteConfig.primaryColor;

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const reset = () => {
    setForm(initialForm);
    setSubmitted(false);
    setReference("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await quoteService.submit(form);
    setSubmitting(false);
    setReference(res.reference);
    setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-shadow";

  return (
    <>
      <PageHeader
        title="Request a Quote"
        subtitle="Tell us about your shipment and get a transparent, fixed price — usually within minutes."
      />

      <section className="py-14 md:py-20" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12 text-center animate-fade-in">
              <span
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-white"
                style={{ background: `linear-gradient(135deg, ${c}, ${c}cc)` }}
              >
                <CheckCircle2 size={38} />
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Quote Request Received!</h2>
              <p className="mt-3 text-slate-500 leading-relaxed max-w-lg mx-auto">
                Thanks, {form.fullName.split(" ")[0] || "friend"}. Our team will review your
                shipment and get back to you shortly.
              </p>
              {reference && (
                <p className="mt-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold" style={{ background: `${c}14`, color: c }}>
                  Reference: {reference}
                </p>
              )}
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
                <button
                  onClick={reset}
                  className="text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-slate-100 p-6 md:p-9 shadow-[0_20px_60px_-30px_rgba(7,17,31,0.25)]"
              aria-label="Quote request form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {fields.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.name} className={f.col || ""}>
                      <label htmlFor={`quote-${f.name}`} className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                        <Icon size={14} style={{ color: c }} />
                        {f.label}
                        {f.required && <span className="text-red-500" aria-hidden="true">*</span>}
                        {f.required && <span className="sr-only">(required)</span>}
                      </label>
                      {f.type === "select" ? (
                        <select
                          id={`quote-${f.name}`}
                          value={form[f.name]}
                          onChange={set(f.name)}
                          className={inputBase}
                        >
                          {f.options.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={`quote-${f.name}`}
                          type={f.type}
                          required={f.required}
                          value={form[f.name]}
                          onChange={set(f.name)}
                          placeholder={f.placeholder}
                          className={inputBase}
                        />
                      )}
                    </div>
                  );
                })}

                <div className="sm:col-span-2">
                  <label htmlFor="quote-notes" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                    <MessageSquare size={14} style={{ color: c }} />
                    Additional Notes
                  </label>
                  <textarea
                    id="quote-notes"
                    rows={4}
                    value={form.notes}
                    onChange={set("notes")}
                    placeholder="Fragile items, special instructions, delivery preferences…"
                    className={`${inputBase} resize-y`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${c}, ${c}cc)`, boxShadow: `0 12px 30px -12px ${c}` }}
              >
                {submitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    Submitting…
                  </>
                ) : (
                  <>
                    <Send size={16} /> Request Quote
                  </>
                )}
              </button>

              <p className="mt-4 text-xs text-slate-400">
                This is a demo form — no data is sent to a server. Connect it to your backend
                or CRM when you're ready.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}