import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/institution-dashboard/'],
    },
    sitemap: 'https://aurosiksha.org/sitemap.xml',
  };
}
