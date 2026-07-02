'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getSignatureItems } from '@/lib/googleSheets'

interface MenuItem {
  name: string
  description: string
  price: string
  category: string
  image: string
}

export default function SignatureItems() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const signatureItems = await getSignatureItems()
        if (signatureItems.length > 0) {
          setItems(signatureItems)
        } else {
          // Fallback to hardcoded items if sheet is empty
          setItems([
            {
              name: 'Ultimate Cheese & Tomato Toastie',
              description:
                'A classic combination of melted cheese and fresh tomatoes, perfectly toasted.',
              price: '£7.50',
              category: 'Toastie',
              image: '/kave menu.jpeg',
            },
            {
              name: 'Mango & Kale Smoothie Bowl',
              description:
                'Tropical mango, fresh kale, topped with granola, coconut, and seasonal fruits.',
              price: '£9.50',
              category: 'Smoothie Bowl',
              image: '/kave menu.jpeg',
            },
            {
              name: 'Lotus Biscoff Waffle',
              description:
                'Crispy Belgian waffle drizzled with Lotus Biscoff spread and crushed biscuits.',
              price: '£8.50',
              category: 'Waffle',
              image: '/kave menu.jpeg',
            },
            {
              name: 'Iced Matcha Latte',
              description:
                'Premium matcha, oat milk, and a touch of sweetness. Refreshing and energizing.',
              price: '£5.50',
              category: 'Drink',
              image: '/kave menu.jpeg',
            },
          ])
        }
      } catch (error) {
        console.error('Error loading menu items:', error)
        // Fallback to hardcoded items on error
        setItems([
          {
            name: 'Ultimate Cheese & Tomato Toastie',
            description:
              'A classic combination of melted cheese and fresh tomatoes, perfectly toasted.',
            price: '£7.50',
            category: 'Toastie',
            image: '/kave menu.jpeg',
          },
          {
            name: 'Mango & Kale Smoothie Bowl',
            description:
              'Tropical mango, fresh kale, topped with granola, coconut, and seasonal fruits.',
            price: '£9.50',
            category: 'Smoothie Bowl',
            image: '/kave menu.jpeg',
          },
          {
            name: 'Lotus Biscoff Waffle',
            description:
              'Crispy Belgian waffle drizzled with Lotus Biscoff spread and crushed biscuits.',
            price: '£8.50',
            category: 'Waffle',
            image: '/kave menu.jpeg',
          },
          {
            name: 'Iced Matcha Latte',
            description:
              'Premium matcha, oat milk, and a touch of sweetness. Refreshing and energizing.',
            price: '£5.50',
            category: 'Drink',
            image: '/kave menu.jpeg',
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  return (
    <section id="signature" className="scroll-mt-24 bg-cream py-20 md:scroll-mt-28 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-slide-up text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-charcoal md:text-5xl">
            Signature Items
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal/70">
            Our most loved dishes, crafted with care
          </p>
          <div className="mt-4">
            <a href="#menu" className="font-semibold text-emerald-700 hover:underline">
              See the full menu
            </a>
          </div>
        </div>

        {loading ? (
          <div className="py-12 text-center">
            <p className="text-charcoal/70">Loading menu items...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="group animate-slide-up rounded-3xl border border-gray-100 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <span className="mb-3 inline-block rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
                    {item.category}
                  </span>
                  <h3 className="mb-3 font-heading text-3xl font-bold text-charcoal transition-colors group-hover:text-emerald-600">
                    {item.name}
                  </h3>
                </div>
                <p className="mb-6 text-lg leading-relaxed text-charcoal/70">{item.description}</p>

                {/* Menu Image */}
                <div className="relative mb-6 h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <span className="font-heading text-2xl font-bold text-emerald-600">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
