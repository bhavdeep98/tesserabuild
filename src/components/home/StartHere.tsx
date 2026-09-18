import { contact } from '@/content/home';
import { brand } from '@/content/site';

export function StartHere() {
  return (
    <section id="contact" className="shell pb-24 text-center sm:pb-32" aria-labelledby="contact-title">
      <p className="text-eyebrow uppercase text-ink-2">{contact.eyebrow}</p>

      <h2 id="contact-title" className="mt-6 font-display text-display-md text-ink">
        {contact.title}
      </h2>

      <p className="mx-auto mt-5 max-w-[46ch] text-[14px] leading-relaxed text-ink-2">
        {contact.lede}
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
        <a
          href={`mailto:${brand.email}?subject=${encodeURIComponent(contact.primary.subject)}`}
          className="inline-flex items-center gap-7 rounded-tile bg-ink px-5 py-3.5 text-[12px] font-medium text-bg transition-colors duration-300 hover:bg-accent"
        >
          {contact.primary.label}
          <span aria-hidden="true">↗</span>
        </a>

        <a
          href={contact.secondary.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-4 border-b border-line/40 py-2 text-[12px] text-ink-2 transition-colors duration-300 hover:text-ink"
        >
          {contact.secondary.label}
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <a
        href={`mailto:${brand.email}`}
        className="mt-8 inline-block font-mono text-[12px] text-ink-3 transition-colors duration-300 hover:text-accent"
      >
        {brand.email}
      </a>
    </section>
  );
}
