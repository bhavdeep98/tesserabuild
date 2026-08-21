import Image from 'next/image';

import { Section } from '@/components/ui/Section';
import { team } from '@/content/site';

export function Team() {
  return (
    <Section id="team" eyebrow={team.eyebrow} title={team.title} lede={team.lede}>
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {team.people.map((person) => (
          <article key={person.name} className="card card-hover flex flex-col overflow-hidden">
            {/* Portrait — black bg knocked out via mix-blend-mode: screen.
                Container is dark in both themes so screen blend works correctly. */}
            <div className="relative flex justify-center rounded-t-card bg-[#0a0a0a] pt-6">
              <div className="founder-portrait relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
                <Image
                  src={person.image}
                  alt={`Portrait of ${person.name}`}
                  fill
                  className="object-contain object-bottom"
                  sizes="320px"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col px-7 pb-8 pt-6">
              <div>
                <h3 className="font-display text-display-sm leading-tight text-ink">
                  {person.name}
                </h3>
                <p className="mt-1.5 text-[13.5px] font-semibold text-accent">{person.role}</p>
                <p className="mt-0.5 text-[13px] text-ink-3">{person.former}</p>
              </div>

              <p className="mt-6 flex-1 text-[14.5px] leading-relaxed text-ink-2">
                {person.body}
              </p>

              <p className="mt-7 border-t border-line/[.10] pt-6 font-display text-[15px] font-bold leading-snug text-ink">
                {person.pull}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 max-w-prose text-[14.5px] leading-relaxed text-ink-3">{team.bench}</p>
    </Section>
  );
}
