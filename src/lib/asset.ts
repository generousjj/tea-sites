/**
 * Prefix a public asset path (e.g. "/projects/starport.jpg") with the
 * deployment base path. This is empty during local dev and "/tea-sites" on
 * GitHub Pages, so self-hosted images in /public resolve in both places.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
