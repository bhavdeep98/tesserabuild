import type { Config } from 'tailwindcss';

/**
 * Tessera brand system.
 *
 * Every colour is a CSS variable holding a space-separated RGB triplet, so
 * Tailwind's `/<alpha-value>` opacity modifiers keep working. Token values
 * live in src/app/globals.css. There is one theme — warm paper — so the
 * variables are set once on :root and never swapped.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces, darkest to lightest
        void: 'rgb(var(--c-void) / <alpha-value>)',
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--c-surface-2) / <alpha-value>)',

        // Type
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        'ink-2': 'rgb(var(--c-ink-2) / <alpha-value>)',
        'ink-3': 'rgb(var(--c-ink-3) / <alpha-value>)',

        // The green
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        'accent-bright': 'rgb(var(--c-accent-bright) / <alpha-value>)',
        'accent-deep': 'rgb(var(--c-accent-deep) / <alpha-value>)',

        // Lines
        line: 'rgb(var(--c-line) / <alpha-value>)',
        'line-strong': 'rgb(var(--c-line-strong) / <alpha-value>)',

        // Signal colours. Lime marks the capability in use, rust marks risk.
        lime: 'rgb(var(--c-lime) / <alpha-value>)',
        gold: 'rgb(var(--c-gold) / <alpha-value>)',
        rust: 'rgb(var(--c-rust) / <alpha-value>)',

        // Status — used sparingly, mirrors the product's risk bands
        healthy: 'rgb(var(--c-healthy) / <alpha-value>)',
        caution: 'rgb(var(--c-caution) / <alpha-value>)',
        critical: 'rgb(var(--c-critical) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // The Passport is a document, so the headlines are set in a serif.
        // A system stack rather than a webfont: zero bytes, and Georgia is
        // the face the data room and the approved homepage draft both use.
        display: ['Georgia', "'Times New Roman'", 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes — no media queries needed for the big type.
        // Weight 400 throughout: Georgia at 85px carries its own authority,
        // and bolding it turns a document voice into an advertising one.
        'display-xl': ['clamp(3.4rem, 6.2vw, 5.3rem)', { lineHeight: '1.04', letterSpacing: '-0.055em', fontWeight: '400' }],
        'display-lg': ['clamp(2.6rem, 5vw, 4rem)', { lineHeight: '1.04', letterSpacing: '-0.05em', fontWeight: '400' }],
        'display-md': ['clamp(2.45rem, 4.5vw, 3.8rem)', { lineHeight: '1.04', letterSpacing: '-0.055em', fontWeight: '400' }],
        'display-sm': ['clamp(1.3rem, 2.2vw, 1.44rem)', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '400' }],
        eyebrow: ['0.625rem', { lineHeight: '1.2', letterSpacing: '0.14em', fontWeight: '600' }],
        lede: ['clamp(1.0625rem, 1.5vw, 1.3125rem)', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
      },
      maxWidth: {
        shell: '1180px',
        prose: '68ch',
      },
      borderRadius: {
        tile: '3px',
        card: '14px',
        pill: '999px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--c-accent) / 0.28), 0 0 28px -6px rgb(var(--c-accent) / 0.36)',
        'glow-lg': '0 0 60px -12px rgb(var(--c-accent) / 0.45)',
        lift: 'var(--shadow-lift)',
      },
      backgroundImage: {
        'accent-sheen':
          'linear-gradient(135deg, rgb(var(--c-accent-bright)) 0%, rgb(var(--c-accent)) 55%, rgb(var(--c-accent-deep)) 100%)',
        grid: 'var(--bg-grid)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translate3d(0, 18px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        'tile-settle': {
          from: { opacity: '0', transform: 'translate3d(var(--tx, -14px), var(--ty, 10px), 0) scale(0.9)' },
          to: { opacity: '1', transform: 'none' },
        },
        hover: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        sweep: {
          from: { transform: 'translateX(-110%)' },
          to: { transform: 'translateX(110%)' },
        },
        // The track holds two identical copies of the row, so travelling exactly
        // half its width lands back on an identical frame — a seamless loop.
        marquee: {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        // Dwell timer for the evidence carousel. Driven by CSS rather than a
        // JS tick so pausing is a single animation-play-state flip.
        'progress-fill': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        // Slide entrance. Smaller travel than `rise-in` — the card stays put
        // and only its contents move, so a large shift reads as a glitch.
        'slide-in': {
          from: { opacity: '0', transform: 'translate3d(0, 10px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'tile-settle': 'tile-settle 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        hover: 'hover 6s ease-in-out infinite',
        sweep: 'sweep 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'slide-in': 'slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
