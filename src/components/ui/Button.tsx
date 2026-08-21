type Variant = 'solid' | 'outline' | 'ghost';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  'group inline-flex items-center justify-center gap-2 rounded-pill text-[14px] font-semibold leading-none transition-all duration-300 ease-out';

const variants: Record<Variant, string> = {
  // The one loud element on the page. Green fill, background-coloured text.
  solid:
    'bg-accent px-6 py-3.5 text-bg hover:bg-accent-bright hover:shadow-glow-lg',
  outline:
    'border border-line/[.18] px-6 py-3.5 text-ink hover:border-accent/50 hover:text-accent',
  ghost: 'px-1 py-1 text-ink-2 hover:text-accent',
};

export function Button({ href, children, variant = 'solid', className }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className ?? ''}`}>
      {children}
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
      </svg>
    </a>
  );
}
