/**
 * Abstraction point for contact messages.
 * Swap with a real backend call later, e.g.:
 *   fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })
 */
const contactService = {
  async submit(_data) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { ok: true };
  },
};

export default contactService;