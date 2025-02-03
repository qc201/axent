export default function slugify(str: string) {
  return str
    .toLowerCase() // Convert the string to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/[^\w\s-]/g, "") // Remove all non-word characters except spaces and hyphens
    .replace(/[\s_-]+/g, "-") // Replace spaces, underscores, and multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}
