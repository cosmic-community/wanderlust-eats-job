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

export interface Author extends CosmicObject {
  type: 'authors'
  metadata: {
    name: string
    bio?: string
    photo?: ImageField
  }
}

export interface Category extends CosmicObject {
  type: 'categories'
  metadata: {
    name: string
    description?: string
  }
}

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

export interface CosmicResponse<T> {
  objects: T[]
  total: number
}

export interface CosmicSingleResponse<T> {
  object: T
}