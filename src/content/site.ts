/**
 * Single source of truth for site copy.
 *
 * Every number on this site is traceable. Industry figures carry their source
 * inline. Platform figures are counted from the Home Passport codebase, not
 * estimated. Nothing here describes a capability that does not exist today.
 *
 * Deliberately absent, and why:
 *   - Pricing. The $250/closing figure in MARKET-SIZING.md is an internal
 *     hypothesis pending pilot validation, not an adopted price.
 *   - Model accuracy. The ML path is env-gated and off by default; the shipped
 *     score is a weighted completion index with penalties, not a calibrated
 *     probability.
 *   - Customer counts, logos, deal volumes. There are none yet. Saying so is
 *     cheaper than being caught.
 */

export const brand = {
  name: 'Tessera',
  legalName: 'Tessera Build Inc',
  descriptor: 'The intelligence layer for homebuilders',
  email: 'sales@tesserabuild.ai',
} as const;

export const nav = [
  { label: 'The problem', href: '#gap' },
  { label: 'What we believe', href: '#tenets' },
  { label: 'How it works', href: '#how' },
  { label: 'Kestrel', href: '#kestrel' },
  { label: 'Team', href: '#team' },
] as const;

export const cta = {
  primary: { label: 'Request a findings report', href: '#contact' },
  secondary: { label: 'How it works', href: '#how' },
} as const;

export const hero = {
  eyebrow: 'Tessera Build · Release 01 · Kestrel',
  headline: {
    // Authored as explicit lines. Letting a 72px headline wrap on its own
    // produces a different, usually worse, break at every viewport width.
    lines: ['The delay is not', 'in your systems.'],
    emphasis: "It's between them.",
  },
  lede:
    'Construction, mortgage, title, sales, and finance each run in their own system. Every one of them understands its own part of the transaction. None of them can see the whole path to close. Tessera reads all of them and tells you which homes will miss their date, and why, while there is still time to act.',
  points: [
    'Reads the systems you already run',
    'Never writes back to any of them',
    'One hour of your IT team, then nothing',
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   The gap
   ───────────────────────────────────────────────────────────── */

export const gap = {
  eyebrow: 'The problem',
  title: 'Where the money actually leaks',
  // Deliberately does not restate "no system sees the whole path" — the hero
  // and chainLede both make that point. This paragraph's only job is the money:
  // the first two sentences are the quotable kernel, the third keeps the cascade.
  lede:
    'Nobody misses a close date because a system broke. They miss it in the handoff between two systems that both worked. A slipped inspection becomes a title delay, becomes a rate-lock extension, becomes a margin hit found the week of close.',
  // Rotating evidence. Every item carries a live link to its primary source —
  // an unsourced number in this section costs more credibility than it buys.
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
  ],
  chainLede:
    'One home passes through five independent systems on its way to close. Each is competent at its own leg. None of them holds the whole chain.',
  chain: [
    { name: 'Sales', system: 'CRM' },
    { name: 'Construction', system: 'Scheduling' },
    { name: 'Mortgage', system: 'LOS' },
    { name: 'Title & escrow', system: 'Settlement' },
    { name: 'Finance', system: 'ERP' },
  ],
  chainFootnote:
    'When the second link slips, the fifth finds out after the date has already moved. The information existed the whole time — it just had nowhere to be assembled. That assembly is the entire product.',
} as const;

/* ─────────────────────────────────────────────────────────────
   Tenets — what the company is for
   ───────────────────────────────────────────────────────────── */

export const tenets = {
  eyebrow: 'What we believe',
  title: 'Two commitments we will not trade away',
  lede:
    'Plenty of software makes a builder faster. We are trying to make a home cost less to deliver, and to be adopted without asking anyone to change how they work. Those two things constrain every decision we make.',
  items: [
    {
      index: '01',
      name: 'Affordability for all',
      claim: 'Every day a finished home sits unclosed is priced into the home.',
      body:
        'Carrying cost, rate-lock extensions, incentives handed over to rescue a slipping date — none of it makes a house better. It lands in the price a family pays, or in the margin that funds the next community. Coordination waste is one of the few costs in homebuilding that can fall without cutting quality, cutting labour, or cutting the builder. That is the lever we chose on purpose.',
      pull: 'Take the waste out of the transaction, not out of the house.',
    },
    {
      index: '02',
      name: 'Ease to connect',
      claim: 'The only thing a builder has to do is say yes.',
      body:
        'No migration. No rip-and-replace. No new system for anyone to learn, and no change to a single existing workflow. We read the tools your teams already trust, and we never write back to them. A new system is a connector definition plus an optional normaliser — measured in hours of our work and about an hour of your IT team\u2019s, once.',
      pull: 'If adoption is expensive, it does not matter how good the insight is.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   How it works
   ───────────────────────────────────────────────────────────── */

export const how = {
  eyebrow: 'How it works',
  title: 'Above the stack, never inside it',
  lede:
    'Tessera is a read-only intelligence layer. It sits above the systems you already run, assembles their signals into one timeline per home, and surfaces the risk that only becomes visible when all of them are read together.',
  layers: [
    {
      name: 'Connect',
      description:
        'Connectors are declarative definitions, not bespoke code. Each one polls a system read-only and emits typed signals into the pipeline.',
      points: [
        'Definitions built for BuildPro, Procore, Encompass, Qualia, JDE, Salesforce and Acumatica',
        'Nothing installed, nothing changed in the source system',
        'Twelve months of history ingested before you make any decision',
      ],
    },
    {
      name: 'Correlate',
      description:
        'Signals land on a dependency graph per home. The graph is what makes cross-system risk computable: it knows which milestones gate which.',
      points: [
        '51 signal types across six categories, resolved onto 45 milestones',
        'Critical path recomputed as each signal arrives, not on a nightly job',
        'A reason chain, not a red dot — the score always explains itself',
      ],
    },
    {
      name: 'Act',
      description:
        'A finding is worthless if it arrives after the date has moved, or lands with someone who cannot act. Escalations are routed and timed.',
      points: [
        'Named blocking milestone, days overdue, and who owns it',
        'Routing per division, falling back to a global rule',
        'Earliest possible close date in business days, not a vague warning',
      ],
    },
  ],
  principle: {
    label: 'Read-only by construction',
    body:
      'A connector definition can only declare a GET or HEAD request. Anything else fails validation and the connector never loads — so a write back into a builder system is not a policy we promise to keep, it is a request the platform cannot express. Your system of record stays yours, untouched.',
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   Kestrel — release 01
   ───────────────────────────────────────────────────────────── */

export const kestrel = {
  eyebrow: 'Release 01',
  title: 'Kestrel',
  lede:
    'Hovers above your stack. Changes nothing. Sees everything.',
  naming: '',

  /**
   * An illustrative home, drawn in our own design language rather than
   * screenshotted from the internal portal.
   *
   * The arithmetic below reconciles exactly against the shipped scoring
   * algorithm: category completion times category weight, summed, minus a
   * five-point staleness penalty for one quiet source system. Milestone
   * denominators are the real per-category counts from the standard template
   * (4 sales, 12 construction, 10 mortgage, 8 title, 5 financial, 6 utility —
   * 45 in total). The address and the numbers are invented; the structure and
   * the maths are not.
   */
  console: {
    label: 'Illustrative home — not customer data',
    address: '1245 Elm Ct',
    meta: [
      { label: 'Community', value: 'Windmill Ranch' },
      { label: 'Target close', value: 'Jul 11' },
      { label: 'Contract', value: 'Jan 18' },
    ],
    score: 61,
    band: 'At risk',
    // pct is rounded for display; contribution uses the unrounded value.
    // 32.083 + 7.5 + 12.5 + 7.5 + 3.0 + 3.333 = 65.916, less the 5-point
    // staleness penalty = 60.916, which rounds to the 61 shown.
    categories: [
      { name: 'Construction', done: 11, total: 12, weight: 0.35, contribution: 32.1 },
      { name: 'Mortgage', done: 3, total: 10, weight: 0.25, contribution: 7.5 },
      { name: 'Title & escrow', done: 5, total: 8, weight: 0.2, contribution: 12.5 },
      { name: 'Sales', done: 3, total: 4, weight: 0.1, contribution: 7.5 },
      { name: 'Financial', done: 3, total: 5, weight: 0.05, contribution: 3.0 },
      { name: 'Utility', done: 4, total: 6, weight: 0.05, contribution: 3.3 },
    ],
    subtotal: 65.9,
    penalty: { label: 'Staleness — Encompass quiet for 31h', value: -5 },
    blocking: {
      label: 'What is blocking',
      milestone: 'Clear to close',
      body:
        'Construction is all but finished and mortgage is the constraint. No single system can see that: the scheduling tool reports a home that is ready, and the loan system reports a file that is merely behind. Read together, this home misses its date.',
      overdue: '9 days overdue',
      earliest: 'Earliest possible close · Jul 24',
    },
  },

  capabilities: [
    {
      title: 'Portfolio confidence',
      description:
        'Every active home scored and ranked, rolled up through communities and divisions, so a leader sees the pipeline and a superintendent sees their street.',
    },
    {
      title: 'Parallel category tracks',
      description:
        'The six legs of the transaction shown side by side, because they run concurrently and block each other. Progress on one is not progress overall.',
    },
    {
      title: 'A reason, never a red dot',
      description:
        'Every score decomposes into the categories that produced it, the milestone that is actually blocking, and how far past its expected date it is.',
    },
    {
      title: 'Escalations that name an owner',
      description:
        'Plain language: what is blocked, why, who should move, and how long the window has been open. Routed per division, deduplicated so nobody is spammed.',
    },
  ],
  connectorsLede:
    'Sixteen systems across the six legs of the transaction — scheduling, purchasing, CRM, loan origination, title and ERP. Every one of them reads into the same signal vocabulary, so whatever stack a division has grown into, Kestrel speaks to it.',
  /**
   * Flat connector wall, rendered as a marquee. Order alternates vendor
   * categories so no row reads as a single-discipline list.
   *
   * `tone` is a literal Tailwind class so the palette compiles from the content
   * scan rather than needing inline styles. Every tone clears 4.5:1 against the
   * white monogram. Colours are brand-adjacent, darkened for contrast — these
   * are our own wordmarks, not vendor trademark assets.
   */
  connectors: [
    { name: 'BuildPro', mark: 'BP', tone: 'bg-[#A8460F]' },
    { name: 'Encompass', mark: 'EN', tone: 'bg-[#123F7A]' },
    { name: 'Qualia', mark: 'Q', tone: 'bg-[#1F4FB8]' },
    { name: 'JD Edwards', mark: 'JD', tone: 'bg-[#A93A28]' },
    { name: 'Procore', mark: 'PC', tone: 'bg-[#C64A17]' },
    { name: 'Salesforce', mark: 'SF', tone: 'bg-[#0B6FA4]' },
    { name: 'Acumatica', mark: 'AC', tone: 'bg-[#0B5E96]' },
    { name: 'Empower', mark: 'EM', tone: 'bg-[#4B3BB5]' },
    { name: 'Buildertrend', mark: 'BT', tone: 'bg-[#0B4F80]' },
    { name: 'Lasso', mark: 'LA', tone: 'bg-[#A50E26]' },
    { name: 'ResWare', mark: 'RW', tone: 'bg-[#14577F]' },
    { name: 'HubSpot', mark: 'HS', tone: 'bg-[#B34A2E]' },
    { name: 'SoftPro', mark: 'SP', tone: 'bg-[#024B87]' },
    { name: 'Blend', mark: 'BL', tone: 'bg-[#1440C0]' },
    { name: 'CoConstruct', mark: 'CC', tone: 'bg-[#8A5A17]' },
    { name: 'SAP S/4HANA', mark: 'SAP', tone: 'bg-[#036A9E]' },
  ],
  proven: {
    label: 'Proven against live systems',
    body:
      'Salesforce is connected to a real org over JWT and verified by a live test. Procore is verified in sandbox over OAuth2. We label the rest honestly: a definition that has been tested against our own harness, not against your tenant. We would rather tell you that now than during a pilot.',
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   Proof — what is actually built
   ───────────────────────────────────────────────────────────── */

export const proof = {
  eyebrow: 'What is built',
  title: 'Running today, not a roadmap',
  lede:
    'The platform exists. Ingestion, streaming, the dependency graph, scoring, escalation and the portal are built and running end to end. These are counted from the codebase, not estimated.',
  metrics: [
    { value: '51', label: 'Signal types', detail: 'Across six categories of the transaction' },
    { value: '45', label: 'Milestones per home', detail: '48 dependencies, 35 of them hard gates' },
    { value: '3', label: 'Lifecycle templates', detail: 'Standard, cash buyer, and condo' },
    { value: '16', label: 'Systems catalogued', detail: 'Seven with definitions built' },
  ],
  engineering: [
    {
      title: 'Critical path, properly computed',
      body:
        'Hard dependencies only, topologically sorted with cycle detection, then a longest-path pass that skips edges already satisfied. The output is an earliest possible close date in business days.',
    },
    {
      title: 'Stale data is a signal, not a failure',
      body:
        'When a source system goes quiet the score is penalised rather than silently inflated, and milestones never touched by a signal still count against the denominator. A builder who is behind on data entry sees a lower score, which is the honest answer.',
    },
    {
      title: 'Replayable by design',
      body:
        'Signals stream through Kafka keyed by deal, with idempotent production and a dead-letter path. The graph can be rebuilt from the log, so a scoring change can be re-run over history instead of only applying going forward.',
    },
  ],
  candour: {
    label: 'What we will not claim',
    body:
      'The shipped score is a weighted completion index with staleness and overdue penalties — not a calibrated probability, and it says so in its own output. Category weights start from operator judgement and are meant to be recalibrated per builder against that builder\u2019s history. The machine-learning path exists behind a flag and is off by default. We will publish accuracy when we have earned the right to, on real data, with a control group.',
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   Team
   ───────────────────────────────────────────────────────────── */

export const team = {
  eyebrow: 'Who is building it',
  title: 'Operators, not spectators',
  lede:
    'This is not a team that read about homebuilding. One of us ran the field organisation this product is built for, and left to fix it. The other has spent a career building the kind of detection pipeline it needs.',
  people: [
    {
      name: 'Teresa Lynch',
      role: 'Founder & Chief Executive',
      former: 'Former Vice President, Lennar',
      initials: 'TL',
      image: '/founders/36462.png',
      body:
        'Teresa spent her career inside the largest homebuilder in the United States, running the field operations where the close date is either protected or lost. She has sat in the meeting where five departments each report that their part is fine and the home still misses its date by three weeks. She left to build the layer that would have told her the truth on week one instead of week nine.',
      pull: 'She is not guessing at the workflow. She ran it.',
    },
    {
      name: 'Bhavdeep Singh Sachdeva',
      role: 'Chief Technology Officer',
      former: 'Five years shipping detection systems at AWS',
      initials: 'BS',
      image: '/founders/36461.png',
      body:
        'Bhavdeep spent five years at Amazon Web Services building the data infrastructure behind GuardDuty and Security Hub — services that ingest billions of events across thousands of accounts and surface the handful that actually matter. He designed organizational-scale pipelines, Delta Lake architectures on EMR, and cross-region replication systems that had to be right every time. The problem Tessera solves is structurally identical: pull fragmented signals from many systems, correlate them in real time, and tell you which deals need attention before it is too late. He built this platform end to end.',
      pull: 'The same engineering that detects threats across AWS now detects risk across your pipeline.',
    },
  ],
  bench:
    'Two further operators from the same world are with us and closely involved. We will introduce them when it is right for them, not when it is convenient for us.',
} as const;

/* ─────────────────────────────────────────────────────────────
   Contact
   ───────────────────────────────────────────────────────────── */

export const contact = {
  eyebrow: 'Start here',
  title: 'See it on your own homes',
  lede:
    'Not a demo on invented data. We read your history, score it, and hand you a written report on what we would have caught and when. You keep it either way.',
  offer: {
    headline: 'The findings report',
    points: [
      'Read-only access to one system, or public records if you would rather share nothing',
      'Twelve months of your own history, scored as if we had been running',
      'Which homes we would have flagged, and how many of them actually slipped',
      'One cohort comparison — the community or plan that runs longer, and by how much',
      'Method and limitations stated plainly, including what we could not determine',
    ],
    asks: [
      { label: 'Your time', value: 'About one hour, total' },
      { label: 'Your IT team', value: 'One read-only credential' },
      { label: 'Your commitment', value: 'None' },
    ],
    footnote:
      'The report is yours to keep whether you continue with us or not, and it is free. If it tells you only things you already knew, we would genuinely like to hear that — it is the most useful thing you could tell us.',
  },
  form: {
    note: 'We reply personally, usually within two business days. No sequence, no drip.',
  },
} as const;
