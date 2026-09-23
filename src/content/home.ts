/**
 * Homepage copy — the product, for the customer.
 *
 * This page and the data room have different readers. The data room is for
 * investors: the raise, the market evidence, the team's odds of winning. This
 * page is for the builder who has to decide whether to connect their systems
 * to us. It therefore links nowhere near the data room, and the case it makes
 * for Tessera is a customer's case — who we are, what we touch, what is
 * already connected — never an investor's.
 *
 * The page is one argument in five chapters. Each chapter ends by naming what
 * the next one inherits (`carry`), because the thing being sold is not five
 * capabilities — it is one record that gets more useful every time something
 * happens to the home.
 *
 * `rollout` marks where a chapter sits in adoption, not how finished it is.
 * Four of the five ship today. Ownership is last because it cannot happen
 * until a home changes hands — a fact about homes, not about our backlog.
 */

export const meta = {
  title: 'Tessera — a digital identity for every home',
  description:
    'Tessera creates a digital identity for every home, connecting the data, services, and intelligence that follow it from construction through ownership.',
} as const;

export const hero = {
  eyebrow: 'Meet Home Passport',
  headline: { lead: 'A digital identity for', emphasis: 'every home.' },
  lede:
    'Tessera creates a digital identity for every home, connecting the data, services, and intelligence that follow it from construction through ownership.',
  primary: { label: 'Explore Home Passport', href: '#product' },
  secondary: { label: 'Talk to our team', href: '#contact' },
  visual: {
    label: 'One home. A continuous record.',
    note: 'Illustrative home',
    passport: { brand: 'Tessera', title: 'Home Passport', serial: 'Home / 001', span: 'Construction → ownership' },
    record: {
      title: 'The home’s information, connected.',
      detail: 'Plans · systems · services · history',
      state: 'One identity',
    },
  },
  /** Authored as two lines — at 10px with wide tracking, letting this wrap
      on its own produced four. */
  bridge: ['One product', 'One Passport · five chapters'],
} as const;

/* ─────────────────────────────────────────────────────────────
   The five chapters

   Ordered by the life of the home, not by what is easiest to sell.
   Activation sits third because that is when it happens — between
   receiving the record and living with it.
   ───────────────────────────────────────────────────────────── */

export type Capability = {
  name: string;
  stage: string;
  /** Position in the rollout, shown as a stamp on the chapter. */
  rollout: string;
  /** Rendered as two lines; the break is authored, not left to the browser. */
  title: readonly [string, string];
  intro: string;
  /** What goes in, and what it becomes. Printed above the visual. */
  source: string;
  /** What the next chapter inherits from this one. The spine of the page. */
  carry: string;
};

export const capabilities: readonly Capability[] = [
  {
    name: 'Predictability',
    stage: 'Before close / Builder',
    rollout: 'Start here',
    title: ['See the risk.', 'Know what’s blocking the close.'],
    intro: 'Construction, financing, and title, read together.',
    source: 'Builder signals → one home identity',
    carry: 'The home’s milestones and source history become part of its record.',
  },
  {
    name: 'Home record',
    stage: 'At handoff / Builder → owner',
    rollout: 'Next',
    title: ['The details arrive', 'with the keys.'],
    intro: 'Plans, installed equipment, and warranties linked to the same home.',
    source: 'The same property identity → an organised handoff',
    carry: 'Property and equipment details help the owner activate the right services.',
  },
  {
    name: 'Activation',
    stage: 'Move-in / Homeowner',
    rollout: 'Then',
    title: ['From a set of keys', 'to a home that’s ready.'],
    intro: 'The home’s details guide service setup and registration.',
    source: 'Property + equipment records → relevant setup',
    carry: 'Activated services and registered equipment inform ongoing care.',
  },
  {
    name: 'Maintenance',
    stage: 'Everyday ownership / Homeowner',
    rollout: 'Ongoing',
    title: ['The home tells you', 'what needs attention.'],
    intro: 'Care guidance drawn from the equipment and history in the Passport.',
    source: 'Installed HVAC + its manual → a relevant reminder',
    carry: 'Service events enrich the record that travels with the property.',
  },
  {
    name: 'Ownership',
    stage: 'The next chapter / Same home',
    rollout: 'When the home sells',
    title: ['New owner.', 'Same home. Same history.'],
    intro: 'Relevant property records carry forward through authorised access.',
    source: 'Construction + equipment + service history → continuity',
    carry: 'A new owner adds the next chapter to the same Home Passport.',
  },
] as const;

/** The persistent record, shown beside every chapter. */
export const ledger = {
  eyebrow: 'Persistent property identity',
  id: 'Home 001',
  sub: 'The record stays with the property.',
  rows: ['Milestones', 'Home details', 'Services', 'Care history', 'Ownership'],
  footer: 'New activity enriches the same Passport.',
} as const;

export const walkthrough = {
  eyebrow: 'Follow home 001',
  title: 'Every chapter builds on the last.',
  lede:
    'The same home. The same Passport. Information captured once, put to work throughout its life.',
  label: 'Tessera / Home Passport',
  note: 'Interactive product walkthrough',
} as const;

/* ─────────────────────────────────────────────────────────────
   How the chapters are one thing
   ───────────────────────────────────────────────────────────── */

export const thread = {
  eyebrow: 'How it connects',
  title: 'The Passport is the thread.',
  lede: 'Data, intelligence, and services work around the same property identity.',
  steps: [
    {
      title: 'Connect the data.',
      body: 'Read authorised builder systems and link records to the home.',
    },
    {
      title: 'Put it to work.',
      body: 'Use the record to identify risk, guide setup, and support care.',
    },
    {
      title: 'Keep the history.',
      body: 'Carry each new event forward to the next decision — and the next owner.',
    },
  ],
} as const;

export const builders = {
  eyebrow: 'Starting with builders',
  title: ['A better close.', 'A better handoff.'],
  lede:
    'AI predictability is built into Home Passport. It reads across the systems you already use to surface closing risk — and explain what’s blocking the home.',
  cta: { label: 'Explore it on your homes', href: '/for-builders/' },
  steps: [
    {
      title: 'Connect your existing systems.',
      body: 'Read-only access. Your systems remain the source of truth.',
    },
    {
      title: 'See the blocking dependency.',
      body: 'Construction, financing, and title in one view of the path to close.',
    },
    {
      title: 'Carry the record beyond closing.',
      body: 'Build toward a useful handoff and a lasting homeowner relationship.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   Practical answers

   The questions a builder asks in the first meeting — what runs,
   what it touches, what happens to the data. Not the questions an
   investor asks.
   ───────────────────────────────────────────────────────────── */

export const answers = {
  eyebrow: 'A few practical answers',
  title: 'Clear from the beginning.',
  items: [
    {
      q: 'What can we use today?',
      a: 'Predictability, the home record, activation, and maintenance all run today. Predictability is where deployments start: source signals come into a property-level view and surface rule- and dependency-based findings. Calibrated prediction — a scored probability rather than a dependency finding — is the next milestone on that capability. Ownership transfer arrives with the first resale on a Passport.',
    },
    {
      q: 'Do we have to replace our systems?',
      a: 'No. Tessera connects through authorised, read-only access. Onboarding still includes access approval, security review, and data mapping; your existing systems stay exactly where they are.',
    },
    {
      q: 'What does activation mean?',
      a: 'Turning the home’s record into a move-in experience: helping the owner set up utilities, internet, warranties, and relevant services using information already linked to the property.',
    },
    {
      q: 'What happens when the home is sold?',
      a: 'The Passport stays with the property. Relevant home records carry forward through authorised access, while personal information and permissions remain controlled — so the next owner inherits the home’s history without inheriting the last owner’s data.',
    },
    {
      q: 'Who owns the data?',
      a: 'You do. We read through authorised, read-only connections and never write back, so your systems remain the record of truth. What we add is the link between them — and a verifiable fingerprint of each entry, so a home’s history can still be checked long after any one party stops answering the phone.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   Why Tessera

   A builder's version of "why you", not an investor's. No raise,
   no market sizing, no odds of winning — those are the data
   room's, and the data room is not linked from this site.
   What a builder actually wants to know: who built it, what it
   touches, and whether it already works.
   ───────────────────────────────────────────────────────────── */

export const why = {
  eyebrow: 'Why Tessera',
  title: 'We’ve run this from the inside.',
  lede:
    'Tessera is built by people who have worked in a top builder’s operations and strategic investment — who know what builder systems can and cannot do, and what it takes to read across them.',
  reasons: [
    {
      title: 'We know the stack because we ran it.',
      body: 'Our team came out of a national builder’s operations and investment side, advised by a former Lennar VP. We are not learning your workflows on your time.',
    },
    {
      title: 'Nothing in your systems changes.',
      body: 'Authorised, read-only connections. Your systems stay the record of truth, your teams take on no new data entry, and we never write back.',
    },
    {
      title: 'Adopting it costs access, not a project.',
      body: 'Onboarding is access approval, a security review, and data mapping — scoped work for your IT team, done once. Nobody in sales or the field learns a new tool.',
    },
  ],
  tenets: [
    {
      label: 'Our tenets / 01',
      title: 'Affordability for all.',
      body: 'Reduce the waste around a home, so more value reaches the people building and living in it.',
    },
    {
      label: 'Our tenets / 02',
      title: 'Ease to connect.',
      body: 'Work with the systems people already trust. Make every connection simpler to adopt and reuse.',
    },
  ],
} as const;

export const contact = {
  eyebrow: 'Let’s connect the next chapter',
  title: 'Start with your homes.',
  lede: 'See where Home Passport fits your systems, your team, and your homeowners.',
  primary: { label: 'Talk to Tessera', subject: 'Let’s talk Home Passport' },
  secondary: { label: 'See how it fits your stack', href: '/for-builders/' },
} as const;
