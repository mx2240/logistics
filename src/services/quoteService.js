/**
 * Abstraction point for requesting quotes.
 * Swap with a real backend call later, e.g.:
 *   fetch("/api/quotes", { method: "POST", body: JSON.stringify(data) })
 */
const quoteService = {
  async submit(_data) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { ok: true, reference: buildReference() };
  },
};

function buildReference() {
  return `QT-${Date.now().toString().slice(-8)}`;
}

export default quoteService;