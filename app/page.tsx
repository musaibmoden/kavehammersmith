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

export default function Home() {
  useEffect(() => {
    // Clear any hash from URL and scroll to top
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SignatureItems />
      <WhyKave />
      <MenuCategories />
      <VisitUs />
      <Footer />
    </main>
  )
}

