import { MetadataRoute } from 'next'
import { tools } from '@/lib/registry'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://freecodetools.dev'
  
  const toolUrls = tools
    .filter(tool => tool.status !== 'planned')
    .map((tool) => ({
      url: `${baseUrl}${tool.href}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // Add supporting SEO pages
  const seoPages = [
    '/copy-paste-online',
    '/online-clipboard',
    '/share-clipboard-between-devices',
    '/send-text-between-devices',
    '/share-code-snippets-online'
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...toolUrls,
    ...seoPages,
  ]
}
