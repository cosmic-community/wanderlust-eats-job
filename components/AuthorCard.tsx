import Link from 'next/link'
import { Author } from '@/types'

interface AuthorCardProps {
  author: Author
  showLink?: boolean
}

export default function AuthorCard({ author, showLink = true }: AuthorCardProps) {
  const photo = author.metadata?.photo?.imgix_url
  const name = author.metadata?.name || author.title
  const bio = author.metadata?.bio

  const content = (
    <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-earth-200 hover:border-brand-300 transition-colors">
      {photo && (
        <img
          src={`${photo}?w=160&h=160&fit=crop&auto=format,compress`}
          alt={name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
      )}
      <div className="min-w-0">
        <h3 className="font-bold text-earth-950 text-lg">{name}</h3>
        {bio && (
          <p className="text-earth-500 text-sm mt-1 line-clamp-2">{bio}</p>
        )}
      </div>
    </div>
  )

  if (showLink) {
    return (
      <Link href={`/authors/${author.slug}`} className="block group">
        {content}
      </Link>
    )
  }

  return content
}