import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haven Annecy | Australian-Inspired Cafe',
  description: 'Haven promises an Australian-inspired escape in Annecy, between lake and mountains. Brunch and specialty coffee, let\'s share together a love for flavour and craftsmanship.',
  keywords: ['haven annecy', 'cafe annecy', 'brunch annecy', 'australian cafe', 'specialty coffee annecy'],
  openGraph: {
    title: 'Haven Annecy | Australian-Inspired Cafe',
    description: 'Brunch and specialty coffee in Annecy',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
