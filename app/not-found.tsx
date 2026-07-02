import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center">
      <div className="mb-6 text-6xl">☕</div>
      <p className="mb-2 font-heading text-8xl font-bold text-charcoal/10">404</p>
      <h1 className="mb-3 font-heading text-4xl font-bold text-charcoal">Page not found</h1>
      <p className="mb-8 max-w-md text-lg text-charcoal/60">
        Looks like this page wandered off. Let&apos;s get you back to the café.
      </p>
      <Link
        href="/"
        className="rounded-full bg-charcoal px-8 py-3 font-semibold text-cream transition-all duration-300 hover:bg-charcoal/90 hover:shadow-lg"
      >
        Back to KAVE
      </Link>
    </main>
  )
}
