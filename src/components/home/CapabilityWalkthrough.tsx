'use client';

import { useCallback, useId, useRef, useState } from 'react';

import { capabilities, ledger, walkthrough, type Capability } from '@/content/home';
import { CapabilityVisual } from '@/components/home/CapabilityVisual';

/**
 * The product walkthrough: one Passport, turned page by page.
 *
 * Three things do the work of proving these are not five separate products:
 *
 *   1. The identity panel on the left never changes. The same home is present
 *      on every page.
 *   2. Its ledger rows move through Next → In use → Retained as you advance,
 *      so the record visibly accumulates rather than being swapped out.
 *   3. Every page ends by naming what the next page inherits.
 *
 * Remove any one of them and this is a tab strip. Together they are a spine.
 */
export function CapabilityWalkthrough() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  const tabId = (index: number) => `${baseId}-tab-${index}`;
  const panelId = `${baseId}-panel`;

  const select = useCallback((index: number, focus = false) => {
    setActive(index);
    if (focus) tabRefs.current[index]?.focus();
  }, []);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = capabilities.length - 1;
    const next = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];

    if (next === undefined) return;
    event.preventDefault();
    select(next, true);
  };

  const capability = capabilities[active];

  return (
    <section id="product" className="shell pb-20 pt-16 sm:pb-28 sm:pt-20" aria-labelledby="product-title">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow-rule">{walkthrough.eyebrow}</p>
          <h2 id="product-title" className="mt-6 max-w-[19ch] font-display text-display-md text-ink">
            {walkthrough.title}
          </h2>
        </div>
        <p className="max-w-[34ch] text-[14px] leading-relaxed text-ink-2">{walkthrough.lede}</p>
      </div>

      <div className="mt-12 overflow-hidden rounded-card bg-accent-deep p-3 shadow-lift sm:p-4">
        <div className="flex items-center justify-between px-2 py-2.5 text-[9px] uppercase tracking-[0.1em] text-lime/50">
          <span>{walkthrough.label}</span>
          <span className="hidden sm:inline">{walkthrough.note}</span>
        </div>

        {/* Tabs. Roving tabindex: one stop for the whole set, arrows inside. */}
        <div
          role="tablist"
          aria-label="Home Passport capabilities"
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {capabilities.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.name}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                id={tabId(index)}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`flex items-center gap-2.5 rounded-[6px] border px-3.5 py-3 text-left text-[12px] transition-colors duration-300 ${
                  isActive
                    ? 'border-lime bg-lime text-accent-deep'
                    : 'border-lime/25 text-lime/80 hover:border-lime/60 hover:text-lime'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
          <IdentityPanel active={active} />

          <div
            ref={panelRef}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId(active)}
            tabIndex={-1}
            className="flex flex-col rounded-[10px] bg-bg p-6 sm:p-9"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-eyebrow uppercase">
              <span className="text-ink-2">{capability.stage}</span>
              <RolloutStamp capability={capability} isEntry={active === 0} />
            </div>

            {/* Keyed so the chapter animates in on change rather than the
                browser silently swapping text under a static frame. */}
            <div key={active} className="animate-slide-in mt-6 flex flex-1 flex-col">
              <h3 className="font-display text-display-md text-ink">
                {capability.title[0]}
                <br />
                {capability.title[1]}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{capability.intro}</p>

              <p className="mt-6 inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">
                <span aria-hidden="true">⇲</span>
                {capability.source}
              </p>

              <div className="mt-6 flex-1">
                <CapabilityVisual index={active} />
              </div>

              <div className="mt-8 flex items-start gap-5 border-t border-line/20 pt-6">
                <span className="shrink-0 text-eyebrow uppercase leading-[1.5] text-accent">
                  Carries
                  <br />
                  forward →
                </span>
                <strong className="text-[13.5px] font-medium leading-relaxed text-ink">
                  {capability.carry}
                </strong>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between gap-4 border-t border-line/15 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                Home 001 / Page {String(active + 1).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={() => {
                  const next = (active + 1) % capabilities.length;
                  select(next);
                  panelRef.current?.scrollIntoView({ block: 'nearest' });
                }}
                className="text-[12px] text-accent transition-opacity duration-300 hover:opacity-70"
              >
                {active === capabilities.length - 1
                  ? 'Return to the beginning ↻'
                  : `Next: ${capabilities[active + 1].name} →`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Where the chapter sits in a rollout — not how finished it is.
 *
 * Four of the five capabilities run today, so a live/roadmap split would have
 * been both wrong and needlessly defensive on a page a customer reads. The
 * entry point is marked because a builder's first question is where to start,
 * not what is shipping.
 */
function RolloutStamp({ capability, isEntry }: { capability: Capability; isEntry: boolean }) {
  return (
    <span
      className={`rounded-[3px] border px-2.5 py-1 text-eyebrow uppercase ${
        isEntry ? 'border-accent-bright bg-lime/40 text-accent' : 'border-line/30 text-ink-2'
      }`}
    >
      {capability.rollout}
    </span>
  );
}

/** The constant. Same home, same record, on every page of the walkthrough. */
function IdentityPanel({ active }: { active: number }) {
  return (
    <div className="flex flex-col rounded-[10px] bg-surface p-5" aria-hidden="true">
      <div className="flex items-start justify-between gap-2 text-eyebrow uppercase text-ink-3">
        <span className="max-w-[60%] leading-[1.5]">{ledger.eyebrow}</span>
        <span className="shrink-0 whitespace-nowrap rounded-[3px] bg-surface-2 px-2 py-1 text-accent">
          {ledger.id}
        </span>
      </div>

      {/* The render carries its own cream ground; rounding the plate keeps it
          reading as an illustration rather than a stray rectangle. */}
      <div className="house-render mx-auto mt-4 w-[190px] max-w-[80%] rounded-[8px]" />

      <h3 className="font-display text-[23px] text-ink">{ledger.id}</h3>
      <p className="mt-1 text-[11px] text-ink-2">{ledger.sub}</p>

      <ul className="mt-5 space-y-px border-t border-line/15">
        {ledger.rows.map((row, index) => {
          const state = index < active ? 'Retained' : index === active ? 'In use' : 'Next';
          return (
            <li
              key={row}
              className={`flex items-center justify-between border-b border-line/15 py-2.5 text-[11px] transition-colors duration-500 ${
                index > active ? 'text-ink-3' : 'text-ink'
              }`}
            >
              <span>{row}</span>
              <b
                className={`font-mono text-[9px] font-normal uppercase tracking-[0.08em] ${
                  index === active
                    ? 'rounded-[3px] bg-lime px-1.5 py-0.5 text-accent-deep'
                    : 'text-ink-3'
                }`}
              >
                {state}
              </b>
            </li>
          );
        })}
      </ul>

      <p className="mt-4 text-[10px] leading-relaxed text-ink-3">{ledger.footer}</p>
    </div>
  );
}
