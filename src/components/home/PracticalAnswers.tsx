import { answers } from '@/content/home';

/**
 * The four questions a builder asks in the first meeting. Native <details> so
 * they open without JavaScript and are findable by in-page search when closed
 * in browsers that support it.
 *
 * Product questions only. "Why this team" belongs to the data room.
 */
export function PracticalAnswers() {
  return (
    <section id="answers" className="shell pb-20 sm:pb-28" aria-labelledby="answers-title">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow-rule">{answers.eyebrow}</p>
          <h2 id="answers-title" className="mt-6 max-w-[13ch] font-display text-display-md text-ink">
            {answers.title}
          </h2>
        </div>

        <div className="space-y-px">
          {answers.items.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group border-t border-line/20 first:border-t-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[14px] text-ink marker:hidden">
                {item.q}
                <span
                  className="shrink-0 text-[18px] leading-none text-ink-3 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-prose pb-6 text-[13.5px] leading-relaxed text-ink-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
