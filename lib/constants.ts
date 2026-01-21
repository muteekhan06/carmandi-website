/**
 * Site-wide constants
 * Update these based on your project requirements
 */

export const SITE_CONFIG = {
    name: "CarMandi",
    description: "Your Trusted Car Marketplace",
    url: "https://carmandi.com",
    ogImage: "/og-image.jpg",
    links: {
        twitter: "https://twitter.com/carmandi",
        facebook: "https://facebook.com/carmandi",
        instagram: "https://instagram.com/carmandi",
    },
} as const;

/**
 * Navigation links
 */
export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Buy Cars", href: "/buy" },
    { label: "Sell Car", href: "/sell" },
    { label: "Car Valuation", href: "/valuation" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
] as const;

/**
 * Footer links
 */
export const FOOTER_LINKS = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
    ],
    support: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
    ],
} as const;

/**
 * Breakpoints (matching Tailwind defaults)
 */
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;
