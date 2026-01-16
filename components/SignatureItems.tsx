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
              description: 'A classic combination of melted cheese and fresh tomatoes, perfectly toasted.',
              price: '£7.50',
              category: 'Toastie',
              image: '/kave menu.jpeg',
            },
            {
              name: 'Mango & Kale Smoothie Bowl',
              description: 'Tropical mango, fresh kale, topped with granola, coconut, and seasonal fruits.',
              price: '£9.50',
              category: 'Smoothie Bowl',
              image: '/kave menu.jpeg',
            },
            {
              name: 'Lotus Biscoff Waffle',
              description: 'Crispy Belgian waffle drizzled with Lotus Biscoff spread and crushed biscuits.',
              price: '£8.50',
              category: 'Waffle',
              image: '/kave menu.jpeg',
            },
            {
              name: 'Iced Matcha Latte',
              description: 'Premium matcha, oat milk, and a touch of sweetness. Refreshing and energizing.',
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
            description: 'A classic combination of melted cheese and fresh tomatoes, perfectly toasted.',
            price: '£7.50',
            category: 'Toastie',
            image: '/kave menu.jpeg',
          },
          {
            name: 'Mango & Kale Smoothie Bowl',
            description: 'Tropical mango, fresh kale, topped with granola, coconut, and seasonal fruits.',
            price: '£9.50',
            category: 'Smoothie Bowl',
            image: '/kave menu.jpeg',
          },
          {
            name: 'Lotus Biscoff Waffle',
            description: 'Crispy Belgian waffle drizzled with Lotus Biscoff spread and crushed biscuits.',
            price: '£8.50',
            category: 'Waffle',
            image: '/kave menu.jpeg',
          },
          {
            name: 'Iced Matcha Latte',
            description: 'Premium matcha, oat milk, and a touch of sweetness. Refreshing and energizing.',
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
    <section id="signature" className="py-20 md:py-32 bg-cream scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Signature Items
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Our most loved dishes, crafted with care
          </p>
          <div className="mt-4">
            <a href="#menu" className="text-emerald-700 font-semibold hover:underline">See the full menu</a>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-charcoal/70">Loading menu items...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 inline-block bg-emerald-50 px-4 py-2 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-3xl font-bold text-charcoal mb-3 group-hover:text-emerald-600 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-charcoal/70 leading-relaxed mb-6 text-lg">{item.description}</p>
                
                {/* Menu Image */}
                <div className="mb-6 relative h-56 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <div className="pt-6 border-t border-gray-100">
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

