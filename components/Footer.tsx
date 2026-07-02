'use client'

import { useEffect, useState } from 'react'
import { getHours, getContactInfo } from '@/lib/googleSheets'

export default function Footer() {
  const [hours, setHours] = useState({
    weekdayOpen: '7:00 AM',
    weekdayClose: '6:00 PM',
    weekendOpen: '8:00 AM',
    weekendClose: '7:00 PM',
  })
  const [contact, setContact] = useState({
    email: 'hello@kave.co.uk',
    phone: '',
    address: 'Hammersmith, London',
    instagram: 'https://instagram.com/kave',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hoursData, contactData] = await Promise.all([getHours(), getContactInfo()])

        if (hoursData) {
          setHours(hoursData)
        }

        if (contactData) {
          setContact(contactData)
        }
      } catch (error) {
        console.error('Error loading footer data:', error)
      }
    }

    fetchData()
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#signature', label: 'Signature Items' },
    { href: '#visit', label: 'Visit Us' },
  ]

  return (
    <footer id="contact" className="relative bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-2xl font-bold">KAVE</h3>
            <p className="mb-4 text-base leading-relaxed text-cream/70">Coffee. Food. Community.</p>
            <p className="text-sm text-cream/60">
              A vegetarian & halal café in Hammersmith, London.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold">Navigate</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold">Hours</h4>
            <div className="space-y-2 text-base text-cream/70">
              <p>Monday - Friday</p>
              <p className="text-cream/60">
                {hours.weekdayOpen} - {hours.weekdayClose}
              </p>
              <p className="mt-4">Saturday - Sunday</p>
              <p className="text-cream/60">
                {hours.weekendOpen} - {hours.weekendClose}
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-6 font-heading text-lg font-semibold">Connect</h4>
            <div className="space-y-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-cream/70 transition-colors hover:text-cream"
              >
                Instagram
              </a>
              <p className="text-base text-cream/70">{contact.email}</p>
              <p className="text-base text-cream/70">{contact.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 md:pt-12">
          <div className="flex flex-col items-center justify-between text-sm text-cream/60 md:flex-row">
            <p>&copy; {new Date().getFullYear()} KAVE. All rights reserved.</p>
            <div className="mt-4 flex gap-6 md:mt-0">
              <a href="/privacy" className="transition-colors hover:text-cream">
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors hover:text-cream">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
