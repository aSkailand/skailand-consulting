export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "no";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://skailand.no"
).replace(/\/$/, "");

export const contact = {
  email: "aslakskailand@gmail.com",
  phone: "+47 401 70 768",
  phoneHref: "tel:+4740170768",
  github: "https://github.com/aSkailand",
  proff:
    "https://www.proff.no/selskap/skailand-consulting/hundv%C3%A5g/dataprogramvare-og-utvikling/IFGBMAA009O",
};
