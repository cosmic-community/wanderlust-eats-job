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
          </nav>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <Link
              href="/categories"
              className="text-earth-600 hover:text-brand-600 font-medium transition-colors"
            >
              Categories
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}