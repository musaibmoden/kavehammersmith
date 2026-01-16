'use client'

import { useEffect, useState } from 'react'
import { getMenuItems } from '@/lib/googleSheets'
import Image from 'next/image'

interface MenuItem {
  name: string
  description: string
  price: string
  category: string
  image: string
}

export default function MenuCategories() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<string>('')
  const [showAll, setShowAll] = useState(false)
  const [search, setSearch] = useState('')
  const INITIAL_ITEMS = 6

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const items = await getMenuItems()
        setMenuItems(items)
      } catch (error) {
        console.error('Error loading menu:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  // Group items by category
  const groupedMenu = menuItems.reduce((acc, item) => {
    const category = item.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  const categories = Object.keys(groupedMenu)

  useEffect(() => {
    if (!loading && categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, JSON.stringify(categories)])

  return (
    <section id="menu" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our Full Menu
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Freshly made to order with the finest ingredients
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-charcoal/70 text-lg">Loading menu...</p>
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-charcoal/70 text-lg">Menu coming soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Mobile filter chips */}
            <div className="md:hidden -mx-4 px-4 overflow-x-auto">
              <div className="flex gap-3 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => { setActiveCategory(cat); setShowAll(false); setSearch('') }}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                      activeCategory === cat
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-charcoal border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop layout: sidebar + content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Sidebar */}
              <aside className="hidden md:block md:col-span-3 lg:col-span-3">
                <div className="sticky top-24 space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => { setActiveCategory(cat); setShowAll(false); setSearch('') }}
                      className={`w-full text-left px-4 py-3 rounded-xl border font-semibold transition-all ${
                        activeCategory === cat
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-white text-charcoal border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{cat}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {groupedMenu[cat].length}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </aside>

              {/* Content */}
              <div className="md:col-span-9">
                {/* Header + search */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal">
                      {activeCategory}
                    </h3>
                    <p className="text-charcoal/60 text-sm">{groupedMenu[activeCategory]?.length || 0} items</p>
                  </div>
                  <div className="relative max-w-sm w-full">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); setShowAll(true) }}
                      placeholder="Search in this category..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-400">⌕</span>
                  </div>
                </div>

                {/* Items grid */}
                {(() => {
                  const items = groupedMenu[activeCategory] || []
                  const filtered = items.filter((i) =>
                    (i.name + ' ' + i.description).toLowerCase().includes(search.toLowerCase())
                  )
                  const visible = showAll ? filtered : filtered.slice(0, INITIAL_ITEMS)
                  const canShowMore = filtered.length > INITIAL_ITEMS && !showAll

                  if (filtered.length === 0) {
                    return (
                      <div className="text-charcoal/60">No items match your search.</div>
                    )
                  }

                  return (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {visible.map((item, idx) => (
                          <div
                            key={`${activeCategory}-${idx}`}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                          >
                            <div className="mb-6">
                              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 inline-block bg-emerald-50 px-4 py-2 rounded-full">
                                {item.category || activeCategory}
                              </span>
                              <h4 className="font-heading text-2xl font-bold text-charcoal mb-2 group-hover:text-emerald-600 transition-colors">
                                {item.name}
                              </h4>
                            </div>
                            <p className="text-charcoal/70 leading-relaxed mb-6 text-base">
                              {item.description}
                            </p>
                            <div className="mb-6 relative h-56 rounded-2xl overflow-hidden">
                              <Image
                                src={item.image}
                                alt={`${item.name} – ${item.description}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                loading="lazy"
                              />
                            </div>
                            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                              <span className="font-heading text-xl font-bold text-emerald-600">
                                {item.price}
                              </span>
                              <span className="text-xs text-gray-500">{activeCategory}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Show more */}
                      {canShowMore && (
                        <div className="flex justify-center mt-6">
                          <button
                            type="button"
                            onClick={() => setShowAll(true)}
                            className="px-6 py-2 rounded-full border border-gray-200 text-charcoal hover:bg-gray-50 transition-colors text-sm font-semibold"
                          >
                            Show all {filtered.length}
                          </button>
                        </div>
                      )}
                    </>
                  )
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

