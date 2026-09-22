import { mockShipments } from "../data/shipments";

/**
 * Abstraction point for shipment tracking.
 * Swap this implementation with a real API call later, e.g.:
 *   fetch(`/api/shipments/${trackingId}`).then((r) => r.json())
 */
const trackingService = {
  async track(trackingId) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const normalized = (trackingId || "").trim().toUpperCase();
    return mockShipments[normalized] || null;
  },
};

export default trackingService;