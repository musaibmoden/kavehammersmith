'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#signature', label: 'Signature' },
    { href: '#visit', label: 'Visit Us' },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-shrink-0 items-center">
            <Image
              src="/kavetransparent.png"
              alt="KAVE Logo"
              width={180}
              height={60}
              className="h-16 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-semibold tracking-wide text-gray-700 transition-all duration-200 hover:text-emerald-600"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://www.ubereats.com/gb/store/kave-cafe/fsvnxZSXX76s6xAn_qoZOw?srsltid=AfmBOooZbhhdMmAAE0ssT92XvVTD53hcSLHFxpZzKiMJ8wJjuw7XwMzp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex h-6 w-6 flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-gray-100 transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="space-y-4 bg-white/95 px-4 py-6 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-emerald-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.ubereats.com/gb/store/kave-cafe/fsvnxZSXX76s6xAn_qoZOw?srsltid=AfmBOooZbhhdMmAAE0ssT92XvVTD53hcSLHFxpZzKiMJ8wJjuw7XwMzp"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-emerald-600 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
