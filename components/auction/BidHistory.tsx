"use client";

import React from "react";
import { BidHistoryItem } from "@/constants/auctionData";
import { Calendar, Clock } from "lucide-react";

interface BidHistoryProps {
    history: BidHistoryItem[];
}

export const BidHistory: React.FC<BidHistoryProps> = ({ history }) => {

    // masked name helper
    const maskName = (name: string) => {
        // e.g. "Ali K." -> "Ali**"
        // e.g. "User88" -> "Use**"
        if (!name) return "***";
        // If the name is short, just append **
        // Strategy from screenshot: "Bmm**". First 3 chars?
        const prefix = name.length > 3 ? name.substring(0, 3) : name;
        return `${prefix}**`;
    };

    return (
        <div className="bg-white rounded-[12px] font-outfit mt-12">
            <h3 className="text-[24px] font-semibold text-[#1F1F1F] mb-6">Bid History</h3>

            <div className="bg-white p-2 md:p-6 rounded-[12px] border border-[#F0F0F0] shadow-sm">

                {/* Header Row */}
                <div className="grid grid-cols-[50px_1fr_1.2fr_1.8fr] gap-4 mb-4 px-4">
                    <div className="text-[12px] font-medium text-[#9A9A9A] uppercase tracking-wider">#</div>
                    <div className="text-[12px] font-medium text-[#9A9A9A] uppercase tracking-wider">Name</div>
                    <div className="text-[12px] font-medium text-[#9A9A9A] uppercase tracking-wider">Bid Price</div>
                    <div className="text-[12px] font-medium text-[#9A9A9A] uppercase tracking-wider">Date & Time</div>
                </div>

                {/* Dashed Separator */}
                <div className="border-b border-dashed border-[#E0E0E0] mb-6 mx-2"></div>

                {/* Rows */}
                <div className="flex flex-col gap-6">
                    {history.map((bid, index) => (
                        <div key={bid.id} className="grid grid-cols-[50px_1fr_1.2fr_1.8fr] gap-4 items-center px-4 hover:bg-[#F9FAFB] py-2 rounded-lg transition-colors">
                            {/* # */}
                            <div className="text-[16px] text-[#383838] font-normal">
                                {index + 1}
                            </div>

                            {/* Name */}
                            <div className="text-[16px] text-[#383838] font-normal">
                                {maskName(bid.user)}
                            </div>

                            {/* Price */}
                            <div className="text-[16px] text-[#383838] font-normal">
                                PKR {bid.amount.toLocaleString()}
                            </div>

                            {/* Date & Time */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                                <div className="flex items-center gap-2 text-[#505050] text-[14px]">
                                    <Calendar size={14} className="text-[#9A9A9A]" />
                                    <span>{bid.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#505050] text-[14px]">
                                    <Clock size={14} className="text-[#9A9A9A]" />
                                    <span>{bid.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {history.length === 0 && (
                        <div className="text-center py-8 text-[#9A9A9A]">
                            No bids yet. Be the first!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
