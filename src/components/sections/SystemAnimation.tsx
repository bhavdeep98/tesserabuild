import { gap } from '@/content/site';

/**
 * The system, animated. One looping scene tells the whole story in the
 * brand's own metaphors:
 *
 *   Connect    Five silos blink on their own clocks — competent, unaware of
 *              each other. Each emits signals: small tesserae rising out of
 *              the system that produced them.
 *   Correlate  The tiles land in the Kestrel layer, which hovers above the
 *              stack (literally — it never touches the silos). Inside, they
 *              are already laid into a dependency graph per home, and the
 *              critical path draws itself through the mortgage track.
 *   Act        The blocking milestone pulses, the score surfaces with the
 *              date slip, and a routed escalation names an owner.
 *
 * Everything is CSS-driven on a 12s master cycle, so the global
 * prefers-reduced-motion rule collapses it to a single legible frame: the
 * base (unanimated) styles are authored as the completed diagram — path
 * drawn, score shown, escalation visible — and only the transient signal
 * tiles rest at opacity 0. No JavaScript runs.
 *
 * The numbers shown are the same illustrative home as the Kestrel console
 * (61, at risk, clear-to-close 9 days overdue, Jul 11 → Jul 24) — invented
 * address, real arithmetic.
 */

const SILO_W = 152;
const SILO_Y = 470;

/** Silo x-centres. The five legs come from the same content as the chain. */
const SILO_CX = [104, 282, 460, 638, 816];

/** Per-silo heartbeat — deliberately incommensurate periods, so they never sync. */
const BLINK = [
  { dur: 2.3, delay: -0.6 },
  { dur: 3.1, delay: -1.9 },
  { dur: 2.7, delay: -0.2 },
  { dur: 3.5, delay: -2.4 },
  { dur: 2.0, delay: -1.1 },
];

/** Signal stream per channel: duration plus two staggered emitters. */
const STREAM = [3.2, 2.7, 3.6, 2.9, 3.3];

type NodeKind = 'done' | 'blocked' | 'gate' | 'pending';

const NODES: ReadonlyArray<{
  x: number;
  y: number;
  kind: NodeKind;
  label?: string;
  labelY?: number;
}> = [
  { x: 150, y: 258, kind: 'done', label: 'Contract', labelY: 284 },
  { x: 240, y: 226, kind: 'done' },
  { x: 330, y: 226, kind: 'done' },
  { x: 420, y: 226, kind: 'done' },
  { x: 240, y: 290, kind: 'done' },
  { x: 330, y: 290, kind: 'done' },
  { x: 420, y: 290, kind: 'blocked' },
  { x: 510, y: 258, kind: 'gate', label: 'Clear to close', labelY: 234 },
  { x: 600, y: 258, kind: 'pending' },
  { x: 690, y: 258, kind: 'pending', label: 'Close · Jul 11', labelY: 284 },
];

const EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 7],
  [0, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
];

/** The critical path runs through the mortgage track — that is the point. */
const CRITICAL = 'M150,258 L240,290 L330,290 L420,290 L510,258 L600,258 L690,258';

const NODE_FILL: Record<NodeKind, string> = {
  done: 'fill-accent',
  blocked: 'fill-critical',
  gate: 'fill-caution/20 stroke-caution',
  pending: 'fill-transparent stroke-ink-3',
};

export function SystemAnimation() {
  return (
    <figure className="mt-14">
      <style>{`
        @keyframes sysviz-hover { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        @keyframes sysviz-bird { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes sysviz-cone { 0%, 100% { opacity: .45 } 50% { opacity: 1 } }
        @keyframes sysviz-blink { 0%, 100% { opacity: .18 } 50% { opacity: 1 } }
        @keyframes sysviz-sig {
          0% { transform: translateY(0); opacity: 0 }
          15% { opacity: .95 }
          80% { opacity: .95 }
          100% { transform: translateY(-104px); opacity: 0 }
        }
        @keyframes sysviz-path {
          0% { stroke-dashoffset: 560; opacity: 0 }
          6% { stroke-dashoffset: 560; opacity: 1 }
          42% { stroke-dashoffset: 0 }
          90% { stroke-dashoffset: 0; opacity: 1 }
          97%, 100% { stroke-dashoffset: 0; opacity: 0 }
        }
        @keyframes sysviz-halo {
          0%, 30% { opacity: 0 }
          38% { opacity: 1 }
          48% { opacity: .4 }
          58% { opacity: 1 }
          68% { opacity: .4 }
          78% { opacity: 1 }
          96%, 100% { opacity: 0 }
        }
        @keyframes sysviz-score {
          0%, 44% { opacity: 0; transform: translateY(5px) }
          52% { opacity: 1; transform: none }
          93% { opacity: 1; transform: none }
          98%, 100% { opacity: 0; transform: none }
        }
        @keyframes sysviz-pill {
          0%, 58% { opacity: 0; transform: translateX(-10px) }
          66% { opacity: 1; transform: none }
          93% { opacity: 1; transform: none }
          98%, 100% { opacity: 0; transform: none }
        }
        .sysviz-hover { animation: sysviz-hover 9s ease-in-out infinite }
        .sysviz-bird { animation: sysviz-bird 7s ease-in-out infinite }
        .sysviz-cone { opacity: .45; animation: sysviz-cone 7s ease-in-out infinite }
        .sysviz-dot { animation: sysviz-blink var(--d) ease-in-out infinite; animation-delay: var(--dl) }
        .sysviz-sig { opacity: 0; animation: sysviz-sig var(--d) cubic-bezier(.4, 0, .6, 1) infinite; animation-delay: var(--dl) }
        .sysviz-path { stroke-dasharray: 560; animation: sysviz-path 12s linear infinite }
        .sysviz-halo { opacity: .8; animation: sysviz-halo 12s ease-in-out infinite }
        .sysviz-score { animation: sysviz-score 12s cubic-bezier(0.16, 1, 0.3, 1) infinite }
        .sysviz-pill { animation: sysviz-pill 12s cubic-bezier(0.16, 1, 0.3, 1) infinite }
      `}</style>

      <div className="card overflow-x-auto">
        <svg
          viewBox="0 0 920 552"
          className="h-auto w-full min-w-[620px]"
          role="img"
          aria-label="Animated diagram of the Tessera system. Five siloed systems — sales, construction, mortgage, title and finance — blink independently at the bottom, each emitting signal tiles that rise into the Kestrel layer hovering above them. Inside the layer the signals assemble into a dependency graph for one home: construction is nearly done, the mortgage track is behind, and the critical path runs through it to a blocked clear-to-close milestone. A score of 61, at risk, appears with the close date slipping from July 11 to July 24, and an escalation is routed to mortgage operations naming the milestone as nine days overdue."
        >
          <defs>
            <linearGradient id="sysviz-cone-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" style={{ stopColor: 'rgb(var(--c-accent))' }} stopOpacity="0.32" />
              <stop offset="1" style={{ stopColor: 'rgb(var(--c-accent))' }} stopOpacity="0" />
            </linearGradient>
            <mask id="sysviz-kestrel-m">
              <rect width="64" height="64" fill="white" />
              <path
                fill="black"
                d="M 26 15 C 22 16, 19 19, 18 23 C 17 27, 18 31, 20 34 C 22 37, 25 39, 29 40 C 32 41, 35 41, 37 42 C 39 43, 40 44, 40 46 L 38 45 C 36 44, 33 43, 30 43 C 26 43, 22 41, 19 38 C 16 34, 14 29, 15 24 C 16 19, 19 15, 24 13 C 29 11, 34 12, 38 15 C 40 17, 42 19, 43 21 L 48 17 L 46 22 C 45 25, 42 27, 39 27 C 36 27, 34 25, 33 23 C 32 20, 30 17, 28 16 C 27 15, 26 15, 26 15 Z"
              />
              <circle cx="27" cy="25" r="3.2" fill="black" />
            </mask>
          </defs>

          {/* ── The kestrel, hovering above everything, watching ── */}
          <g className="sysviz-bird">
            <polygon
              points="460,96 118,148 802,148"
              fill="url(#sysviz-cone-g)"
              className="sysviz-cone"
            />
            <g transform="translate(437.6 52) scale(0.7)">
              <rect
                x="4"
                y="4"
                width="56"
                height="56"
                rx="13"
                className="fill-accent"
                mask="url(#sysviz-kestrel-m)"
              />
            </g>
          </g>

          {/* ── The Kestrel layer: above the stack, never inside it ── */}
          <g className="sysviz-hover">
            <rect
              x="88"
              y="140"
              width="744"
              height="214"
              rx="16"
              className="fill-surface-2/80 stroke-accent/25"
            />

            <text x="116" y="174" fontSize="12" fontWeight="700" letterSpacing="2.5" className="fill-accent">
              KESTREL
            </text>
            <text x="116" y="193" fontSize="11.5" className="fill-ink-3">
              Reads everything · writes nothing · one timeline per home
            </text>

            {/* Score — appears once the graph has been read together */}
            <g className="sysviz-score">
              <rect x="680" y="158" width="132" height="48" rx="10" className="fill-caution/10 stroke-caution/40" />
              <text x="706" y="190" fontSize="26" fontWeight="700" textAnchor="middle" className="fill-caution font-mono tabular">
                61
              </text>
              <text x="730" y="178" fontSize="10" fontWeight="700" letterSpacing="1" className="fill-caution">
                AT RISK
              </text>
              <text x="730" y="196" fontSize="9.5" className="fill-ink-3 font-mono">
                Jul 11 → Jul 24
              </text>
            </g>

            {/* Track captions */}
            <text x="233" y="208" fontSize="9.5" letterSpacing="1" className="fill-ink-3">
              CONSTRUCTION · 11 / 12
            </text>
            <text x="233" y="314" fontSize="9.5" letterSpacing="1" className="fill-ink-3">
              MORTGAGE · 3 / 10
            </text>

            {/* Dependency edges */}
            {EDGES.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                className="stroke-line/20"
              />
            ))}

            {/* Critical path, redrawn each cycle as the signals resolve */}
            <path
              d={CRITICAL}
              className="sysviz-path stroke-accent"
              fill="none"
              strokeWidth="2"
              strokeLinejoin="round"
              style={{ filter: 'drop-shadow(0 0 6px rgb(var(--c-accent) / 0.5))' }}
            />

            {/* The blocking milestone announces itself */}
            <rect x="409" y="279" width="22" height="22" rx="5" className="sysviz-halo fill-critical/20 stroke-critical/60" />

            {/* Milestones, each a tessera */}
            {NODES.map((n) => (
              <g key={`${n.x}-${n.y}`}>
                <rect x={n.x - 7} y={n.y - 7} width="14" height="14" rx="3" className={NODE_FILL[n.kind]} />
                {n.label ? (
                  <text
                    x={n.x}
                    y={n.labelY}
                    fontSize="11"
                    textAnchor="middle"
                    fontWeight={n.kind === 'gate' ? 600 : 400}
                    className={n.kind === 'gate' ? 'fill-caution' : 'fill-ink-3'}
                  >
                    {n.label}
                  </text>
                ) : null}
              </g>
            ))}

            {/* Escalation — a finding is worthless without an owner */}
            <g className="sysviz-pill">
              <rect x="112" y="322" width="400" height="26" rx="13" className="fill-accent/[0.06] stroke-accent/30" />
              <text x="128" y="339" fontSize="11.5">
                <tspan fontWeight="700" className="fill-caution">
                  Escalated
                </tspan>
                <tspan className="fill-ink-2"> → Mortgage ops · Clear to close · 9 days overdue</tspan>
              </text>
            </g>
          </g>

          {/* ── Signals rising out of the silos ── */}
          {SILO_CX.map((cx, i) => (
            <g key={cx}>
              <line
                x1={cx}
                y1="362"
                x2={cx}
                y2="464"
                className="stroke-line/15"
                strokeDasharray="2 5"
              />
              {[0, 1].map((j) => (
                <rect
                  key={j}
                  x={cx - 4}
                  y="454"
                  width="8"
                  height="8"
                  rx="1.5"
                  className="sysviz-sig fill-accent"
                  style={{
                    ['--d' as string]: `${STREAM[i]}s`,
                    ['--dl' as string]: `${-(i * 0.7) - (j * STREAM[i]) / 2}s`,
                  }}
                />
              ))}
            </g>
          ))}

          {/* ── The silos: five competent systems, none seeing the whole ── */}
          {gap.chain.map((leg, i) => {
            const cx = SILO_CX[i];
            return (
              <g key={leg.name}>
                <rect x={cx - SILO_W / 2} y={SILO_Y} width={SILO_W} height="64" rx="10" className="fill-surface stroke-line/25" />
                <circle
                  cx={cx + 60}
                  cy={SILO_Y + 16}
                  r="3"
                  className="sysviz-dot fill-accent"
                  style={{
                    ['--d' as string]: `${BLINK[i].dur}s`,
                    ['--dl' as string]: `${BLINK[i].delay}s`,
                  }}
                />
                <text x={cx} y={SILO_Y + 27} fontSize="13" fontWeight="600" textAnchor="middle" className="fill-ink">
                  {leg.name}
                </text>
                <text x={cx} y={SILO_Y + 46} fontSize="10.5" textAnchor="middle" className="fill-ink-3 font-mono">
                  {leg.system}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption className="mt-4 max-w-prose text-[13px] leading-relaxed text-ink-3">
        Illustrative home, not customer data — the same worked example as everywhere else on
        this site. Five systems, each blinking to its own clock. Kestrel hovers above them,
        reading and never writing, assembles their signals into one timeline per home, and
        names the milestone that is actually blocking the close.
      </figcaption>
    </figure>
  );
}
