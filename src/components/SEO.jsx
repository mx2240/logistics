import { useEffect } from "react";
import siteConfig from "../config/siteConfig";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({ title, description }) {
  const pageTitle = title ? `${title} | ${siteConfig.companyName}` : siteConfig.seo.defaultTitle;
  const desc = description || siteConfig.seo.defaultDescription;

  useEffect(() => {
    document.title = pageTitle;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", window.location.href);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", siteConfig.companyName);
  }, [pageTitle, desc]);

  return null;
}