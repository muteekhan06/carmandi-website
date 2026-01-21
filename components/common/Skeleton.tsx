/**
 * Skeleton Loading Components
 * ============================
 * Production-grade loading states for better perceived performance.
 * These match the actual component layouts to prevent layout shift.
 */

import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
    style?: React.CSSProperties;
}

/**
 * Base skeleton pulse animation
 */
export function Skeleton({ className, style }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] rounded-md",
                className
            )}
            style={style}
        />
    );
}

/**
 * Auction Card Skeleton - Matches AuctionCard layout exactly
 */
export function AuctionCardSkeleton() {
    return (
        <div className="bg-white rounded-[14px] border border-[#EBEBEB] overflow-hidden shadow-card">
            {/* Image placeholder */}
            <Skeleton className="h-[211px] w-full rounded-none" />

            {/* Content */}
            <div className="p-3">
                {/* Title */}
                <Skeleton className="h-5 w-3/4 mb-2" />

                {/* Specs */}
                <div className="flex gap-2 mb-6">
                    <Skeleton className="h-3 w-12" />
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-14" />
                    <Skeleton className="h-3 w-12" />
                </div>

                {/* Price */}
                <div className="flex justify-between items-end mb-4">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-7 w-32" />
                </div>

                {/* Bottom row */}
                <div className="flex gap-3 pt-3 border-t border-[#F0F0F0]">
                    <Skeleton className="h-10 w-[72px] rounded-lg" />
                    <Skeleton className="h-10 flex-1 rounded-lg" />
                </div>
            </div>
        </div>
    );
}

/**
 * Grid of Auction Card Skeletons
 */
export function AuctionGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <AuctionCardSkeleton key={i} />
            ))}
        </div>
    );
}

/**
 * Hero Section Skeleton
 */
export function HeroSkeleton() {
    return (
        <div className="w-full h-[370px] bg-gray-100 rounded-[24px] animate-pulse flex flex-col items-center justify-center">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-6 w-96 mb-8" />
            <Skeleton className="h-14 w-[600px] rounded-full" />
        </div>
    );
}

/**
 * Sidebar Filter Skeleton
 */
export function FilterSkeleton() {
    return (
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-5">
            <Skeleton className="h-6 w-24 mb-4" />
            <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-lg" />
                ))}
            </div>
        </div>
    );
}

/**
 * Text content skeleton
 */
export function TextSkeleton({ lines = 3 }: { lines?: number }) {
    return (
        <div className="space-y-2">
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    className={cn("h-4", i === lines - 1 ? "w-3/4" : "w-full")}
                />
            ))}
        </div>
    );
}

/**
 * Image skeleton with aspect ratio
 */
export function ImageSkeleton({ aspectRatio = "16/9" }: { aspectRatio?: string }) {
    return (
        <Skeleton
            className="w-full"
            style={{ aspectRatio }}
        />
    );
}

/**
 * Button skeleton
 */
export function ButtonSkeleton({ className }: SkeletonProps) {
    return <Skeleton className={cn("h-10 w-24 rounded-lg", className)} />;
}

/**
 * Avatar skeleton
 */
export function AvatarSkeleton({ size = 40 }: { size?: number }) {
    return (
        <Skeleton
            className="rounded-full"
            style={{ width: size, height: size }}
        />
    );
}
