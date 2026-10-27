import type { Locale } from "./i18n";

export type Dictionary = {
  meta: { title: string; description: string; ogLocale: string };
  skip: string;
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
    label: string;
    switchTo: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    secondary: string;
    illustration: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    visit: string;
    items: {
      name: string;
      kind: string;
      text: string;
      href?: string;
      stack: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    phone: string;
    form: {
      name: string;
      email: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      note: string;
      sentTitle: string;
      sentText: string;
      error: string;
    };
  };
  footer: { rights: string; org: string; location: string };
};

const no: Dictionary = {
  meta: {
    title: "Skailand Consulting – nettsider og webutvikling i Rogaland",
    description:
      "Skailand Consulting lager raske, tilgjengelige og søkemotoroptimaliserte nettsider for små og mellomstore bedrifter. Frontend-ekspertise fra Hundvåg, Stavanger. Ta kontakt for en uforpliktende prat.",
    ogLocale: "nb_NO",
  },
  skip: "Hopp til hovedinnhold",
  nav: {
    services: "Tjenester",
    work: "Arbeid",
    about: "Om oss",
    contact: "Kontakt",
    label: "Hovednavigasjon",
    switchTo: "English",
  },
  hero: {
    eyebrow: "Nettsider · Utvikling · Digitalt håndverk",
    title: "Digitale opplevelser, bygget med omtanke.",
    text: "Skailand Consulting lager raske, tilgjengelige og godt synlige nettsider for bedrifter som vil bli funnet og få henvendelser. Skailand Consulting følger deg fra idé til lansering – og videre.",
    cta: "La oss snakke",
    secondary: "Se arbeidet vårt",
    illustration:
      "Gravert landskapsillustrasjon av norske fjell, fjord og granskog med tynne nettverkslinjer.",
  },
  services: {
    eyebrow: "Tjenester",
    title: "Alt du trenger for en nettside som fungerer.",
    intro:
      "Fra første skisse til drift. Løsninger bygget for å vare: lettvinte for besøkende, enkle for deg å vedlikeholde.",
    items: [
      {
        title: "Nettsider og nettbutikk",
        text: "Skreddersydde nettsider i Next.js og React, eller i et CMS du kan oppdatere selv. Responsive fra dag én.",
      },
      {
        title: "Ytelse og tilgjengelighet",
        text: "Raske sider som fungerer for alle, også med skjermleser eller dårlig nettforbindelse. Bra for brukerne – og for synligheten i søkemotorer.",
      },
      {
        title: "SEO og synlighet",
        text: "Teknisk SEO, strukturerte data, Google Business-profil og innhold som gjør at kundene finner deg lokalt.",
      },
      {
        title: "Rådgivning og frontend-hjelp",
        text: "Trenger teamet ditt en senior frontend-utvikler? Skailand Consulting tar oppdrag innen React, TypeScript og webarkitektur.",
      },
    ],
  },
  work: {
    eyebrow: "Utvalgt arbeid",
    title: "Nettsider levert av Skailand Consulting.",
    intro: "Et utvalg av prosjekter for kunder og egne initiativ.",
    visit: "Besøk nettstedet",
    items: [
      {
        name: "Rogaland Eiendomstakst",
        kind: "Kundeprosjekt",
        text: "Nettside for eiendomstakst i Rogaland, laget for å skape tillit og gjøre det enkelt å ta kontakt.",
        href: "https://rogaland-eiendomstakst.no",
        stack: "Nettside · SEO",
      },
      {
        name: "Frafjordelva",
        kind: "Kundeprosjekt",
        text: "Nettside med innholdsstyring i Sanity, slik at kunden enkelt kan oppdatere innholdet selv.",
        href: "https://frafjordelva.netlify.app",
        stack: "Next.js · Sanity",
      },
      {
        name: "Bjødna Tore",
        kind: "Nettside",
        text: "Visuell og enkel nettside bygget i Wix.",
        href: "https://www.bjodnatore.no",
        stack: "Wix",
      },
      {
        name: "Altibox TV",
        kind: "Bidragsyter",
        text: "Har bidratt til utviklingen av web-TV-løsningen tv.altibox.no.",
        href: "https://tv.altibox.no",
        stack: "React · TypeScript",
      },
    ],
  },
  process: {
    eyebrow: "Slik jobber vi",
    title: "Enkelt, tydelig og uten overraskelser.",
    steps: [
      {
        title: "Samtale",
        text: "Vi snakker om mål, målgruppe og budsjett. Uforpliktende og gratis.",
      },
      {
        title: "Design og bygg",
        text: "Du ser fremdriften underveis og kan gi tilbakemeldinger tidlig.",
      },
      {
        title: "Lansering",
        text: "Skailand Consulting tar hånd om domene, hosting og alt det tekniske.",
      },
      {
        title: "Videre støtte",
        text: "Vedlikehold og forbedringer etter behov. Du har én kontaktperson.",
      },
    ],
  },
  about: {
    eyebrow: "Om Skailand Consulting",
    title: "Aslak Frafjord Skailand",
    paragraphs: [
      "Skailand Consulting drives av Aslak Frafjord Skailand, senior frontend-utvikler fra Rogaland, med base på Hundvåg i Stavanger. Mange år med web-TV, dekodere og mobilapper har vist at gode løsninger er raske, enkle og tilgjengelige.",
      "Aslak er utdannet dataingeniør og bruker moderne AI-verktøy for å jobbe raskere – uten å gå på akkord med kvalitet og detaljer.",
    ],
    facts: [
      { label: "Fokus", value: "React, Next.js, TypeScript" },
      { label: "Utdanning", value: "Bachelor dataingeniør, UiA" },
      { label: "Base", value: "Hundvåg, Stavanger" },
      { label: "Språk", value: "Norsk og engelsk" },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Har du et prosjekt i tankene?",
    text: "Send en melding, så får du svar så fort som mulig. Første samtale er alltid uforpliktende.",
    email: "E-post",
    phone: "Telefon",
    form: {
      name: "Navn",
      email: "E-post",
      message: "Hva trenger du hjelp med?",
      messagePlaceholder: "Fortell kort om prosjektet ditt …",
      submit: "Send melding",
      sending: "Sender …",
      note: "Du får vanligvis svar innen én virkedag.",
      sentTitle: "Takk for meldingen!",
      sentText: "Vi tar kontakt så snart som mulig.",
      error: "Noe gikk galt. Send gjerne en e-post direkte til",
    },
  },
  footer: {
    rights: "Alle rettigheter reservert.",
    org: "Enkeltpersonforetak",
    location: "Hundvåg, Stavanger",
  },
};

const en: Dictionary = {
  meta: {
    title: "Skailand Consulting – web design and development in Norway",
    description:
      "Skailand Consulting builds fast, accessible and SEO-optimised websites for small and mid-sized businesses. Frontend expertise from Hundvåg, Stavanger. Get in touch for a no-obligation chat.",
    ogLocale: "en_GB",
  },
  skip: "Skip to main content",
  nav: {
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    label: "Main navigation",
    switchTo: "Norsk",
  },
  hero: {
    eyebrow: "Web design · Development · Digital craft",
    title: "Digital experiences, thoughtfully built.",
    text: "Skailand Consulting creates fast, accessible and highly visible websites for businesses that want to be found and win enquiries. Skailand Consulting takes you from idea to launch – and beyond.",
    cta: "Let's talk",
    secondary: "Explore our work",
    illustration:
      "Engraved landscape illustration of Norwegian mountains, a fjord and spruce forest with fine network lines.",
  },
  services: {
    eyebrow: "Services",
    title: "Everything you need for a website that works.",
    intro:
      "From first sketch to operations. Solutions built to last: effortless for visitors, easy for you to maintain.",
    items: [
      {
        title: "Websites and web shops",
        text: "Tailor-made websites in Next.js and React, or in a CMS you can update yourself. Responsive from day one.",
      },
      {
        title: "Performance and accessibility",
        text: "Fast pages that work for everyone, including screen-reader users and slow connections. Good for users – and for your visibility in search engines.",
      },
      {
        title: "SEO and visibility",
        text: "Technical SEO, structured data, Google Business profile and content that helps customers find you locally.",
      },
      {
        title: "Consulting and frontend help",
        text: "Does your team need a senior frontend developer? Skailand Consulting takes on assignments in React, TypeScript and web architecture.",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Websites delivered by Skailand Consulting.",
    intro: "A selection of client projects and in-house initiatives.",
    visit: "Visit website",
    items: [
      {
        name: "Rogaland Eiendomstakst",
        kind: "Client project",
        text: "Website for property valuation in Rogaland, built to create trust and make it easy to get in touch.",
        href: "https://rogaland-eiendomstakst.no",
        stack: "Website · SEO",
      },
      {
        name: "Frafjordelva",
        kind: "Client project",
        text: "Website with content managed in Sanity, so the client can easily update content on their own.",
        href: "https://frafjordelva.netlify.app",
        stack: "Next.js · Sanity",
      },
      {
        name: "Bjødna Tore",
        kind: "Website",
        text: "A visual, straightforward website built in Wix.",
        href: "https://www.bjodnatore.no",
        stack: "Wix",
      },
      {
        name: "Altibox TV",
        kind: "Contributor",
        text: "Contributed to the development of the web TV service tv.altibox.no.",
        href: "https://tv.altibox.no",
        stack: "React · TypeScript",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "Simple, clear and no surprises.",
    steps: [
      {
        title: "Conversation",
        text: "We discuss goals, audience and budget. No obligation, no cost.",
      },
      {
        title: "Design and build",
        text: "You follow progress along the way and can give feedback early.",
      },
      {
        title: "Launch",
        text: "Skailand Consulting handles domain, hosting and everything technical.",
      },
      {
        title: "Ongoing support",
        text: "Maintenance and improvements as needed. One point of contact.",
      },
    ],
  },
  about: {
    eyebrow: "About Skailand Consulting",
    title: "Aslak Frafjord Skailand",
    paragraphs: [
      "Skailand Consulting is run by Aslak Frafjord Skailand, a senior frontend developer from Rogaland, based in Hundvåg, Stavanger. Years of work on web TV, set-top boxes and mobile apps have shown that good solutions are fast, simple and accessible.",
      "Aslak is a trained computer engineer and uses modern AI tools to work faster – without compromising on quality and detail.",
    ],
    facts: [
      { label: "Focus", value: "React, Next.js, TypeScript" },
      { label: "Education", value: "BSc Computer Engineering, UiA" },
      { label: "Based in", value: "Hundvåg, Stavanger" },
      { label: "Languages", value: "Norwegian and English" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a project in mind?",
    text: "Send a message and you will hear back as soon as possible. The first conversation is always free of obligation.",
    email: "Email",
    phone: "Phone",
    form: {
      name: "Name",
      email: "Email",
      message: "What do you need help with?",
      messagePlaceholder: "Tell us briefly about your project …",
      submit: "Send message",
      sending: "Sending …",
      note: "You will usually get a reply within one business day.",
      sentTitle: "Thanks for your message!",
      sentText: "We will get back to you as soon as possible.",
      error: "Something went wrong. Please email us directly at",
    },
  },
  footer: {
    rights: "All rights reserved.",
    org: "Sole proprietorship",
    location: "Hundvåg, Stavanger",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { no, en };
