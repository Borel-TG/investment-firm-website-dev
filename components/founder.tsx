import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'

const principles = [
  {
    title: "A banker's discipline",
    body: 'Every deal is stress-tested the way a credit committee would — before a cent is committed.',
  },
  {
    title: 'Skin in the game',
    body: 'We invest our own capital alongside yours. If it is not good enough for us, we do not offer it to you.',
  },
  {
    title: 'Real assets, real returns',
    body: 'We favour tangible, productive assets over hype — steady compounding beats speculation.',
  },
]

export function Founder() {
  return (
    <section id="approach" className="section-viewport scroll-mt-16">
      <div className="section-inner">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal direction="left" className="relative order-last lg:order-first">
            <div className="relative mx-auto aspect-square max-h-[min(42vh,360px)] w-full max-w-sm overflow-hidden rounded-3xl border border-brand/20 bg-muted shadow-2xl shadow-brand-ink/10 lg:max-w-none">
              <Image
                src="/images/team-ceo.png"
                alt="Founder and CEO of Topup Investments"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <span className="text-sm font-semibold tracking-wide text-brand uppercase">
              Our approach
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
              Led by a former banker who invests her own money
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              After nearly two decades in banking, our founder built a personal
              portfolio across real estate, agriculture and technology — then
              began helping friends and family do the same. Topup Investments is
              that expertise, made into a firm.
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {principles.map((item, index) => (
                <ScrollReveal key={item.title} delay={0.1 + index * 0.1}>
                  <li className="flex gap-3 rounded-2xl border border-border/60 bg-white/70 p-3 shadow-sm backdrop-blur">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path
                          d="M12 3l7 3v5c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
