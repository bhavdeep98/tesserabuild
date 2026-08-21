import { ConnectorMarquee } from '@/components/sections/ConnectorMarquee';
import { KestrelConsole } from '@/components/sections/KestrelConsole';
import { KestrelMark } from '@/components/brand/KestrelMark';
import { Section } from '@/components/ui/Section';
import { kestrel } from '@/content/site';

export function Kestrel() {
  return (
    <Section
      id="kestrel"
      eyebrow={kestrel.eyebrow}
      title={
        <span className="inline-flex items-center gap-4">
          {kestrel.title}
          <KestrelMark className="h-[1.2em] w-[1.2em] text-accent" />
        </span>
      }
      lede={kestrel.lede}
    >

      <KestrelConsole />

      <div className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {kestrel.capabilities.map((cap) => (
          <div key={cap.title} className="border-t border-line/[.12] pt-5">
            <h3 className="font-display text-[16.5px] font-bold text-ink">{cap.title}</h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-ink-2">{cap.description}</p>
          </div>
        ))}
      </div>

      {/* Connector carousel — lets builders spot the systems they already run */}
      <div className="mt-20">
        <h3 className="font-display text-display-sm text-ink">
          Works with every system you already run
        </h3>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-2">
          {kestrel.connectorsLede}
        </p>

        <ConnectorMarquee />

        <div className="mt-12 rounded-card border border-accent/20 bg-accent/[0.04] px-6 py-6 sm:px-8">
          <p className="text-[13.5px] font-bold uppercase tracking-[0.1em] text-accent">
            {kestrel.proven.label}
          </p>
          <p className="mt-3 max-w-prose text-[14.5px] leading-relaxed text-ink-2">
            {kestrel.proven.body}
          </p>
        </div>
      </div>
    </Section>
  );
}
