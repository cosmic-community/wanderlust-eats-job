import { getCategories } from '@/lib/cosmic'
import Link from 'next/link'

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-earth-400 hover:text-brand-600 transition-colors">
          Home
        </Link>
        <span className="text-earth-300 mx-2">/</span>
        <span className="text-earth-600">Categories</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold text-earth-950 mb-2">
        Categories
      </h1>
      <p className="text-earth-500 text-lg mb-10">
        Browse our food travel stories by topic.
      </p>

      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group block bg-white rounded-xl border border-earth-200 hover:border-brand-300 hover:shadow-md transition-all p-8"
            >
              <h2 className="text-xl font-bold text-earth-950 group-hover:text-brand-600 transition-colors mb-2">
                {category.metadata?.name || category.title}
              </h2>
              {category.metadata?.description && (
                <p className="text-earth-500 text-sm leading-relaxed">
                  {category.metadata.description}
                </p>
              )}
              <span className="inline-block mt-4 text-brand-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                View stories →
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="text-5xl mb-4 block">🏷️</span>
          <h2 className="text-2xl font-bold text-earth-950 mb-2">No categories yet</h2>
          <p className="text-earth-500">Categories will appear here once added.</p>
        </div>
      )}
    </div>
  )
}