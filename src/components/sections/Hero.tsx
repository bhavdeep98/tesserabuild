import { Button } from '@/components/ui/Button';
import { cta, hero } from '@/content/site';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      {/* Light source and field, behind everything */}
      <div className="aura pointer-events-none absolute inset-x-0 -top-24 h-[720px]" aria-hidden="true" />
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shell relative pb-24 pt-16 sm:pt-24 lg:pb-32">
        <div className="animate-rise-in relative z-10 max-w-4xl">
          <p className="eyebrow-rule">{hero.eyebrow}</p>

          {/* Explicit lines, and the emphasis in solid accent. A clipped
              gradient across this line landed mid-word ("betw-een"), which read
              as a rendering fault rather than as emphasis. */}
          <h1 id="hero-title" className="mt-7 font-display text-display-xl">
            {hero.headline.lines.map((line) => (
              <span key={line} className="block text-ink">
                {line}
              </span>
            ))}
            <span className="mt-1.5 block text-accent">{hero.headline.emphasis}</span>
          </h1>

          <p className="mt-8 max-w-prose text-lede text-ink-2">{hero.lede}</p>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            <Button href={cta.secondary.href} variant="outline">
              {cta.secondary.label}
            </Button>
          </div>

          <ul className="mt-12 flex flex-col gap-3 border-t border-line/[.10] pt-8 sm:flex-row sm:gap-8">
            {hero.points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-[13.5px] text-ink-3">
                <span className="tessera-tile h-[7px] w-[7px] shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
