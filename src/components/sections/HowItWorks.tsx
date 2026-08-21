import { Section } from '@/components/ui/Section';
import { how } from '@/content/site';

export function HowItWorks() {
  return (
    <Section id="how" eyebrow={how.eyebrow} title={how.title} lede={how.lede}>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {how.layers.map((layer, i) => (
          <div key={layer.name} className="card card-hover overflow-hidden">
            {/* Coloured top edge */}
            <div className="h-[3px] bg-accent" style={{ opacity: 0.35 + i * 0.25 }} />
            <div className="px-6 pb-8 pt-7">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-mono text-[12px] font-bold text-accent">
                  {i + 1}
                </span>
                <h3 className="font-display text-[17px] font-bold text-ink">{layer.name}</h3>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-2">{layer.description}</p>
              <ul className="mt-5 space-y-2">
                {layer.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[13px] text-ink-3">
                    <span className="tessera-tile mt-[6px] h-[6px] w-[6px] shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Architectural principle */}
      <div className="mt-12 rounded-card border border-accent/20 bg-accent/[0.04] px-6 py-6 sm:px-8">
        <p className="text-[14px] font-medium text-accent">{how.principle.label}</p>
        <p className="mt-2 max-w-prose text-[14.5px] leading-relaxed text-ink-2">
          {how.principle.body}
        </p>
      </div>
    </Section>
  );
}
