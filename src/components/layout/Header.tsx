'use client';

import { useEffect, useState } from 'react';

import { Logo } from '@/components/brand/Logo';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
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
      className={`sticky top-0 z-40 transition-all duration-500 ease-out ${
        lifted
          ? 'border-b border-line/[.15] bg-bg/90 shadow-sm backdrop-blur-xl'
          : 'border-b border-line/[.08] bg-bg/70 backdrop-blur-md'
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-8">
        <a
          href="#main"
          className="text-[20px] transition-opacity duration-300 hover:opacity-75"
          aria-label={`${'Tessera'} — home`}
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-[15px] font-medium text-ink-2 transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href={cta.primary.href}
            className="hidden rounded-pill border border-accent/45 px-5 py-2.5 text-[14px] font-semibold text-accent transition-all duration-300 ease-out hover:bg-accent hover:text-bg sm:inline-block"
          >
            Talk to us
          </a>
        </div>
      </div>
    </header>
  );
}
