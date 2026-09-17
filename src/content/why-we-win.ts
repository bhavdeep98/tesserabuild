/**
 * /why-we-win — a written answer to one question a good investor asks out loud:
 * "Why do you have a right to win?"
 *
 * Voice matches site.ts: no hype, every claim either structural (true by
 * construction), public (linked), or counted from the codebase. Where the
 * honest answer is "not yet," it says so — being first to name a gap is worth
 * more than being caught in one.
 *
 * This page is authored to be read cold by someone who was not in the room.
 */

export const meta = {
  title: 'Why we win',
  description:
    'Not "we lived the problem." A structural answer: Tessera sits above systems that cannot cross their own boundaries, the record outlives the builder, and the founder built this exact pattern at AWS scale.',
} as const;

export const hero = {
  eyebrow: 'The right-to-win question',
  headline: {
    lines: ['Lived experience is', 'the reason we started.'],
    emphasis: 'It is not the reason we win.',
  },
  lede:
    'Every founder in a category they know claims domain empathy. It is table stakes, not a moat. The durable answer is structural: Tessera occupies a position the incumbents cannot reach from where they sit, on data that compounds, in a record built to outlive the builder that created it. Below is that answer, in four parts, with the honest limits named.',
} as const;

/* ─────────────────────────────────────────────────────────────
   The four reasons
   ───────────────────────────────────────────────────────────── */

export const reasons = {
  eyebrow: 'Four reasons, in order of durability',
  title: 'Why this is defensible, not just early',
  lede:
    'Ordered deliberately. The first reason is the one an ERP vendor cannot copy by shipping a feature. The last is the one that makes the second and third inevitable.',
  items: [
    {
      index: '01',
      name: 'We sit above the boundary no incumbent can cross',
      claim: 'The buyer picks the lender. No builder system can see past that line.',
      body:
        'A builder ERP sees construction and sales. It does not see the loan file, because the buyer chose the lender, and it does not see title, because title is a separate settlement system. The single most common way a close slips — mortgage or title falling behind while the house is finished — is invisible to every system a builder already owns, by the structure of who owns what data. Tessera is read-only and vendor-neutral by design, so it is the one layer that can read across that boundary. An incumbent cannot follow without asking its customers to hand a competitor their buyers\u2019 loan data.',
      pull: 'A feature cannot cross a boundary that exists because of who owns the data.',
    },
    {
      index: '02',
      name: 'The record outlives the builder',
      claim: 'The builder says "warranty\u2019s up, don\u2019t call us." The record stays.',
      body:
        'Everything a builder knows about a home — what was permitted, what was installed, which trade did the work, what the warranty covered — is stranded in systems the homeowner loses access to the day the builder walks away. We assemble that into a record that belongs to the home, not the vendor, and anchor it so it cannot be quietly altered. That is the "Carfax for a house" that does not exist today. It is only credible because the data was captured accurately at the source, during the build, which is exactly what the first layer does.',
      pull: 'You cannot reconstruct a verified build history after the fact. You have to be there when it happens.',
    },
    {
      index: '03',
      name: 'The data compounds',
      claim: 'Every home we score teaches the next score.',
      body:
        'The platform captures the full lifecycle of a home across systems that have never been read together. Every closing that lands on time or slips is a labelled example of which signal, in which handoff, actually moved the date. No incumbent has this cross-system ground truth, because no incumbent reads across all six legs of the transaction. The longer we run, the better the intelligence, and the further ahead of anyone starting later — a lead measured in accumulated history, not in code.',
      pull: 'The moat is not the model. It is the labelled history only we are positioned to collect.',
    },
    {
      index: '04',
      name: 'Built by someone who has built this before',
      claim: 'The same engineering that finds one threat across AWS finds one at-risk home across your pipeline.',
      body:
        'This is not a first attempt at hard infrastructure. Bhavdeep spent five years at AWS building the pipelines behind GuardDuty and Security Hub — systems that ingest billions of events across thousands of accounts and surface the handful that matter. Tessera is structurally the same problem pointed at homebuilding: fragmented signals, correlated in real time, reduced to the few that need action. The platform is built and running end to end, not a deck.',
      pull: 'Cross-system signal detection at scale is a solved engineering problem for this team.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   The competitive question, answered directly
   ───────────────────────────────────────────────────────────── */

export const competition = {
  eyebrow: 'The obvious rebuttals',
  title: 'The three questions that follow, answered',
  lede:
    'A generalist investor is right to press on these. None of them has a hand-waving answer, so here are the real ones.',
  items: [
    {
      q: 'Why hasn\u2019t Lennar just built this internally?',
      a: 'They have tried adjacent versions and the marketplace attempts have not held. The barrier is not engineering talent — it is that an internal build only ever sees that builder\u2019s own systems, and stops at the buyer-lender boundary. A single builder also cannot build the cross-builder ground truth that makes the intelligence improve. The neutral layer is a different company, not a backlog item.',
    },
    {
      q: 'What happens when an ERP ships this as a feature?',
      a: 'An ERP can add analytics on the data it already holds. It cannot read a competitor\u2019s loan origination system or an independent title platform, because its own customers would never route that data through it. Our position depends on being nobody\u2019s system of record. That is precisely what an ERP cannot be.',
    },
    {
      q: 'A well-funded construction-tech player could do this in 18 months.',
      a: 'They could build Layer 1. What they cannot buy in 18 months is the accumulated cross-system history, and they carry the same neutrality problem if they also sell a system of record. The defensibility compounds with time in market, which is the one input a later entrant cannot purchase.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   Honest framing of the AI layer — the part that did not land yet
   ───────────────────────────────────────────────────────────── */

export const aiCandour = {
  eyebrow: 'On the intelligence, plainly',
  title: 'What the AI is today, and what it is not yet',
  lede:
    'We would rather be trusted on this than impressive on it. The distinction below is the honest state of the system, and it is also the reason for the first hire.',
  now: {
    label: 'Shipping today',
    body:
      'The score is a weighted completion index across the six categories, with penalties when a source system goes quiet and when a milestone runs past its expected date. It decomposes into a reason chain — the blocking milestone, days overdue, the earliest possible close date in business days. It is deterministic, explainable, and it says in its own output that it is provisional rather than a calibrated probability.',
  },
  next: {
    label: 'What the raise funds',
    body:
      'A calibrated model trained on real builder history is the reason the first hire is an NLP engineer, not a claim we already make. We will publish accuracy when we have earned the right to — on real data, with a control group — and not before. The rule-based score is genuinely useful now; the machine-learning path is upside we are being paid to go build, not a capability we are pretending to have.',
  },
  pull:
    'The score is honest before it is smart. The smart part is what the money is for.',
} as const;

export const close = {
  eyebrow: 'In one line',
  title: 'The right to win',
  body:
    'We win because we hold a position the incumbents cannot reach from where they sit, on a record that outlives the builder, with history that compounds, built by a team that has shipped this exact kind of system before. The empathy is why we started. The structure is why we last.',
  cta: { label: 'See what runs today', href: '/for-builders/' },
} as const;
