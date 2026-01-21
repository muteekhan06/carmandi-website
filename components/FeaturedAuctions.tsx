"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FavoriteIcon } from "@/components/icons/FavoriteIcon";
import { AuctionListing } from "@/types";
import { FEATURED_AUCTIONS } from "@/constants/featuredData";
import { colors, typography, layout, shadows, transitions } from "@/constants/theme";

import { AuctionCard } from "@/components/AuctionCard";

// ============================================================================
// COMPONENT CONFIGURATION
// ============================================================================

const SECTION_CONFIG = {
    title: "Featured Auctions",
    gridCols: {
        sm: 2,
        lg: 3,
        xl: 4,
    },
} as const;

// ============================================================================
// MAIN COMPONENT
// ============================================================================

interface FeaturedAuctionsProps {
    hideTitle?: boolean;
    priority?: boolean;
}

export const FeaturedAuctions = ({ hideTitle = false, priority }: FeaturedAuctionsProps) => {
    return (
        <section
            className="w-full mx-auto px-4 sm:px-6 pt-2 pb-8 font-outfit"
            style={{ maxWidth: layout.container["2xl"] }}
        >
            {!hideTitle && (
                <h2
                    className="font-semibold mb-6"
                    style={{
                        fontSize: typography.fontSize["5xl"],
                        color: colors.neutral.dark
                    }}
                >
                    {SECTION_CONFIG.title}
                </h2>
            )}

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {FEATURED_AUCTIONS.map((auction) => (
                    <AuctionCard key={auction.id} data={auction} priority={priority} />
                ))}
            </div>
        </section>
    );
};
