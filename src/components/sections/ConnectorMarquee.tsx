'use client';

import { kestrel } from '@/content/site';

const connectors = kestrel.connectors;

/**
 * Infinite-scroll carousel showing all supported system logos.
 * Duplicates the list so the CSS translate loop is seamless.
 * Pauses on hover so people can read a label if they want.
 */
export function ConnectorMarquee() {
  return (
    <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
        {/* Render list twice for seamless loop */}
        {[...connectors, ...connectors].map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-pill border border-line/[.14] bg-surface px-5 py-2.5"
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-md text-[11px] font-bold text-white ${c.tone}`}
            >
              {c.mark}
            </span>
            <span className="text-[13.5px] font-medium text-ink-2">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
