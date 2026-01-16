import Image from 'next/image'

export default function About() {
  const features = [
    { icon: '☕', label: 'Specialty Coffee', color: 'from-amber-400 to-amber-600' },
    { icon: '🥑', label: 'Vegetarian', color: 'from-green-400 to-emerald-600' },
    { icon: '🌱', label: 'Vegan Options', color: 'from-lime-400 to-green-600' },
    { icon: '🕌', label: 'Halal', color: 'from-blue-400 to-cyan-600' },
  ]

  return (
    <section id="about" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Our Story
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Crafted with love, served with passion
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-slide-up">
            <Image
              src="/interior.avif"
              alt="KAVE Café Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-heading text-3xl font-bold text-charcoal mb-6">
              A Café for Everyone
            </h3>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6 font-light">
              KAVE is more than just a café—it's a community hub. We're dedicated to serving fresh, delicious food that everyone can enjoy. From early morning coffee lovers to afternoon catch-ups, we're here to create moments that matter.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed font-light">
              Our entire menu is vegetarian and halal-friendly, with abundant vegan options. We believe in quality over quantity, preparing every dish fresh to order with the finest ingredients. Whether you're fueling up before work or celebrating with friends, KAVE is your go-to destination.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          {/* Icon Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl mb-2">{feature.icon}</div>
                <span className="text-sm md:text-base text-charcoal/70 font-medium">
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

