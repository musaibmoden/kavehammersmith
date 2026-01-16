'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kave1.jpg"
          alt="KAVE Café Interior"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/65 via-charcoal/55 to-charcoal/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="text-cream/80 text-sm font-semibold tracking-widest uppercase">Welcome to</span>
        </div>
        
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-cream mb-8 leading-tight drop-shadow-xl">
          KAVE
        </h1>
        
        <p className="text-2xl sm:text-3xl md:text-4xl text-cream/95 mb-10 font-light drop-shadow-md leading-relaxed">
          Coffee. Food. Community.
        </p>

        <p className="text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto mb-14 font-light drop-shadow-md">
          A vegetarian & halal café in the heart of Hammersmith, serving specialty coffee, toasties, smoothie bowls & waffles.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#menu"
            className="px-10 py-4 bg-cream text-charcoal rounded-lg font-semibold hover:bg-cream/95 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg"
          >
            Explore Menu
          </a>
          <a
            href="#visit"
            className="px-10 py-4 bg-transparent border-2 border-cream text-cream rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Visit Us Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

