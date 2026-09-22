# Logistics & Courier Website Template

A modern, premium, fully responsive logistics, courier, and delivery website template built with **React + Vite + Tailwind CSS + React Router + Lucide icons**.

Designed to be **reused for any courier/delivery/freight client** by editing a single configuration file — no need to rebuild the app.

## Features

- 8 pages: Home, Services, Track Shipment, Pricing, About, Contact, Request a Quote, FAQ
- Live-feeling mock shipment tracking with animated timeline
- Local quote + contact forms (backend-ready abstraction)
- Responsive from 320px to 1440px+ with no horizontal scroll
- Accessible markup: semantic HTML, labelled inputs, keyboard + focus states, ARIA where needed
- SEO metadata per page (titles, descriptions, Open Graph)
- Subtle, professional animations (IntersectionObserver reveal, timeline, hover states)
- Modular folder structure ready for a future Node/Express + MongoDB backend

## Quick Start

```bash
npm install
npm run dev
```

## Rebranding in One File

Open **`src/config/siteConfig.js`** and change:

- `companyName`, `tagline`, `logo`, `favicon`
- `primaryColor`, `secondaryColor`, `accentColor`, `lightColor`
- `phone`, `email`, `whatsapp`, `address`, `socialLinks`
- `hero.title`, `hero.subtitle`, CTA labels
- `about` (mission/vision/values) text
- `services`, `statistics`, `testimonials`, `faq`, `pricing`, `whyChooseUs`
- `operatingHours`
- `images` (hero / about / warehouse photos)

A real brand logo can be dropped in as `public/logo.svg` (a text+icon placeholder is used automatically otherwise).

## Where Things Live

```
src/
  config/siteConfig.js   <- ALL rebranding values
  data/shipments.js      <- mock tracking records (demo data)
  services/              <- API abstraction (swap for real backend later)
  components/            <- reusable UI
  pages/                 <- one file per route
  layouts/               <- Navbar, Footer, MainLayout
  hooks/                 <- reusable hooks
```

## Mock Data & Demo Mode

- **Tracking:** try `SMX-28473920`, `SMX-93018475` (in transit) or `SMX-11293846` (delivered) on the Tracking page.
- **Quote/Contact forms:** submit locally and show a success message — no backend required.
- All data is centralized so it can be swapped for a real API later.

## Available Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run oxlint

## Future Backend

The `src/services/` folder is the integration point for a future Node/Express + MongoDB backend: replace the mock implementations of `trackingService`, `quoteService`, and `contactService` with real API calls. The UI needs no changes.