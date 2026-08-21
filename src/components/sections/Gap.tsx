import { EvidenceCarousel } from '@/components/sections/EvidenceCarousel';
import { Section } from '@/components/ui/Section';
import { gap } from '@/content/site';

export function Gap() {
  return (
    <Section id="gap" eyebrow={gap.eyebrow} title={gap.title} lede={gap.lede}>
      {/* The evidence rotates rather than sitting in a grid: one claim at a
          time reads, and the count makes the depth of sourcing visible. */}
      <p className="mt-10 max-w-prose text-[14.5px] leading-relaxed text-ink-3">
        {gap.evidenceLede}
      </p>

      <EvidenceCarousel />

      {/* Explainer video — replaces the static handoff-chain diagram. */}
      <div className="mt-20">
        <video
          className="w-full rounded-card"
          controls
          preload="metadata"
          playsInline
          aria-label="How the handoff chain works — explainer video"
        >
          <source src="/videos/Tessera_Build_is_a_company_foc.mp4" type="video/mp4" />
          <p className="text-[14px] text-ink-3">
            Your browser does not support embedded video.{' '}
            <a
              href="/videos/Tessera_Build_is_a_company_foc.mp4"
              className="underline hover:text-accent"
            >
              Download the video
            </a>{' '}
            instead.
          </p>
        </video>
      </div>
    </Section>
  );
}
