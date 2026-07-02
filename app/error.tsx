'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center">
      <div className="mb-6 text-6xl">☕</div>
      <h1 className="mb-3 font-heading text-4xl font-bold text-charcoal">Something went wrong</h1>
      <p className="mb-8 max-w-md text-lg text-charcoal/60">
        We spilled the coffee. Please try again — everything should be back shortly.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-charcoal px-8 py-3 font-semibold text-cream transition-all duration-300 hover:bg-charcoal/90 hover:shadow-lg"
      >
        Try again
      </button>
      <a href="/" className="mt-4 text-sm text-charcoal/50 underline-offset-4 hover:underline">
        Return home
      </a>
    </main>
  )
}
