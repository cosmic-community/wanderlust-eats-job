// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getPostsByAuthor, getAuthors } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const authors = await getAuthors()
  return authors.map((author) => ({ slug: author.slug }))
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = author.metadata?.name || author.title
  const bio = author.metadata?.bio
  const photo = author.metadata?.photo?.imgix_url

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-earth-400 hover:text-brand-600 transition-colors">
          Home
        </Link>
        <span className="text-earth-300 mx-2">/</span>
        <span className="text-earth-600">{name}</span>
      </nav>

      {/* Author Profile */}
      <header className="mb-12 flex flex-col md:flex-row items-start gap-8">
        {photo && (
          <img
            src={`${photo}?w=320&h=320&fit=crop&auto=format,compress`}
            alt={name}
            className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover shadow-md flex-shrink-0"
          />
        )}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-earth-950 mb-3">
            {name}
          </h1>
          {bio && (
            <p className="text-earth-500 text-lg leading-relaxed max-w-2xl">
              {bio}
            </p>
          )}
          <p className="text-earth-400 text-sm mt-4">
            {posts.length} {posts.length === 1 ? 'story' : 'stories'} published
          </p>
        </div>
      </header>

      {/* Author's Posts */}
      {posts.length > 0 ? (
        <section>
          <h2 className="text-2xl font-bold text-earth-950 mb-8">
            Stories by {name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-earth-200">
          <span className="text-5xl mb-4 block">✍️</span>
          <h2 className="text-xl font-bold text-earth-950 mb-2">No stories published yet</h2>
          <p className="text-earth-500 mb-6">Check back soon for new content from {name}.</p>
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