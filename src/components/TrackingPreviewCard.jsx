import { MapPin, Clock, PackageCheck } from "lucide-react";
import siteConfig from "../config/siteConfig";

const statusStyles = {
  "In Transit": { bg: `${siteConfig.accentColor}22`, color: "#B7791F" },
  Delivered: { bg: "#E6F9F0", color: "#2F855A" },
  Pending: { bg: `${siteConfig.primaryColor}14`, color: siteConfig.primaryColor },
  "Out for Delivery": { bg: `${siteConfig.accentColor}22`, color: "#B7791F" },
};

export default function TrackingPreviewCard({ tracking }) {
  const t = tracking;
  const status = statusStyles[t.status] || statusStyles.Pending;

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(7,17,31,0.25)] border border-slate-100 p-6 md:p-7 animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Tracking Number
        </span>
        <span
          className="text-xs font-bold px-3 py-1.5 rounded-full"
          style={{ background: status.bg, color: status.color }}
        >
          {t.status}
        </span>
      </div>

      <p className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
        {t.trackingNumber}
      </p>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
            style={{ background: `${siteConfig.primaryColor}14`, color: siteConfig.primaryColor }}
          >
            <MapPin size={15} />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Current Location
            </p>
            <p className="text-sm font-semibold text-slate-800">{t.currentLocation}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 shrink-0">
            <Clock size={15} />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Estimated Delivery
            </p>
            <p className="text-sm font-semibold text-slate-800">{t.estimatedDelivery}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: siteConfig.primaryColor }}>
          <PackageCheck size={15} />
          <span>Last update: {t.lastUpdate || "Just now"}</span>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full w-3/4 rounded-full"
            style={{ background: `linear-gradient(90deg, ${siteConfig.primaryColor}, ${siteConfig.primaryColor}bb)` }}
          />
        </div>
      </div>
    </div>
  );
}