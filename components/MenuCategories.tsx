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
  const groupedMenu = menuItems.reduce(
    (acc, item) => {
      const category = item.category || 'Other'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(item)
      return acc
    },
    {} as Record<string, MenuItem[]>
  )

  const categories = Object.keys(groupedMenu)

  useEffect(() => {
    if (!loading && categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, JSON.stringify(categories)])

  return (
    <section id="menu" className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-slide-up text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-charcoal md:text-5xl">
            Our Full Menu
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal/70">
            Freshly made to order with the finest ingredients
          </p>
        </div>

        {loading ? (
          <div className="py-12 text-center">
            <p className="text-lg text-charcoal/70">Loading menu...</p>
          </div>
        ) : categories.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg text-charcoal/70">Menu coming soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Mobile filter chips */}
            <div className="-mx-4 overflow-x-auto px-4 md:hidden">
              <div className="flex gap-3 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat)
                      setShowAll(false)
                      setSearch('')
                    }}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      activeCategory === cat
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-gray-200 bg-white text-charcoal hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop layout: sidebar + content */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              {/* Sidebar */}
              <aside className="hidden md:col-span-3 md:block lg:col-span-3">
                <div className="sticky top-24 space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat)
                        setShowAll(false)
                        setSearch('')
                      }}
                      className={`w-full rounded-xl border px-4 py-3 text-left font-semibold transition-all ${
                        activeCategory === cat
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 bg-white text-charcoal hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{cat}</span>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
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
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
                      {activeCategory}
                    </h3>
                    <p className="text-sm text-charcoal/60">
                      {groupedMenu[activeCategory]?.length || 0} items
                    </p>
                  </div>
                  <div className="relative w-full max-w-sm">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value)
                        setShowAll(true)
                      }}
                      placeholder="Search in this category..."
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-200"
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
                    return <div className="text-charcoal/60">No items match your search.</div>
                  }

                  return (
                    <>
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                        {visible.map((item, idx) => (
                          <div
                            key={`${activeCategory}-${idx}`}
                            className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                          >
                            <div className="mb-6">
                              <span className="mb-3 inline-block rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
                                {item.category || activeCategory}
                              </span>
                              <h4 className="mb-2 font-heading text-2xl font-bold text-charcoal transition-colors group-hover:text-emerald-600">
                                {item.name}
                              </h4>
                            </div>
                            <p className="mb-6 text-base leading-relaxed text-charcoal/70">
                              {item.description}
                            </p>
                            <div className="relative mb-6 h-56 overflow-hidden rounded-2xl">
                              <Image
                                src={item.image}
                                alt={`${item.name} – ${item.description}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
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
                        <div className="mt-6 flex justify-center">
                          <button
                            type="button"
                            onClick={() => setShowAll(true)}
                            className="rounded-full border border-gray-200 px-6 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-gray-50"
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
