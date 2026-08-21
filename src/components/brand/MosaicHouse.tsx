/**
 * The brand metaphor, drawn.
 *
 * A tessera is one tile of a mosaic. Loose tiles drift in from the left; the
 * rest are already laid into the silhouette of a home. Running through them,
 * a single unbroken line of green tiles climbs from the ground to the apex —
 * the critical path, which is literally what the graph engine computes.
 *
 * Authored on an explicit tile grid rather than by sampling a polygon, so the
 * roofline stair-steps cleanly and nothing looks accidental. Vector, not the
 * 867 KB hero raster, whose white house would vanish on the light theme.
 */

const TILE = 18;
const PITCH = 21;
const COLS = 13;

/** Inclusive [startCol, endCol] per row. Rows 0–5 are the roof, 6–10 the body. */
const ROWS: ReadonlyArray<readonly [number, number]> = [
  [6, 6],
  [5, 7],
  [4, 8],
  [3, 9],
  [2, 10],
  [1, 11],
  [0, 12], // eave: the body is wider than the roof's last course
  [0, 12],
  [0, 12],
  [0, 12],
  [0, 12],
];

/** Doorway. Left untiled so the silhouette reads as a home, not a block. */
const DOOR = { col0: 5, col1: 7, row0: 9, row1: 10 };

/**
 * The critical path: an unbroken chain of tiles from the lower-left corner to
 * the apex. Hand-authored so it always reads as a route someone chose.
 */
const PATH: ReadonlyArray<readonly [number, number]> = [
  [0, 10],
  [1, 10],
  [1, 9],
  [2, 9],
  [3, 9],
  [3, 8],
  [4, 8],
  [4, 7],
  [5, 7],
  [5, 6],
  [6, 6],
  [6, 5],
  [6, 4],
  [6, 3],
  [6, 2],
  [6, 1],
  [6, 0],
];

const PATH_KEYS = new Set(PATH.map(([c, r]) => `${c}:${r}`));

const GRID_W = COLS * PITCH - (PITCH - TILE);
const GRID_H = ROWS.length * PITCH - (PITCH - TILE);

/** Deterministic hash in [0, 1) — variation without breaking SSR hydration. */
function hash(a: number, b: number): number {
  const n = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

type Tile = {
  key: string;
  x: number;
  y: number;
  size: number;
  onPath: boolean;
  delay: number;
  opacity: number;
};

function buildStructure(): Tile[] {
  const tiles: Tile[] = [];

  ROWS.forEach(([start, end], row) => {
    for (let col = start; col <= end; col += 1) {
      const inDoor =
        col >= DOOR.col0 && col <= DOOR.col1 && row >= DOOR.row0 && row <= DOOR.row1;
      if (inDoor) continue;

      const onPath = PATH_KEYS.has(`${col}:${row}`);
      const h = hash(col, row);

      tiles.push({
        key: `s-${col}-${row}`,
        x: col * PITCH,
        y: row * PITCH,
        size: TILE,
        onPath,
        // Resolve bottom-up and left-to-right, so the picture assembles from
        // the ground rather than appearing all at once.
        delay: 0.2 + (ROWS.length - row) * 0.045 + col * 0.012,
        opacity: onPath ? 1 : 0.2 + h * 0.24,
      });
    }
  });

  return tiles;
}

function buildLoose(): Tile[] {
  const tiles: Tile[] = [];
  for (let i = 0; i < 13; i += 1) {
    const h1 = hash(i, 91);
    const h2 = hash(i, 47);
    const h3 = hash(i, 13);
    const size = 6 + Math.round(h3 * 4) * 3;
    tiles.push({
      key: `l-${i}`,
      x: -74 + h1 * 62,
      y: 18 + h2 * 196,
      size,
      onPath: h3 > 0.78,
      delay: h1 * 0.55,
      opacity: 0.12 + h2 * 0.3,
    });
  }
  return tiles;
}

const structure = buildStructure();
const loose = buildLoose();

export function MosaicHouse({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`-80 -8 ${GRID_W + 96} ${GRID_H + 20}`}
      className={className}
      fill="none"
      role="img"
      aria-label="A mosaic of tiles forming a home, with a single unbroken line of green tiles tracing the critical path from the ground to the roof apex."
    >
      {loose.map((t) => (
        <rect
          key={t.key}
          x={t.x}
          y={t.y}
          width={t.size}
          height={t.size}
          rx="1.5"
          className={`animate-tile-settle ${t.onPath ? 'fill-accent' : 'fill-ink'}`}
          style={{
            opacity: t.opacity,
            animationDelay: `${t.delay}s`,
            ['--tx' as string]: '-22px',
            ['--ty' as string]: '12px',
          }}
        />
      ))}

      {structure.map((t) => (
        <rect
          key={t.key}
          x={t.x}
          y={t.y}
          width={t.size}
          height={t.size}
          rx="2"
          className={`animate-tile-settle ${t.onPath ? 'fill-accent' : 'fill-ink'}`}
          style={{
            opacity: t.opacity,
            animationDelay: `${t.delay}s`,
            ['--tx' as string]: '-12px',
            ['--ty' as string]: '7px',
            filter: t.onPath
              ? 'drop-shadow(0 0 7px rgb(var(--c-accent) / 0.55))'
              : undefined,
          }}
        />
      ))}
    </svg>
  );
}
