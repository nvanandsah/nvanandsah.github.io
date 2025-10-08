#!/bin/bash

# Build static site for GitHub Pages
echo "Building static site for GitHub Pages..."

# Build with the static config
vite build --config vite.config.static.ts

# Copy .nojekyll to dist
cp public/.nojekyll dist/

echo "Build complete! Static files are in the 'dist' directory."
echo "To deploy, commit and push the dist folder to your GitHub Pages branch."
