'use client';

import { useEffect, useState } from 'react';

import { DEFAULT_THEME, isTheme, THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

function readCurrentTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme');
  return isTheme(attr) ? attr : DEFAULT_THEME;
}

export function ThemeToggle() {
  // Start undefined so the first paint matches whatever the head script set,
  // rather than guessing and flipping the icon on hydration.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    setTheme(readCurrentTheme());
  }, []);

  function toggle() {
    const next: Theme = readCurrentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing or blocked storage — the theme still applies for this
      // page view, it just will not persist. Nothing to recover from.
    }
  }

  const isDark = theme !== 'light';
  const label = theme === undefined
    ? 'Switch colour theme'
    : `Switch to ${isDark ? 'light' : 'dark'} theme`;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-pill border border-line/[.14] text-ink-2 transition-colors duration-300 ease-out hover:border-accent/40 hover:text-accent"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden="true"
      >
        {isDark ? (
          // Moon — shown while dark is active, i.e. the state you are in.
          <path d="M20.3 14.6A8.5 8.5 0 1 1 9.4 3.7a6.8 6.8 0 0 0 10.9 10.9Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.4v2.1M12 19.5v2.1M4.2 4.2l1.5 1.5M18.3 18.3l1.5 1.5M2.4 12h2.1M19.5 12h2.1M4.2 19.8l1.5-1.5M18.3 5.7l1.5-1.5" />
          </>
        )}
      </svg>
    </button>
  );
}
