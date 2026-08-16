import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'

const team = [
  {
    name: 'Amara Okonkwo',
    role: 'Founder & CEO',
    bio: 'Former banker with 18+ years in corporate finance and private wealth.',
    image: '/images/team-ceo.png',
    lead: true,
  },
  {
    name: 'David Mensah',
    role: 'Head of Real Estate',
    bio: 'Leads property sourcing, development and portfolio management.',
    image: '/images/team-1.png',
  },
  {
    name: 'Grace Adeyemi',
    role: 'Head of Agriculture',
    bio: 'Agribusiness specialist focused on productive farmland and yield.',
    image: '/images/team-2.png',
  },
  {
    name: 'Samuel Njoroge',
    role: 'Head of Technology',
    bio: 'Backs and mentors growth-stage founders across the continent.',
    image: '/images/team-3.png',
  },
  {
    name: 'Zainab Diallo',
    role: 'Head of Investor Relations',
    bio: 'Your point of contact — clear reporting and honest guidance.',
    image: '/images/team-4.png',
  },
]

export function Team() {
  return (
    <section id="team" className="section-viewport scroll-mt-16 border-t border-border bg-secondary/50">
      <div className="section-inner">
        <ScrollReveal className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-brand uppercase">
            The team
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
            Five experts, one standard
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            A small, senior team where every partner owns their sector — so you
            always speak to the person actually managing your money.
          </p>
        </ScrollReveal>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-5 md:gap-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.08} className="min-w-[200px] shrink-0 md:min-w-0">
              <article
                className={`card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md ${
                  member.lead ? 'ring-2 ring-brand/40' : ''
                }`}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Topup Investments`}
                    fill
                    sizes="(min-width: 768px) 20vw, 200px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="font-display text-sm font-bold text-foreground">
                      {member.name}
                    </h3>
                    {member.lead && (
                      <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-brand-foreground">
                        Founder
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-brand">{member.role}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
