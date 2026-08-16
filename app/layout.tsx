import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://topupinvestments.com'),
  title: {
    default: 'Topup Investments — Real Estate, Agriculture & Technology',
    template: '%s | Topup Investments',
  },
  description:
    'Topup Investments is a boutique African investment firm led by a former banker. We invest in real estate, agriculture and technology — and help you grow your wealth alongside us.',
  keywords: [
    'investment firm Africa',
    'real estate investment',
    'agriculture investment',
    'technology investment',
    'wealth management',
    'grow wealth Africa',
  ],
  openGraph: {
    title: 'Topup Investments — Real Estate, Agriculture & Technology',
    description:
      'A boutique African investment firm led by a former banker, investing in real estate, agriculture and technology.',
    type: 'website',
    images: ['/images/hero.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#87e64b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
