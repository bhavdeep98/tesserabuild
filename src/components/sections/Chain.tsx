import { chain } from '@/content/for-builders';

/**
 * The five systems a home passes through, drawn as a chain.
 *
 * The joins between the links are the point: each system is competent at its
 * own leg, and the delay lives in the handoff. Runs left to right on a wide
 * screen and top to bottom on a phone, so the sequence survives either way.
 */
export function Chain() {
  return (
    <ol className="mt-12 flex flex-col lg:flex-row lg:items-stretch">
      {chain.links.map((link, index) => (
        <li
          key={link.name}
          className="flex flex-col lg:flex-1 lg:flex-row lg:items-center"
        >
          <div className="w-full rounded-card border border-line/15 bg-surface px-5 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-2 font-display text-[19px] leading-tight text-ink">{link.name}</h3>
            <p className="mt-1 text-[12px] text-ink-2">{link.system}</p>
          </div>

          {/* The join — where the information stops travelling. */}
          {index < chain.links.length - 1 ? (
            <span
              className="mx-auto h-6 w-px shrink-0 bg-line/25 lg:mx-0 lg:h-px lg:w-6"
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function ChainFootnote() {
  return (
    <p className="mt-10 max-w-prose border-l-2 border-accent pl-5 text-[15px] leading-relaxed text-ink-2">
      {chain.footnote}
    </p>
  );
}
