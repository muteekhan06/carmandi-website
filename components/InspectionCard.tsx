"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AuctionListing } from "@/types";
import { colors, typography, layout, shadows, transitions } from "@/constants/theme";
import { InspectionGauge } from "@/components/auction/InspectionGauge";

interface InspectionCardProps {
    data: AuctionListing;
}

const getColorScheme = (score: number) => {
    if (score >= 7) return { primary: "#009F2B" };
    if (score >= 4) return { primary: "#F58220" };
    return { primary: "#EF4444" };
};

export const InspectionCard: React.FC<InspectionCardProps> = ({ data }) => {
    const scheme = getColorScheme(data.rating);

    // Scale down the gauge from 196x100 to fit nicely in card (e.g. 70x35)
    // 70px width is about 36% of 196.
    const gaugeWidth = 70;
    const gaugeHeight = 35; // 70/2 approx

    return (
        <div
            className="group overflow-hidden flex flex-col h-full bg-white transition-all border border-[#EBEBEB]"
            style={{
                borderRadius: layout.borderRadius.xl,
                boxShadow: shadows.card,
            }}
        >
            {/* Image Section */}
            <div className="relative w-full h-[200px]">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">

                <div className="flex items-start justify-between mb-4">
                    {/* Title & Specs */}
                    <div className="flex flex-col pr-2 flex-grow">
                        <h3 className="text-[16px] font-bold text-[#1F1F1F] mb-1 line-clamp-1">
                            {data.title}
                        </h3>
                        <div className="text-[12px] text-[#9CA3AF] font-normal flex flex-wrap gap-1">
                            <span>{data.year}</span>
                            <span className="text-[#E5E7EB]">|</span>
                            <span>{data.mileage}</span>
                            <span className="text-[#E5E7EB]">|</span>
                            <span>{data.transmission}</span>
                            <span className="text-[#E5E7EB]">|</span>
                            <span>{data.fuelType}</span>
                        </div>
                    </div>

                    {/* Semi-Circle Gauge Scaled Down */}
                    <div className="relative flex-shrink-0 flex items-end justify-center" style={{ width: gaugeWidth, height: gaugeHeight }}>
                        <div className="absolute top-0 left-0">
                            <InspectionGauge score={data.rating} width={gaugeWidth} height={gaugeHeight} color={scheme.primary} strokeWidth={15} />
                        </div>
                        <div className="relative z-10 flex items-baseline translate-y-[4px]">
                            <span className="text-[16px] font-bold text-[#1F1F1F] leading-none">{data.rating}</span>
                            <span className="text-[8px] text-[#A0A0A0] font-normal ml-0.5">/10</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <button className="mt-auto w-full h-[40px] bg-[#F5F9FF] text-[#136BCF] text-[14px] font-bold rounded-[8px] hover:bg-[#E0E7FF] transition-colors flex items-center justify-center gap-2">
                    View Inspection Report
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="#136BCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
