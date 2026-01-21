"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

import { ActiveFilterPill } from "@/constants/searchData";

// ============================================================================
// TYPES
// ============================================================================

interface SearchResultsHeaderProps {
    title?: string;
    resultsCount?: number;
    filters?: ActiveFilterPill[];
    onClearFilters?: () => void;
    onRemoveFilter?: (id: string) => void;
    sortOptions?: string[];
    selectedSort?: string;
    onSortChange?: (sort: string) => void;
    onToggleFilters?: () => void;
}

// ============================================================================
// DEFAULT DATA
// ============================================================================

const DEFAULT_FILTERS: ActiveFilterPill[] = [
    { id: "brand", label: "Toyota", removable: true, key: "make" },
    { id: "model", label: "Corolla", removable: true, key: "model" },
    { id: "variant", label: "GLI1.5", removable: true, key: "variant" },
    { id: "year", label: "2014 - 2024", removable: true, key: "yearMin" },
];

const SORT_OPTIONS = [
    "Recommended",
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
    "Oldest First",
];

// ============================================================================
// FILTER ICON SVG
// ============================================================================

const FilterIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_filter)">
            <rect width="32" height="32" rx="5.81818" fill="#F7F9FA" />
            <path d="M19.3058 11.3702C19.3058 10.9779 19.4222 10.5944 19.6401 10.2682C19.8581 9.94198 20.1678 9.68783 20.5302 9.53773C20.8927 9.38764 21.2915 9.34833 21.6762 9.42484C22.061 9.50136 22.4144 9.69026 22.6918 9.96767C22.9692 10.2451 23.1581 10.5985 23.2346 10.9832C23.3111 11.368 23.2718 11.7668 23.1217 12.1292C22.9716 12.4916 22.7174 12.8014 22.3912 13.0193C22.065 13.2373 21.6816 13.3536 21.2893 13.3536C20.7632 13.3536 20.2587 13.1446 19.8868 12.7726C19.5148 12.4007 19.3058 11.8962 19.3058 11.3702ZM9.38868 12.0313H17.3224C17.4978 12.0313 17.6659 11.9616 17.7899 11.8377C17.9139 11.7137 17.9836 11.5455 17.9836 11.3702C17.9836 11.1948 17.9139 11.0266 17.7899 10.9027C17.6659 10.7787 17.4978 10.709 17.3224 10.709H9.38868C9.21334 10.709 9.04517 10.7787 8.92118 10.9027C8.7972 11.0266 8.72754 11.1948 8.72754 11.3702C8.72754 11.5455 8.7972 11.7137 8.92118 11.8377C9.04517 11.9616 9.21334 12.0313 9.38868 12.0313ZM13.3555 14.0147C12.9463 14.0159 12.5475 14.1436 12.2137 14.3803C11.8799 14.617 11.6275 14.9512 11.4911 15.337H9.38868C9.21334 15.337 9.04517 15.4067 8.92118 15.5307C8.7972 15.6546 8.72754 15.8228 8.72754 15.9982C8.72754 16.1735 8.7972 16.3417 8.92118 16.4657C9.04517 16.5896 9.21334 16.6593 9.38868 16.6593H11.4911C11.6124 17.0024 11.8257 17.3054 12.1077 17.5354C12.3897 17.7653 12.7296 17.9132 13.09 17.963C13.4505 18.0127 13.8176 17.9623 14.1514 17.8174C14.4851 17.6724 14.7725 17.4384 14.9822 17.141C15.1918 16.8436 15.3157 16.4943 15.3401 16.1312C15.3645 15.7682 15.2886 15.4054 15.1206 15.0827C14.9527 14.7599 14.6992 14.4895 14.3879 14.3012C14.0765 14.1128 13.7194 14.0137 13.3555 14.0147ZM22.6116 15.337H17.3224C17.1471 15.337 16.9789 15.4067 16.8549 15.5307C16.7309 15.6546 16.6613 15.8228 16.6613 15.9982C16.6613 16.1735 16.7309 16.3417 16.8549 16.4657C16.9789 16.5896 17.1471 16.6593 17.3224 16.6593H22.6116C22.7869 16.6593 22.9551 16.5896 23.0791 16.4657C23.203 16.3417 23.2727 16.1735 23.2727 15.9982C23.2727 15.8228 23.203 15.6546 23.0791 15.5307C22.9551 15.4067 22.7869 15.337 22.6116 15.337ZM14.6778 19.965H9.38868C9.21334 19.965 9.04517 20.0347 8.92118 20.1587C8.7972 20.2827 8.72754 20.4508 8.72754 20.6262C8.72754 20.8015 8.7972 20.9697 8.92118 21.0937C9.04517 21.2177 9.21334 21.2873 9.38868 21.2873H14.6778C14.8532 21.2873 15.0213 21.2177 15.1453 21.0937C15.2693 20.9697 15.339 20.8015 15.339 20.6262C15.339 20.4508 15.2693 20.2827 15.1453 20.1587C15.0213 20.0347 14.8532 19.965 14.6778 19.965ZM22.6116 19.965H20.5091C20.3532 19.5239 20.0463 19.1521 19.6427 18.9154C19.2391 18.6786 18.7649 18.5922 18.3037 18.6713C17.8426 18.7504 17.4242 18.99 17.1227 19.3477C16.8211 19.7055 16.6557 20.1583 16.6557 20.6262C16.6557 21.094 16.8211 21.5469 17.1227 21.9046C17.4242 22.2623 17.8426 22.5019 18.3037 22.581C18.7649 22.6602 19.2391 22.5737 19.6427 22.337C20.0463 22.1002 20.3532 21.7284 20.5091 21.2873H22.6116C22.7869 21.2873 22.9551 21.2177 23.0791 21.0937C23.203 20.9697 23.2727 20.8015 23.2727 20.6262C23.2727 20.4508 23.203 20.2827 23.0791 20.1587C22.9551 20.0347 22.7869 19.965 22.6116 19.965Z" fill="#383838" />
        </g>
        <defs>
            <filter id="filter0_i_filter" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.45455" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
        </defs>
    </svg>
);

// ============================================================================
// CLOSE/REMOVE ICON SVG
// ============================================================================

const CloseIcon = () => (
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.015 2.5542C3.77 2.7983 3.77 3.194 4.015 3.438L6.006 5.4298C6.165 5.5881 6.165 5.8441 6.006 6.0024C5.848 6.1607 5.592 6.1607 5.434 6.0024L3.442 4.0106C3.198 3.7665 2.802 3.7665 2.558 4.0106L0.566 6.0024C0.408 6.1607 0.152 6.1607 -0.006 6.0024C-0.165 5.8441 -0.165 5.5881 -0.006 5.4298L1.985 3.438C2.23 3.194 2.23 2.7983 1.985 2.5542L-0.006 0.5624C-0.165 0.4041 -0.165 0.1482 -0.006 -0.0101C0.073 -0.0891 0.176 -0.1288 0.28 -0.1288C0.384 -0.1288 0.487 -0.0891 0.566 -0.0101L2.558 1.9816C2.802 2.2257 3.198 2.2257 3.442 1.9816L5.434 -0.0101C5.513 -0.0891 5.616 -0.1288 5.72 -0.1288C5.824 -0.1288 5.927 -0.0891 6.006 -0.0101C6.165 0.1482 6.165 0.4041 6.006 0.5624L4.015 2.5542Z"
            fill="#707070"
            stroke="#707070"
            strokeWidth="0.625"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(0, 0)"
        />
    </svg>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({
    title = "Toyota Corolla GLI 2019",
    resultsCount = 24,
    filters = DEFAULT_FILTERS,
    onClearFilters,
    onRemoveFilter,
    sortOptions = SORT_OPTIONS,
    selectedSort = "Recommended",
    onSortChange,
    onToggleFilters,
}) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [currentSort, setCurrentSort] = useState(selectedSort);

    const activeFiltersCount = filters.filter(f => f.removable).length;

    const handleSortSelect = (sort: string) => {
        setCurrentSort(sort);
        setIsSortOpen(false);
        onSortChange?.(sort);
    };

    const handleRemoveFilter = (id: string) => {
        onRemoveFilter?.(id);
    };

    return (
        <div className="w-full font-outfit">
            {/* Top Row: Filter Toggle, Title, Count, and Sort Dropdown */}
            <div className="flex items-center justify-between gap-4 mb-4">
                {/* Left Section: Filter Toggle + Title + Count */}
                <div className="flex items-center gap-3">
                    {/* Filter Toggle Button */}
                    <button
                        onClick={onToggleFilters}
                        className="flex-shrink-0 hover:opacity-80 transition-opacity"
                        aria-label="Toggle filters"
                    >
                        <FilterIcon />
                    </button>

                    {/* Title and Count */}
                    <div className="flex items-baseline gap-1.5">
                        <h1 className="text-[22px] font-semibold text-[#222222] leading-[1.35]">
                            {title}
                        </h1>
                        <span className="text-[16px] font-normal text-[#707070] leading-[1.35]">
                            ({resultsCount})
                        </span>
                    </div>
                </div>

                {/* Right Section: Sort Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsSortOpen(!isSortOpen)}
                        className="flex items-center justify-between gap-2 px-4 py-2.5 bg-white border border-[#EBEBEB] rounded-[10px] min-w-[166px] hover:border-[#D0D0D0] transition-colors"
                    >
                        <span className="text-[14px] text-[#4F4F4F] font-normal">
                            {currentSort}
                        </span>
                        <ChevronDown
                            size={16}
                            className={`text-[#222222] transition-transform ${isSortOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isSortOpen && (
                        <div className="absolute top-full right-0 mt-1 w-full bg-white border border-[#EBEBEB] rounded-[10px] shadow-lg z-50 overflow-hidden">
                            {sortOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleSortSelect(option)}
                                    className={`w-full px-4 py-2.5 text-left text-[14px] hover:bg-[#F5F5F5] transition-colors ${currentSort === option
                                        ? "text-[#136BCF] bg-[#F5FAFF]"
                                        : "text-[#4F4F4F]"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Row: Active Filters */}
            <div className="flex items-center gap-3 flex-wrap">
                {/* Clear Filters Button */}
                {activeFiltersCount > 0 && (
                    <button
                        onClick={onClearFilters}
                        className="flex items-center gap-1 px-4 py-2 bg-[#F5FAFF] rounded-full hover:bg-[#E5F0FF] transition-colors"
                    >
                        <span className="text-[14px] font-medium text-[#136BCF]">
                            Clear Filters
                        </span>
                        <span className="text-[14px] font-normal text-[#136BCF]">
                            ({activeFiltersCount})
                        </span>
                    </button>
                )}

                {/* Filter Pills */}
                {filters.map((filter) => (
                    <div
                        key={filter.id}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-[#F0F0F0] rounded-full group hover:border-[#E0E0E0] transition-colors"
                    >
                        <span className="text-[14px] font-normal text-[#383838]">
                            {filter.label}
                        </span>
                        {filter.removable && (
                            <button
                                onClick={() => handleRemoveFilter(filter.id)}
                                className="flex items-center justify-center w-4 h-4 rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] transition-colors"
                                aria-label={`Remove ${filter.label} filter`}
                            >
                                <svg width="6" height="6" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 2L2 6M2 2L6 6"
                                        stroke="#707070"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResultsHeader;
