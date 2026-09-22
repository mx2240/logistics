import { useState, useRef } from "react";
import {
  Search,
  CheckCircle2,
  Circle,
  Truck,
  User,
  Users,
  MapPin,
  Navigation,
  Package,
  Clock,
  RefreshCcw,
  AlertCircle,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import trackingService from "../services/trackingService";
import siteConfig from "../config/siteConfig";

const statusIcon = {
  completed: { Icon: CheckCircle2, style: { color: "#2F855A" } },
  current: { Icon: Truck, style: { color: siteConfig.primaryColor } },
  pending: { Icon: Circle, style: { color: "#94A3B8" } },
};

export default function TrackingPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shipment, setShipment] = useState(null);
  const [searched, setSearched] = useState(false);
  const resultsRef = useRef(null);

  const c = siteConfig.primaryColor;

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setShipment(null);
    const result = await trackingService.track(query);
    setLoading(false);
    setSearched(true);
    if (result) {
      setShipment(result);
    } else {
      setError("We couldn't find a shipment with that tracking number. Try SMX-28473920.");
    }
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  const fillDemo = (id) => {
    setQuery(id);
    setError("");
  };

  const details = shipment
    ? [
        { label: "Tracking ID", value: shipment.trackingId, icon: Package },
        { label: "Sender", value: shipment.sender, icon: User },
        { label: "Recipient", value: shipment.recipient, icon: Users },
        { label: "Pickup Location", value: shipment.pickupLocation, icon: MapPin },
        { label: "Destination", value: shipment.destination, icon: Navigation },
        { label: "Current Location", value: shipment.currentLocation, icon: Truck },
        { label: "Estimated Delivery", value: shipment.estimatedDelivery, icon: Clock },
        { label: "Package Type", value: `${shipment.packageType} · ${shipment.weight}`, icon: Package },
        { label: "Last Update", value: shipment.lastUpdate, icon: RefreshCcw },
      ]
    : [];

  return (
    <>
      <PageHeader
        title="Track Your Shipment"
        subtitle="Enter your tracking number to see a live timeline of your delivery — from pickup to doorstep."
      />

      <section className="py-14 md:py-20" style={{ background: siteConfig.lightColor }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleTrack}
            className="bg-white rounded-3xl shadow-[0_20px_60px_-30px_rgba(7,17,31,0.3)] border border-slate-100 p-6 md:p-8"
            aria-label="Shipment tracking form"
          >
            <label htmlFor="tracking-input" className="block text-sm font-bold text-slate-900 mb-1.5">
              Tracking Number
            </label>
            <p className="text-xs text-slate-400 mb-4">
              Example: <button type="button" className="font-semibold underline" style={{ color: c }} onClick={() => fillDemo("SMX-28473920")}>SMX-28473920</button>,{" "}
              <button type="button" className="font-semibold underline" style={{ color: c }} onClick={() => fillDemo("SMX-93018475")}>SMX-93018475</button>,{" "}
              <button type="button" className="font-semibold underline" style={{ color: c }} onClick={() => fillDemo("SMX-11293846")}>SMX-11293846</button>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="tracking-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. SMX-28473920"
                autoComplete="off"
                className="flex-1 min-w-0 rounded-xl border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": c }}
                aria-describedby="tracking-hint"
              />
              <Button type="submit" className="sm:w-auto" disabled={loading}>
                {loading ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    Tracking…
                  </>
                ) : (
                  <>
                    <Search size={16} /> Track Package
                  </>
                )}
              </Button>
            </div>
            <p id="tracking-hint" className="sr-only">
              Enter a tracking number to view shipment status
            </p>
          </form>

          <div ref={resultsRef} aria-live="polite">
            {loading && (
              <div className="mt-8 flex justify-center py-10">
                <span className="h-8 w-8 border-[3px] border-slate-200 rounded-full animate-spin" style={{ borderTopColor: c }} aria-label="Loading" />
              </div>
            )}

            {error && !loading && (
              <div className="mt-8 rounded-2xl bg-white border border-red-100 p-6 flex gap-3 items-start">
                <AlertCircle size={20} className="shrink-0 text-red-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Shipment not found</p>
                  <p className="text-sm text-slate-500 mt-1">{error}</p>
                </div>
              </div>
            )}

            {shipment && !loading && (
              <div className="mt-8 space-y-6 animate-fade-in">
                {/* Summary card */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                  <div
                    className="px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4"
                    style={{ background: siteConfig.secondaryColor }}
                  >
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/40">Tracking ID</p>
                      <p className="text-xl font-extrabold text-white">{shipment.trackingId}</p>
                    </div>
                    <span
                      className="text-xs font-bold px-4 py-2 rounded-full"
                      style={{ background: `${siteConfig.accentColor}22`, color: siteConfig.accentColor }}
                    >
                      {shipment.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100">
                    {details.map((d) => {
                      const Icon = d.icon;
                      return (
                        <div key={d.label} className="bg-white px-5 md:px-6 py-4">
                          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                            <Icon size={12} /> {d.label}
                          </p>
                          <p className="text-sm font-semibold text-slate-800 break-words">{d.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
                  <h2 className="text-lg font-bold text-slate-900 mb-7">Shipment Timeline</h2>
                  <ol className="relative" aria-label="Shipment progress timeline">
                    {shipment.timeline.map((t, i) => {
                      const { Icon, style } = statusIcon[t.status] || statusIcon.pending;
                      const isLast = i === shipment.timeline.length - 1;
                      return (
                        <li key={t.label} className="relative flex gap-4 pb-8 last:pb-0 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                          {!isLast && (
                            <span
                              className="absolute left-[15px] top-8 bottom-0 w-0.5"
                              style={{
                                background:
                                  shipment.timeline[i + 1]?.status === "pending"
                                    ? "#E2E8F0"
                                    : shipment.timeline[i + 1]?.status === "current"
                                    ? `${c}66`
                                    : "#D1FAE5",
                              }}
                              aria-hidden="true"
                            />
                          )}
                          <span
                            className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border-2 ${
                              t.status === "pending" ? "border-slate-200" : ""
                            }`}
                            style={
                              t.status === "completed"
                                ? { borderColor: "#10B981", background: "#ECFDF5" }
                                : t.status === "current"
                                ? { borderColor: c, background: `${c}14`, boxShadow: `0 0 0 6px ${c}14` }
                                : undefined
                            }
                          >
                            <Icon size={15} style={style} />
                          </span>
                          <div className="pt-1 flex-1 min-w-0">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p
                                className={`text-sm font-bold ${
                                  t.status === "pending" ? "text-slate-400" : "text-slate-900"
                                }`}
                              >
                                {t.label}
                              </p>
                              <span className="text-xs text-slate-400">{t.time}</span>
                            </div>
                            <p className="text-xs font-semibold mt-0.5" style={{ color: t.status === "current" ? c : t.status === "completed" ? "#10B981" : "#94A3B8" }}>
                              {t.status === "completed" ? "Completed" : t.status === "current" ? "In Progress" : "Pending"}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button to="/contact" variant="secondary">Need Help? Contact Support</Button>
                  <Button to="/request-quote" variant="ghost">Book Another Delivery</Button>
                </div>
              </div>
            )}

            {!searched && !loading && !error && (
              <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-white/50 p-8 text-center">
                <Truck size={28} className="mx-auto text-slate-300 mb-3" />
                <p className="text-sm font-semibold text-slate-500">
                  Enter a tracking number above to see the live shipment timeline.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}