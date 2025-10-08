#!/bin/bash

# Build static site for GitHub Pages
echo "Building static site for GitHub Pages..."

# Build with the static config
vite build --config vite.config.static.ts

# Copy necessary files to dist
cp public/.nojekyll dist/
cp public/robots.txt dist/
cp public/sitemap.xml dist/

echo "Build complete! Static files are in the 'dist' directory."
echo "Included: .nojekyll, robots.txt, sitemap.xml for SEO optimization"
echo "To deploy, commit and push the dist folder to your GitHub Pages branch."
