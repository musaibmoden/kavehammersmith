'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden'

    // Show loader until page fully loads
    const handleLoad = () => {
      setIsLoaded(true)
      document.body.style.overflow = 'unset'
    }

    // If page is already loaded (on client-side navigation)
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeOutLoader {
          from {
            opacity: 1;
            visibility: visible;
          }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes steamRise1 {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) scaleY(0.3);
          }
          20% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(-60px) translateX(-8px) scaleY(1);
          }
        }

        @keyframes steamRise2 {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) scaleY(0.3);
          }
          20% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(-60px) translateX(8px) scaleY(1);
          }
        }

        @keyframes cupGlow {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(148, 165, 123, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(148, 165, 123, 0.6));
          }
        }

        @keyframes textFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pageReveal {
          from {
            backdrop-filter: blur(5px);
          }
          to {
            backdrop-filter: blur(0px);
          }
        }

        .loader-container {
          animation: fadeOutLoader 0.8s ease-out ${isLoaded ? '0s forwards' : '3.5s forwards'};
        }

        .steam-trail-1 {
          animation: steamRise1 2.5s ease-out infinite;
        }

        .steam-trail-2 {
          animation: steamRise2 2.5s ease-out 0.8s infinite;
        }

        .cup-icon {
          animation: cupGlow 3s ease-in-out infinite;
        }

        .loader-text {
          animation: textFadeIn 0.8s ease-out 0.5s both;
        }

        main {
          animation: pageReveal 0.6s ease-out ${isLoaded ? '0.8s' : '0s'} forwards;
        }
      `}</style>

      <div
        className="loader-container fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        style={{
          background: '#F8F6F2',
        }}
        role="status"
        aria-busy={!isLoaded}
        aria-label="Loading page"
      >
        {/* London Skyline Background - Subtle */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <svg
            viewBox="0 0 1200 400"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f8f6f2', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#94A57B', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>

            {/* Big Ben */}
            <rect x="100" y="120" width="30" height="200" fill="url(#skyGradient)" />
            <polygon points="100,120 130,120 125,80 105,80" fill="url(#skyGradient)" />

            {/* Generic tall buildings */}
            <rect x="200" y="150" width="40" height="170" fill="url(#skyGradient)" />
            <rect x="280" y="100" width="50" height="220" fill="url(#skyGradient)" />
            <rect x="400" y="140" width="35" height="180" fill="url(#skyGradient)" />
            <rect x="500" y="160" width="45" height="160" fill="url(#skyGradient)" />
            <rect x="620" y="130" width="40" height="190" fill="url(#skyGradient)" />
            <rect x="720" y="170" width="50" height="150" fill="url(#skyGradient)" />
            <rect x="850" y="110" width="40" height="210" fill="url(#skyGradient)" />
            <rect x="970" y="150" width="45" height="170" fill="url(#skyGradient)" />
            <rect x="1080" y="140" width="35" height="180" fill="url(#skyGradient)" />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Coffee Cup with Steam */}
          <div className="relative w-24 h-32 sm:w-32 sm:h-40 mb-8">
            {/* Steam Trails */}
            <div className="absolute left-4 top-0 w-4 h-16 sm:w-6 sm:h-20">
              <div className="steam-trail-1 absolute inset-0 bg-gradient-to-t from-emerald-100 to-transparent rounded-full opacity-40 blur-md" />
            </div>

            <div className="absolute right-4 top-0 w-4 h-16 sm:w-6 sm:h-20">
              <div className="steam-trail-2 absolute inset-0 bg-gradient-to-t from-emerald-100 to-transparent rounded-full opacity-40 blur-md" />
            </div>

            {/* Coffee Cup SVG */}
            <svg
              className="cup-icon w-full h-full"
              viewBox="0 0 100 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cup Body */}
              <path
                d="M 20 40 L 25 100 Q 25 105 30 105 L 70 105 Q 75 105 75 100 L 80 40 Z"
                stroke="#94A57B"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />

              {/* Cup Top Rim */}
              <ellipse
                cx="50"
                cy="40"
                rx="30"
                ry="8"
                stroke="#94A57B"
                strokeWidth="2"
                fill="none"
              />

              {/* Coffee Inside */}
              <ellipse
                cx="50"
                cy="70"
                rx="20"
                ry="12"
                fill="#94A57B"
                opacity="0.25"
              />

              {/* Handle */}
              <path
                d="M 75 55 Q 95 55 95 75"
                stroke="#94A57B"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />

              {/* Highlight on cup */}
              <ellipse
                cx="35"
                cy="65"
                rx="8"
                ry="15"
                fill="#94A57B"
                opacity="0.2"
              />
            </svg>
          </div>

          {/* Loading Text */}
          <div className="loader-text text-center px-6 sm:px-8">
            <p className="text-lg sm:text-xl font-serif text-slate-700 font-light tracking-wide">
              Brewing something special
            </p>
            <p className="text-sm sm:text-base font-serif text-slate-600 font-light mt-1">
              in London…
            </p>
          </div>

          {/* Animated Dots */}
          <div className="mt-8 flex gap-2" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: '#94A57B',
                  animation: `dotPulse 1.4s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Additional CSS for dot animation */}
        <style>{`
          @keyframes dotPulse {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    </>
  )
}
