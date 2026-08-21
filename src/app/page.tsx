import { MosaicHouseBackground } from '@/components/brand/MosaicHouseBackground';
import { Contact } from '@/components/sections/Contact';
import { Gap } from '@/components/sections/Gap';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Kestrel } from '@/components/sections/Kestrel';
import { Proof } from '@/components/sections/Proof';
import { Team } from '@/components/sections/Team';
import { Tenets } from '@/components/sections/Tenets';

/**
 * Homepage — the argument, in order.
 *
 * Problem, then conviction, then mechanism, then the product, then evidence,
 * then the people, then the ask. Tenets sit before How It Works on purpose:
 * the reader should know what we are optimising for before they are shown how.
 */
export default function HomePage() {
  return (
    <>
      <MosaicHouseBackground />
      <div className="relative z-10">
        <Hero />
        <Gap />
        <Tenets />
        <HowItWorks />
        <Kestrel />
        <Proof />
        <Team />
        <Contact />
      </div>
    </>
  );
}
