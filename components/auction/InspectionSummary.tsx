"use client";

import React from "react";
import Image from "next/image";
import { InspectionScore } from "@/constants/auctionData";
import { InspectionGauge } from "./InspectionGauge";

interface InspectionSummaryProps {
    overallScore: number;
    breakdown: InspectionScore[];
}

export const InspectionSummary: React.FC<InspectionSummaryProps> = ({ overallScore, breakdown }) => {
    // Take first 6 items to match the design grid
    // Take first 6 items to match the design grid
    const displayItems = breakdown.slice(0, 6);

    const getColorScheme = (score: number) => {
        if (score >= 7) return { primary: "#009F2B", barFill: "#4BC96D", barBg: "rgba(0,159,43,0.13)" };
        if (score >= 4) return { primary: "#F58220", barFill: "#F58220", barBg: "rgba(245,130,32,0.13)" };
        return { primary: "#EF4444", barFill: "#EF4444", barBg: "rgba(239,68,68,0.13)" };
    };

    const scheme = getColorScheme(overallScore);

    return (
        <div className="bg-white rounded-xl font-outfit mt-12 mb-8">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-[24px] font-semibold text-[#1F1F1F]">Inspection Report Summary</h3>
                <button className="flex items-center gap-2 bg-[#F5FAFF] hover:bg-[#EBF5FF] text-[#136BCF] text-[14px] font-normal px-4 h-[35px] rounded-[8px] transition-colors">
                    View Inspection report <span className="text-[18px] leading-[0] mb-[2px]">&rsaquo;</span>
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-[55px] items-center px-0">
                {/* Semi-Circle Gauge */}
                <div className="relative w-[196px] h-[100px] flex-shrink-0 flex items-end justify-center">
                    <div className="absolute top-0 left-0">
                        <InspectionGauge score={overallScore} color={scheme.primary} />
                    </div>
                    <div className="relative z-10 flex items-baseline translate-y-[10px]">
                        <span className="text-[48px] font-bold text-[#1F1F1F] leading-none">{overallScore}</span>
                        <span className="text-[20px] text-[#A0A0A0] font-normal ml-1">/10</span>
                    </div>
                </div>

                {/* Bars Grid */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-x-[38px] gap-y-[24px]">
                    {displayItems.map((item, idx) => (
                        <div key={idx} className="w-full">
                            <div className="flex justify-between items-center mb-2.5">
                                <span className="text-[16px] font-normal text-[#1F1F1F]">{item.category}</span>
                                <span className="text-[16px] font-bold text-[#1F1F1F]">{Math.round((item.score / item.total) * 100)}%</span>
                            </div>
                            <div className="w-full h-[6px] rounded-full overflow-hidden" style={{ backgroundColor: scheme.barBg }}>
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${(item.score / item.total) * 100}%`,
                                        backgroundColor: scheme.barFill
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
