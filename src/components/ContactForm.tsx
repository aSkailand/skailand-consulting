"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

type Props = {
  t: Dictionary["contact"]["form"];
  email: string;
  lang: string;
};

export function ContactForm({ t, email, lang }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form" role="status">
        <h3>{t.sentTitle}</h3>
        <p className="note">{t.sentText}</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="post"
      action="/__forms.html"
      className="contact-form"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="lang" value={lang} />
      <p className="honeypot" aria-hidden="true">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label htmlFor="name">{t.name}</label>
      <input id="name" name="name" type="text" required autoComplete="name" />
      <label htmlFor="email">{t.email}</label>
      <input id="email" name="email" type="email" required autoComplete="email" />
      <label htmlFor="message">{t.message}</label>
      <textarea
        id="message"
        name="message"
        rows={6}
        required
        placeholder={t.messagePlaceholder}
        aria-describedby="form-note"
      />
      <button type="submit" className="button button-light" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      <p id="form-note" className="note" aria-live="polite">
        {status === "error" ? (
          <>
            {t.error}{" "}
            <a className="text-link" href={`mailto:${email}`}>
              {email}
            </a>
          </>
        ) : (
          t.note
        )}
      </p>
    </form>
  );
}
