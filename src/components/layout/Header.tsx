'use client';

import { useEffect, useState } from 'react';

import { Logo } from '@/components/brand/Logo';
import { cta, nav } from '@/content/site';

export function Header() {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-500 ease-out ${
        lifted ? 'border-line/20 bg-bg/95 shadow-sm backdrop-blur-xl' : 'border-line/10 bg-bg/80 backdrop-blur-md'
      }`}
    >
      <div className="shell flex h-[77px] items-center justify-between gap-8">
        <a href="/" className="transition-opacity duration-300 hover:opacity-75" aria-label="Tessera — home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="flex items-center gap-7">
          {/* Hidden at phone width: the logo and the CTA alone fill 390px, and
              squeezing a link between them wrapped both onto two lines. */}
          <ul className="hidden items-center gap-7 sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-[12px] text-ink-2 transition-colors duration-300 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={cta.primary.href}
            className="whitespace-nowrap rounded-tile border border-line/30 px-4 py-2.5 text-[12px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {cta.primary.label} ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
