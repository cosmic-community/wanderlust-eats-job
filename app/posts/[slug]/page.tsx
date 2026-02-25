// app/posts/[slug]/page.tsx
import { getPostBySlug, getPosts } from '@/lib/cosmic'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import CategoryBadge from '@/components/CategoryBadge'
import AuthorCard from '@/components/AuthorCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const imageUrl = post.metadata?.featured_image?.imgix_url
  const author = post.metadata?.author
  const category = post.metadata?.category
  const content = post.metadata?.content || ''
  const createdAt = post.created_at
    ? new Date(post.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article>
      {/* Hero Image */}
      {imageUrl && (
        <div className="relative h-[300px] md:h-[500px] overflow-hidden">
          <img
            src={`${imageUrl}?w=1600&h=1000&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-earth-400 hover:text-brand-600 transition-colors">
            Home
          </Link>
          <span className="text-earth-300 mx-2">/</span>
          <span className="text-earth-600">{post.title}</span>
        </nav>

        {/* Post Header */}
        <header className="mb-10">
          {category && (
            <div className="mb-4">
              <CategoryBadge category={category} asLink size="md" />
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold text-earth-950 leading-tight mb-4">
            {post.title}
          </h1>
          {post.metadata?.excerpt && (
            <p className="text-lg text-earth-500 leading-relaxed">
              {post.metadata.excerpt}
            </p>
          )}

          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-earth-200">
            {author && (
              <Link href={`/authors/${author.slug}`} className="flex items-center gap-3 group">
                {author.metadata?.photo?.imgix_url && (
                  <img
                    src={`${author.metadata.photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                    alt={author.metadata.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <span className="text-earth-950 font-semibold text-sm group-hover:text-brand-600 transition-colors">
                    {author.metadata?.name}
                  </span>
                </div>
              </Link>
            )}
            {createdAt && (
              <span className="text-earth-400 text-sm">{createdAt}</span>
            )}
          </div>
        </header>

        {/* Post Content */}
        {content && (
          <div className="mb-12">
            <MarkdownRenderer content={content} />
          </div>
        )}

        {/* Author Bio */}
        {author && (
          <section className="mt-12 pt-8 border-t border-earth-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-earth-400 mb-4">
              About the Author
            </h3>
            <AuthorCard author={author} />
          </section>
        )}

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-earth-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors"
          >
            ← Back to all stories
          </Link>
        </div>
      </div>
    </article>
  )
}