/**
 * Homepage copy — the product, for the customer.
 *
 * This page and the data room have different readers. The data room is for
 * investors. This page is for builders and partners deciding whether Home
 * Passport is the product they want.
 *
 * Lead with one thing: a digital identity for every home. Chapters are the
 * life of that Passport (record → activation → care → ownership) — not a
 * menu of separate products. Outbound CTAs on this page go to contact only.
 */

export const meta = {
  title: 'Tessera — a digital identity for every home',
  description:
    'Home Passport is a digital identity for every home — the record, services, and history that stay with the property from construction through ownership.',
} as const;

export const hero = {
  eyebrow: 'Meet Home Passport',
  headline: { lead: 'A digital identity for', emphasis: 'every home.' },
  lede:
    'One Passport for the home: builders hand it off, owners use it, providers act on it — so services and care follow the property, not a login that expires.',
  primary: { label: 'Explore Home Passport', href: '#product' },
  secondary: { label: 'Talk to our team', href: '#contact' },
  visual: {
    label: 'One home. A continuous record.',
    note: 'Illustrative home',
    passport: { brand: 'Tessera', title: 'Home Passport', serial: 'Home / 001', span: 'Construction → ownership' },
    record: {
      title: 'The home’s information, connected.',
      detail: 'Plans · systems · services · history',
    },
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   Passport chapters — life of the home, product-first order.
   ───────────────────────────────────────────────────────────── */

export type Capability = {
  name: string;
  stage: string;
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
    name: 'Home record',
    stage: 'At handoff / Builder → owner',
    title: ['Know what’s inside', 'the home.'],
    intro: 'Plans, installed equipment, and warranties linked to the same property identity.',
    source: 'Builder systems → one organised handoff',
    carry: 'Property and equipment details help the owner activate the right services.',
  },
  {
    name: 'Activation',
    stage: 'Move-in / Homeowner',
    title: ['From a set of keys', 'to a home that’s ready.'],
    intro:
      'Utilities, internet, warranties, and trusted providers — set up from what’s already in the Passport, on the same identity that later care and services use.',
    source: 'Property + equipment records → relevant setup',
    carry: 'Activated services and registered equipment inform ongoing care.',
  },
  {
    name: 'Care',
    stage: 'Everyday ownership / Homeowner',
    title: ['The home tells you', 'what needs attention.'],
    intro: 'Guidance drawn from the equipment and history already in the Passport.',
    source: 'Installed HVAC + its manual → a relevant reminder',
    carry: 'Service events enrich the record that travels with the property.',
  },
  {
    name: 'Ownership',
    stage: 'The next chapter / Same home',
    title: ['New owner.', 'Same home. Same history.'],
    intro: 'Relevant property records carry forward through authorised access — the Passport stays with the house.',
    source: 'Construction + equipment + service history → continuity',
    carry: 'A new owner adds the next chapter to the same Home Passport.',
  },
] as const;

/** The persistent record, shown beside every chapter. */
export const ledger = {
  eyebrow: 'Persistent property identity',
  id: 'Home 001',
  sub: 'The record stays with the property.',
  rows: ['Home details', 'Services', 'Care history', 'Ownership'],
  footer: 'New activity enriches the same Passport.',
} as const;

export const walkthrough = {
  eyebrow: 'Follow home 001',
  title: 'Every chapter builds on the last.',
  lede:
    'One home. One Passport. Turn the pages — handoff, move-in, care, and the next sale.',
  label: 'Tessera / Home Passport',
  /** Alternate full-page interactive experience — not a second pitch section. */
  story: {
    label: 'Play the full story',
    href: '/story/',
  },
} as const;

/** Full-page interactive story at /story/ — linked from the walkthrough, not a homepage section. */
export const story = {
  eyebrow: 'The life of a home',
  title: 'From first plan to the next owner.',
  lede:
    'An interactive journey through what Home Passport makes possible — construction, handoff, activation, care, and the next chapter.',
  src: '/data-room/future-story.html?embed=1&v=20260923c',
  iframeTitle: 'A home with a lifetime ahead',
} as const;

export const builders = {
  eyebrow: 'Starting with builders',
  title: ['A better handoff.', 'A lasting homeowner channel.'],
  lede:
    'Nationals already have homeowner apps. Home Passport is the property-bound record underneath — born from systems you already run, handed over at closing, and still useful for services long after warranty ends.',
  cta: { label: 'Talk to our team', href: '#contact' },
  steps: [
    {
      title: 'Connect once, read-only.',
      body: 'Your systems stay the source of truth — no rip-and-replace, no new field work.',
    },
    {
      title: 'Hand off a real Passport.',
      body: 'Plans, installed systems, and warranties on one property identity — not another binder to lose.',
    },
    {
      title: 'Stay useful after closing.',
      body: 'Owners and preferred providers keep acting on the same home record — activation, care, and beyond.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   Practical answers
   ───────────────────────────────────────────────────────────── */

export const answers = {
  eyebrow: 'A few practical answers',
  title: 'Clear from the beginning.',
  items: [
    {
      q: 'What is Home Passport?',
      a: 'A digital identity for the home: one continuous record of what was built and installed, used at handoff, move-in, care, and the next sale. It stays with the property — not stranded in a builder login or a forked homeowner project.',
    },
    {
      q: 'What can we use today?',
      a: 'The home record, activation, and care experiences are available to walk through today. Ownership transfer arrives with the first resale on a Passport. For how close-path views fit your stack, talk to us.',
    },
    {
      q: 'Do we have to replace our systems?',
      a: 'No. Tessera connects through authorised, read-only access. Your existing systems stay exactly where they are.',
    },
    {
      q: 'What does activation mean?',
      a: 'Turning the home’s record into a move-in experience: helping the owner set up utilities, internet, warranties, and relevant services using information already linked to the property — the foundation for a trusted service marketplace on that same identity.',
    },
    {
      q: 'What happens when the home is sold?',
      a: 'The Passport stays with the property. Relevant home records carry forward through authorised access, while personal information and permissions remain controlled — so the next owner inherits the home’s history without inheriting the last owner’s data.',
    },
    {
      q: 'Who owns the data?',
      a: 'You do. We read through authorised, read-only connections and never write back, so your systems remain the record of truth. What we add is the link between them — and a durable check that each entry can still be verified later, even if one party’s systems are gone.',
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────
   Why Tessera
   ───────────────────────────────────────────────────────────── */

export const why = {
  eyebrow: 'Why Tessera',
  title: 'We’ve run this from the inside.',
  lede:
    'Tessera is built by people who have worked in a top builder’s operations and strategic investment — who know what builder systems can and cannot do, and what it takes to read across them.',
  reasons: [
    {
      title: 'We know the stack because we ran it.',
      body: 'Our team came out of a national builder’s operations and investment side. We are not learning your workflows on your time.',
    },
    {
      title: 'Nothing in your systems changes.',
      body: 'Authorised, read-only connections. Your systems stay the record of truth, your teams take on no new data entry, and we never write back.',
    },
  ],
} as const;

export const contact = {
  eyebrow: 'Let’s connect the next chapter',
  title: 'Start with your homes.',
  lede: 'See where Home Passport fits your systems, your team, and your homeowners.',
  primary: { label: 'Talk to Tessera', subject: 'Let’s talk Home Passport' },
} as const;
