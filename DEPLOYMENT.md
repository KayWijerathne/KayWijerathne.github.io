# GitHub Pages Deployment Guide

## Quick Fix for Blank Page Issue

The blank white page issue was caused by missing base path configuration in Vite. This has been fixed by:

1. Adding `base: "/KayWijerathne.github.io/"` to `vite.config.ts`
2. Creating a GitHub Actions workflow for automated deployment
3. Adding a build script for GitHub Pages

## Deployment Steps

### Option 1: Automated Deployment (Recommended)
1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Go to your repository Settings → Pages
4. Set Source to "GitHub Actions"

### Option 2: Manual Deployment
1. Run the build command:
   ```bash
   npm run build:gh-pages
   ```
2. The built files will be in the `dist/` folder
3. Upload the contents of `dist/` to your GitHub Pages branch

## Important Notes

- **Base Path**: Your site is configured for the repository name `KayWijerathne.github.io`
- **Routing**: If you change the repository name, update the `base` property in `vite.config.ts`
- **Build Output**: The build creates a `dist/` folder with all necessary files

## Troubleshooting

- **Still seeing blank page**: Check browser console for JavaScript errors
- **Assets not loading**: Verify the base path matches your repository name
- **Build fails**: Check the Actions tab in your GitHub repository for error details

## Repository Settings

Make sure your GitHub repository has:
- GitHub Pages enabled in Settings → Pages
- Source set to "GitHub Actions" (after first deployment)
- Proper permissions for the GitHub Actions workflow 