/**
 * Site-wide copy: the things every page shares.
 *
 * Page copy lives beside its page — home.ts, for-builders.ts, why-we-win.ts.
 * This file holds only what the header and footer need.
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
  descriptor: 'A digital identity for every home',
  email: 'sales@tesserabuild.ai',
} as const;

/**
 * Primary navigation.
 *
 * The investor data room is deliberately absent — from here, from the footer,
 * and from every CTA. This site is read by builders; the data room is shared
 * with investors by link, not discovered by a customer browsing the nav.
 */
export const nav = [
  { label: 'Home Passport', href: '/#product' },
  { label: 'For builders', href: '/for-builders/' },
  { label: 'Why Tessera', href: '/why-we-win/' },
] as const;

export const cta = {
  primary: { label: 'Let’s talk', href: '/#contact' },
  secondary: { label: 'Home Passport', href: '/#product' },
} as const;
