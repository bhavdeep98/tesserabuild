type KestrelMarkProps = {
  className?: string;
};

/**
 * Kestrel product mark — a rounded square with the kestrel's head profile
 * carved in negative space. The hooked beak and sharp eye suggest the bird
 * without being illustrative.
 *
 * Uses currentColor so it inherits whatever fill context it's placed in
 * (accent on dark, forest green on light).
 */
export function KestrelMark({ className }: KestrelMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <mask id="kestrel-profile">
          <rect width="64" height="64" fill="white" />
          <path
            fill="black"
            d="M 26 15 C 22 16, 19 19, 18 23 C 17 27, 18 31, 20 34 C 22 37, 25 39, 29 40 C 32 41, 35 41, 37 42 C 39 43, 40 44, 40 46 L 38 45 C 36 44, 33 43, 30 43 C 26 43, 22 41, 19 38 C 16 34, 14 29, 15 24 C 16 19, 19 15, 24 13 C 29 11, 34 12, 38 15 C 40 17, 42 19, 43 21 L 48 17 L 46 22 C 45 25, 42 27, 39 27 C 36 27, 34 25, 33 23 C 32 20, 30 17, 28 16 C 27 15, 26 15, 26 15 Z"
          />
          <circle cx="27" cy="25" r="3.2" fill="black" />
        </mask>
      </defs>
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="13"
        fill="currentColor"
        mask="url(#kestrel-profile)"
      />
    </svg>
  );
}
