import type { Metadata } from 'next';

import { Logo, Logomark } from '@/components/brand/Logo';
import { MosaicHouse } from '@/components/brand/MosaicHouse';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Design system',
  robots: { index: false, follow: false },
};

const swatches = [
  { token: 'bg', role: 'Page field', className: 'bg-bg' },
  { token: 'surface', role: 'Cards', className: 'bg-surface' },
  { token: 'surface-2', role: 'Raised / inset', className: 'bg-surface-2' },
  { token: 'accent', role: 'The green', className: 'bg-accent' },
  { token: 'accent-bright', role: 'Hover / peak', className: 'bg-accent-bright' },
  { token: 'accent-deep', role: 'Gradient tail', className: 'bg-accent-deep' },
];

const typeContrast = [
  { token: 'ink', role: 'Headings, body', dark: '17.4:1', light: '15.8:1', className: 'text-ink' },
  { token: 'ink-2', role: 'Lede, secondary', dark: '8.3:1', light: '7.5:1', className: 'text-ink-2' },
  { token: 'ink-3', role: 'Meta, captions', dark: '5.6:1', light: '4.8:1', className: 'text-ink-3' },
  { token: 'accent', role: 'Eyebrows, links', dark: '10.7:1', light: '7.0:1', className: 'text-accent' },
];

const typeScale = [
  { token: 'display-xl', usage: 'Hero headline only', className: 'font-display text-display-xl' },
  { token: 'display-lg', usage: 'Statement lines', className: 'font-display text-display-lg' },
  { token: 'display-md', usage: 'Section titles', className: 'font-display text-display-md' },
  { token: 'display-sm', usage: 'Card titles', className: 'font-display text-display-sm' },
  { token: 'lede', usage: 'Standfirst paragraphs', className: 'text-lede' },
  { token: 'base', usage: 'Body copy', className: 'text-[15px] leading-relaxed' },
  { token: 'eyebrow', usage: 'Section labels', className: 'text-eyebrow uppercase' },
];

const statuses = [
  { token: 'healthy', label: 'Healthy', className: 'bg-healthy' },
  { token: 'caution', label: 'At risk', className: 'bg-caution' },
  { token: 'critical', label: 'Critical', className: 'bg-critical' },
];

function Block({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line/[.10] py-14">
      <h2 className="font-display text-display-sm text-ink">{title}</h2>
      {note ? <p className="mt-2 max-w-prose text-[14px] text-ink-3">{note}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function StylePage() {
  return (
    <div className="shell py-20">
      <p className="eyebrow-rule">Internal reference</p>
      <h1 className="mt-6 font-display text-display-lg text-ink">Design system</h1>
      <p className="mt-5 max-w-prose text-lede text-ink-2">
        Toggle the theme in the header. Every pairing below is checked against WCAG 2.1
        AA. Dark is the primary expression; light is warm paper with a deep forest
        green, not a tint of the dark palette.
      </p>

      <Block title="Logo" note="Vector, not raster. Three outlined tiles and one filled: the piece that makes the mosaic readable.">
        <div className="flex flex-wrap items-end gap-12">
          <Logo className="text-[15px]" />
          <Logo className="text-[26px]" />
          <Logo withLegalName className="text-[15px]" />
          <div className="flex items-end gap-5">
            <Logomark className="h-6 w-6 text-ink" />
            <Logomark className="h-10 w-10 text-ink" />
            <Logomark className="h-16 w-16 text-ink" />
          </div>
        </div>
      </Block>

      <Block title="Surfaces">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {swatches.map((s) => (
            <div key={s.token}>
              <div className={`h-20 rounded-card border ${s.className}`} />
              <p className="mt-3 font-mono text-[12px] text-ink">{s.token}</p>
              <p className="text-[12px] text-ink-3">{s.role}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Type colour and contrast" note="Ratios are against the page field in each theme.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-[14px]">
            <thead>
              <tr className="border-b border-line/[.12]">
                <th scope="col" className="py-3 pr-6 font-mono text-[12px] font-medium uppercase tracking-wider text-ink-3">Token</th>
                <th scope="col" className="py-3 pr-6 font-mono text-[12px] font-medium uppercase tracking-wider text-ink-3">Role</th>
                <th scope="col" className="py-3 pr-6 font-mono text-[12px] font-medium uppercase tracking-wider text-ink-3">Dark</th>
                <th scope="col" className="py-3 font-mono text-[12px] font-medium uppercase tracking-wider text-ink-3">Light</th>
              </tr>
            </thead>
            <tbody>
              {typeContrast.map((t) => (
                <tr key={t.token} className="border-b border-line/[.07]">
                  <td className={`py-3.5 pr-6 font-mono text-[13px] ${t.className}`}>{t.token}</td>
                  <td className="py-3.5 pr-6 text-ink-2">{t.role}</td>
                  <td className="tabular py-3.5 pr-6 text-ink-2">{t.dark}</td>
                  <td className="tabular py-3.5 text-ink-2">{t.light}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block title="Type scale" note="Display sizes are fluid — they interpolate with the viewport rather than stepping at breakpoints.">
        <div className="space-y-8">
          {typeScale.map((t) => (
            <div key={t.token}>
              <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-3">
                {t.token} · {t.usage}
              </p>
              <p className={`mt-2 text-ink ${t.className}`}>
                Which homes miss their date
              </p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button href="#">Request a findings report</Button>
          <Button href="#" variant="outline">How it works</Button>
          <Button href="#" variant="ghost">Read the method</Button>
        </div>
      </Block>

      <Block title="Cards">
        <div className="grid gap-5 sm:grid-cols-3">
          {['Read', 'Reason', 'Act'].map((title, i) => (
            <article key={title} className="card card-hover p-7">
              <span className="font-mono text-[12px] text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-display text-display-sm text-ink">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                Hairline border, quiet surface, green edge on hover. One elevation
                only — the page gets its depth from type and space, not shadows.
              </p>
            </article>
          ))}
        </div>
      </Block>

      <Block title="Status" note="Mirrors the product's risk bands. Used sparingly, and never as the only signal — always paired with a label.">
        <div className="flex flex-wrap gap-4">
          {statuses.map((s) => (
            <span key={s.token} className="inline-flex items-center gap-2.5 rounded-pill border px-4 py-2 text-[13px] text-ink">
              <span className={`h-2 w-2 rounded-full ${s.className}`} aria-hidden="true" />
              {s.label}
            </span>
          ))}
        </div>
      </Block>

      <Block title="Rules and tiles">
        <div className="space-y-8">
          <div className="rule" />
          <div className="flex gap-1.5">
            {Array.from({ length: 18 }, (_, i) => (
              <span
                key={i}
                className="tessera-tile h-3 w-3"
                style={{ opacity: 0.15 + i * 0.047 }}
              />
            ))}
          </div>
        </div>
      </Block>

      <Block title="Mosaic" note="The hero mark. Deterministic layout, staggered settle, roofline drawn as the one continuous stroke.">
        <MosaicHouse className="h-auto w-full max-w-[520px] text-ink" />
      </Block>
    </div>
  );
}
