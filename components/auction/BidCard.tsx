"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DetailedAuction } from "@/constants/auctionData";
import { Minus, Plus } from "lucide-react";

interface BidCardProps {
    auction: DetailedAuction;
}

export const BidCard: React.FC<BidCardProps> = ({ auction }) => {
    const calculateTimeLeft = (endTime: string) => {
        const difference = +new Date(endTime) - +new Date();
        if (difference > 0) {
            return {
                d: Math.floor(difference / (1000 * 60 * 60 * 24)),
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60),
            };
        }
        return { d: 0, h: 0, m: 0, s: 0 };
    };

    const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number }>({ d: 0, h: 0, m: 0, s: 0 });
    const [bidAmount, setBidAmount] = useState<number | "">("");

    useEffect(() => {
        // Calculate immediately on mount to show correct time
        setTimeLeft(calculateTimeLeft(auction.endTime));

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(auction.endTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [auction.endTime]);

    const adjustBid = (amount: number) => {
        setBidAmount((prev) => {
            const current = typeof prev === "number" ? prev : 0;
            return Math.max(0, current + amount);
        });
    };

    return (
        <div className="bg-white border border-[#EBEBEB] rounded-[12px] p-6 font-outfit shadow-[0px_4px_24px_rgba(0,0,0,0.02)] h-fit">
            {/* Header: Current Bid & Live Badge */}
            <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                    <span className="text-[15px] text-[#707070] mb-1">Current Bid</span>
                    <h2 className="text-[36px] font-bold text-[#1F1F1F] leading-none tracking-tight">
                        <span className="text-[20px] font-normal text-[#1F1F1F] mr-2">PKR</span>
                        {auction.price.toLocaleString()}
                    </h2>
                </div>
                <div className="flex flex-col items-end gap-2">
                    {auction.isLive && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#6EF0A0] text-[#1F1F1F] text-[13px] font-bold rounded-md">
                            <div className="w-1.5 h-1.5 bg-[#1F1F1F] rounded-full animate-pulse" />
                            Live
                        </div>
                    )}
                    <button className="text-[#136BCF] text-[14px] font-normal hover:underline">
                        View Bid History
                    </button>
                </div>
            </div>

            {/* Timer Box */}
            <div className="mt-7 border border-[#EB722E]/25 rounded-[12px] p-5 mb-7 bg-white">
                <div className="flex items-center gap-2 mb-4 text-[#383838]">
                    <Image src="/images/ui-icons/clock.svg" alt="Clock" width={22} height={22} className="opacity-80" />
                    <span className="text-[16px] font-medium text-[#383838]">Auction Will End In</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                    <TimeBox value={timeLeft.d} label="Days" />
                    <span className="text-[#E0E0E0] text-xl pb-1">:</span>
                    <TimeBox value={timeLeft.h} label="Hrs" />
                    <span className="text-[#E0E0E0] text-xl pb-1">:</span>
                    <TimeBox value={timeLeft.m} label="Mins" />
                    <span className="text-[#E0E0E0] text-xl pb-1">:</span>
                    <TimeBox value={timeLeft.s} label="Sec" />
                </div>
            </div>

            {/* Bid Input Section */}
            <div className="flex gap-3 mb-5">
                <div className="flex-1 relative">
                    <input
                        type="number"
                        placeholder="Place your Bid.."
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full h-[56px] px-4 bg-white border border-[#EBEBEB] rounded-[8px] text-[#1F1F1F] placeholder:text-[#707070] focus:outline-none focus:border-[#136BCF] text-[16px]"
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => adjustBid(-10000)}
                        className="w-[56px] h-[56px] flex items-center justify-center bg-[#F0F5FA] rounded-[8px] text-[#383838] hover:bg-[#D0E6FA] transition-colors"
                    >
                        <Minus size={24} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={() => adjustBid(10000)}
                        className="w-[56px] h-[56px] flex items-center justify-center bg-[#F0F5FA] rounded-[8px] text-[#383838] hover:bg-[#D0E6FA] transition-colors"
                    >
                        <Plus size={24} strokeWidth={1.5} />
                    </button>
                </div>
            </div>

            {/* Quick Increments */}
            <div className="flex justify-between gap-3 mb-6 overflow-x-auto pb-1 scrollbar-none">
                {[10000, 20000, 30000, 40000, 50000].map((inc) => (
                    <button
                        key={inc}
                        onClick={() => adjustBid(inc)}
                        className="flex-1 h-[38px] rounded-[10px] text-[13px] text-[#707070] bg-white hover:bg-gray-50 transition-colors whitespace-nowrap text-center font-medium"
                        style={{ boxShadow: "inset 0px 0px 4px rgba(0,0,0,0.12)" }}
                    >
                        +{inc.toLocaleString()}
                    </button>
                ))}
            </div>

            {/* Helper Text */}
            <p className="text-[14px] text-[#707070] text-center mb-6 leading-tight whitespace-nowrap">
                Your bid must be higher than the current bid and less than PKR 1,000,000
            </p>

            {/* Place Bid Button */}
            <button className="w-full hover:opacity-95 transition-opacity">
                <Image src="/images/ui-icons/place-bid-button.svg" alt="Place Bid" width={435} height={54} className="w-full h-auto" />
            </button>
        </div>
    );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex items-center justify-center gap-1.5 border border-[#EBEBEB] rounded-[8px] h-[52px] w-full flex-1 shadow-sm px-1">
        <span className="text-[18px] font-bold text-[#1F1F1F]">
            {value.toString().padStart(2, '0')}
        </span>
        <span className="text-[12px] text-[#707070] font-normal translate-y-[1px]">{label}</span>
    </div>
);
