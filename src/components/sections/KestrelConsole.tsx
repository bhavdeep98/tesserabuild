import { kestrel } from '@/content/site';

const c = kestrel.console;

/**
 * A product still, drawn in the brand's own language.
 *
 * Deliberately not a screenshot. The internal portal runs a different palette
 * and its captures are full of seed data — division names, invented savings
 * figures, a visible "no source data available" empty state. Publishing those
 * beside a section about candour would undo the section.
 *
 * What this shows is real: the scoring decomposition, the six parallel category
 * tracks with their true milestone counts, the staleness penalty, and a named
 * blocking milestone. The arithmetic reconciles. The address does not exist.
 */
export function KestrelConsole() {
  return (
    <figure className="mt-14">
      <div className="card overflow-hidden">
        {/* Window chrome — tesserae instead of traffic lights */}
        <div className="flex items-center gap-3 border-b border-line/[.10] bg-surface-2/70 px-5 py-3.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-[1px] bg-ink/20" />
            <span className="h-2 w-2 rounded-[1px] bg-ink/20" />
            <span className="h-2 w-2 rounded-[1px] bg-accent/70" />
          </span>
          <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-3">
            Kestrel · Home detail
          </p>
        </div>

        <div className="px-6 py-7 sm:px-8">
          {/* Identity and score */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h3 className="font-display text-display-sm text-ink">{c.address}</h3>
              <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5">
                {c.meta.map((m) => (
                  <div key={m.label} className="flex items-baseline gap-2">
                    <dt className="text-[11.5px] uppercase tracking-[0.1em] text-ink-3">
                      {m.label}
                    </dt>
                    <dd className="text-[13px] font-medium text-ink-2">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex items-center gap-4 rounded-card border border-caution/30 bg-caution/[0.06] px-5 py-3.5">
              <div>
                <p className="tabular font-display text-[2.5rem] font-extrabold leading-none tracking-tight text-ink">
                  {c.score}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ink-3">
                  Confidence
                </p>
              </div>
              <span className="rounded-pill bg-caution/15 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-caution">
                {c.band}
              </span>
            </div>
          </div>

          {/* Decomposition. This table is the argument: the score is not a
              black box, it is arithmetic anyone can audit. */}
          <div className="mt-9">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-3">
              How the score is built
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <caption className="sr-only">
                  Closing confidence decomposition by transaction category
                </caption>
                <thead>
                  <tr className="border-b border-line/[.12]">
                    <th scope="col" className="pb-2.5 pr-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-3">
                      Category
                    </th>
                    <th scope="col" className="pb-2.5 pr-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-3">
                      Milestones
                    </th>
                    <th scope="col" className="w-[34%] pb-2.5 pr-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-3">
                      Complete
                    </th>
                    <th scope="col" className="pb-2.5 pr-4 text-right text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-3">
                      Weight
                    </th>
                    <th scope="col" className="pb-2.5 text-right text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-3">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.categories.map((cat) => {
                    const pct = Math.round((cat.done / cat.total) * 100);
                    // Same bands the escalation engine uses: under 40% is
                    // critical, under 70% is at risk, above that is on track.
                    const tone =
                      pct < 40 ? 'bg-critical' : pct < 70 ? 'bg-caution' : 'bg-healthy';
                    return (
                      <tr key={cat.name} className="border-b border-line/[.06]">
                        <td className="py-3 pr-4 text-[13.5px] font-medium text-ink">{cat.name}</td>
                        <td className="tabular py-3 pr-4 text-[13px] text-ink-3">
                          {cat.done}/{cat.total}
                        </td>
                        <td className="py-3 pr-4">
                          <span className="flex items-center gap-3">
                            <span
                              className="relative h-1.5 flex-1 overflow-hidden rounded-pill bg-ink/[.09]"
                              aria-hidden="true"
                            >
                              <span
                                className={`absolute inset-y-0 left-0 rounded-pill ${tone}`}
                                style={{ width: `${pct}%` }}
                              />
                            </span>
                            <span className="tabular w-9 text-right text-[12.5px] text-ink-2">
                              {pct}%
                            </span>
                          </span>
                        </td>
                        <td className="tabular py-3 pr-4 text-right text-[13px] text-ink-3">
                          {Math.round(cat.weight * 100)}%
                        </td>
                        <td className="tabular py-3 text-right text-[13.5px] font-semibold text-ink">
                          {cat.contribution.toFixed(1)}
                          <span className="ml-1 text-[11px] font-normal text-ink-3">
                            / {Math.round(cat.weight * 100)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="border-b border-line/[.06]">
                    <td colSpan={4} className="py-3 pr-4 text-[13px] text-ink-2">
                      Weighted subtotal
                    </td>
                    <td className="tabular py-3 text-right text-[13.5px] font-semibold text-ink">
                      {c.subtotal.toFixed(1)}
                    </td>
                  </tr>
                  <tr className="border-b border-line/[.06]">
                    <td colSpan={4} className="py-3 pr-4 text-[13px] text-critical">
                      {c.penalty.label}
                    </td>
                    <td className="tabular py-3 text-right text-[13.5px] font-semibold text-critical">
                      {c.penalty.value.toFixed(1)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="pt-3.5 pr-4 text-[13.5px] font-bold text-ink">
                      Closing confidence
                    </td>
                    <td className="tabular pt-3.5 text-right font-display text-[17px] font-extrabold text-accent">
                      {c.score}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* The finding */}
          <div className="mt-8 rounded-card border border-line/[.12] bg-surface-2/50 px-5 py-5 sm:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-3">
                {c.blocking.label}
              </p>
              <span className="rounded-pill bg-critical/12 px-2.5 py-1 text-[11.5px] font-semibold text-critical">
                {c.blocking.overdue}
              </span>
            </div>
            <p className="mt-3 font-display text-[18px] font-bold text-ink">
              {c.blocking.milestone}
            </p>
            <p className="mt-3 max-w-prose text-[14px] leading-relaxed text-ink-2">
              {c.blocking.body}
            </p>
            <p className="mt-4 border-t border-line/[.08] pt-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-accent">
              {c.blocking.earliest}
            </p>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-[12.5px] text-ink-3">
        {c.label}. The address and values are invented; the scoring arithmetic,
        milestone counts and category weights are the ones the platform actually uses.
      </figcaption>
    </figure>
  );
}
