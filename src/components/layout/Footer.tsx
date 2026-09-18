import { Logo } from '@/components/brand/Logo';
import { brand, nav } from '@/content/site';

/**
 * No data room link here either. An investor gets that URL from us directly;
 * a builder reading this site should never stumble into the raise.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/20 bg-void/50">
      <div className="shell py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo withLegalName />
            <p className="mt-6 text-[14px] leading-relaxed text-ink-2">
              Tessera creates a digital identity for every home, connecting the data,
              services, and intelligence that follow it from construction through
              ownership.
            </p>
          </div>

          {/* Two columns at every width. The previous fixed row of three with a
              4rem gap put every link on two lines at 390px and pushed the email
              address off the right edge. */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:gap-x-16">
            <div>
              <h2 className="text-eyebrow uppercase text-ink-3">Site</h2>
              <ul className="mt-5 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[14px] text-ink-2 transition-colors duration-300 hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-eyebrow uppercase text-ink-3">Contact</h2>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="break-all text-[14px] text-ink-2 transition-colors duration-300 hover:text-accent"
                  >
                    {brand.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-ink-3">
            © {year} {brand.legalName}. All rights reserved.
          </p>
          <p className="text-[12.5px] text-ink-3">
            A tessera is one tile of a mosaic. Every connection completes the picture.
          </p>
        </div>
      </div>
    </footer>
  );
}
