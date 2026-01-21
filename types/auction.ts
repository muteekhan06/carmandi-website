/**
 * CarMandi Auction Types - Production Grade Type Definitions
 * ============================================================
 * Centralized type definitions for auction-related data structures.
 * These types are used across the entire application.
 */

// ============================================================================
// ENUMS & LITERALS
// ============================================================================

export type TransmissionType = "Manual" | "Automatic";
export type FuelType = "Petrol" | "Diesel" | "Hybrid" | "Electric" | "CNG";
export type AuctionStatus = "live" | "expired" | "sold" | "pending";
export type BodyType = "Sedan" | "SUV" | "Hatchback" | "Crossover" | "Coupe" | "Wagon" | "Van" | "Truck";

// ============================================================================
// CORE INTERFACES
// ============================================================================

/**
 * Base auction listing interface
 * Used for card displays and list views
 */
export interface AuctionListing {
    /** Unique identifier */
    id: string;
    /** Full title of the car (e.g., "Suzuki Cultus 2016 Limited Edition") */
    title: string;
    /** Manufacturing year */
    year: number;
    /** Mileage with unit (e.g., "5,452 KM") */
    mileage: string;
    /** Transmission type */
    transmission: TransmissionType;
    /** Fuel type */
    fuelType: FuelType;
    /** Starting/Current bid price in PKR */
    price: number;
    /** Inspection rating out of 10 */
    rating: number;
    /** Primary image URL */
    image: string;
    /** Auction end time as ISO date string */
    endTime: string;
    /** Whether auction is currently live */
    isLive: boolean;
    /** Whether marked as featured */
    isFeatured: boolean;
}

/**
 * Bid history entry
 */
export interface BidHistoryItem {
    id: string;
    /** Bidder username/identifier */
    user: string;
    /** Bid amount in PKR */
    amount: number;
    /** Time of bid (e.g., "4:15:22 pm") */
    time: string;
    /** Date of bid (e.g., "17/09/2025") */
    date: string;
}

/**
 * Inspection category breakdown
 */
export interface InspectionScore {
    /** Category name (e.g., "Interior", "Engine") */
    category: string;
    /** Score achieved */
    score: number;
    /** Maximum possible score (usually 10) */
    total: number;
}

/**
 * Full auction detail view
 * Extends base listing with all detail page data
 */
export interface DetailedAuction extends AuctionListing {
    /** Full description text */
    description: string;
    /** Array of all image URLs */
    images: string[];
    /** Bid history */
    bidHistory: BidHistoryItem[];
    /** Inspection details */
    inspection: {
        overallScore: number;
        breakdown: InspectionScore[];
    };
    /** Car amenities/features */
    amenities: string[];
    /** Seller notes */
    sellerNotes: string;
    /** Search/filter tags */
    tags: string[];
    /** Location city */
    location: string;
    /** Number of reviews */
    reviews: number;
}

// ============================================================================
// FILTER & SEARCH TYPES
// ============================================================================

/**
 * Search/Filter state for sidebar
 */
export interface SearchFilters {
    make: string;
    model: string;
    variant: string;
    yearMin: number;
    yearMax: number;
    priceMin: number;
    priceMax: number;
    mileageMin: string;
    mileageMax: string;
    transmission: TransmissionType | "";
    fuelType: FuelType | "";
    color: string;
    bodyTypes: string[];
    location: string;
}

/**
 * Active filter pill for display
 */
export interface ActiveFilterPill {
    id: string;
    label: string;
    removable: boolean;
    key: keyof SearchFilters;
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

/**
 * Sort options for search results
 */
export type SortOption =
    | "Recommended"
    | "Price: Low to High"
    | "Price: High to Low"
    | "Newest First"
    | "Oldest First";

/**
 * Pagination state
 */
export interface PaginationState {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
}

