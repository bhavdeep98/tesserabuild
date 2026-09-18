import { BuilderPath } from '@/components/home/BuilderPath';
import { CapabilityWalkthrough } from '@/components/home/CapabilityWalkthrough';
import { PassportHero } from '@/components/home/PassportHero';
import { PracticalAnswers } from '@/components/home/PracticalAnswers';
import { StartHere } from '@/components/home/StartHere';
import { Thread } from '@/components/home/Thread';
import { WhyTessera } from '@/components/home/WhyTessera';

/**
 * Homepage — the product, in order.
 *
 * Say what it is, show it working across the whole life of a home, explain why
 * those five chapters are one thing, then where a builder starts. Then the
 * case for us, the practical questions, and the ask.
 *
 * The reader is a customer, not an investor. "Why Tessera" is therefore
 * answered here in a builder's terms — who built it, what it touches, what is
 * already connected — rather than pointed at the data room. The raise, the
 * market sizing and the odds of winning stay in the data room, which this site
 * no longer links to.
 */
export default function HomePage() {
  return (
    <>
      <PassportHero />
      <CapabilityWalkthrough />
      <Thread />
      <BuilderPath />
      <WhyTessera />
      <PracticalAnswers />
      <StartHere />
    </>
  );
}
