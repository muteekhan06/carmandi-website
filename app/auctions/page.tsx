"use client";

import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header, Footer, SidebarFilters } from "@/components";
import { SearchResultsHeader } from "@/components/SearchResultsHeader";
import { AuctionCard } from "@/components/AuctionCard";
import { ALL_AUCTIONS } from "@/constants/auctionData";
import { DEFAULT_SIDEBAR_FILTERS, SidebarFilterState, ActiveFilterPill } from "@/constants/searchData";
import { layout } from "@/constants/theme";

const EMPTY_FILTERS: SidebarFilterState = {
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

export default function AuctionsPage() {
    const [filters, setFilters] = useState<SidebarFilterState>(EMPTY_FILTERS);
    const [selectedSort, setSelectedSort] = useState("Recommended");
    const [showFilters, setShowFilters] = useState(false);

    // ------------------------------------------------------------------------
    // FILTERING LOGIC
    // ------------------------------------------------------------------------

    const searchResults = useMemo(() => {
        return ALL_AUCTIONS.filter((auction) => {
            // 1. Make
            if (filters.make) {
                const make = filters.make.toLowerCase();
                // Check title or tags for make
                const titleMatch = auction.title.toLowerCase().includes(make);
                const tagMatch = auction.tags.some(tag => tag.toLowerCase() === make);
                if (!titleMatch && !tagMatch) return false;
            }

            // 2. Model
            if (filters.model) {
                const model = filters.model.toLowerCase();
                const titleMatch = auction.title.toLowerCase().includes(model);
                const tagMatch = auction.tags.some(tag => tag.toLowerCase() === model);
                if (!titleMatch && !tagMatch) return false;
            }

            // 3. Variant
            if (filters.variant) {
                const variantParts = filters.variant.toLowerCase().split("-"); // e.g., gli-2019-1.5
                // Heuristic: check if all parts exist in title (except year maybe)
                const isMatch = variantParts.every(part =>
                    auction.title.toLowerCase().includes(part) ||
                    auction.tags.some(tag => tag.toLowerCase().includes(part))
                );
                // Simplify: just check if the main variant name (first part) is in title
                if (!auction.title.toLowerCase().includes(variantParts[0])) return false;
            }

            // 4. Year
            if (auction.year < filters.yearMin || auction.year > filters.yearMax) {
                return false;
            }

            // 5. Price
            if (auction.price < filters.priceMin || auction.price > filters.priceMax) {
                return false;
            }

            // 6. Mileage
            if (filters.mileageMin || filters.mileageMax) {
                // Parse "5,452 KM" -> 5452
                const mileageNum = parseInt(auction.mileage.replace(/[^0-9]/g, ""), 10);

                const minStr = filters.mileageMin ? String(filters.mileageMin).replace(/[^0-9]/g, "") : "0";
                const maxStr = filters.mileageMax ? String(filters.mileageMax).replace(/[^0-9]/g, "") : "";

                const min = minStr ? parseInt(minStr, 10) : 0;
                const max = maxStr ? parseInt(maxStr, 10) : Infinity;

                if (mileageNum < min || mileageNum > max) return false;
            }

            // 7. Transmission
            if (filters.transmission) {
                // Determine auction transmission from title, description, or tags
                // The mock data has explicit 'transmission' field
                if (auction.transmission.toLowerCase() !== filters.transmission.toLowerCase()) {
                    return false;
                }
            }

            // 8. Color
            if (filters.color) {
                // Heuristic: check description or tags for color name
                const color = filters.color.toLowerCase();
                const descMatch = auction.description.toLowerCase().includes(color);
                const notesMatch = auction.sellerNotes.toLowerCase().includes(color);
                const tagMatch = auction.tags.some(t => t.toLowerCase() === color);

                // Also check our specific mock property if we added one, otherwise loose match
                // MOCK data doesn't have explicit color field, so we search text
                if (!descMatch && !notesMatch && !tagMatch) return false;
            }

            // 9. Body Type
            if (filters.bodyTypes.length > 0) {
                // Check tags for any of the selected body types
                const hasMatch = filters.bodyTypes.some(type =>
                    auction.tags.some(tag => tag.toLowerCase() === type.toLowerCase()) ||
                    auction.description.toLowerCase().includes(type.toLowerCase())
                );
                if (!hasMatch) return false;
            }

            return true;
        });
    }, [filters]);

    // Derived State: Active Filter Pills
    const activeFilters = useMemo(() => {
        const pills: ActiveFilterPill[] = [];

        const formatLabel = (val: string) => {
            if (!val) return "";
            return val.charAt(0).toUpperCase() + val.slice(1);
        };

        // Helper to check if a value is default
        const isDefault = <K extends keyof SidebarFilterState>(key: K, val: any) => {
            return JSON.stringify(val) === JSON.stringify(EMPTY_FILTERS[key]);
        };

        if (!isDefault("make", filters.make)) {
            pills.push({ id: "make", label: formatLabel(filters.make), removable: true, key: "make" });
        }
        if (!isDefault("model", filters.model)) {
            pills.push({ id: "model", label: formatLabel(filters.model), removable: true, key: "model" });
        }
        if (!isDefault("variant", filters.variant)) {
            // Clean up variant label
            const label = filters.variant.replace(/-/g, " ").toUpperCase();
            pills.push({ id: "variant", label: label, removable: true, key: "variant" });
        }

        // Year - Show if different from default limits (widened defaults usually)
        if (filters.yearMin !== EMPTY_FILTERS.yearMin || filters.yearMax !== EMPTY_FILTERS.yearMax) {
            pills.push({ id: "year", label: `${filters.yearMin} - ${filters.yearMax}`, removable: true, key: "yearMin" });
        }

        // Helper for price formatting
        const formatPriceValue = (val: number) => {
            if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
            if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
            return val.toString();
        };

        // Price - Show if different from default
        if (filters.priceMin !== EMPTY_FILTERS.priceMin || filters.priceMax !== EMPTY_FILTERS.priceMax) {
            const minLabel = formatPriceValue(filters.priceMin);
            const maxLabel = formatPriceValue(filters.priceMax);
            pills.push({ id: "price", label: `${minLabel} - ${maxLabel}`, removable: true, key: "priceMin" });
        }

        // Mileage
        if (filters.mileageMin || filters.mileageMax) {
            const min = filters.mileageMin || "0";
            const max = filters.mileageMax || "Any";
            pills.push({ id: "mileage", label: `${min} - ${max} KM`, removable: true, key: "mileageMin" });
        }

        if (filters.color) {
            pills.push({ id: "color", label: formatLabel(filters.color), removable: true, key: "color" });
        }

        if (filters.transmission) {
            pills.push({ id: "transmission", label: filters.transmission, removable: true, key: "transmission" });
        }

        // Body Types
        if (filters.bodyTypes && filters.bodyTypes.length > 0) {
            filters.bodyTypes.forEach(type => {
                pills.push({ id: `bodyType-${type}`, label: type, removable: true, key: "bodyTypes" });
            });
        }

        return pills;
    }, [filters]);

    // ------------------------------------------------------------------------
    // SORTING LOGIC
    // ------------------------------------------------------------------------

    const sortedResults = useMemo(() => {
        const items = [...searchResults];

        switch (selectedSort) {
            case "Price: Low to High":
                return items.sort((a, b) => a.price - b.price);
            case "Price: High to Low":
                return items.sort((a, b) => b.price - a.price);
            case "Newest First": // Sorting by Year (Newest car first)
                return items.sort((a, b) => b.year - a.year);
            case "Oldest First": // Sorting by Year (Oldest car first)
                return items.sort((a, b) => a.year - b.year);
            default: // "Recommended" or unknown
                return items;
        }
    }, [searchResults, selectedSort]);

    // ------------------------------------------------------------------------

    const handleClearFilters = () => {
        setFilters(EMPTY_FILTERS);
    };

    const handleRemoveFilter = (filterId: string) => {
        // ... (existing removal logic) ...
        if (filterId === "year") {
            setFilters(prev => ({
                ...prev,
                yearMin: EMPTY_FILTERS.yearMin,
                yearMax: EMPTY_FILTERS.yearMax
            }));
            return;
        }
        if (filterId === "price") {
            setFilters(prev => ({
                ...prev,
                priceMin: EMPTY_FILTERS.priceMin,
                priceMax: EMPTY_FILTERS.priceMax
            }));
            return;
        }
        if (filterId === "mileage") {
            setFilters(prev => ({
                ...prev,
                mileageMin: "",
                mileageMax: ""
            }));
            return;
        }
        if (filterId.startsWith("bodyType-")) {
            const typeToRemove = filterId.replace("bodyType-", "");
            setFilters(prev => ({
                ...prev,
                bodyTypes: prev.bodyTypes.filter(t => t !== typeToRemove)
            }));
            return;
        }

        const filter = activeFilters.find(f => f.id === filterId);
        if (filter) {
            handleFilterChange(filter.key, EMPTY_FILTERS[filter.key]);
        }
    };

    const handleFilterChange = <K extends keyof SidebarFilterState>(key: K, value: SidebarFilterState[K]) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleSortChange = (sort: string) => {
        setSelectedSort(sort);
    };

    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const auctionGrid = useMemo(() => sortedResults.map((auction, index) => (
        <AuctionCard
            key={`${auction.id}-${index}`}
            data={{
                ...auction,
                isFeatured: index < 4,
            }}
        />
    )), [sortedResults]);


    return (
        <>
            <Header />

            <main className="bg-white min-h-[60vh]">
                <div
                    className="w-full mx-auto px-6 py-6 font-outfit"
                    style={{ maxWidth: layout.container["2xl"] }}
                >
                    {/* Header: Title, Count, Active Filters */}
                    <SearchResultsHeader
                        title="Live Auctions"
                        resultsCount={sortedResults.length}
                        filters={activeFilters}
                        onClearFilters={handleClearFilters}
                        onRemoveFilter={handleRemoveFilter}
                        selectedSort={selectedSort}
                        onSortChange={handleSortChange}
                        onToggleFilters={handleToggleFilters}
                    />

                    {/* Main Content Area */}
                    <div className="flex flex-col lg:flex-row gap-8 relative items-start mt-6">
                        {/* Left Sidebar */}
                        {showFilters && (
                            <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-6">
                                <SidebarFilters
                                    filters={filters}
                                    onChange={handleFilterChange}
                                />
                            </aside>
                        )}

                        {/* Results Grid */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {auctionGrid}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center items-center gap-2 mb-20 mt-12 font-outfit">
                                <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#EBEBEB] bg-white text-[#707070] hover:border-[#136BCF] hover:text-[#136BCF] transition-all">
                                    <ChevronLeft size={20} strokeWidth={1.5} />
                                </button>
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${page === 1
                                            ? "bg-[#F5FAFF] border border-[#136BCF] text-[#136BCF] font-bold"
                                            : "bg-white border border-[#EBEBEB] text-[#707070] hover:border-[#136BCF] hover:text-[#136BCF]"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#EBEBEB] bg-white text-[#707070] hover:border-[#136BCF] hover:text-[#136BCF] transition-all">
                                    <ChevronRight size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
