import { Section } from '@/components/ui/Section';
import { gap } from '@/content/site';

export function Gap() {
  return (
    <Section id="gap" eyebrow={gap.eyebrow} title={gap.title} lede={gap.lede}>
      {/* Sourced industry cost. Every figure carries its attribution — the
          credibility of this section depends entirely on that. */}
      <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gap.stats.map((stat) => (
          <div key={stat.label} className="card flex flex-col px-6 py-7">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="flex h-full flex-col">
              <p className="tabular font-display text-[clamp(1.75rem,2.6vw,2.25rem)] font-extrabold leading-none tracking-tight text-accent">
                {stat.value}
              </p>
              <p className="mt-3 flex-1 text-[13.5px] leading-snug text-ink-2">{stat.label}</p>
              <p className="mt-4 border-t border-line/[.08] pt-3 text-[11.5px] uppercase tracking-[0.1em] text-ink-3">
                {stat.source}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-20">
        <h3 className="font-display text-display-sm text-ink">The handoff chain</h3>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-2">{gap.chainLede}</p>

        <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {gap.chain.map((step, i) => (
            <li key={step.name} className="relative">
              <div className="card card-hover h-full px-5 py-5">
                <span className="font-mono text-[11px] font-bold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-[14px] font-semibold leading-snug text-ink">{step.name}</p>
                <p className="mt-1 text-[12.5px] text-ink-3">{step.system}</p>
              </div>

              {/* The gap between links, drawn. Desktop only — on stacked
                  layouts the visual metaphor stops reading. */}
              {i < gap.chain.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-full top-1/2 hidden w-3 -translate-y-1/2 lg:block"
                >
                  <span className="block h-px w-full bg-line/25" />
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-prose text-[14.5px] leading-relaxed text-ink-3">
          {gap.chainFootnote}
        </p>
      </div>
    </Section>
  );
}
