type LogomarkProps = {
  className?: string;
};

/**
 * The logomark is the brand's thesis in four shapes.
 *
 * A tessera is a single tile of a mosaic. Three tiles sit outlined and
 * incomplete — the builder's systems, each holding part of the picture. The
 * fourth arrives filled and lit: the piece that makes the mosaic readable.
 *
 * Authored as vector rather than shipped as the 588 KB glow-on-black PNG so it
 * stays crisp at every size.
 */
export function Logomark({ className }: LogomarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.6" opacity="0.5">
        <rect x="1.8" y="1.8" width="8.4" height="8.4" rx="1.4" />
        <rect x="13.8" y="1.8" width="8.4" height="8.4" rx="1.4" />
        <rect x="1.8" y="13.8" width="8.4" height="8.4" rx="1.4" />
      </g>
      <rect x="13.8" y="13.8" width="8.4" height="8.4" rx="1.4" className="fill-accent" />
    </svg>
  );
}

type LogoProps = {
  /** Renders the company suffix beneath the wordmark. Used in the footer. */
  withLegalName?: boolean;
  className?: string;
};

export function Logo({ withLegalName = false, className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <Logomark className="h-[1.1em] w-[1.1em] shrink-0 text-ink" />
      <span className="flex flex-col leading-none">
        {/* Set in type rather than shipped as the 706 KB wordmark PNG. That
            asset was drawn with the teal of the old dark brand and read as a
            foreign colour on paper; letterforms also stay crisp at any size. */}
        <span className="text-[18px] font-semibold tracking-[0.18em] text-ink">TESSERA</span>
        {withLegalName ? (
          <span className="mt-2 text-[10px] font-medium uppercase leading-none tracking-[0.18em] text-ink-3">
            Build Inc
          </span>
        ) : null}
      </span>
    </span>
  );
}
