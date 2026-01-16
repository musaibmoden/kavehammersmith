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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center flex-shrink-0">
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
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 transition-all duration-200 text-sm font-semibold tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://www.ubereats.com/gb/store/kave-cafe/fsvnxZSXX76s6xAn_qoZOw?srsltid=AfmBOooZbhhdMmAAE0ssT92XvVTD53hcSLHFxpZzKiMJ8wJjuw7XwMzp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-gray-100 ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-emerald-600 transition-colors duration-200 text-sm font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.ubereats.com/gb/store/kave-cafe/fsvnxZSXX76s6xAn_qoZOw?srsltid=AfmBOooZbhhdMmAAE0ssT92XvVTD53hcSLHFxpZzKiMJ8wJjuw7XwMzp"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg text-center text-sm"
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

