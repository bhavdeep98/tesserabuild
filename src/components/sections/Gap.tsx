import { EvidenceCarousel } from '@/components/sections/EvidenceCarousel';
import { Section } from '@/components/ui/Section';
import { gap } from '@/content/site';

export function Gap() {
  return (
    <Section id="gap" eyebrow={gap.eyebrow} title={gap.title} lede={gap.lede}>
      {/* The evidence rotates rather than sitting in a grid: one claim at a
          time reads, and the count makes the depth of sourcing visible. */}
      <p className="mt-10 max-w-prose text-[14.5px] leading-relaxed text-ink-3">
        {gap.evidenceLede}
      </p>

      <EvidenceCarousel />

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
