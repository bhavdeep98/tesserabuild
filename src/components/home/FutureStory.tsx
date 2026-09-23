'use client';

import { useEffect, useRef, useState } from 'react';

import { story } from '@/content/home';

/**
 * Immersive lifetime narrative from data-room/future-story.html.
 *
 * Kept in an iframe so its CSS/JS stay isolated from the marketing site.
 * The frame fills the viewport under the sticky header; scroll happens
 * inside the story. Phones also get a fullscreen route for easier browsing.
 */
export function FutureStory() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const onLoad = () => setReady(true);
    frame.addEventListener('load', onLoad);
    return () => frame.removeEventListener('load', onLoad);
  }, []);

  return (
    <section id="life" className="pb-16 pt-6 sm:pb-24 sm:pt-8" aria-labelledby="life-title">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow-rule">{story.eyebrow}</p>
            <h2 id="life-title" className="mt-6 max-w-[18ch] font-display text-display-md text-ink">
              {story.title}
            </h2>
          </div>
          <div className="flex max-w-[40ch] flex-col gap-4">
            <p className="text-[14px] leading-relaxed text-ink-2">{story.lede}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={story.fullscreen.href}
                className="inline-flex items-center gap-3 rounded-tile bg-ink px-4 py-3 text-[12px] font-medium text-bg transition-colors duration-300 hover:bg-accent sm:hidden"
              >
                {story.fullscreen.mobileLabel}
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={story.fullscreen.href}
                className="hidden items-center gap-3 border-b border-line/40 py-1 text-[12px] text-ink-2 transition-colors duration-300 hover:text-ink sm:inline-flex"
              >
                {story.fullscreen.label}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-8 w-full sm:mt-10">
        {/*
          Height accounts for the sticky site header (~77px) so the story
          frame can sit fully in view once you scroll to it.
        */}
        <div
          className={`relative isolate h-[calc(100dvh-77px)] min-h-[480px] w-full overflow-hidden overscroll-contain bg-[#f7f4ed] touch-pan-y sm:min-h-[640px] ${
            ready ? '' : 'animate-pulse'
          }`}
        >
          <iframe
            ref={frameRef}
            src={story.src}
            title={story.iframeTitle}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="same-origin"
            allow="fullscreen"
          />
        </div>

        <p className="shell mt-3 text-[11px] text-ink-3 sm:mt-4">{story.hint}</p>
      </div>
    </section>
  );
}
