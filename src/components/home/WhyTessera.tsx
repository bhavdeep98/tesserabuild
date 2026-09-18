import { why } from '@/content/home';

/**
 * "Why Tessera", answered for the person who has to connect their systems to
 * us — not for someone deciding whether to fund us.
 *
 * The three reasons are the three objections a builder raises in the first
 * meeting, in the order they raise them: do you understand my business, what
 * will you touch, and what does adopting it cost me.
 */
export function WhyTessera() {
  return (
    <section id="why" className="shell pb-20 sm:pb-28" aria-labelledby="why-title">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow-rule">{why.eyebrow}</p>
          <h2 id="why-title" className="mt-6 max-w-[16ch] font-display text-display-md text-ink">
            {why.title}
          </h2>
        </div>
        <p className="max-w-[44ch] text-[14px] leading-relaxed text-ink-2">{why.lede}</p>
      </div>

      <ol className="mt-12 grid gap-px sm:grid-cols-3">
        {why.reasons.map((reason, index) => (
          <li
            key={reason.title}
            className="border-t border-line/20 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 sm:first:border-l-0 sm:first:pl-0"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display text-[23px] leading-tight text-ink">{reason.title}</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{reason.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {why.tenets.map((tenet) => (
          <div key={tenet.title} className="rounded-card bg-surface-2/70 px-7 py-7">
            <span className="text-eyebrow uppercase text-ink-3">{tenet.label}</span>
            <h3 className="mt-3 font-display text-[23px] text-ink">{tenet.title}</h3>
            <p className="mt-2.5 text-[13px] leading-relaxed text-ink-2">{tenet.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
