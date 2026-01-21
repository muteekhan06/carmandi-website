export interface ExploreCategoryItem {
    id: string;
    label: string;
    icon?: string;
}

export const POPULAR_BRANDS: ExploreCategoryItem[] = [
    { id: "honda", label: "Honda", icon: "/images/brands/honda.svg" },
    { id: "mitsubishi", label: "Mitsubishi", icon: "/images/brands/mitsubishi.svg" },
    { id: "toyota", label: "Toyota", icon: "/images/brands/toyota.svg" },
    { id: "chevrolet", label: "Chevrolet", icon: "/images/brands/chevrolet.svg" },
    { id: "nissan", label: "Nissan", icon: "/images/brands/nissan.svg" },
    { id: "changan", label: "Changan", icon: "/images/brands/changan.svg" },
    { id: "mercedes", label: "Mercedes", icon: "/images/brands/mercedes.svg" },
    { id: "audi", label: "Audi", icon: "/images/brands/audi.svg" },
    { id: "subaru", label: "Subaru", icon: "/images/brands/subaru.svg" },
];

export const TOP_MODELS: ExploreCategoryItem[] = [
    { id: "corolla", label: "Corolla", icon: "/images/brands/toyota.svg" },
    { id: "civic", label: "Civic", icon: "/images/brands/honda.svg" },
    { id: "city", label: "City", icon: "/images/brands/honda.svg" },
    { id: "alto", label: "Alto", icon: "/images/brands/suzuki.svg" },
    { id: "swift", label: "Swift", icon: "/images/brands/suzuki.svg" },
    { id: "cultus", label: "Cultus", icon: "/images/brands/suzuki.svg" },
    { id: "sportage", label: "Sportage", icon: "/images/brands/kia.svg" },
    { id: "tucson", label: "Tucson", icon: "/images/brands/hyundai.svg" },
    { id: "fortuner", label: "Fortuner", icon: "/images/brands/toyota.svg" },
];

export const POPULAR_CITIES: ExploreCategoryItem[] = [
    { id: "karachi", label: "Karachi", icon: "/images/ui-icons/map-pin.svg" },
    { id: "lahore", label: "Lahore", icon: "/images/ui-icons/map-pin.svg" },
    { id: "islamabad", label: "Islamabad", icon: "/images/ui-icons/map-pin.svg" },
    { id: "rawalpindi", label: "Rawalpindi", icon: "/images/ui-icons/map-pin.svg" },
    { id: "peshawar", label: "Peshawar", icon: "/images/ui-icons/map-pin.svg" },
    { id: "faisalabad", label: "Faisalabad", icon: "/images/ui-icons/map-pin.svg" },
    { id: "multan", label: "Multan", icon: "/images/ui-icons/map-pin.svg" },
    { id: "gujranwala", label: "Gujranwala", icon: "/images/ui-icons/map-pin.svg" },
    { id: "sialkot", label: "Sialkot", icon: "/images/ui-icons/map-pin.svg" },
];

export const PRICES: ExploreCategoryItem[] = [
    { id: "under-5", label: "Under 5 Lacs", icon: "/images/ui-icons/tag.svg" },
    { id: "5-10", label: "5 - 10 Lacs", icon: "/images/ui-icons/tag.svg" },
    { id: "10-20", label: "10 - 20 Lacs", icon: "/images/ui-icons/tag.svg" },
    { id: "20-30", label: "20 - 30 Lacs", icon: "/images/ui-icons/tag.svg" },
    { id: "30-40", label: "30 - 40 Lacs", icon: "/images/ui-icons/tag.svg" },
    { id: "40-50", label: "40 - 50 Lacs", icon: "/images/ui-icons/tag.svg" },
    { id: "above-50", label: "Above 50 Lacs", icon: "/images/ui-icons/tag.svg" },
];

export const BODY_STYLES: ExploreCategoryItem[] = [
    { id: "sedan", label: "Sedan", icon: "/images/body-types/sedan.svg" },
    { id: "suv", label: "SUV", icon: "/images/body-types/suv.svg" },
    { id: "hatchback", label: "Hatchback", icon: "/images/body-types/hatchback.svg" },
    { id: "crossover", label: "Crossover", icon: "/images/body-types/suv.svg" },
    { id: "mpv", label: "MPV", icon: "/images/body-types/suv.svg" },
    { id: "van", label: "Van", icon: "/images/body-types/suv.svg" },
    { id: "mini-van", label: "Mini Van", icon: "/images/body-types/suv.svg" },
    { id: "truck", label: "Truck", icon: "/images/body-types/truck.svg" },
    { id: "coupe", label: "Coupe", icon: "/images/body-types/sedan.svg" },
];

export const TABS = [
    "Top Brands",
    "Top Models",
    "Popular Cities",
    "Prices",
    "Body Styles"
] as const;

export type TabType = typeof TABS[number];

export const ITEMS_MAP: Record<TabType, ExploreCategoryItem[]> = {
    "Top Brands": POPULAR_BRANDS,
    "Top Models": TOP_MODELS,
    "Popular Cities": POPULAR_CITIES,
    "Prices": PRICES,
    "Body Styles": BODY_STYLES,
};

export const EXPLORE_CONTENT = {
    title: "Explore By Popular Categories",
    buttonLabel: "Browse Live Auctions",
    defaultSelected: {
        "Top Brands": "Honda",
        "Top Models": "Corolla",
        "Popular Cities": "Karachi",
        "Prices": "Under 5 Lacs",
        "Body Styles": "Sedan"
    } as Record<TabType, string>
};
