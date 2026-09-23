'use client';

import { story } from '@/content/home';

/**
 * Entry to the lifetime story — opens /story/ as its own full-page experience.
 * No iframe on the homepage: nested scroll trapped people trying to leave the section.
 */
export function FutureStory() {
  return (
    <section id="life" className="pb-16 pt-6 sm:pb-24 sm:pt-8" aria-labelledby="life-title">
      <div className="shell">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <p className="eyebrow-rule">{story.eyebrow}</p>
            <h2 id="life-title" className="mt-6 max-w-[18ch] font-display text-display-md text-ink">
              {story.title}
            </h2>
            <p className="mt-5 max-w-[42ch] text-[14px] leading-relaxed text-ink-2">{story.lede}</p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={story.fullscreen.href}
                className="inline-flex items-center gap-3 rounded-tile bg-ink px-5 py-3.5 text-[12px] font-medium text-bg transition-colors duration-300 hover:bg-accent"
              >
                {story.fullscreen.label}
                <span aria-hidden="true" className="text-[16px] leading-none">
                  →
                </span>
              </a>
              <p className="text-[12px] text-ink-3">{story.hint}</p>
            </div>
          </div>

          <a
            href={story.fullscreen.href}
            className="group relative block overflow-hidden rounded-card border border-line/25 bg-[#f7f4ed] shadow-lift transition-colors duration-300 hover:border-accent/40"
            aria-label={story.fullscreen.label}
          >
            <div className="flex items-center justify-between border-b border-line/20 px-5 py-4 text-[9px] uppercase tracking-[0.1em] text-ink-2">
              <span>{story.preview.brand}</span>
              <span>{story.preview.tag}</span>
            </div>
            <div className="relative px-6 pb-8 pt-7 sm:px-8 sm:pb-10 sm:pt-9">
              <p className="text-eyebrow uppercase text-ink-3">{story.preview.eyebrow}</p>
              <h3 className="mt-3 max-w-[16ch] font-display text-[28px] leading-tight text-ink sm:text-[32px]">
                {story.preview.headline[0]}{' '}
                <em className="not-italic text-accent">{story.preview.headline[1]}</em>
              </h3>
              <p className="mt-4 max-w-[34ch] text-[13px] leading-relaxed text-ink-2">{story.preview.body}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[12px] text-ink transition-colors duration-300 group-hover:text-accent">
                {story.preview.cta}
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
