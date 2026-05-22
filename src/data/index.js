import categories from './categories';
import employment from './rights/employment';
import tenant from './rights/tenant';
import consumer from './rights/consumer';
import womenSafety from './rights/women-safety';
import police from './rights/police';
import cyberCrime from './rights/cyber-crime';
import family from './rights/family';
import student from './rights/student';
import templates from './templates';
import helplines from './helplines';
import trafficFines from './traffic';

const rightsMap = {
  employment,
  tenant,
  consumer,
  'women-safety': womenSafety,
  police,
  'cyber-crime': cyberCrime,
  family,
  student,
};

export function getAllRights() {
  return Object.values(rightsMap).flat();
}

export function getRightsByCategory(slug) {
  return rightsMap[slug] || [];
}

export function getRightById(id) {
  return getAllRights().find(r => r.id === id);
}

export function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug);
}

export function searchRights(query) {
  const q = query.toLowerCase();
  return getAllRights().filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.description.toLowerCase().includes(q) ||
    r.keywords.some(k => k.toLowerCase().includes(q)) ||
    r.plainLanguage.toLowerCase().includes(q)
  );
}

export function searchTemplates(query) {
  const q = query.toLowerCase();
  return templates.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.whenToUse.toLowerCase().includes(q)
  );
}

export function searchHelplines(query) {
  const q = query.toLowerCase();
  return helplines.filter(h =>
    h.name.toLowerCase().includes(q) ||
    h.description.toLowerCase().includes(q) ||
    h.category.toLowerCase().includes(q)
  );
}

export function searchTrafficFines(query) {
  const q = query.toLowerCase();
  return trafficFines.filter(tf =>
    tf.offense.toLowerCase().includes(q) ||
    tf.section.toLowerCase().includes(q)
  );
}

export { categories, templates, helplines, rightsMap, trafficFines };
