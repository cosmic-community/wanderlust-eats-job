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

export interface PageMetadata {
  heading: string
  subheading?: string
  content: string
  hero_image?: ImageField
}

export interface Page extends CosmicObject {
  type: 'pages'
  metadata: PageMetadata
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
}

export interface CosmicSingleResponse<T> {
  object: T
}