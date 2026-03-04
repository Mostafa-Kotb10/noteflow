import Link from 'next/link'

import { Button } from '@/components/ui/button'


const HeroCta = async () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
    <Button
      className="group relative py-6 px-6 hover:bg-primary-200 text-white font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden rounded-md"
      asChild
    >
      <Link href="/dashboard" className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

       
        <span className="relative flex items-center gap-3">
          Get Started Free
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path
              d="M4 10H16M16 10L10 4M16 10L10 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </Link>
    </Button>

    <Button variant="outline" className="py-6 bg-white hover:bg-gray-50">
      <Link
        href="/how-it-works"

      >
        See How It Works
      </Link>
    </Button>
  </div>
  )
}

export default HeroCta