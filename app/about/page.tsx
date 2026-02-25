import { Metadata } from 'next'
import { getPage, getAuthors } from '@/lib/cosmic'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Author } from '@/types' // Changed: Added Author type for map callback

export const metadata: Metadata = {
  title: 'About — Wanderlust Eats',
  description: 'Learn about Wanderlust Eats — our mission, our writers, and our love for food travel.',
}

export default async function AboutPage() {
  const [page, authors] = await Promise.all([
    getPage('about'),
    getAuthors(),
  ])

  if (!page) {
    notFound()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-earth-950 text-white overflow-hidden">
        {page.metadata.hero_image?.imgix_url && (
          <div className="absolute inset-0">
            <img
              src={`${page.metadata.hero_image.imgix_url}?w=1600&h=600&fit=crop&auto=format,compress`}
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-earth-950/60 to-earth-950/90" />
          </div>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {page.metadata.heading}
          </h1>
          {page.metadata.subheading && (
            <p className="text-earth-300 text-lg md:text-xl max-w-2xl mx-auto">
              {page.metadata.subheading}
            </p>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <MarkdownRenderer content={page.metadata.content} />
      </section>

      {/* Meet the Writers Section */}
      {authors.length > 0 && (
        <section className="bg-earth-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-earth-950 text-center mb-10">
              Meet Our Writers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {authors.map((author: Author) => (
                <Link
                  key={author.id}
                  href={`/authors/${author.slug}`}
                  className="flex items-start gap-5 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
                >
                  {author.metadata.photo?.imgix_url && (
                    <img
                      src={`${author.metadata.photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                      alt={author.metadata.name}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-earth-950 group-hover:text-brand-600 transition-colors">
                      {author.metadata.name}
                    </h3>
                    <p className="text-earth-600 text-sm mt-1 line-clamp-3">
                      {author.metadata.bio}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}