import { BuilderPath } from '@/components/home/BuilderPath';
import { CapabilityWalkthrough } from '@/components/home/CapabilityWalkthrough';
import { PassportHero } from '@/components/home/PassportHero';
import { PracticalAnswers } from '@/components/home/PracticalAnswers';
import { StartHere } from '@/components/home/StartHere';
import { WhyTessera } from '@/components/home/WhyTessera';

/**
 * Homepage — the product, in order.
 *
 * Say what it is, show the chapter walkthrough (with a link out to the
 * interactive story page), then where a builder starts. Then the case for us,
 * the practical questions, and the ask. CTAs on this page go to contact —
 * not deeper site pages.
 */
export default function HomePage() {
  return (
    <>
      <PassportHero />
      <CapabilityWalkthrough />
      <BuilderPath />
      <WhyTessera />
      <PracticalAnswers />
      <StartHere />
    </>
  );
}
