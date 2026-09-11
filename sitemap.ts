import { MetadataRoute } from 'next';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://sdxsoftware.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/pricing',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/refund-policy',
    '/cookie-policy',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${APP_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic portfolio slugs
  const portfolioSlugs = [
    'nexus-enterprise-saas-portal',
    'tirupati-heritage-tours',
    'aura-organic-ecommerce',
    'finedge-wealth-advisors',
  ];

  const portfolioEntries: MetadataRoute.Sitemap = portfolioSlugs.map((slug) => ({
    url: `${APP_URL}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic blog slugs
  const blogSlugs = [
    'why-nextjs-outperforms-wordpress-2026',
    'local-seo-guide-tirupati-andhra-pradesh',
    'securing-razorpay-payments-hmac-signatures',
  ];

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${APP_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...portfolioEntries, ...blogEntries];
}
