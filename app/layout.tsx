import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host') || 'localtechwizards.com'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const siteUrl = `${protocol}://${host}`

  return {
    title: {
      default: 'LocalTechWizards - Sydney Tech Consulting for Families & Small Business',
      template: '%s | LocalTechWizards',
    },
    description: 'Expert tech consulting in Sydney for parental controls, home network security, self-hosting, and smart home setup. Helping Australian families navigate technology safely.',
    keywords: ['tech consulting Sydney', 'parental controls', 'home network security', 'self-hosting', 'smart home setup', 'IT support Sydney'],
    authors: [{ name: 'LocalTechWizards' }],
    creator: 'LocalTechWizards',
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: 'website',
      locale: 'en_AU',
      url: siteUrl,
      siteName: 'LocalTechWizards',
      title: 'LocalTechWizards - Sydney Tech Consulting for Families',
      description: 'Expert tech consulting for parental controls, home network security, and smart home setup in Sydney, Australia.',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LocalTechWizards' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'LocalTechWizards - Sydney Tech Consulting',
      description: 'Expert tech consulting for families in Sydney, Australia.',
      images: ['/og-image.png'],
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async></script>
      </head>
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
