import Link from 'next/link'
import { Category } from '@/types'

interface CategoryBadgeProps {
  category: Category
  asLink?: boolean
  size?: 'sm' | 'md'
}

export default function CategoryBadge({ category, asLink = false, size = 'sm' }: CategoryBadgeProps) {
  const name = category.metadata?.name || category.title

  const classes = size === 'sm'
    ? 'text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-500/90 text-white backdrop-blur-sm'
    : 'text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-brand-500 text-white'

  if (asLink) {
    return (
      <Link
        href={`/categories/${category.slug}`}
        className={`${classes} hover:bg-brand-600 transition-colors inline-block`}
      >
        {name}
      </Link>
    )
  }

  return (
    <span className={`${classes} inline-block`}>
      {name}
    </span>
  )
}