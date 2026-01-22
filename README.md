# Setapp Landing Page

A modern, responsive landing page built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Avenir Next

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment

This project is configured for deployment on **Vercel** and **Netlify**.

### Deploy to Vercel

1. **Option A: Using Vercel CLI**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Option B: Using GitHub Integration**
   - Push your code to GitHub
   - Import your repository on [Vercel](https://vercel.com)
   - Vercel will automatically detect Next.js and deploy

3. **Option C: Using Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect the settings from `vercel.json`

### Deploy to Netlify

1. **Option A: Using Netlify CLI**
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

2. **Option B: Using GitHub Integration**
   - Push your code to GitHub
   - Go to [Netlify](https://www.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will use `netlify.toml` for configuration

3. **Option C: Drag & Drop**
   - Build the project: `npm run build`
   - Drag the `.next` folder to [Netlify Drop](https://app.netlify.com/drop)

### Environment Variables

If you need environment variables, create a `.env.local` file:

```env
# Example (add your own variables as needed)
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── fonts/             # Font files
├── src/
│   └── components/
│       ├── sections/      # Page sections
│       ├── layout/        # Layout components
│       └── ui/            # UI components
├── public/                # Static assets
│   └── imgs/             # Images
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies
```

## Features

- ✅ Fully responsive design
- ✅ Optimized images with Next.js Image
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ SEO-friendly structure
- ✅ Production-ready build

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private project - All rights reserved.
