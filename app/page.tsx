import { getPosts, getCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import CategoryBadge from '@/components/CategoryBadge'
import Link from 'next/link'

export default async function HomePage() {
  const posts = await getPosts()
  const categories = await getCategories()

  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-earth-950 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl md:text-5xl mb-4 block">🍜</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Wanderlust <span className="text-brand-400">Eats</span>
          </h1>
          <p className="text-earth-300 text-lg md:text-xl max-w-2xl mx-auto">
            Exploring the world one bite at a time — culinary adventures from street food stalls to grandmother&apos;s kitchens.
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      {categories.length > 0 && (
        <section className="bg-white border-b border-earth-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-earth-500 text-sm font-medium">Browse:</span>
              {categories.map((category) => (
                <CategoryBadge
                  key={category.id}
                  category={category}
                  asLink
                  size="sm"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4">
              Featured Story
            </h2>
            <PostCard post={featuredPost} featured />
          </section>
        )}

        {/* Latest Posts Grid */}
        {remainingPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-earth-950 mb-8">
              Latest Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {posts.length === 0 && (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🍽️</span>
            <h2 className="text-2xl font-bold text-earth-950 mb-2">No stories yet</h2>
            <p className="text-earth-500">Check back soon for delicious food travel content.</p>
          </div>
        )}
      </div>
    </div>
  )
}