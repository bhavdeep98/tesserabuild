type SectionProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  /** Short standfirst under the section title. */
  lede?: React.ReactNode;
  children?: React.ReactNode;
  /** Draws the fading hairline above the section. Off for the first section. */
  divider?: boolean;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  divider = true,
  className,
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={className}>
      {divider ? (
        <div className="shell">
          <div className="rule" />
        </div>
      ) : null}

      <div className="shell py-24 sm:py-32">
        <div className="max-w-prose">
          <p className="eyebrow-rule">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-6 font-display text-display-md text-ink">
            {title}
          </h2>
          {lede ? <p className="mt-6 text-lede text-ink-2">{lede}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

/**
 * Placeholder body for a section that has not been painted yet. Deliberately
 * looks unfinished so an empty frame is never mistaken for finished work.
 */
export function SectionStub({ note }: { note: string }) {
  return (
    <div className="mt-14 rounded-card border border-dashed border-line/[.22] bg-surface/40 px-8 py-16 text-center">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-3">
        Frame reserved
      </p>
      <p className="mx-auto mt-3 max-w-md text-[14px] text-ink-3">{note}</p>
    </div>
  );
}
