# Deployment Guide

This guide will help you deploy the Setapp landing page to **Vercel** or **Netlify**.

## Quick Deploy Options

### 🚀 Vercel (Recommended for Next.js)

**Fastest Method:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

**GitHub Integration:**
1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js and deploys

### 🌐 Netlify

**Fastest Method:**
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run `netlify deploy --prod`
3. Follow the prompts

**GitHub Integration:**
1. Push your code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify uses `netlify.toml` automatically

## Pre-Deployment Checklist

- [ ] All images are in `/public/imgs/` directory
- [ ] Fonts are in `/app/fonts/` directory
- [ ] No hardcoded localhost URLs
- [ ] Environment variables (if any) are configured
- [ ] Build passes locally: `npm run build`

## Build Configuration

The project includes:
- ✅ `vercel.json` - Vercel deployment config
- ✅ `netlify.toml` - Netlify deployment config
- ✅ `.gitignore` - Updated for Next.js
- ✅ `next.config.mjs` - Optimized for production

## Troubleshooting

### Build Fails
- Ensure Node.js 18+ is installed
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Verify all images are in `/public/imgs/`
- Check image paths in components
- Ensure images are committed to Git

### Fonts Not Loading
- Verify fonts are in `/app/fonts/`
- Check font paths in `app/layout.tsx`

## Environment Variables

If you need environment variables:

1. **Vercel**: Add them in Project Settings → Environment Variables
2. **Netlify**: Add them in Site Settings → Environment Variables

Create `.env.local` for local development (this file is gitignored).

## Post-Deployment

After deployment:
1. Test all pages and sections
2. Verify images load correctly
3. Check responsive design on mobile/tablet
4. Test all interactive elements
5. Verify fonts load correctly

## Support

For deployment issues:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
