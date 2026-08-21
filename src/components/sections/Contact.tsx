'use client';

import { useState } from 'react';

import { Section } from '@/components/ui/Section';
import { brand, contact } from '@/content/site';

/**
 * Netlify Forms, submitted over fetch.
 *
 * The markup carries `data-netlify` and a hidden `form-name`, which is how
 * Netlify detects the form in the exported HTML at deploy time — no backend and
 * no API route, which a static export could not serve anyway. Submitting over
 * fetch rather than a native POST keeps the reader on the page.
 *
 * If the POST fails for any reason the reader is given a mailto fallback rather
 * than a dead end, because a lost lead here is the most expensive bug on the
 * site. NOTE: this depends on Netlify hosting. On any other host, point
 * ENDPOINT at a form backend or the submission will 404.
 */

const FORM_NAME = 'findings-report';
const ENDPOINT = '/';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your name',
    autoComplete: 'name',
    required: true,
  },
  {
    id: 'email',
    label: 'Work email',
    type: 'email',
    placeholder: 'you@builder.com',
    autoComplete: 'email',
    required: true,
  },
  {
    id: 'company',
    label: 'Company',
    type: 'text',
    placeholder: 'Builder Corp',
    autoComplete: 'organization',
    required: true,
  },
  {
    id: 'closings',
    label: 'Approximate closings per year',
    type: 'text',
    placeholder: '800',
    autoComplete: 'off',
    required: false,
  },
] as const;

const inputClass =
  'mt-1.5 w-full rounded-card border border-line/[.15] bg-bg px-4 py-3 text-[14px] text-ink transition-colors duration-200 placeholder:text-ink-3 focus:border-accent/60 focus:outline-none';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const body = new URLSearchParams(
        // FormData entries are string | File; this form has no file inputs, so
        // coercing to string is safe and keeps URLSearchParams happy.
        Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)]),
      );

      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`Submission failed: ${response.status}`);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section id="contact" eyebrow={contact.eyebrow} title={contact.title} lede={contact.lede}>
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h3 className="font-display text-display-sm text-ink">{contact.offer.headline}</h3>

          <ul className="mt-7 space-y-3.5">
            {contact.offer.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-2">
                <span className="tessera-tile mt-[8px] h-[6px] w-[6px] shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-card border border-line/[.12] sm:grid-cols-3">
            {contact.offer.asks.map((ask) => (
              <div key={ask.label} className="bg-surface px-5 py-5">
                <dt className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-3">
                  {ask.label}
                </dt>
                <dd className="mt-2 text-[14px] font-semibold leading-snug text-ink">{ask.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-[13.5px] leading-relaxed text-ink-3">{contact.offer.footnote}</p>
        </div>

        <div className="card px-6 py-8 sm:px-8">
          {status === 'sent' ? (
            <div
              className="flex flex-col items-center justify-center py-14 text-center"
              role="status"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="mt-5 font-display text-[19px] font-bold text-ink">
                Received. We will be in touch.
              </p>
              <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-ink-2">
                {contact.form.note}
              </p>
            </div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              action={ENDPOINT}
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Required by Netlify to route the submission. */}
              <input type="hidden" name="form-name" value={FORM_NAME} />

              {/* Honeypot: hidden from people, tempting to bots. */}
              <p className="hidden" aria-hidden="true">
                <label>
                  Do not fill this in
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              {fields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={`contact-${field.id}`} className="block text-[13px] font-medium text-ink-2">
                    {field.label}
                    {field.required ? null : (
                      <span className="ml-1.5 text-ink-3">(optional)</span>
                    )}
                  </label>
                  <input
                    id={`contact-${field.id}`}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    className={inputClass}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-systems" className="block text-[13px] font-medium text-ink-2">
                  Systems you run <span className="ml-1.5 text-ink-3">(optional)</span>
                </label>
                <textarea
                  id="contact-systems"
                  name="systems"
                  rows={3}
                  placeholder="Salesforce, BuildPro, Encompass…"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3.5 text-[14px] font-semibold text-bg transition-all duration-300 ease-out hover:bg-accent-bright hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Request findings report'}
                {status === 'sending' ? null : (
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                  </svg>
                )}
              </button>

              {/* Politely announced, and never a dead end. */}
              <p
                aria-live="polite"
                className={`text-[13px] leading-relaxed ${
                  status === 'error' ? 'text-critical' : 'sr-only'
                }`}
              >
                {status === 'error' ? (
                  <>
                    That did not go through. Please email us directly at{' '}
                    <a href={`mailto:${brand.email}`} className="font-semibold underline">
                      {brand.email}
                    </a>
                    .
                  </>
                ) : (
                  ''
                )}
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
