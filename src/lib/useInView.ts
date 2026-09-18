'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * True once the element has been at least `amount` visible.
 *
 * Used to start the closing-signal animation when a reader arrives at it
 * rather than on page load — an animation that already finished before it was
 * scrolled to has told nobody anything.
 *
 * Re-arms when the element leaves the viewport, so scrolling away and back
 * replays it. Falls back to `true` where IntersectionObserver is missing, on
 * the principle that a static finished state is better than a blank one.
 */
export function useInView<T extends HTMLElement>(amount = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: amount },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [amount]);

  return { ref, inView };
}
