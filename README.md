# CarMandi - Pakistan's Premier Car Auction Marketplace

A production-grade Next.js 14 web application for Pakistan's premier car auction marketplace. Built with TypeScript, Tailwind CSS, and modern React patterns.

![CarMandi](./public/og-image.jpg)

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **State Management**: React useState/useContext
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Tailwind

## 📁 Project Structure

```
carmandi-website/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Authentication routes (login, register)
│   ├── auction/[id]/       # Dynamic auction detail pages
│   ├── search/             # Search & filter page
│   ├── dashboard/          # User dashboard
│   └── ...                 # Other pages
├── components/             # React components
│   ├── common/             # Reusable UI primitives (ErrorBoundary, Skeleton)
│   ├── auction/            # Auction-specific components
│   ├── dashboard/          # Dashboard components
│   ├── auth/               # Authentication components
│   ├── about/              # About page components
│   └── icons/              # Custom SVG icons
├── constants/              # Static data & configuration
│   ├── auctionData.ts      # Mock auction listings
│   ├── theme.ts            # Design system tokens
│   └── ...                 # Other constants
├── lib/                    # Utilities & hooks
│   ├── hooks/              # Custom React hooks
│   ├── utils.ts            # Helper functions
│   └── constants.ts        # Site configuration
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
    ├── icons/              # SVG icons
    └── images/             # Images
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## 📦 Key Features

### Performance Optimizations
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting with dynamic imports
- ✅ Proper `sizes` attribute for responsive images
- ✅ CSS-in-Tailwind for minimal runtime overhead
- ✅ Memoized components with `React.memo`
- ✅ Production headers for caching

### Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Focus-visible outlines
- ✅ Reduced motion support
- ✅ Screen reader utilities

### Code Quality
- ✅ TypeScript strict mode
- ✅ Centralized type definitions
- ✅ Barrel exports for clean imports
- ✅ Production-grade error boundaries
- ✅ Skeleton loading states

## 🎨 Design System

Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    primary: "#153481",      // Navy blue
    secondary: "#EB722E",    // Orange
  },
  accent: {
    green: "#1BFF89",        // Live badge
    yellow: "#F4E20C",       // Featured badge
  }
}
```

## 📂 Import Patterns

```typescript
// Components
import { Header, Footer, AuctionCard } from "@/components";

// Types
import { AuctionListing, SearchFilters } from "@/types";

// Utilities
import { cn, formatPrice, useCountdown } from "@/lib";

// Constants
import { theme, ALL_AUCTIONS } from "@/constants";
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📄 License

Private - All rights reserved.
