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
