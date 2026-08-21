import { Section } from '@/components/ui/Section';
import { proof } from '@/content/site';

export function Proof() {
  return (
    <Section id="proof" eyebrow={proof.eyebrow} title={proof.title} lede={proof.lede}>
      <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proof.metrics.map((metric) => (
          <div key={metric.label} className="card flex flex-col px-6 py-7">
            <dt className="order-2 mt-3 text-[14px] font-semibold text-ink">{metric.label}</dt>
            <dd className="order-1 tabular font-display text-[clamp(2rem,3.2vw,2.75rem)] font-extrabold leading-none tracking-tight text-accent">
              {metric.value}
            </dd>
            <dd className="order-3 mt-2 text-[13px] leading-snug text-ink-3">{metric.detail}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {proof.engineering.map((item) => (
          <article key={item.title} className="card card-hover px-6 py-7">
            <h3 className="font-display text-[16.5px] font-bold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{item.body}</p>
          </article>
        ))}
      </div>

      {/* Stating the limits is the point. A builder who catches an overclaim in
          a pilot never comes back; one who is told the boundary up front does. */}
      <div className="mt-12 rounded-card border border-line/[.14] bg-surface-2/60 px-6 py-7 sm:px-8">
        <p className="text-[13.5px] font-bold uppercase tracking-[0.1em] text-ink">
          {proof.candour.label}
        </p>
        <p className="mt-3 max-w-prose text-[14.5px] leading-relaxed text-ink-2">
          {proof.candour.body}
        </p>
      </div>
    </Section>
  );
}
