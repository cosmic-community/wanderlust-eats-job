import Link from 'next/link'
import { Post } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const imageUrl = post.metadata?.featured_image?.imgix_url
  const author = post.metadata?.author
  const category = post.metadata?.category
  const excerpt = post.metadata?.excerpt

  if (featured) {
    return (
      <Link href={`/posts/${post.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
          {imageUrl && (
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img
                src={`${imageUrl}?w=1200&h=1000&fit=crop&auto=format,compress`}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                {category && (
                  <CategoryBadge category={category} />
                )}
                <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-3 group-hover:text-brand-200 transition-colors">
                  {post.title}
                </h2>
                {excerpt && (
                  <p className="text-earth-200 text-sm md:text-base line-clamp-2 max-w-2xl">
                    {excerpt}
                  </p>
                )}
                {author && (
                  <div className="flex items-center gap-3 mt-4">
                    {author.metadata?.photo?.imgix_url && (
                      <img
                        src={`${author.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                        alt={author.metadata.name}
                        className="w-8 h-8 rounded-full object-cover border-2 border-white/50"
                      />
                    )}
                    <span className="text-white/80 text-sm font-medium">
                      {author.metadata?.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        {imageUrl && (
          <div className="relative h-52 overflow-hidden">
            <img
              src={`${imageUrl}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5 flex flex-col flex-1">
          {category && (
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {category.metadata?.name || category.title}
              </span>
            </div>
          )}
          <h3 className="text-lg font-bold text-earth-950 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
          {excerpt && (
            <p className="text-earth-500 text-sm line-clamp-3 flex-1">
              {excerpt}
            </p>
          )}
          {author && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-earth-100">
              {author.metadata?.photo?.imgix_url && (
                <img
                  src={`${author.metadata.photo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={author.metadata.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
              )}
              <span className="text-earth-500 text-xs font-medium">
                {author.metadata?.name}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}