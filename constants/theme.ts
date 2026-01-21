/**
 * CarMandi Design System - Theme Configuration
 * Centralized design tokens for consistent styling across the application
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

export const colors = {
    // Primary Brand Colors
    primary: {
        main: "#153481",
        light: "#136BCF",
        lighter: "#F5FAFF",
        border: "#E5F0FF",
        hover: "#E5ECFF",
    },

    // Accent Colors
    accent: {
        orange: "#EB722E",
        orangeHover: "#D66220",
        yellow: "#F4E20C",
        green: "#1BFF89",
        greenGradient: "linear-gradient(90deg, #93F9B8 0%, #1BFF89 100%)",
    },

    // Neutral Colors
    neutral: {
        white: "#FFFFFF",
        black: "#000000",
        dark: "#1F1F1F",
        darkAlt: "#1A1A1A",
        gray900: "#2D2D2D",
        gray700: "#707070",
        gray600: "#747474",
        gray500: "#757575",
        gray400: "#9A9A9A",
        gray300: "#A0A0A0",
        gray200: "#B0B0B0",
        gray100: "#D0D0D0",
        gray50: "#E0E0E0",
        border: "#EBEBEB",
        borderLight: "#F0F0F0",
        borderLighter: "#F5F5F5",
    },

    // Background Colors
    background: {
        main: "#FFFFFF",
        dark: "#050B17",
        card: "#FFFFFF",
        overlay: "rgba(0, 0, 0, 0.4)",
        overlayLight: "rgba(0, 0, 0, 0.1)",
    },

    // Semantic Colors
    status: {
        live: "#1BFF89",
        featured: "#F4E20C",
    },
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
    // Font Family
    fontFamily: {
        primary: "var(--font-outfit), 'Outfit', sans-serif",
    },

    // Font Sizes (in pixels)
    fontSize: {
        xs: "10px",
        sm: "12px",
        md: "13px",
        base: "14px",
        lg: "15px",
        xl: "16px",
        "2xl": "18px",
        "3xl": "20px",
        "4xl": "22px",
        "5xl": "24px",
        "6xl": "28px",
        "7xl": "32px",
        "8xl": "48px",
    },

    // Font Weights
    fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
    },

    // Line Heights
    lineHeight: {
        tight: "1.1",
        snug: "1.2",
        normal: "1.4",
        relaxed: "1.6",
    },
} as const;

// ============================================================================
// SPACING & SIZING
// ============================================================================

export const spacing = {
    // Base spacing unit (4px grid)
    px: "1px",
    0: "0",
    0.5: "2px",
    1: "4px",
    1.5: "6px",
    2: "8px",
    2.5: "10px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
} as const;

// ============================================================================
// LAYOUT
// ============================================================================

export const layout = {
    // Container widths
    container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1360px",
        "3xl": "1800px",
        full: "99%",
    },

    // Section heights
    sectionHeight: {
        hero: "370px",
        inspectionPromo: "340px",
        card: "211px",
    },

    // Border radius
    borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "14px",
        "2xl": "24px",
        full: "9999px",
        pill: "13.5px",
    },
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
    none: "none",
    sm: "0px 1px 3px rgba(160, 160, 160, 0.23)",
    md: "0px 4px 12px rgba(0, 0, 0, 0.08)",
    lg: "0px 8px 24px rgba(0, 0, 0, 0.12)",
    card: "0px 1px 3px rgba(160, 160, 160, 0.23)",
    cardHover: "0px 4px 12px rgba(0, 0, 0, 0.08)",
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

export const transitions = {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    easing: {
        default: "ease-in-out",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
} as const;

// ============================================================================
// Z-INDEX LAYERS
// ============================================================================

export const zIndex = {
    base: 0,
    elevated: 10,
    dropdown: 20,
    sticky: 30,
    modal: 40,
    overlay: 50,
    toast: 60,
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

export const components = {
    // Button variants
    button: {
        primary: {
            bg: colors.accent.orange,
            bgHover: colors.accent.orangeHover,
            text: colors.neutral.white,
            height: "44px",
            heightLg: "48px",
            paddingX: "24px",
            paddingXLg: "32px",
            borderRadius: layout.borderRadius.md,
        },
        secondary: {
            bg: colors.primary.lighter,
            bgHover: colors.primary.hover,
            text: colors.primary.light,
            border: colors.primary.border,
            height: "40px",
            borderRadius: layout.borderRadius.md,
        },
    },

    // Card styles
    card: {
        bg: colors.background.card,
        border: `1px solid ${colors.neutral.border}`,
        borderRadius: layout.borderRadius.xl,
        shadow: shadows.card,
        shadowHover: shadows.cardHover,
    },

    // Tag styles
    tag: {
        height: "22px",
        paddingX: "12px",
        borderRadius: layout.borderRadius.sm,
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.bold,
    },

    // Timer overlay
    timer: {
        height: "27px",
        width: "90%",
        bg: colors.background.overlay,
        backdropBlur: "7px",
        borderRadius: layout.borderRadius.pill,
    },

    // Input fields
    input: {
        height: "48px",
        borderRadius: layout.borderRadius.md,
        border: `1px solid ${colors.neutral.border}`,
        bg: colors.neutral.white,
    },
} as const;

// ============================================================================
// THEME EXPORT
// ============================================================================

export const theme = {
    colors,
    typography,
    spacing,
    layout,
    shadows,
    transitions,
    zIndex,
    components,
} as const;

export type Theme = typeof theme;
export default theme;
