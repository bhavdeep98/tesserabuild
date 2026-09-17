/**
 * The numbered-argument list, lifted from the visual language of the homepage
 * Tenets section: a mono index numeral, a claim at display size, prose, and a
 * green-edged pull quote. Reused wherever a page makes a small number of
 * weighty points that each deserve room.
 */

import { Section } from '@/components/ui/Section';

type Reason = {
  index: string;
  name: string;
  claim: string;
  body: string;
  pull: string;
};

type NumberedReasonsProps = {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  items: readonly Reason[];
};

export function NumberedReasons({ id, eyebrow, title, lede, items }: NumberedReasonsProps) {
  return (
    <Section id={id} eyebrow={eyebrow} title={title} lede={lede}>
      <div className="mt-16 space-y-px">
        {items.map((item) => (
          <article
            key={item.index}
            className="group relative border-t border-line/[.12] py-12 first:border-t-0 first:pt-0 sm:py-14"
          >
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-14">
              <div className="flex items-start gap-5 lg:w-[13rem] lg:flex-col lg:gap-4">
                <span
                  aria-hidden="true"
                  className="font-mono text-[13px] font-bold tabular text-accent"
                >
                  {item.index}
                </span>
                <h3 className="font-display text-display-sm text-ink lg:mt-1">{item.name}</h3>
              </div>

              <div className="max-w-prose">
                <p className="font-display text-[clamp(1.25rem,2.1vw,1.6rem)] font-bold leading-[1.28] tracking-tight text-ink">
                  {item.claim}
                </p>
                <p className="mt-6 text-[15.5px] leading-relaxed text-ink-2">{item.body}</p>
                <p className="mt-8 border-l-2 border-accent pl-5 text-[15px] font-semibold leading-snug text-accent">
                  {item.pull}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
