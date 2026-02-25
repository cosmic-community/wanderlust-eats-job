export interface CosmicImage {
  url: string
  imgix_url: string
}

export interface AuthorMetadata {
  name: string
  bio: string
  photo: CosmicImage
}

export interface Author {
  id: string
  title: string
  slug: string
  metadata: AuthorMetadata
}

export interface CategoryMetadata {
  name: string
  description: string
}

export interface Category {
  id: string
  title: string
  slug: string
  metadata: CategoryMetadata
}

export interface PostMetadata {
  title: string
  excerpt: string
  content: string
  featured_image: CosmicImage
  author: Author
  category: Category
}

export interface Post {
  id: string
  title: string
  slug: string
  metadata: PostMetadata
  created_at: string
}

// Changed: Added Page type for CMS-powered static pages (e.g., About)
export interface PageMetadata {
  heading: string
  subheading: string
  content: string
  hero_image: CosmicImage
}

export interface Page {
  id: string
  title: string
  slug: string
  metadata: PageMetadata
}