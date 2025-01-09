export function generateSlug(title: String) {
  const slug = title
    .toLowerCase()                                      // Convert to lowercase
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")   // Remove accents
    .replace(/[^\w\s-]/g, '')                           // Remove non-word characters except spaces and hyphens
    .trim()                                             // Trim spaces
    .replace(/\s+/g, '-')                               // Replace spaces with hyphens
    .replace(/-+/g, '-')                                // Replace multiple hyphens with a single hyphen
    .slice(0, 50);                                      // Limit to 50 characters (you could adjust this if needed)

  return slug;
}