'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
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

      <div className="relative z-10 mx-auto max-w-5xl animate-fade-in px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-block">
          <span className="text-sm font-semibold uppercase tracking-widest text-cream/80">
            Welcome to
          </span>
        </div>

        <h1 className="mb-8 font-heading text-6xl font-bold leading-tight text-cream drop-shadow-xl sm:text-7xl md:text-8xl lg:text-9xl">
          KAVE
        </h1>

        <p className="mb-10 text-2xl font-light leading-relaxed text-cream/95 drop-shadow-md sm:text-3xl md:text-4xl">
          Coffee. Food. Community.
        </p>

        <p className="mx-auto mb-14 max-w-2xl text-lg font-light text-cream/80 drop-shadow-md sm:text-xl">
          A vegetarian & halal café in the heart of Hammersmith, serving specialty coffee, toasties,
          smoothie bowls & waffles.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="#menu"
            className="rounded-lg bg-cream px-10 py-4 font-semibold text-charcoal shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cream/95 hover:shadow-2xl"
          >
            Explore Menu
          </a>
          <a
            href="#visit"
            className="rounded-lg border-2 border-cream bg-transparent px-10 py-4 font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            Visit Us Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cream/50">
          <div className="mt-2 h-3 w-1 rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
