import type { NextConfig } from "next";
import path from "node:path";

// When building for GitHub Pages we static-export and serve the site from
// the /tea-sites project subpath. Local dev keeps clean root-relative URLs.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "tea-sites";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Pin the workspace root so a parent lockfile doesn't confuse Turbopack.
  turbopack: {
    root: path.resolve(__dirname),
  },
  ...(isPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
