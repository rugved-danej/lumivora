// lib/slugify.js
// Helper function to create URL-friendly slugs from product names
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single
}

// Helper to create product URL
export function getProductUrl(product) {
  const slug = slugify(product.name);
  return `/product/${slug}`;
}

// Helper to get product ID from name/slug (for API calls)
export function getProductIdFromSlug(products, slug) {
  const product = products.find(p => slugify(p.name) === slug);
  return product?._id;
}