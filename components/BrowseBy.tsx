"use client";

import React, { useState, useCallback, memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { brands, models, priceRanges } from "@/constants/browseData";
import { BrowseItem } from "@/types";
import { PriceTagIcon } from "@/components/icons/PriceTagIcon";
import { colors, typography, transitions } from "@/constants/theme";

// ============================================================================
// COMPONENT CONFIGURATION
// ============================================================================

type TabType = "brands" | "models" | "price";

const TABS_CONFIG = [
    { id: "brands" as TabType, label: "Top Brands" },
    { id: "models" as TabType, label: "Top Models" },
    { id: "price" as TabType, label: "Price Ranges" },
] as const;

const CARD_CONFIG = {
    brandModel: {
        width: "110px",
        height: "103px",
        borderRadius: "10px",
        // Consistent logo size for all brands/models
        logoContainerSize: "44px",
    },
    priceRange: {
        height: "49px",
        minWidth: "200px",
        borderRadius: "12px",
        iconSize: "20px",
    },
    common: {
        bgColor: "#F7F9FA",
        bgColorHover: colors.neutral.white,
        textColor: colors.neutral.dark,
        textColorHover: colors.primary.main,
    },
} as const;

// Animation speed - slower = more readable
const MARQUEE_DURATION = 35;

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function BrowseBy() {
    const [activeTab, setActiveTab] = useState<TabType>("brands");
    const [isPaused, setIsPaused] = useState(false);

    // Memoized data getter
    const data = useMemo((): BrowseItem[] => {
        switch (activeTab) {
            case "models": return models;
            case "price": return priceRanges;
            default: return brands;
        }
    }, [activeTab]);

    // Optimized callbacks
    const handleMouseEnter = useCallback(() => setIsPaused(true), []);
    const handleMouseLeave = useCallback(() => setIsPaused(false), []);
    const handleTabChange = useCallback((tab: TabType) => setActiveTab(tab), []);

    const isMarqueeTab = activeTab === "brands" || activeTab === "models";

    return (
        <section
            className="w-full mx-auto px-4 pt-8 pb-2 font-outfit"
            style={{ maxWidth: "1350px" }}
            aria-label="Browse cars by brand, model, or price"
        >
            {/* Tabs Header */}
            <div
                className="flex flex-row items-center gap-4 sm:gap-8 mb-6 overflow-x-auto no-scrollbar"
                style={{ borderBottom: `1px solid ${colors.neutral.border}` }}
                role="tablist"
                aria-label="Browse categories"
            >
                {TABS_CONFIG.map((tab) => (
                    <TabButton
                        key={tab.id}
                        isActive={activeTab === tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        label={tab.label}
                        tabId={tab.id}
                    />
                ))}
            </div>

            {/* Content Container */}
            {isMarqueeTab ? (
                /* Infinite Marquee for Top Brands & Top Models */
                <div
                    className="relative overflow-hidden select-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleMouseEnter}
                    onTouchEnd={handleMouseLeave}
                    role="region"
                    aria-label={`${activeTab === "brands" ? "Car brands" : "Car models"} carousel`}
                >
                    {/* Gradient Fade - Left */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                        style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
                        aria-hidden="true"
                    />
                    {/* Gradient Fade - Right */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                        style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
                        aria-hidden="true"
                    />

                    {/* Marquee Track - GPU Accelerated */}
                    <div
                        className="flex gap-4 py-1"
                        style={{
                            animation: `marquee ${MARQUEE_DURATION}s linear infinite`,
                            animationPlayState: isPaused ? "paused" : "running",
                            width: "fit-content",
                            willChange: "transform",
                        }}
                    >
                        {/* Triple the items for seamless infinite loop */}
                        {[...data, ...data, ...data].map((item, index) => (
                            <BrandModelCard
                                key={`${item.id}-${index}`}
                                item={item}
                                variant={activeTab as "brands" | "models"}
                            />
                        ))}
                    </div>

                    {/* CSS Animation */}
                    <style jsx>{`
                        @keyframes marquee {
                            0% {
                                transform: translate3d(0, 0, 0);
                            }
                            100% {
                                transform: translate3d(-33.333%, 0, 0);
                            }
                        }
                        
                        @media (prefers-reduced-motion: reduce) {
                            div {
                                animation: none !important;
                            }
                        }
                    `}</style>
                </div>
            ) : (
                /* Grid for Price Ranges */
                <div
                    className="flex flex-row flex-wrap gap-4"
                    role="list"
                    aria-label="Price ranges"
                >
                    {data.map((item) => (
                        <PriceRangeCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </section>
    );
}

// ============================================================================
// MEMOIZED SUB-COMPONENTS
// ============================================================================

interface TabButtonProps {
    isActive: boolean;
    onClick: () => void;
    label: string;
    tabId: string;
}

const TabButton = memo(function TabButton({ isActive, onClick, label, tabId }: TabButtonProps) {
    return (
        <button
            onClick={onClick}
            className="pb-3 font-medium transition-all relative whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#153481] focus-visible:ring-offset-2 rounded-sm"
            style={{
                fontSize: typography.fontSize.xl,
                color: isActive ? colors.primary.main : colors.neutral.gray500,
                borderBottom: isActive ? `2px solid ${colors.primary.main}` : "2px solid transparent",
                transitionDuration: transitions.normal,
            }}
            onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = colors.primary.main;
            }}
            onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = colors.neutral.gray500;
            }}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tabId}`}
            id={`tab-${tabId}`}
        >
            {label}
        </button>
    );
});

interface PriceRangeCardProps {
    item: BrowseItem;
}

const PriceRangeCard = memo(function PriceRangeCard({ item }: PriceRangeCardProps) {
    // Extract price range for search URL
    const getPriceParams = () => {
        const label = item.label.toLowerCase();
        if (label.includes("under")) return "priceMax=500000";
        if (label.includes("5 lac - 10 lac")) return "priceMin=500000&priceMax=1000000";
        if (label.includes("10 lac - 20 lac")) return "priceMin=1000000&priceMax=2000000";
        if (label.includes("20 lac - 30 lac")) return "priceMin=2000000&priceMax=3000000";
        if (label.includes("30 lac - 50 lac")) return "priceMin=3000000&priceMax=5000000";
        if (label.includes("above")) return "priceMin=5000000";
        return "";
    };

    return (
        <Link
            href={`/search?${getPriceParams()}`}
            className="group flex flex-row items-center justify-start cursor-pointer border border-transparent hover:border-gray-100 gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#153481] focus-visible:ring-offset-2 w-full sm:w-auto"
            style={{
                backgroundColor: CARD_CONFIG.common.bgColor,
                height: CARD_CONFIG.priceRange.height,
                minWidth: CARD_CONFIG.priceRange.minWidth,
                borderRadius: CARD_CONFIG.priceRange.borderRadius,
                paddingLeft: "16px",
                paddingRight: "16px",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = CARD_CONFIG.common.bgColorHover;
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = CARD_CONFIG.common.bgColor;
                e.currentTarget.style.boxShadow = "none";
            }}
            role="listitem"
        >
            <PriceTagIcon
                className="flex-shrink-0"
                style={{
                    width: CARD_CONFIG.priceRange.iconSize,
                    height: CARD_CONFIG.priceRange.iconSize
                }}
            />
            <span
                className="font-medium whitespace-nowrap group-hover:text-[#153481] transition-colors"
                style={{
                    color: CARD_CONFIG.common.textColor,
                    fontSize: typography.fontSize.base,
                }}
            >
                {item.label}
            </span>
        </Link>
    );
});

interface BrandModelCardProps {
    item: BrowseItem;
    variant: "brands" | "models";
}

const BrandModelCard = memo(function BrandModelCard({ item, variant }: BrandModelCardProps) {
    // Create search URL based on variant
    const searchParam = variant === "brands" ? "make" : "model";
    const searchUrl = `/search?${searchParam}=${encodeURIComponent(item.label.toLowerCase())}`;

    return (
        <Link
            href={searchUrl}
            className="group flex flex-col items-center justify-center cursor-pointer border border-transparent hover:border-gray-100 transition-all flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#153481] focus-visible:ring-offset-2"
            style={{
                backgroundColor: CARD_CONFIG.common.bgColor,
                width: CARD_CONFIG.brandModel.width,
                height: CARD_CONFIG.brandModel.height,
                borderRadius: CARD_CONFIG.brandModel.borderRadius,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = CARD_CONFIG.common.bgColorHover;
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = CARD_CONFIG.common.bgColor;
                e.currentTarget.style.boxShadow = "none";
            }}
            aria-label={`Browse ${item.label} ${variant === "brands" ? "cars" : "model"}`}
        >
            {/* Logo Container - Consistent size for all */}
            <div
                className="mb-3 relative flex items-center justify-center"
                style={{
                    width: CARD_CONFIG.brandModel.logoContainerSize,
                    height: CARD_CONFIG.brandModel.logoContainerSize,
                }}
            >
                {item.icon ? (
                    <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        sizes="44px"
                        loading="lazy"
                    />
                ) : (
                    <div
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{ backgroundColor: colors.neutral.border }}
                    >
                        <span
                            className="font-bold uppercase"
                            style={{
                                fontSize: typography.fontSize.xs,
                                color: colors.neutral.gray400
                            }}
                        >
                            {item.label.substring(0, 2)}
                        </span>
                    </div>
                )}
            </div>

            <span
                className="font-normal text-center group-hover:text-[#153481] transition-colors duration-300"
                style={{
                    color: CARD_CONFIG.common.textColor,
                    fontSize: typography.fontSize.base,
                }}
            >
                {item.label}
            </span>
        </Link>
    );
});
