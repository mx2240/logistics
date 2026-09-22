import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SEO from "./components/SEO";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TrackingPage from "./pages/TrackingPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RequestQuotePage from "./pages/RequestQuotePage";
import FAQPage from "./pages/FAQPage";

const meta = {
  "/": { title: null },
  "/services": { title: "Services" },
  "/tracking": { title: "Track Shipment" },
  "/pricing": { title: "Pricing" },
  "/about": { title: "About Us" },
  "/contact": { title: "Contact" },
  "/request-quote": { title: "Request a Quote" },
  "/faq": { title: "FAQ" },
};

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <SEO title={meta["/"].title} />
              <HomePage />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <SEO title={meta["/services"].title} />
              <ServicesPage />
            </>
          }
        />
        <Route
          path="/tracking"
          element={
            <>
              <SEO title={meta["/tracking"].title} />
              <TrackingPage />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <SEO title={meta["/pricing"].title} />
              <PricingPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <SEO title={meta["/about"].title} />
              <AboutPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <SEO title={meta["/contact"].title} />
              <ContactPage />
            </>
          }
        />
        <Route
          path="/request-quote"
          element={
            <>
              <SEO title={meta["/request-quote"].title} />
              <RequestQuotePage />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <SEO title={meta["/faq"].title} />
              <FAQPage />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}