const footerLinks = [
  { label: 'What we do', href: '#what-we-do' },
  { label: 'Our approach', href: '#approach' },
  { label: 'Team', href: '#team' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-foreground text-brand">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
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
            <span className="font-display text-base font-bold tracking-tight">
              Topup Investments
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-brand/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t border-brand/20 pt-4">
          <p className="text-xs leading-relaxed text-brand/70">
            &copy; {new Date().getFullYear()} Topup Investments. All rights
            reserved. Investing involves risk, including the possible loss of
            capital. Past performance is not a guarantee of future results.
          </p>
        </div>
      </div>
    </footer>
  )
}
