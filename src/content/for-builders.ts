/**
 * /for-builders — a written answer to the second question from the room:
 * "Does the builder actually care, or is the passport just more work for them?"
 *
 * The argument, in order: the builder\u2019s win is real and immediate at Layer 1,
 * it costs them almost nothing to adopt, the later layers are upside they have
 * repeatedly failed to build alone, and the economics are stated as an explicit
 * hypothesis with a path to validation — not pretended to be settled.
 *
 * Voice matches site.ts. Pricing is labelled a hypothesis, because it is.
 */

export const meta = {
  title: 'For builders',
  description:
    'Why a builder adopts this on purpose: predictability and risk management on data they already own, no workflow change, adopted in about an hour — with post-close upside they have tried and failed to build alone.',
} as const;

export const hero = {
  eyebrow: 'Does the builder care?',
  headline: {
    lines: ['The builder is not', 'doing us a favour.'],
    emphasis: 'The first layer pays for itself.',
  },
  lede:
    'The fair version of the question is: the passport is valuable to a homeowner later, but is it just more work for the builder now? It is not. What the builder adopts on day one is a risk-management tool on data they already own, with no change to how anyone works. The record that becomes valuable later is a by-product of that, captured for free while the build happens.',
} as const;

/* ─────────────────────────────────────────────────────────────
   The immediate win — layer one, today
   ───────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────
   The evidence

   Moved here from the homepage when that page became a product
   introduction. It belongs on a builder's page: every figure is
   public, linked, and none of it is our estimate — which is the
   whole reason it persuades.
   ───────────────────────────────────────────────────────────── */

export const leak = {
  eyebrow: 'The problem',
  title: 'Where the money actually leaks',
  // Deliberately does not restate "no system sees the whole path" — the page
  // hero and `chain` below both make that point. This paragraph's only job is
  // the money: the first two sentences are the quotable kernel, the third
  // keeps the cascade.
  lede:
    'Nobody misses a close date because a system broke. They miss it in the handoff between two systems that both worked. A slipped inspection becomes a title delay, becomes a rate-lock extension, becomes a margin hit found the week of close.',
  // Every item carries a live link to its primary source — an unsourced number
  // in this section costs more credibility than it buys. Rendered as a static
  // grid rather than the homepage's rotating carousel: a builder weighing this
  // should be able to read every figure at once and click any source, without
  // waiting for a slide to come round.
  //
  // `kind` drives the accent tint only:
  //   cost     — industry-wide cost of delay
  //   earnings — public builder filings
  //   silos    — industry naming the root cause
  //
  // `figure` is optional. Quantitative items lead with the number; qualitative
  // ones lead with the quote itself, so nothing has to be invented to fill a slot.
  evidenceLede: 'Every figure below is public and linked. None of it is our estimate.',
  evidence: [
    {
      kind: 'cost',
      figure: '$10.8B',
      label: 'Annual economic impact of longer build times',
      text: 'NAHB and HBI put the aggregate cost of construction delays tied to the skilled-labour shortage at $10.8 billion a year — $2.66 billion of that in carrying cost alone.',
      source: 'NAHB / HBI Labor Market Report',
      date: 'June 2025',
      href: 'https://www.nahb.org/blog/2025/10/hbi-labor-market-report',
    },
    {
      kind: 'cost',
      figure: '16.3%',
      label: 'Signed purchase agreements cancelled',
      text: 'Roughly 40,000 signed home purchase agreements were voided in December 2025 — the highest share since tracking began in 2017, up from 14.9% a year earlier.',
      source: 'Redfin data, reported by CNBC',
      date: 'January 2026',
      href: 'https://www.cnbc.com/2026/01/27/homebuyers-backing-out-of-deals.html',
    },
    {
      kind: 'cost',
      figure: '9.1 mo',
      label: 'Start to completion, single-family home',
      text: 'Average build time has eased off its 10.1-month peak, but still runs roughly 2.5 months longer than it did a decade ago.',
      source: 'Census Survey of Construction, via NAHB',
      date: '2024 data',
      href: 'https://eyeonhousing.org/2025/09/single-family-homes-are-built-faster-in-2024/',
    },
    {
      kind: 'cost',
      figure: '~$670',
      label: 'Carrying cost per day on a $750K build',
      text: 'Every day a finished home sits unclosed carries real cost — before a single incentive or rate-lock extension enters the picture.',
      source: 'Association of Professional Builders',
      date: null,
      href: 'https://blog.associationofprofessionalbuilders.com/true-cost-of-project-delay',
    },
    {
      kind: 'earnings',
      figure: '18%',
      label: 'D.R. Horton cancellation rate',
      text: 'At the largest homebuilder in the country, net income fell 30% to $594.8 million in the quarter, with cancellations running at 18%.',
      source: 'D.R. Horton Q1 FY2026 results',
      date: 'January 2026',
      href: 'https://www.businesswire.com/news/home/20260120750275/en/',
    },
    {
      kind: 'earnings',
      figure: '~10%',
      label: 'Of revenue spent on sales incentives',
      text: 'D.R. Horton held cancellations at 16% the following quarter while earnings per diluted share slipped to $2.24 from $2.58, with incentives near a tenth of revenue.',
      source: 'D.R. Horton Q2 FY2026 earnings call',
      date: 'April 2026',
      href: 'https://www.fool.com/earnings/call-transcripts/2026/04/21/dr-horton-dhi-q2-2026-earnings-transcript/',
    },
    {
      kind: 'earnings',
      figure: '−53%',
      label: 'Lennar earnings per share, year over year',
      text: 'Earnings per diluted share fell to $0.93 from $1.96. Gross margin on home sales dropped to 15.2% from 18.7%, with incentives around 14%.',
      source: 'Lennar Q1 FY2026 results',
      date: 'March 2026',
      href: 'https://newsroom.lennar.com/2026-03-12-Lennar-Reports-First-Quarter-2026-Results',
    },
    {
      kind: 'earnings',
      figure: '12.9%',
      label: 'Lennar incentive rate',
      text: 'Still more than double a normal cycle. New orders fell 4% to 21,749 homes and full-year guidance was cut to 82,000–83,000.',
      source: 'Lennar Q2 FY2026 results',
      date: 'June 2026',
      href: 'https://investors.lennar.com/press-releases/2026/06-11-2026-214520364',
    },
    {
      kind: 'silos',
      figure: null,
      label: 'The trade press has already named the cause',
      text: 'Silos kill margin. Builders are being told to remap workflows across tens of thousands of moving parts and handoffs.',
      source: 'The Builder\u2019s Daily',
      date: 'July 2025',
      href: 'https://www.thebuildersdaily.com/silos-kill-margin-heres-how-homebuilders-can-fight-back/',
    },
    {
      kind: 'silos',
      figure: null,
      label: 'Integration is no longer an advantage',
      text: 'It has pivoted into homebuilding\u2019s survival skill. Disjointed systems create friction, and that friction lands in margin.',
      source: 'The Builder\u2019s Daily',
      date: 'April 2025',
      href: 'https://www.thebuildersdaily.com/integration-has-pivoted-into-homebuildings-survival-skill/',
    },
    {
      kind: 'silos',
      figure: null,
      label: 'The daily cost of not knowing',
      text: 'Teams spend their time searching for answers instead of acting, because no system holds a real-time view of progress.',
      source: 'Digs',
      date: 'January 2026',
      href: 'https://digs.com/post/from-siloed-systems-to-integrated-workflows-the-digital-transformation-of-homebuilding',
    },
    {
      kind: 'silos',
      figure: null,
      label: 'It costs opportunities, not just days',
      text: 'NAHB reports builders missing land and lot opportunities outright, because siloed systems are too inflexible to move at the speed of the deal.',
      source: 'NAHB',
      date: 'May 2025',
      href: 'https://www.nahb.org/nahb-community/councils/20-clubs/pages/resources/20-clubs-sponsors/building-smarter-with-a-single-source-of-truth',
    },
  ]
} as const;

/* ─────────────────────────────────────────────────────────────
   The chain

   Five competent systems, no shared view. This is the argument
   the evidence above is evidence *for*, so it follows it.
   ───────────────────────────────────────────────────────────── */

export const chain = {
  eyebrow: 'Why it happens',
  title: 'Five systems. One home. No shared view.',
  lede:
    'One home passes through five independent systems on its way to close. Each is competent at its own leg. None of them holds the whole chain.',
  links: [
    { name: 'Sales', system: 'CRM' },
    { name: 'Construction', system: 'Scheduling' },
    { name: 'Mortgage', system: 'LOS' },
    { name: 'Title & escrow', system: 'Settlement' },
    { name: 'Finance', system: 'ERP' },
  ],
  footnote:
    'When the second link slips, the fifth finds out after the date has already moved. The information existed the whole time — it just had nowhere to be assembled. That assembly is the entire product.',
} as const;

export const winNow = {
  eyebrow: 'The built-in win',
  title: 'What the builder gets on day one',
  lede:
    'Nothing here is speculative or years away. It runs on the systems they already have, and it earns its place before anyone mentions a passport or a marketplace.',
  items: [
    {
      title: 'Predictability they cannot get from any one system',
      body:
        'Which homes will miss their close date, and why, while there is still time to act. That answer lives in the handoffs between five systems that each see only their own leg. The builder already owns every signal — nobody has assembled them into one view of the path to close.',
    },
    {
      title: 'Risk management on the number they report to the street',
      body:
        'Slipped closings, rate-lock extensions, and rescue incentives land directly in the margin builders are being punished for in their own earnings. A week of warning on a slipping home is the difference between managing it and eating it.',
    },
    {
      title: 'No new customer-care system to build or buy',
      body:
        'They can point their existing teams at a ranked list with a named owner and a reason, instead of standing up another internal tool. We are not replacing their stack. We are the layer that makes the stack they already paid for legible.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   The cost of saying yes — deliberately near zero
   ───────────────────────────────────────────────────────────── */

export const adoption = {
  eyebrow: 'What it costs them to try',
  title: 'The only thing a builder has to do is say yes',
  lede:
    'The reason this gets adopted fast is that saying yes is almost free and carries no operational risk. We read; we never write back. Their system of record stays theirs, untouched.',
  asks: [
    { label: 'Their time', value: 'About one hour, total' },
    { label: 'Their IT team', value: 'One read-only credential' },
    { label: 'Their workflow', value: 'No change to any of it' },
    { label: 'Their commitment', value: 'None to start' },
  ],
  note:
    'Read-only is not a promise we make; it is enforced by construction. A connector can only declare a GET or HEAD request — anything that would write into a builder system fails validation and never loads. That is why an IT team can approve it in one meeting.',
  proof:
    'The first engagement is a findings report on their own history: twelve months of their data, scored as if we had been running, showing which homes we would have flagged and how many actually slipped. It is theirs to keep whether they continue or not.',
} as const;

/* ─────────────────────────────────────────────────────────────
   The upside the builder has tried and failed to build alone
   ───────────────────────────────────────────────────────────── */

export const upside = {
  eyebrow: 'Why the later layers matter to them',
  title: 'The post-close relationship they keep trying to own',
  lede:
    'Every large builder is chasing the same thing — a way to keep monetising a homeowner after the sale. They pursue it through insurance and energy joint ventures. The marketplace attempts have mostly stalled, because none of them starts from a single verified record of the home. That record is what the first layer produces.',
  points: [
    {
      title: 'A relationship that survives the handoff',
      body:
        'When a homeowner has an issue, the record connects them to the trade that did the work, not back to a builder\u2019s customer-care queue. The builder stays present in the home\u2019s life without carrying the support cost.',
    },
    {
      title: 'The rails for what the majors are already exploring',
      body:
        'A verified, tamper-evident record is also the substrate for the newer things large builders are experimenting with — from post-close service to community-level structures. We are not selling that on day one. We are making sure the foundation exists for the day they want it.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   Economics — stated as a hypothesis, on purpose
   ───────────────────────────────────────────────────────────── */

export const economics = {
  eyebrow: 'How this makes money — honestly',
  title: 'The model is a hypothesis with a path to a number',
  lede:
    'We were asked whether the builder shares in later services revenue. The truthful answer is that we have not settled it, and we would rather show the shape of the model and how we will validate it than invent a figure. Here is the current thinking.',
  model: [
    {
      title: 'Priced per signal, so it scales with value',
      body:
        'The unit is a signal — a defined data point pulled from a builder system. A builder tracking more risk across more divisions pulls more signals and pays more, which keeps entry cheap enough to get in the door and lets revenue grow with usage rather than with a renegotiation.',
    },
    {
      title: 'Adopted by division, not just by logo',
      body:
        'Large builders roll out by division, so the real unit of growth is a division turning on, not a whole company signing at once. That makes the path to expansion inside a single builder concrete rather than all-or-nothing.',
    },
    {
      title: 'Infrastructure is a rounding error',
      body:
        'A national builder\u2019s entire pipeline runs on modest infrastructure — the cost per closing is a fraction of a percent of the value at stake. The economics are dominated by the work of building each connector, which is reusable across every builder on the same system.',
    },
  ],
  revShare: {
    label: 'On the builder\u2019s cut of later revenue — the open question',
    body:
      'Whether a builder shares in marketplace or services revenue from homes they brought onto the platform is a live decision, not a settled one. It may be the lever that gets a builder to say yes, or it may be worth keeping. We are researching how the existing joint ventures are actually structured before we commit to a number, and we will not pretend to have it before we do.',
  },
} as const;

export const close = {
  eyebrow: 'In one line',
  title: 'Why the builder cares',
  body:
    'Because the first layer is a risk tool on data they already own, it costs an hour to adopt, it changes nothing, and it happens to capture — for free — the one record they keep failing to build for themselves. The homeowner value comes later. The builder value comes first.',
  cta: { label: 'Read why we win', href: '/why-we-win/' },
} as const;
