import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-earth-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🍜</span>
            <span className="text-xl font-bold text-earth-950 group-hover:text-brand-600 transition-colors">
              Wanderlust Eats
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            <Link
              href="/"
              className="text-earth-600 hover:text-brand-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-earth-600 hover:text-brand-600 font-medium transition-colors"
            >
              Categories
            </Link>
            {/* Changed: Added About link to desktop navigation */}
            <Link
              href="/about"
              className="text-earth-600 hover:text-brand-600 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu links */}
          <div className="sm:hidden flex items-center gap-4">
            <Link
              href="/categories"
              className="text-earth-600 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              Categories
            </Link>
            {/* Changed: Added About link to mobile navigation */}
            <Link
              href="/about"
              className="text-earth-600 hover:text-brand-600 font-medium transition-colors text-sm"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}