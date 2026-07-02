'use client'

import { useEffect } from 'react'
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
        <section className="bg-gradient-to-b from-white to-gray-50 py-8">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-2 text-4xl font-bold text-gray-900">Experience Kave</h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">
              Step into our world of authentic flavors and warm ambiance
            </p>
            <div className="flex items-center justify-center">
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
