import type { Metadata } from 'next';

import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import {
  adoption,
  close,
  economics,
  hero,
  meta,
  upside,
  winNow,
} from '@/content/for-builders';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

/** A stack of titled prose blocks — the recurring shape on this page. */
function BlockList({ items }: { items: readonly { title: string; body: string }[] }) {
  return (
    <div className="mt-14 space-y-px">
      {items.map((item) => (
        <div key={item.title} className="border-t border-line/[.12] py-9 first:border-t-0 first:pt-0">
          <h3 className="max-w-prose font-display text-display-sm leading-snug text-ink">
            {item.title}
          </h3>
          <p className="mt-4 max-w-prose text-[15.5px] leading-relaxed text-ink-2">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function ForBuildersPage() {
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} headline={hero.headline} lede={hero.lede} />

      <Section id="win-now" eyebrow={winNow.eyebrow} title={winNow.title} lede={winNow.lede}>
        <BlockList items={winNow.items} />
      </Section>

      {/* Cost of saying yes — the asks grid mirrors the homepage Contact offer. */}
      <Section id="adoption" eyebrow={adoption.eyebrow} title={adoption.title} lede={adoption.lede}>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {adoption.asks.map((ask) => (
            <div key={ask.label} className="card p-6">
              <p className="text-eyebrow uppercase text-ink-3">{ask.label}</p>
              <p className="mt-3 font-display text-[17px] font-bold leading-snug text-ink">
                {ask.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-prose text-[15px] leading-relaxed text-ink-3">{adoption.note}</p>
        <p className="mt-6 max-w-prose border-l-2 border-accent pl-5 text-[15px] font-semibold leading-snug text-accent">
          {adoption.proof}
        </p>
      </Section>

      <Section id="upside" eyebrow={upside.eyebrow} title={upside.title} lede={upside.lede}>
        <BlockList items={upside.points} />
      </Section>

      {/* Economics — the model, then the open question stated as open. */}
      <Section id="economics" eyebrow={economics.eyebrow} title={economics.title} lede={economics.lede}>
        <BlockList items={economics.model} />
        <div className="mt-10 card p-8">
          <p className="eyebrow-rule">{economics.revShare.label}</p>
          <p className="mt-6 max-w-prose text-[15.5px] leading-relaxed text-ink-2">
            {economics.revShare.body}
          </p>
        </div>
      </Section>

      <Section id="close" eyebrow={close.eyebrow} title={close.title}>
        <p className="mt-6 max-w-prose text-lede text-ink-2">{close.body}</p>
        <div className="mt-10">
          <Button href={close.cta.href}>{close.cta.label}</Button>
        </div>
      </Section>
    </>
  );
}
