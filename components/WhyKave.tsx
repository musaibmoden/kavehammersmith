export default function WhyKave() {
  const values = [
    {
      title: 'Fresh & Made-to-Order',
      description:
        'Everything is prepared fresh when you order, ensuring the best quality and taste.',
      icon: '✨',
    },
    {
      title: 'Vegetarian & Halal',
      description:
        'Our entire menu is vegetarian and halal-friendly, making it accessible to everyone.',
      icon: '🥑',
    },
    {
      title: 'Vegan Options',
      description: 'Plenty of delicious vegan choices available, clearly marked on our menu.',
      icon: '🌱',
    },
    {
      title: 'Cozy Atmosphere',
      description:
        'A welcoming space perfect for studying, catching up with friends, or enjoying a quiet moment.',
      icon: '🏠',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 animate-slide-up text-center">
          <h2 className="mb-6 font-heading text-5xl font-bold text-charcoal md:text-6xl">
            Why Choose KAVE
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-charcoal/60">
            We&apos;re committed to quality, inclusivity, and creating a space where everyone feels
            welcome
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="animate-slide-up rounded-3xl border border-gray-100 bg-white/80 p-10 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-block text-7xl">{value.icon}</div>
              <h3 className="mb-4 font-heading text-2xl font-bold text-charcoal">{value.title}</h3>
              <p className="text-lg leading-relaxed text-charcoal/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
