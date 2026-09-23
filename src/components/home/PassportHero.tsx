import { hero } from '@/content/home';

/**
 * The hero states the product in one sentence, then shows it: a house and a
 * passport sharing one frame, because that pairing *is* the idea.
 * Chapters live in the walkthrough below — not as a second menu under the hero.
 */
export function PassportHero() {
  return (
    <section className="shell pb-4 pt-14 sm:pt-16" aria-labelledby="hero-title">
      <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="animate-rise-in">
          <p className="eyebrow-rule">{hero.eyebrow}</p>

          <h1 id="hero-title" className="mt-6 font-display text-display-xl text-ink">
            {hero.headline.lead}{' '}
            <em className="not-italic text-accent-bright">{hero.headline.emphasis}</em>
          </h1>

          <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-ink-2">{hero.lede}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={hero.primary.href}
              className="inline-flex items-center gap-7 rounded-tile bg-ink px-5 py-3.5 text-[12px] font-medium text-bg transition-colors duration-300 hover:bg-accent"
            >
              {hero.primary.label}
              <span aria-hidden="true" className="text-[18px] leading-none">
                ↓
              </span>
            </a>
            <a
              href={hero.secondary.href}
              className="inline-flex items-center gap-4 border-b border-line/40 py-2 text-[12px] text-ink-2 transition-colors duration-300 hover:text-ink"
            >
              {hero.secondary.label}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      className="min-w-0 overflow-hidden rounded-card border border-line/25 bg-surface-2/60 shadow-lift"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-line/20 px-6 py-5 text-[9px] uppercase tracking-[0.1em] text-ink-2">
        <span>{hero.visual.label}</span>
        <span className="text-[8px] text-ink-3">{hero.visual.note}</span>
      </div>

      <div className="relative h-[347px] overflow-hidden">
        {/* The render bleeds off the left edge so the frame reads as a window
            onto the home rather than a product shot centred in a box. */}
        <div className="house-render absolute -bottom-1.5 -left-1 w-[370px] max-[760px]:w-[285px] max-[760px]:-left-[51px] max-[760px]:bottom-0" />

        <div className="absolute right-8 top-8 w-[186px] rounded-[7px] border border-accent-deep bg-accent-deep px-6 py-6 text-bg shadow-lift max-[760px]:right-5 max-[760px]:top-5 max-[760px]:w-[169px]">
          <span className="text-eyebrow uppercase text-lime/70">{hero.visual.passport.brand}</span>
          <h2 className="my-6 font-display text-[27px] leading-[1.05] tracking-[-0.03em]">
            {hero.visual.passport.title}
          </h2>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-lime/40 text-[17px]">
            ⌂
          </span>
          <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.12em] text-lime/60">
            {hero.visual.passport.serial}
            <br />
            {hero.visual.passport.span}
          </p>
        </div>
      </div>

      <div className="mx-4 mb-4 flex items-center gap-3.5 rounded-[7px] border border-line/15 bg-surface px-4 py-3.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[5px] bg-surface-2 text-[13px] text-accent">
          ▤
        </span>
        <div className="min-w-0 flex-1">
          <strong className="block text-[12px] font-semibold text-ink">
            {hero.visual.record.title}
          </strong>
          <small className="text-[9px] text-ink-2">{hero.visual.record.detail}</small>
        </div>
      </div>
    </div>
  );
}
