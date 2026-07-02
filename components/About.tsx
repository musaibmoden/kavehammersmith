import Image from 'next/image'

export default function About() {
  const features = [
    { icon: '☕', label: 'Specialty Coffee', color: 'from-amber-400 to-amber-600' },
    { icon: '🥑', label: 'Vegetarian', color: 'from-green-400 to-emerald-600' },
    { icon: '🌱', label: 'Vegan Options', color: 'from-lime-400 to-green-600' },
    { icon: '🕌', label: 'Halal', color: 'from-blue-400 to-cyan-600' },
  ]

  return (
    <section id="about" className="bg-white py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 animate-slide-up text-center">
          <h2 className="mb-6 font-heading text-5xl font-bold text-charcoal md:text-6xl">
            Our Story
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-charcoal/60">
            Crafted with love, served with passion
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative h-96 animate-slide-up overflow-hidden rounded-3xl shadow-2xl lg:h-[500px]">
            <Image
              src="/interior.avif"
              alt="KAVE Café Interior"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="mb-6 font-heading text-3xl font-bold text-charcoal">
              A Café for Everyone
            </h3>
            <p className="mb-6 text-lg font-light leading-relaxed text-charcoal/70">
              KAVE is more than just a café—it&apos;s a community hub. We&apos;re dedicated to
              serving fresh, delicious food that everyone can enjoy. From early morning coffee
              lovers to afternoon catch-ups, we&apos;re here to create moments that matter.
            </p>
            <p className="text-lg font-light leading-relaxed text-charcoal/70">
              Our entire menu is vegetarian and halal-friendly, with abundant vegan options. We
              believe in quality over quantity, preparing every dish fresh to order with the finest
              ingredients. Whether you&apos;re fueling up before work or celebrating with friends,
              KAVE is your go-to destination.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl animate-slide-up text-center">
          {/* Icon Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex animate-slide-up flex-col items-center gap-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-2 text-4xl md:text-5xl">{feature.icon}</div>
                <span className="text-sm font-medium text-charcoal/70 md:text-base">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
