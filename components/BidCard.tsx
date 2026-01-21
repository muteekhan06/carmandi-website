"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FavoriteIcon } from "@/components/icons/FavoriteIcon";
import { AuctionListing } from "@/types";
import { colors, typography, layout, shadows, transitions } from "@/constants/theme";

interface BidCardProps {
    data: AuctionListing;
    currentBid: string;
    yourBid: string;
    showStatus?: boolean; // For compat/extensibility
}

const calculateTimeLeft = (endTime: string) => {
    const difference = new Date(endTime).getTime() - Date.now();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
};

export const BidCard: React.FC<BidCardProps> = ({ data, currentBid, yourBid }) => {
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft(data.endTime));
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(data.endTime));
        }, 1000);
        return () => clearInterval(timer);
    }, [data.endTime]);

    const displayTime = timeLeft || { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return (
        <div
            className="group overflow-hidden flex flex-col h-full bg-white transition-all relative"
            style={{
                borderRadius: layout.borderRadius.xl,
                boxShadow: shadows.card,
                border: `1px solid ${colors.neutral.border}`,
                transitionDuration: transitions.normal,
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = shadows.cardHover}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = shadows.card}
        >
            {/* Image Section */}
            <div className="relative w-full h-[211px]">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges Overlay */}
                <div className="absolute top-2 left-2 flex gap-2 z-10">
                    <div className="h-[22px] px-3 bg-[#10B981] rounded-[4px] flex items-center justify-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                        <span className="text-[10px] font-bold uppercase text-black">Live</span>
                    </div>
                    {data.isFeatured && (
                        <div className="h-[22px] px-3 bg-[#FFD700] rounded-[4px] flex items-center justify-center">
                            <span className="text-[10px] font-bold uppercase text-black">Featured</span>
                        </div>
                    )}
                </div>

                {/* Favorite Icon */}
                <button className="absolute top-2 right-2 z-20 hover:opacity-80 transition-opacity">
                    <FavoriteIcon />
                </button>

                {/* Timer Overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] h-[27px] bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center gap-2 z-10">
                    <Image
                        src="/images/ui-icons/clock.svg"
                        alt=""
                        width={14}
                        height={14}
                        className="opacity-80 invert brightness-0"
                    />
                    <div className="flex items-center gap-1 text-[10px] font-medium text-white tracking-wide">
                        <span className="font-bold">{displayTime.days}</span> Days
                        <span className="font-bold">{displayTime.hours}</span> Hrs
                        <span className="font-bold">{displayTime.minutes}</span> Mins
                        <span className="font-bold">{displayTime.seconds}</span> Sec
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-3 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-[15px] font-bold text-[#1F1F1F] mb-1 line-clamp-1 group-hover:text-[#136BCF] transition-colors">
                    {data.title}
                </h3>

                {/* Specs */}
                <div className="text-[12px] text-[#9CA3AF] mb-4 flex gap-1 font-normal">
                    <span>{data.year}</span>
                    <span className="mx-1">|</span>
                    <span>{data.mileage}</span>
                    <span className="mx-1">|</span>
                    <span>{data.transmission}</span>
                    <span className="mx-1">|</span>
                    <span>{data.fuelType}</span>
                </div>

                {/* Bids Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-[12px] text-[#707070] mb-1 font-normal">Current Bid</p>
                        <p className="text-[16px] font-bold text-[#1F1F1F]">{currentBid}</p>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#707070] mb-1 font-normal">Your Bid</p>
                        <p className="text-[16px] font-bold text-[#1F1F1F]">{yourBid}</p>
                    </div>
                </div>

                {/* Action Row */}
                <div className="flex items-center gap-3 mt-auto">
                    {/* Rating Box */}
                    <div className="min-w-[72px] h-[40px] border border-[#EBEBEB] rounded-[8px] flex items-center justify-center gap-1.5 bg-white">
                        <div className="relative w-5 h-5">
                            <Image
                                src="/images/body-types/sedan.svg"
                                alt="car"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex items-baseline gap-0.5">
                            <span className="text-[14px] font-bold text-[#136BCF]">{data.rating}</span>
                            <span className="text-[10px] text-[#9CA3AF]">/10</span>
                        </div>
                    </div>

                    {/* Raise Now Button */}
                    <button className="flex-grow h-[40px] bg-[#F5F9FF] text-[#136BCF] text-[14px] font-bold rounded-[8px] hover:bg-[#E0E7FF] transition-colors">
                        Raise Now
                    </button>
                </div>
            </div>
        </div>
    );
};
