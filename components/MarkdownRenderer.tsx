'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg prose-stone max-w-none prose-headings:text-earth-950 prose-p:text-earth-700 prose-strong:text-earth-900 prose-a:text-brand-600 hover:prose-a:text-brand-700 prose-blockquote:border-brand-300 prose-blockquote:text-earth-600 prose-li:text-earth-700">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}