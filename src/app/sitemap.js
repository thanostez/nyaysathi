import { blogCategories, blogPosts, categories, getAllRights, guides, templates } from '@/data';

const baseUrl = 'https://nyaymitra.help';

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
    entry('/solve-my-problem', 'weekly', 0.9),
    entry('/tools', 'weekly', 0.8),
    entry('/templates', 'monthly', 0.8),
    entry('/blog', 'weekly', 0.9),
    entry('/guides', 'weekly', 0.8),
    entry('/helplines', 'monthly', 0.8),
    entry('/traffic', 'monthly', 0.7),
    entry('/search', 'weekly', 0.6),
    entry('/about', 'monthly', 0.6),
    entry('/contact', 'monthly', 0.5),
    entry('/privacy', 'yearly', 0.4),
    entry('/terms', 'yearly', 0.4),
    entry('/legal-disclaimer', 'yearly', 0.4),
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

  const blogCategoryRoutes = blogCategories.map((category) =>
    entry(`/blog/category/${category.slug}`, 'weekly', 0.8)
  );

  const blogPostRoutes = blogPosts.map((post) =>
    entry(`/blog/${post.slug}`, 'monthly', 0.8)
  );

  const guideRoutes = guides.map((guide) =>
    entry(`/guides/${guide.slug}`, 'monthly', 0.8)
  );

  return [
    ...mainRoutes,
    ...categoryRoutes,
    ...rightRoutes,
    ...templateRoutes,
    ...blogCategoryRoutes,
    ...blogPostRoutes,
    ...guideRoutes,
  ];
}
