"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Inspection check points data
 */
const INSPECTION_POINTS = [
    { id: "interior", label: "Interior", image: "/images/inspection/interior-thumb.jpg" },
    { id: "engine", label: "Engine", image: "/images/inspection/engine-thumb.jpg" },
    { id: "exterior", label: "Exterior", image: "/images/inspection/exterior-thumb.jpg" },
    { id: "suspension", label: "Suspension", image: "/images/inspection/suspension-thumb.jpg" },
    { id: "brakes", label: "Brakes", image: "/images/inspection/brakes-thumb.jpg" },
    { id: "electrical", label: "Electrical", image: "/images/inspection/electrical-thumb.jpg" },
];

/**
 * WhatWeCheckSection - Interactive car inspection visualization
 * Shows a transparent car with clickable inspection points
 */
export function WhatWeCheckSection() {
    const [activePoint, setActivePoint] = useState("interior");
    const activeData = INSPECTION_POINTS.find(p => p.id === activePoint) || INSPECTION_POINTS[0];

    return (
        <section className="w-full py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
            <div className="w-full mx-auto px-5 sm:px-4 md:px-6" style={{ maxWidth: "1360px" }}>

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-7 md:mb-8">
                    {/* Left - Title & Description */}
                    <div className="max-w-full md:max-w-[700px]">
                        <h2 className="text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1F1F1F] mb-2 sm:mb-3">
                            What We Check
                        </h2>
                        <p className="text-[13px] sm:text-[14px] text-[#757575] leading-relaxed">
                            Our certified inspectors examine over 200 checkpoints across every major system of the vehicle.
                            From engine performance to interior condition, we leave no detail unchecked to give you complete
                            confidence in your purchase.
                        </p>
                    </div>

                    {/* Right - Action Buttons - Hidden on Mobile, Shown on Desktop */}
                    <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                        <Link
                            href="/images/inspection/sample-report.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-[#136BCF] text-[#136BCF] rounded-lg font-medium text-[13px] sm:text-[14px] hover:bg-[#F0F7FF] active:bg-[#E5F0FF] transition-colors touch-manipulation"
                        >
                            <span className="whitespace-nowrap">View Sample Report</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:w-[16px] sm:h-[16px]" />
                        </Link>
                        <Link
                            href="/search"
                            className="flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#153481] text-white rounded-lg font-medium text-[13px] sm:text-[14px] hover:bg-[#0D245B] active:bg-[#0A1D4A] transition-colors touch-manipulation"
                        >
                            Book Inspection
                        </Link>
                    </div>
                </div>

                {/* Car Visualization Container */}
                <div className="relative w-full bg-[#F5F8FC] rounded-xl sm:rounded-2xl overflow-hidden mb-6 md:mb-0" style={{ minHeight: "240px" }}>

                    {/* X-Ray Car Image */}
                    <div className="relative w-full h-[240px] xs:h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] flex items-center justify-center">
                        <div className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] h-full">
                            <Image
                                src="/images/inspection/car-xray.svg"
                                alt="Car inspection visualization"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 600px, 700px"
                            />
                        </div>
                    </div>
                </div>

                {/* Action Buttons - Shown on Mobile only, Below Image */}
                <div className="flex flex-row md:hidden items-center gap-2 w-full">
                    <Link
                        href="/images/inspection/sample-report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-2 py-3 bg-white border border-[#136BCF] text-[#136BCF] rounded-lg font-medium text-[13px] transition-colors touch-manipulation"
                    >
                        <span className="whitespace-nowrap">Sample Report</span>
                        <ArrowUpRight size={14} />
                    </Link>
                    <Link
                        href="/search"
                        className="flex-1 flex items-center justify-center px-2 py-3 bg-[#153481] text-white rounded-lg font-medium text-[13px] transition-colors touch-manipulation"
                    >
                        Book Inspection
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default WhatWeCheckSection;
