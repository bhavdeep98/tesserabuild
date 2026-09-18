import { builders } from '@/content/home';

/**
 * Where the product actually is today. Sits after the full lifecycle on
 * purpose: the reader should understand what the Passport becomes before being
 * told which chapter is buildable this quarter.
 *
 * Inverted to the deep green so the one shipped capability gets the page's
 * only full-bleed panel.
 */
export function BuilderPath() {
  return (
    <section id="builders" className="shell pb-20 sm:pb-28" aria-labelledby="builders-title">
      <div className="grid gap-10 rounded-card bg-accent-deep px-8 py-12 text-bg sm:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 text-eyebrow uppercase text-lime">
            <span className="block h-px w-7 bg-lime" aria-hidden="true" />
            {builders.eyebrow}
          </p>

          <h2 id="builders-title" className="mt-6 font-display text-display-md">
            {builders.title[0]}
            <br />
            {builders.title[1]}
          </h2>

          <p className="mt-5 max-w-[38ch] text-[13.5px] leading-relaxed text-bg/70">
            {builders.lede}
          </p>

          <a
            href={builders.cta.href}
            className="mt-8 inline-flex items-center gap-7 rounded-tile bg-lime px-5 py-3.5 text-[12px] font-medium text-accent-deep transition-opacity duration-300 hover:opacity-85"
          >
            {builders.cta.label}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ol className="space-y-px">
          {builders.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[34px_1fr] gap-4 border-t border-lime/20 py-6 first:border-t-0 first:pt-0"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-lime/60">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-[23px]">{step.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-bg/65">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
