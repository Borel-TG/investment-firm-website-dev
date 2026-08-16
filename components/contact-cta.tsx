import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

export function ContactCta() {
  return (
    <section id="contact" className="section-viewport scroll-mt-16 bg-brand-ink text-white">
      <div className="section-inner">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal direction="left">
            <h2 className="font-display text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl lg:text-4xl">
              Let&apos;s talk about your money
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/80 text-pretty sm:text-lg">
              Tell us a little about your goals. A member of our team will reach
              out for a no-pressure conversation about how — and where — you could
              invest with us.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5 text-sm text-white/90">
              {[
                'No obligation, no jargon',
                'Speak directly with a sector lead',
                'Your details stay private',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <form className="rounded-2xl bg-background p-5 text-foreground shadow-2xl shadow-black/20 sm:p-6">
              <div className="grid gap-3">
                <div className="grid gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-10 rounded-xl border border-input bg-card px-3.5 text-sm outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-10 rounded-xl border border-input bg-card px-3.5 text-sm outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="interest" className="text-sm font-medium text-foreground">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    className="h-10 rounded-xl border border-input bg-card px-3.5 text-sm outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="" disabled>
                      Select a sector
                    </option>
                    <option>Real Estate</option>
                    <option>Agriculture</option>
                    <option>Technology</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    placeholder="A little about your goals"
                    className="rounded-xl border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-shadow focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="mt-1 h-11 w-full rounded-xl bg-brand text-base font-semibold text-brand-foreground transition-transform hover:scale-[1.01] hover:bg-brand/90"
                >
                  Request a conversation
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
