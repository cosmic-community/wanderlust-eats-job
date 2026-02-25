// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory, getCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({ slug: category.slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = category.metadata?.name || category.title

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-earth-400 hover:text-brand-600 transition-colors">
          Home
        </Link>
        <span className="text-earth-300 mx-2">/</span>
        <Link href="/categories" className="text-earth-400 hover:text-brand-600 transition-colors">
          Categories
        </Link>
        <span className="text-earth-300 mx-2">/</span>
        <span className="text-earth-600">{name}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-earth-950 mb-2">
          {name}
        </h1>
        {category.metadata?.description && (
          <p className="text-earth-500 text-lg max-w-2xl">
            {category.metadata.description}
          </p>
        )}
      </header>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-earth-200">
          <span className="text-5xl mb-4 block">📝</span>
          <h2 className="text-xl font-bold text-earth-950 mb-2">No stories in this category yet</h2>
          <p className="text-earth-500 mb-6">Check back soon for new content.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  )
}