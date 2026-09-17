import type { Metadata } from 'next';

import { NumberedReasons } from '@/components/sections/NumberedReasons';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { aiCandour, close, competition, hero, meta, reasons } from '@/content/why-we-win';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function WhyWeWinPage() {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} headline={hero.headline} lede={hero.lede} />

      <NumberedReasons
        id="reasons"
        eyebrow={reasons.eyebrow}
        title={reasons.title}
        lede={reasons.lede}
        items={reasons.items}
      />

      {/* The obvious rebuttals, answered as a plain Q&A. */}
      <Section id="competition" eyebrow={competition.eyebrow} title={competition.title} lede={competition.lede}>
        <div className="mt-14 space-y-px">
          {competition.items.map((item) => (
            <div
              key={item.q}
              className="border-t border-line/[.12] py-9 first:border-t-0 first:pt-0"
            >
              <h3 className="max-w-prose font-display text-[clamp(1.1rem,1.7vw,1.35rem)] font-bold leading-snug text-ink">
                {item.q}
              </h3>
              <p className="mt-4 max-w-prose text-[15.5px] leading-relaxed text-ink-2">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Honest framing of the AI layer — now vs. what the raise funds. */}
      <Section id="ai" eyebrow={aiCandour.eyebrow} title={aiCandour.title} lede={aiCandour.lede}>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="card p-8">
            <p className="eyebrow-rule">{aiCandour.now.label}</p>
            <p className="mt-6 text-[15.5px] leading-relaxed text-ink-2">{aiCandour.now.body}</p>
          </div>
          <div className="card p-8">
            <p className="eyebrow-rule">{aiCandour.next.label}</p>
            <p className="mt-6 text-[15.5px] leading-relaxed text-ink-2">{aiCandour.next.body}</p>
          </div>
        </div>
        <p className="mt-10 max-w-prose border-l-2 border-accent pl-5 font-display text-[16px] font-bold leading-snug text-ink">
          {aiCandour.pull}
        </p>
      </Section>

      {/* Closing one-liner + cross-link to the builder page. */}
      <Section id="close" eyebrow={close.eyebrow} title={close.title}>
        <p className="mt-6 max-w-prose text-lede text-ink-2">{close.body}</p>
        <div className="mt-10">
          <Button href={close.cta.href}>{close.cta.label}</Button>
        </div>
      </Section>
    </>
  );
}
