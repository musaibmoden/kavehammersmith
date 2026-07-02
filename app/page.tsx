'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuCategories from '@/components/MenuCategories'
import SignatureItems from '@/components/SignatureItems'
import WhyKave from '@/components/WhyKave'
import VisitUs from '@/components/VisitUs'
import Footer from '@/components/Footer'
import BounceCards from '@/components/BounceCards'
import Loader from '@/components/Loader'

const images = [
  'https://picsum.photos/400/400?grayscale',
  'https://picsum.photos/500/500?grayscale',
  'https://picsum.photos/600/600?grayscale',
  'https://picsum.photos/700/700?grayscale',
  'https://picsum.photos/300/300?grayscale',
]

// Real café images used for the mobile 2×2 grid.
// Replace picsum images above (desktop BounceCards) separately in Fix 2.
const mobileGalleryImages = [
  { src: '/kave1.jpg', alt: 'KAVE Café interior' },
  { src: '/interior.avif', alt: 'KAVE Café seating area' },
  { src: '/kave2.jpg', alt: 'KAVE Café atmosphere' },
  { src: '/kavee3.jpg', alt: 'KAVE Café food and drinks' },
]

const transformStyles = [
  'rotate(5deg) translate(-200px)',
  'rotate(0deg) translate(-100px)',
  'rotate(-5deg)',
  'rotate(5deg) translate(100px)',
  'rotate(-5deg) translate(200px)',
]

export default function Home() {
  useEffect(() => {
    // Clear any hash from URL and scroll to top
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Loader />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />

        {/* Restaurant Gallery Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-2 text-4xl font-bold text-gray-900">Experience Kave</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">
              Step into our world of authentic flavors and warm ambiance
            </p>

            {/* Mobile: 2×2 photo grid (BounceCards requires ~700px — too wide for mobile) */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {mobileGalleryImages.map(({ src, alt }) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={src} alt={alt} fill className="object-cover" sizes="50vw" />
                </div>
              ))}
            </div>

            {/* Desktop: GSAP fan animation — hidden below md where it overflows */}
            <div className="hidden items-center justify-center md:flex">
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={700}
                containerHeight={350}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            </div>
          </div>
        </section>

        <SignatureItems />
        <WhyKave />
        <MenuCategories />
        <VisitUs />
        <Footer />
      </main>
    </>
  )
}
