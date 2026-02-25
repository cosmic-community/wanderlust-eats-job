# Wanderlust Eats

![Wanderlust Eats](https://imgix.cosmicjs.com/ef62d1e0-125f-11f1-bf13-fdf90c759f7d-photo-1551183053-bf91a1d81141-1772033867160.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A stunning food travel blog built with Next.js 16 and Cosmic. Explore culinary adventures around the world — from Southern Italian pasta pilgrimages to the vibrant night markets of Taipei.

## Features

- 🍜 **Dynamic Blog Posts** — Rich markdown content with featured images and author attribution
- 🏷️ **Category Browsing** — Filter posts by Street Food, Regional Cuisine, and more
- 👨‍🍳 **Author Profiles** — Dedicated pages for each writer with their published articles
- 📱 **Fully Responsive** — Beautiful reading experience on desktop, tablet, and mobile
- 🖼️ **Optimized Images** — High-quality images via imgix with automatic format and compression
- ⚡ **Server-Side Rendering** — Fast page loads with Next.js App Router and Server Components

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=699f16f753ca58d0e4409356&clone_repository=699f184a53ca58d0e4409500)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A food travel blog with posts, authors, and categories"

### Code Generation Prompt

> "Based on the content model I created for 'A food travel blog with posts, authors, and categories', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [react-markdown](https://github.com/remarkjs/react-markdown) — Markdown rendering

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with your food blog bucket

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```
4. Run the development server:
   ```bash
   bun dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Posts with Connected Objects

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Post by Slug

```typescript
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post-slug' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses three content types:

- **Posts** — Blog articles with title, excerpt, content (markdown), featured image, author, and category
- **Authors** — Writers with name, bio, and photo
- **Categories** — Content groupings with name and description

All content is managed through the [Cosmic dashboard](https://app.cosmicjs.com).

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project on [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Add environment variables in the Netlify dashboard
5. Deploy
<!-- README_END -->