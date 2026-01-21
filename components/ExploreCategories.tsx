"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { AuctionCard } from "@/components/AuctionCard";
import { FEATURED_AUCTIONS } from "@/constants/featuredData";
import { layout, colors, typography } from "@/constants/theme";
import { TABS, ITEMS_MAP, TabType, EXPLORE_CONTENT } from "@/constants/exploreData";
import { AuctionListing } from "@/types";

export const ExploreCategories = () => {
    // Extend features for demo - Cached to avoid recreation on render
    const exploreAuctions = useMemo<AuctionListing[]>(() =>
        [...FEATURED_AUCTIONS, ...FEATURED_AUCTIONS, ...FEATURED_AUCTIONS],
        []);
    const [activeTab, setActiveTab] = useState<TabType>(TABS[0]);
    const [selectedItems, setSelectedItems] = useState<Record<string, string>>(EXPLORE_CONTENT.defaultSelected);

    const activeItems = ITEMS_MAP[activeTab] || [];
    const currentSelection = selectedItems[activeTab];

    const handleItemClick = (label: string) => {
        setSelectedItems(prev => ({ ...prev, [activeTab]: label }));
    };

    return (
        <section
            className="w-full mx-auto px-6 pb-8 font-outfit"
            style={{ maxWidth: layout.container["2xl"] }}
        >
            {/* Header */}
            <h2
                className="font-semibold mb-6"
                style={{
                    fontSize: typography.fontSize["5xl"],
                    color: colors.neutral.dark
                }}
            >
                {EXPLORE_CONTENT.title}
            </h2>

            {/* Main Tabs */}
            <div className="flex border-b mb-8" style={{ borderColor: colors.neutral.border }}>
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 mr-8 font-medium transition-colors relative ${activeTab === tab ? "text-primary" : "text-gray-500 hover:text-gray-700"
                            }`}
                        style={{
                            color: activeTab === tab ? colors.primary.main : colors.neutral.gray500,
                        }}
                    >
                        {tab}
                        {activeTab === tab && (
                            <span
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                                style={{ backgroundColor: colors.primary.main }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Dynamic Pills */}
            <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
                {activeItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleItemClick(item.label)}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all whitespace-nowrap ${currentSelection === item.label
                            ? "bg-blue-50 border-primary"
                            : "bg-white border-gray-200 hover:border-gray-300"
                            }`}
                        style={{
                            backgroundColor: currentSelection === item.label ? colors.primary.lighter : colors.neutral.white,
                            borderColor: currentSelection === item.label ? colors.primary.light : colors.neutral.border,
                        }}
                    >
                        {item.icon && (
                            <Image
                                src={item.icon}
                                alt={item.label}
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        )}
                        <span
                            className={`font-medium ${currentSelection === item.label ? "text-primary" : "text-gray-600"
                                }`}
                            style={{
                                color: currentSelection === item.label ? colors.primary.main : colors.neutral.gray700
                            }}
                        >
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Auction Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {exploreAuctions.map((auction, index) => (
                    // Only show 'Featured' tag for the first 4 items (first row)
                    <AuctionCard
                        key={`${auction.id}-${index}`}
                        data={{
                            ...auction,
                            isFeatured: index < 4
                        }}
                    />
                ))}
            </div>

            {/* Browse Live Auctions Button */}
            <div className="mt-12 mb-[104px] flex justify-center">
                <button
                    className="w-[400px] h-[44px] rounded-[8px] font-normal transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center"
                    style={{
                        backgroundColor: "#153481",
                        color: "#FFFFFF",
                        fontSize: "16px", // Estimated from SVG ratio
                    }}
                >
                    Browse Live Auctions
                </button>
            </div>
        </section>
    );
};
