import { categories, getAllRights, templates } from '@/data';

const siteUrl =
  `https://nyaymitra.help/` ||
  (`https://nyaymitra.help/`
    ? `https://nyaymitra.help/`
    : 'http://localhost:3000');

const baseUrl = siteUrl.replace(/\/$/, '');

function entry(path, changeFrequency, priority) {
  return {
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap() {
  const mainRoutes = [
    entry('/', 'weekly', 1),
    entry('/rights', 'weekly', 0.9),
    entry('/templates', 'monthly', 0.8),
    entry('/helplines', 'monthly', 0.8),
    entry('/traffic', 'monthly', 0.7),
    entry('/search', 'weekly', 0.6),
  ];

  const categoryRoutes = categories.map((category) =>
    entry(`/categories/${category.slug}`, 'monthly', 0.7)
  );

  const rightRoutes = getAllRights().map((right) =>
    entry(`/rights/${right.id}`, 'monthly', 0.8)
  );

  const templateRoutes = templates.map((template) =>
    entry(`/templates/${template.id}`, 'monthly', 0.7)
  );

  return [...mainRoutes, ...categoryRoutes, ...rightRoutes, ...templateRoutes];
}
