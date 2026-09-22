import { useState } from "react";
import { ChevronDown } from "lucide-react";
import siteConfig from "../config/siteConfig";

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`border rounded-2xl transition-all duration-200 ${
              isOpen ? "border-blue-200 bg-white shadow-sm" : "border-slate-200 bg-white/60"
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-2xl"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900 text-sm md:text-base">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                style={{ color: siteConfig.primaryColor }}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 md:px-6 pb-5 text-sm md:text-base text-slate-500 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
