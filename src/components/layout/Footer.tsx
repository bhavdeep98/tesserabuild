import { Logo } from '@/components/brand/Logo';
import { brand, nav } from '@/content/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/[.10] bg-void/60">
      <div className="shell py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo withLegalName className="text-[15px]" />
            <p className="mt-6 text-[14px] leading-relaxed text-ink-3">
              {brand.descriptor}. We read the systems builders already run and never
              write back to any of them.
            </p>
          </div>

          <div className="flex gap-16">
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
                    className="text-[14px] text-ink-2 transition-colors duration-300 hover:text-accent"
                  >
                    {brand.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line/[.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-ink-3">
            © {year} {brand.legalName}. All rights reserved.
          </p>
          <p className="text-[12.5px] text-ink-3">
            A tessera is a single tile of a mosaic.
          </p>
        </div>
      </div>
    </footer>
  );
}
