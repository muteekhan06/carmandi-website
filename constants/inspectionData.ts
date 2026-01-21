/**
 * Inspection Promo Section - Content Configuration
 * All text and feature data for the inspection promo component
 */

export const INSPECTION_PROMO_CONTENT = {
    heading: {
        line1: "Get your Car",
        line2: "Inspected at Home!!",
    },

    subtitle: "150+ points professional inspection",

    features: [
        {
            id: "verified-report",
            icon: "FileText",
            text: "Verified report delivered to you",
        },
        {
            id: "engine-check",
            icon: "Car",
            text: "Engine, Body, Suspension & more",
        },
    ],

    pricing: {
        label: "Only",
        currency: "Pkr",
        amount: "3,500",
        value: 3500,
    },

    cta: {
        text: "Book an Inspection",
        link: "/book-inspection",
    },

    sampleReportLink: "/sample-report",

    // Background image
    backgroundImage: "/images/hero/inspection-promo.webp",
} as const;

export type InspectionPromoContent = typeof INSPECTION_PROMO_CONTENT;

export const INSPECTION_HERO_CONTENT = {
    heading: {
        highlight: "Autofy",
        sub: "Professional Car Inspections You Can Trust!",
    },
    search: {
        inputPlaceholder: "Search by ID or Registration Model",
        buttonLabel: "Select a car",
    },
    images: {
        left: "/images/inspection/hero-left.svg",
        right: "/images/inspection/hero-right.svg",
    },
} as const;

export const INSPECTION_FEATURES_CONTENT = {
    heading: "We Assure you Buying",
    description: "Get accurate & reliable car inspection report in Pakistan. We ensure every vehicle meets our strict quality standards before you make a decision.",
    cta: {
        label: "View Sample Report",
        link: "/sample-report.pdf" // Placeholder for now, or could be a real route
    },
    rows: {
        row1: [
            { icon: "ShieldCheck", label: "Fraud Control Measurement" },
            { icon: "CheckCircle2", label: "360 Degree Quality Checks" },
            { icon: "Wrench", label: "Diagnose with Advance Tools" },
            { icon: "ScanLine", label: "Paint & Body Inspection" },
            { icon: "ThermometerSun", label: "AC & Interior Check" },
        ],
        row2: [
            { icon: "FileText", label: "Service History" },
            { icon: "CheckCircle2", label: "150+ Point Inspection" },
            { icon: "FileText", label: "Service History" },
            { icon: "Activity", label: "Rust & Corrosion Detection" },
            { icon: "FileCheck", label: "Comprehensive Digital Report" },
            { icon: "Zap", label: "Low TAT for Services" },
        ],
        row3: [
            { icon: "Award", label: "High Skilled Man Power" },
            { icon: "FileCheck", label: "Document Verification" },
            { icon: "ScanLine", label: "Electronic Systems Scan" },
            { icon: "Disc", label: "Brake & Suspension Test" },
            { icon: "Activity", label: "Tire Condition Analysis" },
            { icon: "ShieldCheck", label: "Post Inspection Support" },
        ]
    }
} as const;
