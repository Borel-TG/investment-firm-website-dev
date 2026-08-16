import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'

const pillars = [
  {
    title: 'Real Estate',
    image: '/images/real-estate.png',
    description:
      'Residential and commercial developments in fast-growing African cities — chosen for location, cash flow and long-term appreciation.',
    points: ['Rental income', 'Managed developments', 'Long-term appreciation'],
  },
  {
    title: 'Agriculture',
    image: '/images/agriculture.png',
    description:
      'Productive farmland and agribusiness projects that feed the continent while delivering resilient, inflation-hedged returns.',
    points: ['Farmland ownership', 'Agribusiness ventures', 'Real-world impact'],
  },
  {
    title: 'Technology',
    image: '/images/technology.png',
    description:
      'Early and growth-stage African technology companies solving real problems — backed with capital and hands-on guidance.',
    points: ['Growth-stage startups', 'Hands-on backing', 'High-growth upside'],
  },
]

export function Pillars() {
  return (
    <section id="what-we-do" className="section-viewport scroll-mt-16 border-t border-border bg-secondary/50">
      <div className="section-inner">
        <ScrollReveal className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-brand uppercase">
            Where we invest
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
            Three sectors we know deeply
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            We stay focused on what we understand. Every opportunity is
            researched, negotiated and managed by our team — not outsourced.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.12}>
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.title} investments by Topup Investments`}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-ink/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-brand-foreground">
                          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                            <path
                              d="M5 12l4.5 4.5L19 7"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
