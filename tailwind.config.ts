import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================================================
      // BREAKPOINTS - Custom responsive breakpoints
      // ============================================================================
      screens: {
        'xs': '480px',
        // sm: 640px (default)
        // md: 768px (default)
        // lg: 1024px (default)
        // xl: 1280px (default)
        // 2xl: 1536px (default)
      },

      // ============================================================================
      // COLOR PALETTE - Production Design System
      // ============================================================================
      colors: {
        // Primary Brand Colors
        brand: {
          primary: "#153481",
          "primary-light": "#136BCF",
          "primary-lighter": "#F5FAFF",
          "primary-border": "#E5F0FF",
          "primary-hover": "#E5ECFF",
          secondary: "#EB722E",
          "secondary-hover": "#D66220",
        },
        // Accent Colors
        accent: {
          orange: "#EB722E",
          "orange-hover": "#D66220",
          yellow: "#F4E20C",
          green: "#1BFF89",
        },
        // Neutral Colors
        neutral: {
          dark: "#1F1F1F",
          "dark-alt": "#1A1A1A",
          900: "#2D2D2D",
          700: "#707070",
          600: "#747474",
          500: "#757575",
          400: "#9A9A9A",
          300: "#A0A0A0",
          200: "#B0B0B0",
          100: "#D0D0D0",
          50: "#E0E0E0",
        },
        // Border Colors
        border: {
          DEFAULT: "#EBEBEB",
          light: "#F0F0F0",
          lighter: "#F5F5F5",
        },
        // Background Colors
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#050B17",
          card: "#FFFFFF",
        },
        // Status Colors
        status: {
          live: "#1BFF89",
          featured: "#F4E20C",
        },
      },

      // ============================================================================
      // TYPOGRAPHY
      // ============================================================================
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "1.4" }],
        xs: ["12px", { lineHeight: "1.4" }],
        sm: ["13px", { lineHeight: "1.4" }],
        base: ["14px", { lineHeight: "1.4" }],
        md: ["15px", { lineHeight: "1.4" }],
        lg: ["16px", { lineHeight: "1.4" }],
        xl: ["18px", { lineHeight: "1.2" }],
        "2xl": ["20px", { lineHeight: "1.2" }],
        "3xl": ["22px", { lineHeight: "1.2" }],
        "4xl": ["24px", { lineHeight: "1.1" }],
        "5xl": ["28px", { lineHeight: "1.1" }],
        "6xl": ["32px", { lineHeight: "1.1" }],
        "7xl": ["48px", { lineHeight: "1.1" }],
      },

      // ============================================================================
      // LAYOUT & SPACING
      // ============================================================================
      maxWidth: {
        container: "1360px",
        "container-lg": "1800px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "14px",
        "2xl": "24px",
        pill: "13.5px",
        card: "14px",
      },

      // ============================================================================
      // SHADOWS - Optimized for Performance
      // ============================================================================
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07)",
        card: "0px 1px 3px rgba(160, 160, 160, 0.23)",
        "card-hover": "0px 4px 12px rgba(0, 0, 0, 0.08)",
        md: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        lg: "0px 8px 24px rgba(0, 0, 0, 0.12)",
      },

      // ============================================================================
      // TRANSITIONS
      // ============================================================================
      transitionDuration: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },

      // ============================================================================
      // Z-INDEX LAYERS
      // ============================================================================
      zIndex: {
        elevated: "10",
        dropdown: "20",
        sticky: "30",
        modal: "40",
        overlay: "50",
        toast: "60",
      },

      // ============================================================================
      // ANIMATIONS
      // ============================================================================
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.3s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 60s linear infinite",
        "marquee-reverse": "marquee 60s linear infinite reverse",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      // ============================================================================
      // COMPONENT-SPECIFIC SIZES
      // ============================================================================
      height: {
        "card-image": "211px",
        "hero": "370px",
        "input": "48px",
        "button": "44px",
        "button-lg": "48px",
        "tag": "22px",
        "timer": "27px",
      },
      width: {
        "timer": "90%",
      },
    },
  },
  plugins: [],
};

export default config;
