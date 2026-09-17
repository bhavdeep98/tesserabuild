/**
 * Shared hero for the standalone argument pages (/why-we-win, /for-builders).
 *
 * Mirrors the homepage Hero's shape — eyebrow, a headline authored as explicit
 * lines with an accent emphasis line, then a lede — without pulling in the
 * homepage's animated mosaic. These pages are read, not scrolled past.
 */

type PageHeroProps = {
  eyebrow: string;
  headline: { lines: readonly string[]; emphasis: string };
  lede: string;
};

export function PageHero({ eyebrow, headline, lede }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aura" aria-hidden="true" />
      <div className="shell relative py-20 sm:py-28">
        <p className="eyebrow-rule">{eyebrow}</p>
        <h1 className="mt-7 max-w-4xl font-display text-display-lg text-ink">
          {headline.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="block text-accent">{headline.emphasis}</span>
        </h1>
        <p className="mt-8 max-w-prose text-lede text-ink-2">{lede}</p>
      </div>
    </section>
  );
}
