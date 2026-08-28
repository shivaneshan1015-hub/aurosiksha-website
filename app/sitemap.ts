import { MetadataRoute } from 'next';
import { COURSES, WEBINARS, SIKSHA_BITES, AOP_ROLES, RESOURCES, EBOOKS, ARTICLES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aurosiksha.org';

  const staticRoutes = [
    '',
    '/learn',
    '/learn/siksha-bites',
    '/learn/webinars',
    '/learn/courses',
    '/learn/aop',
    '/learn/resources',
    '/learn/e-books',
    '/for-institutions',
    '/about',
    '/articles',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const courseRoutes = COURSES.map(c => ({
    url: `${baseUrl}/learn/courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const webinarRoutes = WEBINARS.map(w => ({
    url: `${baseUrl}/learn/webinars/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const biteRoutes = SIKSHA_BITES.map(b => ({
    url: `${baseUrl}/learn/siksha-bites/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const aopRoutes = AOP_ROLES.map(r => ({
    url: `${baseUrl}/learn/aop/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const resourceRoutes = RESOURCES.map(res => ({
    url: `${baseUrl}/learn/resources/${res.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const ebookRoutes = EBOOKS.map(eb => ({
    url: `${baseUrl}/learn/e-books/${eb.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articleRoutes = ARTICLES.map(a => ({
    url: `${baseUrl}/articles/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...webinarRoutes,
    ...biteRoutes,
    ...aopRoutes,
    ...resourceRoutes,
    ...ebookRoutes,
    ...articleRoutes,
  ];
}
