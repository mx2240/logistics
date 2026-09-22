import { MessageCircle, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import FAQAccordion from "../components/FAQAccordion";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import siteConfig from "../config/siteConfig";

export default function FAQPage() {
  const c = siteConfig.primaryColor;

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Straight answers about tracking, delivery times, pricing, and what we can — and can't — ship."
      />

      <section className="py-14 md:py-20" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <FAQAccordion items={siteConfig.faq} />
          </Reveal>

          <div className="mt-12 rounded-3xl border border-slate-100 bg-white p-8 md:p-10 text-center shadow-sm">
            <span
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: `${c}14`, color: c }}
            >
              <MessageCircle size={22} />
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Still have questions?</h2>
            <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
              Our team is happy to help. Reach out any time during business hours.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3.5">
              <Button to="/contact">Contact Us <ArrowRight size={16} /></Button>
              <Button to="/request-quote" variant="secondary">Request a Quote</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}