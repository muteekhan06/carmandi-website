"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FavoriteIcon } from "@/components/icons/FavoriteIcon";
import { AuctionTimer } from "@/components/AuctionTimer";
import { AuctionListing } from "@/types";
import { colors, typography, layout, shadows, transitions } from "@/constants/theme";

interface AuctionCardProps {
    data: AuctionListing;
    status?: "expired" | "active" | "sold";
    showStatus?: boolean;
    priority?: boolean;
}

// Status badge styling
const STATUS_STYLES = {
    expired: {
        bg: "#6B7280",
        text: "white",
        label: "Expired",
    },
    active: {
        bg: "#10B981",
        text: "white",
        label: "Active",
    },
    sold: {
        bg: "#EB722E",
        text: "white",
        label: "Sold",
    },
} as const;

const CARD_CONFIG = {
    imageHeight: "211px",
    tagHeight: "22px",
    timerHeight: "27px",
    timerWidth: "90%",
    buttonHeight: "40px",
    ratingBoxMinWidth: "72px",
} as const;

const LABELS = {
    startingFrom: "Starting from",
    currency: "Pkr",
    bidNow: "Bid Now",
    live: "Live",
    featured: "Featured",
    ratingMax: "/10",
    timer: {
        days: "Days",
        hours: "Hrs",
        minutes: "Mins",
        seconds: "Sec",
    },
} as const;

export const AuctionCard = memo(({ data, status, showStatus = false, priority }: AuctionCardProps) => {
    // Timer logic moved to AuctionTimer component for performance

    return (
        <div
            className="group overflow-hidden flex flex-col h-full transition-all relative"
            style={{
                backgroundColor: colors.background.card,
                borderRadius: layout.borderRadius.xl,
                boxShadow: shadows.card,
                border: `1px solid ${colors.neutral.border}`,
                transitionDuration: transitions.normal,
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = shadows.cardHover}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = shadows.card}
        >
            <Link href={`/auction/${data.id}`} className="block relative w-full" style={{ height: CARD_CONFIG.imageHeight }}>
                {/* Image Container */}
                <Image
                    src={data.image}
                    alt={`${data.title} - ${data.year} ${data.fuelType} car`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={priority !== undefined ? priority : data.isFeatured} // Allow override, else default to featured status
                />

                {/* Top Overlay Group */}
                <div className="absolute top-2 left-2 flex gap-2 z-10 w-full max-w-[calc(100%-16px)]">
                    {/* Live Tag */}
                    {data.isLive && (
                        <div
                            className="px-3 flex items-center justify-center gap-1.5 shrink-0"
                            style={{
                                height: CARD_CONFIG.tagHeight,
                                background: colors.accent.greenGradient,
                                borderRadius: layout.borderRadius.sm,
                            }}
                        >
                            <span
                                className="rounded-full animate-pulse"
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: colors.neutral.black
                                }}
                            />
                            <span
                                className="font-bold leading-none capitalize tracking-wide"
                                style={{
                                    fontSize: typography.fontSize.xs,
                                    color: colors.neutral.black
                                }}
                            >
                                {LABELS.live}
                            </span>
                        </div>
                    )}
                    {/* Featured Tag */}
                    {data.isFeatured && (
                        <div
                            className="px-3 flex items-center justify-center shrink-0"
                            style={{
                                height: CARD_CONFIG.tagHeight,
                                backgroundColor: colors.accent.yellow,
                                borderRadius: layout.borderRadius.sm,
                            }}
                        >
                            <span
                                className="font-bold leading-none capitalize tracking-wide"
                                style={{
                                    fontSize: typography.fontSize.xs,
                                    color: colors.neutral.black
                                }}
                            >
                                {LABELS.featured}
                            </span>
                        </div>
                    )}
                </div>

                {/* Status Badge (Top Right) */}
                {showStatus && status && (
                    <div
                        className="absolute top-2 right-2 px-3 flex items-center justify-center z-10"
                        style={{
                            height: CARD_CONFIG.tagHeight,
                            backgroundColor: STATUS_STYLES[status].bg,
                            borderRadius: layout.borderRadius.sm,
                        }}
                    >
                        <span
                            className="font-bold leading-none capitalize tracking-wide"
                            style={{
                                fontSize: typography.fontSize.xs,
                                color: STATUS_STYLES[status].text
                            }}
                        >
                            {STATUS_STYLES[status].label}
                        </span>
                    </div>
                )}

                {/* Timer Overlay Component */}
                <AuctionTimer
                    endTime={data.endTime}
                    width={CARD_CONFIG.timerWidth}
                    height={CARD_CONFIG.timerHeight}
                />
            </Link>

            {/* Heart Button is outside link to prevent navigation when clicked */}
            {!showStatus && (
                <button
                    className="absolute top-2 right-2 flex items-center justify-center hover:opacity-80 transition-opacity z-20"
                    aria-label="Add to favorites"
                >
                    <FavoriteIcon />
                </button>
            )}

            {/* Content Container */}
            <div className="p-3 flex flex-col flex-grow">
                <Link href={`/auction/${data.id}`} className="block flex-grow">
                    {/* Title */}
                    <h3
                        className="font-medium mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors"
                        style={{
                            fontSize: typography.fontSize.xl,
                            color: colors.neutral.dark
                        }}
                        title={data.title}
                    >
                        {data.title}
                    </h3>

                    {/* Specs */}
                    <div
                        className="flex items-center font-normal mb-6 flex-wrap"
                        style={{
                            fontSize: typography.fontSize.sm,
                            color: colors.neutral.gray400
                        }}
                    >
                        <span>{data.year}</span>
                        <span className="mx-2" style={{ color: colors.neutral.gray50 }}>|</span>
                        <span>{data.mileage}</span>
                        <span className="mx-2" style={{ color: colors.neutral.gray50 }}>|</span>
                        <span>{data.transmission}</span>
                        <span className="mx-2" style={{ color: colors.neutral.gray50 }}>|</span>
                        <span>{data.fuelType}</span>
                    </div>

                    {/* Price Section */}
                    <div className="mt-auto flex flex-row justify-between items-end mb-4">
                        <p
                            className="font-normal mb-1"
                            style={{
                                fontSize: typography.fontSize.sm,
                                color: colors.neutral.gray600
                            }}
                        >
                            {LABELS.startingFrom}
                        </p>
                        <div className="flex items-baseline gap-1">
                            <span
                                className="font-medium"
                                style={{
                                    fontSize: typography.fontSize.base,
                                    color: colors.neutral.dark
                                }}
                            >
                                {LABELS.currency}
                            </span>
                            <span
                                className="font-bold"
                                style={{
                                    fontSize: typography.fontSize["3xl"],
                                    color: colors.neutral.dark
                                }}
                            >
                                {data.price.toLocaleString('en-PK')}
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Bottom Row: Rating & Bid Button */}
                <div
                    className="flex items-center gap-3 pt-3"
                    style={{ borderTop: `1px solid ${colors.neutral.borderLight}` }}
                >
                    {/* Rating Box */}
                    <div
                        className="flex items-center gap-1.5 px-1.5 justify-center shadow-sm"
                        style={{
                            height: CARD_CONFIG.buttonHeight,
                            minWidth: CARD_CONFIG.ratingBoxMinWidth,
                            border: `1px solid ${colors.neutral.borderLighter}`,
                            borderRadius: layout.borderRadius.md,
                            backgroundColor: colors.neutral.white,
                        }}
                    >
                        <Image
                            src="/images/ui-icons/inspection-badge.svg"
                            alt="Car"
                            width={22}
                            height={22}
                            className="w-[22px] h-[22px] object-contain"
                        />
                        <div className="flex items-baseline">
                            <span
                                className="font-bold"
                                style={{
                                    fontSize: typography.fontSize.base,
                                    color: colors.primary.light
                                }}
                            >
                                {data.rating}
                            </span>
                            <span
                                style={{
                                    fontSize: typography.fontSize.xs,
                                    color: colors.neutral.gray700
                                }}
                            >
                                {LABELS.ratingMax}
                            </span>
                        </div>
                    </div>

                    {/* Bid Now Button - Navigation */}
                    <Link
                        href={`/auction/${data.id}`}
                        className="flex-1 font-bold transition-all hover:shadow-md active:scale-95 flex items-center justify-center"
                        style={{
                            height: CARD_CONFIG.buttonHeight,
                            borderRadius: layout.borderRadius.md,
                            backgroundColor: colors.primary.lighter,
                            color: colors.primary.light,
                            fontSize: typography.fontSize.base,
                            border: `1px solid ${colors.primary.border}`,
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.hover}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.lighter}
                    >
                        {LABELS.bidNow}
                    </Link>
                </div>
            </div>
        </div>
    );
});
AuctionCard.displayName = "AuctionCard";
