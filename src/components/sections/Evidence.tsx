import { leak } from '@/content/for-builders';

/**
 * The sourced case that the close is where money leaks.
 *
 * Every card links to its primary source, and the section says so above the
 * grid. That line is doing real work: a builder who suspects a vendor of
 * inventing numbers can check any of them in one click, and the ones that
 * matter most here are the two public builders' own filings.
 *
 * A static grid, not the rotating carousel this content used to live in — all
 * eleven items are readable at once, every source link is crawlable, and the
 * page ships no client JavaScript for it.
 */

const TINT: Record<string, string> = {
  cost: 'border-l-rust',
  earnings: 'border-l-accent',
  silos: 'border-l-accent-bright',
};

export function Evidence() {
  return (
    <>
      <p className="mt-10 max-w-prose text-[14px] text-ink-2">{leak.evidenceLede}</p>

      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {leak.evidence.map((item) => (
          <li
            key={item.label}
            className={`flex flex-col rounded-card border border-line/15 border-l-2 bg-surface px-6 py-6 ${
              TINT[item.kind] ?? 'border-l-line'
            }`}
          >
            {item.figure ? (
              <p className="tabular font-display text-[34px] leading-none text-ink">
                {item.figure}
              </p>
            ) : null}

            <h3
              className={`text-[13px] font-semibold leading-snug text-ink ${
                item.figure ? 'mt-3' : ''
              }`}
            >
              {item.label}
            </h3>

            <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-2">{item.text}</p>

            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-baseline gap-2 border-t border-line/15 pt-4 text-[11px] text-ink-2 transition-colors duration-300 hover:text-accent"
            >
              <span>
                {item.source}
                {item.date ? ` · ${item.date}` : ''}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
