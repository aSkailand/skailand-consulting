import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/content";
import { contact, hasLocale, locales, siteUrl } from "@/lib/i18n";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600", "800"],
  variable: "--font-bodoni-moda",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#F3EBDD" };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = dictionaries[lang].meta;
  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { nb: "/no", en: "/en", "x-default": "/no" },
    },
    openGraph: {
      type: "website",
      siteName: "Skailand Consulting",
      title: t.title,
      description: t.description,
      url: `/${lang}`,
      locale: t.ogLocale,
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Skailand Consulting",
    url: `${siteUrl}/${lang}`,
    description: dictionaries[lang].meta.description,
    email: contact.email,
    telephone: contact.phone,
    founder: { "@type": "Person", name: "Aslak Frafjord Skailand" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hundvåg",
      addressRegion: "Rogaland",
      addressCountry: "NO",
    },
    areaServed: ["Stavanger", "Rogaland", "Norway"],
    knowsLanguage: ["nb", "en"],
    sameAs: [contact.github, contact.proff],
  };

  return (
    <html
      lang={lang === "no" ? "nb" : "en"}
      className={`${bodoni.variable} ${dmSans.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
