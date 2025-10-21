import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Baasy - data en automatisering voor bol partners',
    short_name: 'Baasy',
    description: 'Baasy is het nieuwe niveau voor data en automatisering voor bol partners, gedreven door AI. Automatiseer je store, focus op ondernemen. Vergaande data over miljoenen keywords en producten, miljarden datapunten.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
       {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  }
} 