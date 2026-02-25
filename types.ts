export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, unknown>
  type: string
  created_at: string
  modified_at: string
}

export interface ImageField {
  url: string
  imgix_url: string
}

export type CosmicImage = ImageField // Changed: Merged export from types/index.ts

export interface Author extends CosmicObject {
  type: 'authors'
  metadata: {
    name: string
    bio?: string
    photo?: ImageField
  }
}

export type AuthorMetadata = Author['metadata'] // Changed: Merged export from types/index.ts

export interface Category extends CosmicObject {
  type: 'categories'
  metadata: {
    name: string
    description?: string
  }
}

export type CategoryMetadata = Category['metadata'] // Changed: Merged export from types/index.ts

export interface Post extends CosmicObject {
  type: 'posts'
  metadata: {
    title: string
    excerpt?: string
    content?: string
    featured_image?: ImageField
    author?: Author
    category?: Category
  }
}

export type PostMetadata = Post['metadata'] // Changed: Merged export from types/index.ts

// Changed: Inlined Page metadata type to match the pattern used by Author, Category, and Post.
// Using a named interface (PageMetadata) caused TS2430 because named interfaces lack the implicit
// index signature that Record<string, unknown> requires, while inline object types are compatible.
export interface Page extends CosmicObject {
  type: 'pages'
  metadata: {
    heading: string
    subheading?: string
    content: string
    hero_image?: ImageField
  }
}

export type PageMetadata = Page['metadata']

export interface CosmicResponse<T> {
  objects: T[]
  total: number
}

export interface CosmicSingleResponse<T> {
  object: T
}