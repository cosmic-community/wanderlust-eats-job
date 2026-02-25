import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-earth-950 text-earth-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍜</span>
              <span className="text-xl font-bold text-white">Wanderlust Eats</span>
            </div>
            <p className="text-earth-400 text-sm leading-relaxed">
              A food travel blog exploring culinary adventures around the world — from street food stalls to regional kitchens.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-earth-400 hover:text-brand-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-earth-400 hover:text-brand-400 transition-colors text-sm">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Powered by</h3>
            <p className="text-earth-400 text-sm">
              Content managed with{' '}
              <a
                href="https://www.cosmicjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 transition-colors"
              >
                Cosmic
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-earth-800 mt-8 pt-8 text-center">
          <p className="text-earth-500 text-sm">
            © {new Date().getFullYear()} Wanderlust Eats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}