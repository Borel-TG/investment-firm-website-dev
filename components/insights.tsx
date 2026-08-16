import { ScrollReveal } from '@/components/scroll-reveal'

const articles = [
  {
    category: 'Agriculture',
    title: "Why farmland is one of Africa's best inflation hedges",
    readTime: '6 min read',
  },
  {
    category: 'Real Estate',
    title: 'How we spot a rental property that actually cash-flows',
    readTime: '5 min read',
  },
  {
    category: 'Technology',
    title: 'Investing in African tech without chasing the hype',
    readTime: '7 min read',
  },
]

export function Insights() {
  return (
    <section id="insights" className="section-viewport scroll-mt-16">
      <div className="section-inner">
        <ScrollReveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-wide text-brand uppercase">
              Insights
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
              Learn how we think about investing
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              Plain-spoken articles on real estate, agriculture and technology —
              the same thinking we apply to our own capital.
            </p>
          </div>
          <a
            href="#insights"
            className="shrink-0 text-sm font-semibold text-brand transition-colors hover:text-brand-foreground"
          >
            View all articles →
          </a>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {articles.map((article, index) => (
            <ScrollReveal key={article.title} delay={index * 0.1}>
              <a
                href="#insights"
                className="card-lift group flex h-full flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-md"
              >
                <span className="inline-flex w-fit rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand-foreground">
                  {article.category}
                </span>
                <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground text-balance transition-colors group-hover:text-brand sm:text-lg">
                  {article.title}
                </h3>
                <span className="mt-auto pt-4 text-xs font-medium text-muted-foreground">
                  {article.readTime}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
