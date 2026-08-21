'use client';

import { useCallback, useEffect, useState } from 'react';

import { gap } from '@/content/site';

const items = gap.evidence;

/** How long each item holds before advancing. */
const DWELL_MS = 7000;

/** Accent tint per evidence category. Tint only — never the sole signal. */
const TINT: Record<string, { text: string; dot: string; chip: string }> = {
  cost: {
    text: 'text-critical',
    dot: 'bg-critical',
    chip: 'border-critical/30 bg-critical/[.08] text-critical',
  },
  earnings: {
    text: 'text-caution',
    dot: 'bg-caution',
    chip: 'border-caution/30 bg-caution/[.08] text-caution',
  },
  silos: {
    text: 'text-accent',
    dot: 'bg-accent',
    chip: 'border-accent/30 bg-accent/[.08] text-accent',
  },
};

const KIND_LABEL: Record<string, string> = {
  cost: 'Cost of delay',
  earnings: 'Public filings',
  silos: 'Root cause',
};

/**
 * Auto-advancing wall of sourced industry evidence.
 *
 * The point of the animation is emphasis: one claim at a time, held long enough
 * to read, so the volume of independent sources registers as it cycles.
 *
 * Accessibility notes:
 * - An explicit pause control is required for auto-advancing content
 *   (WCAG 2.1 SC 2.2.2). Hover-pause alone does not satisfy it.
 * - Starts paused when the OS asks for reduced motion.
 * - The live region is only chatty while paused; announcing every automatic
 *   advance would flood a screen reader with content the user did not ask for.
 */
export function EvidenceCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Honour the OS reduced-motion setting. The global CSS rule kills transitions
  // but cannot stop a JS timer, so the auto-advance has to opt out explicitly.
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (query.matches) setPlaying(false);
    };
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex(((next % items.length) + items.length) % items.length);
  }, []);

  const advancing = playing && !hovered;

  useEffect(() => {
    if (!advancing) return;
    const timer = window.setTimeout(() => goTo(index + 1), DWELL_MS);
    return () => window.clearTimeout(timer);
  }, [advancing, index, goTo]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  const item = items[index];
  const tint = TINT[item.kind] ?? TINT.cost;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Sourced industry evidence"
      className="mt-12"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card relative overflow-hidden">
        {/* Dwell timer. Keyed on index so the fill restarts each advance. */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-line/[.10]">
          <div
            key={index}
            aria-hidden="true"
            className={`h-full origin-left ${tint.dot} ${
              advancing ? 'animate-[progress-fill_7000ms_linear_forwards]' : 'scale-x-0'
            }`}
          />
        </div>

        <div
          aria-live={playing ? 'off' : 'polite'}
          aria-atomic="true"
          className="px-7 py-9 sm:px-10 sm:py-11"
        >
          {/* Keyed so the entrance animation replays on every change. */}
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}: ${item.source}`}
            className="animate-slide-in"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-pill border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${tint.chip}`}
              >
                <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${tint.dot}`} />
                {KIND_LABEL[item.kind] ?? 'Evidence'}
              </span>
              <span className="text-[12.5px] text-ink-3">
                {item.source}
                {item.date ? ` · ${item.date}` : ''}
              </span>
            </div>

            <div className="mt-7 grid gap-x-10 gap-y-5 md:grid-cols-[minmax(0,auto)_minmax(0,1fr)] md:items-start">
              {/* Quantitative items lead with the number. Qualitative ones have
                  no figure and let the claim itself carry the slide. */}
              {item.figure ? (
                <p
                  className={`tabular font-display text-[clamp(2.75rem,6vw,4.25rem)] font-extrabold leading-[0.95] tracking-tight ${tint.text}`}
                >
                  {item.figure}
                </p>
              ) : null}

              <div className={item.figure ? '' : 'md:col-span-2'}>
                <p
                  className={
                    item.figure
                      ? 'text-[15px] font-semibold leading-snug text-ink'
                      : `font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold leading-[1.25] tracking-tight ${tint.text}`
                  }
                >
                  {item.label}
                </p>
                <p
                  className={
                    item.figure
                      ? 'mt-3 max-w-prose text-[14.5px] leading-relaxed text-ink-2'
                      : 'mt-4 max-w-prose text-[15px] leading-relaxed text-ink-2'
                  }
                >
                  {item.text}
                </p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-block text-[12.5px] text-ink-3 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
                >
                  <span className="underline decoration-line/30 decoration-1 underline-offset-[3px] transition-colors group-hover:decoration-accent/50">
                    Read the source
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1.5 inline-block h-3 w-3 align-[-0.5px] opacity-60 transition-opacity group-hover:opacity-100"
                  >
                    <path d="M7 17 17 7M17 7H9m8 0v8" />
                  </svg>
                  <span className="sr-only">
                    {` — ${item.source} (opens in a new tab)`}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((entry, i) => {
            const active = i === index;
            return (
              <li key={entry.href}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={active ? 'true' : undefined}
                  aria-label={`Show evidence ${i + 1} of ${items.length}: ${entry.source}`}
                  className={`h-2 rounded-pill transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                    active
                      ? `w-7 ${TINT[entry.kind]?.dot ?? 'bg-accent'}`
                      : 'w-2 bg-line/30 hover:bg-line/60'
                  }`}
                />
              </li>
            );
          })}
        </ol>

        <div className="flex items-center gap-1">
          <span className="tabular mr-2 text-[12.5px] text-ink-3">
            {index + 1} / {items.length}
          </span>

          <ControlButton label="Previous evidence" onClick={() => goTo(index - 1)}>
            <path d="M15 18l-6-6 6-6" />
          </ControlButton>

          <ControlButton
            label={playing ? 'Pause automatic rotation' : 'Resume automatic rotation'}
            onClick={() => setPlaying((p) => !p)}
          >
            {playing ? <path d="M10 4v16M16 4v16" /> : <path d="M7 4l12 8-12 8V4z" />}
          </ControlButton>

          <ControlButton label="Next evidence" onClick={() => goTo(index + 1)}>
            <path d="M9 6l6 6-6 6" />
          </ControlButton>
        </div>
      </div>
    </div>
  );
}

function ControlButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-pill border border-line/[.14] text-ink-3 transition-colors duration-300 hover:border-accent/35 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        {children}
      </svg>
    </button>
  );
}
