# Setapp Landing Page - Project Structure

## Overview
This is a pixel-perfect desktop landing page for Setapp, built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS.

## Page Structure (Top to Bottom)

### 1. Header Section (`HeaderHeroSection`)
- **Location**: `src/components/sections/HeaderHeroSection.tsx`
- **Contains**:
  - Navigation bar with logo, nav links, language selector, Sign In, Try free button
  - Hero content with centered frame:
    - Logo tile (black rounded square)
    - Headline: "Dozens of apps. One subscription. $9.99"
    - Colorful feature tags/badges scattered around (WORK WITH PICS, FIX WIFI, etc.)
    - Primary CTA: "Try free for 7 days" button
    - App store buttons (Apple, Google)
    - Subtitle: "Power up your workflow with Setapp..."
    - Bottom divider line

### 2. Features Section (`FeaturesSection`)
- **Location**: `src/components/sections/FeaturesSection.tsx`
- **Contains**:
  - Section header: "What you get on Setapp." (left) + subtitle about 240+ apps (right)
  - Three app showcase cards:
    - **Top card (large)**: "Keep your Mac clean" - pink/purple gradient with app screenshot
    - **Bottom left**: "Write code" - code editor screenshot
    - **Bottom right**: "Join meetings in a click" - meeting app screenshot
  - "View all superpowers" link at bottom right

### 3. Testimonials Section (`TestimonialsSection`)
- **Location**: `src/components/sections/TestimonialsSection.tsx`
- **Contains**:
  - Section header: "Your Setapp journey." + description about Setapp search
  - Large testimonial card:
    - Left: Quote from Jason Staczek about musicians using Setapp
    - Right: Portrait of Jason with purple gradient background
    - Play button icon
    - Carousel controls (arrows + dots)

### 4. Quotes Section (`QuotesSection`)
- **Location**: `src/components/sections/QuotesSection.tsx`
- **Contains**:
  - Section header: "Setapp in your words." + subtitle
  - Social media icons (Facebook, Twitter, Instagram, YouTube)
  - Three testimonial cards in carousel:
    - Purple card: Arash Pourhabibi (Twitter)
    - Orange card: Mauricio Sanchez (Instagram)
    - Purple card: Meredith Sweet (Facebook)
  - Carousel navigation controls

### 5. Pricing CTA Section (`PricingSection`)
- **Location**: `src/components/sections/PricingSection.tsx`
- **Contains**:
  - Large white rounded card
  - Text: "Superpowers starting $9.99/month. Free for 7 days."
  - Two buttons:
    - Primary: "Get started now" (dark)
    - Secondary: "More about Setapp" (white)

### 6. Footer Section (`FooterSection`)
- **Location**: `src/components/sections/FooterSection.tsx`
- **Contains**:
  - Top row:
    - Left: Logo + "SETAPP" text
    - Newsletter signup: "Updates from our team, written with love ❤️" + email input + arrow button
  - Three columns of links:
    - **Home**: How It Works, AI Apps, Pricing, Setapp for Teams, Blog, Podcast, Download
    - **About**: Support, Education Discount, Family Plan, For Developers, Gift Cards, etc.
    - **Getting started with Setapp**: Remove access, Fix macOS Ventura, Best apps, etc.
  - Bottom row:
    - Left: Copyright + legal links (Terms, Privacy)
    - Right: Language selector + social media icons

## Component Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Container.tsx      # Centered content wrapper (max-w-1440px)
│   │   └── Section.tsx        # Vertical spacing wrapper
│   ├── ui/
│   │   ├── Button.tsx         # Reusable button component
│   │   ├── Badge.tsx          # Pill badge component
│   │   └── Card.tsx           # Card wrapper component
│   └── sections/
│       ├── HeaderHeroSection.tsx
│       ├── FeaturesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── QuotesSection.tsx
│       ├── PricingSection.tsx
│       └── FooterSection.tsx
└── app/
    ├── layout.tsx             # Root layout with fonts
    ├── page.tsx               # Main landing page
    └── globals.css            # Global styles + Tailwind

public/
└── imgs/
    ├── header/                # Header images
    ├── header-container/      # Hero section images
    └── TestimonialsSection/   # Testimonial images
```

## Design Specifications

- **Frame width**: 1440px (centered, not fixed)
- **Background color**: #26262B
- **Font**: Inter (via Next.js font optimization)
- **Spacing**: Consistent vertical rhythm using Section component
- **Colors**: Defined in `tailwind.config.ts`
- **Responsive**: Desktop-only (no mobile breakpoints)

## Key Features

- Pixel-perfect spacing and typography
- Reusable UI components
- Clean, human-readable code structure
- Semantic HTML
- Accessible markup
- TypeScript for type safety
- Tailwind utility classes (no inline styles)
