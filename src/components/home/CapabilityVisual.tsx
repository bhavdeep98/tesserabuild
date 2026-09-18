'use client';

import { useInView } from '@/lib/useInView';

/**
 * The five chapter illustrations.
 *
 * Each shows the mechanism rather than decorating the claim above it: the
 * signal bars show *which* dependency blocks the close, the service rows show
 * *why* setup is one tap (the address and equipment are already known). A
 * generic icon grid would have said "we have features"; these say what the
 * feature does with the record.
 *
 * Only the first one moves. Predictability is the chapter a builder is
 * deciding about, and a sequence that plays itself explains a risk engine
 * faster than a still ever will — the rest stay static so the page has one
 * moving thing, not five.
 *
 * All of them are illustrative — no real property data appears on this site.
 */

/** The recurring "so what" line under a visual. */
function Insight({ mark, title, detail }: { mark: string; title: string; detail: string }) {
  return (
    <div className="mt-4 flex items-start gap-3.5 rounded-[7px] border border-line/20 bg-surface-2/60 px-4 py-3.5">
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] leading-none text-bg"
        aria-hidden="true"
      >
        {mark}
      </span>
      <div className="min-w-0">
        <strong className="block text-[12.5px] font-semibold text-ink">{title}</strong>
        <small className="text-[11px] text-ink-2">{detail}</small>
      </div>
    </div>
  );
}

/**
 * Predictability, played rather than drawn.
 *
 * The three domains fill in sequence, the loan stalls part-way and turns to
 * risk, and the finding arrives to explain it. That order is the product: the
 * point is not that one bar is red, it is that everything looked fine until it
 * didn't, and something told you why while there was still time.
 *
 * Starts when the reader reaches it, runs once, and leaves the finished state
 * on screen. See `.signal-track` in globals.css for the timing.
 */
function Predictability() {
  const { ref, inView } = useInView<HTMLDivElement>(0.45);

  // `delay` starts the bar, `reveal` lands its verdict as the bar settles, and
  // `turn` is the moment the loan stops looking fine. Each bar takes 1s, so a
  // reveal is its delay plus a second — except the loan, which is judged when
  // it turns rather than when it stopped moving.
  const rows = [
    {
      label: 'Construction',
      count: '12 / 12',
      state: 'Ready',
      fill: '100%',
      delay: '0.15s',
      reveal: '1.1s',
    },
    {
      label: 'Mortgage',
      count: '4 / 9',
      state: 'At risk',
      fill: '44%',
      delay: '0.5s',
      turn: '1.75s',
      reveal: '1.95s',
      risk: true,
    },
    {
      label: 'Title',
      count: '8 / 8',
      state: 'Ready',
      fill: '100%',
      delay: '0.85s',
      reveal: '1.8s',
    },
  ];

  return (
    <div ref={ref} data-play={inView}>
      <ul className="space-y-3">
        {rows.map((row) => (
          <li
            key={row.label}
            className="grid grid-cols-[84px_1fr_auto] items-center gap-3 sm:grid-cols-[84px_1fr_46px_58px]"
          >
            <span className="text-[11px] text-ink-2">{row.label}</span>

            <span
              className="signal-track"
              data-state={row.risk ? 'risk' : undefined}
              style={
                {
                  '--fill': row.fill,
                  '--delay': row.delay,
                  '--turn': row.turn,
                } as React.CSSProperties
              }
            />

            <span
              className="signal-reveal hidden text-right font-mono text-[9px] tabular text-ink-3 sm:block"
              style={{ '--delay': row.reveal } as React.CSSProperties}
            >
              {row.count}
            </span>

            <span
              className={`signal-reveal text-right font-mono text-[9px] uppercase tracking-[0.08em] ${
                row.risk ? 'text-rust' : 'text-ink-3'
              }`}
              style={{ '--delay': row.reveal } as React.CSSProperties}
            >
              {row.state}
            </span>
          </li>
        ))}
      </ul>

      <div className="signal-reveal" style={{ '--delay': '2.45s' } as React.CSSProperties}>
        <Insight
          mark="!"
          title="The house is ready. The loan isn’t."
          detail="Appraisal outstanding → close at risk"
        />
      </div>
    </div>
  );
}

function HomeRecord() {
  const items = [
    { label: '01 / Plans', value: 'Construction', glyph: '▤' },
    { label: '02 / Equipment', value: 'HVAC + systems', glyph: '⊙' },
    { label: '03 / Documents', value: 'Manuals + cover', glyph: '▥' },
  ];

  return (
    <div>
      <ul className="grid gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="rounded-[7px] border border-line/20 bg-surface px-4 py-4"
          >
            <span className="text-eyebrow uppercase text-ink-3">{item.label}</span>
            <span className="mt-3 block text-[22px] text-accent-bright" aria-hidden="true">
              {item.glyph}
            </span>
            <strong className="mt-2 block text-[12px] font-semibold text-ink">{item.value}</strong>
          </li>
        ))}
      </ul>

      <Insight
        mark="↗"
        title="Every detail has a source."
        detail="Installation record → equipment → owner guidance"
      />
    </div>
  );
}

function Activation() {
  const services = [
    { glyph: 'ϟ', name: 'Utilities', detail: 'Service address already linked', action: 'Set up' },
    { glyph: '⌁', name: 'Internet', detail: 'Connect with a provider', action: 'Connect' },
    {
      glyph: '✓',
      name: 'Warranty registration',
      detail: 'Installed equipment already known',
      action: 'Register',
    },
  ];

  return (
    <ul className="space-y-2">
      {services.map((service) => (
        <li
          key={service.name}
          className="flex items-center gap-3.5 rounded-[7px] border border-line/20 bg-surface px-4 py-3.5"
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[5px] bg-surface-2 text-[14px] text-accent"
            aria-hidden="true"
          >
            {service.glyph}
          </span>
          <div className="min-w-0 flex-1">
            <strong className="block text-[12.5px] font-semibold text-ink">{service.name}</strong>
            <small className="text-[11px] text-ink-2">{service.detail}</small>
          </div>
          <span className="shrink-0 rounded-[3px] border border-accent-bright px-2.5 py-1 text-eyebrow uppercase text-accent">
            {service.action}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Maintenance() {
  return (
    <div>
      <div className="rounded-[7px] border border-line/20 bg-surface px-5 py-5">
        <span className="text-eyebrow uppercase text-ink-3">Home 001 / HVAC</span>
        <h4 className="mt-2.5 font-display text-[21px] text-ink">Time to check the filter.</h4>
        <p className="mt-2 text-[12.5px] text-ink-2">
          Use the specification from your system’s manual.
        </p>
        <p className="mt-4 border-t border-line/15 pt-3 font-mono text-[9px] uppercase tracking-[0.08em] text-ink-3">
          Source / Installed equipment → manufacturer guidance
        </p>
      </div>

      <Insight
        mark="↻"
        title="Service completed. History updated."
        detail="The next recommendation starts with that history."
      />
    </div>
  );
}

function Ownership() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 rounded-[7px] border border-line/20 bg-surface px-4 py-5">
        <span className="flex flex-col items-center gap-2 text-[11px] text-ink-2">
          <i className="text-[18px] not-italic text-accent" aria-hidden="true">
            ⌂
          </i>
          First owner
        </span>

        <i className="h-px flex-1 bg-line/25" aria-hidden="true" />

        <span className="flex flex-col items-center gap-1 rounded-[5px] bg-accent-deep px-4 py-3 text-center text-bg">
          <b className="font-display text-[11px] font-normal leading-tight">
            Home
            <br />
            Passport
          </b>
          <small className="font-mono text-[8px] uppercase tracking-[0.1em] text-lime/70">
            Home 001
          </small>
        </span>

        <i className="h-px flex-1 bg-line/25" aria-hidden="true" />

        <span className="flex flex-col items-center gap-2 text-[11px] text-ink-2">
          <i className="text-[18px] not-italic text-accent" aria-hidden="true">
            ⌂
          </i>
          Next owner
        </span>
      </div>

      <Insight
        mark="✓"
        title="The next owner starts informed."
        detail="The home keeps its history through the handoff."
      />
    </div>
  );
}

const VISUALS = [Predictability, HomeRecord, Activation, Maintenance, Ownership];

export function CapabilityVisual({ index }: { index: number }) {
  const Visual = VISUALS[index] ?? VISUALS[0];
  return <Visual />;
}
