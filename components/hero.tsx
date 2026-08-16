import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { Typewriter } from '@/components/typewriter'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="section-viewport relative overflow-hidden hero-glow">
      <div className="section-inner">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-foreground uppercase shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              Boutique investment firm
            </span>

            <h1 className="animate-fade-up-delay-1 mt-5 min-h-[2.6em] font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-balance text-foreground sm:min-h-[2.4em] sm:text-4xl lg:text-5xl">
              <Typewriter />
            </h1>

            <p className="animate-fade-up-delay-2 mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              Founded by a former banker, Topup Investments puts capital to work
              in real estate, agriculture and technology across Africa — and helps
              you invest with the same discipline.
            </p>

            <div className="animate-fade-up-delay-3 mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-11 rounded-full bg-brand-foreground px-7 text-base font-semibold text-brand shadow-lg shadow-brand-ink/20 transition-transform hover:scale-[1.02] hover:bg-brand-foreground/90 sm:h-12',
                )}
              >
                Start investing
              </a>
              <a
                href="#what-we-do"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'h-11 rounded-full border-brand-foreground/20 bg-white/60 px-7 text-base font-semibold backdrop-blur transition-transform hover:scale-[1.02] sm:h-12',
                )}
              >
                See where we invest
              </a>
            </div>

            <dl className="mt-8 grid w-full max-w-md grid-cols-3 gap-4 border-t border-border/80 pt-6">
              {[
                { value: '18+', label: 'Years in finance' },
                { value: '3', label: 'Core sectors' },
                { value: '120+', label: 'Investors backed' },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden lg:block">
            <div className="animate-float relative aspect-4/5 overflow-hidden rounded-3xl border border-brand/20 bg-muted shadow-2xl shadow-brand-ink/15">
              <Image
                src="/images/hero.png"
                alt="Topup Investments founder in a modern office overlooking a city skyline"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-ink/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 max-w-[210px] rounded-2xl border border-brand/30 bg-white/95 p-4 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold text-foreground">Trusted stewardship</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Every rand is managed with a banker&apos;s discipline and a
                partner&apos;s care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
    </section>
  )
}
