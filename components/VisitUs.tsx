'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getHours, getContactInfo } from '@/lib/googleSheets'

export default function VisitUs() {
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
  })
  const [loading, setLoading] = useState(true)

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
        console.error('Error loading visit data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section id="visit" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-12 text-center">
          Visit Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Address</h3>
                <p className="text-charcoal/70 leading-relaxed text-lg">
                  {contact.address}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Opening Hours</h3>
                {loading ? (
                  <p className="text-charcoal/70">Loading hours...</p>
                ) : (
                  <p className="text-charcoal/70 leading-relaxed text-lg">
                    Monday - Friday: {hours.weekdayOpen} - {hours.weekdayClose}<br />
                    Saturday - Sunday: {hours.weekendOpen} - {hours.weekendClose}
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3">Contact</h3>
                {loading ? (
                  <p className="text-charcoal/70">Loading contact info...</p>
                ) : (
                  <p className="text-charcoal/70 leading-relaxed text-lg">
                    {contact.phone && (
                      <>Phone: {contact.phone}<br /></>
                    )}
                    Email: {contact.email}
                  </p>
                )}
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Kave,+Hammersmith+Broadway,+London/@51.4619,-0.3643221,14z/data=!4m5!3m4!1s0x48760fe0eba02649:0x711c97e0bc8ccbed!8m2!3d51.4932055!4d-0.2235688?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 bg-charcoal text-cream rounded-full font-medium hover:bg-charcoal/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Directions
            </a>
          </div>

          <div className="animate-slide-up rounded-2xl shadow-lg overflow-hidden h-80 lg:h-96" style={{ animationDelay: '0.2s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6883558236766!2d-0.22356!3d51.4932055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fe0eba02649%3A0x711c97e0bc8ccbed!2sKave!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="KAVE Café location map"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        
      </div>
    </section>
  )
}

