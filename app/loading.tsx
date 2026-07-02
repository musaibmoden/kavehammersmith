export default function Loading() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cream"
      aria-busy="true"
      aria-label="Loading"
    >
      {/* Coffee cup skeleton */}
      <div className="mb-8 h-24 w-20 animate-pulse rounded-2xl bg-charcoal/10" />
      {/* Text skeletons */}
      <div className="space-y-3 text-center">
        <div className="mx-auto h-5 w-48 animate-pulse rounded-full bg-charcoal/10" />
        <div className="mx-auto h-4 w-32 animate-pulse rounded-full bg-charcoal/10" />
      </div>
      {/* Dot indicator */}
      <div className="mt-8 flex gap-2" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-2 w-2 animate-bounce rounded-full bg-sage-green"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}
