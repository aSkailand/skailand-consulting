import Link from "next/link";
import { notFound } from "next/navigation";
import { Landscape, Ornament, Panorama } from "@/components/Landscape";
import { ContactForm } from "@/components/ContactForm";
import { Logo, Wordmark } from "@/components/Logo";
import { dictionaries } from "@/lib/content";
import { contact, hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = dictionaries[lang];
  const other = lang === "no" ? "en" : "no";
  const otherTag = other === "no" ? "nb" : "en";

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <Link href={`/${lang}`} className="logo-link">
            <Logo />
          </Link>
          <div className="header-actions">
            <Link href={`/${other}`} hrefLang={otherTag} lang={otherTag} className="lang-switch">
              {t.nav.switchTo}
            </Link>
            <a href="#contact" className="button button-primary button-small">
              {t.nav.contact}
            </a>
          </div>
          <nav aria-label={t.nav.label} className="nav">
            <a href="#services">{t.nav.services}</a>
            <a href="#work">{t.nav.work}</a>
            <a href="#about">{t.nav.about}</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <Landscape className="hero-art" role="img" aria-label={t.hero.illustration} />
            <h1 id="hero-title" className="hero-brand">
              <Wordmark size="xl" />
            </h1>
            <p className="eyebrow hero-eyebrow">{t.hero.eyebrow}</p>
            <p className="tagline">{t.hero.title}</p>
            <p className="lead">{t.hero.text}</p>
            <div className="actions">
              <a href="#contact" className="button button-primary">
                {t.hero.cta}
              </a>
              <a href="#work" className="button button-secondary">
                {t.hero.secondary}
              </a>
            </div>
          </div>
          <div className="container">
            <div className="panorama-frame" aria-hidden="true">
              <Panorama className="panorama" />
              <span className="panorama-dots" />
              <Ornament className="panorama-ornament" />
            </div>
          </div>
        </section>

        <section id="services" className="section container" aria-labelledby="services-title">
          <div className="section-head">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 id="services-title">{t.services.title}</h2>
            <p>{t.services.intro}</p>
          </div>
          <ol className="services">
            {t.services.items.map((item, i) => (
              <li key={item.title}>
                <span className="num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="section container" aria-labelledby="work-title">
          <div className="section-head">
            <p className="eyebrow">{t.work.eyebrow}</p>
            <h2 id="work-title">{t.work.title}</h2>
            <p>{t.work.intro}</p>
          </div>
          <ul className="work">
            {t.work.items.map((item) => (
              <li key={item.name}>
                <p className="eyebrow">
                  {item.kind} · {item.stack}
                </p>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                {item.href && (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-link">
                    {t.work.visit}
                    <span className="visually-hidden"> – {item.name}</span>
                    <span aria-hidden="true"> ↗</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <div className="container">
          <hr className="rule-ornament" />
        </div>

        <section className="section container" aria-labelledby="process-title">
          <div className="section-head">
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2 id="process-title">{t.process.title}</h2>
          </div>
          <ol className="steps">
            {t.process.steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="section container about" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 id="about-title">{t.about.title}</h2>
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="facts">
            {t.about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="section dark" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 id="contact-title">{t.contact.title}</h2>
              <p>{t.contact.text}</p>
              <ul className="contact-list">
                <li>
                  <span>{t.contact.email}</span>
                  <a className="text-link" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </li>
                <li>
                  <span>{t.contact.phone}</span>
                  <a className="text-link" href={contact.phoneHref}>
                    {contact.phone}
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm t={t.contact.form} email={contact.email} lang={lang} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © Skailand Consulting · {t.footer.org} · {t.footer.location}. {t.footer.rights}
          </p>
          <p>
            <a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub<span aria-hidden="true"> ↗</span>
            </a>{" "}
            ·{" "}
            <a className="text-link" href={contact.proff} target="_blank" rel="noopener noreferrer">
              Proff<span aria-hidden="true"> ↗</span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
