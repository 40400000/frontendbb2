import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bolbaas.nl'; // Ensure this is your production URL
  const today = new Date().toISOString();

  return [
    {
      url: `${baseUrl}`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/prijzen`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/automatisering`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/features/store-prestaties`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/features/tools`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/features/tracking`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]
} 