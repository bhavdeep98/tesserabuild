import { Section } from '@/components/ui/Section';
import { tenets } from '@/content/site';

/**
 * The two commitments, given real weight.
 *
 * Deliberately the least decorated section on the page — a large index numeral,
 * a claim set at display size, and prose. Tenets read as conviction when they
 * are stated plainly and as marketing when they are put in cards with icons.
 */
export function Tenets() {
  return (
    <Section id="tenets" eyebrow={tenets.eyebrow} title={tenets.title} lede={tenets.lede}>
      <div className="mt-16 space-y-px">
        {tenets.items.map((tenet) => (
          <article
            key={tenet.name}
            className="group relative border-t border-line/[.12] py-12 first:border-t-0 first:pt-0 sm:py-14"
          >
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-14">
              <div className="flex items-start gap-5 lg:w-[13rem] lg:flex-col lg:gap-4">
                <span
                  aria-hidden="true"
                  className="font-mono text-[13px] font-bold tabular text-accent"
                >
                  {tenet.index}
                </span>
                <h3 className="font-display text-display-sm text-ink lg:mt-1">{tenet.name}</h3>
              </div>

              <div className="max-w-prose">
                <p className="font-display text-[clamp(1.25rem,2.1vw,1.6rem)] font-bold leading-[1.28] tracking-tight text-ink">
                  {tenet.claim}
                </p>
                <p className="mt-6 text-[15.5px] leading-relaxed text-ink-2">{tenet.body}</p>

                <p className="mt-8 border-l-2 border-accent pl-5 text-[15px] font-semibold leading-snug text-accent">
                  {tenet.pull}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
