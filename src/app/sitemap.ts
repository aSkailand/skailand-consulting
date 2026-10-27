import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `${siteUrl}/${l}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((x) => [x, `${siteUrl}/${x}`])),
    },
  }));
}
