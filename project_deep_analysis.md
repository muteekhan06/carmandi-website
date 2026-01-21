# CarMandi Project Deep Analysis & Context

## 1. Project Overview
CarMandi is a Next.js web application for a Pakistani car auction marketplace. It connects buyers and sellers through live auctions, inspection services, and a bidding system. The project focuses on a high-fidelity "wow" aesthetic using modern design principles (glassmorphism, clean typography, vibrant colors).

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with custom configuration)
- **Icons**: Lucide React
- **Fonts**: `Outfit` (Google Fonts) via `next/font`
- **State Management**: React `useState`, `useMemo` (Local state focus)

---

## 2. Core Architecture & Configuration

### Root Layout (`app/layout.tsx`)
- **Metadata**: SEO optimized with title template `%s | CarMandi`. Defines OpenGraph and Twitter card metadata for social sharing.
- **Font**: Loads `Outfit` font with `--font-outfit` variable.
- **Structure**: Wraps children in a flex-col layout to ensure the sticky footer works correctly.
- **Viewport**: Sets maximum scale to 5 for accessibility.

### Global Styles (`app/globals.css`)
- Defines the base tailwind imports.
- Sets core body styles (antialiased, font-sans).

### Component Exports (`components/index.ts`)
- Centralized barrel file for exporting all components.
- Categorizes exports into Layout, Home, Auction, and Search components.
- Enables cleaner imports like `import { Header, Footer } from "@/components"`.

---

## 3. Data Models (`constants/auctionData.ts`)
The application relies heavily on a robust mock data structure defined in `ALL_AUCTIONS`. This mimics a real backend response.

### `DetailedAuction` Interface
Extends a base `AuctionListing` type with:
- **Core Info**: `id`, `title`, `price`, `year`, `mileage`, `transmission`, `fuelType`.
- **Status Flags**: `isLive`, `isFeatured`.
- **Dates**: `endTime` (ISO string) for the countdown timer.
- **Media**: `image` (main thumbnail), `images` (gallery array).
- **Inspection**: Nested object with `overallScore` and a `breakdown` array (e.g., Engine, Interior scores).
- **History**: `bidHistory` array tracking previous bids.
- **Metadata**: `tags`, `amenities`, `sellerNotes`.

**Key Observation**: The data is rich, supporting advanced filtering logic (by make, year, mileage, etc.) directly in the frontend.

---

## 4. Route Analysis (End-to-End)

### A. Home Page (`app/page.tsx`)
- **Type**: Server Component (mostly).
- **Structure**:
  1. `Header`: Main navigation.
  2. `HeroSection`: High impact visual entry.
  3. `BrowseBy`: Category selection (probably grid of makes/types).
  4. `FeaturedAuctions`: Dynamically imported client component.
  5. `InspectionPromo` & `ServicePromo`: Marketing sections.
  6. `ExploreCategories`: Additional navigation.
  7. `Footer`: Global footer.
- **Performance**: Uses `dynamic` imports for heavy components (`FeaturedAuctions`, `InspectionPromo`) to optimize First Contentful Paint (FCP).
- **SEO**: Injects JSON-LD structured data (`HOME_PAGE_SCHEMA`).

### B. Auctions & Search Pages (`app/auctions/page.tsx`, `app/search/page.tsx`)
These two pages share 90% of their logic but serve different entry points.
- **Type**: Client Component (`"use client"`).
- **State**:
  - `filters`: Complex object tracking Make, Model, Variant, Year Range, Price Range, Mileage, Color, Body Type, Transmission.
  - `selectedSort`: String state for sorting (Price L-H, H-L, Newest).
  - `showFilters`: Boolean toggle for mobile/desktop sidebar visibility.
- **Logic**:
  - `searchResults` (useMemo): Filters `ALL_AUCTIONS` based on all active filter criteria. Implements logic like "searching title for Make if filter is set".
  - `activeFilters` (useMemo): derived array of "pills" to show what filters are active (e.g., "Honda", "2018-2024").
  - `sortedResults` (useMemo): Sorts the filtered list.
- **Rendering**:
  - `SearchResultsHeader`: Displays count, sort dropdown, and active filter pills.
  - `SidebarFilters`: The control panel for the state.
  - `AuctionCard`: Grid of results.
  - `Pagination`: Visual-only pagination UI (currently).

### C. Dashboard (`app/dashboard/page.tsx`)
- **Type**: Client Component (Protected Route implicit).
- **User Context**: Static `USER_DATA` object (Mock: "Saad Sheikh").
- **Tabs System**:
  - Active tab state: `my-auctions` (default), `my-bids`, `my-inspections`, `payment`, `settings`, etc.
  - Renders different grid views based on the active tab (e.g., `BidCard` vs `AuctionCard`).
- **Components**:
  - `DashboardHeader`: Context-aware header (different from public header).
  - `ProfileBanner`: "Glassmorphism" effect banner showing user plan and avatar.
  - `StatsCard`: 3-column grid showing credits, plan, and auction stats.

### D. Service: Car Inspection (`app/car-inspection/page.tsx`)
- **Type**: Marketing Landing Page.
- **Content**:
  - `InspectionHeroSection`: Call to action.
  - `InspectionAssuranceSection`: Trust signals.
  - `InspectionPricingSection`: Pricing plans.
  - `WhatWeCheckSection` & `HowWeInspectSection`: Educational content.
  - `InspectionTestimonials` & `FAQ`.
- **Purpose**: To convert users into purchasing inspection packages.

### E. Static: How It Works (`app/how-carmandi-works/page.tsx`)
- **Design**: "Premium" aesthetic with step-by-step visual guides.
- **Assets**: Uses illustration SVGs (`/images/steps/step-1.svg`).
- **Sections**:
  1. Registration -> Selection -> Bidding -> Closing.
  2. Inspection Process (Dark Navy background section).
  3. Auction Sheet Verification (White background).
  4. Why Choose Car Mandi grid.

### F. Authentication: Login (`app/(auth)/login/page.tsx`)
- **Type**: Client Component.
- **Form**: Standard Email/Password login.
- **Interaction**:
  - Real-time validation (visual error states).
  - Password visibility toggle (`Eye`/`EyeOff` icons).
  - Social Auth integration (`AuthSocialButtons`).
- **Visuals**: Clean, centered card layout with red error banners on failure.

---

## 5. Component Deep Dive

### `AuctionCard.tsx`
The primary visual unit of the site.
- **Props**: `data` (AuctionListing), `status`, `showStatus`.
- **Visuals**:
  - `Image`: Next.js Image component with hover scale effect.
  - `AuctionTimer`: Overlay component showing countdown.
  - `Tags`: "Live" (Green pulse), "Featured" (Yellow), Status (Gray/Green/Orange).
  - `Info`: Year | Mileage | Transmission | Fuel.
  - `Price`: Large, bold typography.
  - `Rating`: Badge showing inspection score (e.g., 9.2/10).
- **Optimization**: Wrapped in `React.memo` for performance in large lists.

### `SidebarFilters.tsx`
A complex form component.
- **Sub-components**:
  - `FilterDropdown`: Custom UI for standard selects.
  - `RangeSlider`: Dual-handle slider for Year and Price ranges.
  - `PillGroup`: Toggle buttons for Transmission/Body type.
- **Interaction**: Directly mutates the parent `filters` state via callbacks.

### `Header.tsx` & `Footer.tsx`
- **Header**: Responsive nav. Has a `transparent` mode prop. Includes "Sell Your Car" and "Login" CTAs.
- **Footer**: Rich footer with "stay updated" newsletter input, social links, and a background car illustration (`carDecoration`).

---

## 6. Styling & Design System
- **Colors**:
  - Primary Blue: `#153481`, `#136BCF` (Action)
  - Accent Orange: `#EB722E` (Highlights/Buttons)
  - Neutrals: `#1F1F1F` (Text), `#F5F7FA` (Backgrounds)
- **Typography**: Google Font `Outfit`.
  - Usage: `font-outfit` class utility.
  - Hierarchy: Clear distinction between Headers (bold) and body text (light/regular).
- **Effects**:
  - Glassmorphism used in Dashboard Banner (`backdrop-blur`).
  - Active states: Hover shadows, transform scales on cards.

---

## 7. Global State & Logic
- **Search Logic**: Pure client-side filtering. efficient for <1000 items. Logic resides in `app/auctions/page.tsx`.
- **Icons**: Standardized use of `lucide-react` for UI icons (Chevron, Eye, etc.) and custom SVGs for specific branding marks.
