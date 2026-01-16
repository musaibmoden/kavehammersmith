import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || undefined

export const metadata: Metadata = {
  // Title tags optimized with a template
  title: {
    default: 'KAVE Café – Coffee. Food. Community.',
    template: '%s | KAVE Café'
  },
  description: 'Vegetarian & halal café in Hammersmith serving specialty coffee, toasties, smoothie bowls & waffles.',
  icons: {
    icon: '/kavetransparent.png',
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'KAVE Café – Coffee. Food. Community.',
    description: 'Vegetarian & halal café in Hammersmith serving specialty coffee, toasties, smoothie bowls & waffles.',
    siteName: 'KAVE Café',
    images: [
      {
        url: '/kave2.jpg',
        width: 1200,
        height: 630,
        alt: 'KAVE Café interior and atmosphere',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAVE Café – Coffee. Food. Community.',
    description: 'Vegetarian & halal café in Hammersmith serving specialty coffee, toasties, smoothie bowls & waffles.',
    images: ['/kave2.jpg'],
  },
  // Helpful metadata fields
  category: 'Food & Drink',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {/* JSON-LD Schema: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'KAVE Café',
              description:
                'Vegetarian & halal café in Hammersmith serving specialty coffee, toasties, smoothie bowls & waffles.',
              image: siteUrl ? `${siteUrl}/kave2.jpg` : '/kave2.jpg',
              url: siteUrl || undefined,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hammersmith',
                addressRegion: 'London',
                addressCountry: 'UK',
              },
              priceRange: '$$',
              servesCuisine: ['Vegetarian', 'Halal', 'Cafe'],
            }),
          }}
        />

        {/* JSON-LD Schema: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'KAVE Café',
              url: siteUrl || undefined,
              logo: siteUrl ? `${siteUrl}/kavetransparent.png` : '/kavetransparent.png',
            }),
          }}
        />

        {/* JSON-LD Schema: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'KAVE Café',
              url: siteUrl || undefined,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl || ''}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* JSON-LD Schema: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: siteUrl || '/',
                },
              ],
            }),
          }}
        />

        {children}
      </body>
      
    </html>
  )
}

