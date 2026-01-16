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
        const [hoursData, contactData] = await Promise.all([
          getHours(),
          getContactInfo()
        ])
        
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
    <footer id="contact" className="bg-charcoal text-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">KAVE</h3>
            <p className="text-cream/70 text-base leading-relaxed mb-4">
              Coffee. Food. Community.
            </p>
            <p className="text-cream/60 text-sm">
              A vegetarian & halal café in Hammersmith, London.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Navigate</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-cream transition-colors text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Hours</h4>
            <div className="space-y-2 text-cream/70 text-base">
              <p>Monday - Friday</p>
              <p className="text-cream/60">{hours.weekdayOpen} - {hours.weekdayClose}</p>
              <p className="mt-4">Saturday - Sunday</p>
              <p className="text-cream/60">{hours.weekendOpen} - {hours.weekendClose}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Connect</h4>
            <div className="space-y-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/70 hover:text-cream transition-colors text-base"
              >
                Instagram
              </a>
              <p className="text-cream/70 text-base">
                {contact.email}
              </p>
              <p className="text-cream/70 text-base">
                {contact.address}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-cream/60 text-sm">
            <p>
              &copy; {new Date().getFullYear()} KAVE. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-cream transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-cream transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

