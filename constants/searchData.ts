/**
 * Search Page Constants
 */

// Filter State Definition
export interface SidebarFilterState {
    make: string;
    model: string;
    variant: string;
    yearMin: number;
    yearMax: number;
    mileageMin: string;
    mileageMax: string;
    priceMin: number;
    priceMax: number;
    color: string;
    transmission: string;
    bodyTypes: string[];
}

export const DEFAULT_SIDEBAR_FILTERS: SidebarFilterState = {
    make: "",
    model: "",
    variant: "",
    yearMin: 2000,
    yearMax: 2024,
    mileageMin: "",
    mileageMax: "",
    priceMin: 0,
    priceMax: 15000000,
    color: "",
    transmission: "",
    bodyTypes: [],
};

// Active Filter Pill Definition
export interface ActiveFilterPill {
    id: string;
    label: string;
    removable: boolean;
    key: keyof SidebarFilterState; // Mapping back to the state key
}

export const MOCK_ACTIVE_FILTERS: ActiveFilterPill[] = [
    { id: "make", label: "Toyota", removable: true, key: "make" },
    { id: "model", label: "Corolla", removable: true, key: "model" },
    { id: "variant", label: "GLI 2019 1.5", removable: true, key: "variant" },
    { id: "year", label: "2014 - 2020", removable: true, key: "yearMin" },
];

export const SORT_OPTIONS = [
    "Recommended",
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
    "Oldest First",
] as const;

export type SortOption = typeof SORT_OPTIONS[number];

export const SEARCH_PAGE_META = {
    title: "Search Cars",
    description: "Find your dream car from thousands of live auctions on CarMandi.",
};

// ============================================================================
// FILTER DATA CONSTANTS
// ============================================================================

export interface DropdownOption {
    value: string;
    label: string;
}

export const MAKES: DropdownOption[] = [
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "suzuki", label: "Suzuki" },
    { value: "hyundai", label: "Hyundai" },
    { value: "kia", label: "KIA" },
];

// Added 'make' property to associate models with makes
export const MODELS: (DropdownOption & { make: string })[] = [
    { value: "corolla", label: "Corolla", make: "toyota" },
    { value: "yaris", label: "Yaris", make: "toyota" },
    { value: "civic", label: "Civic", make: "honda" },
    { value: "city", label: "City", make: "honda" },
];

// Added 'model' property to associate variants with models
export const VARIANTS: (DropdownOption & { model: string })[] = [
    { value: "gli-2019-1.5", label: "GLI 2019 1.5", model: "corolla" },
    { value: "gli-2020-1.6", label: "GLI 2020 1.6", model: "corolla" },
    { value: "xli", label: "XLI", model: "corolla" },
    { value: "altis", label: "Altis", model: "corolla" },
    // Adding dummy variants for other models to prevent empty lists if possible
    { value: "vti", label: "VTi Oriel", model: "civic" },
    { value: "rs", label: "RS Turbo", model: "civic" },
];

export const COLORS: DropdownOption[] = [
    { value: "", label: "Select color" },
    { value: "white", label: "White" },
    { value: "black", label: "Black" },
    { value: "silver", label: "Silver" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
];

export const FILTER_BODY_TYPES = ["Sedan", "Hatchback", "SUV", "Crossover"];

export const TRANSMISSIONS = ["Automatic", "Manual"];

// Chart data for price distribution visualization
export const PRICE_CHART_DATA = [
    0.3, 0.35, 0.25, 0.4, 0.55, 0.7, 0.85, 1, 0.9, 0.75, 0.8, 0.7, 0.5, 0.6, 0.65, 0.55, 0.7, 0.6, 0.5, 0.55, 0.45, 0.5, 0.4
];
