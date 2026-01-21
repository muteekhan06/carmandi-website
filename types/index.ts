/**
 * CarMandi Types - Central Export
 * ================================
 * All type definitions are exported from here for easy imports:
 * import { AuctionListing, SearchFilters, NavLink } from "@/types";
 */

// ============================================================================
// RE-EXPORTS
// ============================================================================

export * from "./auction";

// ============================================================================
// UI & COMPONENT TYPES
// ============================================================================

/**
 * Browse category item for homepage
 */
export interface BrowseItem {
    id: string;
    label: string;
    icon?: string;
    href?: string;
}

/**
 * Navigation link item
 */
export interface NavLink {
    href: string;
    label: string;
    isActive?: boolean;
}

/**
 * Action button configuration
 */
export interface ActionButton {
    href: string;
    label: string;
    variant?: "primary" | "secondary" | "outline";
}

/**
 * SEO metadata for pages
 */
export interface PageSEO {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
}

// ============================================================================
// FORM TYPES
// ============================================================================

/**
 * Form field state
 */
export interface FormFieldState {
    value: string;
    error: string | null;
    touched: boolean;
}

/**
 * Generic form state
 */
export interface FormState<T> {
    values: T;
    errors: Partial<Record<keyof T, string>>;
    isSubmitting: boolean;
    isValid: boolean;
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

/**
 * Paginated API response
 */
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Make specific properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific properties required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Extract value type from object
 */
export type ValueOf<T> = T[keyof T];

