export default function WhyKave() {
  const values = [
    {
      title: 'Fresh & Made-to-Order',
      description: 'Everything is prepared fresh when you order, ensuring the best quality and taste.',
      icon: '✨',
    },
    {
      title: 'Vegetarian & Halal',
      description: 'Our entire menu is vegetarian and halal-friendly, making it accessible to everyone.',
      icon: '🥑',
    },
    {
      title: 'Vegan Options',
      description: 'Plenty of delicious vegan choices available, clearly marked on our menu.',
      icon: '🌱',
    },
    {
      title: 'Cozy Atmosphere',
      description: 'A welcoming space perfect for studying, catching up with friends, or enjoying a quiet moment.',
      icon: '🏠',
    },
  ]

  return (
    <section className="py-28 md:py-40 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Why Choose KAVE
          </h2>
          <p className="text-xl text-charcoal/60 max-w-3xl mx-auto">
            We're committed to quality, inclusivity, and creating a space where everyone feels welcome
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-7xl mb-6 inline-block">{value.icon}</div>
              <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
                {value.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

