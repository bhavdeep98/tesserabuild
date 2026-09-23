import type { Metadata } from 'next';

import { story } from '@/content/home';

export const metadata: Metadata = {
  title: 'The life of a home',
  description: story.lede,
};

/**
 * Full-viewport story — a thin back bar above the frame so phones get the
 * whole scroll journey without fighting the marketing header.
 */
export default function StoryPage() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#f7f4ed]">
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-black/10 px-4 sm:h-12 sm:px-6">
        <a href="/#life" className="text-[12px] text-[#202c2b] transition-opacity hover:opacity-70">
          ← Back to Tessera
        </a>
        <span className="text-[10px] uppercase tracking-[0.14em] text-[#66706b]">Future experience</span>
      </div>
      <iframe
        src={story.src}
        title={story.iframeTitle}
        className="min-h-0 w-full flex-1 border-0"
        allow="fullscreen"
      />
    </div>
  );
}
