import { thread } from '@/content/home';

/**
 * The walkthrough shows the chain one page at a time; this states it once, in
 * three sentences, for the reader who scrolled past the tabs.
 */
export function Thread() {
  return (
    <section className="shell pb-20 sm:pb-28" aria-labelledby="thread-title">
      <div className="grid gap-10 rounded-card bg-surface-2/70 px-8 py-12 sm:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow-rule">{thread.eyebrow}</p>
          <h2 id="thread-title" className="mt-6 max-w-[13ch] font-display text-display-md text-ink">
            {thread.title}
          </h2>
          <p className="mt-5 max-w-[34ch] text-[13.5px] leading-relaxed text-ink-2">{thread.lede}</p>
        </div>

        <ol className="space-y-px">
          {thread.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[34px_1fr] gap-4 border-t border-line/20 py-6 first:border-t-0 first:pt-0 sm:grid-cols-[34px_minmax(0,1fr)_minmax(0,1fr)] sm:items-baseline"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-[23px] text-ink">{step.title}</h3>
              <p className="col-start-2 text-[12.5px] leading-relaxed text-ink-2 sm:col-start-3">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
