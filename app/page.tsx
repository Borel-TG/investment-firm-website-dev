import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Pillars } from '@/components/pillars'
import { Founder } from '@/components/founder'
import { Team } from '@/components/team'
import { Insights } from '@/components/insights'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <Pillars />
        <Founder />
        <Team />
        <Insights />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
