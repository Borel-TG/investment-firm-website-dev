import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'What we do', href: '#what-we-do' },
  { label: 'Our approach', href: '#approach' },
  { label: 'Team', href: '#team' },
  { label: 'Insights', href: '#insights' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-brand shadow-md shadow-brand-ink/10">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Topup Investments home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-foreground text-brand">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
              <path
                d="M4 15l5-5 4 3 6-7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 6h4v4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-brand-foreground">
            Topup Investments
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-brand-foreground/75 transition-colors hover:text-brand-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={cn(
            buttonVariants(),
            'rounded-full bg-brand-foreground px-5 font-semibold text-brand hover:bg-brand-foreground/90',
          )}
        >
          Talk to us
        </a>
      </div>
    </header>
  )
}
