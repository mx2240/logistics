import { useEffect } from "react";
import siteConfig from "../config/siteConfig";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${siteConfig.companyName}`
      : siteConfig.seo.defaultTitle;
  }, [title]);
}