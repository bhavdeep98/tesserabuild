export const THEMES = ['dark', 'light'] as const;

export type Theme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = 'tessera-theme';

export const DEFAULT_THEME: Theme = 'dark';

export function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && (THEMES as readonly string[]).includes(value);
}

/**
 * Runs before first paint to prevent a flash of the wrong theme.
 *
 * Dark is the brand, not a preference: black and green is how Tessera presents
 * itself, so every first visit gets it regardless of OS setting. Light is a
 * deliberate opt-in and only an explicit stored choice switches to it.
 *
 * Kept as a hand-written string rather than a serialised function so the
 * emitted script stays minimal and readable in the document head.
 */
export const THEME_INIT_SCRIPT = `
(function(){
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    document.documentElement.setAttribute(
      'data-theme',
      stored === 'light' ? 'light' : '${DEFAULT_THEME}'
    );
  } catch (e) {
    document.documentElement.setAttribute('data-theme', '${DEFAULT_THEME}');
  }
})();
`.trim();
