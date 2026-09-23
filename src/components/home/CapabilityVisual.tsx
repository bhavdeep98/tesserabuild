/**
 * Passport chapter illustrations.
 *
 * Each one shows the mechanism rather than decorating the claim above it.
 * A generic icon grid would have said "we have features"; these say what the
 * chapter does with the record.
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

const VISUALS = [HomeRecord, Activation, Maintenance, Ownership];

export function CapabilityVisual({ index }: { index: number }) {
  const Visual = VISUALS[index] ?? VISUALS[0];
  return <Visual />;
}
