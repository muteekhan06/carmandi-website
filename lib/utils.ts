import { clsx, type ClassValue } from "clsx";

// ============================================================================
// CLASS UTILITIES
// ============================================================================

/**
 * Utility function to merge Tailwind CSS classes
 * Simpler alternative to clsx + tailwind-merge (we're keeping it lightweight)
 */
export function cn(...inputs: ClassValue[]): string {
    return clsx(inputs);
}

// ============================================================================
// FORMATTING UTILITIES
// ============================================================================

/**
 * Format price with currency
 */
export function formatPrice(price: number, currency: string = "PKR"): string {
    return new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
    return new Intl.NumberFormat("en-PK").format(num);
}

/**
 * Format price in short form (e.g., 1.5M, 500K)
 */
export function formatPriceShort(value: number): string {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return value.toString();
}

/**
 * Format mileage with proper suffix
 */
export function formatMileage(mileage: string | number): string {
    const num = typeof mileage === "string"
        ? parseInt(mileage.replace(/[^0-9]/g, ""), 10)
        : mileage;
    return `${formatNumber(num)} KM`;
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + "...";
}

/**
 * Truncate text at word boundary
 */
export function truncateAtWord(text: string, maxLength: number = 200): string {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return truncated.substring(0, lastSpace) + "...";
}

// ============================================================================
// TIME & DATE UTILITIES
// ============================================================================

export interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
}

/**
 * Calculate time remaining for auction timers
 * Optimized for frequent calls with minimal allocations
 */
export function calculateTimeRemaining(endTime: string | Date): TimeRemaining {
    const end = typeof endTime === "string" ? new Date(endTime).getTime() : endTime.getTime();
    const difference = end - Date.now();

    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
    };
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-PK", options ?? {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

// ============================================================================
// PERFORMANCE UTILITIES
// ============================================================================

/**
 * Generate unique ID
 */
export function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

/**
 * Throttle function for scroll/resize handlers
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
    fn: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle = false;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Simple memoization for expensive calculations
 */
export function memoize<T extends (...args: unknown[]) => unknown>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();
    return ((...args: Parameters<T>) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key)!;
        }
        const result = fn(...args) as ReturnType<T>;
        cache.set(key, result);
        return result;
    }) as T;
}

// ============================================================================
// ENVIRONMENT DETECTION
// ============================================================================

/**
 * Check if we're on the client side
 */
export const isClient = typeof window !== "undefined";

/**
 * Check if we're on the server side
 */
export const isServer = typeof window === "undefined";

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate Pakistani phone number
 */
export function isValidPakistaniPhone(phone: string): boolean {
    const phoneRegex = /^(\+92|0)?3[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ""));
}

/**
 * Parse mileage string to number
 */
export function parseMileage(mileage: string): number {
    return parseInt(mileage.replace(/[^0-9]/g, ""), 10) || 0;
}
